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

const SYSTEM_PROMPT = `You are a native European language teacher.

Generate natural, idiomatic learner-friendly language in the requested target language and region.

Rules:
- Follow the requested target language exactly.
- Avoid Spanglish, Franglais, Itanglish, invented hybrid verbs, and wrong-region vocabulary.
- The final sentence must sound like something a native speaker from the requested region would naturally say.
- If the first version sounds unnatural, rewrite it before returning it.`;

const LANGUAGE_PROFILES = {
  spanish: { label: "Spanish", natural: "natural Spanish from Spain", translationLabel: "English", bannedCheck: true },
  english: { label: "English", natural: "natural British English", translationLabel: "Spanish", bannedCheck: false },
  french: { label: "French", natural: "natural French from France", translationLabel: "English", bannedCheck: false },
  italian: { label: "Italian", natural: "natural Italian from Italy", translationLabel: "English", bannedCheck: false }
};

function getLanguageProfile(targetLanguage) {
  return LANGUAGE_PROFILES[targetLanguage] || LANGUAGE_PROFILES.spanish;
}

function classifyOpenAiError(statusCode, errorPayload) {
  const detailsText = JSON.stringify(errorPayload || {}).toLowerCase();
  const errorCode = errorPayload?.error?.code || errorPayload?.code || "";
  const errorType = errorPayload?.error?.type || errorPayload?.type || "";
  const errorMessage = errorPayload?.error?.message || errorPayload?.message || "";

  if (statusCode === 401 || detailsText.includes("incorrect api key") || detailsText.includes("invalid_api_key")) {
    return {
      error: "Wrong API key.",
      details: "The OpenAI API key looks invalid. Please replace OPENAI_API_KEY in Netlify."
    };
  }

  if (statusCode === 429 && (detailsText.includes("rate limit") || errorType === "rate_limit_error")) {
    return {
      error: "Rate limit reached.",
      details: "Too many AI requests were sent too quickly. Please wait a moment and try again."
    };
  }

  if (
    detailsText.includes("usage_exceeded") ||
    detailsText.includes("insufficient_quota") ||
    detailsText.includes("billing") ||
    detailsText.includes("quota") ||
    detailsText.includes("budget")
  ) {
    return {
      error: "Quota or project budget reached.",
      details: "OpenAI rejected the request because the project budget, quota, or billing limit was reached."
    };
  }

  if (statusCode === 429) {
    return {
      error: "Rate limit or quota issue.",
      details: errorMessage || "The AI request was blocked by a usage limit."
    };
  }

  return {
    error: "OpenAI request failed.",
    details: errorMessage || "The AI service returned an unexpected error."
  };
}

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
  let openAiResponse;

  try {
    openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
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
  } catch (networkError) {
    console.error("OpenAI network request failed:", networkError.message);
    const error = new Error("Network error.");
    error.publicMessage = "The app could not reach OpenAI. Please check your connection and try again.";
    throw error;
  }

  if (!openAiResponse.ok) {
    const errorText = await openAiResponse.text();
    let errorPayload = {};

    try {
      errorPayload = JSON.parse(errorText);
    } catch (parseError) {
      errorPayload = { message: errorText };
    }

    const classifiedError = classifyOpenAiError(openAiResponse.status, errorPayload);
    console.error("OpenAI request failed safely:", {
      statusCode: openAiResponse.status,
      error: classifiedError.error,
      details: classifiedError.details,
      upstreamCode: errorPayload?.error?.code || errorPayload?.code || "",
      upstreamType: errorPayload?.error?.type || errorPayload?.type || ""
    });

    const error = new Error(classifiedError.error);
    error.publicMessage = classifiedError.details;
    throw error;
  }

  const responseData = await openAiResponse.json();
  const rawText = extractResponseText(responseData);

  if (!rawText) {
    console.error("OpenAI response did not contain text:", JSON.stringify(responseData));
    const error = new Error("OpenAI did not return any text.");
    error.publicMessage = "The AI response was empty, so the app could not build a sentence.";
    throw error;
  }

  return JSON.parse(stripCodeFences(rawText));
}

