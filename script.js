// This array stores the hand-written example sentence data for the app.
// Each sentence has a difficulty, topic, tone, Spanish text, and English translation.
const baseSentences = [
  { difficulty: "beginner", topic: "daily life", tone: "informal", spanish: "Hoy tengo mucho que hacer en casa.", english: "Today I have a lot to do at home." },
  { difficulty: "beginner", topic: "daily life", tone: "formal", spanish: "Siempre desayuno café con tostadas antes de salir.", english: "I always have coffee and toast before leaving." },
  { difficulty: "beginner", topic: "gym/fitness", tone: "informal", spanish: "Voy al gimnasio tres veces por semana.", english: "I go to the gym three times a week." },
  { difficulty: "beginner", topic: "gym/fitness", tone: "formal", spanish: "Después de entrenar, suelo beber mucha agua.", english: "After training, I usually drink a lot of water." },
  { difficulty: "beginner", topic: "food", tone: "informal", spanish: "Me encanta comer tortilla de patatas los domingos.", english: "I love eating Spanish omelette on Sundays." },
  { difficulty: "beginner", topic: "food", tone: "formal", spanish: "Esta sopa está muy caliente, gracias.", english: "This soup is very hot, thank you." },
  { difficulty: "beginner", topic: "travel", tone: "informal", spanish: "Mañana voy en tren a Madrid.", english: "Tomorrow I am going to Madrid by train." },
  { difficulty: "beginner", topic: "travel", tone: "formal", spanish: "Necesito un mapa para llegar al hotel, por favor.", english: "I need a map to get to the hotel, please." },
  { difficulty: "beginner", topic: "work", tone: "informal", spanish: "Trabajo en una oficina cerca del centro.", english: "I work in an office near the city centre." },
  { difficulty: "beginner", topic: "work", tone: "formal", spanish: "Mi reunión empieza a las nueve en punto.", english: "My meeting starts at nine o'clock sharp." },
  { difficulty: "beginner", topic: "sleep", tone: "informal", spanish: "Por la noche me acuesto bastante temprano.", english: "At night I go to bed fairly early." },
  { difficulty: "beginner", topic: "sleep", tone: "formal", spanish: "Hoy he dormido muy bien, afortunadamente.", english: "I slept very well today, fortunately." },

  { difficulty: "intermediate", topic: "daily life", tone: "informal", spanish: "Aunque salgo tarde de casa, casi nunca pierdo el autobús.", english: "Although I leave home late, I almost never miss the bus." },
  { difficulty: "intermediate", topic: "daily life", tone: "formal", spanish: "Si dispongo de un rato libre, aprovecho para ordenar la habitación.", english: "If I have a bit of free time, I use it to tidy the room." },
  { difficulty: "intermediate", topic: "gym/fitness", tone: "informal", spanish: "Últimamente intento entrenar con más constancia para sentirme mejor.", english: "Lately I try to train more consistently to feel better." },
  { difficulty: "intermediate", topic: "gym/fitness", tone: "formal", spanish: "El monitor me ha recomendado estirar bien después de cada sesión.", english: "The trainer has recommended that I stretch properly after each session." },
  { difficulty: "intermediate", topic: "food", tone: "informal", spanish: "Cuando cocino para amigos, suelo preparar algo sencillo pero sabroso.", english: "When I cook for friends, I usually make something simple but tasty." },
  { difficulty: "intermediate", topic: "food", tone: "formal", spanish: "En este restaurante sirven unas croquetas caseras excelentes.", english: "At this restaurant they serve excellent homemade croquettes." },
  { difficulty: "intermediate", topic: "travel", tone: "informal", spanish: "Antes de viajar, siempre compruebo si el vuelo sale a su hora.", english: "Before travelling, I always check whether the flight is on time." },
  { difficulty: "intermediate", topic: "travel", tone: "formal", spanish: "Nos perdimos por el casco antiguo, pero mereció la pena.", english: "We got lost in the old quarter, but it was worth it." },
  { difficulty: "intermediate", topic: "work", tone: "informal", spanish: "Mi jefa quiere que terminemos el informe antes del viernes.", english: "My boss wants us to finish the report before Friday." },
  { difficulty: "intermediate", topic: "work", tone: "formal", spanish: "Desde que trabajo en remoto, organizo mejor mi tiempo.", english: "Since I started working remotely, I organise my time better." },
  { difficulty: "intermediate", topic: "sleep", tone: "informal", spanish: "Si tomo café después de cenar, luego me cuesta dormirme.", english: "If I drink coffee after dinner, I find it hard to fall asleep later." },
  { difficulty: "intermediate", topic: "sleep", tone: "formal", spanish: "Intento apagar el móvil media hora antes de acostarme.", english: "I try to switch off my phone half an hour before going to bed." },

  { difficulty: "advanced", topic: "daily life", tone: "informal", spanish: "Por mucho que madrugue, la mañana se me pasa volando entre recados y llamadas.", english: "No matter how early I get up, the morning flies by between errands and calls." },
  { difficulty: "advanced", topic: "daily life", tone: "formal", spanish: "A medida que pasan los años, valoro más tener una rutina equilibrada.", english: "As the years go by, I value having a balanced routine more and more." },
  { difficulty: "advanced", topic: "gym/fitness", tone: "informal", spanish: "Si no hubiera empezado a entrenar con un plan serio, ya lo habría dejado.", english: "If I had not started training with a serious plan, I would have already given it up." },
  { difficulty: "advanced", topic: "gym/fitness", tone: "formal", spanish: "Más que ganar músculo deprisa, prefiero mejorar la técnica y evitar lesiones.", english: "Rather than gaining muscle quickly, I prefer improving technique and avoiding injuries." },
  { difficulty: "advanced", topic: "food", tone: "informal", spanish: "No solo me apetece comer bien, sino también entender de dónde vienen los ingredientes.", english: "Not only do I feel like eating well, but also understanding where the ingredients come from." },
  { difficulty: "advanced", topic: "food", tone: "formal", spanish: "Dudo que este plato salga igual de rico si cambiamos el aceite de oliva.", english: "I doubt this dish will turn out just as tasty if we change the olive oil." },
  { difficulty: "advanced", topic: "travel", tone: "informal", spanish: "Siempre que viajo al extranjero, procuro alejarme de las zonas más turísticas.", english: "Whenever I travel abroad, I try to keep away from the most touristy areas." },
  { difficulty: "advanced", topic: "travel", tone: "formal", spanish: "El tren se retrasó tanto que tuvimos que reorganizar todo el itinerario.", english: "The train was so delayed that we had to reorganise the entire itinerary." },
  { difficulty: "advanced", topic: "work", tone: "informal", spanish: "Por muy interesante que sea el proyecto, no compensa si el ambiente es insoportable.", english: "No matter how interesting the project is, it is not worth it if the atmosphere is unbearable." },
  { difficulty: "advanced", topic: "work", tone: "formal", spanish: "Conviene que dejemos por escrito cada decisión para evitar malentendidos más adelante.", english: "It is advisable to put every decision in writing to avoid misunderstandings later on." },
  { difficulty: "advanced", topic: "sleep", tone: "informal", spanish: "Ojalá pudiera dormir del tirón, pero me despierto varias veces de madrugada.", english: "I wish I could sleep straight through, but I wake up several times in the early hours." },
  { difficulty: "advanced", topic: "sleep", tone: "formal", spanish: "En cuanto noto que llevo demasiados días descansando mal, cambio mis hábitos.", english: "As soon as I notice I have been resting badly for too many days, I change my habits." }
];

// This object stores Spanish word hints used by the hover tooltips.
const wordTranslations = {
  a: "to",
  aceite: "oil",
  acostarme: "go to bed",
  acuesto: "go to bed",
  afortunadamente: "fortunately",
  agua: "water",
  al: "to the",
  algo: "something",
  alejarme: "to move away",
  ambiente: "atmosphere",
  amigos: "friends",
  aunque: "although",
  antes: "before",
  apagar: "to switch off",
  apetece: "feel like",
  aprovecho: "I make use of",
  autobús: "bus",
  bastante: "quite / fairly",
  beber: "to drink",
  bien: "well",
  bus: "bus",
  café: "coffee",
  caliente: "hot",
  casi: "almost",
  casco: "old quarter",
  cenar: "to have dinner",
  centro: "centre",
  cocino: "I cook",
  comer: "to eat",
  compensa: "is worth it",
  compruebo: "I check",
  con: "with",
  constancia: "consistency",
  conviene: "it is advisable",
  croquetas: "croquettes",
  cuando: "when",
  casa: "home",
  cambiamos: "we change",
  cambio: "I change",
  cada: "each / every",
  de: "of / from",
  del: "of the / from the",
  demasiados: "too many",
  desayuno: "I have breakfast",
  descansando: "resting",
  decisión: "decision",
  dejado: "given up",
  dejemos: "we leave / we put",
  después: "after",
  desde: "since / from",
  deprisa: "quickly",
  dispongo: "I have available",
  dormir: "to sleep",
  dormido: "slept",
  dormirme: "to fall asleep",
  domingos: "Sundays",
  dudo: "I doubt",
  dónde: "where",
  el: "the",
  en: "in / on",
  encanta: "love",
  entender: "to understand",
  entrenar: "to train",
  entre: "between",
  equilibrada: "balanced",
  escrito: "written / in writing",
  está: "is",
  esta: "this",
  estirar: "to stretch",
  este: "this",
  excelentes: "excellent",
  extranjero: "abroad",
  favor: "please",
  gimnasio: "gym",
  gracias: "thank you",
  habitación: "room",
  hacer: "to do / to make",
  he: "I have",
  hotel: "hotel",
  hoy: "today",
  hubiera: "had",
  igual: "the same",
  informe: "report",
  insoportable: "unbearable",
  intento: "I try",
  itinerario: "itinerary",
  jefa: "boss",
  la: "the",
  las: "the",
  libre: "free",
  llamadas: "calls",
  llevo: "I have been",
  llegar: "to arrive / to get to",
  luego: "then / later",
  madrid: "Madrid",
  mal: "badly",
  mañana: "tomorrow / morning",
  madrugada: "early hours",
  madrugue: "I get up early",
  mapa: "map",
  más: "more",
  me: "me / myself",
  media: "half",
  medida: "measure",
  mejor: "better",
  mereció: "was worth",
  mi: "my",
  móvil: "mobile phone",
  monitor: "trainer / instructor",
  mucha: "a lot of",
  mucho: "a lot / much",
  músculo: "muscle",
  necesito: "I need",
  no: "not / no",
  nos: "we / us",
  noto: "I notice",
  nueve: "nine",
  nunca: "never",
  ojalá: "I wish",
  oficina: "office",
  oliva: "olive",
  ordenar: "to tidy",
  organizo: "I organise",
  patatas: "potatoes",
  pena: "worth it",
  pero: "but",
  perdimos: "we got lost",
  pierdo: "I miss / lose",
  plato: "dish",
  plan: "plan",
  por: "for / by / through",
  porfavor: "please",
  prefiero: "I prefer",
  preparar: "to prepare",
  procuro: "I try",
  proyecto: "project",
  punto: "point / exact",
  que: "that / which",
  quiere: "wants",
  rato: "a little while",
  recados: "errands",
  recomendado: "recommended",
  reorganizar: "to reorganise",
  retrasó: "was delayed",
  reunión: "meeting",
  rico: "tasty",
  salir: "to leave",
  salgo: "I leave",
  sabroso: "tasty",
  semana: "week",
  sesiones: "sessions",
  sesión: "session",
  si: "if",
  siempre: "always",
  sino: "but also / but rather",
  solo: "only",
  sopa: "soup",
  su: "his / her / your",
  suelo: "I usually",
  tanto: "so much / so",
  técnica: "technique",
  temprano: "early",
  tener: "to have",
  terminemos: "we finish",
  tiempo: "time",
  tirón: "straight through",
  tomo: "I drink / I take",
  tortilla: "omelette",
  tostadas: "toast",
  trabajo: "I work / work",
  tren: "train",
  tres: "three",
  tuvimos: "we had to",
  un: "a / one",
  una: "a / one",
  unas: "some",
  valoro: "I value",
  varias: "several",
  veces: "times",
  viajar: "to travel",
  viajo: "I travel",
  viernes: "Friday",
  vienen: "come",
  vuelo: "flight",
  voy: "I go",
  zonas: "areas"
};

// These phrase and grammar maps power the offline custom translator.
const customPhraseMap = {
  "in the morning": "por la mañana",
  "at night": "por la noche",
  "in the afternoon": "por la tarde",
  "every day": "cada día",
  "every week": "cada semana",
  "at home": "en casa",
  "to the gym": "al gimnasio",
  "to madrid": "a Madrid",
  "by train": "en tren",
  "by bus": "en autobús",
  "very well": "muy bien",
  "with my friends": "con mis amigos",
  "with friends": "con amigos",
  "with my family": "con mi familia",
  "before work": "antes del trabajo",
  "after work": "después del trabajo",
  "before dinner": "antes de cenar",
  "after dinner": "después de cenar",
  "at the office": "en la oficina",
  "in the office": "en la oficina",
  "to bed": "a la cama"
};

const customSubjectMap = {
  "i": { informal: "yo", formal: "yo" },
  "you": { informal: "tú", formal: "usted" },
  "we": { informal: "nosotros", formal: "nosotros" },
  "they": { informal: "ellos", formal: "ellos" },
  "he": { informal: "él", formal: "él" },
  "she": { informal: "ella", formal: "ella" }
};

