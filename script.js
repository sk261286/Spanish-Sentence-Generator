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

// Extra normalised hints for generated and AI-created sentences. Keys here are
// accent-free because the lookup also strips accents before searching.
Object.assign(wordTranslations, {
  abro: "I open",
  aburrido: "boring",
  acabar: "to end up / to finish",
  acabo: "I end up",
  acuerdo: "agreement",
  adaptarme: "to adapt",
  adelante: "later / ahead",
  ademas: "besides / also",
  agradable: "pleasant",
  agobiarme: "to get overwhelmed",
  ahora: "now",
  andando: "walking",
  antelacion: "in advance",
  apago: "I switch off",
  aprieta: "is tight / presses",
  aproximadamente: "approximately",
  aqui: "here",
  arreglar: "to sort out / fix",
  asi: "like this / so",
  atiendo: "I deal with / attend",
  autenticidad: "authenticity",
  avion: "plane",
  evitar: "to avoid",
  evito: "I avoid",
  barrio: "neighbourhood",
  breve: "brief / short",
  buscar: "to look for",
  cabeza: "head / sense",
  calentito: "nice and warm",
  calma: "calm",
  camino: "I walk / path",
  cambio: "change",
  cansado: "tired",
  casera: "homemade",
  caseras: "homemade",
  cenar: "to have dinner",
  cena: "dinner",
  centro: "centre",
  claridad: "clarity",
  claro: "clear",
  cocinas: "you cook",
  comida: "meal / food",
  comidas: "meals",
  como: "as / like",
  complejo: "complex",
  completo: "complete",
  comprobar: "to check",
  conocidos: "known",
  consigo: "I manage",
  conservar: "to keep / preserve",
  contestados: "answered",
  correos: "emails",
  constancia: "consistency",
  constante: "constant",
  cortas: "short",
  cosas: "things",
  curado: "worked hard / grafted",
  cuesta: "is hard",
  cuestaarriba: "uphill / difficult",
  cuidado: "care",
  cuidada: "well looked after",
  cuidar: "to look after",
  cuanto: "as soon as / how much",
  da: "gives",
  darle: "to give it",
  dejo: "I leave",
  dejar: "to leave",
  detalle: "detail",
  dia: "day",
  dias: "days",
  despues: "after / afterwards",
  dificil: "difficult",
  dormir: "to sleep",
  dormirme: "to fall asleep",
  dos: "two",
  durante: "during",
  echar: "to spend / pour / throw",
  eficaz: "effective",
  ejercicio: "exercise",
  elijo: "I choose",
  empiezo: "I start",
  empieza: "starts",
  empezar: "to start",
  encadeno: "I link together",
  enlace: "link",
  energia: "energy",
  ensalada: "salad",
  entiendo: "I understand",
  entorno: "environment",
  entreno: "I train",
  equilibrio: "balance",
  equilibradas: "balanced",
  especial: "special",
  espero: "I hope",
  estable: "stable",
  estar: "to be",
  estamos: "we are",
  estan: "they are",
  estas: "you are",
  estacion: "station",
  estimulos: "stimuli",
  estres: "stress",
  extranjero: "abroad",
  familia: "family",
  facil: "easy",
  favoritos: "favourites",
  fin: "end",
  fines: "weekends",
  forma: "way / form",
  fuerza: "strength",
  fuera: "outside",
  frecuencia: "frequency",
  frescos: "fresh",
  gradual: "gradual",
  gestionar: "to manage",
  habitos: "habits",
  hago: "I do / I make",
  hambre: "hunger",
  horario: "timetable",
  horarios: "timetables",
  horas: "hours",
  importantes: "important",
  imprevistos: "unexpected events",
  innecesarios: "unnecessary",
  ingredientes: "ingredients",
  invitados: "guests",
  ir: "to go",
  jornada: "working day / day",
  lado: "side",
  larga: "long",
  largo: "long",
  lesiones: "injuries",
  ligera: "light",
  lleno: "full",
  llena: "fills up",
  llegar: "to arrive",
  llamadas: "calls",
  lugares: "places",
  lunes: "Mondays",
  los: "the",
  malentendidos: "misunderstandings",
  mas: "more",
  mantengo: "I keep",
  mantener: "to keep",
  mapa: "map",
  mayor: "greater / larger",
  mejor: "better",
  mejorar: "to improve",
  mejores: "better",
  menos: "less / fewer",
  mesa: "table",
  mirar: "to look at",
  mochila: "backpack",
  molestias: "aches / discomfort",
  momentos: "moments",
  monton: "a lot",
  moverme: "to move around",
  musica: "music",
  movil: "mobile phone",
  nuevas: "new",
  nuevo: "new",
  noches: "nights",
  normalmente: "normally",
  oliva: "olive",
  ordenar: "to tidy / organise",
  orden: "order",
  ordenada: "ordered / tidy",
  ordenado: "ordered / tidy",
  origen: "origin",
  o: "or",
  palomitas: "popcorn",
  para: "for / in order to",
  pantalla: "screen",
  pasan: "pass / go by",
  parte: "part",
  paso: "I spend / I pass",
  poco: "little / a bit",
  postura: "posture",
  precision: "precision",
  practica: "practice",
  preparando: "preparing",
  preparado: "prepared / ready",
  preparada: "prepared / ready",
  preparo: "I prepare",
  preparar: "to prepare",
  prisa: "rush",
  prisas: "rush",
  prioridad: "priority",
  prioridades: "priorities",
  producto: "product",
  profunda: "deep",
  pronto: "soon / early",
  pruebo: "I try / taste",
  pudiera: "could",
  quiero: "I want",
  rapida: "quick",
  rapido: "quickly",
  receta: "recipe",
  recetas: "recipes",
  recojo: "I pick up / tidy away",
  recuperacion: "recovery",
  reducir: "to reduce",
  relajado: "relaxed",
  relajarme: "to relax",
  remoto: "remote",
  resuelto: "resolved",
  resueltos: "resolved",
  retrasos: "delays",
  reviso: "I review / check",
  rincones: "corners / little places",
  ruido: "noise",
  ruta: "route",
  salida: "departure",
  sabrosos: "tasty",
  salida: "departure",
  sencilla: "simple",
  sencillas: "simple",
  sencillo: "simple",
  se: "himself / herself / itself",
  serie: "series / show",
  serio: "serious",
  seguridad: "safety / confidence",
  sentido: "meaning / sense",
  sentarme: "to sit down",
  sesion: "session",
  sesiones: "sessions",
  sofa: "sofa",
  suficientes: "enough",
  surjan: "come up / arise",
  tarde: "afternoon / late",
  tareas: "tasks",
  tecnica: "technique",
  temprano: "early",
  tengo: "I have",
  todos: "all / every",
  trabajar: "to work",
  tranquila: "calm / quiet",
  tranquilas: "calm / quiet",
  tranquilidad: "calm / peace",
  tranquilo: "calm / quiet",
  trayecto: "journey",
  turistica: "touristy",
  turisticas: "touristy",
  ultima: "last",
  ultimamente: "lately",
  uso: "use",
  verduras: "vegetables",
  viaje: "trip / journey",
  viene: "comes",
  viernes: "Friday",
  vuelvo: "I return",
  vuelve: "becomes / returns",
  vaya: "goes",
  y: "and",
  zonas: "areas"
});

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

// These templates make focused offline practice feel different from the general generator.
const focusedGeneratorData = {
  past: {
    templates: [
      {
        spanish: "Ayer {pastVerb} {object} y después {pastFollowUp}.",
        english: "Yesterday I {pastVerbEnglish} {objectEnglish} and afterwards I {pastFollowUpEnglish}."
      },
      {
        spanish: "Esta semana he {pastParticiple} {object} con bastante calma.",
        english: "This week I have {pastParticipleEnglish} {objectEnglish} quite calmly."
      }
    ],
    slots: {
      pastVerb: ["preparé", "terminé", "visité", "organicé", "probé"],
      pastVerbEnglish: ["prepared", "finished", "visited", "organised", "tried"],
      pastParticiple: ["preparado", "terminado", "visitado", "organizado", "probado"],
      pastParticipleEnglish: ["prepared", "finished", "visited", "organised", "tried"],
      object: ["una cena sencilla", "varias tareas pendientes", "un sitio nuevo", "mi agenda", "algo diferente"],
      objectEnglish: ["a simple dinner", "several pending tasks", "a new place", "my schedule", "something different"],
      pastFollowUp: ["me quedé más tranquilo", "descansé un poco", "me sentí mejor", "lo dejé todo listo", "aprendí algo útil"],
      pastFollowUpEnglish: ["felt calmer", "rested a little", "felt better", "left everything ready", "learnt something useful"]
    }
  },
  future: {
    templates: [
      {
        spanish: "Mañana voy a {futureVerb} {object} para {futureReason}.",
        english: "Tomorrow I am going to {futureVerbEnglish} {objectEnglish} to {futureReasonEnglish}."
      },
      {
        spanish: "Este fin de semana quiero {futureVerb} {object} si tengo tiempo.",
        english: "This weekend I want to {futureVerbEnglish} {objectEnglish} if I have time."
      }
    ],
    slots: {
      futureVerb: ["preparar", "visitar", "organizar", "probar", "terminar"],
      futureVerbEnglish: ["prepare", "visit", "organise", "try", "finish"],
      object: ["una comida casera", "un barrio nuevo", "mis planes", "una receta distinta", "un trabajo importante"],
      objectEnglish: ["a homemade meal", "a new neighbourhood", "my plans", "a different recipe", "an important piece of work"],
      futureReason: ["aprovechar mejor el día", "estar más tranquilo", "salir de la rutina", "practicar un poco más", "tenerlo todo listo"],
      futureReasonEnglish: ["make better use of the day", "feel calmer", "break the routine", "practise a little more", "have everything ready"]
    }
  },
  questions: {
    templates: [
      {
        spanish: "¿Qué sueles hacer cuando {questionSituation}?",
        english: "What do you usually do when {questionSituationEnglish}?"
      },
      {
        spanish: "¿Te apetece {questionActivity} esta semana?",
        english: "Do you feel like {questionActivityEnglish} this week?"
      }
    ],
    slots: {
      questionSituation: ["tienes un rato libre", "sales tarde del trabajo", "quieres descansar", "llegas a una ciudad nueva", "no sabes qué cocinar"],
      questionSituationEnglish: ["you have a bit of free time", "you leave work late", "you want to rest", "you arrive in a new city", "you do not know what to cook"],
      questionActivity: ["hacer algo tranquilo", "probar un sitio nuevo", "salir a dar una vuelta", "preparar algo en casa", "entrenar un rato"],
      questionActivityEnglish: ["doing something quiet", "trying a new place", "going out for a walk", "making something at home", "training for a while"]
    }
  },
  opinions: {
    templates: [
      {
        spanish: "Creo que {opinionSubject} es {opinionAdjective} cuando {opinionSituation}.",
        english: "I think {opinionSubjectEnglish} is {opinionAdjectiveEnglish} when {opinionSituationEnglish}."
      },
      {
        spanish: "Me parece que {opinionSubject} ayuda a {opinionBenefit}.",
        english: "It seems to me that {opinionSubjectEnglish} helps to {opinionBenefitEnglish}."
      }
    ],
    slots: {
      opinionSubject: ["tener una rutina clara", "comer con calma", "viajar sin prisas", "entrenar con cabeza", "dormir bien"],
      opinionSubjectEnglish: ["having a clear routine", "eating calmly", "travelling without rushing", "training sensibly", "sleeping well"],
      opinionAdjective: ["importante", "bastante útil", "más agradable", "fundamental", "muy sano"],
      opinionAdjectiveEnglish: ["important", "quite useful", "more pleasant", "essential", "very healthy"],
      opinionSituation: ["el dia viene cargado", "quieres sentirte mejor", "hay poco tiempo", "necesitas concentrarte", "estas cansado"],
      opinionSituationEnglish: ["the day is busy", "you want to feel better", "there is little time", "you need to focus", "you are tired"],
      opinionBenefit: ["vivir con menos estrés", "disfrutar más del día", "mantener la energía", "tomar mejores decisiones", "descansar de verdad"],
      opinionBenefitEnglish: ["live with less stress", "enjoy the day more", "keep your energy up", "make better decisions", "really rest"]
    }
  },
  subjunctive: {
    templates: [
      {
        spanish: "Espero que {subjunctiveSubject} {subjunctiveVerb} {object} esta semana.",
        english: "I hope {subjunctiveSubjectEnglish} {subjunctiveVerbEnglish} {objectEnglish} this week."
      },
      {
        spanish: "Es importante que {subjunctiveSubject} {subjunctiveVerb} {object} con calma.",
        english: "It is important that {subjunctiveSubjectEnglish} {subjunctiveVerbEnglish} {objectEnglish} calmly."
      }
    ],
    slots: {
      subjunctiveSubject: ["yo", "tú", "mi amigo", "mi familia", "el equipo"],
      subjunctiveSubjectEnglish: ["I", "you", "my friend", "my family", "the team"],
      subjunctiveVerb: ["organice", "descanse", "prepare", "termine", "encuentre"],
      subjunctiveVerbEnglish: ["organise", "rest", "prepare", "finish", "find"],
      object: ["mejor el día", "un poco más", "todo a tiempo", "la cena sin prisa", "una buena solución"],
      objectEnglish: ["the day better", "a little more", "everything on time", "dinner without rushing", "a good solution"]
    }
  },
  idioms: {
    templates: [
      {
        spanish: "Hoy voy con la lengua fuera, pero quiero terminar {object}.",
        english: "Today I am rushed off my feet, but I want to finish {objectEnglish}."
      },
      {
        spanish: "Después de tanto trabajo, necesito desconectar un rato y tomarme las cosas con calma.",
        english: "After so much work, I need to switch off for a while and take things calmly."
      }
    ],
    slots: {
      object: ["lo mas importante", "la tarea pendiente", "el plan de manana", "la compra", "el informe"],
      objectEnglish: ["the most important thing", "the pending task", "tomorrow's plan", "the shopping", "the report"]
    }
  }
};

const focusedTopicSlots = {
  "daily life": {
    object: ["mi agenda", "la casa", "varias tareas pendientes", "la compra", "mi rutina"],
    objectEnglish: ["my schedule", "the house", "several pending tasks", "the shopping", "my routine"]
  },
  "gym/fitness": {
    object: ["una rutina de fuerza", "los estiramientos", "una sesión corta", "el entrenamiento", "la mochila del gimnasio"],
    objectEnglish: ["a strength routine", "the stretches", "a short session", "the workout", "the gym bag"]
  },
  food: {
    object: ["una cena sencilla", "una comida casera", "una receta nueva", "algo con verduras", "una sopa caliente"],
    objectEnglish: ["a simple dinner", "a homemade meal", "a new recipe", "something with vegetables", "a hot soup"]
  },
  travel: {
    object: ["el itinerario", "una escapada corta", "el trayecto al hotel", "una visita al centro", "la mochila"],
    objectEnglish: ["the itinerary", "a short getaway", "the journey to the hotel", "a visit to the centre", "the backpack"]
  },
  work: {
    object: ["el informe", "una reunión", "los correos", "la agenda de trabajo", "una tarea importante"],
    objectEnglish: ["the report", "a meeting", "the emails", "the work schedule", "an important task"]
  },
  sleep: {
    object: ["mi rutina de noche", "el móvil antes de dormir", "la habitación", "un descanso más largo", "una noche tranquila"],
    objectEnglish: ["my night routine", "my phone before sleeping", "the bedroom", "a longer rest", "a quiet night"]
  }
};

// This helper nudges focused offline sentences toward the selected topic.
function getFocusedSlotsForTopic(baseSlots, topic) {
  const topicSlots = focusedTopicSlots[topic] || {};

  return {
    ...baseSlots,
    ...topicSlots
  };
}

