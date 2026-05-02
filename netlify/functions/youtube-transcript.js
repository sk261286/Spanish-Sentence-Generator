function extractVideoId(input) {
  const text = String(input || "").trim();

  if (/^[a-zA-Z0-9_-]{11}$/.test(text)) {
    return text;
  }

  try {
    const url = new URL(text);
    if (url.hostname.includes("youtu.be")) {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }
    if (url.searchParams.get("v")) {
      return url.searchParams.get("v");
    }
    const shortsMatch = url.pathname.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
    return shortsMatch ? shortsMatch[1] : "";
  } catch (error) {
    return "";
  }
}

function decodeHtml(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractBalancedJson(text, marker) {
  const markerIndex = text.indexOf(marker);
  if (markerIndex === -1) {
    return "";
  }

  const startIndex = text.indexOf("{", markerIndex);
  if (startIndex === -1) {
    return "";
  }

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = startIndex; index < text.length; index += 1) {
    const char = text[index];

    if (inString) {
      escaped = !escaped && char === "\\";
      if (char === '"' && !escaped) {
        inString = false;
      } else if (char !== "\\") {
        escaped = false;
      }
      continue;
    }

    if (char === '"') {
      inString = true;
    } else if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        return text.slice(startIndex, index + 1);
      }
    }
  }

  return "";
}

function getLanguagePrefix(targetLanguage) {
  const map = {
    spanish: "es",
    french: "fr",
    italian: "it"
  };
  return map[targetLanguage] || targetLanguage || "";
}

function chooseCaptionTrack(captionTracks, requestedLanguage) {
  const prefix = getLanguagePrefix(requestedLanguage);

  if (!Array.isArray(captionTracks) || !captionTracks.length) {
    return null;
  }

  return captionTracks.find((track) => track.languageCode === prefix)
    || captionTracks.find((track) => track.languageCode?.startsWith(prefix))
    || captionTracks.find((track) => track.kind !== "asr")
    || captionTracks[0];
}

function parseTranscriptEvents(data) {
  const events = Array.isArray(data.events) ? data.events : [];

  return events
    .map((event) => {
      const text = Array.isArray(event.segs)
        ? event.segs.map((seg) => seg.utf8 || "").join("").replace(/\s+/g, " ").trim()
        : "";

      return {
        start: Number(event.tStartMs || 0) / 1000,
        duration: Number(event.dDurationMs || 2500) / 1000,
        text
      };
    })
    .filter((line) => line.text);
}

async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed." }) };
  }

  try {
    const requestBody = JSON.parse(event.body || "{}");
    const videoId = extractVideoId(requestBody.url || requestBody.videoId);
    const language = requestBody.language || requestBody.targetLanguage || "spanish";

    if (!videoId) {
      return { statusCode: 400, body: JSON.stringify({ error: "Paste a valid YouTube link or video id." }) };
    }

    const watchResponse = await fetch(`https://www.youtube.com/watch?v=${videoId}&hl=en`, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });
    const html = await watchResponse.text();
    const playerJson = extractBalancedJson(html, "ytInitialPlayerResponse");

    if (!playerJson) {
      return { statusCode: 404, body: JSON.stringify({ error: "Could not read this video's caption metadata." }) };
    }

    const playerData = JSON.parse(playerJson);
    const captionTracks = playerData?.captions?.playerCaptionsTracklistRenderer?.captionTracks || [];
    const track = chooseCaptionTrack(captionTracks, language);

    if (!track?.baseUrl) {
      return { statusCode: 404, body: JSON.stringify({ error: "No captions were found for this video. Paste a transcript instead." }) };
    }

    const transcriptUrl = `${decodeHtml(track.baseUrl)}&fmt=json3`;
    const transcriptResponse = await fetch(transcriptUrl, { headers: { "User-Agent": "Mozilla/5.0" } });

    if (!transcriptResponse.ok) {
      return { statusCode: 502, body: JSON.stringify({ error: "Could not download this video's captions." }) };
    }

    const transcriptData = await transcriptResponse.json();
    const lines = parseTranscriptEvents(transcriptData);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        videoId,
        languageCode: track.languageCode || "",
        trackName: track.name?.simpleText || track.name?.runs?.map((run) => run.text).join("") || "YouTube captions",
        lines
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Could not import YouTube captions.",
        details: error.message
      })
    };
  }
}

module.exports = { handler };