const customVerbMap = {
  "am": { informal: { "i": "estoy", "you": "estás", "we": "estamos", "they": "están", "he": "está", "she": "está" }, formal: { "i": "estoy", "you": "está", "we": "estamos", "they": "están", "he": "está", "she": "está" } },
  "are": { informal: { "i": "estoy", "you": "estás", "we": "estamos", "they": "están", "he": "está", "she": "está" }, formal: { "i": "estoy", "you": "está", "we": "estamos", "they": "están", "he": "está", "she": "está" } },
  "have": { informal: { "i": "tengo", "you": "tienes", "we": "tenemos", "they": "tienen", "he": "tiene", "she": "tiene" }, formal: { "i": "tengo", "you": "tiene", "we": "tenemos", "they": "tienen", "he": "tiene", "she": "tiene" } },
  "need": { informal: { "i": "necesito", "you": "necesitas", "we": "necesitamos", "they": "necesitan", "he": "necesita", "she": "necesita" }, formal: { "i": "necesito", "you": "necesita", "we": "necesitamos", "they": "necesitan", "he": "necesita", "she": "necesita" } },
  "want": { informal: { "i": "quiero", "you": "quieres", "we": "queremos", "they": "quieren", "he": "quiere", "she": "quiere" }, formal: { "i": "quiero", "you": "quiere", "we": "queremos", "they": "quieren", "he": "quiere", "she": "quiere" } },
  "like": { informal: { "i": "quiero", "you": "quieres", "we": "queremos", "they": "quieren", "he": "quiere", "she": "quiere" }, formal: { "i": "quiero", "you": "quiere", "we": "queremos", "they": "quieren", "he": "quiere", "she": "quiere" } },
  "love": { informal: { "i": "me encanta", "you": "te encanta", "we": "nos encanta", "they": "les encanta", "he": "le encanta", "she": "le encanta" }, formal: { "i": "me encanta", "you": "le encanta", "we": "nos encanta", "they": "les encanta", "he": "le encanta", "she": "le encanta" } },
  "drink": { informal: { "i": "bebo", "you": "bebes", "we": "bebemos", "they": "beben", "he": "bebe", "she": "bebe" }, formal: { "i": "bebo", "you": "bebe", "we": "bebemos", "they": "beben", "he": "bebe", "she": "bebe" } },
  "eat": { informal: { "i": "como", "you": "comes", "we": "comemos", "they": "comen", "he": "come", "she": "come" }, formal: { "i": "como", "you": "come", "we": "comemos", "they": "comen", "he": "come", "she": "come" } },
  "go": { informal: { "i": "voy", "you": "vas", "we": "vamos", "they": "van", "he": "va", "she": "va" }, formal: { "i": "voy", "you": "va", "we": "vamos", "they": "van", "he": "va", "she": "va" } },
  "work": { informal: { "i": "trabajo", "you": "trabajas", "we": "trabajamos", "they": "trabajan", "he": "trabaja", "she": "trabaja" }, formal: { "i": "trabajo", "you": "trabaja", "we": "trabajamos", "they": "trabajan", "he": "trabaja", "she": "trabaja" } },
  "sleep": { informal: { "i": "duermo", "you": "duermes", "we": "dormimos", "they": "duermen", "he": "duerme", "she": "duerme" }, formal: { "i": "duermo", "you": "duerme", "we": "dormimos", "they": "duermen", "he": "duerme", "she": "duerme" } },
  "study": { informal: { "i": "estudio", "you": "estudias", "we": "estudiamos", "they": "estudian", "he": "estudia", "she": "estudia" }, formal: { "i": "estudio", "you": "estudia", "we": "estudiamos", "they": "estudian", "he": "estudia", "she": "estudia" } },
  "train": { informal: { "i": "entreno", "you": "entrenas", "we": "entrenamos", "they": "entrenan", "he": "entrena", "she": "entrena" }, formal: { "i": "entreno", "you": "entrena", "we": "entrenamos", "they": "entrenan", "he": "entrena", "she": "entrena" } },
  "prefer": { informal: { "i": "prefiero", "you": "prefieres", "we": "preferimos", "they": "prefieren", "he": "prefiere", "she": "prefiere" }, formal: { "i": "prefiero", "you": "prefiere", "we": "preferimos", "they": "prefieren", "he": "prefiere", "she": "prefiere" } },
  "try": { informal: { "i": "intento", "you": "intentas", "we": "intentamos", "they": "intentan", "he": "intenta", "she": "intenta" }, formal: { "i": "intento", "you": "intenta", "we": "intentamos", "they": "intentan", "he": "intenta", "she": "intenta" } }
};

const customWordMap = {
  "today": "hoy",
  "tomorrow": "mañana",
  "tonight": "esta noche",
  "coffee": "café",
  "water": "agua",
  "food": "comida",
  "breakfast": "desayuno",
  "dinner": "cena",
  "lunch": "comida",
  "home": "casa",
  "house": "casa",
  "office": "oficina",
  "gym": "gimnasio",
  "train": "tren",
  "hotel": "hotel",
  "map": "mapa",
  "meeting": "reunión",
  "room": "habitación",
  "bus": "autobús",
  "work": "trabajo",
  "sleep": "sueño",
  "music": "música",
  "friends": "amigos",
  "family": "familia",
  "early": "temprano",
  "late": "tarde",
  "morning": "mañana",
  "night": "noche",
  "please": "por favor",
  "my": "mi",
  "the": "",
  "a": "un",
  "an": "un",
  "and": "y",
  "with": "con",
  "after": "después de",
  "before": "antes de",
  "in": "en",
  "at": "en",
  "to": "a",
  "very": "muy",
  "good": "bueno",
  "well": "bien"
};

// This object stores built-in reply ideas for the offline chat coach.
const chatPrompts = {
  "daily life": {
    informal: {
      openings: [
        { spanish: "Hola, ¿qué tal? Cuéntame algo sobre tu día.", english: "Hi, how are you? Tell me something about your day." },
        { spanish: "Hola, ¿qué haces normalmente por la mañana?", english: "Hi, what do you normally do in the morning?" }
      ],
      followUps: [
        { spanish: "Suena bien. ¿Y qué haces después?", english: "That sounds good. And what do you do afterwards?" },
        { spanish: "Interesante. ¿Te gusta esa rutina?", english: "Interesting. Do you like that routine?" }
      ]
    },
    formal: {
      openings: [
        { spanish: "Buenos días. ¿Cómo suele ser su día?", english: "Good morning. What is your day usually like?" },
        { spanish: "Hola. ¿Qué hace normalmente por la mañana?", english: "Hello. What do you normally do in the morning?" }
      ],
      followUps: [
        { spanish: "Entiendo. ¿Y qué hace después?", english: "I understand. And what do you do afterwards?" },
        { spanish: "Muy bien. ¿Le gusta esa rutina?", english: "Very good. Do you like that routine?" }
      ]
    }
  },
  "gym/fitness": {
    informal: {
      openings: [
        { spanish: "Hola, ¿te gusta entrenar?", english: "Hi, do you like training?" },
        { spanish: "¿Cuántas veces vas al gimnasio por semana?", english: "How many times do you go to the gym per week?" }
      ],
      followUps: [
        { spanish: "Qué bien. ¿Qué tipo de ejercicio prefieres?", english: "Very nice. What type of exercise do you prefer?" },
        { spanish: "Perfecto. ¿Entrenas por la mañana o por la tarde?", english: "Perfect. Do you train in the morning or in the afternoon?" }
      ]
    },
    formal: {
      openings: [
        { spanish: "Hola. ¿Le gusta hacer ejercicio?", english: "Hello. Do you like exercising?" },
        { spanish: "¿Con qué frecuencia entrena usted?", english: "How often do you train?" }
      ],
      followUps: [
        { spanish: "Muy bien. ¿Qué tipo de ejercicio prefiere?", english: "Very good. What type of exercise do you prefer?" },
        { spanish: "Entiendo. ¿Suele entrenar por la mañana o por la tarde?", english: "I see. Do you usually train in the morning or in the afternoon?" }
      ]
    }
  },
  food: {
    informal: {
      openings: [
        { spanish: "Hola, ¿qué te gusta comer?", english: "Hi, what do you like to eat?" },
        { spanish: "¿Sueles cocinar en casa?", english: "Do you usually cook at home?" }
      ],
      followUps: [
        { spanish: "Qué rico. ¿Cuál es tu plato favorito?", english: "Sounds tasty. What is your favourite dish?" },
        { spanish: "Interesante. ¿Cocinas a menudo?", english: "Interesting. Do you cook often?" }
      ]
    },
    formal: {
      openings: [
        { spanish: "Hola. ¿Qué le gusta comer normalmente?", english: "Hello. What do you normally like to eat?" },
        { spanish: "¿Suele cocinar usted en casa?", english: "Do you usually cook at home?" }
      ],
      followUps: [
        { spanish: "Muy bien. ¿Cuál es su plato favorito?", english: "Very good. What is your favourite dish?" },
        { spanish: "Entiendo. ¿Le gusta preparar comida casera?", english: "I understand. Do you like preparing homemade food?" }
      ]
    }
  },
  travel: {
    informal: {
      openings: [
        { spanish: "Hola, ¿te gusta viajar?", english: "Hi, do you like travelling?" },
        { spanish: "¿A dónde te gustaría viajar pronto?", english: "Where would you like to travel soon?" }
      ],
      followUps: [
        { spanish: "Qué interesante. ¿Prefieres viajar en tren o en avión?", english: "How interesting. Do you prefer travelling by train or by plane?" },
        { spanish: "Suena genial. ¿Viajas con amigos o con familia?", english: "That sounds great. Do you travel with friends or family?" }
      ]
    },
    formal: {
      openings: [
        { spanish: "Hola. ¿Le gusta viajar?", english: "Hello. Do you like travelling?" },
        { spanish: "¿A dónde le gustaría viajar próximamente?", english: "Where would you like to travel soon?" }
      ],
      followUps: [
        { spanish: "Muy interesante. ¿Prefiere viajar en tren o en avión?", english: "Very interesting. Do you prefer travelling by train or by plane?" },
        { spanish: "Entiendo. ¿Suele viajar con familia o con amigos?", english: "I understand. Do you usually travel with family or friends?" }
      ]
    }
  },
  work: {
    informal: {
      openings: [
        { spanish: "Hola, ¿en qué trabajas?", english: "Hi, what do you do for work?" },
        { spanish: "¿Te gusta tu trabajo?", english: "Do you like your job?" }
      ],
      followUps: [
        { spanish: "Entiendo. ¿Trabajas en una oficina o desde casa?", english: "I see. Do you work in an office or from home?" },
        { spanish: "Muy bien. ¿Qué haces normalmente en el trabajo?", english: "Very good. What do you normally do at work?" }
      ]
    },
    formal: {
      openings: [
        { spanish: "Hola. ¿En qué trabaja usted?", english: "Hello. What do you do for work?" },
        { spanish: "¿Le gusta su trabajo?", english: "Do you like your job?" }
      ],
      followUps: [
        { spanish: "Entiendo. ¿Trabaja en una oficina o desde casa?", english: "I see. Do you work in an office or from home?" },
        { spanish: "Muy bien. ¿Qué hace normalmente en el trabajo?", english: "Very good. What do you normally do at work?" }
      ]
    }
  },
  sleep: {
    informal: {
      openings: [
        { spanish: "Hola, ¿duermes bien normalmente?", english: "Hi, do you normally sleep well?" },
        { spanish: "¿A qué hora te acuestas normalmente?", english: "What time do you normally go to bed?" }
      ],
      followUps: [
        { spanish: "Ya veo. ¿Cuántas horas duermes más o menos?", english: "I see. Roughly how many hours do you sleep?" },
        { spanish: "Interesante. ¿Qué haces para descansar mejor?", english: "Interesting. What do you do to rest better?" }
      ]
    },
    formal: {
      openings: [
        { spanish: "Hola. ¿Duerme bien normalmente?", english: "Hello. Do you normally sleep well?" },
        { spanish: "¿A qué hora suele acostarse?", english: "What time do you usually go to bed?" }
      ],
      followUps: [
        { spanish: "Entiendo. ¿Cuántas horas duerme aproximadamente?", english: "I understand. Approximately how many hours do you sleep?" },
        { spanish: "Muy bien. ¿Qué hace para descansar mejor?", english: "Very good. What do you do to rest better?" }
      ]
    }
  }
};

