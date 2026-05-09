const BANNED_WORDS = [
  "workar",
  "parquear",
  "textear",
  "computadora",
  "carro",
  "manejar"
];

const SYSTEM_PROMPT = `You are a native European language teacher and conversation partner.

Generate natural, idiomatic learner-friendly language in the requested target language and region.

Rules:
- Follow the requested target language exactly.
- Avoid Spanglish, Franglais, Itanglish, invented hybrid verbs, and wrong-region vocabulary.
- The final wording must sound like something a native speaker from the requested region would naturally say.
- If the first version sounds unnatural, rewrite it before returning it.`;

const LANGUAGE_PROFILES = {
  spanish: {
    label: "Spanish",
    translationLabel: "English",
    sourceLabel: "English",
    explanationLabel: "English",
    place: "Spain",
    natural: "natural Spanish from Spain",
    person: "a real Spanish person from Spain",
    teacher: "a native Spanish teacher from Spain",
    bannedCheck: true
  },
  english: {
    label: "English",
    translationLabel: "Spanish",
    sourceLabel: "Spanish",
    explanationLabel: "Spanish",
    place: "England",
    natural: "natural British English",
    person: "a real English person from England",
    teacher: "a native English teacher from England",
    bannedCheck: false,
    forbiddenPatterns: [
      /\b(vivo|mis padres|mi hermana|tienes razon|tienes razÃ³n|espanol|espaÃ±ol|seguimos|llevais|llevÃ¡is|vosotros|porque|tambien|tambiÃ©n|quiero|tengo)\b/i,
      /[Â¿Â¡]/
    ]
  },
  french: {
    label: "French",
    translationLabel: "English",
    sourceLabel: "English",
    explanationLabel: "English",
    place: "France",
    natural: "natural French from France",
    person: "a real French person from France",
    teacher: "a native French teacher from France",
    bannedCheck: false,
    forbiddenPatterns: [
      /\b(vivo|mis padres|mi hermana|tienes razon|tienes razón|espanol|español|seguimos|llevais|lleváis|vosotros)\b/i,
      /[¿¡]/
    ]
  },
  italian: {
    label: "Italian",
    translationLabel: "English",
    sourceLabel: "English",
    explanationLabel: "English",
    place: "Italy",
    natural: "natural Italian from Italy",
    person: "a real Italian person from Italy",
    teacher: "a native Italian teacher from Italy",
    bannedCheck: false,
    forbiddenPatterns: [
      /\b(vivo|mis padres|mi hermana|tienes razon|tienes razón|espanol|español|seguimos|llevais|lleváis|vosotros)\b/i,
      /[¿¡]/
    ]
  }
};

function getLanguageProfile(targetLanguage) {
  return LANGUAGE_PROFILES[targetLanguage] || LANGUAGE_PROFILES.spanish;
}

function hasWrongLanguageMarkers(text, language) {
  if (!text || !Array.isArray(language.forbiddenPatterns)) {
    return false;
  }

  return language.forbiddenPatterns.some((pattern) => pattern.test(text));
}

