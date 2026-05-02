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

function buildConversationText(turns) {
  return turns
    .map((turn) => String(turn.spanish || "").trim())
    .filter(Boolean)
    .join("\n\n");
}

function getVoiceId(voiceChoice, targetLanguage = "spanish") {
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
        details: "Add ELEVENLABS_API_KEY on the server before using conversation MP3 downloads."
      })
    };
  }

  try {
    const requestBody = JSON.parse(event.body || "{}");
    const turns = Array.isArray(requestBody.turns) ? requestBody.turns.slice(0, 80) : [];
    const text = buildConversationText(turns);
    const voiceId = getVoiceId(requestBody.voice, requestBody.targetLanguage);

    if (!text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No conversation text was provided." })
      };
    }

    if (text.length > 5000) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Conversation is too long.",
          details: "Split this into a shorter conversation before downloading one MP3."
        })
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

      console.error("ElevenLabs conversation audio request failed safely:", {
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
        "Cache-Control": "no-store"
      },
      body: Buffer.from(audioBuffer).toString("base64")
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Could not generate conversation audio.",
        details: error.message
      })
    };
  }
}

module.exports = { handler };
