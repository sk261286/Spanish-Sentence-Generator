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

const QUALITY_WARNING_PATTERNS = [
  { label: "wrong article/number with tiritas", target: "spanish", pattern: /\bun tiritas\b/i },
  { label: "wrong collocation: tiritas de calor", target: "spanish", pattern: /\btiritas de calor\b/i },
  { label: "odd phrasing: breakfast making itself", target: "spanish", pattern: /\bse hac[ei][aí] el desayuno\b/i },
  { label: "awkward DNI/photo logic", target: "spanish", pattern: /\bDNI\b[\s\S]{0,80}\bfoto del m[oó]vil\b/i },
  { label: "timeline mismatch: one-off present perfect mixed with luego siempre", target: "spanish", pattern: /\bhe\s+[a-záéíóúñ]+(?:ado|ido)\b[\s\S]{0,120}\bluego siempre\b/i },
  { label: "illogical household fix: tape used to stop a lightbulb flickering", target: "spanish", pattern: /\bbombilla\b[\s\S]{0,100}\bcinta\b[\s\S]{0,80}\bparpade/i },
  { label: "unhealthy gym logic: training through illness with ibuprofen", target: "spanish", pattern: /\bgarganta\b[\s\S]{0,120}\bgimnasio\b[\s\S]{0,120}\bibuprofeno\b/i },
  { label: "ambiguous garage booking: reserva del taller", target: "spanish", pattern: /\breserva del taller\b/i },
  { label: "unclear agency after leaving something with someone", target: "spanish", pattern: /\ble dej[eé][\s\S]{0,80}\ba mi vecin[ao][\s\S]{0,120}\bse me (cay[oó]|rompi[oó]|perdi[oó])/i },
  { label: "mechanical domain mix: booking an appointment at a pharmacy to buy something", target: "spanish", pattern: /pedir cita en la farmacia para comprar/i },
  { label: "mechanical domain mix: appointment at a pharmacy to buy something", target: "spanish", pattern: /cita en la farmacia para comprar/i },
  { label: "backwards appointment logic: booking an appointment because it was already forgotten", target: "spanish", pattern: /pedir cita[\s\S]{0,100}olvidad[oa][\s\S]{0,60}apunt/i },
  { label: "mechanical domain mix in English translation", target: "english", pattern: /book an appointment at the pharmacy to buy/i },
  { label: "awkward English translation: Do you fancy if", target: "english", pattern: /\bdo you fancy if\b/i },
  { label: "awkward English translation: Do you fancy me doing", target: "english", pattern: /\bdo you fancy me\b/i },
  { label: "awkward English translation: get the problem off my hands", target: "english", pattern: /\b(get|got) the problem off my hands\b/i },
  { label: "awkward English translation: low music on", target: "english", pattern: /\blow music on\b/i },
  { label: "awkward English translation starts with I, if", target: "english", pattern: /^i,\s+if\b/i },
  { label: "translation uses American spelling center instead of British centre", target: "english", pattern: /\bcity center\b|\bthe center\b/i }
];