function getModelForMode(mode, isCallMode = false) {
  const generationModel = process.env.OPENAI_GENERATION_MODEL || "gpt-5.4-mini";
  const conversationModel = process.env.OPENAI_CONVERSATION_MODEL || "gpt-5.4";
  const callModel = process.env.OPENAI_CALL_MODEL || "gpt-5.4-mini";

  if (isCallMode && (mode === "chat" || mode === "chat-opening")) {
    return callModel;
  }

  if (mode === "chat" || mode === "chat-opening" || mode === "custom" || mode === "conversation-review" || mode === "conversation-repair") {
    return conversationModel;
  }

  return generationModel;
}

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
  const language = getLanguageProfile(requestBody.targetLanguage);
  const prompt = `
Translate this learner sentence into ${language.natural}.

${language.sourceLabel} sentence:
${requestBody.english}

Rules:
- Difficulty: ${requestBody.difficulty || "beginner"}
- Topic: ${requestBody.topic || "daily life"}
- Tone: ${requestBody.tone || "informal"}
- Return the meaning naturally in ${language.label}.
- If the first version sounds unnatural, rewrite it before returning it.
- Also return a short feedback note in ${language.explanationLabel} explaining the more native ${language.label} choice.
- Return 1 to 3 grammarTags explaining the main skill being practised.
- Reply with JSON only.

Use this JSON shape:
{
  "spanish": "string",
  "english": "${language.translationLabel} translation string",
  "difficulty": "string",
  "topic": "string",
  "tone": "string",
  "feedback": "string",
  "grammarTags": ["short skill tag", "short skill tag"]
}
`.trim();

  const sentence = await callOpenAi(apiKey, model, prompt);

  if (language.bannedCheck && hasBannedWords(sentence.spanish || "")) {
    throw new Error("The AI returned banned wording.");
  }

  if (hasWrongLanguageMarkers(sentence.spanish || "", language)) {
    throw new Error(`The AI mixed languages instead of staying in ${language.label}.`);
  }

  return {
    sentence: {
      spanish: sentence.spanish,
      english: sentence.english || requestBody.english,
      difficulty: sentence.difficulty || requestBody.difficulty || "beginner",
      topic: sentence.topic || requestBody.topic || "daily life",
      tone: sentence.tone || requestBody.tone || "informal",
      feedback: sentence.feedback || `AI helped make this sound more natural in ${language.label}.`,
      grammarTags: Array.isArray(sentence.grammarTags) ? sentence.grammarTags.slice(0, 3) : []
    }
  };
}

async function handleChatMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const personalityInstruction = (requestBody.personalityInstruction || `Sound like a warm, relaxed person from ${language.place} who chats naturally.`)
    .replace(/Spain/g, language.place)
    .replace(/Spanish/g, language.label);
  const historyText = Array.isArray(requestBody.history)
    ? requestBody.history
        .map((item) => `${item.role === "coach" ? "Coach" : "User"}: ${item.spanish || item.english || ""}`)
        .join("\n")
    : "";

  const prompt = `
You are ${language.person} chatting naturally with a language learner.

Topic: ${requestBody.topic || "daily life"}
Tone: ${requestBody.tone || "informal"}
Conversation style: ${requestBody.scenario || "casual"}
Style setup: ${requestBody.scenarioInstruction || "Have a relaxed everyday chat."}
Speaker personality: ${requestBody.personality || "friendly-local"}
Personality setup: ${personalityInstruction}
Practice goal: ${requestBody.goal || "natural-flow"}
Goal setup: ${requestBody.goalInstruction || "Prioritise natural conversation flow."}
Call mode: ${requestBody.callMode ? "yes - keep it spoken aloud friendly, but do not simplify or shorten the quality of the answer." : "no"}

Recent chat:
${historyText || "No previous messages."}

If recent chat contains Spanish or another non-target language, treat it only as context. Your new reply and correction must still be only ${language.label}.

Learner message:
${requestBody.userMessage}

Main goal:
- Reply like ${language.person}, not like a worksheet, tutor script, chatbot, or classroom exercise.
- Sound specific, casual, and socially natural.
- React to what the learner actually said before asking anything new.
- Keep the conversation moving with one natural follow-up, not a list of questions.
- Avoid generic openings like "Hola, ¿qué tal? Cuéntame..." unless they genuinely fit.
- Do not mention that you are an AI, a coach, or a teacher.
- Follow the speaker personality. If it says tutor/corrector, keep the correction practical but do not make the main reply feel like a lesson.
- Gently steer toward the practice goal, but never force it if it would make the reply unnatural.

Learner alternative rules:
- Always give a more natural ${language.label} way to say the learner's message.
- If the learner wrote in ${language.sourceLabel}, translate their meaning into ${language.natural}.
- If the learner wrote in ${language.label}, rewrite it so it sounds more native and conversational.
- If their ${language.label} is already good, still offer a common native alternative with the same meaning.
- Keep any feedback short and practical.

Target language rules:
- Use ${language.natural} only.
- Do not use Spanish unless the selected target language is Spanish.
- Do not mix languages.
- No Spanglish, Franglais, or Itanglish.
- No invented hybrid verbs.
- The main reply must sound like something ${language.person} would say in conversation.

Reply rules:
- The main ${language.label} reply should be the conversational reply itself.
- The main ${language.label} reply must be a separate natural response to the learner's meaning, not just the corrected version of their sentence.
- "spanish" is a legacy app field name. Its value must be ${language.natural}.
- "correctionSpanish" is a legacy app field name. Its value must be ${language.natural}.
- correctionSpanish should rewrite the learner's sentence in ${language.label}; spanish should reply to it as the other person in the conversation.
- It should usually be 1 or 2 short sentences.
- It should feel like a WhatsApp/audio conversation with a friendly native speaker.
- Include at most one question, and only if it feels natural.
- The "english" legacy field should translate the main ${language.label} reply into ${language.translationLabel}.
- correctionSpanish should be the natural ${language.label} alternative for the learner's message.
- correctionEnglish should translate correctionSpanish back into ${language.translationLabel}.
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

  let reply = await callOpenAi(apiKey, model, prompt);

  if (
    hasWrongLanguageMarkers(reply.spanish || "", language) ||
    hasWrongLanguageMarkers(reply.correctionSpanish || "", language)
  ) {
    const repairPrompt = `
