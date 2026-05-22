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
    if (voiceChoice === "french-male") {
      return process.env.ELEVENLABS_FRENCH_MALE_VOICE_ID || "fMikjf4u2qBd4gPl7yuw";
    }

    if (voiceChoice === "french-female") {
      return process.env.ELEVENLABS_FRENCH_FEMALE_VOICE_ID || "lvQdCgwZfBuOzxyV5pxu";
    }

    return voiceChoice === "alternative"
      ? process.env.ELEVENLABS_FRENCH_ALT_VOICE_ID || process.env.ELEVENLABS_FRENCH_VOICE_ID || "ZCh4e9eZSUf41K4cmCEL"
      : process.env.ELEVENLABS_FRENCH_VOICE_ID || process.env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
  }

  if (targetLanguage === "italian") {
    if (voiceChoice === "italian-male") {
      return process.env.ELEVENLABS_ITALIAN_MALE_VOICE_ID || "DTGwzA4YLrWB1FAT6Uas";
    }

    if (voiceChoice === "italian-female") {
      return process.env.ELEVENLABS_ITALIAN_FEMALE_VOICE_ID || "O6T26EHdsgsDb06fVwd6";
    }

    return voiceChoice === "alternative"
      ? process.env.ELEVENLABS_ITALIAN_ALT_VOICE_ID || process.env.ELEVENLABS_ITALIAN_VOICE_ID || "ZCh4e9eZSUf41K4cmCEL"
      : process.env.ELEVENLABS_ITALIAN_VOICE_ID || process.env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
  }

  if (voiceChoice === "alternative") {
    return process.env.ELEVENLABS_ALT_VOICE_ID || "ZCh4e9eZSUf41K4cmCEL";
  }

  return process.env.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
}

async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." })
    };
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  const modelId = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "ELEVENLABS_API_KEY is missing.",
        details: "Add ELEVENLABS_API_KEY on the server before using high-quality voice audio."
      })
    };
  }

  try {
    const requestBody = JSON.parse(event.body || "{}");
    const text = (requestBody.text || "").trim();
    const voiceId = getVoiceId(requestBody.voice, requestBody.targetLanguage);

    if (!text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No Spanish text was provided." })
      };
    }

    let elevenResponse;

    try {
      const streamingUrl = new URL(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`);
      streamingUrl.searchParams.set("output_format", "mp3_44100_128");

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
    } catch (networkError) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Network error.",
          details: "The app could not reach ElevenLabs."
        })
      };
    }

    if (!elevenResponse.ok) {
      const errorText = await elevenResponse.text();
      const classifiedError = classifyElevenLabsError(elevenResponse.status, errorText);

      console.error("ElevenLabs request failed safely:", {
        statusCode: elevenResponse.status,
        error: classifiedError.error,
        details: classifiedError.details
      });

      return {
        statusCode: elevenResponse.status,
        body: JSON.stringify(classifiedError)
      };
    }

    const audioBuffer = await elevenResponse.arrayBuffer();

    return {
      statusCode: 200,
      isBase64Encoded: true,
      headers: {
        "Content-Type": "audio/mpeg",
        "X-ElevenLabs-Voice-Id": voiceId,
        "Cache-Control": "public, max-age=31536000, immutable"
      },
      body: Buffer.from(audioBuffer).toString("base64")
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Could not generate voice audio.",
        details: error.message
      })
    };
  }
}

module.exports = { handler };