// This object stores sentence-building pieces.
// By combining these pieces, the app can keep generating fresh sentences indefinitely.
const generatorData = {
  beginner: {
    "daily life": {
      informal: {
        starts: ["Hoy", "Normalmente", "A veces", "Casi siempre", "Esta tarde"],
        middles: ["preparo", "ordeno", "limpio", "organizo", "recojo"],
        ends: ["la cocina después de comer.", "mi habitación antes de salir.", "la casa por la mañana.", "la mochila para mañana.", "las cosas con calma en casa."]
      },
      formal: {
        starts: ["Hoy", "Normalmente", "Esta mañana", "Con frecuencia", "Por la tarde"],
        middles: ["preparo", "organizo", "reviso", "ordeno", "dejo lista"],
        ends: ["la agenda antes de salir.", "la casa con bastante cuidado.", "la mesa antes de cenar.", "mi rutina de forma tranquila.", "las tareas del día en casa."]
      }
    },
    "gym/fitness": {
      informal: {
        starts: ["Hoy", "Normalmente", "Después del trabajo", "Los lunes", "Cada semana"],
        middles: ["voy", "entro", "vuelvo", "camino", "entreno"],
        ends: ["al gimnasio con energía.", "un rato antes de cenar.", "las piernas en el gimnasio.", "con música y agua.", "tres días por semana."]
      },
      formal: {
        starts: ["Hoy", "Normalmente", "Después de entrenar", "Por la mañana", "Cada semana"],
        middles: ["realizo", "hago", "completo", "practico", "mantengo"],
        ends: ["una rutina suave de fuerza.", "ejercicio con bastante constancia.", "estiramientos al terminar.", "una sesión tranquila en el gimnasio.", "una práctica ordenada y breve."]
      }
    },
    food: {
      informal: {
        starts: ["Hoy", "A veces", "Los domingos", "Normalmente", "Esta noche"],
        middles: ["como", "preparo", "hago", "ceno", "pruebo"],
        ends: ["algo sencillo en casa.", "tortilla de patatas con ensalada.", "una sopa caliente.", "pan con tomate y queso.", "una comida rápida pero rica."]
      },
      formal: {
        starts: ["Hoy", "Normalmente", "A la hora de comer", "Esta noche", "Con frecuencia"],
        middles: ["preparo", "sirvo", "cocino", "tomo", "pruebo"],
        ends: ["una comida ligera y sencilla.", "una sopa muy caliente.", "un plato bastante sabroso.", "una cena tranquila en casa.", "una receta fácil para la familia."]
      }
    },
    travel: {
      informal: {
        starts: ["Mañana", "Hoy", "Esta tarde", "Normalmente", "A veces"],
        middles: ["voy", "viajo", "salgo", "llego", "cojo"],
        ends: ["en tren al centro.", "al hotel en autobús.", "con una mochila pequeña.", "con tiempo a la estación.", "a Madrid por la mañana."]
      },
      formal: {
        starts: ["Mañana", "Hoy", "Esta tarde", "Con frecuencia", "Normalmente"],
        middles: ["viajo", "me desplazo", "llego", "salgo", "necesito"],
        ends: ["al hotel con antelación.", "un mapa para llegar bien.", "a la estación bastante pronto.", "ir en tren al centro.", "organizar el trayecto con calma."]
      }
    },
    work: {
      informal: {
        starts: ["Hoy", "Normalmente", "Cada mañana", "Esta semana", "A veces"],
        middles: ["trabajo", "entro", "empiezo", "termino", "preparo"],
        ends: ["en una oficina cerca del centro.", "muy pronto en la oficina.", "una reunión a las nueve.", "las tareas antes de comer.", "el ordenador al llegar."]
      },
      formal: {
        starts: ["Hoy", "Normalmente", "Cada mañana", "Esta semana", "Con frecuencia"],
        middles: ["organizo", "reviso", "preparo", "atiendo", "empiezo"],
        ends: ["las tareas del día en la oficina.", "la reunión de las nueve.", "el trabajo con bastante orden.", "los correos antes de empezar.", "el informe por la mañana."]
      }
    },
    sleep: {
      informal: {
        starts: ["Hoy", "Normalmente", "Por la noche", "A veces", "Cuando estoy cansado"],
        middles: ["duermo", "me acuesto", "descanso", "cierro", "apago"],
        ends: ["muy bien toda la noche.", "bastante temprano.", "mejor sin ruido.", "el móvil antes de dormir.", "unas ocho horas seguidas."]
      },
      formal: {
        starts: ["Hoy", "Normalmente", "Por la noche", "Con frecuencia", "Cuando estoy cansado"],
        middles: ["descanso", "me acuesto", "apago", "procuro dormir", "intento descansar"],
        ends: ["con bastante tranquilidad.", "temprano para estar bien al día siguiente.", "el móvil antes de acostarme.", "unas horas suficientes cada noche.", "mejor cuando la habitación está en silencio."]
      }
    }
  },
  intermediate: {
    "daily life": {
      informal: {
        starts: ["Cuando tengo tiempo", "Aunque salgo con prisa", "Si me organizo bien", "Normalmente", "Desde hace un tiempo"],
        middles: ["aprovecho para", "intento", "suelo", "prefiero", "consigo"],
        ends: ["ordenar la casa antes de cenar.", "hacer recados sin agobiarme.", "dejar todo preparado para mañana.", "moverme por el barrio andando.", "terminar las tareas a tiempo."]
      },
      formal: {
        starts: ["Siempre que puedo", "Si dispongo de tiempo", "Con bastante frecuencia", "Últimamente", "Por lo general"],
        middles: ["procuro", "intento", "organizo", "prefiero", "consigo"],
        ends: ["mantener una rutina equilibrada.", "ordenar la habitación con calma.", "dejar resueltos los recados del día.", "aprovechar mejor las mañanas.", "gestionar el tiempo con más orden."]
      }
    },
    "gym/fitness": {
      informal: {
        starts: ["Últimamente", "Cuando voy al gimnasio", "Si entreno por la tarde", "Casi siempre", "Desde hace unos meses"],
        middles: ["intento", "procuro", "suelo", "prefiero", "consigo"],
        ends: ["estirar bien después de cada sesión.", "mantener la constancia durante la semana.", "hacer fuerza sin prisas.", "entrenar con más energía.", "evitar molestias al día siguiente."]
      },
      formal: {
        starts: ["Últimamente", "En cada sesión", "Si entreno con tiempo", "Por lo general", "Desde hace unos meses"],
        middles: ["procuro", "mantengo", "realizo", "prefiero", "intento"],
        ends: ["una rutina bastante constante.", "estiramientos al terminar el ejercicio.", "un entrenamiento ordenado y eficaz.", "mejorar la técnica poco a poco.", "cuidar la postura durante el entrenamiento."]
      }
    },
    food: {
      informal: {
        starts: ["Cuando cocino para amigos", "Si tengo hambre", "Normalmente", "Los fines de semana", "Cuando vuelvo a casa"],
        middles: ["suelo", "prefiero", "me gusta", "intento", "acabo"],
        ends: ["preparar algo sencillo pero sabroso.", "hacer una cena rápida en casa.", "probar recetas nuevas con verduras.", "cocinar con aceite de oliva.", "comiendo algo caliente y tranquilo."]
      },
      formal: {
        starts: ["Cuando cocino", "Por lo general", "A la hora de cenar", "Si tengo invitados", "Durante el fin de semana"],
        middles: ["procuro", "prefiero", "suelo", "intento", "acabo"],
        ends: ["servir platos sencillos pero sabrosos.", "preparar recetas bastante equilibradas.", "cocinar con productos frescos.", "ofrecer una cena ligera y agradable.", "hacer comidas caseras con calma."]
      }
    },
    travel: {
      informal: {
        starts: ["Antes de viajar", "Cuando voy en tren", "Si salgo temprano", "Normalmente", "Cuando llego a una ciudad nueva"],
        middles: ["siempre", "casi siempre", "suelo", "prefiero", "intento"],
        ends: ["comprobar la hora de salida.", "llevar una mochila pequeña.", "mirar el mapa con calma.", "evitar las zonas más llenas.", "llegar a la estación con tiempo."]
      },
      formal: {
        starts: ["Antes de viajar", "Por lo general", "Si el trayecto es largo", "Cuando llego a una ciudad nueva", "Siempre que puedo"],
        middles: ["procuro", "prefiero", "reviso", "organizo", "intento"],
        ends: ["comprobar todos los horarios con antelación.", "llevar el itinerario bastante claro.", "evitar los retrasos innecesarios.", "planificar la ruta hasta el hotel.", "hacer el viaje con más tranquilidad."]
      }
    },
    work: {
      informal: {
        starts: ["Desde que trabajo en remoto", "Cuando empieza la semana", "Si tengo muchas tareas", "Normalmente", "Antes de una reunión"],
        middles: ["suelo", "intento", "prefiero", "procuro", "consigo"],
        ends: ["organizar mejor mi tiempo.", "terminar el informe antes del viernes.", "dejar los correos contestados.", "preparar una lista de prioridades.", "trabajar con menos estrés."]
      },
      formal: {
        starts: ["Desde que trabajo en remoto", "Por lo general", "Si el día está muy lleno", "Antes de una reunión", "Cuando hay bastante trabajo"],
        middles: ["procuro", "organizo", "intento", "prefiero", "consigo"],
        ends: ["gestionar mejor el tiempo.", "dejar resuelto el informe con antelación.", "preparar cada tarea con cuidado.", "ordenar las prioridades del día.", "trabajar con más claridad."]
      }
    },
    sleep: {
      informal: {
        starts: ["Si tomo café por la noche", "Cuando estoy cansado", "Normalmente", "Si apago el móvil temprano", "Cuando tengo un día largo"],
        middles: ["me cuesta", "consigo", "suelo", "intento", "prefiero"],
        ends: ["dormirme bastante antes.", "descansar mucho mejor.", "acostarme sin mirar la pantalla.", "dormir más horas seguidas.", "relajarme antes de dormir."]
      },
      formal: {
        starts: ["Si tomo café por la noche", "Por lo general", "Cuando estoy cansado", "Si apago el móvil a tiempo", "Durante la semana"],
        middles: ["me resulta difícil", "consigo", "intento", "prefiero", "procuro"],
        ends: ["conciliar el sueño con facilidad.", "descansar de forma más profunda.", "acostarme con más calma.", "reducir el uso del móvil antes de dormir.", "mantener mejores hábitos de descanso."]
      }
    }
  },
  advanced: {
    "daily life": {
      informal: {
        starts: ["Por mucho que madrugue", "Siempre que me organizo bien", "Aunque la mañana se complica", "Desde hace unos años", "Cuando encadeno muchos recados"],
        middles: ["consigo", "procuro", "prefiero", "intento", "acabo"],
        ends: ["que el día no se me haga cuesta arriba.", "mantener una rutina bastante equilibrada.", "resolverlo todo sin perder la calma.", "dejar las llamadas hechas a tiempo.", "valorar más los momentos tranquilos."]
      },
      formal: {
        starts: ["A medida que pasan los años", "Siempre que organizo bien la jornada", "Aunque surjan imprevistos", "Cuando la mañana se llena de tareas", "Desde hace un tiempo"],
        middles: ["valoro", "procuro", "intento", "prefiero", "consigo"],
        ends: ["mantener una rutina equilibrada.", "gestionar mejor cada tramo del día.", "reservar tiempo para las tareas importantes.", "afrontar los recados con más calma.", "ordenar mejor todas las prioridades."]
      }
    },
    "gym/fitness": {
      informal: {
        starts: ["Si no entreno con un plan claro", "Por mucho que quiera avanzar rápido", "Cuando encadeno varias sesiones", "Siempre que entreno con calma", "Aunque tenga poco tiempo"],
        middles: ["prefiero", "procuro", "intento", "consigo", "evito"],
        ends: ["centrarme en la técnica antes que en el peso.", "no dejarme llevar por las prisas.", "mejorar sin castigar el cuerpo.", "mantener la constancia durante semanas.", "acabar con mejores sensaciones."]
      },
      formal: {
        starts: ["Si no entreno con un plan serio", "Por mucho que el progreso tarde", "Siempre que organizo bien las sesiones", "Cuando priorizo la técnica", "Aunque disponga de poco tiempo"],
        middles: ["prefiero", "procuro", "intento", "consigo", "evito"],
        ends: ["mejorar la técnica y evitar lesiones.", "mantener un progreso más sostenible.", "realizar cada ejercicio con más control.", "dar prioridad a la constancia.", "terminar cada sesión con seguridad."]
      }
    },
    food: {
      informal: {
        starts: ["No solo me apetece comer bien", "Siempre que cocino con tiempo", "Cuando descubro un producto nuevo", "Aunque la receta parezca sencilla", "Si invito a amigos a cenar"],
        middles: ["prefiero", "intento", "procuro", "acabo", "suelo"],
        ends: ["entender de dónde vienen los ingredientes.", "darle importancia al sabor y al origen.", "cocinar con calma y sin prisas.", "buscar un equilibrio entre sencillez y calidad.", "terminar preparando algo más especial."]
      },
      formal: {
        starts: ["No solo me interesa comer bien", "Siempre que preparo un plato", "Cuando cocino con tiempo", "Aunque la receta sea sencilla", "Si utilizo buenos ingredientes"],
        middles: ["procuro", "prefiero", "intento", "valoro", "suelo"],
        ends: ["comprender mejor el origen de cada ingrediente.", "conservar el equilibrio de sabores.", "respetar el producto durante la preparación.", "mantener una cocina sencilla pero cuidada.", "lograr un resultado más completo."]
      }
    },
    travel: {
      informal: {
        starts: ["Siempre que viajo al extranjero", "Aunque el tren vaya con retraso", "Cuando llego a una ciudad nueva", "Si el itinerario cambia a última hora", "Por mucho que prepare el viaje"],
        middles: ["procuro", "prefiero", "intento", "acabo", "consigo"],
        ends: ["alejarme de las zonas más turísticas.", "adaptarme sin agobiarme demasiado.", "reorganizar el plan con calma.", "buscar rincones menos conocidos.", "aprovechar el viaje de otra manera."]
      },
      formal: {
        starts: ["Siempre que viajo al extranjero", "Aunque el itinerario cambie", "Cuando se retrasa el tren", "Si preparo bien el trayecto", "Por mucho que organice cada detalle"],
        middles: ["procuro", "prefiero", "intento", "consigo", "acabo"],
        ends: ["evitar las zonas excesivamente turísticas.", "reorganizar el itinerario con criterio.", "adaptarme al cambio sin perder el rumbo.", "buscar lugares con más autenticidad.", "darle más sentido a cada desplazamiento."]
      }
    },
    work: {
      informal: {
        starts: ["Por muy interesante que sea el proyecto", "Siempre que una decisión se alarga", "Cuando el ambiente se complica", "Aunque el trabajo sea exigente", "Si hay demasiadas reuniones"],
        middles: ["prefiero", "procuro", "intento", "acabo", "consigo"],
        ends: ["dejar cada decisión por escrito.", "evitar malentendidos más adelante.", "mantener una comunicación bastante clara.", "no perder de vista lo importante.", "organizar el trabajo con más cabeza."]
      },
      formal: {
        starts: ["Por muy interesante que sea el proyecto", "Siempre que una decisión afecta al equipo", "Cuando el entorno se vuelve complejo", "Aunque el trabajo sea exigente", "Si el calendario aprieta"],
        middles: ["conviene", "procuro", "intento", "prefiero", "consigo"],
        ends: ["dejar constancia escrita de cada acuerdo.", "evitar malentendidos en el futuro.", "mantener una comunicación clara y útil.", "ordenar mejor las prioridades del equipo.", "trabajar con mayor precisión."]
      }
    },
    sleep: {
      informal: {
        starts: ["Ojalá pudiera dormir del tirón", "Siempre que paso varios días descansando mal", "Aunque llegue muy cansado", "Cuando no apago el móvil a tiempo", "Si encadeno noches cortas"],
        middles: ["intento", "procuro", "prefiero", "acabo", "consigo"],
        ends: ["cambiar mis hábitos cuanto antes.", "crear un ambiente más tranquilo en la habitación.", "descansar mejor la noche siguiente.", "reducir el ruido antes de acostarme.", "tomarme el descanso más en serio."]
      },
      formal: {
        starts: ["Ojalá pudiera dormir del tirón", "Siempre que descanso mal varios días", "Aunque llegue cansado al final del día", "Cuando mantengo malos hábitos de sueño", "Si enlazo varias noches cortas"],
        middles: ["procuro", "intento", "prefiero", "consigo", "acabo"],
        ends: ["modificar los hábitos de descanso cuanto antes.", "crear una rutina más estable por la noche.", "mejorar el descanso de forma gradual.", "reducir los estímulos antes de acostarme.", "dar prioridad a una mejor recuperación."]
      }
    }
  }
};