Rewrite this response so every target-language field is ONLY ${language.natural}.

The previous response incorrectly contained Spanish or mixed languages.

Learner message:
${requestBody.userMessage}

Bad response JSON:
${JSON.stringify(reply)}

Rules:
- "spanish" is only a legacy app field name. Its value must be ${language.label}, not Spanish.
- "correctionSpanish" is only a legacy app field name. Its value must be ${language.label}, not Spanish.
- Do not include Spanish unless the target language is Spanish.
- Keep the same conversational meaning.
- Reply with JSON only in the same shape.
`.trim();

    reply = await callOpenAi(apiKey, model, repairPrompt);
  }

  if (language.bannedCheck && (
    hasBannedWords(reply.spanish || "") ||
    hasBannedWords(reply.correctionSpanish || "")
  )) {
    throw new Error("The AI returned banned wording.");
  }

  if (
    hasWrongLanguageMarkers(reply.spanish || "", language) ||
    hasWrongLanguageMarkers(reply.correctionSpanish || "", language)
  ) {
    throw new Error(`The AI mixed languages instead of staying in ${language.label}.`);
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
  const language = getLanguageProfile(requestBody.targetLanguage);
  const personalityInstruction = (requestBody.personalityInstruction || `Sound like a warm, relaxed person from ${language.place} who chats naturally.`)
    .replace(/Spain/g, language.place)
    .replace(/Spanish/g, language.label);
  const prompt = `
Start a ${language.label} conversation like ${language.person}.

Topic: ${requestBody.topic || "daily life"}
Tone: ${requestBody.tone || "informal"}
Conversation style: ${requestBody.scenario || "casual"}
Style setup: ${requestBody.scenarioInstruction || "Have a relaxed everyday chat."}
Speaker personality: ${requestBody.personality || "friendly-local"}
Personality setup: ${personalityInstruction}
Practice goal: ${requestBody.goal || "natural-flow"}
Goal setup: ${requestBody.goalInstruction || "Prioritise natural conversation flow."}
Call mode: ${requestBody.callMode ? "yes - make it spoken aloud friendly, but keep the same natural quality." : "no"}

Rules:
- Write the first message only.
- Make it sound natural, specific, and human, like someone from ${language.place} starting a real chat.
- Avoid textbook starts such as "Hola, ¿qué tal? Cuéntame algo sobre tu día" unless the selected style clearly needs it.
- Do not explain the situation. Just start talking.
- Follow the speaker personality without becoming exaggerated.
- Set up the opening so the learner can naturally practise the selected goal.
- Use ${language.natural}.
- Do not use Spanish unless the selected target language is Spanish.
- Do not mix languages.
- The "english" legacy field must be a ${language.translationLabel} translation of the opening.
- Keep it short: 1 or 2 sentences.
- End with one easy thing the learner can reply to.
- Reply with JSON only.

Use this JSON shape:
{
  "spanish": "string",
  "english": "string"
}
`.trim();

  let reply = await callOpenAi(apiKey, model, prompt);

  if (hasWrongLanguageMarkers(reply.spanish || "", language)) {
    const repairPrompt = `
Rewrite this opening so the "spanish" field is ONLY ${language.natural}.

Bad response JSON:
${JSON.stringify(reply)}