// These variables connect JavaScript to the HTML elements on the page.
const difficultySelect = document.getElementById("difficulty");
const installBanner = document.getElementById("install-banner");
const installBannerText = document.getElementById("install-banner-text");
const installAppBtn = document.getElementById("install-app-btn");
const dismissInstallBtn = document.getElementById("dismiss-install-btn");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const topicSelect = document.getElementById("topic");
const customGeneratorTopicInput = document.getElementById("custom-generator-topic-input");
const addCustomGeneratorTopicBtn = document.getElementById("add-custom-generator-topic-btn");
const customGeneratorTopicsList = document.getElementById("custom-generator-topics-list");
const toneSelect = document.getElementById("tone");
const grammarFocusSelect = document.getElementById("grammar-focus");
const favouritesOnlyCheckbox = document.getElementById("favourites-only");
const aiModeCheckbox = document.getElementById("ai-mode");
const sentenceDisplayModeSelect = document.getElementById("sentence-display-mode");
const aiModeNote = document.getElementById("ai-mode-note");
const generateBtn = document.getElementById("generate-btn");
const speakSpanishBtn = document.getElementById("speak-spanish-btn");
const speakEnglishBtn = document.getElementById("speak-english-btn");
const addGeneratorToPlaylistBtn = document.getElementById("add-generator-to-playlist-btn");
const toggleTranslationBtn = document.getElementById("toggle-translation-btn");
const copySentenceBtn = document.getElementById("copy-sentence-btn");
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
const practiceGeneratedCount = document.getElementById("practice-generated-count");
const practiceSpokenCount = document.getElementById("practice-spoken-count");
const practiceSavedCount = document.getElementById("practice-saved-count");
const favouritesSearchInput = document.getElementById("favourites-search");
const favouritesList = document.getElementById("favourites-list");
const emptyMessage = document.getElementById("empty-message");
const recallList = document.getElementById("recall-list");
const recallSummary = document.getElementById("recall-summary");
const recallEmptyMessage = document.getElementById("recall-empty-message");
const playlistNameInput = document.getElementById("playlist-name");
const playlistSelect = document.getElementById("playlist-select");
const radioModeSelect = document.getElementById("radio-mode");
const createPlaylistBtn = document.getElementById("create-playlist-btn");
const addCurrentToPlaylistBtn = document.getElementById("add-current-to-playlist-btn");
const playRadioBtn = document.getElementById("play-radio-btn");
const stopRadioBtn = document.getElementById("stop-radio-btn");
const deletePlaylistBtn = document.getElementById("delete-playlist-btn");
const exportPracticeBtn = document.getElementById("export-practice-btn");
const radioStatus = document.getElementById("radio-status");
const playlistSentences = document.getElementById("playlist-sentences");
const playlistEmptyMessage = document.getElementById("playlist-empty-message");
const customEnglishInput = document.getElementById("custom-english-input");
const customToneSelect = document.getElementById("custom-tone");
const customTopicSelect = document.getElementById("custom-topic");
const customDifficultySelect = document.getElementById("custom-difficulty");
const translateCustomBtn = document.getElementById("translate-custom-btn");
const saveCustomBtn = document.getElementById("save-custom-btn");
const addCustomToPlaylistBtn = document.getElementById("add-custom-to-playlist-btn");
const customResultCard = document.getElementById("custom-result-card");
const customSpanishOutput = document.getElementById("custom-spanish-output");
const customEnglishOutput = document.getElementById("custom-english-output");
const customAiNote = document.getElementById("custom-ai-note");
const customStatus = document.getElementById("custom-status");
const chatTopicSelect = document.getElementById("chat-topic");
const chatToneSelect = document.getElementById("chat-tone");
const chatScenarioSelect = document.getElementById("chat-scenario");
const chatPersonalitySelect = document.getElementById("chat-personality");
const chatGoalSelect = document.getElementById("chat-goal");
const startChatBtn = document.getElementById("start-chat-btn");
const startCallBtn = document.getElementById("start-call-btn");
const endCallBtn = document.getElementById("end-call-btn");
const interruptCallBtn = document.getElementById("interrupt-call-btn");
const speakChatReplyBtn = document.getElementById("speak-chat-reply-btn");
const useChatReplyBtn = document.getElementById("use-chat-reply-btn");
const saveChatReplyBtn = document.getElementById("save-chat-reply-btn");
const addChatReplyToPlaylistBtn = document.getElementById("add-chat-reply-to-playlist-btn");
const chatAutoSpeakCheckbox = document.getElementById("chat-auto-speak");
const chatTimer = document.getElementById("chat-timer");
const saveConversationBtn = document.getElementById("save-conversation-btn");
const downloadChatPdfBtn = document.getElementById("download-chat-pdf-btn");
const downloadChatMp3sBtn = document.getElementById("download-chat-mp3s-btn");
const playFullChatBtn = document.getElementById("play-full-chat-btn");
const stopFullChatBtn = document.getElementById("stop-full-chat-btn");
const addFullChatToPlaylistBtn = document.getElementById("add-full-chat-to-playlist-btn");
const conversationPlaybackControls = document.getElementById("conversation-playback-controls");
const previousConversationTurnBtn = document.getElementById("previous-conversation-turn-btn");
const pauseConversationBtn = document.getElementById("pause-conversation-btn");
const nextConversationTurnBtn = document.getElementById("next-conversation-turn-btn");
const conversationPlaybackProgress = document.getElementById("conversation-playback-progress");
const fullConversationAudioPlayer = document.getElementById("full-conversation-audio-player");
const playConversationPlaylistBtn = document.getElementById("play-conversation-playlist-btn");
const stopConversationPlaylistBtn = document.getElementById("stop-conversation-playlist-btn");
const conversationPlaylistList = document.getElementById("conversation-playlist-list");
const conversationPlaylistEmpty = document.getElementById("conversation-playlist-empty");
const savedConversationsList = document.getElementById("saved-conversations-list");
const savedConversationsEmpty = document.getElementById("saved-conversations-empty");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const micChatBtn = document.getElementById("mic-chat-btn");
const sendChatBtn = document.getElementById("send-chat-btn");
const clearChatBtn = document.getElementById("clear-chat-btn");
const chatStatus = document.getElementById("chat-status");
const pageTabs = document.querySelectorAll(".page-tab");
const appPages = document.querySelectorAll(".app-page");

// Keep the chat action labels aligned with the "best version" behavior.
if (useChatReplyBtn) {
  useChatReplyBtn.textContent = "Use best version as sentence";
}

if (saveChatReplyBtn) {
  saveChatReplyBtn.textContent = "Save best version";
}

if (addChatReplyToPlaylistBtn) {
  addChatReplyToPlaylistBtn.textContent = "Add best version to playlist";
}

// These variables keep track of the app's current state.
let currentSentence = null;
let translationVisible = true;
let answerMarked = false;
let lastGeneratedSpanish = "";
let recentGeneratedSentences = [];
let availableVoices = [];
let chatRecognition = null;
let callRecognition = null;
let isListeningToChat = false;
let isCallModeActive = false;
let isCallListening = false;
let isCallReplying = false;
let callReplyPlaybackId = 0;
let latestCallTranscript = "";
let callMediaRecorder = null;
let callMediaStream = null;
let callAudioChunks = [];
let callAudioContext = null;
let callAnalyser = null;
let callSilenceFrame = null;
let callHeardSpeech = false;
let callListenStartedAt = 0;
let latestMicTranscript = "";
let chatMediaRecorder = null;
let chatMediaStream = null;
let chatAudioChunks = [];
let deferredInstallPrompt = null;
let installHintShown = false;
let aiModeEnabled = JSON.parse(localStorage.getItem("spanishSentenceAiMode")) || false;
let darkModeEnabled = JSON.parse(localStorage.getItem("spanishSentenceDarkMode")) || false;
let sentenceDisplayMode = localStorage.getItem("spanishSentenceDisplayMode") || "show-translation";
let aiCooldownUntil = 0;
let activePageId = localStorage.getItem("spanishSentenceActivePage") || "generator-page";
let spanishAudioPlayer = null;
let currentSpanishAudioUrl = "";
let spanishAudioEndedCallback = null;
let wordHintRequestId = 0;
let aiWordHintCache = JSON.parse(localStorage.getItem("spanishSentenceAiWordHints")) || {};
let chatTimerInterval = null;
let fullConversationPlayback = {
  isPlaying: false,
  isPaused: false,
  index: 0,
  turns: [],
  playbackId: 0,
  audioUrl: ""
};
const SPANISH_AUDIO_CACHE_VERSION = "v2";

// We load saved data from localStorage when the page opens.
let favourites = JSON.parse(localStorage.getItem("spanishSentenceFavourites")) || [];
let recallSentences = JSON.parse(localStorage.getItem("spanishSentenceRecall")) || [];
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
let savedConversations = JSON.parse(localStorage.getItem("spanishSentenceSavedConversations")) || [];
let conversationPlaylist = JSON.parse(localStorage.getItem("spanishSentenceConversationPlaylist")) || [];
let activeConversationId = localStorage.getItem("spanishSentenceActiveConversationId") || "";
let chatStartedAt = Number(localStorage.getItem("spanishSentenceChatStartedAt")) || 0;
let chatAccumulatedSeconds = Number(localStorage.getItem("spanishSentenceChatAccumulatedSeconds")) || 0;
let customGeneratorTopics = JSON.parse(localStorage.getItem("spanishSentenceCustomGeneratorTopics")) || [];
let practiceStats = JSON.parse(localStorage.getItem("spanishSentencePracticeStats")) || null;

// This helper makes labels look nicer on screen.
function capitalize(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const builtInGeneratorTopics = [
  "daily life",
  "gym/fitness",
  "food",
  "travel",
  "work",
  "sleep"
];

const generatorTopicLabels = {
  "daily life": "Daily life",
  "gym/fitness": "Gym / fitness",
  food: "Food",
  travel: "Travel",
  work: "Work",
  sleep: "Sleep"
};

// This helper tidies user-created topic names before saving them.
function normaliseCustomTopicName(topicName) {
  return topicName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9 /-]/g, "")
    .replace(/\s+/g, " ")
    .slice(0, 34);
}

// This helper gives the offline generator a safe built-in template for custom topics.
function getTemplateTopic(topic) {
  return generatorData[difficultySelect.value]?.[topic] ? topic : "daily life";
}

// This helper saves custom generator topics.
function saveCustomGeneratorTopics() {
  localStorage.setItem("spanishSentenceCustomGeneratorTopics", JSON.stringify(customGeneratorTopics));
}

// This helper redraws the generator topic dropdown and custom topic chips.
function renderGeneratorTopics() {
  const selectedTopic = topicSelect.value || "all";
  const options = [
    { value: "all", label: "All topics" },
    ...builtInGeneratorTopics.map((topic) => ({
      value: topic,
      label: generatorTopicLabels[topic] || capitalize(topic)
    })),
    ...customGeneratorTopics.map((topic) => ({
      value: topic,
      label: `${capitalize(topic)} (custom)`
    }))
  ];

  topicSelect.innerHTML = "";
  options.forEach((optionData) => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.label;
    topicSelect.appendChild(option);
  });

  topicSelect.value = options.some((option) => option.value === selectedTopic) ? selectedTopic : "all";

  if (!customGeneratorTopicsList) {
    return;
  }

  customGeneratorTopicsList.innerHTML = "";

  customGeneratorTopics.forEach((topic) => {
    const listItem = document.createElement("li");
    const label = document.createElement("span");
    const deleteButton = document.createElement("button");

    listItem.className = "custom-topic-item";
    label.textContent = capitalize(topic);
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteCustomGeneratorTopic(topic));

    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    customGeneratorTopicsList.appendChild(listItem);
  });
}

// This function adds one user-created generator topic.
function addCustomGeneratorTopic() {
  const topic = normaliseCustomTopicName(customGeneratorTopicInput.value);

  if (!topic) {
    alert("Type a topic name first.");
    return;
  }

  if (topic === "all" || builtInGeneratorTopics.includes(topic) || customGeneratorTopics.includes(topic)) {
    alert("That topic already exists.");
    return;
  }

  customGeneratorTopics.push(topic);
  customGeneratorTopics.sort((first, second) => first.localeCompare(second));
  saveCustomGeneratorTopics();
  renderGeneratorTopics();
  topicSelect.value = topic;
  customGeneratorTopicInput.value = "";
  showStatusMessage(`Custom topic added: ${capitalize(topic)}.`);
}

// This function deletes one user-created generator topic.
function deleteCustomGeneratorTopic(topic) {
  const shouldDelete = window.confirm(`Delete the custom topic "${capitalize(topic)}"?`);

  if (!shouldDelete) {
    return;
  }

  customGeneratorTopics = customGeneratorTopics.filter((savedTopic) => savedTopic !== topic);

  if (topicSelect.value === topic) {
    topicSelect.value = "all";
  }

  saveCustomGeneratorTopics();
  renderGeneratorTopics();
  showStatusMessage(`Custom topic deleted: ${capitalize(topic)}.`);
}

// This helper picks one random item from an array.
function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// This helper waits without blocking the page.
function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

// This helper keeps cooldown messages grammatically tidy.
function formatSecondsLabel(seconds) {
  return `${seconds} ${seconds === 1 ? "second" : "seconds"}`;
}

// This helper returns today's local date as a stable storage key.
function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

// This helper keeps daily practice stats fresh.
function getCurrentPracticeStats() {
  const todayKey = getTodayKey();

  if (!practiceStats || practiceStats.date !== todayKey) {
    practiceStats = {
      date: todayKey,
      generated: 0,
      spoken: 0,
      saved: 0
    };
  }

  return practiceStats;
}

// This helper saves the daily practice stats.
function savePracticeStats() {
  localStorage.setItem("spanishSentencePracticeStats", JSON.stringify(getCurrentPracticeStats()));
}

// This helper redraws the daily practice stats strip.
function renderPracticeStats() {
  const stats = getCurrentPracticeStats();

  if (practiceGeneratedCount) {
    practiceGeneratedCount.textContent = stats.generated;
  }

  if (practiceSpokenCount) {
    practiceSpokenCount.textContent = stats.spoken;
  }

  if (practiceSavedCount) {
    practiceSavedCount.textContent = stats.saved;
  }

  savePracticeStats();
}

// This helper increments one daily practice counter.
function incrementPracticeStat(statName) {
  const stats = getCurrentPracticeStats();

  if (stats[statName] === undefined) {
    return;
  }

  stats[statName] += 1;
  savePracticeStats();
  renderPracticeStats();
}

// This helper formats dates for recall scheduling.
function formatReviewDate(dateText) {
  if (!dateText) {
    return "today";
  }

  return new Date(dateText).toLocaleDateString([], {
    month: "short",
    day: "numeric"
  });
}

// This helper returns the visible label for the selected grammar focus.
function getGrammarFocusLabel(focus = grammarFocusSelect.value) {
  const labels = {
    mixed: "Mixed practice",
    past: "Past tense",
    future: "Future plans",
    questions: "Questions",
    opinions: "Opinions",
    subjunctive: "Subjunctive",
    idioms: "Natural idioms"
  };

  return labels[focus] || "Mixed practice";
}

// This helper returns the visible label for the selected chat scenario.
function getChatScenarioLabel(scenario = chatScenarioSelect.value) {
  const labels = {
    casual: "Casual conversation",
    "catch-up": "Catching up with a friend",
    roleplay: "Real-life roleplay",
    opinions: "Opinions and preferences",
    story: "Tell me about your day",
    "quick-fire": "Quick questions"
  };

  return labels[scenario] || "Casual conversation";
}

// This helper gives the AI a clear social setup for the chat.
function getChatScenarioInstruction(scenario = chatScenarioSelect.value) {
  const instructions = {
    casual: "Have a relaxed everyday chat, like two people talking naturally over coffee.",
    "catch-up": "Act like a friendly Spanish person catching up with the learner after not seeing them for a bit.",
    roleplay: "Start a realistic situation-based roleplay connected to the selected topic. Do not explain the roleplay; just speak as the person in the situation.",
    opinions: "Ask natural opinion questions and react like a real person, without sounding like a classroom debate.",
    story: "Invite the learner to tell you about their day, then follow up with natural curiosity.",
    "quick-fire": "Ask short, natural questions one at a time, like a lively quick chat."
  };

  return instructions[scenario] || instructions.casual;
}