// These translation maps let the app build a full English translation
// for newly generated sentences by translating each sentence part.
const generatorTranslations = {
  starts: {
    "Hoy": "Today",
    "Normalmente": "Normally",
    "A veces": "Sometimes",
    "Casi siempre": "Almost always",
    "Esta tarde": "This afternoon",
    "Esta mañana": "This morning",
    "Con frecuencia": "Frequently",
    "Por la tarde": "In the afternoon",
    "Después del trabajo": "After work",
    "Los lunes": "On Mondays",
    "Cada semana": "Every week",
    "Después de entrenar": "After training",
    "Por la mañana": "In the morning",
    "Los domingos": "On Sundays",
    "Esta noche": "Tonight",
    "A la hora de comer": "At lunchtime",
    "Mañana": "Tomorrow",
    "Cada mañana": "Every morning",
    "Esta semana": "This week",
    "Por la noche": "At night",
    "Cuando estoy cansado": "When I am tired",
    "Cuando tengo tiempo": "When I have time",
    "Aunque salgo con prisa": "Although I leave in a rush",
    "Si me organizo bien": "If I organise myself well",
    "Desde hace un tiempo": "For some time now",
    "Siempre que puedo": "Whenever I can",
    "Si dispongo de tiempo": "If I have time available",
    "Últimamente": "Lately",
    "En cada sesión": "In each session",
    "Si entreno con tiempo": "If I train with enough time",
    "Desde hace unos meses": "For a few months now",
    "Cuando cocino para amigos": "When I cook for friends",
    "Si tengo hambre": "If I am hungry",
    "Los fines de semana": "At weekends",
    "Cuando vuelvo a casa": "When I get home",
    "Cuando cocino": "When I cook",
    "Si tengo invitados": "If I have guests",
    "Durante el fin de semana": "During the weekend",
    "Antes de viajar": "Before travelling",
    "Cuando voy en tren": "When I go by train",
    "Si salgo temprano": "If I leave early",
    "Cuando llego a una ciudad nueva": "When I arrive in a new city",
    "Por lo general": "Generally",
    "Si el trayecto es largo": "If the journey is long",
    "Desde que trabajo en remoto": "Since I started working remotely",
    "Cuando empieza la semana": "When the week starts",
    "Si tengo muchas tareas": "If I have many tasks",
    "Antes de una reunión": "Before a meeting",
    "Si el día está muy lleno": "If the day is very full",
    "Cuando hay bastante trabajo": "When there is a lot of work",
    "Si tomo café por la noche": "If I drink coffee at night",
    "Si apago el móvil temprano": "If I switch off my phone early",
    "Cuando tengo un día largo": "When I have a long day",
    "Si apago el móvil a tiempo": "If I switch off my phone on time",
    "Durante la semana": "During the week",
    "Por mucho que madrugue": "No matter how early I get up",
    "Siempre que me organizo bien": "Whenever I organise myself well",
    "Aunque la mañana se complica": "Although the morning gets complicated",
    "Desde hace unos años": "For some years now",
    "Cuando encadeno muchos recados": "When I string together many errands",
    "A medida que pasan los años": "As the years go by",
    "Siempre que organizo bien la jornada": "Whenever I organise the day well",
    "Aunque surjan imprevistos": "Although unexpected things come up",
    "Cuando la mañana se llena de tareas": "When the morning fills up with tasks",
    "Si no entreno con un plan claro": "If I do not train with a clear plan",
    "Por mucho que quiera avanzar rápido": "No matter how much I want to progress quickly",
    "Cuando encadeno varias sesiones": "When I string together several sessions",
    "Siempre que entreno con calma": "Whenever I train calmly",
    "Aunque tenga poco tiempo": "Although I have little time",
    "Si no entreno con un plan serio": "If I do not train with a serious plan",
    "Por mucho que el progreso tarde": "No matter how long progress takes",
    "Siempre que organizo bien las sesiones": "Whenever I organise the sessions well",
    "Cuando priorizo la técnica": "When I prioritise technique",
    "Aunque disponga de poco tiempo": "Although I have little time available",
    "No solo me apetece comer bien": "Not only do I feel like eating well",
    "Siempre que cocino con tiempo": "Whenever I cook with enough time",
    "Cuando descubro un producto nuevo": "When I discover a new product",
    "Aunque la receta parezca sencilla": "Although the recipe seems simple",
    "Si invito a amigos a cenar": "If I invite friends over for dinner",
    "No solo me interesa comer bien": "Not only am I interested in eating well",
    "Siempre que preparo un plato": "Whenever I prepare a dish",
    "Aunque la receta sea sencilla": "Although the recipe is simple",
    "Si utilizo buenos ingredientes": "If I use good ingredients",
    "Siempre que viajo al extranjero": "Whenever I travel abroad",
    "Aunque el tren vaya con retraso": "Although the train is running late",
    "Si el itinerario cambia a última hora": "If the itinerary changes at the last minute",
    "Por mucho que prepare el viaje": "No matter how much I prepare the trip",
    "Aunque el itinerario cambie": "Although the itinerary changes",
    "Cuando se retrasa el tren": "When the train is delayed",
    "Si preparo bien el trayecto": "If I prepare the journey well",
    "Por mucho que organice cada detalle": "No matter how much I organise every detail",
    "Por muy interesante que sea el proyecto": "No matter how interesting the project is",
    "Siempre que una decisión se alarga": "Whenever a decision drags on",
    "Cuando el ambiente se complica": "When the atmosphere gets complicated",
    "Aunque el trabajo sea exigente": "Although the work is demanding",
    "Si hay demasiadas reuniones": "If there are too many meetings",
    "Siempre que una decisión afecta al equipo": "Whenever a decision affects the team",
    "Cuando el entorno se vuelve complejo": "When the environment becomes complex",
    "Si el calendario aprieta": "If the schedule is tight",
    "Ojalá pudiera dormir del tirón": "I wish I could sleep straight through",
    "Siempre que paso varios días descansando mal": "Whenever I spend several days sleeping badly",
    "Aunque llegue muy cansado": "Although I arrive very tired",
    "Cuando no apago el móvil a tiempo": "When I do not switch off my phone on time",
    "Si encadeno noches cortas": "If I string together short nights",
    "Siempre que descanso mal varios días": "Whenever I sleep badly for several days",
    "Aunque llegue cansado al final del día": "Although I reach the end of the day tired",
    "Cuando mantengo malos hábitos de sueño": "When I keep bad sleep habits",
    "Si enlazo varias noches cortas": "If I link together several short nights"
  },
  middles: {
    "preparo": "I prepare",
    "ordeno": "I tidy",
    "limpio": "I clean",
    "organizo": "I organise",
    "recojo": "I put away",
    "reviso": "I review",
    "dejo lista": "I leave ready",
    "voy": "I go",
    "entro": "I go into",
    "vuelvo": "I return to",
    "camino": "I walk",
    "entreno": "I train",
    "realizo": "I do",
    "hago": "I do / make",
    "completo": "I complete",
    "practico": "I practise",
    "mantengo": "I maintain",
    "como": "I eat",
    "ceno": "I have for dinner",
    "pruebo": "I try",
    "sirvo": "I serve",
    "cocino": "I cook",
    "tomo": "I have / drink",
    "viajo": "I travel",
    "salgo": "I leave",
    "llego": "I arrive",
    "cojo": "I take",
    "me desplazo": "I travel / move",
    "necesito": "I need",
    "trabajo": "I work",
    "empiezo": "I start",
    "termino": "I finish",
    "duermo": "I sleep",
    "me acuesto": "I go to bed",
    "descanso": "I rest",
    "cierro": "I close",
    "apago": "I switch off",
    "aprovecho para": "I take the opportunity to",
    "intento": "I try to",
    "suelo": "I usually",
    "prefiero": "I prefer to",
    "consigo": "I manage to",
    "procuro": "I try to",
    "acabo": "I end up",
    "siempre": "I always",
    "casi siempre": "I almost always",
    "reviso": "I review",
    "gestiono": "I manage",
    "me resulta difícil": "I find it difficult to",
    "valoro": "I value",
    "evito": "I avoid",
    "conviene": "it is advisable to"
  },
  ends: {
    "la cocina después de comer.": "the kitchen after eating.",
    "mi habitación antes de salir.": "my room before leaving.",
    "la casa por la mañana.": "the house in the morning.",
    "la mochila para mañana.": "my bag for tomorrow.",
    "las cosas con calma en casa.": "things calmly at home.",
    "la agenda antes de salir.": "the schedule before leaving.",
    "la casa con bastante cuidado.": "the house quite carefully.",
    "la mesa antes de cenar.": "the table before dinner.",
    "mi rutina de forma tranquila.": "my routine in a calm way.",
    "las tareas del día en casa.": "the day's tasks at home.",
    "al gimnasio con energía.": "to the gym with energy.",
    "un rato antes de cenar.": "for a while before dinner.",
    "las piernas en el gimnasio.": "my legs at the gym.",
    "con música y agua.": "with music and water.",
    "tres días por semana.": "three days a week.",
    "una rutina suave de fuerza.": "a gentle strength routine.",
    "ejercicio con bastante constancia.": "exercise quite consistently.",
    "estiramientos al terminar.": "stretches at the end.",
    "una sesión tranquila en el gimnasio.": "a calm session at the gym.",
    "una práctica ordenada y breve.": "an organised and short practice session.",
    "algo sencillo en casa.": "something simple at home.",
    "tortilla de patatas con ensalada.": "Spanish omelette with salad.",
    "una sopa caliente.": "a hot soup.",
    "pan con tomate y queso.": "bread with tomato and cheese.",
    "una comida rápida pero rica.": "a quick but tasty meal.",
    "una comida ligera y sencilla.": "a light and simple meal.",
    "una sopa muy caliente.": "a very hot soup.",
    "un plato bastante sabroso.": "quite a tasty dish.",
    "una cena tranquila en casa.": "a calm dinner at home.",
    "una receta fácil para la familia.": "an easy recipe for the family.",
    "en tren al centro.": "by train to the centre.",
    "al hotel en autobús.": "to the hotel by bus.",
    "con una mochila pequeña.": "with a small backpack.",
    "con tiempo a la estación.": "to the station with time to spare.",
    "a Madrid por la mañana.": "to Madrid in the morning.",
    "al hotel con antelación.": "to the hotel in advance.",
    "un mapa para llegar bien.": "a map to arrive properly.",
    "a la estación bastante pronto.": "to the station quite early.",
    "ir en tren al centro.": "go by train to the centre.",
    "organizar el trayecto con calma.": "organise the journey calmly.",
    "en una oficina cerca del centro.": "in an office near the centre.",
    "muy pronto en la oficina.": "very early in the office.",
    "una reunión a las nueve.": "a meeting at nine.",
    "las tareas antes de comer.": "the tasks before eating.",
    "el ordenador al llegar.": "the computer when I arrive.",
    "las tareas del día en la oficina.": "the day's tasks in the office.",
    "la reunión de las nueve.": "the nine o'clock meeting.",
    "el trabajo con bastante orden.": "the work quite neatly.",
    "los correos antes de empezar.": "the emails before starting.",
    "el informe por la mañana.": "the report in the morning.",
    "muy bien toda la noche.": "very well all night.",
    "bastante temprano.": "quite early.",
    "mejor sin ruido.": "better without noise.",
    "el móvil antes de dormir.": "the mobile phone before sleeping.",
    "unas ocho horas seguidas.": "about eight hours in a row.",
    "con bastante tranquilidad.": "with quite a lot of calm.",
    "temprano para estar bien al día siguiente.": "early to feel well the next day.",
    "el móvil antes de acostarme.": "the mobile phone before going to bed.",
    "unas horas suficientes cada noche.": "enough hours each night.",
    "mejor cuando la habitación está en silencio.": "better when the room is quiet.",
    "ordenar la casa antes de cenar.": "tidy the house before dinner.",
    "hacer recados sin agobiarme.": "run errands without stressing myself out.",
    "dejar todo preparado para mañana.": "leave everything ready for tomorrow.",
    "moverme por el barrio andando.": "move around the neighbourhood on foot.",
    "terminar las tareas a tiempo.": "finish the tasks on time.",
    "mantener una rutina equilibrada.": "maintain a balanced routine.",
    "ordenar la habitación con calma.": "tidy the room calmly.",
    "dejar resueltos los recados del día.": "leave the day's errands done.",
    "aprovechar mejor las mañanas.": "make better use of the mornings.",
    "gestionar el tiempo con más orden.": "manage time in a more organised way.",
    "estirar bien después de cada sesión.": "stretch properly after each session.",
    "mantener la constancia durante la semana.": "keep up consistency during the week.",
    "hacer fuerza sin prisas.": "do strength work without rushing.",
    "entrenar con más energía.": "train with more energy.",
    "evitar molestias al día siguiente.": "avoid aches the next day.",
    "una rutina bastante constante.": "quite a consistent routine.",
    "estiramientos al terminar el ejercicio.": "stretches after finishing the exercise.",
    "un entrenamiento ordenado y eficaz.": "an organised and effective workout.",
    "mejorar la técnica poco a poco.": "improve technique little by little.",
    "cuidar la postura durante el entrenamiento.": "take care of posture during training.",
    "preparar algo sencillo pero sabroso.": "prepare something simple but tasty.",
    "hacer una cena rápida en casa.": "make a quick dinner at home.",
    "probar recetas nuevas con verduras.": "try new recipes with vegetables.",
    "cocinar con aceite de oliva.": "cook with olive oil.",
    "comiendo algo caliente y tranquilo.": "eating something hot and calm.",
    "servir platos sencillos pero sabrosos.": "serve simple but tasty dishes.",
    "preparar recetas bastante equilibradas.": "prepare quite balanced recipes.",
    "cocinar con productos frescos.": "cook with fresh products.",
    "ofrecer una cena ligera y agradable.": "offer a light and pleasant dinner.",
    "hacer comidas caseras con calma.": "make homemade meals calmly.",
    "comprobar la hora de salida.": "check the departure time.",
    "llevar una mochila pequeña.": "carry a small backpack.",
    "mirar el mapa con calma.": "look at the map calmly.",
    "evitar las zonas más llenas.": "avoid the busiest areas.",
    "llegar a la estación con tiempo.": "arrive at the station with time to spare.",
    "comprobar todos los horarios con antelación.": "check all the timetables in advance.",
    "llevar el itinerario bastante claro.": "have the itinerary quite clear.",
    "evitar los retrasos innecesarios.": "avoid unnecessary delays.",
    "planificar la ruta hasta el hotel.": "plan the route to the hotel.",
    "hacer el viaje con más tranquilidad.": "make the trip more calmly.",
    "organizar mejor mi tiempo.": "organise my time better.",
    "terminar el informe antes del viernes.": "finish the report before Friday.",
    "dejar los correos contestados.": "leave the emails answered.",
    "preparar una lista de prioridades.": "prepare a list of priorities.",
    "trabajar con menos estrés.": "work with less stress.",
    "gestionar mejor el tiempo.": "manage time better.",
    "dejar resuelto el informe con antelación.": "leave the report finished in advance.",
    "preparar cada tarea con cuidado.": "prepare each task carefully.",
    "ordenar las prioridades del día.": "organise the day's priorities.",
    "trabajar con más claridad.": "work with more clarity.",
    "dormirme bastante antes.": "fall asleep quite a bit earlier.",
    "descansar mucho mejor.": "rest much better.",
    "acostarme sin mirar la pantalla.": "go to bed without looking at the screen.",
    "dormir más horas seguidas.": "sleep more hours in a row.",
    "relajarme antes de dormir.": "relax before sleeping.",
    "conciliar el sueño con facilidad.": "fall asleep easily.",
    "descansar de forma más profunda.": "rest more deeply.",
    "acostarme con más calma.": "go to bed more calmly.",
    "reducir el uso del móvil antes de dormir.": "reduce mobile phone use before sleeping.",
    "mantener mejores hábitos de descanso.": "keep better rest habits.",
    "que el día no se me haga cuesta arriba.": "so that the day does not feel uphill.",
    "resolverlo todo sin perder la calma.": "solve everything without losing my calm.",
    "dejar las llamadas hechas a tiempo.": "leave the calls done on time.",
    "valorar más los momentos tranquilos.": "value calm moments more.",
    "gestionar mejor cada tramo del día.": "manage each part of the day better.",
    "reservar tiempo para las tareas importantes.": "set aside time for important tasks.",
    "afrontar los recados con más calma.": "face errands more calmly.",
    "ordenar mejor todas las prioridades.": "organise all priorities better.",
    "centrarme en la técnica antes que en el peso.": "focus on technique rather than weight.",
    "no dejarme llevar por las prisas.": "not let myself be carried away by rushing.",
    "mejorar sin castigar el cuerpo.": "improve without punishing the body.",
    "mantener la constancia durante semanas.": "keep consistency for weeks.",
    "acabar con mejores sensaciones.": "finish feeling better.",
    "mejorar la técnica y evitar lesiones.": "improve technique and avoid injuries.",
    "mantener un progreso más sostenible.": "maintain more sustainable progress.",
    "realizar cada ejercicio con más control.": "perform each exercise with more control.",
    "dar prioridad a la constancia.": "give priority to consistency.",
    "terminar cada sesión con seguridad.": "finish each session safely.",
    "entender de dónde vienen los ingredientes.": "understand where the ingredients come from.",
    "darle importancia al sabor y al origen.": "give importance to flavour and origin.",
    "cocinar con calma y sin prisas.": "cook calmly and without rushing.",
    "buscar un equilibrio entre sencillez y calidad.": "look for a balance between simplicity and quality.",
    "terminar preparando algo más especial.": "end up preparing something more special.",
    "comprender mejor el origen de cada ingrediente.": "understand the origin of each ingredient better.",
    "conservar el equilibrio de sabores.": "preserve the balance of flavours.",
    "respetar el producto durante la preparación.": "respect the product during preparation.",
    "mantener una cocina sencilla pero cuidada.": "maintain a simple but careful cooking style.",
    "lograr un resultado más completo.": "achieve a more complete result.",
    "alejarme de las zonas más turísticas.": "move away from the most touristy areas.",
    "adaptarme sin agobiarme demasiado.": "adapt without getting too overwhelmed.",
    "reorganizar el plan con calma.": "reorganise the plan calmly.",
    "buscar rincones menos conocidos.": "look for less-known corners.",
    "aprovechar el viaje de otra manera.": "make the most of the trip in another way.",
    "evitar las zonas excesivamente turísticas.": "avoid overly touristy areas.",
    "reorganizar el itinerario con criterio.": "reorganise the itinerary thoughtfully.",
    "adaptarme al cambio sin perder el rumbo.": "adapt to change without losing direction.",
    "buscar lugares con más autenticidad.": "look for places with more authenticity.",
    "darle más sentido a cada desplazamiento.": "give more meaning to each journey.",
    "dejar cada decisión por escrito.": "leave each decision in writing.",
    "evitar malentendidos más adelante.": "avoid misunderstandings later on.",
    "mantener una comunicación bastante clara.": "maintain quite clear communication.",
    "no perder de vista lo importante.": "not lose sight of what matters.",
    "organizar el trabajo con más cabeza.": "organise work more thoughtfully.",
    "dejar constancia escrita de cada acuerdo.": "leave written record of each agreement.",
    "evitar malentendidos en el futuro.": "avoid misunderstandings in the future.",
    "mantener una comunicación clara y útil.": "maintain clear and useful communication.",
    "ordenar mejor las prioridades del equipo.": "organise the team's priorities better.",
    "trabajar con mayor precisión.": "work with greater precision.",
    "cambiar mis hábitos cuanto antes.": "change my habits as soon as possible.",
    "crear un ambiente más tranquilo en la habitación.": "create a calmer atmosphere in the room.",
    "descansar mejor la noche siguiente.": "rest better the following night.",
    "reducir el ruido antes de acostarme.": "reduce noise before going to bed.",
    "tomarme el descanso más en serio.": "take rest more seriously.",
    "modificar los hábitos de descanso cuanto antes.": "change rest habits as soon as possible.",
    "crear una rutina más estable por la noche.": "create a more stable nighttime routine.",
    "mejorar el descanso de forma gradual.": "improve rest gradually.",
    "reducir los estímulos antes de acostarme.": "reduce stimulation before going to bed.",
    "dar prioridad a una mejor recuperación.": "give priority to better recovery."
  }
};

