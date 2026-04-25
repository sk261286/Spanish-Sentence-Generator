// This Netlify function keeps the OpenAI API key on the server side,
// so it does not get exposed in the browser.
async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." })
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "OPENAI_API_KEY is missing." })
    };
  }

  try {
    const requestBody = JSON.parse(event.body || "{}");
    const difficulty = requestBody.difficulty || "beginner";
    const topic = requestBody.topic || "daily life";
    const tone = requestBody.tone || "informal";

    const topicInstruction = topic === "all"
      ? "Choose one topic from: daily life, gym/fitness, food, travel, work, sleep."
      : `Use this topic: ${topic}.`;

    const toneInstruction = tone === "all"
      ? "Choose either formal or informal, then return the chosen tone in the JSON."
      : `Use this tone: ${tone}.`;

    const prompt = `
Generate exactly one natural Spanish sentence from Spain for a language learner.

Rules:
- Difficulty: ${difficulty}
- ${topicInstruction}
- ${toneInstruction}
- Return natural Spain Spanish, not Latin American wording.
- Keep it useful for practice.
- Return one English translation.
- Reply with JSON only.

Use this JSON shape:
{
  "spanish": "string",
  "english": "string",
  "difficulty": "string",
  "topic": "string",
  "tone": "string"
}
`.trim();

    const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        input: prompt
      })
    });

    if (!openAiResponse.ok) {
      const errorText = await openAiResponse.text();
      console.error("OpenAI request failed:", errorText);
      return {
        statusCode: openAiResponse.status,
        body: JSON.stringify({ error: "OpenAI request failed.", details: errorText })
      };
    }

    const responseData = await openAiResponse.json();
    const rawText = (responseData.output_text || "").trim();
    const cleanedText = rawText.startsWith("```")
      ? rawText
          .split("\n")
          .filter((line) => !line.startsWith("```"))
          .join("\n")
          .trim()
      : rawText;

    const sentence = JSON.parse(cleanedText);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sentence })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Could not generate a sentence.",
        details: error.message
      })
    };
  }
}

module.exports = { handler };