const SPANISH_IDIOM_PATTERNS = [
  /venir(le|me|te|nos|os|les)? (de perlas|de lujo|genial)/i,
  /echar(le|me|te|nos|os|les)? una mano/i,
  /estar hasta arriba/i,
  /ponerse las pilas/i,
  /ir al grano/i,
  /estar en las nubes/i,
  /hacerse un l[ií]o/i,
  /no tener ni pies ni cabeza/i,
  /quedarse de piedra/i,
  /costar un ojo de la cara/i,
  /dar en el clavo/i,
  /tener pinta/i,
  /estar hecho polvo/i,
  /echar de menos/i,
  /irse de las manos/i,
  /pasarse volando/i,
  /se me ha pasado.*volando/i,
  /se me ha echado.*encima/i,
  /se me fue la olla/i,
  /a toda prisa/i,
  /por si acaso/i,
  /de vez en cuando/i,
  /en un abrir y cerrar de ojos/i,
  /de buenas a primeras/i,
  /al pie de la letra/i,
  /sin comerlo ni beberlo/i,
  /pillar(le|me|te|nos|os|les)? el toro/i,
  /estar al loro/i,
  /no dar abasto/i
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

const VARIETY_LANES = [
  "a tiny domestic moment at home that is not about shopping or laundry",
  "a social moment with a friend, neighbour, colleague, or family member",
  "a small problem while travelling around town",
  "a plan, decision, or change of mind during an ordinary day",
  "a minor mistake, misunderstanding, or forgotten detail",
  "a personal preference, opinion, habit, or routine",
  "a quick interaction in a cafe, shop, gym, office, or street",
  "a relaxed moment of free time, rest, hobbies, or entertainment",
  "a practical task that has one clear reason and outcome",
  "a natural comment about weather, noise, timing, mood, or plans",
  "a small interaction with a neighbour, receptionist, waiter, shop assistant, trainer, or colleague",
  "a practical household fix that is not laundry, coffee, sofa, TV, or phone related",
  "a minor health, gym, appointment, or pharmacy situation with clear logic",
  "a moment involving money, tickets, receipts, opening hours, queues, or a booking",
  "a small favour, reminder, cancellation, invitation, or change of arrangement"
];

const STRUCTURE_LANES = [
  "Use one clean main clause with one natural extra detail.",
  "Use a cause-and-effect structure, but make the cause and effect obvious.",
  "Use a contrast such as aunque, pero, sin embargo, or an equivalent natural connector.",
  "Use a time expression naturally, but do not start with hoy, esta manana, or anoche if recent sentences already did.",
  "Use a natural spoken aside or opinion, but keep it concise.",
  "Use a conditional or hypothetical structure if it sounds natural.",
  "Use a sequence of two connected actions, not a chain of unrelated events."
];

const QUESTION_STRUCTURE_LANES = [
  "Use a short, natural question a person would genuinely ask.",
  "Use a polite permission question, but only if the action involves the listener.",
  "Use an indirect question naturally, such as asking whether someone has seen, knows, or remembers something."
];

const OVERUSED_DAILY_LIFE_PATTERNS = [
  "Do not default to supermarket, bakery, laundry, milk, dinner, sofa, being exhausted after work, or rushing unless the user specifically chose that topic.",
  "Avoid repeating errands and chores as the main scene when recent sentences already contain them.",
  "Avoid starting several sentences with hoy, esta manana, anoche, como, cuando, or al volver.",
  "Avoid repeatedly using dar una vuelta, dar un paseo, leer un rato, ver una serie, desconectar, me vino genial, me vino de lujo, or me vino de perlas.",
  "Avoid repeatedly using me voy a pasar por, me quedo/me quede, suelo, prefiero, creo que, para mi, como, or la verdad as the main sentence shape.",
  "Avoid overusing se me as the default way to create a small problem. It is useful, but a batch should not sound built around it.",
  "Avoid clustering around coffee, reading, walks, buses, phones, TV, sofas, free afternoons, and switching off."
];

const RECENT_MOTIFS = [
  { label: "coffee, cafes, bars, or coffee machines", patterns: [/caf[eé]/i, /\bbar\b/i] },
  { label: "keys, doors, locks, or getting locked out", patterns: [/llaves?/i, /puerta/i, /cerradura/i] },
  { label: "laundry, washing machines, or clothes drying", patterns: [/lavadora/i, /colada/i, /ropa tendida/i] },
  { label: "supermarkets, bakeries, groceries, or running out of food", patterns: [/s[uú]per/i, /panader/i, /compra/i, /leche/i, /fruter/i] },
  { label: "cooking, dinner, takeaway, or ordering food", patterns: [/cocinar/i, /cena/i, /tapas/i, /comida/i] },
  { label: "watching series, sofa, or staying home because tired", patterns: [/serie/i, /sof[aá]/i, /reventad/i] },
  { label: "reading, books, comics, libraries, or spending free time reading", patterns: [/leer/i, /libro/i, /biblioteca/i, /c[oó]mic/i] },
  { label: "walks, parks, neighbourhood strolls, or clearing your head outside", patterns: [/paseo/i, /dar una vuelta/i, /parque/i, /barrio/i, /despej/i] },
  { label: "phones, tablets, screens, or switching devices off", patterns: [/m[oó]vil/i, /tablet/i, /pantalla/i, /apagar/i] },
  { label: "resting, switching off, or desconectar", patterns: [/desconectar/i, /descans/i, /relaj/i] },
  { label: "free afternoons, free time, or things being useful for switching off", patterns: [/tarde libre/i, /rato libre/i, /tiempo libre/i, /me vino (genial|de lujo|de perlas)/i] },
  { label: "pharmacies, plasters, cuts, or minor health errands", patterns: [/farmacia/i, /tirit/i, /corte/i] },
  { label: "doctor appointments, calendars, or admin reminders", patterns: [/m[eé]dic/i, /cita/i, /calendario/i, /apunt/i] },
  { label: "guitars, music, or noisy neighbours", patterns: [/guitarra/i, /m[uú]sica/i, /ruido/i, /obra/i, /vecin/i] },
  { label: "rushing, lateness, or getting short on time", patterns: [/tarde/i, /prisa/i, /corriendo/i, /pitando/i, /tiempo justo/i] },
  { label: "rubbish, bins, or taking things downstairs", patterns: [/basura/i, /bolsas/i, /bajar/i] },
  { label: "public transport, metro, buses, or commuting", patterns: [/metro/i, /bus/i, /autob[uú]s/i, /trayecto/i] }
];

const SUPPLEMENTAL_RECENT_MOTIFS = [
  { label: "appointments, bookings, interviews, or rescheduling", patterns: [/cita/i, /reserv/i, /cambiarla/i, /entrevista/i] },
  { label: "windows, blinds, cold air, or dust coming in", patterns: [/ventana/i, /persiana/i, /fr[iÃ­]o/i, /polvo/i] },
  { label: "office, email, reports, computers, or admin work", patterns: [/oficina/i, /correo/i, /informe/i, /ordenador/i, /tr[aÃ¡]mite/i] },
  { label: "plumbers, taps, dripping, or household repairs", patterns: [/fontanero/i, /grifo/i, /gote/i, /arregl/i] }
];

function getLanguageProfile(targetLanguage) {
  return LANGUAGE_PROFILES[targetLanguage] || LANGUAGE_PROFILES.spanish;
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRecentMotifWarnings(recentSentences) {
  const recentText = Array.isArray(recentSentences)
    ? recentSentences.slice(-8).join("\n")
    : "";

  if (!recentText) {
    return [];
  }

  return RECENT_MOTIFS.concat(SUPPLEMENTAL_RECENT_MOTIFS)
    .filter((motif) => motif.patterns.some((pattern) => pattern.test(recentText)))
    .map((motif) => motif.label)
    .slice(0, 5);
}

function getRepeatedMotifProblems(spanishText, recentSentences) {
  const recentText = Array.isArray(recentSentences)
    ? recentSentences.slice(-8).join("\n")
    : "";

  if (!spanishText || !recentText) {
    return [];
  }

  return RECENT_MOTIFS.concat(SUPPLEMENTAL_RECENT_MOTIFS)
    .filter((motif) =>
      motif.patterns.some((pattern) => pattern.test(recentText)) &&
      motif.patterns.some((pattern) => pattern.test(spanishText))
    )
    .map((motif) => `repeated recent motif: ${motif.label}`)
    .slice(0, 3);
}

function getStructureLane(focus) {
  return pickRandom(focus === "questions" ? QUESTION_STRUCTURE_LANES : STRUCTURE_LANES);
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

function hasLikelySpanishIdiom(spanishText) {
  return SPANISH_IDIOM_PATTERNS.some((pattern) => pattern.test(spanishText || ""));
}

function hasLikelySpanishPreterite(spanishText) {
  return /\b(fui|fuiste|fue|fuimos|fueron|hice|hiciste|hizo|hicimos|hicieron|vi|viste|vio|vimos|vieron|di|diste|dio|dimos|dieron|puse|pusiste|puso|pusimos|pusieron|tuve|tuviste|tuvo|tuvimos|tuvieron|estuve|estuviste|estuvo|estuvimos|estuvieron|llegu[eé]|compr[eé]|dej[eé]|sal[ií]|pag[uú]e|ped[ií]|recog[ií]|perd[ií]|encontr[eé]|llam[eé]|cambi[eé]|arregl[eé]|reserv[eé]|se me olvid[oó]|me di cuenta)\b/i.test(spanishText || "") ||
    /\b[a-záéíóúñ]+(é|aste|ó|amos|asteis|aron|í|iste|ió|imos|isteis|ieron)\b/i.test(spanishText || "");
}

function getGrammarGoalProblems(spanishText, grammarGoal = "") {
  const goal = String(grammarGoal || "").toLowerCase();
  const text = String(spanishText || "").toLowerCase();
  const problems = [];

  if (goal.includes("simple completed past") || goal.includes("pretérito indefinido") || goal.includes("preterite")) {
    if (/[¿?]/.test(text) || /\b(mañana|voy a|vas a|va a|vamos a|si te viene bien|te recojo|te dejo)\b/i.test(text)) {
      problems.push("simple past goal returned a question, future, or conditional plan");
    }

    if (!hasLikelySpanishPreterite(spanishText)) {
      problems.push("simple past goal did not contain a clear preterite/simple-past action");
    }
  }

  if (goal.includes("direct everyday statement about exactly one")) {
    if (/[¿?]/.test(text)) {
      problems.push("direct-statement goal returned a question");
    }

    const practicalDomainPatterns = [
      /arregl|enchuf|grifo|bombilla|persiana|caldera|tornill|puerta|silla|mesa|wifi|router|fregadero|recibo|factura|pago|pag[ué]|cobro|tarjeta|transferencia|reserva|reserv[eé]|cita|horario|abre|cierr|ticket|justificante|devoluci[oó]n|garant[ií]a|gesti[oó]n|tr[aá]mite|correo|formulario|documento|banco|seguro|ayuntamiento/i
    ];

    if (!practicalDomainPatterns.some((pattern) => pattern.test(spanishText || ""))) {
      problems.push("direct practical statement missed the requested household/admin/payment/receipt/opening-hours/booking domain");
    }
  }

  if (goal.includes("present tense for a current habit") || goal.includes("current habit or routine")) {
    const hasHabitMarker = /\b(siempre|normalmente|cada|ultimamente|a menudo|de vez en cuando|por lo general|todos los|todas las|los lunes|los martes|los miercoles|los jueves|los viernes|los sabados|los domingos)\b/i.test(text);

    const usesMananaAsTomorrow = /\bmanana\b/i.test(text) && !/\b(cada manana|por la manana|todas las mananas)\b/i.test(text);
    const hasFuturePlan = usesMananaAsTomorrow || /\b(voy a|vas a|va a|vamos a|la semana que viene|esta tarde voy)\b/i.test(text) ||
      (!hasHabitMarker && /\b(quiero|pedir cita|pedire cita|reservar)\b/i.test(text));

    if (hasFuturePlan) {
      problems.push("present-habit goal returned a future plan instead of a current routine");
    }

    if (/\b(he|has|ha|hemos|habeis|han)\s+[a-zñ]+(ado|ido)\b/i.test(text) && !hasHabitMarker) {
      problems.push("present-habit goal returned a one-off present-perfect event instead of a routine");
    }

    if (!hasHabitMarker) {
      problems.push("present-habit goal did not include a clear habit or routine marker");
    }

    if (/[¿?]/.test(spanishText || "")) {
      problems.push("present-habit goal returned a question instead of a routine statement");
    }
  }

  if (goal.includes("present tense for a current habit") || goal.includes("current habit or routine")) {
    const hasHabitMarker = /\b(siempre|normalmente|cada|ultimamente|a menudo|de vez en cuando|por lo general|todos los|todas las|los lunes|los martes|los miercoles|los jueves|los viernes|los sabados|los domingos)\b/i.test(text);

    if (/\b(manana|voy a|vas a|va a|vamos a|quiero|pedir cita|pedire cita|reservar|la semana que viene|esta tarde voy)\b/i.test(text)) {
      problems.push("present-habit goal returned a future plan instead of a current routine");
    }

    if (/\b(he|has|ha|hemos|habeis|han)\s+[a-zñ]+(ado|ido)\b/i.test(text) && !hasHabitMarker) {
      problems.push("present-habit goal returned a one-off present-perfect event instead of a routine");
    }

    if (hasHabitMarker && hasClearOneOffPastCue(spanishText) && /\b(aunque|pero|y|al final|luego|despues)\b/i.test(text)) {
      problems.push("present-habit goal mixed a one-off past event with a routine marker");
    }

    if (!hasHabitMarker) {
      problems.push("present-habit goal did not include a clear habit or routine marker");
    }

    if (/[Â¿?]/.test(spanishText || "")) {
      problems.push("present-habit goal returned a question instead of a routine statement");
    }
  }

  return problems;
}

function normalizeForQualityCheck(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function hasStableSpanishPreterite(spanishText) {
  const text = normalizeForQualityCheck(spanishText);
  return /\b(fui|fuiste|fue|fuimos|fueron|hice|hiciste|hizo|hicimos|hicieron|vi|viste|vio|vimos|vieron|di|diste|dio|dimos|dieron|puse|pusiste|puso|pusimos|pusieron|tuve|tuviste|tuvo|tuvimos|tuvieron|estuve|estuviste|estuvo|estuvimos|estuvieron|llegue|compre|deje|sali|pague|pedi|recogi|perdi|encontre|llame|cambie|arregle|reserve|se me olvido|me di cuenta)\b/i.test(text) ||
    /\b[a-zñ]+(e|aste|o|amos|asteis|aron|i|iste|io|imos|isteis|ieron)\b/i.test(text);
}

function hasClearOneOffPastCue(spanishText) {
  const text = normalizeForQualityCheck(spanishText);
  return /\b(ayer|anoche|el otro dia|la semana pasada|el lunes pasado|esta manana|al final|fui|fue|hice|hizo|tuve|tuvo|estuve|estuvo|deje|me despiste|despiste|olvide|perdi|rompi|cai|sali|pague|pedi|recogi|encontre|llame|cambie|arregle|reserve|me quede|me di cuenta|se me olvido)\b/i.test(text);
}

function getStableGrammarGoalProblems(spanishText, grammarGoal = "") {
  const goal = normalizeForQualityCheck(grammarGoal);
  const text = normalizeForQualityCheck(spanishText);
  const problems = [];

  if (goal.includes("simple completed past") || goal.includes("preterito indefinido") || goal.includes("preterite")) {
    if (/[¿?]/.test(spanishText || "") || /\b(manana|voy a|vas a|va a|vamos a|si te viene bien|te recojo|te dejo)\b/i.test(text)) {
      problems.push("simple past goal returned a question, future, or conditional plan");
    }

    if (!hasStableSpanishPreterite(spanishText)) {
      problems.push("simple past goal did not contain a clear preterite/simple-past action");
    }
  }

  if (goal.includes("direct everyday statement about exactly one")) {
    if (/[¿?]/.test(spanishText || "")) {
      problems.push("direct-statement goal returned a question");
    }

    const practicalDomainPattern = /arregl|enchuf|grifo|bombilla|persiana|caldera|tornill|puerta|silla|mesa|wifi|router|fregadero|recibo|factura|pago|pague|cobro|tarjeta|transferencia|reserva|reserve|cita|horario|abre|cierr|ticket|justificante|devolucion|garantia|gestion|tramite|correo|formulario|documento|banco|seguro|ayuntamiento/i;

    if (!practicalDomainPattern.test(text)) {
      problems.push("direct practical statement missed the requested household/admin/payment/receipt/opening-hours/booking domain");
    }
  }

  if (goal.includes("present tense for a current habit") || goal.includes("current habit or routine")) {
    const hasHabitMarker = /\b(siempre|normalmente|cada|ultimamente|a menudo|de vez en cuando|por lo general|todos los|todas las|los lunes|los martes|los miercoles|los jueves|los viernes|los sabados|los domingos)\b/i.test(text);

    const usesMananaAsTomorrow = /\bmanana\b/i.test(text) && !/\b(cada manana|por la manana|todas las mananas)\b/i.test(text);
    const hasFuturePlan = usesMananaAsTomorrow || /\b(voy a|vas a|va a|vamos a|la semana que viene|esta tarde voy)\b/i.test(text) ||
      (!hasHabitMarker && /\b(quiero|pedir cita|pedire cita|reservar)\b/i.test(text));

    if (hasFuturePlan) {
      problems.push("present-habit goal returned a future plan instead of a current routine");
    }

    if (/\b(he|has|ha|hemos|habeis|han)\s+[a-zñ]+(ado|ido)\b/i.test(text) && !hasHabitMarker) {
      problems.push("present-habit goal returned a one-off present-perfect event instead of a routine");
    }

    if (hasHabitMarker && hasClearOneOffPastCue(spanishText) && /\b(aunque|pero|y|al final|luego|despues)\b/i.test(text)) {
      problems.push("present-habit goal mixed a one-off past event with a routine marker");
    }

    if (!hasHabitMarker) {
      problems.push("present-habit goal did not include a clear habit or routine marker");
    }

    if (/[Â¿?]/.test(spanishText || "")) {
      problems.push("present-habit goal returned a question instead of a routine statement");
    }
  }

  return problems;
}

function findQualityProblems(spanishText, englishText = "", focus = "", grammarTags = [], grammarGoal = "") {
  const lowerText = spanishText.toLowerCase();
  const problems = QUALITY_WARNING_WORDS.filter((word) => lowerText.includes(word));

  QUALITY_WARNING_PATTERNS.forEach((warning) => {
    const textToCheck = warning.target === "english" ? englishText : spanishText;
    if (warning.pattern.test(textToCheck || "")) {
      problems.push(warning.label);
    }
  });

  const claimsIdiom = focus === "idioms" ||
    (Array.isArray(grammarTags) && grammarTags.some((tag) => String(tag).toLowerCase().includes("idiom")));

  if (claimsIdiom && !hasLikelySpanishIdiom(spanishText)) {
    problems.push("idiom focus did not contain a clear everyday idiom or fixed expression");
  }

  problems.push(...getStableGrammarGoalProblems(spanishText, grammarGoal));

  return problems;
}

function hasBannedWords(spanishText) {
  const lowerText = spanishText.toLowerCase();
  return BANNED_WORDS.some((word) => lowerText.includes(word));
}

function looksLikeSpanish(text) {
  const lowerText = String(text || "").toLowerCase();
  const spanishMarkers = [
    "¿",
    "¡",
    "ñ",
    "á",
    "é",
    "í",
    "ó",
    "ú",
    " que ",
    " de ",
    " el ",
    " la ",
    " los ",
    " las ",
    " una ",
    " un ",
    " tengo ",
    " voy ",
    " quiero ",
    " necesito "
  ];

  return spanishMarkers.filter((marker) => ` ${lowerText} `.includes(marker)).length >= 2;
}

function validateTargetLanguage(sentence, language, targetLanguage) {
  const targetText = String(sentence?.spanish || "").trim();
  const translationText = String(sentence?.english || "").trim();

  if (!targetText || !translationText) {
    const error = new Error("The AI sentence was missing required fields.");
    error.publicMessage = "The AI did not return a complete sentence and translation.";
    throw error;
  }

  if (targetLanguage === "english" && looksLikeSpanish(targetText)) {
    const error = new Error("The AI returned Spanish in the target sentence field.");
    error.publicMessage = "The AI returned Spanish instead of English. Please try again.";
    throw error;
  }
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
    requestBody.temperature = 0.7;
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

async function generateSentenceWithQualityCheck(apiKey, model, difficulty, topic, tone, focus = "mixed", recentSentences = [], targetLanguage = "spanish", grammarGoal = "") {
  const language = getLanguageProfile(targetLanguage);
  const topicInstruction = topic === "all"
    ? "Choose one topic from: daily life, gym/fitness, food, travel, work, sleep."
    : `Use this topic: ${topic}.`;

  const toneInstruction = tone === "all"
    ? "Choose either formal or informal, then return the chosen tone in the JSON."
    : `Use this tone: ${tone}.`;
  const focusInstructions = {
    mixed: "Use any natural grammar pattern that suits the sentence, but vary tense and structure across requests.",
    past: "Focus on past-tense practice. For a one-off completed event, use simple past / preterite naturally. In Spanish, prefer pretérito indefinido such as fui, hice, compré, llegué, vi. Use present perfect only when the time frame is recent or still connected to now, such as hoy or esta semana. Use imperfect only for background, description, or repeated past habits.",
    future: "Focus on future plans. Use ir a + infinitive, querer + infinitive, or a natural future expression.",
    questions: "Generate a natural question a person might actually ask.",
    opinions: "Focus on opinions, preferences, or contrasts. Vary the phrasing: use natural options such as me da la sensación de que, no me convence, lo que más me gusta es, me parece mejor, prefiero, or a direct opinion. Do not default to starting every opinion with para mí.",
    subjunctive: "Focus on subjunctive practice. Use a natural trigger such as espero que, es importante que, aunque, or para que.",
    idioms: `Use one natural ${language.label} idiomatic expression, but keep it learner-friendly.`
  };
  const focusInstruction = focusInstructions[focus] || focusInstructions.mixed;
  const idiomExamplesInstruction = focus === "idioms"
    ? "- Good Spain-Spanish idiom/fixed-expression examples include: a toda prisa, por si acaso, de vez en cuando, estar hasta arriba, ponerse las pilas, echar una mano, no dar abasto, hacerse un lio, pillar el toro, estar hecho polvo, ir al grano, quedarse de piedra, and se me ha echado el tiempo encima."
    : "";
  const grammarGoalInstruction = grammarGoal
    ? `- Batch grammar/tense goal: ${grammarGoal}`
    : "";
  const normalizedGrammarGoal = normalizeForQualityCheck(grammarGoal);
  const grammarGoalGuardInstruction = normalizedGrammarGoal.includes("present tense for a current habit") || normalizedGrammarGoal.includes("current habit or routine")
    ? "- This is a habit/routine goal: write a current repeated routine in present tense with an explicit marker such as siempre, cada manana, cada tarde, todos los lunes, de vez en cuando, a menudo, por lo general, or normalmente. Vary the marker and do not reuse the exact same opening marker from recent examples; do not default to normalmente. Do not write a future plan, booking, appointment, one-off event, or question."
    : "";
  const recentSentenceText = Array.isArray(recentSentences) && recentSentences.length
    ? recentSentences.slice(-12).map((sentence) => `- ${sentence}`).join("\n")
    : "None.";
  const recentMotifs = getRecentMotifWarnings(recentSentences);
  const recentMotifText = recentMotifs.length
    ? recentMotifs.map((motif) => `- ${motif}`).join("\n")
    : "- No strong recent motifs detected.";
  const varietyLane = pickRandom(VARIETY_LANES);
  const structureLane = getStructureLane(focus);

  const generationPrompt = `
Generate exactly one ${language.natural} sentence for a language learner.

Rules:
- Difficulty: ${difficulty}
- ${topicInstruction}
- ${toneInstruction}
- Focus: ${focusInstruction}
${idiomExamplesInstruction}
${grammarGoalInstruction}
${grammarGoalGuardInstruction}
- Variety lane for this request: ${varietyLane}.
- Structure lane for this request: ${structureLane}
- If the batch grammar/tense goal and the variety lane conflict, follow the batch grammar/tense goal.
- The variety lane is only inspiration for freshness; it must not override the requested tense, focus, or domain.
- It must sound like something a native speaker from the requested region would actually say in everyday life.
- Prefer common spoken phrasing over literary, textbook, overly formal, or translated-sounding wording.
- Keep verb phrases, pronouns, and time expressions in a natural order for ${language.label}.
- Do not make the sentence awkward just to show off grammar.
- If a specific grammar/tense goal is provided, satisfy it clearly while keeping the sentence natural.
- Do not mechanically combine words from the grammar/tense goal. Choose one coherent everyday domain and build a believable sentence around it.
- If the goal lists possible domains, choose exactly one unless a second one is truly needed for the logic.
- For example, do not write "pedir cita en la farmacia para comprar colutorio"; that combines appointment and shopping logic in a way that sounds artificial.
- Do not contradict the grammar/tense goal. If the goal asks for simple completed past, do not return a future, conditional, present habit, or general plan.
- For simple past / completed past in Spanish, do not default to "he + participle"; use a clear preterite form unless a recent-time expression makes present perfect more natural.
- If the focus is idioms, include a real everyday idiom or fixed expression inside the sentence itself and make sure the grammarTags include "Idiom". Do not label an ordinary sentence as an idiom.
- If the sentence does not contain a real idiom or fixed expression, do not use the "Idiom" grammar tag.
- Do not turn an ordinary statement into a question unless the focus is questions or the grammar goal explicitly asks for a question.
- Avoid repeated permission-question openings such as "¿Te parece si...?", "¿Te apetece que...?", "¿Te importa si...?", unless the listener's opinion or permission genuinely matters.
- In Spanish, avoid "¿Te apetece que me + verb...?" when the speaker is only asking permission to do something for themselves. Prefer "¿Te importa si...?" for permission, or a direct statement such as "Me voy a..." when no permission is needed.
- Avoid "¿Te parece si cambio..." unless the speaker is genuinely negotiating a shared plan with the listener.
- Use specific everyday details, but avoid overloading the sentence with too many clauses.
- The sentence must describe one believable everyday situation.
- Every clause must logically connect to the others.
- Use one clear scene with at most two supporting details unless the selected grammar focus needs more.
- Do not combine unrelated events just to make the sentence longer or more advanced.
- Do not mix a one-off completed action with routine words such as "siempre" or "luego siempre" unless the timing is clearly logical. For example, use "Siempre dejo..." for a habit, or "He dejado... y ahora..." for one specific event.
- If one event causes another, the cause and effect must make real-world sense.
- Avoid impossible or ambiguous ownership, such as making it sound as if a pet, object, or place owns something it cannot own.
- If the scene involves looking after a pet, make the relationship explicit, for example keys to the neighbour's flat/house, not "the cat's keys".
- Do not rely on the "between X and Y" / "entre X y Y" pattern as the default way to create complexity. Use it only when it is genuinely the most natural structure.
- Natural native shorthand is good when it is genuinely common, such as everyday colloquial words or clipped phrases.
- Avoid odd compressed shorthand that a native speaker might understand but would probably not choose as the natural default.
- IMPORTANT: the JSON key names are legacy names. The "spanish" field must contain the target-language sentence in ${language.label}. The "english" field must contain the ${language.translationLabel} translation.
- For English mode, the "spanish" field MUST be English, and the "english" field MUST be Spanish.
- Return one natural ${language.translationLabel} translation in the "english" legacy field.
- The ${language.translationLabel} translation must sound natural too. For English translations, avoid awkward literal phrasing such as "Do you fancy if..." or "Do you fancy me doing..." unless that is truly the intended colloquial meaning. Prefer "Would it be okay if...", "Do you mind if...", "I feel like...", or a direct natural translation.
- For English translations from Spanish, use natural British English spelling and wording where possible, such as centre, neighbourhood, plasters, and mobile.
- If the Spanish sentence uses both "factura" and "recibo", make the English distinction clear, such as invoice/bill/receipt, instead of translating both as "bill".
- Avoid clunky English openings such as "I, if..." Rewrite them as "If I..." or a more natural sentence.
- Do not translate word-for-word if it creates unnatural ${language.translationLabel}; preserve the meaning in natural language.
- Return 1 to 3 grammarTags explaining the main skill being practised, such as "Past tense", "Question", "Opinion", "Subjunctive", "Idiom", "Connector", "Reflexive verb", or "Future plans".
- Avoid repeating these recent sentences, their wording, and their grammar pattern:
${recentSentenceText}
- Do not use these motifs because they appeared recently, unless the selected topic makes them unavoidable:
${recentMotifText}
- Treat those recent motifs as a hard avoid list for this request. Choose a different scene, object, location, and main action.
- Vary the scene, verbs, sentence structure, and time expression from the recent examples.
- Do not make a tiny variation of a recent sentence by only adding or removing a final phrase.
- If a recent sentence mentions a similar situation, choose a completely different situation within the same topic.
- Prefer a different opening word and a different main verb from the most recent examples.
- Variation guardrails:
  ${OVERUSED_DAILY_LIFE_PATTERNS.map((rule) => `- ${rule}`).join("\n  ")}
- Do not reuse the same main location, object, problem, chore, or errand from the recent examples unless the selected topic makes that unavoidable.
- Pick a fresh set of main nouns and objects, not just a fresh verb around the same everyday props.
- If the topic is broad, spread examples across different parts of life instead of repeatedly using food, chores, shopping, work, or tiredness.
- Watch for "almost logical" mistakes:
  - Do not create a reason that does not explain the action.
  - Do not make the action solve the wrong problem.
  - Do not say someone went back to do something that would already be impossible or unnecessary.
  - Do not create unclear pronoun ownership or unclear references.
  - If keys are involved, make it clear what door/place they open and why the person has them.
- Avoid these common awkward patterns:
  - Do not write "se me ha quedado sin tinta la impresora"; prefer "a la impresora se le ha acabado la tinta" or "me he quedado sin tinta en la impresora".
  - Do not say someone takes the whole bin to the building entrance unless that is truly meant; normally they take the rubbish bag out or take it to the container.
  - Do not use "quedarse sin" with a thing as if the thing were the person affected unless that is the natural grammar in ${language.label}.
  - Do not write "un tiritas"; use "una tirita" or "unas tiritas".
  - Do not write "tiritas de calor"; use "parches de calor" if you mean heat patches.
  - Do not write "mientras se hace el desayuno" unless breakfast is genuinely being prepared by someone. Prefer "mientras preparo el desayuno" or use a different action.
  - Do not create odd ID-card/photo logic, such as renewing a DNI and then changing a phone photo because the old one was embarrassing.
  - Do not use tape as a fix for a flickering lightbulb. Change the bulb, tighten it, check the fitting, or call someone if that is the situation.
  - If someone feels ill, do not make the sentence about pushing through exercise with ibuprofen. Choose rest, changing plans, or calling a doctor/pharmacy if needed.
  - If you mean an appointment at a garage/mechanic's workshop, use "cita en el taller", not "reserva del taller". Only use "reserva" if it is a class, event, table, ticket, or booking service.
  - Keep agency clear when someone else is looking after an object. Do not write "le dejé X a mi vecina..." and then "se me cayó..." unless it is clear the speaker caused it.
  - Avoid "¿Te apetece que me..." for self-focused actions. It usually asks the wrong person whether they fancy the speaker doing something.
  - Avoid translating "¿Te apetece...?" as "Do you fancy if..."; that is not natural English.
- Perform a quality-check step after generating:
  Check the ${language.label} sentence for invented words, unnatural phrasing, stiff word order, wrong-region vocabulary, ambiguous ownership, unrelated clauses, weak cause-and-effect, or anything a native speaker would probably not say.
  Also check the ${language.translationLabel} translation for awkward literal English or mismatched meaning.
  Ask silently: "Would a real person actually say this because these events belong together?"
  If found, rewrite it into ${language.natural} before returning it.
- Silently choose the most natural final version. Do not show drafts or explain the check.
- The ${language.translationLabel} translation must match the exact final sentence meaning. Do not invent or smooth over a different situation.
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
  validateTargetLanguage(sentence, language, targetLanguage);
  const problems = language.bannedCheck
    ? findQualityProblems(sentence.spanish || "", sentence.english || "", focus, sentence.grammarTags || [], grammarGoal)
      .concat(getRepeatedMotifProblems(sentence.spanish || "", recentSentences))
    : [];

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
- If the problems mention a missing idiom, include one real everyday idiom or fixed expression in the Spanish sentence itself.
- If the problems mention mechanical domain mixing, rewrite the sentence around one coherent everyday situation.
- If the problems mention a simple-past goal, rewrite with one clear completed past action in preterite/pretérito indefinido, not a future plan or question.
- If the problems mention the direct practical statement goal, rewrite as a statement about one household fix, admin task, payment, receipt, opening-hours issue, or booking.
- If the problems mention the present-habit goal, rewrite as a current repeated routine or habit in present tense, not a one-off event, present-perfect event, future plan, booking, appointment, or question.
- If the problems mention a repeated recent motif, choose a different scene, object, place, and main action.
- If the problems mention backwards appointment logic, make the booking logic realistic, such as booking it now so it does not get forgotten later.
- If the problems mention a timeline mismatch, choose either a clear habit/routine or a clear one-off event, not both at once.
- If the problems mention an illogical household fix, rewrite the repair so it is practical and believable.
- If the problems mention unhealthy gym logic, rewrite the health situation so the person rests, changes plans, or seeks sensible help.
- If the problems mention unclear agency, make it clear who did the action and who the accident happened to.
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
    validateTargetLanguage(sentence, language, targetLanguage);
  }

  let finalProblems = language.bannedCheck
    ? findQualityProblems(sentence.spanish || "", sentence.english || "", focus, sentence.grammarTags || [], grammarGoal)
    : [];

  if (language.bannedCheck && finalProblems.length) {
    const finalRepairPrompt = `
Your previous sentence still failed the app quality check.

Current Spanish:
${sentence.spanish}

Current ${language.translationLabel} translation:
${sentence.english}

Problems still found:
${finalProblems.join(", ")}

Rewrite it one final time.

Hard requirements:
- Follow the target language and region exactly: ${language.natural}.
- Preserve the requested difficulty, topic, tone, and focus.
- If there is a grammar/tense goal, satisfy it visibly.
- If this is a current habit/routine goal, use present tense with a clear habit marker such as siempre, normalmente, cada tarde, todos los lunes, de vez en cuando, or por lo general.
- Do not use future plans, appointments, bookings, or questions for a habit/routine goal.
- Keep the situation coherent: one scene, one main action, one clear reason or consequence.
- Make the ${language.translationLabel} translation natural and exactly matched to the final sentence.
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

    sentence = await callOpenAi(apiKey, model, finalRepairPrompt);
    validateTargetLanguage(sentence, language, targetLanguage);
    finalProblems = findQualityProblems(sentence.spanish || "", sentence.english || "", focus, sentence.grammarTags || [], grammarGoal);
  }

  if (language.bannedCheck && finalProblems.length) {
    const nonFatalMissingIdiom = finalProblems.length === 1 && finalProblems[0].includes("idiom focus");
    if (!nonFatalMissingIdiom) {
      const error = new Error(`The AI sentence still had quality issues: ${finalProblems.join(", ")}`);
      error.publicMessage = "The AI returned wording that did not pass the naturalness quality check.";
      throw error;
    }
  }

  if (language.bannedCheck && hasBannedWords(sentence.spanish || "")) {
    const error = new Error("The AI sentence still contained banned words after rewriting.");
    error.publicMessage = "The AI returned wording that did not pass the Spain-Spanish quality check.";
    throw error;
  }

  const finalGrammarTags = Array.isArray(sentence.grammarTags) ? sentence.grammarTags.slice(0, 3) : [];
  if (focus === "idioms" && hasLikelySpanishIdiom(sentence.spanish || "") && !finalGrammarTags.some((tag) => String(tag).toLowerCase().includes("idiom"))) {
    finalGrammarTags.unshift("Idiom");
  }

  return {
    spanish: sentence.spanish.trim(),
    english: sentence.english.trim(),
    difficulty: sentence.difficulty || difficulty,
    topic: sentence.topic || topic,
    tone: sentence.tone || tone,
    focus: sentence.focus || focus,
    grammarTags: finalGrammarTags.slice(0, 3)
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
    const grammarGoal = requestBody.grammarGoal || "";
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
      targetLanguage,
      grammarGoal
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
    console.error("Sentence generation failed safely:", safeDetails, error.message || "");
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