async function generateSentenceWithQualityCheck(apiKey, model, difficulty, topic, tone, focus = "mixed", recentSentences = [], targetLanguage = "spanish") {
  const language = getLanguageProfile(targetLanguage);
  const topicInstruction = topic === "all"
    ? "Choose one topic from: daily life, gym/fitness, food, travel, work, sleep."
    : `Use this topic: ${topic}.`;

  const toneInstruction = tone === "all"
    ? "Choose either formal or informal, then return the chosen tone in the JSON."
    : `Use this tone: ${tone}.`;
  const focusInstructions = {
    mixed: "Use any natural grammar pattern that suits the sentence.",
    past: "Focus on past-tense practice. Use preterite or present perfect naturally.",
    future: "Focus on future plans. Use ir a + infinitive, querer + infinitive, or a natural future expression.",
    questions: "Generate a natural question a person might actually ask.",
    opinions: "Focus on opinions. Use phrases such as creo que, me parece que, prefiero, or para mí.",
    subjunctive: "Focus on subjunctive practice. Use a natural trigger such as espero que, es importante que, aunque, or para que.",
    idioms: `Use one natural ${language.label} idiomatic expression, but keep it learner-friendly.`
  };
  const focusInstruction = focusInstructions[focus] || focusInstructions.mixed;
  const recentSentenceText = Array.isArray(recentSentences) && recentSentences.length
    ? recentSentences.slice(-12).map((sentence) => `- ${sentence}`).join("\n")
    : "None.";

  const generationPrompt = `
Generate exactly one ${language.natural} sentence for a language learner.

Rules:
- Difficulty: ${difficulty}
- ${topicInstruction}
- ${toneInstruction}
- Focus: ${focusInstruction}
- Return one ${language.translationLabel} translation in the "english" legacy field.
- Return 1 to 3 grammarTags explaining the main skill being practised, such as "Past tense", "Question", "Opinion", "Subjunctive", "Idiom", "Connector", "Reflexive verb", or "Future plans".
- Avoid repeating these recent sentences, their wording, and their grammar pattern:
${recentSentenceText}
- Vary the scene, verbs, sentence structure, and time expression from the recent examples.
- Do not make a tiny variation of a recent sentence by only adding or removing a final phrase.
- If a recent sentence mentions a similar situation, choose a completely different situation within the same topic.
- Prefer a different opening word and a different main verb from the most recent examples.
- Perform a quality-check step after generating:
  Check the ${language.label} sentence for invented words, unnatural phrasing, or wrong-region vocabulary.
  If found, rewrite it into ${language.natural} before returning it.
- Do not include any explanation.
- Reply with JSON only.

Use this JSON shape:
{
  "spanish": "string",
  "english": "string",
  "difficulty": "string",
  "topic": "string",
  "tone": "string",
  "focus": "string",
  "grammarTags": ["short skill tag", "short skill tag"]
}
`.trim();

  let sentence = await callOpenAi(apiKey, model, generationPrompt);
  const problems = language.bannedCheck ? findQualityProblems(sentence.spanish || "") : [];

  if (language.bannedCheck && (problems.length || hasBannedWords(sentence.spanish || ""))) {
    const rewritePrompt = `
Rewrite this into fully ${language.natural}.

Original Spanish:
${sentence.spanish}

${language.translationLabel} translation:
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
  "tone": "${sentence.tone || tone}",
  "focus": "${sentence.focus || focus}",
  "grammarTags": ["short skill tag", "short skill tag"]
}
`.trim();

    sentence = await callOpenAi(apiKey, model, rewritePrompt);
  }

  if (language.bannedCheck && hasBannedWords(sentence.spanish || "")) {
    const error = new Error("The AI sentence still contained banned words after rewriting.");
    error.publicMessage = "The AI returned wording that did not pass the Spain-Spanish quality check.";
    throw error;
  }

  return {
    spanish: sentence.spanish.trim(),
    english: sentence.english.trim(),
    difficulty: sentence.difficulty || difficulty,
    topic: sentence.topic || topic,
    tone: sentence.tone || tone,
    focus: sentence.focus || focus,
    grammarTags: Array.isArray(sentence.grammarTags) ? sentence.grammarTags.slice(0, 3) : []
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
  const model = process.env.OPENAI_GENERATION_MODEL || "gpt-5.4-mini";

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
    const focus = requestBody.focus || "mixed";
    const targetLanguage = requestBody.targetLanguage || "spanish";
    const recentSentences = Array.isArray(requestBody.recentSentences)
      ? requestBody.recentSentences.filter((sentence) => typeof sentence === "string")
      : [];

    const sentence = await generateSentenceWithQualityCheck(
      apiKey,
      model,
      difficulty,
      topic,
      tone,
      focus,
      recentSentences,
      targetLanguage
    );

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sentence })
    };
  } catch (error) {
    const safeDetails = error.publicMessage || error.message || "Unknown error.";
    console.error("Sentence generation failed safely:", safeDetails);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Could not generate a sentence.",
        details: safeDetails
      })
    };
  }
}

module.exports = { handler };
