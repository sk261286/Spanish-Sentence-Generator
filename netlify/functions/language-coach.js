const BANNED_WORDS = [
  "workar",
  "parquear",
  "textear",
  "computadora",
  "carro",
  "manejar"
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

function classifyOpenAiError(statusCode, errorPayload) {
  const detailsText = JSON.stringify(errorPayload || {}).toLowerCase();
  const errorMessage = errorPayload?.error?.message || errorPayload?.message || "";

  if (statusCode === 401 || detailsText.includes("incorrect api key") || detailsText.includes("invalid_api_key")) {
    return {
      error: "Wrong API key.",
      details: "The OpenAI API key looks invalid. Please replace OPENAI_API_KEY in Netlify."
    };
  }

  if (statusCode === 429 && detailsText.includes("rate limit")) {
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

function hasBannedWords(text) {
  const lowerText = (text || "").toLowerCase();
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
    console.error("OpenAI language coach failed safely:", {
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
    console.error("OpenAI language coach response did not contain text:", JSON.stringify(responseData));
    const error = new Error("OpenAI did not return any text.");
    error.publicMessage = "The AI response was empty, so the app could not build a reply.";
    throw error;
  }

  return JSON.parse(stripCodeFences(rawText));
}

async function handleCustomMode(apiKey, model, requestBody) {
  const prompt = `
Translate this learner sentence into natural Spanish from Spain.

English sentence:
${requestBody.english}

Rules:
- Difficulty: ${requestBody.difficulty || "beginner"}
- Topic: ${requestBody.topic || "daily life"}
- Tone: ${requestBody.tone || "informal"}
- Return the meaning naturally in Spain Spanish.
- If the first version sounds unnatural, rewrite it before returning it.
- Also return a short feedback note explaining the more native Spain-Spanish choice.
- Return 1 to 3 grammarTags explaining the main skill being practised.
- Reply with JSON only.

Use this JSON shape:
{
  "spanish": "string",
  "english": "string",
  "difficulty": "string",
  "topic": "string",
  "tone": "string",
  "feedback": "string",
  "grammarTags": ["short skill tag", "short skill tag"]
}
`.trim();

  const sentence = await callOpenAi(apiKey, model, prompt);

  if (hasBannedWords(sentence.spanish || "")) {
    throw new Error("The AI returned banned wording.");
  }

  return {
    sentence: {
      spanish: sentence.spanish,
      english: sentence.english || requestBody.english,
      difficulty: sentence.difficulty || requestBody.difficulty || "beginner",
      topic: sentence.topic || requestBody.topic || "daily life",
      tone: sentence.tone || requestBody.tone || "informal",
      feedback: sentence.feedback || "AI helped make this sound more natural in Spain Spanish.",
      grammarTags: Array.isArray(sentence.grammarTags) ? sentence.grammarTags.slice(0, 3) : []
    }
  };
}

async function handleChatMode(apiKey, model, requestBody) {
  const historyText = Array.isArray(requestBody.history)
    ? requestBody.history
        .map((item) => `${item.role === "coach" ? "Coach" : "User"}: ${item.spanish || item.english || ""}`)
        .join("\n")
    : "";

  const prompt = `
You are a real Spanish person from Spain chatting naturally with a language learner.

Topic: ${requestBody.topic || "daily life"}
Tone: ${requestBody.tone || "informal"}
Conversation style: ${requestBody.scenario || "casual"}
Style setup: ${requestBody.scenarioInstruction || "Have a relaxed everyday chat."}
Speaker personality: ${requestBody.personality || "friendly-local"}
Personality setup: ${requestBody.personalityInstruction || "Sound like a warm, relaxed person from Spain who chats naturally."}
Practice goal: ${requestBody.goal || "natural-flow"}
Goal setup: ${requestBody.goalInstruction || "Prioritise natural conversation flow."}

Recent chat:
${historyText || "No previous messages."}

Learner message:
${requestBody.userMessage}

Main goal:
- Reply like a real person from Spain, not like a worksheet, tutor script, chatbot, or classroom exercise.
- Sound specific, casual, and socially natural.
- React to what the learner actually said before asking anything new.
- Keep the conversation moving with one natural follow-up, not a list of questions.
- Avoid generic openings like "Hola, ¿qué tal? Cuéntame..." unless they genuinely fit.
- Do not mention that you are an AI, a coach, or a teacher.
- Follow the speaker personality. If it says tutor/corrector, keep the correction practical but do not make the main reply feel like a lesson.
- Gently steer toward the practice goal, but never force it if it would make the reply unnatural.

Learner alternative rules:
- Always give a more natural Spain-Spanish way to say the learner's message.
- If the learner wrote in English, translate their meaning into natural Spain Spanish.
- If the learner wrote in Spanish, rewrite it so it sounds more native and conversational.
- If their Spanish is already good, still offer a common native alternative with the same meaning.
- Keep any feedback short and practical.

Spain Spanish rules:
- Use natural Spanish from Spain only.
- No Spanglish.
- No invented hybrid verbs.
- No Latin American vocabulary unless specifically requested.
- The main reply must sound like something a real Spanish person from Spain would say in conversation.

Reply rules:
- The main Spanish reply should be the conversational reply itself.
- It should usually be 1 or 2 short sentences.
- It should feel like a WhatsApp/audio conversation with a friendly native speaker.
- Include at most one question, and only if it feels natural.
- The English should translate the main Spanish reply.
- correctionSpanish should be the natural Spain-Spanish alternative for the learner's message.
- correctionEnglish should translate correctionSpanish back into English.
- Reply with JSON only.

Use this JSON shape:
{
  "spanish": "string",
  "english": "string",
  "correctionSpanish": "string",
  "correctionEnglish": "string",
  "feedback": "string"
}
`.trim();

  const reply = await callOpenAi(apiKey, model, prompt);

  if (
    hasBannedWords(reply.spanish || "") ||
    hasBannedWords(reply.correctionSpanish || "")
  ) {
    throw new Error("The AI returned banned wording.");
  }

  return {
    reply: {
      spanish: reply.spanish,
      english: reply.english || requestBody.userMessage,
      correctionSpanish: reply.correctionSpanish || "",
      correctionEnglish: reply.correctionEnglish || "",
      feedback: reply.feedback || ""
    }
  };
}

async function handleChatOpeningMode(apiKey, model, requestBody) {
  const prompt = `
Start a Spanish conversation like a real person from Spain.

Topic: ${requestBody.topic || "daily life"}
Tone: ${requestBody.tone || "informal"}
Conversation style: ${requestBody.scenario || "casual"}
Style setup: ${requestBody.scenarioInstruction || "Have a relaxed everyday chat."}
Speaker personality: ${requestBody.personality || "friendly-local"}
Personality setup: ${requestBody.personalityInstruction || "Sound like a warm, relaxed person from Spain who chats naturally."}
Practice goal: ${requestBody.goal || "natural-flow"}
Goal setup: ${requestBody.goalInstruction || "Prioritise natural conversation flow."}

Rules:
- Write the first message only.
- Make it sound natural, specific, and human, like a Spanish person starting a real chat.
- Avoid textbook starts such as "Hola, ¿qué tal? Cuéntame algo sobre tu día" unless the selected style clearly needs it.
- Do not explain the situation. Just start talking.
- Follow the speaker personality without becoming exaggerated.
- Set up the opening so the learner can naturally practise the selected goal.
- Use Spain Spanish.
- Keep it short: 1 or 2 sentences.
- End with one easy thing the learner can reply to.
- Reply with JSON only.

Use this JSON shape:
{
  "spanish": "string",
  "english": "string"
}
`.trim();

  const reply = await callOpenAi(apiKey, model, prompt);

  if (hasBannedWords(reply.spanish || "")) {
    throw new Error("The AI returned banned wording.");
  }

  return {
    reply: {
      spanish: reply.spanish,
      english: reply.english || ""
    }
  };
}

async function handleWordHintsMode(apiKey, model, requestBody) {
  const words = Array.isArray(requestBody.words)
    ? requestBody.words.filter(Boolean).slice(0, 16)
    : [];

  if (!requestBody.spanish || !words.length) {
    return { hints: {} };
  }

  const prompt = `
Create short English hover hints for selected Spanish words.

Spanish sentence:
${requestBody.spanish}

Full English translation:
${requestBody.english || ""}

Words needing hints:
${words.map((word) => `- ${word}`).join("\n")}

Rules:
- Explain each word in this sentence's context.
- Keep each hint short: usually 1 to 5 English words.
- Use learner-friendly English, not grammar jargon unless useful.
- If a word is a conjugated verb, give the meaning in context, for example "becomes" or "I work".
- Return JSON only.

Use this JSON shape:
{
  "hints": {
    "Spanish word": "short English hint"
  }
}
`.trim();

  const result = await callOpenAi(apiKey, model, prompt);
  const hints = result && typeof result.hints === "object" && !Array.isArray(result.hints)
    ? result.hints
    : {};

  return { hints };
}

async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." })
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "OPENAI_API_KEY is missing." })
    };
  }

  try {
    const requestBody = JSON.parse(event.body || "{}");
    let result;

    if (requestBody.mode === "custom") {
      result = await handleCustomMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "chat-opening") {
      result = await handleChatOpeningMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "chat") {
      result = await handleChatMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "word-hints") {
      result = await handleWordHintsMode(apiKey, model, requestBody);
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Unknown language coach mode." })
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(result)
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Could not complete the language coach request.",
        details: error.publicMessage || error.message
      })
    };
  }
}

module.exports = { handler };