// These extra pieces expand the number of possible generated sentences.
const generatorExtras = {
  middleAddons: [
    "",
    "con calma",
    "sin prisas",
    "cuando puedo",
    "si tengo tiempo",
    "con bastante cuidado",
    "como parte de mi rutina"
  ],
  endAddons: [
    "",
    "casi todos los dias",
    "si me da tiempo",
    "cuando me viene bien",
    "para estar mejor",
    "como parte del dia",
    "sin agobiarme"
  ]
};

const generatorExtraTranslations = {
  middleAddons: {
    "": "",
    "con calma": "calmly",
    "sin prisas": "without rushing",
    "cuando puedo": "when I can",
    "si tengo tiempo": "if I have time",
    "con bastante cuidado": "quite carefully",
    "como parte de mi rutina": "as part of my routine"
  },
  endAddons: {
    "": "",
    "casi todos los dias": "almost every day",
    "si me da tiempo": "if I have time",
    "cuando me viene bien": "when it suits me",
    "para estar mejor": "to feel better",
    "como parte del dia": "as part of the day",
    "sin agobiarme": "without stressing myself out"
  }
};

// These variables connect JavaScript to the HTML elements on the page.
const difficultySelect = document.getElementById("difficulty");
const installBanner = document.getElementById("install-banner");
const installBannerText = document.getElementById("install-banner-text");
const installAppBtn = document.getElementById("install-app-btn");
const dismissInstallBtn = document.getElementById("dismiss-install-btn");
const topicSelect = document.getElementById("topic");
const toneSelect = document.getElementById("tone");
const favouritesOnlyCheckbox = document.getElementById("favourites-only");
const aiModeCheckbox = document.getElementById("ai-mode");
const aiModeNote = document.getElementById("ai-mode-note");
const generateBtn = document.getElementById("generate-btn");
const speakSpanishBtn = document.getElementById("speak-spanish-btn");
const speakEnglishBtn = document.getElementById("speak-english-btn");
const copyBtn = document.getElementById("copy-btn");
const toggleTranslationBtn = document.getElementById("toggle-translation-btn");
const saveBtn = document.getElementById("save-btn");
const quizModeCheckbox = document.getElementById("quiz-mode");
const markCorrectBtn = document.getElementById("mark-correct-btn");
const markWrongBtn = document.getElementById("mark-wrong-btn");
const resetScoreBtn = document.getElementById("reset-score-btn");
const spanishSentence = document.getElementById("spanish-sentence");
const englishTranslation = document.getElementById("english-translation");
const sentenceMeta = document.getElementById("sentence-meta");
const statusMessage = document.getElementById("status-message");
const scoreSummary = document.getElementById("score-summary");
const quizActions = document.getElementById("quiz-actions");
const favouritesSearchInput = document.getElementById("favourites-search");
const favouritesList = document.getElementById("favourites-list");
const emptyMessage = document.getElementById("empty-message");
const playlistNameInput = document.getElementById("playlist-name");
const playlistSelect = document.getElementById("playlist-select");
const radioModeSelect = document.getElementById("radio-mode");
const createPlaylistBtn = document.getElementById("create-playlist-btn");
const addCurrentToPlaylistBtn = document.getElementById("add-current-to-playlist-btn");
const playRadioBtn = document.getElementById("play-radio-btn");
const stopRadioBtn = document.getElementById("stop-radio-btn");
const deletePlaylistBtn = document.getElementById("delete-playlist-btn");
const radioStatus = document.getElementById("radio-status");
const playlistSentences = document.getElementById("playlist-sentences");
const playlistEmptyMessage = document.getElementById("playlist-empty-message");
const customEnglishInput = document.getElementById("custom-english-input");
const customToneSelect = document.getElementById("custom-tone");
const customTopicSelect = document.getElementById("custom-topic");
const customDifficultySelect = document.getElementById("custom-difficulty");
const translateCustomBtn = document.getElementById("translate-custom-btn");
const addCustomToPlaylistBtn = document.getElementById("add-custom-to-playlist-btn");
const customStatus = document.getElementById("custom-status");
const chatTopicSelect = document.getElementById("chat-topic");
const chatToneSelect = document.getElementById("chat-tone");
const startChatBtn = document.getElementById("start-chat-btn");
const speakChatReplyBtn = document.getElementById("speak-chat-reply-btn");
const useChatReplyBtn = document.getElementById("use-chat-reply-btn");
const chatAutoSpeakCheckbox = document.getElementById("chat-auto-speak");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const micChatBtn = document.getElementById("mic-chat-btn");
const sendChatBtn = document.getElementById("send-chat-btn");
const clearChatBtn = document.getElementById("clear-chat-btn");
const chatStatus = document.getElementById("chat-status");

// These variables keep track of the app's current state.
let currentSentence = null;
let translationVisible = true;
let answerMarked = false;
let lastGeneratedSpanish = "";
let recentGeneratedSentences = [];
let availableVoices = [];
let chatRecognition = null;
let isListeningToChat = false;
let latestMicTranscript = "";
let deferredInstallPrompt = null;
let installHintShown = false;
let aiModeEnabled = JSON.parse(localStorage.getItem("spanishSentenceAiMode")) || false;
let aiCooldownUntil = 0;

// We load saved data from localStorage when the page opens.
let favourites = JSON.parse(localStorage.getItem("spanishSentenceFavourites")) || [];
let quizScore = JSON.parse(localStorage.getItem("spanishSentenceQuizScore")) || {
  correct: 0,
  wrong: 0
};
let playlists = JSON.parse(localStorage.getItem("spanishSentencePlaylists")) || [];
let radioState = {
  isPlaying: false,
  playlistId: "",
  mode: "repeat-one",
  index: 0
};
let latestCustomSentence = null;
let lastCoachReply = null;
let chatHistory = JSON.parse(localStorage.getItem("spanishSentenceChatHistory")) || [];