// This helper returns the visible label for the selected AI personality.
function getChatPersonalityLabel(personality = chatPersonalitySelect.value) {
  const labels = {
    "friendly-local": "Friendly local",
    "patient-tutor": "Patient tutor",
    "funny-mate": "Funny mate",
    "direct-corrector": "Direct corrector",
    "curious-friend": "Curious friend",
    "roleplay-partner": "Roleplay partner"
  };

  return labels[personality] || "Friendly local";
}

// This helper tells the AI what kind of person it should sound like.
function getChatPersonalityInstruction(personality = chatPersonalitySelect.value) {
  const instructions = {
    "friendly-local": "Sound like a warm, relaxed person from Spain who chats naturally and gently helps.",
    "patient-tutor": "Sound calm and encouraging, but keep the main reply conversational rather than teacher-like.",
    "funny-mate": "Sound like a friendly Spanish mate with light humour. Keep jokes natural and not forced.",
    "direct-corrector": "Be concise and more correction-focused, but still reply like a real person.",
    "curious-friend": "Show genuine curiosity and ask thoughtful follow-ups based on what the learner says.",
    "roleplay-partner": "Stay fully in the scene and respond as the other person in the situation."
  };

  return instructions[personality] || instructions["friendly-local"];
}

// This helper returns the visible label for the selected chat practice goal.
function getChatGoalLabel(goal = chatGoalSelect.value) {
  const labels = {
    "natural-flow": "Natural flow",
    "past-tense": "Past tense",
    "future-plans": "Future plans",
    questions: "Asking questions",
    opinions: "Giving opinions",
    ordering: "Ordering food/drinks",
    "small-talk": "Small talk",
    slang: "Natural slang"
  };

  return labels[goal] || "Natural flow";
}

// This helper tells the AI what learning goal to gently steer toward.
function getChatGoalInstruction(goal = chatGoalSelect.value) {
  const instructions = {
    "natural-flow": "Prioritise natural conversation flow. Correct gently only when useful.",
    "past-tense": "Steer the chat toward things that happened today, yesterday, or recently, so the learner practises past tense.",
    "future-plans": "Steer the chat toward plans, intentions, and upcoming events, so the learner practises future expressions.",
    questions: "Encourage the learner to ask you questions too. Model natural question forms when useful.",
    opinions: "Steer the chat toward preferences, opinions, and reasons using phrases like creo que, me parece, and prefiero.",
    ordering: "Steer the chat toward ordering food or drinks in a realistic Spain setting.",
    "small-talk": "Practise casual small talk: weather, plans, weekend, work, and everyday updates.",
    slang: "Use occasional Spain-Spanish colloquial phrases, but keep them learner-friendly and explain only briefly if needed."
  };

  return instructions[goal] || instructions["natural-flow"];
}

// This helper creates skill tags that explain why a sentence is useful practice.
function inferGrammarTags(sentence) {
  const tags = new Set(sentence.grammarTags || []);
  const focus = sentence.focus || "mixed";
  const spanish = (sentence.spanish || "").toLowerCase();

  if (focus !== "mixed") {
    tags.add(getGrammarFocusLabel(focus));
  }

  if ((spanish.includes("?") || spanish.includes("¿")) && focus !== "questions") {
    tags.add("Question");
  }

  if (/\b(ayer|he |has |ha |hemos |han |fui|hice|tuve|estuve|terminé|preparé|probé)\b/.test(spanish)) {
    tags.add("Past tense");
  }

  if (/\b(voy a|vas a|va a|vamos a|quiero|quiere|mañana|este fin de semana)\b/.test(spanish)) {
    tags.add("Future plans");
  }

  if (/\b(creo que|me parece que|pienso que|prefiero|para mí)\b/.test(spanish)) {
    tags.add("Opinion");
  }

  if (/\b(espero que|es importante que|para que|aunque)\b/.test(spanish)) {
    tags.add("Subjunctive");
  }

  if (/\b(con calma|sin prisas|desconectar|voy con la lengua fuera|tomarme las cosas)\b/.test(spanish)) {
    tags.add("Natural phrase");
  }

  if (sentence.difficulty === "advanced" && tags.size === 0) {
    tags.add("Longer structure");
  }

  return [...tags].slice(0, 3);
}

// This helper formats the visible grammar tags in sentence metadata.
function formatGrammarTags(sentence) {
  const tags = inferGrammarTags(sentence);
  return tags.length ? tags.join(", ") : getGrammarFocusLabel(sentence.focus || "mixed");
}

// This helper creates a simple local id for saved conversations.
function createConversationId() {
  return `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// This helper formats a chat timer as mm:ss or hh:mm:ss.
function formatChatDuration(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${paddedMinutes}:${paddedSeconds}`;
  }

  return `${paddedMinutes}:${paddedSeconds}`;
}

// This helper returns the live duration for the active conversation.
function getCurrentChatDurationSeconds() {
  const liveSeconds = chatStartedAt ? Math.floor((Date.now() - chatStartedAt) / 1000) : 0;
  return chatAccumulatedSeconds + liveSeconds;
}

// This helper keeps the current chat metadata in localStorage.
function saveCurrentChatMeta() {
  localStorage.setItem("spanishSentenceActiveConversationId", activeConversationId);
  localStorage.setItem("spanishSentenceChatStartedAt", String(chatStartedAt));
  localStorage.setItem("spanishSentenceChatAccumulatedSeconds", String(chatAccumulatedSeconds));
}

// This helper saves the current chat log and timer together.
function saveCurrentChatState() {
  localStorage.setItem("spanishSentenceChatHistory", JSON.stringify(chatHistory));
  saveCurrentChatMeta();
}

// This helper updates the visible chat timer.
function updateChatTimerDisplay() {
  if (!chatTimer) {
    return;
  }

  chatTimer.textContent = `Chat timer: ${formatChatDuration(getCurrentChatDurationSeconds())}`;
}

// This helper starts or restarts the current conversation timer.
function startChatTimer(resetTimer = false) {
  if (resetTimer) {
    chatAccumulatedSeconds = 0;
    chatStartedAt = Date.now();
  } else if (!chatStartedAt) {
    chatStartedAt = Date.now();
  }

  if (!chatTimerInterval) {
    chatTimerInterval = setInterval(updateChatTimerDisplay, 1000);
  }

  saveCurrentChatMeta();
  updateChatTimerDisplay();
}

// This helper pauses the timer while keeping the elapsed duration.
function pauseChatTimer() {
  chatAccumulatedSeconds = getCurrentChatDurationSeconds();
  chatStartedAt = 0;

  if (chatTimerInterval) {
    clearInterval(chatTimerInterval);
    chatTimerInterval = null;
  }

  saveCurrentChatMeta();
  updateChatTimerDisplay();
}

// This helper finds the last coach reply from a conversation.
function getLastCoachReplyFromHistory(history) {
  return [...history].reverse().find((message) => message.role === "coach") || null;
}

// This helper builds a readable name for a saved conversation.
function getConversationTitle(conversation) {
  if (conversation.title) {
    return conversation.title;
  }

  const dateText = new Date(conversation.savedAt || Date.now()).toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  return `${capitalize(conversation.topic || "chat")} chat - ${dateText}`;
}

// This helper escapes text before writing a printable conversation document.
function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// This helper makes a safe filename from conversation text.
function slugifyFilename(text) {
  return String(text || "conversation")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "conversation";
}

// This helper returns the corrected version of the conversation.
function getCorrectedConversationTurns() {
  return chatHistory
    .map((message) => {
      const isUser = message.role === "user";
      const spanish = isUser
        ? message.correctionSpanish || message.spanish || message.text || ""
        : message.spanish || message.text || "";
      const english = isUser
        ? message.correctionEnglish || message.english || ""
        : message.english || "";

      return {
        role: isUser ? "You" : "AI",
        spanish,
        english,
        originalSpanish: isUser ? message.spanish || message.text || "" : "",
        usedAlternative: Boolean(isUser && message.correctionSpanish)
      };
    })
    .filter((turn) => turn.spanish);
}

// This helper saves full-conversation playlist data.
function saveConversationPlaylist() {
  localStorage.setItem("spanishSentenceConversationPlaylist", JSON.stringify(conversationPlaylist));
}

// This helper creates one full conversation playlist item from the current chat.
function buildConversationPlaylistItem() {
  const turns = getCorrectedConversationTurns();

  if (!turns.length) {
    return null;
  }

  const savedAt = new Date().toISOString();

  return {
    id: createConversationId(),
    title: `${capitalize(chatTopicSelect.value)} conversation - ${new Date(savedAt).toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })}`,
    topic: chatTopicSelect.value,
    tone: chatToneSelect.value,
    scenario: chatScenarioSelect.value,
    personality: chatPersonalitySelect.value,
    goal: chatGoalSelect.value,
    durationSeconds: getCurrentChatDurationSeconds(),
    savedAt,
    turns
  };
}

// This function redraws the full-conversation playlist.
function renderConversationPlaylist() {
  if (!conversationPlaylistList || !conversationPlaylistEmpty) {
    return;
  }

  conversationPlaylistList.innerHTML = "";
  conversationPlaylistEmpty.style.display = conversationPlaylist.length ? "none" : "block";

  conversationPlaylist.forEach((conversation) => {
    const listItem = document.createElement("li");
    const textWrapper = document.createElement("div");
    const title = document.createElement("h4");
    const meta = document.createElement("p");
    const actionRow = document.createElement("div");
    const playButton = document.createElement("button");
    const removeButton = document.createElement("button");

    listItem.className = "favourite-item saved-conversation-item";
    actionRow.className = "actions";
    title.textContent = conversation.title;
    meta.textContent = `${conversation.turns.length} turns | ${formatChatDuration(conversation.durationSeconds)} | ${capitalize(conversation.tone || "informal")}`;
    playButton.className = "secondary-btn";
    playButton.type = "button";
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => playConversationPlaylistItem(conversation.id));
    removeButton.className = "delete-btn";
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeConversationPlaylistItem(conversation.id));

    actionRow.appendChild(playButton);
    actionRow.appendChild(removeButton);
    textWrapper.appendChild(title);
    textWrapper.appendChild(meta);
    textWrapper.appendChild(actionRow);
    listItem.appendChild(textWrapper);
    conversationPlaylistList.appendChild(listItem);
  });
}

// This function redraws the saved conversation list.
function renderSavedConversations() {
  if (!savedConversationsList || !savedConversationsEmpty) {
    return;
  }

  savedConversationsList.innerHTML = "";
  savedConversationsEmpty.style.display = savedConversations.length ? "none" : "block";

  savedConversations
    .slice()
    .sort((first, second) => new Date(second.savedAt) - new Date(first.savedAt))
    .forEach((conversation) => {
      const listItem = document.createElement("li");
      const textWrapper = document.createElement("div");
      const title = document.createElement("h4");
      const meta = document.createElement("p");
      const loadButton = document.createElement("button");

      listItem.className = "favourite-item saved-conversation-item";
      title.textContent = getConversationTitle(conversation);
      meta.textContent = `${conversation.messages.length} messages | ${formatChatDuration(conversation.durationSeconds)} | ${capitalize(conversation.tone || "informal")}`;
      loadButton.className = "secondary-btn";
      loadButton.type = "button";
      loadButton.textContent = "Load";
      loadButton.addEventListener("click", () => loadSavedConversation(conversation.id));

      textWrapper.appendChild(title);
      textWrapper.appendChild(meta);
      listItem.appendChild(textWrapper);
      listItem.appendChild(loadButton);
      savedConversationsList.appendChild(listItem);
    });
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

// This helper applies and saves the app colour theme.
function applyThemePreference() {
  document.body.classList.toggle("dark-mode", darkModeEnabled);
  localStorage.setItem("spanishSentenceDarkMode", JSON.stringify(darkModeEnabled));

  if (themeToggleBtn) {
    themeToggleBtn.textContent = darkModeEnabled ? "Light mode" : "Dark mode";
    themeToggleBtn.setAttribute("aria-pressed", String(darkModeEnabled));
  }
}

// This function switches between light and dark mode.
function toggleThemeMode() {
  darkModeEnabled = !darkModeEnabled;
  applyThemePreference();
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

// This helper checks if the browser can record microphone audio for server-side transcription.
function canRecordChatAudio() {
  return Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
}

// This helper turns a browser audio blob into base64 text so we can send it to the local backend.
function convertBlobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const resultText = typeof reader.result === "string" ? reader.result : "";
      const base64Part = resultText.includes(",") ? resultText.split(",")[1] : "";
      resolve(base64Part);
    };

    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

// This helper asks the server to transcribe recorded chat audio with ElevenLabs.
async function transcribeRecordedChatAudio(audioBlob) {
  const audioBase64 = await convertBlobToBase64(audioBlob);
  const fileExtension = audioBlob.type.includes("ogg")
    ? "ogg"
    : audioBlob.type.includes("mp4")
      ? "mp4"
      : "webm";
  const response = await fetch("/api/transcribe-chat-audio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      audioBase64,
      mimeType: audioBlob.type || "audio/webm",
      fileName: `chat-mic-audio.${fileExtension}`
    })
  });

  const responseData = await response.json().catch(() => ({}));

  if (!response.ok) {
    const messageText = [responseData.error, responseData.details].filter(Boolean).join(" ");
    throw new Error(messageText || "The microphone transcription service returned an unexpected error.");
  }

  return (responseData.text || "").trim();
}

// This helper chooses a browser recording format that usually works well for microphone uploads.
function getPreferredChatAudioMimeType() {
  if (!window.MediaRecorder || typeof MediaRecorder.isTypeSupported !== "function") {
    return "";
  }

  const preferredMimeTypes = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/ogg;codecs=opus",
    "audio/mp4"
  ];

  return preferredMimeTypes.find((mimeType) => MediaRecorder.isTypeSupported(mimeType)) || "";
}

// This helper stops any active recorded-audio microphone stream.
function stopChatAudioStream() {
  if (chatMediaStream) {
    chatMediaStream.getTracks().forEach((track) => track.stop());
    chatMediaStream = null;
  }
}

// This helper cleans up call-mode recording resources between turns.
function stopCallAudioResources() {
  if (callSilenceFrame) {
    cancelAnimationFrame(callSilenceFrame);
    callSilenceFrame = null;
  }

  if (callMediaStream) {
    callMediaStream.getTracks().forEach((track) => track.stop());
    callMediaStream = null;
  }

  if (callAudioContext) {
    callAudioContext.close().catch(() => {
      // Ignore audio-context cleanup errors.
    });
    callAudioContext = null;
  }

  callAnalyser = null;
}

