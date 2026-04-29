function classifyElevenLabsSttError(statusCode, errorText) {
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
      details: "Too many transcription requests were sent too quickly. Please wait a moment and try again."
    };
  }

  if (lowerText.includes("quota") || lowerText.includes("credit") || lowerText.includes("billing")) {
    return {
      error: "ElevenLabs quota reached.",
      details: "The ElevenLabs account hit a quota, credit, or billing limit."
    };
  }

  return {
    error: "ElevenLabs transcription failed.",
    details: errorText || "The transcription service returned an unexpected error."
  };
}

async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." })
    };
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  const modelId = process.env.ELEVENLABS_STT_MODEL_ID || "scribe_v2";

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "ELEVENLABS_API_KEY is missing.",
        details: "Add ELEVENLABS_API_KEY on the server before using microphone transcription."
      })
    };
  }

  try {
    const requestBody = JSON.parse(event.body || "{}");
    const audioBase64 = requestBody.audioBase64 || "";
    const mimeType = requestBody.mimeType || "audio/webm";
    const fileName = requestBody.fileName || "chat-mic-audio.webm";

    if (!audioBase64) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No microphone audio was provided." })
      };
    }

    const audioBuffer = Buffer.from(audioBase64, "base64");
    const formData = new FormData();
    const audioBlob = new Blob([audioBuffer], { type: mimeType });

    formData.append("model_id", modelId);
    formData.append("file", audioBlob, fileName);

    let elevenResponse;

    try {
      elevenResponse = await fetch("https://api.elevenlabs.io/v1/speech-to-text", {
        method: "POST",
        headers: {
          "xi-api-key": apiKey
        },
        body: formData
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
      const classifiedError = classifyElevenLabsSttError(elevenResponse.status, errorText);

      console.error("ElevenLabs transcription failed safely:", {
        statusCode: elevenResponse.status,
        error: classifiedError.error,
        details: classifiedError.details
      });

      return {
        statusCode: elevenResponse.status,
        body: JSON.stringify(classifiedError)
      };
    }

    const responseData = await elevenResponse.json();
    const transcript = (responseData.text || "").trim();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: transcript,
        languageCode: responseData.language_code || ""
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Could not transcribe microphone audio.",
        details: error.message
      })
    };
  }
}

module.exports = { handler };
