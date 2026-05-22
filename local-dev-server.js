const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const rootDir = __dirname;
const host = "127.0.0.1";
const port = 8888;

loadDotEnv();

const { handler: generateSentenceHandler } = require("./netlify/functions/generate-sentence.js");
const { handler: languageCoachHandler } = require("./netlify/functions/language-coach.js");
const { handler: generateSpanishAudioHandler } = require("./netlify/functions/generate-spanish-audio.js");
const { handler: generateConversationAudioHandler } = require("./netlify/functions/generate-conversation-audio.js");
const { handler: transcribeChatAudioHandler } = require("./netlify/functions/transcribe-chat-audio.js");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

const apiHandlers = {
  "/api/generate-sentence": generateSentenceHandler,
  "/api/language-coach": languageCoachHandler,
  "/api/generate-spanish-audio": generateSpanishAudioHandler,
  "/api/generate-conversation-audio": generateConversationAudioHandler,
  "/api/transcribe-chat-audio": transcribeChatAudioHandler
};

function classifyElevenLabsStreamError(statusCode, errorText) {
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

function getElevenLabsVoiceId(voiceChoice, targetLanguage = "spanish") {
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

function loadDotEnv() {
  const envPath = path.join(rootDir, ".env");

  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (!trimmedLine || trimmedLine.startsWith("#")) {
      return;
    }

    const equalIndex = trimmedLine.indexOf("=");

    if (equalIndex === -1) {
      return;
    }

    const key = trimmedLine.slice(0, equalIndex).trim();
    const value = trimmedLine.slice(equalIndex + 1).trim();

    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  });
}

function collectRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function sendFunctionResponse(res, functionResponse) {
  const statusCode = functionResponse.statusCode || 200;
  const headers = functionResponse.headers || {};
  const isBase64Encoded = Boolean(functionResponse.isBase64Encoded);

  Object.entries(headers).forEach(([key, value]) => {
    res.setHeader(key, value);
  });

  res.statusCode = statusCode;

  if (functionResponse.body === undefined || functionResponse.body === null) {
    res.end("");
    return;
  }

  if (isBase64Encoded) {
    res.end(Buffer.from(functionResponse.body, "base64"));
    return;
  }

  res.end(functionResponse.body);
}

function serveStaticFile(reqPath, res) {
  const safePath = reqPath === "/" ? "/index.html" : reqPath;
  const filePath = path.join(rootDir, decodeURIComponent(safePath));

  if (!filePath.startsWith(rootDir)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, fileBuffer) => {
    if (error) {
      if (safePath !== "/index.html") {
        serveStaticFile("/index.html", res);
        return;
      }

      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const mimeType = mimeTypes[extension] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": mimeType,
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "Pragma": "no-cache",
      "Expires": "0"
    });
    res.end(fileBuffer);
  });
}

async function handleApiRequest(req, res, pathname) {
  if (pathname === "/api/stream-spanish-audio") {
    await handleStreamingSpanishAudio(req, res);
    return;
  }

  const handler = apiHandlers[pathname];

  if (!handler) {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "Unknown API route." }));
    return;
  }

  try {
    const bodyBuffer = await collectRequestBody(req);
    const functionEvent = {
      path: pathname,
      httpMethod: req.method,
      headers: req.headers,
      body: bodyBuffer.length ? bodyBuffer.toString("utf8") : "",
      isBase64Encoded: false
    };

    const functionResponse = await handler(functionEvent);
    sendFunctionResponse(res, functionResponse || {});
  } catch (error) {
    console.error("Local API request failed:", error);
    res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
      error: "Local server error.",
      details: error.message
    }));
  }
}

async function handleStreamingSpanishAudio(req, res) {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: "Method not allowed." }));
    return;
  }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  const modelId = process.env.ELEVENLABS_MODEL_ID || "eleven_multilingual_v2";

  if (!apiKey) {
    res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({
      error: "ELEVENLABS_API_KEY is missing.",
      details: "Add ELEVENLABS_API_KEY on the server before using high-quality voice audio."
    }));
    return;
  }

  try {
    const bodyBuffer = await collectRequestBody(req);
    const requestBody = bodyBuffer.length ? JSON.parse(bodyBuffer.toString("utf8")) : {};
    const text = String(requestBody.text || "").trim();
    const voiceId = getElevenLabsVoiceId(requestBody.voice, requestBody.targetLanguage);

    if (!text) {
      res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "No Spanish text was provided." }));
      return;
    }

    const streamingUrl = new URL(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`);
    streamingUrl.searchParams.set("output_format", "mp3_44100_128");

    const elevenResponse = await fetch(streamingUrl, {
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

    if (!elevenResponse.ok) {
      const errorText = await elevenResponse.text();
      const classifiedError = classifyElevenLabsStreamError(elevenResponse.status, errorText);

      res.writeHead(elevenResponse.status, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(classifiedError));
      return;
    }

    res.writeHead(200, {
      "Content-Type": "audio/mpeg",
      "X-ElevenLabs-Voice-Id": voiceId,
      "Cache-Control": "no-store"
    });

    if (!elevenResponse.body) {
      res.end();
      return;
    }

    const reader = elevenResponse.body.getReader();

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      res.write(Buffer.from(value));
    }

    res.end();
  } catch (error) {
    console.error("Local streaming audio request failed:", error);

    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    }

    res.end(JSON.stringify({
      error: "Local streaming audio error.",
      details: error.message
    }));
  }
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url);
  const pathname = parsedUrl.pathname || "/";

  if (pathname.startsWith("/api/")) {
    await handleApiRequest(req, res, pathname);
    return;
  }

  serveStaticFile(pathname, res);
});

server.listen(port, host, () => {
  console.log(`Local app server ready: http://${host}:${port}`);
  console.log("Loaded local API routes:");
  console.log("- /api/generate-sentence");
  console.log("- /api/language-coach");
  console.log("- /api/generate-spanish-audio");
  console.log("- /api/generate-conversation-audio");
  console.log("- /api/transcribe-chat-audio");
  console.log("- /api/stream-spanish-audio");
});