// This helper makes labels look nicer on screen.
function capitalize(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// This helper picks one random item from an array.
function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// This helper cleans English input before translating it.
function normaliseEnglishText(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[!?]/g, ".")
    .replace(/don't/g, "do not")
    .replace(/can't/g, "cannot")
    .replace(/i'm/g, "i am")
    .replace(/you're/g, "you are")
    .replace(/we're/g, "we are")
    .replace(/they're/g, "they are")
    .replace(/it's/g, "it is")
    .replace(/  +/g, " ");
}

// This function loads the browser's available voices.
function loadVoices() {
  if (!("speechSynthesis" in window)) {
    return;
  }

  availableVoices = window.speechSynthesis.getVoices();
}

// This helper checks whether the app is running on an Android device.
function isAndroidDevice() {
  return /android/i.test(navigator.userAgent);
}

// This function shows the install help banner.
function showInstallBanner(message, canInstallDirectly) {
  installBanner.classList.remove("hidden");
  installBannerText.textContent = message;
  installAppBtn.style.display = canInstallDirectly ? "inline-flex" : "none";
}

// This function hides the install help banner.
function hideInstallBanner() {
  installBanner.classList.add("hidden");
  installHintShown = true;
}

// This function tries to open the browser install prompt when available.
async function promptInstall() {
  if (!deferredInstallPrompt) {
    showInstallBanner('If "Install app" does not appear, open the browser menu in Chrome on Android and tap "Add to Home screen".', false);
    return;
  }

  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  hideInstallBanner();
}

// This helper shows manual install instructions on Android even when Chrome
// does not offer a direct prompt button.
function showAndroidInstallHelp() {
  if (installHintShown || deferredInstallPrompt || !isAndroidDevice()) {
    return;
  }

  showInstallBanner('On Android Chrome, tap the three-dot menu and choose "Add to Home screen" or "Install app". The direct install button does not always appear.', false);
}

// This helper checks whether the app is currently running in installed mode.
function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

// This helper explains microphone errors in plain English.
function getMicErrorMessage(errorCode) {
  const messages = {
    "not-allowed": "Microphone permission was blocked. Please allow microphone access in Chrome and try again.",
    "service-not-allowed": "Speech recognition is not allowed here. On Android, open the site in Chrome and try the mic there.",
    "audio-capture": "Your device could not access the microphone. Check that no other app is using it.",
    "network": "Speech recognition needs an internet connection on many phones. Please check your connection and try again.",
    "no-speech": "No speech was heard. Try again and speak a little closer to the microphone.",
    "aborted": "Microphone listening was stopped.",
    "language-not-supported": "This recognition language is not supported on your device.",
    "unsupported-browser": "This browser does not support speech recognition here. On Android, try opening the site in Chrome instead of the installed app."
  };

  return messages[errorCode] || "Microphone input did not work. You can still type your message.";
}

// This helper asks the browser for microphone permission before speech recognition starts.
async function prepareMicrophoneAccess() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    return true;
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  stream.getTracks().forEach((track) => track.stop());
  return true;
}

// This function prepares browser speech recognition for microphone chat input.
function setupChatRecognition() {
  const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognitionClass) {
    return;
  }

  chatRecognition = new SpeechRecognitionClass();
  chatRecognition.lang = "en-GB";
  chatRecognition.continuous = false;
  chatRecognition.interimResults = true;
  chatRecognition.maxAlternatives = 1;

  chatRecognition.onstart = () => {
    isListeningToChat = true;
    latestMicTranscript = "";
    micChatBtn.textContent = "Stop mic";
    micChatBtn.classList.add("listening-btn");
    chatStatus.textContent = "Listening... speak your message now.";
  };

  chatRecognition.onresult = (event) => {
    let transcript = "";

    for (let index = 0; index < event.results.length; index += 1) {
      transcript += event.results[index][0].transcript;
    }

    latestMicTranscript = transcript.trim();
    chatInput.value = latestMicTranscript;
    chatStatus.textContent = latestMicTranscript
      ? `Heard: ${latestMicTranscript}`
      : "Listening... speak your message now.";
  };

  chatRecognition.onerror = (event) => {
    isListeningToChat = false;
    micChatBtn.textContent = "Speak with mic";
    micChatBtn.classList.remove("listening-btn");
    chatStatus.textContent = getMicErrorMessage(event.error);
  };

  chatRecognition.onend = () => {
    const spokenMessage = latestMicTranscript.trim() || chatInput.value.trim();
    const shouldSend = isListeningToChat && spokenMessage;
    isListeningToChat = false;
    micChatBtn.textContent = "Speak with mic";
    micChatBtn.classList.remove("listening-btn");

    if (shouldSend) {
      chatInput.value = spokenMessage;
      sendChatMessage();
    } else {
      chatStatus.textContent = "Microphone stopped without hearing any words.";
    }
  };
}

// This function starts or stops microphone chat input.
async function toggleChatMic() {
  if (!chatRecognition) {
    const helpMessage = isStandaloneApp()
      ? "This installed app does not support speech recognition on this device. Open the website in Chrome and try the mic there."
      : getMicErrorMessage("unsupported-browser");
    alert(helpMessage);
    chatStatus.textContent = helpMessage;
    return;
  }

  if (isListeningToChat) {
    isListeningToChat = false;
    chatRecognition.stop();
    return;
  }

  try {
    await prepareMicrophoneAccess();
    chatInput.value = "";
    latestMicTranscript = "";
    chatStatus.textContent = "Preparing microphone...";
    chatRecognition.start();
  } catch (error) {
    const blockedMessage = getMicErrorMessage("not-allowed");
    chatStatus.textContent = blockedMessage;
  }
}

// This function tries to choose the most natural built-in voice available.
// We prefer Spain Spanish for Spanish and British English for English.
function getBestVoice(languageCode) {
  if (!availableVoices.length) {
    loadVoices();
  }

  if (!availableVoices.length) {
    return null;
  }

  const lowerLanguageCode = languageCode.toLowerCase();
  const exactMatches = availableVoices.filter((voice) => voice.lang.toLowerCase() === lowerLanguageCode);
  const baseLanguage = lowerLanguageCode.split("-")[0];
  const baseMatches = availableVoices.filter((voice) => voice.lang.toLowerCase().startsWith(baseLanguage));
  const preferredVoices = exactMatches.length ? exactMatches : baseMatches;

  if (!preferredVoices.length) {
    return null;
  }

  const premiumKeywords = ["google", "microsoft", "natural", "online", "enhanced", "zira", "aria", "libby", "jenny", "jorge", "helena"];

  const scoredVoices = preferredVoices.map((voice) => {
    const name = voice.name.toLowerCase();
    let score = 0;

    if (voice.default) {
      score += 2;
    }

    premiumKeywords.forEach((keyword) => {
      if (name.includes(keyword)) {
        score += 3;
      }
    });

    if (lowerLanguageCode === "es-es" && (name.includes("spain") || name.includes("españa") || name.includes("jorge") || name.includes("helena"))) {
      score += 4;
    }

    if (lowerLanguageCode === "en-gb" && (name.includes("uk") || name.includes("british") || name.includes("libby") || name.includes("sonia") || name.includes("ryan"))) {
      score += 4;
    }

    return { voice, score };
  });

  scoredVoices.sort((a, b) => b.score - a.score);
  return scoredVoices[0].voice;
}

// This helper builds a speech utterance after choosing the best voice.
function createSpeechUtterance(text, languageCode) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageCode;
  utterance.rate = languageCode === "es-ES" ? 0.9 : 0.93;
  utterance.pitch = 1;
  utterance.volume = 1;

  const bestVoice = getBestVoice(languageCode);

  if (bestVoice) {
    utterance.voice = bestVoice;
  }

  return utterance;
}

// This helper creates a simple id for new playlists.
function createId() {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

// This helper cleans punctuation away so we can look up just the word itself.
function normaliseWord(word) {
  return word
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
}

// This helper finds the English meaning for one Spanish word.
function getWordTranslation(word) {
  const cleanWord = normaliseWord(word);

  if (!cleanWord) {
    return "";
  }

  return wordTranslations[cleanWord] || "English hint not added yet";
}

// This helper loads one sentence into the main sentence viewer.
function setCurrentSentence(sentence, sourceLabel) {
  currentSentence = sentence;
  lastGeneratedSpanish = currentSentence.spanish;

  renderSpanishSentence(currentSentence.spanish);
  sentenceMeta.textContent = `${capitalize(currentSentence.difficulty)} | ${capitalize(currentSentence.topic)} | ${capitalize(currentSentence.tone)} | Hover words for English hints | ${sourceLabel}`;
  translationVisible = !quizModeCheckbox.checked;
  answerMarked = false;
  updateTranslationDisplay();
  updateQuizControls();
}

// This helper translates short extra phrases first.
function translateEnglishRemainder(englishRemainder) {
  let text = ` ${englishRemainder.trim().toLowerCase()} `;

  Object.keys(customPhraseMap)
    .sort((a, b) => b.length - a.length)
    .forEach((phrase) => {
      text = text.replaceAll(` ${phrase} `, ` ${customPhraseMap[phrase]} `);
    });

  return text
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => customWordMap[word.replace(/[.,]/g, "")] ?? word.replace(/[.,]/g, ""))
    .filter(Boolean)
    .join(" ");
}

// This function translates a simple offline English sentence into Spanish.
function translateCustomSentence() {
  const englishInput = customEnglishInput.value.trim();

  if (!englishInput) {
    alert("Write an English sentence first.");
    return;
  }

  const tone = customToneSelect.value;
  const topic = customTopicSelect.value;
  const difficulty = customDifficultySelect.value;
  const normalised = normaliseEnglishText(englishInput).replace(/\.$/, "");
  const parts = normalised.split(" ").filter(Boolean);

  if (parts.length < 2) {
    customStatus.textContent = "Try a short sentence like 'I drink coffee in the morning.'";
    return;
  }

  const subjectKey = parts[0];
  const verbKey = parts[1];
  const subject = customSubjectMap[subjectKey];
  const verb = customVerbMap[verbKey];

  if (!subject || !verb) {
    customStatus.textContent = "That sentence is a bit too complex for the offline translator. Try a short everyday sentence such as 'I work at the office' or 'You drink water at night'.";
    return;
  }

  const spanishSubject = subject[tone];
  const spanishVerb = verb[tone][subjectKey];
  const translatedRemainder = translateEnglishRemainder(parts.slice(2).join(" "));
  const rawSpanish = [spanishSubject, spanishVerb, translatedRemainder].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  const capitalisedSpanish = rawSpanish.charAt(0).toUpperCase() + rawSpanish.slice(1);
  const finalSpanish = capitalisedSpanish.endsWith(".") ? capitalisedSpanish : `${capitalisedSpanish}.`;

  latestCustomSentence = {
    difficulty,
    topic,
    tone,
    spanish: finalSpanish,
    english: englishInput,
    generated: false,
    custom: true
  };

  setCurrentSentence(latestCustomSentence, "Custom translation");
  customStatus.textContent = "Custom sentence translated and loaded into the main player. You can now speak it, save it, or add it to a playlist.";
}

// This helper adds a message bubble to the chat log.
function addChatMessage(role, spanish, english = "") {
  chatHistory.push({ role, spanish, english });
  localStorage.setItem("spanishSentenceChatHistory", JSON.stringify(chatHistory));
  renderChatMessages();
}

// This function redraws the chat panel.
function renderChatMessages() {
  chatMessages.innerHTML = "";

  if (chatHistory.length === 0) {
    const emptyBubble = document.createElement("div");
    emptyBubble.className = "chat-bubble coach";
    emptyBubble.innerHTML = '<p class="chat-role">Coach</p><p class="chat-text">Start a chat to practise a conversation in Spanish.</p>';
    chatMessages.appendChild(emptyBubble);
    return;
  }

  chatHistory.forEach((message) => {
    const messageSpanish = message.spanish || message.text || "";
    const messageEnglish = message.english || "";
    const bubble = document.createElement("div");
    const header = document.createElement("div");
    const role = document.createElement("p");
    const text = document.createElement("p");

    bubble.className = `chat-bubble ${message.role === "coach" ? "coach" : "user"}`;
    header.className = "chat-bubble-header";
    role.className = "chat-role";
    text.className = "chat-text";
    role.textContent = message.role === "coach" ? "Coach" : "You";
    text.textContent = messageSpanish;
    header.appendChild(role);

    if (message.role === "coach") {
      const speakButton = document.createElement("button");
      speakButton.className = "secondary-btn chat-audio-btn";
      speakButton.textContent = "Speak";
      speakButton.addEventListener("click", () => {
        speakText(messageSpanish, "es-ES");
      });
      header.appendChild(speakButton);
    }

    bubble.appendChild(header);
    bubble.appendChild(text);

    if (messageEnglish) {
      const englishText = document.createElement("p");
      englishText.className = "chat-text chat-english";
      englishText.textContent = messageEnglish;
      bubble.appendChild(englishText);
    }

    chatMessages.appendChild(bubble);
  });
}

// This helper builds a simple coach reply based on topic and keywords.
function buildCoachReply(userMessage) {
  const topic = chatTopicSelect.value;
  const tone = chatToneSelect.value;
  const promptGroup = chatPrompts[topic][tone];
  const lowerMessage = userMessage.toLowerCase();

  if (lowerMessage.includes("hello") || lowerMessage.includes("hola") || lowerMessage.includes("hi")) {
    return pickRandom(promptGroup.openings);
  }

  if (lowerMessage.includes("coffee") || lowerMessage.includes("food") || lowerMessage.includes("eat") || lowerMessage.includes("drink")) {
    return tone === "formal"
      ? { spanish: "Muy bien. ¿Qué suele tomar normalmente?", english: "Very good. What do you usually have?" }
      : { spanish: "Qué bien. ¿Qué tomas normalmente?", english: "Nice. What do you usually have?" };
  }

  if (lowerMessage.includes("gym") || lowerMessage.includes("train") || lowerMessage.includes("exercise")) {
    return tone === "formal"
      ? { spanish: "Entiendo. ¿Con qué frecuencia entrena?", english: "I see. How often do you train?" }
      : { spanish: "Genial. ¿Cuántas veces entrenas por semana?", english: "Great. How many times do you train per week?" };
  }

  if (lowerMessage.includes("travel") || lowerMessage.includes("trip") || lowerMessage.includes("madrid") || lowerMessage.includes("hotel")) {
    return tone === "formal"
      ? { spanish: "Muy interesante. ¿Qué es lo que más le gusta de viajar?", english: "Very interesting. What do you like most about travelling?" }
      : { spanish: "Qué guay. ¿Qué es lo que más te gusta de viajar?", english: "Cool. What do you like most about travelling?" };
  }

  if (lowerMessage.includes("work") || lowerMessage.includes("office") || lowerMessage.includes("meeting")) {
    return tone === "formal"
      ? { spanish: "Entiendo. ¿Cómo suele ser un día normal de trabajo para usted?", english: "I understand. What is a normal workday like for you?" }
      : { spanish: "Ya veo. ¿Cómo es un día normal de trabajo para ti?", english: "I see. What is a normal workday like for you?" };
  }

  if (lowerMessage.includes("sleep") || lowerMessage.includes("tired") || lowerMessage.includes("night")) {
    return tone === "formal"
      ? { spanish: "Comprendo. ¿Qué hace normalmente para descansar mejor?", english: "I understand. What do you normally do to rest better?" }
      : { spanish: "Entiendo. ¿Qué haces normalmente para descansar mejor?", english: "I understand. What do you normally do to rest better?" };
  }

  return pickRandom(promptGroup.followUps);
}

// This function starts a fresh chat.
function startChat() {
  const topic = chatTopicSelect.value;
  const tone = chatToneSelect.value;
  const opening = pickRandom(chatPrompts[topic][tone].openings);

  chatHistory = [];
  lastCoachReply = opening;
  addChatMessage("coach", opening.spanish, opening.english);
  if (chatAutoSpeakCheckbox.checked) {
    speakText(opening.spanish, "es-ES");
  }
  chatStatus.textContent = "Chat started. Reply in English or simple Spanish.";
}

// This function sends one message to the coach.
function sendChatMessage() {
  const userMessage = chatInput.value.trim();

  if (!userMessage) {
    alert("Write a message first.");
    return;
  }

  addChatMessage("user", userMessage);
  const coachReply = buildCoachReply(userMessage);
  lastCoachReply = coachReply;
  addChatMessage("coach", coachReply.spanish, coachReply.english);
  if (chatAutoSpeakCheckbox.checked) {
    speakText(coachReply.spanish, "es-ES");
  }
  chatInput.value = "";
  chatStatus.textContent = "The coach replied in Spanish. You can speak it or use it as a sentence.";
}

// This function clears the conversation.
function clearChat() {
  chatHistory = [];
  lastCoachReply = null;
  localStorage.removeItem("spanishSentenceChatHistory");
  renderChatMessages();
  chatStatus.textContent = "Chat cleared.";
}

// This function loads the last coach reply into the main sentence player.
function useLastChatReplyAsSentence() {
  if (!lastCoachReply) {
    alert("Start a chat first.");
    return;
  }

  const chatSentence = {
    difficulty: "intermediate",
    topic: chatTopicSelect.value,
    tone: chatToneSelect.value,
    spanish: lastCoachReply.spanish,
    english: lastCoachReply.english || "Chat coach reply",
    generated: false,
    custom: true
  };

  setCurrentSentence(chatSentence, "Chat coach");
  latestCustomSentence = chatSentence;
  chatStatus.textContent = "The last coach reply is now loaded into the main sentence player.";
}

// This function turns a Spanish sentence into hoverable words.
function buildHoverableFragment(text) {
  const fragment = document.createDocumentFragment();
  const parts = text.split(" ");

  parts.forEach((part, index) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "spanish-word";
    wordSpan.textContent = part;
    wordSpan.setAttribute("tabindex", "0");
    wordSpan.setAttribute("data-translation", getWordTranslation(part));
    fragment.appendChild(wordSpan);

    if (index < parts.length - 1) {
      fragment.appendChild(document.createTextNode(" "));
    }
  });

  return fragment;
}

// This function draws the current Spanish sentence with hover hints.
function renderSpanishSentence(text) {
  spanishSentence.innerHTML = "";
  spanishSentence.appendChild(buildHoverableFragment(text));
}

// This helper removes the final full stop so we can add more pieces.
function removeFinalPeriod(text) {
  return text.endsWith(".") ? text.slice(0, -1) : text;
}

// This helper remembers a small history of recent generated sentences.
function rememberGeneratedSentence(spanishSentenceText) {
  recentGeneratedSentences.push(spanishSentenceText);

  if (recentGeneratedSentences.length > 40) {
    recentGeneratedSentences.shift();
  }
}

// This function creates a new sentence from pieces.
function generateTemplateSentence() {
  const difficulty = difficultySelect.value;
  const topic = topicSelect.value;
  const tone = toneSelect.value;

  const availableTopics =
    topic === "all" ? Object.keys(generatorData[difficulty]) : [topic];

  const chosenTopic = pickRandom(availableTopics);
  const availableTones =
    tone === "all" ? Object.keys(generatorData[difficulty][chosenTopic]) : [tone];

  const chosenTone = pickRandom(availableTones);
  const pattern = generatorData[difficulty][chosenTopic][chosenTone];
  const start = pickRandom(pattern.starts);
  const middle = pickRandom(pattern.middles);
  const end = pickRandom(pattern.ends);
  const middleAddon = pickRandom(generatorExtras.middleAddons);
  const endAddon = pickRandom(generatorExtras.endAddons);
  const spanishParts = [start, middle];

  if (middleAddon) {
    spanishParts.push(middleAddon);
  }

  spanishParts.push(removeFinalPeriod(end));

  if (endAddon) {
    spanishParts.push(endAddon);
  }

  const spanish = `${spanishParts.join(" ")}.`;
  const englishStart = generatorTranslations.starts[start] || start;
  const englishMiddle = generatorTranslations.middles[middle] || middle;
  const englishEnd = generatorTranslations.ends[end] || end;
  const englishMiddleAddon = generatorExtraTranslations.middleAddons[middleAddon] || middleAddon;
  const englishEndAddon = generatorExtraTranslations.endAddons[endAddon] || endAddon;
  const englishParts = [englishStart, englishMiddle];

  if (englishMiddleAddon) {
    englishParts.push(englishMiddleAddon);
  }

  englishParts.push(removeFinalPeriod(englishEnd));

  if (englishEndAddon) {
    englishParts.push(englishEndAddon);
  }

  const english = `${englishParts.join(" ")}.`;

  return {
    difficulty,
    topic: chosenTopic,
    tone: chosenTone,
    spanish,
    english,
    generated: true
  };
}

// This function returns hand-written sentences that match the current filters.
function getFilteredBaseSentences() {
  const selectedDifficulty = difficultySelect.value;
  const selectedTopic = topicSelect.value;
  const selectedTone = toneSelect.value;

  return baseSentences.filter((sentence) => {
    const difficultyMatches = sentence.difficulty === selectedDifficulty;
    const topicMatches = selectedTopic === "all" || sentence.topic === selectedTopic;
    const toneMatches = selectedTone === "all" || sentence.tone === selectedTone;
    return difficultyMatches && topicMatches && toneMatches;
  });
}

// This function returns the current sentence pool after applying all filters.
function getFilteredSentences() {
  const selectedDifficulty = difficultySelect.value;
  const selectedTopic = topicSelect.value;
  const selectedTone = toneSelect.value;
  const sourceSentences = favouritesOnlyCheckbox.checked ? favourites : baseSentences;

  return sourceSentences.filter((sentence) => {
    const difficultyMatches = sentence.difficulty === selectedDifficulty;
    const topicMatches = selectedTopic === "all" || sentence.topic === selectedTopic;
    const toneMatches = selectedTone === "all" || sentence.tone === selectedTone;
    return difficultyMatches && topicMatches && toneMatches;
  });
}

// This helper pulls JSON out of an AI response, even if the model wraps it
// inside markdown code fences.
function extractJsonText(rawText) {
  const trimmedText = rawText.trim();

  if (trimmedText.startsWith("```")) {
    const lines = trimmedText.split("\n");
    const cleanedLines = lines.filter((line) => !line.startsWith("```"));
    return cleanedLines.join("\n").trim();
  }

  return trimmedText;
}

// This function asks the Netlify backend for a fresh AI sentence.
async function generateAiSentence() {
  let response;

  try {
    response = await fetch("/api/generate-sentence", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        difficulty: difficultySelect.value,
        topic: topicSelect.value,
        tone: toneSelect.value
      })
    });
  } catch (error) {
    throw new Error("Network error. The app could not reach the AI backend.");
  }

  if (!response.ok) {
    let errorMessage = "The AI backend was not ready.";

    try {
      const errorData = await response.json();
      errorMessage = errorData.details || errorData.error || errorMessage;
    } catch (error) {
      errorMessage = "The AI backend returned an unexpected error.";
    }

    throw new Error(errorMessage);
  }

  const data = await response.json();

  if (!data || !data.sentence || !data.sentence.spanish || !data.sentence.english) {
    throw new Error("The AI backend did not return a valid sentence.");
  }

  return {
    difficulty: data.sentence.difficulty || difficultySelect.value,
    topic: data.sentence.topic || topicSelect.value,
    tone: data.sentence.tone || toneSelect.value,
    spanish: data.sentence.spanish.trim(),
    english: data.sentence.english.trim(),
    generated: true,
    ai: true
  };
}

