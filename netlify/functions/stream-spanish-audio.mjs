function classifyElevenLabsError(statusCode, errorText) {
  const lowerText = (errorText || "").toLowerCase();

  if (statusCode === 401 || lowerText.includes("invalid api key") || lowerText.includes("unauthorized")) {
    return {
      error: "Wrong ElevenLabs API key.",
      details: "The ElevenLabs API key looks invalid. Please replace ELEVENLABS_API_KEY on the server."
    };
  }

  if (statusCode === 429 || lowerText.includes("rate limit")) {
    return {
      error: "ElevenLabs rate limit reached.",
      details: "Too many audio requests were sent too quickly. Please wait a moment and try again."
    };
  }

  if (lowerText.includes("quota") || lowerText.includes("credit") || lowerText.includes("billing")) {
    return {
      error: "ElevenLabs quota reached.",
      details: "The ElevenLabs account hit a quota, credit, or billing limit."
    };
  }

  return {
    error: "ElevenLabs audio request failed.",
    details: errorText || "The audio service returned an unexpected error."
  };
}

function getVoiceId(voiceChoice, targetLanguage = "spanish") {
  if (targetLanguage === "english") {
    if (voiceChoice === "english-mlso") {
      return process.env.ELEVENLABS_ENGLISH_MLSO_VOICE_ID || "MLSOvrM2Tyi3okEfyOiI";
    }

    if (voiceChoice === "english-female-lcmy") {
      return process.env.ELEVENLABS_ENGLISH_FEMALE_LCMY_VOICE_ID || "lcMyyd2HUfFzxdCaC4Ta";
    }

    return voiceChoice === "alternative"
      ? process.env.ELEVENLABS_ENGLISH_ALT_VOICE_ID || process.env.ELEVENLABS_ENGLISH_VOICE_ID || process.env.ELEVENLABS_ALT_VOICE_ID || "ZCh4e9eZSUf41K4cmCEL"
      : process.env.ELEVENLABS_ENGLISH_VOICE_ID || process.env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
  }

  if (targetLanguage === "french") {
    return voiceChoice === "alternative"
      ? process.env.ELEVENLABS_FRENCH_ALT_VOICE_ID || process.env.ELEVENLABS_FRENCH_VOICE_ID || "ZCh4e9eZSUf41K4cmCEL"
      : process.env.ELEVENLABS_FRENCH_VOICE_ID || process.env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
  }

  if (targetLanguage === "italian") {
    return voiceChoice === "alternative"
      ? process.env.ELEVENLABS_ITALIAN_ALT_VOICE_ID || process.env.ELEVENLABS_ITALIAN_VOICE_ID || "ZCh4e9eZSUf41K4cmCEL"
      : process.env.ELEVENLABS_ITALIAN_VOICE_ID || process.env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
  }

  if (voiceChoice === "alternative") {
    return process.env.ELEVENLABS_ALT_VOICE_ID || "ZCh4e9eZSUf41K4cmCEL";
  }

  return process.env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
}

export default async function handler(request) {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed." }, { status: 405 });
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  const modelId = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";

  if (!apiKey) {
    return Response.json({
      error: "ELEVENLABS_API_KEY is missing.",
      details: "Add ELEVENLABS_API_KEY on the server before using high-quality voice audio."
    }, { status: 500 });
  }

  let requestBody = {};

  try {
    requestBody = await request.json();
  } catch (error) {
    requestBody = {};
  }

  const text = String(requestBody.text || "").trim();
  const voiceId = getVoiceId(requestBody.voice, requestBody.targetLanguage);

  if (!text) {
    return Response.json({ error: "No Spanish text was provided." }, { status: 400 });
  }

  const streamingUrl = new URL(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`);
  streamingUrl.searchParams.set("output_format", "mp3_44100_128");

  let elevenResponse;

  try {
    elevenResponse = await fetch(streamingUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "xi-api-key": apiKey
      },
      body: JSON.stringify({
        text,
        model_id: modelId,
        voice_settings: {
          stability: 0.45,
          similarity_boost: 0.8
        }
      })
    });
  } catch (error) {
    return Response.json({
      error: "Network error.",
      details: "The app could not reach ElevenLabs."
    }, { status: 500 });
  }

  if (!elevenResponse.ok) {
    const errorText = await elevenResponse.text();
    const classifiedError = classifyElevenLabsError(elevenResponse.status, errorText);

    console.error("ElevenLabs streaming request failed safely:", {
      statusCode: elevenResponse.status,
      error: classifiedError.error,
      details: classifiedError.details
    });

    return Response.json(classifiedError, { status: elevenResponse.status });
  }

  return new Response(elevenResponse.body, {
    status: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "X-ElevenLabs-Voice-Id": voiceId,
      "Cache-Control": "no-store"
    }
  });
}