// This helper starts browser audio recording for the higher-quality chat microphone flow.
async function startRecordedChatMic() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true
    }
  });
  const preferredMimeType = getPreferredChatAudioMimeType();

  chatMediaStream = stream;
  chatAudioChunks = [];
  chatMediaRecorder = preferredMimeType
    ? new MediaRecorder(stream, { mimeType: preferredMimeType })
    : new MediaRecorder(stream);

  chatMediaRecorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) {
      chatAudioChunks.push(event.data);
    }
  };

  chatMediaRecorder.onerror = () => {
    isListeningToChat = false;
    chatMediaRecorder = null;
    chatAudioChunks = [];
    stopChatAudioStream();
    micChatBtn.textContent = "Speak with mic";
    micChatBtn.classList.remove("listening-btn");
    chatStatus.textContent = "Microphone recording failed. You can still type your message.";
  };

  chatMediaRecorder.onstop = async () => {
    const finalMimeType = chatMediaRecorder && chatMediaRecorder.mimeType
      ? chatMediaRecorder.mimeType
      : preferredMimeType || "audio/webm";
    const recordedAudioBlob = new Blob(chatAudioChunks, { type: finalMimeType });

    chatMediaRecorder = null;
    chatAudioChunks = [];
    stopChatAudioStream();
    micChatBtn.textContent = "Speak with mic";
    micChatBtn.classList.remove("listening-btn");
    isListeningToChat = false;

    if (!recordedAudioBlob.size) {
      chatStatus.textContent = "No microphone audio was captured. Please try again.";
      return;
    }

    try {
      chatStatus.textContent = "Transcribing your speech...";
      const transcript = await transcribeRecordedChatAudio(recordedAudioBlob);

      if (!transcript) {
        chatStatus.textContent = "The microphone audio was heard, but no words were returned.";
        return;
      }

      latestMicTranscript = transcript;
      chatInput.value = transcript;
      chatStatus.textContent = `Heard: ${transcript}`;
      sendChatMessage();
    } catch (error) {
      chatStatus.textContent = `Higher-quality mic failed. ${error.message} Falling back to browser mic.`;

      if (chatRecognition) {
        setTimeout(() => {
          toggleBrowserChatMic();
        }, 150);
      }
    }
  };

  isListeningToChat = true;
  latestMicTranscript = "";
  chatInput.value = "";
  micChatBtn.textContent = "Stop mic";
  micChatBtn.classList.add("listening-btn");
  chatStatus.textContent = "Listening with higher-quality mic capture... tap again when you finish speaking.";
  chatMediaRecorder.start();
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

// This function prepares the hands-free phone-call style chat mode.
function setupCallRecognition() {
  const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognitionClass) {
    return;
  }

  callRecognition = new SpeechRecognitionClass();
  callRecognition.lang = "en-GB";
  callRecognition.continuous = false;
  callRecognition.interimResults = true;
  callRecognition.maxAlternatives = 1;

  callRecognition.onstart = () => {
    isCallListening = true;
    latestCallTranscript = "";
    chatInput.value = "";
    chatStatus.textContent = "Call mode is listening. Speak naturally, then pause.";
  };

  callRecognition.onresult = (event) => {
    let transcript = "";

    for (let index = 0; index < event.results.length; index += 1) {
      transcript += event.results[index][0].transcript;
    }

    latestCallTranscript = transcript.trim();
    chatInput.value = latestCallTranscript;
    chatStatus.textContent = latestCallTranscript
      ? `Call heard: ${latestCallTranscript}`
      : "Call mode is listening. Speak naturally, then pause.";
  };

  callRecognition.onerror = (event) => {
    isCallListening = false;

    if (!isCallModeActive) {
      return;
    }

    if (event.error === "no-speech") {
      restartCallListening(500);
      return;
    }

    stopCallMode(getMicErrorMessage(event.error));
  };

  callRecognition.onend = () => {
    const spokenMessage = latestCallTranscript.trim();
    isCallListening = false;

    if (!isCallModeActive || isCallReplying) {
      return;
    }

    if (spokenMessage) {
      sendChatMessage({ fromCall: true, userMessage: spokenMessage });
      return;
    }

    restartCallListening(250);
  };
}

// This helper reads microphone volume so call mode can stop after a natural pause.
function getCallAudioLevel() {
  if (!callAnalyser) {
    return 0;
  }

  const samples = new Uint8Array(callAnalyser.fftSize);
  callAnalyser.getByteTimeDomainData(samples);

  let sum = 0;

  samples.forEach((sample) => {
    const centeredSample = (sample - 128) / 128;
    sum += centeredSample * centeredSample;
  });

  return Math.sqrt(sum / samples.length);
}

// This helper records one call-mode turn, then sends it to the high-quality STT backend.
async function startRecordedCallListening() {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true
    }
  });
  const preferredMimeType = getPreferredChatAudioMimeType();
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  const silenceStartedAt = { value: 0 };
  const maxTurnLengthMs = 20000;
  const noSpeechTimeoutMs = 9000;
  const silenceAfterSpeechMs = 1250;
  const speechThreshold = 0.028;

  callMediaStream = stream;
  callAudioChunks = [];
  callHeardSpeech = false;
  callListenStartedAt = Date.now();
  callMediaRecorder = preferredMimeType
    ? new MediaRecorder(stream, { mimeType: preferredMimeType })
    : new MediaRecorder(stream);

  if (AudioContextClass) {
    callAudioContext = new AudioContextClass();
    callAnalyser = callAudioContext.createAnalyser();
    callAnalyser.fftSize = 2048;
    callAudioContext.createMediaStreamSource(stream).connect(callAnalyser);
  }

  callMediaRecorder.ondataavailable = (event) => {
    if (event.data && event.data.size > 0) {
      callAudioChunks.push(event.data);
    }
  };

  callMediaRecorder.onerror = () => {
    callMediaRecorder = null;
    callAudioChunks = [];
    isCallListening = false;
    stopCallAudioResources();

    if (isCallModeActive) {
      chatStatus.textContent = "Call microphone recording failed. Trying browser speech recognition instead.";
      restartCallListening(400, true);
    }
  };

  callMediaRecorder.onstop = async () => {
    const finalMimeType = callMediaRecorder && callMediaRecorder.mimeType
      ? callMediaRecorder.mimeType
      : preferredMimeType || "audio/webm";
    const recordedAudioBlob = new Blob(callAudioChunks, { type: finalMimeType });

    callMediaRecorder = null;
    callAudioChunks = [];
    isCallListening = false;
    stopCallAudioResources();

    if (!isCallModeActive) {
      return;
    }

    if (!recordedAudioBlob.size || !callHeardSpeech) {
      chatStatus.textContent = "Call mode is listening. Speak when you are ready.";
      restartCallListening(350);
      return;
    }

    try {
      isCallReplying = true;
      chatStatus.textContent = "Transcribing your call audio...";
      const transcript = await transcribeRecordedChatAudio(recordedAudioBlob);

      isCallReplying = false;

      if (!transcript) {
        chatStatus.textContent = "The call audio was heard, but no words were returned.";
        restartCallListening(500);
        return;
      }

      latestCallTranscript = transcript;
      chatInput.value = transcript;
      chatStatus.textContent = `Call heard: ${transcript}`;
      sendChatMessage({ fromCall: true, userMessage: transcript });
    } catch (error) {
      isCallReplying = false;
      chatStatus.textContent = `High-quality call transcription failed. ${error.message}`;
      restartCallListening(900, true);
    }
  };

  const stopRecorderIfActive = () => {
    if (callMediaRecorder && callMediaRecorder.state === "recording") {
      callMediaRecorder.stop();
    }
  };

  const monitorSilence = () => {
    if (!isCallModeActive || !callMediaRecorder || callMediaRecorder.state !== "recording") {
      return;
    }

    const elapsedMs = Date.now() - callListenStartedAt;
    const level = getCallAudioLevel();

    if (level > speechThreshold) {
      callHeardSpeech = true;
      silenceStartedAt.value = 0;
      chatStatus.textContent = "Call mode is hearing you...";
    } else if (callHeardSpeech) {
      if (!silenceStartedAt.value) {
        silenceStartedAt.value = Date.now();
      }

      if (Date.now() - silenceStartedAt.value > silenceAfterSpeechMs) {
        chatStatus.textContent = "Processing your call turn...";
        stopRecorderIfActive();
        return;
      }
    }

    if ((!callHeardSpeech && elapsedMs > noSpeechTimeoutMs) || elapsedMs > maxTurnLengthMs) {
      stopRecorderIfActive();
      return;
    }

    callSilenceFrame = requestAnimationFrame(monitorSilence);
  };

  isCallListening = true;
  latestCallTranscript = "";
  chatInput.value = "";
  chatStatus.textContent = "Call mode is listening. Speak naturally, then pause.";
  callMediaRecorder.start();
  monitorSilence();
}

// This helper restarts listening after the coach has finished speaking.
function restartCallListening(delay = 300, preferBrowserFallback = false) {
  if (!isCallModeActive || isCallReplying) {
    return;
  }

  setTimeout(async () => {
    if (!isCallModeActive || isCallReplying || isCallListening) {
      return;
    }

    if (canRecordChatAudio() && !preferBrowserFallback) {
      try {
        await startRecordedCallListening();
        return;
      } catch (error) {
        chatStatus.textContent = "High-quality call mic setup failed. Trying browser speech recognition instead.";
      }
    }

    if (!callRecognition) {
      stopCallMode(getMicErrorMessage("unsupported-browser"));
      return;
    }

    try {
      callRecognition.start();
    } catch (error) {
      restartCallListening(700, true);
    }
  }, delay);
}

// This function starts a hands-free voice chat loop.
async function startCallMode() {
  if (!canRecordChatAudio() && !callRecognition) {
    const helpMessage = isStandaloneApp()
      ? "This installed app does not support call mode on this device. Open the website in Chrome and try again."
      : getMicErrorMessage("unsupported-browser");
    alert(helpMessage);
    chatStatus.textContent = helpMessage;
    return;
  }

  try {
    await prepareMicrophoneAccess();
  } catch (error) {
    chatStatus.textContent = getMicErrorMessage("not-allowed");
    return;
  }

  if (isListeningToChat && chatRecognition) {
    isListeningToChat = false;
    chatRecognition.stop();
  }

  if (chatMediaRecorder && isListeningToChat) {
    chatMediaRecorder.stop();
  }

  if (chatHistory.length === 0) {
    startChat();
  }

  isCallModeActive = true;
  isCallReplying = false;
  callReplyPlaybackId += 1;
  startCallBtn.classList.add("hidden");
  endCallBtn.classList.remove("hidden");
  interruptCallBtn.classList.add("hidden");
  chatAutoSpeakCheckbox.checked = true;
  chatStatus.textContent = "Call mode started. Speak naturally after the coach finishes.";
  restartCallListening(200);
}