// This helper contains the built-in sentence generation path.
function generateLocalSentence(filteredSentences) {
  if (favouritesOnlyCheckbox.checked) {
    return pickRandom(filteredSentences);
  }

  const useBaseSentence = Math.random() < 0.2 && filteredSentences.length > 0;
  let nextSentence = useBaseSentence ? pickRandom(filteredSentences) : generateTemplateSentence();
  let safetyCount = 0;

  while (
    (nextSentence.spanish === lastGeneratedSpanish || recentGeneratedSentences.includes(nextSentence.spanish)) &&
    safetyCount < 60
  ) {
    nextSentence = useBaseSentence ? pickRandom(filteredSentences) : generateTemplateSentence();
    safetyCount += 1;
  }

  return nextSentence;
}

// This function chooses the next sentence.
// If "favourites only" is off, we can always fall back to a generated sentence,
// which lets the app keep making new practice sentences indefinitely.
async function generateSentence() {
  const filteredSentences = getFilteredSentences();

  if (filteredSentences.length === 0 && favouritesOnlyCheckbox.checked) {
    renderSpanishSentence("No hay frases para esta combinación.");
    englishTranslation.textContent = "There are no favourite sentences for this combination.";
    sentenceMeta.textContent = "Try another topic, style, difficulty, or save more favourites.";
    currentSentence = null;
    translationVisible = true;
    answerMarked = false;
    updateTranslationDisplay();
    updateQuizControls();
    return;
  }

  let nextSentence;

  if (aiModeEnabled && !favouritesOnlyCheckbox.checked) {
    const remainingCooldown = Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown > 0) {
      nextSentence = generateLocalSentence(filteredSentences);
      setCurrentSentence(nextSentence, nextSentence.generated ? "Generated" : "Example");
      if (nextSentence.generated) {
        rememberGeneratedSentence(nextSentence.spanish);
      }
      showStatusMessage(`AI cooldown is active. Please wait ${remainingCooldown} seconds. The built-in generator was used for now.`);
      return;
    }

    generateBtn.disabled = true;
    generateBtn.textContent = "Generating...";
    showStatusMessage("Asking the AI sentence engine for a fresh sentence...");
    aiCooldownUntil = Date.now() + 10000;

    try {
      nextSentence = await generateAiSentence();
    } catch (error) {
      nextSentence = generateLocalSentence(filteredSentences);
      showStatusMessage(`${formatAiErrorMessage(error.message)} The built-in generator was used instead.`);
    } finally {
      generateBtn.disabled = false;
      generateBtn.textContent = "Generate Sentence";
    }
  } else {
    nextSentence = generateLocalSentence(filteredSentences);
  }

  const sourceLabel = nextSentence.ai
    ? "AI generated"
    : nextSentence.generated
      ? "Generated"
      : "Example";

  setCurrentSentence(nextSentence, sourceLabel);
  if (nextSentence.generated) {
    rememberGeneratedSentence(nextSentence.spanish);
  }

  if (!(aiModeEnabled && !favouritesOnlyCheckbox.checked && nextSentence.ai !== true)) {
    showStatusMessage(
      quizModeCheckbox.checked
        ? "Quiz mode is on. Try to guess the meaning first."
        : "Hover over a Spanish word to see an English hint."
    );
  }
}

// This function uses the browser's built-in speech system.
function speakText(text, languageCode) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    alert("Sorry, your browser does not support text-to-speech.");
    return;
  }

  loadVoices();
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();

  const speakNow = () => {
    const utterance = createSpeechUtterance(text, languageCode);
    window.speechSynthesis.speak(utterance);
  };

  if (availableVoices.length) {
    speakNow();
    return;
  }

  setTimeout(speakNow, 250);
}

// This version lets us know when speech has finished.
function speakTextWithCallback(text, languageCode, callback) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    alert("Sorry, your browser does not support text-to-speech.");
    return;
  }

  loadVoices();
  window.speechSynthesis.cancel();
  window.speechSynthesis.resume();

  const speakNow = () => {
    const utterance = createSpeechUtterance(text, languageCode);
    utterance.onend = callback;
    window.speechSynthesis.speak(utterance);
  };

  if (availableVoices.length) {
    speakNow();
    return;
  }

  setTimeout(speakNow, 250);
}

// This function updates whether the English translation is visible.
function updateTranslationDisplay() {
  if (!currentSentence) {
    toggleTranslationBtn.textContent = "Hide translation";
    return;
  }

  if (translationVisible) {
    englishTranslation.textContent = currentSentence.english;
    toggleTranslationBtn.textContent = "Hide translation";
  } else {
    englishTranslation.textContent = "Translation hidden. Try to guess it first.";
    toggleTranslationBtn.textContent = "Show translation";
  }
}

// This function shows or hides quiz buttons.
function updateQuizControls() {
  if (quizModeCheckbox.checked) {
    quizActions.classList.remove("hidden");
  } else {
    quizActions.classList.add("hidden");
  }

  markCorrectBtn.disabled = !currentSentence || answerMarked;
  markWrongBtn.disabled = !currentSentence || answerMarked;
}

// This helper shows short status messages.
function showStatusMessage(message) {
  statusMessage.textContent = message;
}

function formatAiErrorMessage(errorMessage) {
  const lowerMessage = errorMessage.toLowerCase();

  if (lowerMessage.includes("rate limit")) {
    return "AI is temporarily rate limited.";
  }

  if (lowerMessage.includes("quota") || lowerMessage.includes("budget") || lowerMessage.includes("usage_exceeded")) {
    return "AI is unavailable because the OpenAI project quota or budget was reached.";
  }

  if (lowerMessage.includes("missing") && lowerMessage.includes("api key")) {
    return "AI is unavailable because the OpenAI API key is missing on the server.";
  }

  if (lowerMessage.includes("wrong api key") || lowerMessage.includes("invalid api key") || lowerMessage.includes("incorrect api key")) {
    return "AI is unavailable because the OpenAI API key appears to be wrong.";
  }

  if (lowerMessage.includes("network")) {
    return "AI is unavailable because the app could not reach the AI service.";
  }

  return `AI is unavailable right now. ${errorMessage}`;
}

// This function saves whether AI mode is turned on.
function saveAiModePreference() {
  localStorage.setItem("spanishSentenceAiMode", JSON.stringify(aiModeEnabled));
}

// This helper updates the short AI note under the controls.
function updateAiModeNote() {
  if (favouritesOnlyCheckbox.checked) {
    aiModeNote.textContent = "AI mode does not change favourite-only practice. That mode still uses your saved sentences.";
    return;
  }

  aiModeNote.textContent = aiModeEnabled
    ? "AI mode is on. The app will ask the Netlify backend for a fresh sentence, then fall back to the built-in generator if needed."
    : "AI mode is off. The app is using the built-in sentence generator.";
}

// This function updates the score text.
function renderQuizScore() {
  const total = quizScore.correct + quizScore.wrong;
  scoreSummary.textContent = `Correct: ${quizScore.correct} | Wrong: ${quizScore.wrong} | Total: ${total}`;
}

// This function saves the quiz score.
function saveQuizScore() {
  localStorage.setItem("spanishSentenceQuizScore", JSON.stringify(quizScore));
}

// This function saves playlists in localStorage.
function savePlaylists() {
  localStorage.setItem("spanishSentencePlaylists", JSON.stringify(playlists));
}

// This helper returns the selected playlist object.
function getSelectedPlaylist() {
  return playlists.find((playlist) => playlist.id === playlistSelect.value) || null;
}