Rules:
- "spanish" is only a legacy app field name. Its value must be ${language.label}, not Spanish.
- Do not include Spanish unless the target language is Spanish.
- Reply with JSON only in the same shape.
`.trim();

    reply = await callOpenAi(apiKey, model, repairPrompt);
  }

  if (language.bannedCheck && hasBannedWords(reply.spanish || "")) {
    throw new Error("The AI returned banned wording.");
  }

  if (hasWrongLanguageMarkers(reply.spanish || "", language)) {
    throw new Error(`The AI mixed languages instead of staying in ${language.label}.`);
  }

  return {
    reply: {
      spanish: reply.spanish,
      english: reply.english || ""
    }
  };
}

async function handleWordHintsMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const words = Array.isArray(requestBody.words)
    ? requestBody.words.filter(Boolean).slice(0, 16)
    : [];

  if (!requestBody.spanish || !words.length) {
    return { hints: {} };
  }

  const prompt = `
Create short ${language.translationLabel} hover hints for selected ${language.label} words.

${language.label} sentence:
${requestBody.spanish}

Full ${language.translationLabel} translation:
${requestBody.english || ""}

Words needing hints:
${words.map((word) => `- ${word}`).join("\n")}

Rules:
- Explain each word in this sentence's context.
- Keep each hint short: usually 1 to 5 ${language.translationLabel} words.
- Use learner-friendly ${language.translationLabel}, not grammar jargon unless useful.
- If a word is a conjugated verb, give the meaning in context, for example "becomes" or "I work".
- Return JSON only.

Use this JSON shape:
{
  "hints": {
    "${language.label} word": "short ${language.translationLabel} hint"
  }
}
`.trim();

  const result = await callOpenAi(apiKey, model, prompt);
  const hints = result && typeof result.hints === "object" && !Array.isArray(result.hints)
    ? result.hints
    : {};

  return { hints };
}

async function handleConversationReviewMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const historyText = Array.isArray(requestBody.history)
    ? requestBody.history
        .map((item, index) => {
          const role = item.role === "coach" ? "Coach" : item.role === "assistant" ? "Coach" : "Learner";
          const parts = [
            `${index + 1}. ${role}: ${item.spanish || ""}`,
            item.english ? `${language.translationLabel}: ${item.english}` : "",
            item.correctionSpanish ? `Native version: ${item.correctionSpanish}` : "",
            item.feedback ? `Quick feedback: ${item.feedback}` : ""
          ].filter(Boolean);
          return parts.join("\n");
        })
        .join("\n\n")
    : "";

  const prompt = `
Give an in-depth but practical review of this ${language.label} learning conversation.

Target language: ${language.natural}
Topic: ${requestBody.topic || "general conversation"}
Tone: ${requestBody.tone || "informal"}
Practice goal: ${requestBody.goal || "natural-flow"}

Conversation:
${historyText || "No conversation provided."}

Rules:
- Use the higher-quality review style: specific, useful, and focused on what the learner can improve next.
- Do not rewrite the whole conversation.
- Focus on repeated learner patterns, natural wording, grammar, fluency, and useful phrases.
- Keep explanations in ${language.explanationLabel}.
- Keep target-language examples only in ${language.label}.
- If the selected language is not Spanish, do not use Spanish.
- Reply with JSON only.

Use this JSON shape:
{
  "review": {
    "summary": "string",
    "strengths": ["string"],
    "mainFixes": [
      {
        "point": "string",
        "fix": "string",
        "explanation": "string"
      }
    ],
    "naturalPhrases": [
      {
        "phrase": "string",
        "english": "string",
        "note": "string"
      }
    ],
    "patterns": ["string"],
    "drills": ["string"],
    "nextGoal": "string"
  }
}
`.trim();

  const result = await callOpenAi(apiKey, model, prompt);
  return {
    review: result.review || result
  };
}

async function handleConversationRepairMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const history = Array.isArray(requestBody.history) ? requestBody.history.slice(0, 80) : [];
  const prompt = `
Repair this conversation so all target-language fields stay in ${language.natural}.

Conversation JSON:
${JSON.stringify(history)}

Rules:
- Keep the same number of messages and the same order.
- Preserve each role.
- Rewrite "spanish" and "correctionSpanish" fields into ${language.natural}.
- "spanish" and "correctionSpanish" are legacy field names. Their values must be ${language.label}, not necessarily Spanish.
- Translate "english" and "correctionEnglish" into ${language.translationLabel}.
- Keep feedback short and practical in ${language.explanationLabel}.
- Do not include Spanish unless the selected target language is Spanish.
- Reply with JSON only.