// This function stops the hands-free voice chat loop.
function stopCallMode(message = "Call mode ended.") {
  isCallModeActive = false;
  isCallReplying = false;
  callReplyPlaybackId += 1;
  latestCallTranscript = "";

  if (callRecognition && isCallListening) {
    try {
      callRecognition.stop();
    } catch (error) {
      // Ignore stop errors when the recogniser has already ended.
    }
  }

  if (callMediaRecorder && callMediaRecorder.state === "recording") {
    try {
      callMediaRecorder.stop();
    } catch (error) {
      // Ignore stop errors when recording has already ended.
    }
  }

  stopCallAudioResources();
  isCallListening = false;
  if (spanishAudioPlayer) {
    spanishAudioPlayer.pause();
    spanishAudioPlayer.currentTime = 0;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  startCallBtn.classList.remove("hidden");
  endCallBtn.classList.add("hidden");
  interruptCallBtn.classList.add("hidden");
  chatInput.value = "";
  chatStatus.textContent = message;
}

// This function lets call mode stop the current AI reply and listen again.
function interruptCallReply() {
  if (!isCallModeActive || !isCallReplying) {
    return;
  }

  callReplyPlaybackId += 1;
  isCallReplying = false;
  spanishAudioEndedCallback = null;

  if (spanishAudioPlayer) {
    spanishAudioPlayer.pause();
    spanishAudioPlayer.currentTime = 0;
  }

  clearCurrentSpanishAudioUrl();

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  interruptCallBtn.classList.add("hidden");
  chatStatus.textContent = "Interrupted. Listening again...";
  restartCallListening(150);
}

// This helper keeps the old browser speech recognition flow as a fallback.
async function toggleBrowserChatMic() {
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

// This function starts or stops microphone chat input.
async function toggleChatMic() {
  if (chatMediaRecorder && isListeningToChat) {
    chatStatus.textContent = "Finishing recording...";
    chatMediaRecorder.stop();
    return;
  }

  if (canRecordChatAudio()) {
    try {
      await startRecordedChatMic();
      return;
    } catch (error) {
      if (chatRecognition) {
        chatStatus.textContent = "Higher-quality mic setup failed. Trying browser microphone instead.";
        setTimeout(() => {
          toggleBrowserChatMic();
        }, 100);
        return;
      }

      chatStatus.textContent = getMicErrorMessage("audio-capture");
      return;
    }
  }

  await toggleBrowserChatMic();
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

  return wordTranslations[cleanWord] || "Hint coming soon";
}

// This helper finds the words that still need better hover hints.
function getMissingWordHints() {
  const missingWords = new Map();

  document.querySelectorAll(".spanish-word").forEach((wordSpan) => {
    const hint = wordSpan.getAttribute("data-translation") || "";
    const cleanWord = normaliseWord(wordSpan.textContent || "");

    if (!cleanWord) {
      return;
    }

    if (hint === "Hint coming soon" || hint === "English hint not added yet") {
      missingWords.set(cleanWord, wordSpan.textContent.trim().replace(/[.,!?¿¡;:]+$/g, ""));
    }
  });

  return [...missingWords.entries()].map(([key, display]) => ({ key, display }));
}

// This helper applies a sentence-specific set of hover hints to the visible words.
function applyWordHints(hints) {
  if (!hints || typeof hints !== "object") {
    return;
  }

  Object.entries(hints).forEach(([word, hint]) => {
    const cleanWord = normaliseWord(word);

    if (cleanWord && hint) {
      wordTranslations[cleanWord] = String(hint).trim();
    }
  });

  document.querySelectorAll(".spanish-word").forEach((wordSpan) => {
    const cleanWord = normaliseWord(wordSpan.textContent || "");
    const hint = wordTranslations[cleanWord];

    if (hint) {
      wordSpan.setAttribute("data-translation", hint);
    }
  });
}

// This helper caches AI word hints so repeat sentences do not spend another request.
function saveAiWordHintCache() {
  const cacheEntries = Object.entries(aiWordHintCache).slice(-60);
  aiWordHintCache = Object.fromEntries(cacheEntries);
  localStorage.setItem("spanishSentenceAiWordHints", JSON.stringify(aiWordHintCache));
}

// This helper creates a stable key for one sentence's contextual AI hints.
function getWordHintCacheKey(sentence) {
  return normaliseSentenceForSimilarity(sentence.spanish || "");
}

// This helper asks AI for contextual word hints only when the local dictionary misses words.
async function improveMissingWordHintsWithAi(sentence, requestId) {
  if (!sentence || !aiModeEnabled) {
    return;
  }

  const missingWords = getMissingWordHints();

  if (!missingWords.length) {
    return;
  }

  const cacheKey = getWordHintCacheKey(sentence);

  if (aiWordHintCache[cacheKey]) {
    applyWordHints(aiWordHintCache[cacheKey]);
    return;
  }

  try {
    const responseData = await callAiLanguageCoach({
      mode: "word-hints",
      spanish: sentence.spanish,
      english: sentence.english,
      words: missingWords.map((item) => item.display)
    });

    if (requestId !== wordHintRequestId || currentSentence?.spanish !== sentence.spanish) {
      return;
    }

    const hints = responseData.hints || {};
    aiWordHintCache[cacheKey] = hints;
    saveAiWordHintCache();
    applyWordHints(hints);
  } catch (error) {
    // Keep the local hints if AI is unavailable; sentence generation should not be interrupted.
  }
}

// This helper loads one sentence into the main sentence viewer.
function setCurrentSentence(sentence, sourceLabel) {
  currentSentence = sentence;
  lastGeneratedSpanish = currentSentence.spanish;

  renderSpanishSentence(currentSentence.spanish);
  wordHintRequestId += 1;
  improveMissingWordHintsWithAi(currentSentence, wordHintRequestId);
  currentSentence.grammarTags = inferGrammarTags(currentSentence);
  sentenceMeta.textContent = `${capitalize(currentSentence.difficulty)} | ${capitalize(currentSentence.topic)} | ${capitalize(currentSentence.tone)} | ${formatGrammarTags(currentSentence)} | Hover words for English hints | ${sourceLabel}`;
  applySentenceDisplayPreference();
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

// This helper builds an offline custom translation.
function buildOfflineCustomSentence() {
  const englishInput = customEnglishInput.value.trim();

  if (!englishInput) {
    alert("Write an English sentence first.");
    return null;
  }

  const tone = customToneSelect.value;
  const topic = customTopicSelect.value;
  const difficulty = customDifficultySelect.value;
  const normalised = normaliseEnglishText(englishInput).replace(/\.$/, "");
  const parts = normalised.split(" ").filter(Boolean);

  if (parts.length < 2) {
    customStatus.textContent = "Try a short sentence like 'I drink coffee in the morning.'";
    return null;
  }

  const subjectKey = parts[0];
  const verbKey = parts[1];
  const subject = customSubjectMap[subjectKey];
  const verb = customVerbMap[verbKey];

  if (!subject || !verb) {
    customStatus.textContent = "That sentence is a bit too complex for the offline translator. Try a short everyday sentence such as 'I work at the office' or 'You drink water at night'.";
    return null;
  }

  const spanishSubject = subject[tone];
  const spanishVerb = verb[tone][subjectKey];
  const translatedRemainder = translateEnglishRemainder(parts.slice(2).join(" "));
  const rawSpanish = [spanishSubject, spanishVerb, translatedRemainder].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  const capitalisedSpanish = rawSpanish.charAt(0).toUpperCase() + rawSpanish.slice(1);
  const finalSpanish = capitalisedSpanish.endsWith(".") ? capitalisedSpanish : `${capitalisedSpanish}.`;

  return {
    difficulty,
    topic,
    tone,
    focus: "mixed",
    grammarTags: inferGrammarTags({
      difficulty,
      focus: "mixed",
      spanish: finalSpanish
    }),
    spanish: finalSpanish,
    english: englishInput,
    generated: false,
    custom: true
  };
}

// This helper asks AI to translate and improve a custom sentence.
async function buildAiCustomSentence() {
  const englishInput = customEnglishInput.value.trim();

  if (!englishInput) {
    alert("Write an English sentence first.");
    return null;
  }

  const responseData = await callAiLanguageCoach({
    mode: "custom",
    english: englishInput,
    difficulty: customDifficultySelect.value,
    topic: customTopicSelect.value,
    tone: customToneSelect.value
  });

  if (!responseData || !responseData.sentence || !responseData.sentence.spanish || !responseData.sentence.english) {
    throw new Error("The AI custom translator did not return a valid sentence.");
  }

  return {
    difficulty: responseData.sentence.difficulty || customDifficultySelect.value,
    topic: responseData.sentence.topic || customTopicSelect.value,
    tone: responseData.sentence.tone || customToneSelect.value,
    focus: responseData.sentence.focus || "mixed",
    grammarTags: Array.isArray(responseData.sentence.grammarTags) ? responseData.sentence.grammarTags : [],
    spanish: responseData.sentence.spanish.trim(),
    english: responseData.sentence.english.trim(),
    generated: false,
    custom: true,
    ai: true,
    feedback: responseData.sentence.feedback || ""
  };
}

// This function translates a sentence in the custom area.
async function translateCustomSentence() {
  let translatedSentence = null;

  if (customAiNote) {
    customAiNote.classList.add("hidden");
    customAiNote.textContent = "AI helped make this sound more natural in Spain Spanish.";
  }

  if (aiModeEnabled) {
    const remainingCooldown = Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown > 0) {
      customStatus.textContent = `AI cooldown is active. Please wait ${formatSecondsLabel(remainingCooldown)}. The offline translator was used for now.`;
      translatedSentence = buildOfflineCustomSentence();
    } else {
      translateCustomBtn.disabled = true;
      translateCustomBtn.textContent = "Translating...";
      customStatus.textContent = "Asking AI to translate this into more natural Spain Spanish...";
      aiCooldownUntil = Date.now() + 10000;

      try {
        translatedSentence = await buildAiCustomSentence();
        if (customAiNote) {
          customAiNote.textContent = translatedSentence.feedback || "AI helped make this sound more natural in Spain Spanish.";
          customAiNote.classList.remove("hidden");
        }
      } catch (error) {
        customStatus.textContent = `${formatAiErrorMessage(error.message)} The offline translator was used instead.`;
        translatedSentence = buildOfflineCustomSentence();
      } finally {
        translateCustomBtn.disabled = false;
        translateCustomBtn.textContent = "Translate to Spanish";
      }
    }
  } else {
    translatedSentence = buildOfflineCustomSentence();
  }

  if (!translatedSentence) {
    return;
  }

  latestCustomSentence = translatedSentence;

  if (customResultCard && customSpanishOutput && customEnglishOutput) {
    customResultCard.classList.remove("hidden");
    customSpanishOutput.textContent = latestCustomSentence.spanish;
    customEnglishOutput.textContent = latestCustomSentence.english;
  }

  setCurrentSentence(latestCustomSentence, "Custom translation");

  if (!(aiModeEnabled && latestCustomSentence.ai !== true)) {
    customStatus.textContent = latestCustomSentence.ai
      ? "AI translated your sentence and made it sound more native in Spain Spanish."
      : "Custom sentence translated and loaded into the main player. You can now speak it, save it, or add it to a playlist.";
  }
}

// This helper adds a message bubble to the chat log.
function addChatMessage(role, spanish, english = "") {
  chatHistory.push({ role, spanish, english });
  saveCurrentChatState();
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

  chatHistory.forEach((message, messageIndex) => {
    const messageSpanish = message.spanish || message.text || "";
    const messageEnglish = message.english || "";
    const messageFeedback = message.feedback || "";
    const correctionSpanish = message.correctionSpanish || "";
    const correctionEnglish = message.correctionEnglish || "";
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
        playSpanishAudio(messageSpanish, "Chat reply");
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

    if (message.role === "user" && correctionSpanish) {
      const alternativeHeader = document.createElement("div");
      const alternativeLabel = document.createElement("p");
      const toggleAlternativeButton = document.createElement("button");

      alternativeHeader.className = "chat-alternative-header";
      alternativeLabel.className = "chat-role";
      alternativeLabel.textContent = "More native way";
      toggleAlternativeButton.className = "secondary-btn chat-audio-btn";
      toggleAlternativeButton.type = "button";
      toggleAlternativeButton.textContent = message.hideNativeAlternative ? "Show" : "Hide";
      toggleAlternativeButton.addEventListener("click", () => {
        chatHistory[messageIndex].hideNativeAlternative = !chatHistory[messageIndex].hideNativeAlternative;
        saveCurrentChatState();
        renderChatMessages();
      });

      alternativeHeader.appendChild(alternativeLabel);
      alternativeHeader.appendChild(toggleAlternativeButton);
      bubble.appendChild(alternativeHeader);

      if (!message.hideNativeAlternative) {
        const correctionText = document.createElement("p");
        correctionText.className = "chat-text chat-alternative";
        correctionText.textContent = correctionSpanish;
        bubble.appendChild(correctionText);

        if (correctionEnglish) {
          const correctionEnglishText = document.createElement("p");
          correctionEnglishText.className = "chat-text chat-english";
          correctionEnglishText.textContent = correctionEnglish;
          bubble.appendChild(correctionEnglishText);
        }
      }
    }

    if (messageFeedback) {
      const feedbackLabel = document.createElement("p");
      const feedbackText = document.createElement("p");
      feedbackLabel.className = "chat-role";
      feedbackText.className = "chat-text chat-english";
      feedbackLabel.textContent = "Quick note";
      feedbackText.textContent = messageFeedback;
      bubble.appendChild(feedbackLabel);
      bubble.appendChild(feedbackText);
    }

    if (message.role === "coach" && correctionSpanish) {
      const correctionLabel = document.createElement("p");
      const correctionText = document.createElement("p");
      correctionLabel.className = "chat-role";
      correctionText.className = "chat-text";
      correctionLabel.textContent = "More native way";
      correctionText.textContent = correctionSpanish;
      bubble.appendChild(correctionLabel);
      bubble.appendChild(correctionText);
    }

    if (message.role === "coach" && correctionEnglish) {
      const correctionEnglishText = document.createElement("p");
      correctionEnglishText.className = "chat-text chat-english";
      correctionEnglishText.textContent = correctionEnglish;
      bubble.appendChild(correctionEnglishText);
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

// This helper creates a more natural offline opening for the selected chat setup.
function buildLocalChatOpening() {
  const topic = chatTopicSelect.value;
  const tone = chatToneSelect.value;
  const scenario = chatScenarioSelect.value;
  const informal = tone === "informal";
  const openings = {
    casual: informal
      ? [
          { spanish: "Ey, ¿qué tal? ¿Qué has hecho hoy?", english: "Hey, how's it going? What have you done today?" },
          { spanish: "Buenas, cuéntame algo de tu día.", english: "Hi, tell me something about your day." }
        ]
      : [
          { spanish: "Hola, ¿qué tal está? ¿Cómo va el día?", english: "Hello, how are you? How is the day going?" },
          { spanish: "Buenas, cuénteme un poco qué ha hecho hoy.", english: "Hello, tell me a bit about what you have done today." }
        ],
    "catch-up": informal
      ? [{ spanish: "¡Hombre, cuánto tiempo! ¿Qué tal te va últimamente?", english: "Hey, long time no see! How have things been lately?" }]
      : [{ spanish: "Cuánto tiempo. ¿Cómo le va últimamente?", english: "Long time no see. How have things been lately?" }],
    roleplay: informal
      ? [{ spanish: `Vale, imagina que estamos hablando sobre ${topic}. ¿Qué necesitas?`, english: `Okay, imagine we are talking about ${topic}. What do you need?` }]
      : [{ spanish: `De acuerdo, estamos en una situación sobre ${topic}. ¿Qué necesita?`, english: `Alright, we are in a situation about ${topic}. What do you need?` }],
    opinions: informal
      ? [{ spanish: `A ver, sobre ${topic}, ¿qué prefieres normalmente?`, english: `So, about ${topic}, what do you normally prefer?` }]
      : [{ spanish: `Sobre ${topic}, ¿qué suele preferir normalmente?`, english: `About ${topic}, what do you usually prefer?` }],
    story: informal
      ? [{ spanish: "Cuéntame, ¿cómo ha ido tu día hasta ahora?", english: "Tell me, how has your day gone so far?" }]
      : [{ spanish: "Cuénteme, ¿cómo ha ido su día hasta ahora?", english: "Tell me, how has your day gone so far?" }],
    "quick-fire": informal
      ? [{ spanish: "Venga, pregunta rápida: ¿qué plan tienes para luego?", english: "Come on, quick question: what plan do you have for later?" }]
      : [{ spanish: "Pregunta rápida: ¿qué plan tiene para luego?", english: "Quick question: what plan do you have for later?" }]
  };

  return pickRandom(openings[scenario] || openings.casual);
}

// This helper asks AI for a natural Spain-Spanish opening line.
async function buildAiChatOpening() {
  const responseData = await callAiLanguageCoach({
    mode: "chat-opening",
    topic: chatTopicSelect.value,
    tone: chatToneSelect.value,
    scenario: chatScenarioSelect.value,
    scenarioInstruction: getChatScenarioInstruction(),
    personality: chatPersonalitySelect.value,
    personalityInstruction: getChatPersonalityInstruction(),
    goal: chatGoalSelect.value,
    goalInstruction: getChatGoalInstruction()
  });

  if (!responseData || !responseData.reply || !responseData.reply.spanish || !responseData.reply.english) {
    throw new Error("The AI chat coach did not return a valid opening.");
  }

  return {
    spanish: responseData.reply.spanish.trim(),
    english: responseData.reply.english.trim(),
    ai: true
  };
}

// This function starts a fresh chat.
async function startChat() {
  if (isCallModeActive) {
    stopCallMode("Call mode ended. New chat started.");
  }

  let opening = buildLocalChatOpening();

  activeConversationId = createConversationId();
  startChatTimer(true);
  chatHistory = [];

  if (aiModeEnabled) {
    const remainingCooldown = Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown <= 0) {
      startChatBtn.disabled = true;
      startChatBtn.textContent = "Starting...";
      chatStatus.textContent = "Starting a more natural Spain-Spanish conversation...";
      aiCooldownUntil = Date.now() + 10000;

      try {
        opening = await buildAiChatOpening();
      } catch (error) {
        chatStatus.textContent = `${formatAiErrorMessage(error.message)} The built-in opening was used instead.`;
      } finally {
        startChatBtn.disabled = false;
        startChatBtn.textContent = "Start chat";
      }
    }
  }

  lastCoachReply = opening;
  addChatMessage("coach", opening.spanish, opening.english);
  if (chatAutoSpeakCheckbox.checked) {
    playSpanishAudio(opening.spanish, "Chat opening");
  }
  if (!chatStatus.textContent.includes("built-in opening")) {
    chatStatus.textContent = `Chat started: ${getChatScenarioLabel()} | Goal: ${getChatGoalLabel()}. Reply in English or simple Spanish.`;
  }
}

// This function saves the current conversation for later.
function saveCurrentConversation() {
  if (!chatHistory.length) {
    alert("Start a chat first.");
    return;
  }

  if (!activeConversationId) {
    activeConversationId = createConversationId();
  }

  const savedAt = new Date().toISOString();
  const conversation = {
    id: activeConversationId,
    title: `${capitalize(chatTopicSelect.value)} chat - ${new Date(savedAt).toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })}`,
    topic: chatTopicSelect.value,
    tone: chatToneSelect.value,
    scenario: chatScenarioSelect.value,
    personality: chatPersonalitySelect.value,
    goal: chatGoalSelect.value,
    durationSeconds: getCurrentChatDurationSeconds(),
    savedAt,
    messages: chatHistory.map((message) => ({ ...message }))
  };
  const existingIndex = savedConversations.findIndex((item) => item.id === activeConversationId);

  if (existingIndex === -1) {
    savedConversations.push(conversation);
  } else {
    savedConversations[existingIndex] = conversation;
  }

  localStorage.setItem("spanishSentenceSavedConversations", JSON.stringify(savedConversations));
  saveCurrentChatState();
  renderSavedConversations();
  chatStatus.textContent = `Conversation saved at ${formatChatDuration(conversation.durationSeconds)}.`;
}

// This function loads a saved conversation into the chat panel.
function loadSavedConversation(conversationId) {
  const conversation = savedConversations.find((item) => item.id === conversationId);

  if (!conversation) {
    return;
  }

  if (isCallModeActive) {
    stopCallMode("Call mode ended. Saved conversation loaded.");
  }

  pauseChatTimer();
  activeConversationId = conversation.id;
  chatStartedAt = 0;
  chatAccumulatedSeconds = conversation.durationSeconds || 0;
  chatHistory = conversation.messages.map((message) => ({ ...message }));
  lastCoachReply = getLastCoachReplyFromHistory(chatHistory);

  if (conversation.topic) {
    chatTopicSelect.value = conversation.topic;
  }

  if (conversation.tone) {
    chatToneSelect.value = conversation.tone;
  }

  if (conversation.scenario) {
    chatScenarioSelect.value = conversation.scenario;
  }

  if (conversation.personality) {
    chatPersonalitySelect.value = conversation.personality;
  }

  if (conversation.goal) {
    chatGoalSelect.value = conversation.goal;
  }

  saveCurrentChatState();
  renderChatMessages();
  updateChatTimerDisplay();
  chatStatus.textContent = `Loaded saved conversation from ${new Date(conversation.savedAt).toLocaleString()}.`;
}

// This helper asks AI to correct a chat message and make it sound more native.
async function buildAiChatReply(userMessage) {
  const recentHistory = chatHistory.slice(-6).map((message) => ({
    role: message.role,
    spanish: message.spanish || "",
    english: message.english || ""
  }));

  const responseData = await callAiLanguageCoach({
    mode: "chat",
    topic: chatTopicSelect.value,
    tone: chatToneSelect.value,
    scenario: chatScenarioSelect.value,
    scenarioInstruction: getChatScenarioInstruction(),
    personality: chatPersonalitySelect.value,
    personalityInstruction: getChatPersonalityInstruction(),
    goal: chatGoalSelect.value,
    goalInstruction: getChatGoalInstruction(),
    userMessage,
    history: recentHistory
  });

  if (!responseData || !responseData.reply || !responseData.reply.spanish || !responseData.reply.english) {
    throw new Error("The AI chat coach did not return a valid reply.");
  }

  return {
    spanish: responseData.reply.spanish.trim(),
    english: responseData.reply.english.trim(),
    correctionSpanish: responseData.reply.correctionSpanish || "",
    correctionEnglish: responseData.reply.correctionEnglish || "",
    feedback: responseData.reply.feedback || "",
    ai: true
  };
}

// This function sends one message to the coach.
async function sendChatMessage(options = {}) {
  const userMessage = (options.userMessage || chatInput.value).trim();
  const fromCall = Boolean(options.fromCall);

  if (!userMessage) {
    if (!fromCall) {
      alert("Write a message first.");
    }
    return;
  }

  if (!activeConversationId) {
    activeConversationId = createConversationId();
  }
  startChatTimer(false);
  addChatMessage("user", userMessage);
  let coachReply;

  if (aiModeEnabled || fromCall) {
    const remainingCooldown = fromCall
      ? 0
      : Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown > 0) {
      coachReply = buildCoachReply(userMessage);
      chatStatus.textContent = `AI cooldown is active. Please wait ${formatSecondsLabel(remainingCooldown)}. The built-in coach was used for now.`;
    } else {
      sendChatBtn.disabled = true;
      sendChatBtn.textContent = "Sending...";
      chatStatus.textContent = fromCall
        ? "Call mode is thinking..."
        : "Asking AI to reply naturally in Spain Spanish...";
      aiCooldownUntil = Date.now() + 10000;

      try {
        coachReply = await buildAiChatReply(userMessage);
      } catch (error) {
        coachReply = buildCoachReply(userMessage);
        chatStatus.textContent = `${formatAiErrorMessage(error.message)} The built-in coach was used instead.`;
      } finally {
        sendChatBtn.disabled = false;
        sendChatBtn.textContent = "Send message";
      }
    }
  } else {
    coachReply = buildCoachReply(userMessage);
  }

  lastCoachReply = coachReply;
  if (coachReply.correctionSpanish) {
    const lastUserMessage = [...chatHistory].reverse().find((message) => message.role === "user");

    if (lastUserMessage) {
      lastUserMessage.correctionSpanish = coachReply.correctionSpanish;
      lastUserMessage.correctionEnglish = coachReply.correctionEnglish || "";
      lastUserMessage.feedback = coachReply.feedback || "";
      lastUserMessage.hideNativeAlternative = false;
    }
  }

  chatHistory.push({
    role: "coach",
    ...coachReply,
    correctionSpanish: "",
    correctionEnglish: "",
    feedback: ""
  });
  saveCurrentChatState();
  renderChatMessages();
  if (fromCall) {
    isCallReplying = true;
    const playbackId = callReplyPlaybackId + 1;
    callReplyPlaybackId = playbackId;
    interruptCallBtn.classList.remove("hidden");
    chatStatus.textContent = "Coach is replying. Call mode will listen again afterwards.";
    playSpanishAudio(coachReply.spanish, "Call reply", () => {
      if (playbackId !== callReplyPlaybackId) {
        return;
      }

      isCallReplying = false;
      interruptCallBtn.classList.add("hidden");
      if (isCallModeActive) {
        chatStatus.textContent = "Your turn. Speak naturally, then pause.";
        restartCallListening(300);
      }
    });
  } else if (chatAutoSpeakCheckbox.checked) {
    playSpanishAudio(coachReply.spanish, "Chat reply");
  }
  chatInput.value = "";

  if (!fromCall && !(aiModeEnabled && coachReply.ai !== true)) {
    chatStatus.textContent = coachReply.ai
      ? coachReply.correctionSpanish
        ? "AI replied naturally and gave you a short more-native Spain-Spanish correction."
        : "AI replied naturally in Spain Spanish and kept the conversation going."
      : "The coach replied in Spanish. You can speak it or use it as a sentence.";
  }
}

// This function clears the conversation.
function clearChat() {
  if (isCallModeActive) {
    stopCallMode("Call mode ended. Chat cleared.");
  }

  chatHistory = [];
  lastCoachReply = null;
  activeConversationId = "";
  chatAccumulatedSeconds = 0;
  chatStartedAt = 0;
  pauseChatTimer();
  localStorage.removeItem("spanishSentenceChatHistory");
  localStorage.removeItem("spanishSentenceActiveConversationId");
  renderChatMessages();
  chatStatus.textContent = "Chat cleared.";
}

// This helper prefers the more native AI version when one is available.
function getBestChatSentence() {
  if (!lastCoachReply) {
    return null;
  }

  const hasAlternative = Boolean(lastCoachReply.correctionSpanish);
  const spanish = hasAlternative ? lastCoachReply.correctionSpanish : lastCoachReply.spanish;
  const english = hasAlternative
    ? lastCoachReply.correctionEnglish || lastCoachReply.english || "More native chat version"
    : lastCoachReply.english || "Chat coach reply";

  return {
    ...lastCoachReply,
    difficulty: lastCoachReply.difficulty || "intermediate",
    topic: lastCoachReply.topic || chatTopicSelect.value,
    tone: lastCoachReply.tone || chatToneSelect.value,
    focus: "mixed",
    grammarTags: inferGrammarTags({
      difficulty: lastCoachReply.difficulty || "intermediate",
      focus: "mixed",
      spanish
    }),
    spanish,
    english,
    generated: false,
    custom: true
  };
}

// This function loads the last coach reply into the main sentence player.
function useLastChatReplyAsSentence() {
  const chatSentence = getBestChatSentence();

  if (!chatSentence) {
    alert("Start a chat first.");
    return;
  }

  setCurrentSentence(chatSentence, "Chat coach");
  latestCustomSentence = chatSentence;
  chatStatus.textContent = lastCoachReply.correctionSpanish
    ? "The more native version is now loaded into the main sentence player."
    : "The last coach reply is now loaded into the main sentence player.";
}

// This function opens a print-ready corrected conversation for saving as PDF.
function downloadCorrectedConversationPdf() {
  const turns = getCorrectedConversationTurns();

  if (!turns.length) {
    alert("Start a chat first.");
    return;
  }

  const title = `${capitalize(chatTopicSelect.value)} conversation`;
  const duration = formatChatDuration(getCurrentChatDurationSeconds());
  const printableWindow = window.open("", "_blank");

  if (!printableWindow) {
    alert("Pop-up blocked. Please allow pop-ups, then try again.");
    return;
  }

  const rows = turns.map((turn, index) => `
    <section class="turn">
      <p class="role">${index + 1}. ${escapeHtml(turn.role)}${turn.usedAlternative ? " - native version" : ""}</p>
      <p class="spanish">${escapeHtml(turn.spanish)}</p>
      ${turn.english ? `<p class="english">${escapeHtml(turn.english)}</p>` : ""}
    </section>
  `).join("");

  printableWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${escapeHtml(title)}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 32px; color: #1f2937; }
        h1 { margin: 0 0 8px; font-size: 28px; }
        .meta { margin: 0 0 24px; color: #6b7280; }
        .turn { break-inside: avoid; margin: 0 0 18px; padding-bottom: 14px; border-bottom: 1px solid #e5e7eb; }
        .role { margin: 0 0 6px; color: #b45309; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 12px; }
        .spanish { margin: 0 0 6px; font-size: 20px; font-weight: 700; line-height: 1.45; }
        .english, .original { margin: 0; color: #6b7280; line-height: 1.5; }
        .original { margin-top: 6px; font-size: 13px; font-style: italic; }
      </style>
    </head>
    <body>
      <h1>${escapeHtml(title)}</h1>
      <p class="meta">${escapeHtml(capitalize(chatToneSelect.value))} | ${escapeHtml(duration)} | Corrected learner turns</p>
      ${rows}
      <script>
        window.onload = () => {
          window.focus();
          window.print();
        };
      <\/script>
    </body>
    </html>
  `);
  printableWindow.document.close();
  chatStatus.textContent = "Corrected conversation opened. Choose Save as PDF in the print dialog.";
}

// This helper triggers a browser download for one audio blob.
function downloadAudioBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");

  downloadLink.href = url;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();

  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

// This helper formats audio time for the full-conversation media player.
function formatMediaTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "00:00";
  }

  return formatChatDuration(Math.floor(seconds));
}

// This helper asks the backend for one MP3 containing the full corrected conversation.
async function fetchConversationAudioBlob(turns) {
  let response;

  try {
    response = await fetch("/api/generate-conversation-audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ turns })
    });
  } catch (error) {
    throw new Error("Network error. The app could not reach the conversation audio backend.");
  }

  if (!response.ok) {
    let errorMessage = "The conversation audio backend was not ready.";

    try {
      const errorData = await response.json();
      errorMessage = errorData.details || errorData.error || errorMessage;
    } catch (error) {
      errorMessage = "The conversation audio backend returned an unexpected error.";
    }

    throw new Error(errorMessage);
  }

  return response.blob();
}

// This function downloads the full corrected conversation as one MP3.
async function downloadCorrectedConversationMp3s() {
  const turns = getCorrectedConversationTurns();

  if (!turns.length) {
    alert("Start a chat first.");
    return;
  }

  downloadChatMp3sBtn.disabled = true;
  downloadChatMp3sBtn.textContent = "Preparing full MP3...";
  chatStatus.textContent = "Preparing one full conversation MP3...";

  const title = slugifyFilename(`${chatTopicSelect.value}-conversation`);

  try {
    const audioBlob = await fetchConversationAudioBlob(turns);
    downloadAudioBlob(audioBlob, `${title}-full.mp3`);
    chatStatus.textContent = "Full conversation MP3 downloaded.";
  } catch (error) {
    chatStatus.textContent = `Could not download the full MP3. ${error.message}`;
  } finally {
    downloadChatMp3sBtn.disabled = false;
    downloadChatMp3sBtn.textContent = "Download full conversation MP3";
  }
}

// This helper updates the full-conversation media control row.
function updateConversationPlaybackControls() {
  const isActive = fullConversationPlayback.isPlaying;
  const currentTime = fullConversationAudioPlayer ? fullConversationAudioPlayer.currentTime : 0;
  const duration = fullConversationAudioPlayer ? fullConversationAudioPlayer.duration : 0;
  const hasDuration = Number.isFinite(duration) && duration > 0;

  conversationPlaybackControls.classList.toggle("hidden", !isActive);
  fullConversationAudioPlayer.classList.toggle("hidden", !isActive);
  previousConversationTurnBtn.disabled = !isActive || currentTime <= 0;
  pauseConversationBtn.disabled = !isActive;
  nextConversationTurnBtn.disabled = !isActive || (hasDuration && currentTime >= duration);
  pauseConversationBtn.textContent = fullConversationAudioPlayer && fullConversationAudioPlayer.paused ? "Resume" : "Pause";
  conversationPlaybackProgress.textContent = isActive
    ? `${fullConversationAudioPlayer.paused ? "Paused" : "Playing"} ${formatMediaTime(currentTime)} / ${hasDuration ? formatMediaTime(duration) : "--:--"}`
    : "Not playing";
}

// This helper stops full conversation playback.
function stopFullConversationPlayback(message = "Full conversation playback stopped.") {
  fullConversationPlayback.isPlaying = false;
  fullConversationPlayback.isPaused = false;
  fullConversationPlayback.index = 0;
  fullConversationPlayback.turns = [];
  fullConversationPlayback.playbackId += 1;
  spanishAudioEndedCallback = null;

  if (fullConversationAudioPlayer) {
    fullConversationAudioPlayer.pause();
    fullConversationAudioPlayer.removeAttribute("src");
    fullConversationAudioPlayer.load();
  }

  if (fullConversationPlayback.audioUrl) {
    URL.revokeObjectURL(fullConversationPlayback.audioUrl);
    fullConversationPlayback.audioUrl = "";
  }

  if (spanishAudioPlayer) {
    spanishAudioPlayer.pause();
    spanishAudioPlayer.currentTime = 0;
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  playFullChatBtn.classList.remove("hidden");
  stopFullChatBtn.classList.add("hidden");
  playConversationPlaylistBtn.classList.remove("hidden");
  stopConversationPlaylistBtn.classList.add("hidden");
  updateConversationPlaybackControls();
  chatStatus.textContent = message;
}

// This helper loads one continuous conversation MP3 into the visible media player.
async function loadFullConversationMedia(turns, label = "Full conversation", fromPlaylist = false) {
  if (!turns.length) {
    alert("Start a chat first.");
    return;
  }

  stopRadioMode();
  stopFullConversationPlayback("");
  fullConversationPlayback = {
    isPlaying: true,
    isPaused: false,
    index: 0,
    turns,
    playbackId: fullConversationPlayback.playbackId + 1,
    audioUrl: ""
  };
  playFullChatBtn.classList.add("hidden");
  stopFullChatBtn.classList.remove("hidden");
  playConversationPlaylistBtn.classList.toggle("hidden", fromPlaylist);
  stopConversationPlaylistBtn.classList.toggle("hidden", !fromPlaylist);
  conversationPlaybackProgress.textContent = "Preparing audio...";
  conversationPlaybackControls.classList.remove("hidden");
  fullConversationAudioPlayer.classList.remove("hidden");
  pauseConversationBtn.disabled = true;
  previousConversationTurnBtn.disabled = true;
  nextConversationTurnBtn.disabled = true;
  chatStatus.textContent = "Preparing the full conversation media player...";

  try {
    const audioBlob = await fetchConversationAudioBlob(turns);
    fullConversationPlayback.audioUrl = URL.createObjectURL(audioBlob);
    fullConversationAudioPlayer.src = fullConversationPlayback.audioUrl;
    fullConversationAudioPlayer.load();
    await fullConversationAudioPlayer.play();
    chatStatus.textContent = label;
  } catch (error) {
    stopFullConversationPlayback(`Could not load the full conversation player. ${error.message}`);
    return;
  }

  updateConversationPlaybackControls();
}

// This helper plays the next corrected turn in the full conversation.
function playFullConversationStep(targetIndex = null) {
  if (!fullConversationPlayback.isPlaying) {
    return;
  }

  if (Number.isInteger(targetIndex)) {
    fullConversationPlayback.index = Math.max(0, Math.min(targetIndex, fullConversationPlayback.turns.length - 1));
  }

  if (fullConversationPlayback.index >= fullConversationPlayback.turns.length) {
    stopFullConversationPlayback("Full conversation finished.");
    return;
  }

  fullConversationPlayback.isPaused = false;
  fullConversationPlayback.playbackId += 1;
  spanishAudioEndedCallback = null;

  const playbackId = fullConversationPlayback.playbackId;
  const turnIndex = fullConversationPlayback.index;
  const turn = fullConversationPlayback.turns[turnIndex];

  fullConversationPlayback.index = turnIndex + 1;
  chatStatus.textContent = `Playing ${turnIndex + 1} of ${fullConversationPlayback.turns.length}: ${turn.role}`;
  updateConversationPlaybackControls();
  playSpanishAudio(turn.spanish, `Conversation ${turnIndex + 1}`, () => {
    if (playbackId !== fullConversationPlayback.playbackId) {
      return;
    }

    playFullConversationStep();
  });
}

// This function pauses or resumes the full-conversation player.
function toggleFullConversationPause() {
  if (!fullConversationPlayback.isPlaying) {
    return;
  }

  if (fullConversationAudioPlayer.paused) {
    fullConversationAudioPlayer.play().catch(() => {
      chatStatus.textContent = "Tap play in the media player to resume.";
    });
  } else {
    fullConversationAudioPlayer.pause();
  }

  fullConversationPlayback.isPaused = fullConversationAudioPlayer.paused;
  updateConversationPlaybackControls();
}

// This function jumps backward or forward inside the full-conversation track.
function skipFullConversationTurn(direction) {
  if (!fullConversationPlayback.isPlaying) {
    return;
  }

  const duration = Number.isFinite(fullConversationAudioPlayer.duration)
    ? fullConversationAudioPlayer.duration
    : Number.MAX_SAFE_INTEGER;
  const offset = direction === "previous" ? -15 : 15;
  fullConversationAudioPlayer.currentTime = Math.max(
    0,
    Math.min(duration, fullConversationAudioPlayer.currentTime + offset)
  );
  updateConversationPlaybackControls();
}

// This function plays the corrected conversation from start to finish.
function playFullConversation() {
  const turns = getCorrectedConversationTurns();

  if (!turns.length) {
    alert("Start a chat first.");
    return;
  }

  loadFullConversationMedia(turns, "Full conversation loaded in the media player.");
}

// This function adds the current corrected conversation as one full playlist item.
function addFullConversationToPlaylist() {
  const conversation = buildConversationPlaylistItem();

  if (!conversation) {
    alert("Start a chat first.");
    return;
  }

  conversationPlaylist.push(conversation);
  saveConversationPlaylist();
  renderConversationPlaylist();
  chatStatus.textContent = "Full corrected conversation added to the conversation playlist.";
}

// This function plays one saved full conversation.
function playConversationPlaylistItem(conversationId) {
  const conversation = conversationPlaylist.find((item) => item.id === conversationId);

  if (!conversation) {
    return;
  }

  playConversationPlaylistBtn.classList.add("hidden");
  stopConversationPlaylistBtn.classList.remove("hidden");
  loadFullConversationMedia(conversation.turns, `Conversation loaded: ${conversation.title}`, true);
}

// This function plays every saved full conversation in order.
function playConversationPlaylist() {
  if (!conversationPlaylist.length) {
    alert("Add a conversation to the conversation playlist first.");
    return;
  }

  const turns = conversationPlaylist.flatMap((conversation, conversationIndex) => {
    return conversation.turns.map((turn) => ({
      ...turn,
      role: `${conversationIndex + 1}. ${turn.role}`
    }));
  });

  playConversationPlaylistBtn.classList.add("hidden");
  stopConversationPlaylistBtn.classList.remove("hidden");
  loadFullConversationMedia(turns, "Conversation playlist loaded in the media player.", true);
}

// This function removes one full conversation from the conversation playlist.
function removeConversationPlaylistItem(conversationId) {
  conversationPlaylist = conversationPlaylist.filter((item) => item.id !== conversationId);
  saveConversationPlaylist();
  renderConversationPlaylist();
  chatStatus.textContent = "Conversation removed from the conversation playlist.";
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

// This helper fills a focused practice template while keeping paired
// Spanish/English slots aligned.
function fillFocusedTemplate(template, slots) {
  const slotIndexes = {};

  const pickSlotValue = (slotName) => {
    const linkedSlotName = slotName.endsWith("English")
      ? slotName.replace(/English$/, "")
      : `${slotName}English`;
    const slotValues = slots[slotName] || [];
    const linkedValues = slots[linkedSlotName] || [];

    if (!slotValues.length) {
      return "";
    }

    if (slotIndexes[slotName] === undefined && slotIndexes[linkedSlotName] === undefined) {
      slotIndexes[slotName] = Math.floor(Math.random() * slotValues.length);
    }

    const chosenIndex = slotIndexes[slotName] ?? slotIndexes[linkedSlotName] ?? 0;
    slotIndexes[slotName] = chosenIndex;
    slotIndexes[linkedSlotName] = chosenIndex;

    return slotValues[chosenIndex % slotValues.length] || linkedValues[chosenIndex % linkedValues.length] || "";
  };

  const replaceSlots = (text) => {
    return text.replace(/\{([^}]+)\}/g, (match, slotName) => pickSlotValue(slotName));
  };

  return {
    spanish: replaceSlots(template.spanish),
    english: replaceSlots(template.english)
  };
}

// This helper normalises a sentence so we can catch near-duplicates.
function normaliseSentenceForSimilarity(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// This helper compares word overlap so small ending changes still count as repeats.
function getSentenceSimilarity(firstSentence, secondSentence) {
  const firstWords = normaliseSentenceForSimilarity(firstSentence).split(" ").filter(Boolean);
  const secondWords = normaliseSentenceForSimilarity(secondSentence).split(" ").filter(Boolean);

  if (!firstWords.length || !secondWords.length) {
    return 0;
  }

  const firstSet = new Set(firstWords);
  const secondSet = new Set(secondWords);
  const sharedCount = [...firstSet].filter((word) => secondSet.has(word)).length;
  const smallerWordCount = Math.min(firstSet.size, secondSet.size);

  return sharedCount / smallerWordCount;
}

// This helper rejects sentences that are basically the same as recent ones.
function isTooSimilarToRecentSentence(spanishSentenceText) {
  const comparisonSentences = [
    lastGeneratedSpanish,
    currentSentence?.spanish,
    ...recentGeneratedSentences
  ].filter(Boolean);

  return comparisonSentences.some((recentSentence) => {
    return getSentenceSimilarity(spanishSentenceText, recentSentence) >= 0.72;
  });
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
  const grammarFocus = grammarFocusSelect.value;

  if (grammarFocus !== "mixed" && focusedGeneratorData[grammarFocus]) {
    const focusedPattern = focusedGeneratorData[grammarFocus];
    const focusedTemplate = pickRandom(focusedPattern.templates);
    const availableTopics =
      topic === "all" ? Object.keys(generatorData[difficulty]) : [getTemplateTopic(topic)];
    const templateTopic = pickRandom(availableTopics);
    const chosenTopic = topic === "all" ? templateTopic : topic;
    const availableTones =
      tone === "all" ? Object.keys(generatorData[difficulty][templateTopic]) : [tone];
    const chosenTone = pickRandom(availableTones);
    const focusedSlots = getFocusedSlotsForTopic(focusedPattern.slots, templateTopic);
    const focusedSentence = fillFocusedTemplate(focusedTemplate, focusedSlots);

    return {
      difficulty,
      topic: chosenTopic,
      tone: chosenTone,
      focus: grammarFocus,
      grammarTags: inferGrammarTags({
        difficulty,
        focus: grammarFocus,
        spanish: focusedSentence.spanish
      }),
      spanish: focusedSentence.spanish,
      english: focusedSentence.english,
      generated: true
    };
  }

  const availableTopics =
    topic === "all" ? Object.keys(generatorData[difficulty]) : [getTemplateTopic(topic)];

  const templateTopic = pickRandom(availableTopics);
  const chosenTopic = topic === "all" ? templateTopic : topic;
  const availableTones =
    tone === "all" ? Object.keys(generatorData[difficulty][templateTopic]) : [tone];

  const chosenTone = pickRandom(availableTones);
  const pattern = generatorData[difficulty][templateTopic][chosenTone];
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
    focus: grammarFocus,
    grammarTags: inferGrammarTags({
      difficulty,
      focus: grammarFocus,
      spanish
    }),
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

// This helper creates a small stable key for cached Spanish audio.
function createSpanishAudioCacheKey(text) {
  let hash = 0;

  for (let index = 0; index < text.length; index += 1) {
    hash = ((hash << 5) - hash) + text.charCodeAt(index);
    hash |= 0;
  }

  return `audio_${SPANISH_AUDIO_CACHE_VERSION}_${Math.abs(hash)}_${text.length}`;
}

// This helper opens a tiny browser database for saved Spanish audio files.
function openSpanishAudioDb() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      resolve(null);
      return;
    }

    const request = indexedDB.open("spanishSentenceAudioDb", 1);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains("audio")) {
        db.createObjectStore("audio");
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// This helper gets a saved Spanish audio blob from the browser cache.
async function getCachedSpanishAudioBlob(text) {
  const db = await openSpanishAudioDb();

  if (!db) {
    return null;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("audio", "readonly");
    const store = transaction.objectStore("audio");
    const request = store.get(createSpanishAudioCacheKey(text));

    request.onsuccess = () => {
      resolve(request.result || null);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

// This helper saves a Spanish audio blob locally so replays do not need a new request.
async function cacheSpanishAudioBlob(text, blob) {
  const db = await openSpanishAudioDb();

  if (!db) {
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("audio", "readwrite");
    const store = transaction.objectStore("audio");
    const request = store.put(blob, createSpanishAudioCacheKey(text));

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// This helper sets up one reusable audio player for Spanish playback.
function ensureSpanishAudioPlayer() {
  if (spanishAudioPlayer) {
    return spanishAudioPlayer;
  }

  spanishAudioPlayer = new Audio();
  spanishAudioPlayer.preload = "auto";
  spanishAudioPlayer.playsInline = true;
  spanishAudioPlayer.addEventListener("ended", () => {
    const callback = spanishAudioEndedCallback;
    spanishAudioEndedCallback = null;

    if (typeof callback === "function") {
      callback();
    }
  });

  return spanishAudioPlayer;
}

// This helper cleans up the current object URL when a different audio clip is loaded.
function clearCurrentSpanishAudioUrl() {
  if (currentSpanishAudioUrl) {
    URL.revokeObjectURL(currentSpanishAudioUrl);
    currentSpanishAudioUrl = "";
  }
}

// This helper adds Android lock-screen media information when available.
function updateSpanishMediaSession(titleText) {
  if (!("mediaSession" in navigator)) {
    return;
  }

  navigator.mediaSession.metadata = new MediaMetadata({
    title: titleText || "Spanish sentence",
    artist: "Spanish Sentence Generator",
    album: "Spanish practice"
  });

  navigator.mediaSession.setActionHandler("play", async () => {
    try {
      await ensureSpanishAudioPlayer().play();
    } catch (error) {
      // Ignore lock-screen play errors quietly.
    }
  });

  navigator.mediaSession.setActionHandler("pause", () => {
    ensureSpanishAudioPlayer().pause();
  });
}

// This helper asks the backend for one Spanish audio file from ElevenLabs.
async function fetchSpanishAudioBlob(text) {
  let response;

  try {
    response = await fetch("/api/generate-spanish-audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });
  } catch (error) {
    throw new Error("Network error. The app could not reach the Spanish audio backend.");
  }

  if (!response.ok) {
    let errorMessage = "The Spanish audio backend was not ready.";

    try {
      const errorData = await response.json();
      errorMessage = errorData.details || errorData.error || errorMessage;
    } catch (error) {
      errorMessage = "The Spanish audio backend returned an unexpected error.";
    }

    throw new Error(errorMessage);
  }

  return response.blob();
}

// This helper returns cached/generated Spanish MP3 audio.
async function getSpanishAudioBlob(text) {
  let audioBlob = await getCachedSpanishAudioBlob(text);

  if (!audioBlob) {
    audioBlob = await fetchSpanishAudioBlob(text);
    await cacheSpanishAudioBlob(text, audioBlob);
  }

  return audioBlob;
}

// This helper plays Spanish using cached/generated audio first, then falls back to browser TTS.
async function playSpanishAudio(text, titleText = "Spanish sentence", callback = null) {
  if (!text) {
    return;
  }

  const player = ensureSpanishAudioPlayer();
  spanishAudioEndedCallback = callback;
  player.pause();
  player.currentTime = 0;
  clearCurrentSpanishAudioUrl();

  try {
    const audioBlob = await getSpanishAudioBlob(text);

    currentSpanishAudioUrl = URL.createObjectURL(audioBlob);
    player.src = currentSpanishAudioUrl;
    updateSpanishMediaSession(titleText);
    await player.play();
    return;
  } catch (error) {
    if (callback) {
      speakTextWithCallback(text, "es-ES", callback);
    } else {
      speakText(text, "es-ES");
    }

    showStatusMessage(`Spanish audio fallback used. ${error.message}`);
  }
}

// This helper talks to the shared AI language coach backend.
async function callAiLanguageCoach(payload) {
  let response;

  try {
    response = await fetch("/api/language-coach", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    throw new Error("Network error. The app could not reach the AI backend.");
  }

  if (!response.ok) {
    let errorMessage = "The AI language coach was not ready.";

    try {
      const errorData = await response.json();
      errorMessage = errorData.details || errorData.error || errorMessage;
    } catch (error) {
      errorMessage = "The AI language coach returned an unexpected error.";
    }

    throw new Error(errorMessage);
  }

  return response.json();
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
        tone: toneSelect.value,
        focus: grammarFocusSelect.value,
        recentSentences: [
          currentSentence?.spanish,
          ...recentGeneratedSentences
        ].filter(Boolean).slice(-14)
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

  const sentence = {
    difficulty: data.sentence.difficulty || difficultySelect.value,
    topic: data.sentence.topic || topicSelect.value,
    tone: data.sentence.tone || toneSelect.value,
    focus: data.sentence.focus || grammarFocusSelect.value,
    grammarTags: Array.isArray(data.sentence.grammarTags) ? data.sentence.grammarTags : [],
    spanish: data.sentence.spanish.trim(),
    english: data.sentence.english.trim(),
    generated: true,
    ai: true
  };

  if (isTooSimilarToRecentSentence(sentence.spanish)) {
    throw new Error("The AI returned a sentence too similar to a recent one.");
  }

  return sentence;
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
    let remainingCooldown = Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown > 2) {
      nextSentence = generateLocalSentence(filteredSentences);
      setCurrentSentence(nextSentence, nextSentence.generated ? "Generated" : "Example");
      if (nextSentence.generated) {
        rememberGeneratedSentence(nextSentence.spanish);
      }
      showStatusMessage(`AI cooldown is active. Please wait ${formatSecondsLabel(remainingCooldown)} before asking AI again. The built-in generator was used for now.`);
      return;
    }

    generateBtn.disabled = true;
    generateBtn.textContent = "Generating...";
    if (remainingCooldown > 0) {
      showStatusMessage(`Waiting ${formatSecondsLabel(remainingCooldown)} for the AI cooldown, then generating...`);
      await wait(remainingCooldown * 1000);
      remainingCooldown = Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));
    }

    if (remainingCooldown > 0) {
      nextSentence = generateLocalSentence(filteredSentences);
      setCurrentSentence(nextSentence, nextSentence.generated ? "Generated" : "Example");
      if (nextSentence.generated) {
        rememberGeneratedSentence(nextSentence.spanish);
      }
      showStatusMessage(`AI cooldown is still active. The built-in generator was used for now.`);
      generateBtn.disabled = false;
      generateBtn.textContent = "Generate Sentence";
      return;
    }

    showStatusMessage("Asking the AI sentence engine for a fresh sentence...");
    aiCooldownUntil = Date.now() + 10000;

    try {
      try {
        nextSentence = await generateAiSentence();
      } catch (error) {
        if (error.message.includes("too similar")) {
          showStatusMessage("The AI repeated itself, so asking once more for a different sentence...");
          nextSentence = await generateAiSentence();
        } else {
          throw error;
        }
      }
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
  } else if (nextSentence.ai) {
    rememberGeneratedSentence(nextSentence.spanish);
  }

  incrementPracticeStat("generated");

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

// This helper applies the preferred display mode whenever a new sentence is loaded.
function applySentenceDisplayPreference() {
  if (sentenceDisplayMode === "quiz-mode") {
    quizModeCheckbox.checked = true;
    translationVisible = false;
  } else if (sentenceDisplayMode === "hide-translation") {
    quizModeCheckbox.checked = false;
    translationVisible = false;
  } else {
    quizModeCheckbox.checked = false;
    translationVisible = true;
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

function saveActivePage() {
  localStorage.setItem("spanishSentenceActivePage", activePageId);
}

function showPage(pageId) {
  activePageId = pageId;
  saveActivePage();

  appPages.forEach((page) => {
    page.classList.toggle("active-page", page.id === pageId);
  });

  pageTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.pageTarget === pageId);
  });
}

// This function downloads a JSON backup of the user's practice data.
function exportPracticeBackup() {
  const exportedAt = new Date().toISOString();
  const backup = {
    app: "Spanish Sentence Generator",
    version: 1,
    exportedAt,
    settings: {
      aiModeEnabled,
      sentenceDisplayMode,
      activePageId
    },
    progress: {
      quizScore,
      recallSentences,
      favourites,
      playlists,
      savedConversations,
      conversationPlaylist,
      currentChat: {
        activeConversationId,
        chatAccumulatedSeconds: getCurrentChatDurationSeconds(),
        chatHistory
      }
    }
  };
  const jsonText = JSON.stringify(backup, null, 2);
  const blob = new Blob([jsonText], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");
  const datePart = exportedAt.slice(0, 10);

  downloadLink.href = url;
  downloadLink.download = `spanish-practice-backup-${datePart}.json`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(url);
  radioStatus.textContent = "Practice backup downloaded.";
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

// This function saves the preferred new-sentence display mode.
function saveSentenceDisplayPreference() {
  localStorage.setItem("spanishSentenceDisplayMode", sentenceDisplayMode);
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
  ensureSpanishAudioPlayer().pause();
  ensureSpanishAudioPlayer().currentTime = 0;
  spanishAudioEndedCallback = null;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
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

  playSpanishAudio(currentPlaylistSentence.spanish, `${playlist.name} ${radioState.index + 1}`, () => {
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

  stopFullConversationPlayback("");
  radioState.isPlaying = true;
  radioState.playlistId = playlist.id;
  radioState.mode = radioModeSelect.value;
  radioState.index = 0;
  playRadioStep();
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

// This function copies the current Spanish sentence to the clipboard.
async function copyCurrentSentence() {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(currentSentence.spanish);
    } else {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = currentSentence.spanish;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand("copy");
      document.body.removeChild(temporaryInput);
    }

    showStatusMessage("Spanish sentence copied.");
  } catch (error) {
    alert("Could not copy the sentence. You can select the text manually instead.");
  }
}

// This helper saves any sentence object to favourites.
function saveSentenceToFavourites(sentence, emptyMessage = "Generate a sentence first.") {
  if (!sentence) {
    alert(emptyMessage);
    return false;
  }

  const alreadySaved = favourites.some((item) => item.spanish === sentence.spanish);

  if (alreadySaved) {
    alert("This sentence is already in your favourites.");
    return false;
  }

  favourites.push(sentence);
  saveFavourites();
  renderFavourites();
  incrementPracticeStat("saved");
  showStatusMessage("Sentence saved to favourites.");
  return true;
}

// This function saves the current sentence to favourites.
function saveCurrentSentence() {
  saveSentenceToFavourites(currentSentence, "Generate a sentence first.");
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

// This function saves recall practice sentences in localStorage.
function saveRecallSentences() {
  localStorage.setItem("spanishSentenceRecall", JSON.stringify(recallSentences));
}

// This helper adds spaced-repetition fields to older recall items.
function withRecallSchedule(sentence) {
  const nowText = new Date().toISOString();

  return {
    ...sentence,
    recallStreak: sentence.recallStreak || 0,
    recallCorrect: sentence.recallCorrect || 0,
    recallWrong: sentence.recallWrong || 0,
    recallIntervalDays: sentence.recallIntervalDays || 0,
    lastReviewedAt: sentence.lastReviewedAt || "",
    nextReviewAt: sentence.nextReviewAt || nowText
  };
}

// This helper checks if a recall sentence is due now.
function isRecallDue(sentence) {
  return !sentence.nextReviewAt || new Date(sentence.nextReviewAt).getTime() <= Date.now();
}

// This function adds a sentence to the recall list.
function addSentenceToRecall(sentence) {
  const alreadyAdded = recallSentences.some((item) => item.spanish === sentence.spanish);

  if (alreadyAdded) {
    alert("This sentence is already in Recall.");
    return;
  }

  recallSentences.push(withRecallSchedule(sentence));
  saveRecallSentences();
  renderRecallSentences();
  showStatusMessage("Sentence added to Recall.");
}

// This function updates the spaced-repetition schedule after a review.
function markRecallReview(spanishText, remembered) {
  recallSentences = recallSentences.map((item) => {
    if (item.spanish !== spanishText) {
      return item;
    }

    const scheduledItem = withRecallSchedule(item);
    const nextStreak = remembered ? scheduledItem.recallStreak + 1 : 0;
    const nextIntervalDays = remembered
      ? [1, 3, 7, 14, 30, 60][Math.min(nextStreak - 1, 5)]
      : 0;
    const nextReviewDate = new Date();

    if (remembered) {
      nextReviewDate.setDate(nextReviewDate.getDate() + nextIntervalDays);
    }

    return {
      ...scheduledItem,
      recallStreak: nextStreak,
      recallCorrect: scheduledItem.recallCorrect + (remembered ? 1 : 0),
      recallWrong: scheduledItem.recallWrong + (remembered ? 0 : 1),
      recallIntervalDays: nextIntervalDays,
      lastReviewedAt: new Date().toISOString(),
      nextReviewAt: nextReviewDate.toISOString()
    };
  });

  saveRecallSentences();
  renderRecallSentences();
  showStatusMessage(remembered ? "Nice. Review scheduled for later." : "No worries. This stays due for more practice.");
}

// This function removes a sentence from the recall list.
function deleteRecallSentence(spanishText) {
  recallSentences = recallSentences.filter((item) => item.spanish !== spanishText);
  saveRecallSentences();
  renderRecallSentences();
}

// This function draws the recall practice list.
function renderRecallSentences() {
  recallList.innerHTML = "";
  recallSentences = recallSentences.map(withRecallSchedule);

  if (recallSentences.length === 0) {
    recallEmptyMessage.style.display = "block";
    recallSummary.textContent = "No recall reviews due yet.";
    return;
  }

  recallEmptyMessage.style.display = "none";
  const dueCount = recallSentences.filter(isRecallDue).length;
  recallSummary.textContent = `${dueCount} due now | ${recallSentences.length} total in Recall`;

  recallSentences
    .slice()
    .sort((first, second) => {
      const firstDue = isRecallDue(first) ? 0 : 1;
      const secondDue = isRecallDue(second) ? 0 : 1;

      if (firstDue !== secondDue) {
        return firstDue - secondDue;
      }

      return new Date(first.nextReviewAt) - new Date(second.nextReviewAt);
    })
    .forEach((item) => {
    const listItem = document.createElement("li");
    const englishTitle = document.createElement("h4");
    const hiddenSpanish = document.createElement("p");
    const scheduleText = document.createElement("p");
    const tagRow = document.createElement("div");
    const actionRow = document.createElement("div");
    const revealButton = document.createElement("button");
    const rememberedButton = document.createElement("button");
    const missedButton = document.createElement("button");
    const removeButton = document.createElement("button");
    const difficultyTag = document.createElement("span");
    const topicTag = document.createElement("span");
    const toneTag = document.createElement("span");
    const dueTag = document.createElement("span");

    listItem.className = "recall-item";
    tagRow.className = "tag-row";
    actionRow.className = "actions";

    englishTitle.textContent = item.english;
    hiddenSpanish.innerHTML = `<span class="recall-hidden">Spanish hidden. Try to remember it first.</span>`;
    scheduleText.textContent = `Next review: ${isRecallDue(item) ? "due now" : formatReviewDate(item.nextReviewAt)} | Streak: ${item.recallStreak} | Right: ${item.recallCorrect} | Missed: ${item.recallWrong}`;

    revealButton.textContent = "Reveal Spanish";
    revealButton.className = "secondary-btn";
    revealButton.addEventListener("click", () => {
      hiddenSpanish.innerHTML = "";
      hiddenSpanish.appendChild(buildHoverableFragment(item.spanish));
      revealButton.textContent = "Spanish shown";
      revealButton.disabled = true;
    });

    rememberedButton.textContent = "I remembered";
    rememberedButton.className = "secondary-btn";
    rememberedButton.addEventListener("click", () => {
      markRecallReview(item.spanish, true);
    });

    missedButton.textContent = "I missed it";
    missedButton.className = "secondary-btn";
    missedButton.addEventListener("click", () => {
      hiddenSpanish.innerHTML = "";
      hiddenSpanish.appendChild(buildHoverableFragment(item.spanish));
      markRecallReview(item.spanish, false);
    });

    removeButton.textContent = "Remove";
    removeButton.className = "delete-btn";
    removeButton.addEventListener("click", () => {
      deleteRecallSentence(item.spanish);
    });

    difficultyTag.className = "tag";
    topicTag.className = "tag";
    toneTag.className = "tag";
    dueTag.className = "tag";
    difficultyTag.textContent = capitalize(item.difficulty);
    topicTag.textContent = capitalize(item.topic);
    toneTag.textContent = capitalize(item.tone);
    dueTag.textContent = isRecallDue(item) ? "Due now" : `Due ${formatReviewDate(item.nextReviewAt)}`;

    tagRow.appendChild(dueTag);
    tagRow.appendChild(difficultyTag);
    tagRow.appendChild(topicTag);
    tagRow.appendChild(toneTag);
    actionRow.appendChild(revealButton);
    actionRow.appendChild(rememberedButton);
    actionRow.appendChild(missedButton);
    actionRow.appendChild(removeButton);
    listItem.appendChild(englishTitle);
    listItem.appendChild(hiddenSpanish);
    listItem.appendChild(scheduleText);
    listItem.appendChild(tagRow);
    listItem.appendChild(actionRow);
    recallList.appendChild(listItem);
  });
  saveRecallSentences();
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
    const recallButton = document.createElement("button");

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

    recallButton.textContent = "Add to recall";
    recallButton.className = "secondary-btn";
    recallButton.addEventListener("click", () => {
      addSentenceToRecall(item);
    });

    tagRow.appendChild(difficultyTag);
    tagRow.appendChild(topicTag);
    tagRow.appendChild(toneTag);
    textWrapper.appendChild(title);
    textWrapper.appendChild(translation);
    textWrapper.appendChild(tagRow);
    textWrapper.appendChild(playlistButton);
    textWrapper.appendChild(recallButton);
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
  playSpanishAudio(currentSentence.spanish, "Current sentence");
  incrementPracticeStat("spoken");
});

speakEnglishBtn.addEventListener("click", () => {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  stopRadioMode();
  speakText(currentSentence.english, "en-GB");
  incrementPracticeStat("spoken");
});

addGeneratorToPlaylistBtn.addEventListener("click", () => {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  addSentenceToSelectedPlaylist(currentSentence);
});

toggleTranslationBtn.addEventListener("click", () => {
  toggleTranslation();
  showStatusMessage(translationVisible ? "Translation revealed." : "Translation hidden.");
});

saveBtn.addEventListener("click", saveCurrentSentence);
copySentenceBtn.addEventListener("click", copyCurrentSentence);
markCorrectBtn.addEventListener("click", () => markQuizAnswer("correct"));
markWrongBtn.addEventListener("click", () => markQuizAnswer("wrong"));
resetScoreBtn.addEventListener("click", resetQuizScore);
createPlaylistBtn.addEventListener("click", createPlaylist);
addCustomGeneratorTopicBtn.addEventListener("click", addCustomGeneratorTopic);
themeToggleBtn.addEventListener("click", toggleThemeMode);
translateCustomBtn.addEventListener("click", translateCustomSentence);
startChatBtn.addEventListener("click", startChat);
startCallBtn.addEventListener("click", startCallMode);
endCallBtn.addEventListener("click", () => stopCallMode());
interruptCallBtn.addEventListener("click", interruptCallReply);
saveConversationBtn.addEventListener("click", saveCurrentConversation);
downloadChatPdfBtn.addEventListener("click", downloadCorrectedConversationPdf);
downloadChatMp3sBtn.addEventListener("click", downloadCorrectedConversationMp3s);
playFullChatBtn.addEventListener("click", playFullConversation);
stopFullChatBtn.addEventListener("click", () => stopFullConversationPlayback());
previousConversationTurnBtn.addEventListener("click", () => skipFullConversationTurn("previous"));
pauseConversationBtn.addEventListener("click", toggleFullConversationPause);
nextConversationTurnBtn.addEventListener("click", () => skipFullConversationTurn("next"));
addFullChatToPlaylistBtn.addEventListener("click", addFullConversationToPlaylist);
playConversationPlaylistBtn.addEventListener("click", playConversationPlaylist);
stopConversationPlaylistBtn.addEventListener("click", () => stopFullConversationPlayback());
fullConversationAudioPlayer.addEventListener("timeupdate", updateConversationPlaybackControls);
fullConversationAudioPlayer.addEventListener("loadedmetadata", updateConversationPlaybackControls);
fullConversationAudioPlayer.addEventListener("play", () => {
  fullConversationPlayback.isPaused = false;
  updateConversationPlaybackControls();
});
fullConversationAudioPlayer.addEventListener("pause", () => {
  if (fullConversationPlayback.isPlaying) {
    fullConversationPlayback.isPaused = true;
    updateConversationPlaybackControls();
  }
});
fullConversationAudioPlayer.addEventListener("ended", () => {
  stopFullConversationPlayback("Full conversation finished.");
});
micChatBtn.addEventListener("click", toggleChatMic);
sendChatBtn.addEventListener("click", sendChatMessage);
clearChatBtn.addEventListener("click", clearChat);
speakChatReplyBtn.addEventListener("click", () => {
  if (!lastCoachReply) {
    alert("Start a chat first.");
    return;
  }

  playSpanishAudio(lastCoachReply.spanish, "Last chat reply");
});
useChatReplyBtn.addEventListener("click", useLastChatReplyAsSentence);
saveChatReplyBtn.addEventListener("click", () => {
  const chatSentence = getBestChatSentence();
  saveSentenceToFavourites(chatSentence, "Start a chat first.");

  if (chatSentence && lastCoachReply.correctionSpanish) {
    chatStatus.textContent = "The more native version was saved to favourites.";
  }
});
addChatReplyToPlaylistBtn.addEventListener("click", () => {
  const chatSentence = getBestChatSentence();

  if (!chatSentence) {
    alert("Start a chat first.");
    return;
  }

  addSentenceToSelectedPlaylist(chatSentence);

  if (lastCoachReply.correctionSpanish) {
    chatStatus.textContent = "The more native version was added to the playlist.";
  }
});
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
saveCustomBtn.addEventListener("click", () => {
  saveSentenceToFavourites(latestCustomSentence, "Translate a custom sentence first.");
});
playRadioBtn.addEventListener("click", startRadioMode);
stopRadioBtn.addEventListener("click", stopRadioMode);
deletePlaylistBtn.addEventListener("click", deleteSelectedPlaylist);
exportPracticeBtn.addEventListener("click", exportPracticeBackup);
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
sentenceDisplayModeSelect.addEventListener("change", () => {
  sentenceDisplayMode = sentenceDisplayModeSelect.value;
  saveSentenceDisplayPreference();

  if (currentSentence) {
    applySentenceDisplayPreference();
    updateTranslationDisplay();
    updateQuizControls();
  }

  showStatusMessage(`New sentences will use: ${sentenceDisplayModeSelect.options[sentenceDisplayModeSelect.selectedIndex].text}.`);
});
customGeneratorTopicInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addCustomGeneratorTopic();
  }
});
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendChatMessage();
  }
});

// These functions run as soon as the page loads.
loadVoices();
applyThemePreference();
renderPracticeStats();
renderGeneratorTopics();
setupChatRecognition();
setupCallRecognition();
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";

    if (isLocalhost) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) =>
          Promise.all(registrations.map((registration) => registration.unregister()))
        )
        .catch(() => {
          console.warn("Could not unregister local service workers.");
        });
      return;
    }

    navigator.serviceWorker.register("service-worker.js?v=11").catch(() => {
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
pageTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showPage(tab.dataset.pageTarget);
  });
});
renderFavourites();
renderRecallSentences();
renderPlaylists();
renderChatMessages();
renderSavedConversations();
renderConversationPlaylist();
updateChatTimerDisplay();
if (chatStartedAt) {
  startChatTimer(false);
}
renderQuizScore();
updateQuizControls();
aiModeCheckbox.checked = aiModeEnabled;
sentenceDisplayModeSelect.value = sentenceDisplayMode;
updateAiModeNote();
showPage(activePageId);