// This function draws the playlist dropdown and sentence list.
function renderPlaylists() {
  const previousValue = playlistSelect.value;
  playlistSelect.innerHTML = "";

  if (playlists.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No playlists yet";
    playlistSelect.appendChild(option);
    renderSelectedPlaylist();
    return;
  }

  playlists.forEach((playlist) => {
    const option = document.createElement("option");
    option.value = playlist.id;
    option.textContent = `${playlist.name} (${playlist.sentences.length})`;
    playlistSelect.appendChild(option);
  });

  const hasPrevious = playlists.some((playlist) => playlist.id === previousValue);
  playlistSelect.value = hasPrevious ? previousValue : playlists[0].id;
  renderSelectedPlaylist();
}

// This function draws the sentences inside the selected playlist.
function renderSelectedPlaylist() {
  playlistSentences.innerHTML = "";
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    playlistEmptyMessage.style.display = "block";
    playlistEmptyMessage.textContent = "No playlists yet.";
    radioStatus.textContent = "Create a playlist, add sentences, then press play.";
    return;
  }

  if (playlist.sentences.length === 0) {
    playlistEmptyMessage.style.display = "block";
    playlistEmptyMessage.textContent = "This playlist is empty.";
    radioStatus.textContent = "Add the current sentence or a favourite sentence to this playlist.";
    return;
  }

  playlistEmptyMessage.style.display = "none";
  radioStatus.textContent = `Selected playlist: ${playlist.name}`;

  playlist.sentences.forEach((sentence, index) => {
    const listItem = document.createElement("li");
    listItem.className = "favourite-item";

    const textWrapper = document.createElement("div");
    const title = document.createElement("h4");
    const translation = document.createElement("p");
    const tagRow = document.createElement("div");
    const difficultyTag = document.createElement("span");
    const topicTag = document.createElement("span");
    const toneTag = document.createElement("span");
    const removeButton = document.createElement("button");

    title.appendChild(buildHoverableFragment(sentence.spanish));
    translation.textContent = sentence.english;

    tagRow.className = "tag-row";
    difficultyTag.className = "tag";
    topicTag.className = "tag";
    toneTag.className = "tag";
    difficultyTag.textContent = capitalize(sentence.difficulty);
    topicTag.textContent = capitalize(sentence.topic);
    toneTag.textContent = capitalize(sentence.tone);

    removeButton.textContent = "Remove";
    removeButton.className = "delete-btn";
    removeButton.addEventListener("click", () => {
      removeFromPlaylist(index);
    });

    tagRow.appendChild(difficultyTag);
    tagRow.appendChild(topicTag);
    tagRow.appendChild(toneTag);
    textWrapper.appendChild(title);
    textWrapper.appendChild(translation);
    textWrapper.appendChild(tagRow);
    listItem.appendChild(textWrapper);
    listItem.appendChild(removeButton);
    playlistSentences.appendChild(listItem);
  });
}

// This function creates a new playlist.
function createPlaylist() {
  const name = playlistNameInput.value.trim();

  if (!name) {
    alert("Type a playlist name first.");
    return;
  }

  playlists.push({
    id: createId(),
    name,
    sentences: []
  });

  savePlaylists();
  playlistNameInput.value = "";
  renderPlaylists();
  showStatusMessage("Playlist created.");
}

// This function adds one sentence to the selected playlist.
function addSentenceToSelectedPlaylist(sentence) {
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    alert("Create a playlist first.");
    return;
  }

  const alreadyAdded = playlist.sentences.some((item) => item.spanish === sentence.spanish);

  if (alreadyAdded) {
    alert("This sentence is already in the selected playlist.");
    return;
  }

  playlist.sentences.push(sentence);
  savePlaylists();
  renderPlaylists();
  showStatusMessage("Sentence added to the playlist.");
}

// This function removes one sentence from the selected playlist.
function removeFromPlaylist(index) {
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    return;
  }

  playlist.sentences.splice(index, 1);
  savePlaylists();
  renderPlaylists();
}

// This function deletes the selected playlist.
function deleteSelectedPlaylist() {
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    alert("There is no playlist to delete.");
    return;
  }

  stopRadioMode();
  playlists = playlists.filter((item) => item.id !== playlist.id);
  savePlaylists();
  renderPlaylists();
  showStatusMessage("Playlist deleted.");
}

// This function stops any radio playback.
function stopRadioMode() {
  radioState.isPlaying = false;
  window.speechSynthesis.cancel();
  radioStatus.textContent = "Radio mode stopped.";
}

// This function chooses which sentence to play next in radio mode.
function playRadioStep() {
  const playlist = playlists.find((item) => item.id === radioState.playlistId);

  if (!radioState.isPlaying || !playlist || playlist.sentences.length === 0) {
    radioState.isPlaying = false;
    return;
  }

  const currentPlaylistSentence = playlist.sentences[radioState.index];
  radioStatus.textContent = `Playing ${radioState.index + 1} of ${playlist.sentences.length}: ${playlist.name}`;

  speakTextWithCallback(currentPlaylistSentence.spanish, "es-ES", () => {
    if (!radioState.isPlaying) {
      return;
    }

    if (radioState.mode === "repeat-one") {
      playRadioStep();
      return;
    }

    if (radioState.mode === "play-once") {
      radioState.index += 1;

      if (radioState.index >= playlist.sentences.length) {
        radioState.isPlaying = false;
        radioStatus.textContent = "Playlist finished.";
        return;
      }

      playRadioStep();
      return;
    }

    if (radioState.mode === "loop-all") {
      radioState.index = (radioState.index + 1) % playlist.sentences.length;
      playRadioStep();
    }
  });
}

// This function starts radio playback.
function startRadioMode() {
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    alert("Create a playlist first.");
    return;
  }

  if (playlist.sentences.length === 0) {
    alert("Add at least one sentence to the playlist first.");
    return;
  }

  radioState.isPlaying = true;
  radioState.playlistId = playlist.id;
  radioState.mode = radioModeSelect.value;
  radioState.index = 0;
  playRadioStep();
}

// This function copies the current sentence and translation.
async function copyCurrentSentence() {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  const textToCopy = `${currentSentence.spanish}\n${currentSentence.english}`;

  if (!navigator.clipboard) {
    alert("Sorry, copy is not supported in this browser.");
    return;
  }

  try {
    await navigator.clipboard.writeText(textToCopy);
    showStatusMessage("Sentence copied to your clipboard.");
  } catch (error) {
    alert("Copy failed. Please try again.");
  }
}

// This function hides or shows the translation.
function toggleTranslation() {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  translationVisible = !translationVisible;
  updateTranslationDisplay();
}

// This function records whether you got a quiz answer right or wrong.
function markQuizAnswer(result) {
  if (!quizModeCheckbox.checked) {
    alert("Turn on quiz mode first.");
    return;
  }

  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  if (answerMarked) {
    alert("You have already marked this sentence.");
    return;
  }

  if (result === "correct") {
    quizScore.correct += 1;
    showStatusMessage("Nice work. Marked as correct.");
  } else {
    quizScore.wrong += 1;
    showStatusMessage("Marked as wrong. Keep going.");
  }

  answerMarked = true;
  saveQuizScore();
  renderQuizScore();
  updateQuizControls();
}

// This function resets the quiz score.
function resetQuizScore() {
  quizScore = { correct: 0, wrong: 0 };
  saveQuizScore();
  renderQuizScore();
  showStatusMessage("Quiz score reset.");
}

// This function saves the current sentence to favourites.
function saveCurrentSentence() {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  const alreadySaved = favourites.some((item) => item.spanish === currentSentence.spanish);

  if (alreadySaved) {
    alert("This sentence is already in your favourites.");
    return;
  }

  favourites.push(currentSentence);
  saveFavourites();
  renderFavourites();
}

// This function deletes one favourite sentence.
function deleteFavourite(spanishText) {
  favourites = favourites.filter((item) => item.spanish !== spanishText);
  saveFavourites();
  renderFavourites();
}

// This function saves favourites in localStorage.
function saveFavourites() {
  localStorage.setItem("spanishSentenceFavourites", JSON.stringify(favourites));
}

// This function draws the favourites list.
// Saved Spanish text also uses hover word hints now.
function renderFavourites() {
  favouritesList.innerHTML = "";
  const searchText = favouritesSearchInput.value.trim().toLowerCase();

  if (favourites.length === 0) {
    emptyMessage.style.display = "block";
    emptyMessage.textContent = "No favourites saved yet.";
    return;
  }

  const filteredFavourites = favourites.filter((item) => {
    return (
      item.spanish.toLowerCase().includes(searchText) ||
      item.english.toLowerCase().includes(searchText) ||
      item.topic.toLowerCase().includes(searchText) ||
      item.difficulty.toLowerCase().includes(searchText) ||
      item.tone.toLowerCase().includes(searchText)
    );
  });

  if (filteredFavourites.length === 0) {
    emptyMessage.style.display = "block";
    emptyMessage.textContent = "No favourites match your search.";
    return;
  }

  emptyMessage.style.display = "none";

  filteredFavourites.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "favourite-item";

    const textWrapper = document.createElement("div");
    const title = document.createElement("h4");
    const translation = document.createElement("p");
    const tagRow = document.createElement("div");
    const difficultyTag = document.createElement("span");
    const topicTag = document.createElement("span");
    const toneTag = document.createElement("span");
    const deleteButton = document.createElement("button");
    const playlistButton = document.createElement("button");

    title.appendChild(buildHoverableFragment(item.spanish));
    translation.textContent = item.english;

    tagRow.className = "tag-row";
    difficultyTag.className = "tag";
    topicTag.className = "tag";
    toneTag.className = "tag";
    difficultyTag.textContent = capitalize(item.difficulty);
    topicTag.textContent = capitalize(item.topic);
    toneTag.textContent = capitalize(item.tone);

    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => {
      deleteFavourite(item.spanish);
    });

    playlistButton.textContent = "Add to playlist";
    playlistButton.className = "secondary-btn";
    playlistButton.addEventListener("click", () => {
      addSentenceToSelectedPlaylist(item);
    });

    tagRow.appendChild(difficultyTag);
    tagRow.appendChild(topicTag);
    tagRow.appendChild(toneTag);
    textWrapper.appendChild(title);
    textWrapper.appendChild(translation);
    textWrapper.appendChild(tagRow);
    textWrapper.appendChild(playlistButton);
    listItem.appendChild(textWrapper);
    listItem.appendChild(deleteButton);
    favouritesList.appendChild(listItem);
  });
}

// Event listeners tell the app what to do when buttons are clicked.
generateBtn.addEventListener("click", generateSentence);

speakSpanishBtn.addEventListener("click", () => {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  stopRadioMode();
  speakText(currentSentence.spanish, "es-ES");
});

speakEnglishBtn.addEventListener("click", () => {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  stopRadioMode();
  speakText(currentSentence.english, "en-GB");
});

copyBtn.addEventListener("click", copyCurrentSentence);

toggleTranslationBtn.addEventListener("click", () => {
  toggleTranslation();
  showStatusMessage(translationVisible ? "Translation revealed." : "Translation hidden.");
});

saveBtn.addEventListener("click", saveCurrentSentence);
markCorrectBtn.addEventListener("click", () => markQuizAnswer("correct"));
markWrongBtn.addEventListener("click", () => markQuizAnswer("wrong"));
resetScoreBtn.addEventListener("click", resetQuizScore);
createPlaylistBtn.addEventListener("click", createPlaylist);
translateCustomBtn.addEventListener("click", translateCustomSentence);
startChatBtn.addEventListener("click", startChat);
micChatBtn.addEventListener("click", toggleChatMic);
sendChatBtn.addEventListener("click", sendChatMessage);
clearChatBtn.addEventListener("click", clearChat);
speakChatReplyBtn.addEventListener("click", () => {
  if (!lastCoachReply) {
    alert("Start a chat first.");
    return;
  }

  speakText(lastCoachReply.spanish, "es-ES");
});
useChatReplyBtn.addEventListener("click", useLastChatReplyAsSentence);
addCurrentToPlaylistBtn.addEventListener("click", () => {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  addSentenceToSelectedPlaylist(currentSentence);
});
addCustomToPlaylistBtn.addEventListener("click", () => {
  if (!latestCustomSentence) {
    alert("Translate a custom sentence first.");
    return;
  }

  addSentenceToSelectedPlaylist(latestCustomSentence);
});
playRadioBtn.addEventListener("click", startRadioMode);
stopRadioBtn.addEventListener("click", stopRadioMode);
deletePlaylistBtn.addEventListener("click", deleteSelectedPlaylist);
playlistSelect.addEventListener("change", renderSelectedPlaylist);

quizModeCheckbox.addEventListener("change", () => {
  if (!currentSentence) {
    updateQuizControls();
    showStatusMessage(quizModeCheckbox.checked ? "Quiz mode will apply to the next sentence." : "");
    return;
  }

  translationVisible = !quizModeCheckbox.checked;
  updateTranslationDisplay();
  updateQuizControls();
  showStatusMessage(quizModeCheckbox.checked ? "Quiz mode is on. Translation hidden." : "Quiz mode is off. Translation visible.");
});

favouritesSearchInput.addEventListener("input", renderFavourites);

favouritesOnlyCheckbox.addEventListener("change", () => {
  showStatusMessage(favouritesOnlyCheckbox.checked ? "Now practising saved favourites only." : "Now practising from all sentences, including unlimited generated ones.");
  updateAiModeNote();
});
aiModeCheckbox.addEventListener("change", () => {
  aiModeEnabled = aiModeCheckbox.checked;
  saveAiModePreference();
  updateAiModeNote();
  showStatusMessage(aiModeEnabled ? "AI sentence engine turned on." : "AI sentence engine turned off.");
});
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendChatMessage();
  }
});

// These functions run as soon as the page loads.
loadVoices();
setupChatRecognition();
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js?v=9").catch(() => {
      console.warn("Service worker registration failed.");
    });
  });
}
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  showInstallBanner("This app is ready to install. Tap the button below, or use Chrome's menu and choose 'Add to Home screen'.", true);
});
window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  hideInstallBanner();
});
installAppBtn.addEventListener("click", promptInstall);
dismissInstallBtn.addEventListener("click", hideInstallBanner);
window.addEventListener("load", () => {
  setTimeout(showAndroidInstallHelp, 1500);
});
renderFavourites();
renderPlaylists();
renderChatMessages();
renderQuizScore();
updateQuizControls();
aiModeCheckbox.checked = aiModeEnabled;
updateAiModeNote();