Use this JSON shape:
{
  "messages": [
    {
      "role": "user or coach",
      "spanish": "string",
      "english": "string",
      "correctionSpanish": "string",
      "correctionEnglish": "string",
      "feedback": "string"
    }
  ]
}
`.trim();

  const result = await callOpenAi(apiKey, model, prompt);
  const messages = Array.isArray(result.messages) ? result.messages : [];

  if (messages.some((message) =>
    hasWrongLanguageMarkers(message.spanish || "", language) ||
    hasWrongLanguageMarkers(message.correctionSpanish || "", language)
  )) {
    throw new Error(`The repaired conversation still mixed languages instead of staying in ${language.label}.`);
  }

  return { messages };
}

async function handleDialogueMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const requestedLineCount = Math.min(20, Math.max(4, Number(requestBody.turnCount) || 8));
  const prompt = `
Create a natural two-person dialogue in ${language.natural} for a language learner.

Topic:
${requestBody.topic || "daily life"}

Situation: ${requestBody.setting || "casual"}
Level: ${requestBody.level || "intermediate"}
Tone: ${requestBody.tone || "informal"}
Number of lines: ${requestedLineCount}

Rules:
- Use ${language.natural} only.
- Make it sound like a real spoken conversation, not a textbook script.
- Keep each line short enough to practise aloud.
- Include useful everyday phrases the learner may want to save.
- Add a ${language.translationLabel} translation for every ${language.label} line in the "english" legacy field.
- Speaker names should be short and natural, for example "A" and "B" or two names that fit ${language.place}.
- Do not include narration outside the dialogue.
- Return 2 to 4 useful phrase notes.
- Reply with JSON only.

Use this JSON shape:
{
  "title": "string",
  "topic": "string",
  "setting": "string",
  "level": "string",
  "tone": "string",
  "lines": [
    {
      "speaker": "string",
      "spanish": "string",
      "english": "string"
    }
  ],
  "usefulPhrases": [
    {
      "spanish": "string",
      "english": "string",
      "note": "string"
    }
  ]
}
`.trim();

  const dialogue = await callOpenAi(apiKey, model, prompt);
  const lines = Array.isArray(dialogue.lines) ? dialogue.lines.slice(0, 20) : [];
  const usefulPhrases = Array.isArray(dialogue.usefulPhrases) ? dialogue.usefulPhrases.slice(0, 4) : [];

  if (!lines.length || lines.some((line) =>
    !line.spanish ||
    hasWrongLanguageMarkers(line.spanish, language) ||
    (language.bannedCheck && hasBannedWords(line.spanish))
  )) {
    throw new Error("The AI returned an invalid dialogue.");
  }

  return {
    dialogue: {
      title: dialogue.title || `${requestBody.topic || language.label} dialogue`,
      topic: dialogue.topic || requestBody.topic || "daily life",
      setting: dialogue.setting || requestBody.setting || "casual",
      level: dialogue.level || requestBody.level || "intermediate",
      tone: dialogue.tone || requestBody.tone || "informal",
      lines: lines.map((line, index) => ({
        speaker: line.speaker || (index % 2 === 0 ? "A" : "B"),
        spanish: line.spanish,
        english: line.english || ""
      })),
      usefulPhrases: usefulPhrases.map((phrase) => ({
        spanish: phrase.spanish || "",
        english: phrase.english || "",
        note: phrase.note || ""
      })).filter((phrase) => phrase.spanish)
    }
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
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "OPENAI_API_KEY is missing." })
    };
  }

  try {
    const requestBody = JSON.parse(event.body || "{}");
    const model = getModelForMode(requestBody.mode, Boolean(requestBody.callMode));
    let result;

    if (requestBody.mode === "custom") {
      result = await handleCustomMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "chat-opening") {
      result = await handleChatOpeningMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "chat") {
      result = await handleChatMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "word-hints") {
      result = await handleWordHintsMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "conversation-review") {
      result = await handleConversationReviewMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "conversation-repair") {
      result = await handleConversationRepairMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "dialogue") {
      result = await handleDialogueMode(apiKey, model, requestBody);
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
