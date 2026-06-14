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
  const defaultModel = process.env.OPENAI_MODEL || "gpt-4.1-mini";
  const generationModel = process.env.OPENAI_GENERATION_MODEL || "gpt-5.4-mini";
  const conversationModel = process.env.OPENAI_CONVERSATION_MODEL || process.env.OPENAI_REVIEW_MODEL || defaultModel;
  const callModel = process.env.OPENAI_CALL_MODEL || defaultModel;

  if (isCallMode && (mode === "chat" || mode === "chat-opening")) {
    return callModel;
  }

  if (mode === "chat" || mode === "chat-opening" || mode === "custom" || mode === "sentence-explain" || mode === "conversation-review" || mode === "conversation-review-final" || mode === "conversation-repair") {
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

function extractJsonText(text) {
  const cleanedText = stripCodeFences(text || "").trim();

  if (!cleanedText) {
    return "";
  }

  if (cleanedText.startsWith("{") || cleanedText.startsWith("[")) {
    return cleanedText;
  }

  const objectStart = cleanedText.indexOf("{");
  const objectEnd = cleanedText.lastIndexOf("}");
  const arrayStart = cleanedText.indexOf("[");
  const arrayEnd = cleanedText.lastIndexOf("]");

  if (objectStart !== -1 && objectEnd > objectStart) {
    return cleanedText.slice(objectStart, objectEnd + 1);
  }

  if (arrayStart !== -1 && arrayEnd > arrayStart) {
    return cleanedText.slice(arrayStart, arrayEnd + 1);
  }

  return cleanedText;
}

function parseOpenAiJson(rawText) {
  const jsonText = extractJsonText(rawText);

  try {
    return JSON.parse(jsonText);
  } catch (parseError) {
    console.error("OpenAI language coach returned invalid JSON:", {
      message: parseError.message,
      preview: (rawText || "").slice(0, 500)
    });

    const error = new Error("AI response was not valid JSON.");
    error.publicMessage = "The AI returned a badly formatted response. Please try the review again.";
    throw error;
  }
}

function hasBannedWords(text) {
  const lowerText = (text || "").toLowerCase();
  return BANNED_WORDS.some((word) => lowerText.includes(word));
}

function startsWithOverusedAgreement(text) {
  return /^((pues|ah|bueno),?\s+)?(sí|si|claro|vale|exacto|oui|d'accord|certo|sure)([\s,.:;!¡]|$)/iu.test((text || "").trim());
}

function looksLikeQuestion(text) {
  return /[?¿]\s*$/.test((text || "").trim()) || /^(who|what|where|when|why|how|do|does|did|can|could|would|is|are|am|should|will|shall|que|qué|qui|quoi|où|ou|quando|come|dove|perché|pourquoi|est-ce|cosa)\b/i.test((text || "").trim());
}

function truncateForPrompt(text, maxLength = 700) {
  const cleanText = String(text || "").trim();
  return cleanText.length > maxLength ? `${cleanText.slice(0, maxLength)}...` : cleanText;
}

async function callOpenAi(apiKey, model, userPrompt) {
  let openAiResponse;
  const requestBody = {
    model,
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
  };

  if (!String(model || "").startsWith("gpt-5.5")) {
    requestBody.temperature = 0.65;
  }

  try {
    openAiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
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

  return parseOpenAiJson(rawText);
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
Variation for this turn: ${requestBody.variationInstruction || "Use a fresh natural reply shape for this turn."}
Call mode: ${requestBody.callMode ? "yes - keep it spoken aloud friendly, but do not simplify or shorten the quality of the answer." : "no"}

Recent chat:
${historyText || "No previous messages."}

If recent chat contains Spanish or another non-target language, treat it only as context. Your new reply and correction must still be only ${language.label}.

Learner message:
${requestBody.userMessage}

Main goal:
- Reply like ${language.person}, not like a worksheet, tutor script, chatbot, or classroom exercise.
- Sound specific, casual, curious, and socially natural.
- React to what the learner actually said before asking anything new.
- Keep the conversation moving with one natural follow-up, not a list of questions.
- Avoid generic openings like "Hola, ¿qué tal? Cuéntame..." unless they genuinely fit.
- Do not mention that you are an AI, a coach, or a teacher.
- Follow the speaker personality. If it says tutor/corrector, keep the correction practical but do not make the main reply feel like a lesson.
- Gently steer toward the practice goal, but never force it if it would make the reply unnatural.
- Add a little personality: a brief opinion, reaction, mini anecdote, practical detail, or playful aside when it fits.
- Vary the shape of the reply from turn to turn. Do not always use the pattern "reaction + question".
- Pick up concrete details from the learner's message and build on them.
- If the learner gives a short answer, help the conversation expand naturally instead of just asking another basic question.
- If Conversation style is roleplay, stay in the scene as the other person. Do not narrate the roleplay or say "let's roleplay" after the opening.
- If Conversation style is debate, take a clear but friendly position on the topic, challenge one point gently, invite the learner to defend their view, and keep the tone respectful and conversational.

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
- For normal chat, it should usually be 2 to 4 natural sentences.
- For call mode, it should usually be 1 to 3 spoken-friendly sentences, but keep the same quality and specificity.
- It should feel like a WhatsApp/audio conversation with a friendly native speaker.
- Include at most one question, and only if it feels natural.
- Do not repeat correctionSpanish as the main reply. The main reply must answer the learner and move the conversation forward.
- Do not start every reply with agreement words like "sí", "pues sí", "claro", "vale", "exacto", "oui", "d'accord", "certo", or "sure".
- If the learner did not ask a yes/no question, avoid starting the main reply with a yes/no agreement word.
- When the learner gives a statement, the main reply must not begin with "sí", "pues sí", "ah sí", "claro", "vale", "exacto", "oui", "d'accord", "certo", or "sure"; begin with a real reaction instead.
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

  if (startsWithOverusedAgreement(reply.spanish || "") && !looksLikeQuestion(requestBody.userMessage)) {
    const varietyPrompt = `
Rewrite only the main conversational reply so it does not begin with an agreement word.

The learner gave a statement, so the reply should begin with a real reaction, detail, opinion, or comment.

Learner message:
${requestBody.userMessage}

Current response JSON:
${JSON.stringify(reply)}

Rules:
- Keep the same JSON shape.
- Keep correctionSpanish, correctionEnglish, and feedback unless they genuinely need tiny cleanup.
- The "spanish" field must be ${language.natural}.
- The "spanish" field must answer the learner and move the conversation forward.
- Do not start "spanish" with "sí", "pues sí", "ah sí", "claro", "vale", "exacto", "oui", "d'accord", "certo", or "sure".
- Reply with JSON only.
`.trim();

    reply = await callOpenAi(apiKey, model, varietyPrompt);
  }

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
Opening variation: ${requestBody.variationInstruction || "Use a concrete, natural opening hook."}
Call mode: ${requestBody.callMode ? "yes - make it spoken aloud friendly, but keep the same natural quality." : "no"}

Rules:
- Write the first message only.
- Make it sound natural, specific, and human, like someone from ${language.place} starting a real chat.
- Avoid textbook starts such as "Hola, ¿qué tal? Cuéntame algo sobre tu día" unless the selected style clearly needs it.
- Do not explain the situation. Just start talking.
- Follow the speaker personality without becoming exaggerated.
- Set up the opening so the learner can naturally practise the selected goal.
- Make the opening feel like the beginning of a real conversation, with a concrete hook related to the topic or situation.
- If Conversation style is roleplay, open directly as a character in a realistic scene connected to the topic.
- If Conversation style is debate, open with a clear friendly opinion or provocative but safe claim about the topic, then invite the learner to respond.
- Vary openings. Do not always begin with a greeting plus "tell me about...".
- Use ${language.natural}.
- Do not use Spanish unless the selected target language is Spanish.
- Do not mix languages.
- The "english" legacy field must be a ${language.translationLabel} translation of the opening.
- Keep it concise but interesting: usually 1 or 2 sentences.
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

async function handleWordDetailsMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const word = String(requestBody.word || "").trim().slice(0, 80);

  if (!word || !requestBody.spanish) {
    return { detail: null };
  }

  const prompt = `
Create a learner-friendly mini dictionary entry for this ${language.label} word or phrase.

Target language: ${language.natural}
Word or phrase: ${word}

Sentence where the learner clicked it:
${requestBody.spanish}

Full ${language.translationLabel} translation of that sentence:
${requestBody.english || ""}

Rules:
- The "contextMeaning" must explain what the word or phrase means in this exact sentence.
- Then include the main common definitions/usages of the word or phrase, not only the sentence meaning.
- Put the sentence meaning first if it is one of the definitions.
- Include 2 to 6 definitions where useful. Do not invent rare meanings.
- Include 3 short natural example sentences in ${language.label}, each with a ${language.translationLabel} translation.
- Include grammar details when useful: verbs should include infinitive/tense/person, nouns should include gender/plural where the language has them, and all words should include register/usage notes when helpful.
- If this is a phrase, explain it as a phrase and include a phrase-level usage note instead of forcing single-word grammar.
- If the selected target language is not Spanish, do not use Spanish in the target-language examples.
- Keep explanations concise and clear for a learner.
- Return JSON only.

Use this JSON shape:
{
  "detail": {
    "word": "${word}",
    "contextMeaning": "meaning in this exact sentence",
    "definitions": [
      {
        "meaning": "common ${language.translationLabel} definition",
        "partOfSpeech": "noun / verb / adjective / adverb / phrase / etc",
        "note": "short learner note, blank if not needed"
      }
    ],
    "grammar": {
      "partOfSpeech": "noun / verb / adjective / adverb / phrase / etc",
      "infinitive": "verb infinitive, blank if not a verb",
      "tense": "tense/form in the clicked sentence, blank if not useful",
      "person": "person/number in the clicked sentence, blank if not useful",
      "gender": "noun gender, blank if not relevant",
      "plural": "plural/singular note, blank if not useful",
      "register": "formal / informal / neutral / colloquial, blank if not useful",
      "usageNote": "one short learner note"
    },
    "examples": [
      {
        "target": "short ${language.label} example sentence",
        "english": "${language.translationLabel} translation"
      }
    ]
  }
}
`.trim();

  const result = await callOpenAi(apiKey, model, prompt);
  const detail = result.detail || result.wordDetail || result;

  return {
    detail: {
      word: detail.word || word,
      contextMeaning: detail.contextMeaning || "",
      definitions: Array.isArray(detail.definitions) ? detail.definitions.slice(0, 6) : [],
      grammar: detail.grammar && typeof detail.grammar === "object" ? detail.grammar : null,
      examples: Array.isArray(detail.examples) ? detail.examples.slice(0, 4) : []
    }
  };
}

async function handleSentenceExplainMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const targetText = String(requestBody.spanish || "").trim();
  const translationText = String(requestBody.english || "").trim();

  if (!targetText) {
    return { explanation: null };
  }

  const prompt = `
Give a detailed but friendly explanation of this generated ${language.label} sentence.

Target language: ${language.natural}
Sentence:
${targetText}

Existing ${language.translationLabel} translation:
${translationText || "None provided."}

Rules:
- Explain in ${language.explanationLabel}.
- Make it useful for a learner who wants to sound natural, not just translate word by word.
- Include a clear meaning, a natural ${language.translationLabel} version, and a phrase-by-phrase breakdown.
- Highlight the most interesting native phrase, grammar pattern, idiom, or wording choice.
- If there is a phrase with a non-literal meaning, explain the literal idea and the natural meaning.
- Add 2 or 3 similar natural examples in ${language.label}, each with a ${language.translationLabel} translation.
- Mention any regional usage note if helpful, especially for ${language.place}.
- Be warm, memorable, and human. A short playful image is fine if it genuinely helps.
- Do not use Spanish unless the selected target language is Spanish.
- Reply with JSON only.

Use this JSON shape:
{
  "explanation": {
    "means": "plain ${language.translationLabel} meaning",
    "naturalVersion": "natural ${language.translationLabel} version",
    "breakdown": [
      {
        "chunk": "short ${language.label} chunk",
        "meaning": "${language.translationLabel} meaning",
        "note": "short learner note, blank if not needed"
      }
    ],
    "bestBit": {
      "phrase": "most useful phrase or pattern",
      "literal": "literal idea if useful, blank if not",
      "naturalMeaning": "natural learner-friendly explanation",
      "note": "why this phrase or pattern is useful"
    },
    "examples": [
      {
        "target": "similar natural ${language.label} example",
        "english": "${language.translationLabel} translation"
      }
    ],
    "usageNote": "short regional or grammar note"
  }
}
`.trim();

  const result = await callOpenAi(apiKey, model, prompt);
  const explanation = result.explanation || result;

  return {
    explanation: {
      means: explanation.means || "",
      naturalVersion: explanation.naturalVersion || "",
      breakdown: Array.isArray(explanation.breakdown) ? explanation.breakdown.slice(0, 12) : [],
      bestBit: explanation.bestBit && typeof explanation.bestBit === "object" ? explanation.bestBit : null,
      examples: Array.isArray(explanation.examples) ? explanation.examples.slice(0, 4) : [],
      usageNote: explanation.usageNote || ""
    }
  };
}

async function handleConversationReviewMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const historyText = Array.isArray(requestBody.history)
    ? requestBody.history
        .slice(-60)
        .map((item, index) => {
          const role = item.role === "coach" ? "Coach" : item.role === "assistant" ? "Coach" : "Learner";
          const parts = [
            `${index + 1}. ${role}: ${truncateForPrompt(item.spanish, 700)}`,
            item.english ? `${language.translationLabel}: ${truncateForPrompt(item.english, 350)}` : "",
            item.correctionSpanish ? `Native version: ${truncateForPrompt(item.correctionSpanish, 500)}` : "",
            item.feedback ? `Quick feedback: ${truncateForPrompt(item.feedback, 300)}` : ""
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

async function handleConversationReviewFinalMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const chunkReviews = Array.isArray(requestBody.chunkReviews)
    ? requestBody.chunkReviews.slice(0, 12)
    : [];
  const reviewText = chunkReviews
    .map((chunkReview, index) => {
      const review = chunkReview.review || chunkReview;
      const mainFixes = Array.isArray(review.mainFixes)
        ? review.mainFixes.map((item) => `- ${item.point || ""}: ${item.fix || ""} (${item.explanation || ""})`).join("\n")
        : "";
      const phrases = Array.isArray(review.naturalPhrases)
        ? review.naturalPhrases.map((item) => `- ${item.phrase || ""}: ${item.english || ""} (${item.note || ""})`).join("\n")
        : "";
      return `
Section ${index + 1}
Summary: ${review.summary || ""}
Strengths: ${Array.isArray(review.strengths) ? review.strengths.join("; ") : ""}
Main fixes:
${mainFixes}
Natural phrases:
${phrases}
Patterns: ${Array.isArray(review.patterns) ? review.patterns.join("; ") : ""}
Drills: ${Array.isArray(review.drills) ? review.drills.join("; ") : ""}
Next goal: ${review.nextGoal || ""}
`.trim();
    })
    .join("\n\n");

  const prompt = `
Combine these section reviews into one advanced, detailed review of the full ${language.label} learning conversation.

Target language: ${language.natural}
Topic: ${requestBody.topic || "general conversation"}
Tone: ${requestBody.tone || "informal"}
Practice goal: ${requestBody.goal || "natural-flow"}

Section reviews:
${reviewText || "No section reviews provided."}

Rules:
- Synthesize across the whole conversation, not just the final section.
- Prioritise repeated patterns and the highest-value fixes.
- Remove duplicates from the section reviews.
- Keep explanations in ${language.explanationLabel}.
- Keep target-language examples only in ${language.label}.
- Include concrete phrases the learner can reuse.
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

async function handleWordExamplesMode(apiKey, model, requestBody) {
  const language = getLanguageProfile(requestBody.targetLanguage);
  const requestedCount = Math.min(8, Math.max(3, Number(requestBody.count) || 5));
  const prompt = `
Create ${requestedCount} natural example sentences for a saved vocabulary word.

Target language: ${language.natural}
Word or phrase: ${requestBody.word || ""}
Meaning/context: ${requestBody.meaning || "unknown"}
Learner's saved example: ${requestBody.example || "none"}
Topic: ${requestBody.topic || "daily life"}

Rules:
- Use ${language.natural} only for the target-language sentence.
- Make every example sound like something a real person would say.
- Keep the examples short enough to shadow aloud.
- Include the word naturally, or a clearly inflected form if grammar requires it.
- Put the ${language.translationLabel} translation in the "english" legacy field.
- Do not include Spanish unless the selected target language is Spanish.
- Reply with JSON only.

Use this JSON shape:
{
  "examples": [
    {
      "spanish": "string",
      "english": "string"
    }
  ]
}
`.trim();

  const result = await callOpenAi(apiKey, model, prompt);
  const examples = Array.isArray(result.examples) ? result.examples.slice(0, requestedCount) : [];

  if (!examples.length || examples.some((example) =>
    !example.spanish ||
    hasWrongLanguageMarkers(example.spanish, language) ||
    (language.bannedCheck && hasBannedWords(example.spanish))
  )) {
    throw new Error("The AI returned invalid word examples.");
  }

  return {
    examples: examples.map((example) => ({
      spanish: example.spanish,
      english: example.english || ""
    }))
  };
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
    } else if (requestBody.mode === "word-details") {
      result = await handleWordDetailsMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "sentence-explain") {
      result = await handleSentenceExplainMode(apiKey, model, requestBody);
      } else if (requestBody.mode === "conversation-review") {
        result = await handleConversationReviewMode(apiKey, model, requestBody);
      } else if (requestBody.mode === "conversation-review-final") {
        result = await handleConversationReviewFinalMode(apiKey, model, requestBody);
      } else if (requestBody.mode === "conversation-repair") {
      result = await handleConversationRepairMode(apiKey, model, requestBody);
    } else if (requestBody.mode === "word-examples") {
      result = await handleWordExamplesMode(apiKey, model, requestBody);
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
