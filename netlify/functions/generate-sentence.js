const BANNED_WORDS = [
  "workar",
  "parquear",
  "textear",
  "computadora",
  "carro",
  "manejar"
];

const QUALITY_WARNING_WORDS = [
  "workar",
  "parquear",
  "textear",
  "computadora",
  "carro",
  "manejar",
  "parqueadero",
  "celular"
];

const SYSTEM_PROMPT = `You are a native Spanish teacher from Spain.

Generate natural, idiomatic Spanish from Spain for language learners.

Rules:
- Use Spanish from Spain only.
- Do not use Spanglish.
- Do not invent hybrid verbs such as "workar".
- Do not use Latin American vocabulary unless the user specifically asks for it.
- For "to work", use "trabajar" or informal Spain Spanish "currar".
- For "car", use "coche", not "carro".
- For "to drive", use "conducir", not "manejar".
- For "computer", use "ordenador", not "computadora".
- For "to park", use "aparcar", not "parquear".
- The final sentence must sound like something a native Spanish speaker from Spain would naturally say.
- If the first version sounds unnatural, rewrite it before returning it.`;

function extractResponseText(responseData) {
  if (responseData.output_text && responseData.output_text.trim()) {
    return responseData.output_text.trim();
  }

  if (!Array.isArray(responseData.output)) {
    return "";
  }

  const textParts = [];

  responseData.output.forEach((item) => {
    if (!Array.isArray(item.content)) {
      return;
    }

    item.content.forEach((contentItem) => {
      if (contentItem.type === "output_text" && contentItem.text) {
        textParts.push(contentItem.text);
      }
    });
  });

  return textParts.join("\n").trim();
}

function stripCodeFences(text) {
  return text.startsWith("```")
    ? text
        .split("\n")
        .filter((line) => !line.startsWith("```"))
        .join("\n")
        .trim()
    : text;
}

function findQualityProblems(spanishText) {
  const lowerText = spanishText.toLowerCase();

  return QUALITY_WARNING_WORDS.filter((word) => lowerText.includes(word));
}

function hasBannedWords(spanishText) {
  const lowerText = spanishText.toLowerCase();
  return BANNED_WORDS.some((word) => lowerText.includes(word));
}

async function callOpenAi(apiKey, model, userPrompt) {
  const openAiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      input: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: userPrompt
        }
      ]
    })
  });

  if (!openAiResponse.ok) {
    const errorText = await openAiResponse.text();
    console.error("OpenAI request failed:", errorText);
    throw new Error(errorText);
  }

  const responseData = await openAiResponse.json();
  const rawText = extractResponseText(responseData);

  if (!rawText) {
    console.error("OpenAI response did not contain text:", JSON.stringify(responseData));
    throw new Error("The AI response was empty.");
  }

  return JSON.parse(stripCodeFences(rawText));
}

async function generateSentenceWithQualityCheck(apiKey, model, difficulty, topic, tone) {
  const topicInstruction = topic === "all"
    ? "Choose one topic from: daily life, gym/fitness, food, travel, work, sleep."
    : `Use this topic: ${topic}.`;

  const toneInstruction = tone === "all"
    ? "Choose either formal or informal, then return the chosen tone in the JSON."
    : `Use this tone: ${tone}.`;

  const generationPrompt = `
Generate exactly one natural Spanish sentence from Spain for a language learner.

Rules:
- Difficulty: ${difficulty}
- ${topicInstruction}
- ${toneInstruction}
- Return one English translation.
- Perform a quality-check step after generating:
  Check the Spanish sentence for Spanglish, invented words, Latin American vocabulary, or unnatural phrasing.
  If found, rewrite it into natural Spanish from Spain before returning it.
- Do not include any explanation.
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

  let sentence = await callOpenAi(apiKey, model, generationPrompt);
  const problems = findQualityProblems(sentence.spanish || "");

  if (problems.length || hasBannedWords(sentence.spanish || "")) {
    const rewritePrompt = `
Rewrite this into fully natural Spanish from Spain.

Original Spanish:
${sentence.spanish}

English translation:
${sentence.english}

Problems found:
${problems.length ? problems.join(", ") : "banned or unnatural wording"}

Quality rules:
- Remove any Spanglish.
- Remove invented words.
- Remove Latin American vocabulary.
- Use natural Spain Spanish only.
- Keep the meaning learner-friendly and natural.
- Return JSON only in this exact shape:
{
  "spanish": "string",
  "english": "string",
  "difficulty": "${sentence.difficulty || difficulty}",
  "topic": "${sentence.topic || topic}",
  "tone": "${sentence.tone || tone}"
}
`.trim();

    sentence = await callOpenAi(apiKey, model, rewritePrompt);
  }

  if (hasBannedWords(sentence.spanish || "")) {
    throw new Error("The AI sentence still contained banned words after rewriting.");
  }

  return {
    spanish: sentence.spanish.trim(),
    english: sentence.english.trim(),
    difficulty: sentence.difficulty || difficulty,
    topic: sentence.topic || topic,
    tone: sentence.tone || tone
  };
}

async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." })
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const model = "gpt-4o-mini";

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

    const sentence = await generateSentenceWithQualityCheck(
      apiKey,
      model,
      difficulty,
      topic,
      tone
    );

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
