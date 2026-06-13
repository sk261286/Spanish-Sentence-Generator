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
const appEyebrow = document.getElementById("app-eyebrow");
const appTitle = document.getElementById("app-title");
const appIntro = document.getElementById("app-intro");
const firstRunSetup = document.getElementById("first-run-setup");
const finishSetupBtn = document.getElementById("finish-setup-btn");
const setupLanguageButtons = document.querySelectorAll("[data-setup-language]");
const setupPresetButtons = document.querySelectorAll("[data-setup-preset]");
const setupFirstPlaylistInput = document.getElementById("setup-first-playlist-input");
const installBanner = document.getElementById("install-banner");
const installBannerText = document.getElementById("install-banner-text");
const installAppBtn = document.getElementById("install-app-btn");
const dismissInstallBtn = document.getElementById("dismiss-install-btn");
const mainPhoneTestBtn = document.getElementById("main-phone-test-btn");
const mobileContinueChatBtn = document.getElementById("mobile-continue-chat-btn");
const mobileStartCallBtn = document.getElementById("mobile-start-call-btn");
const mobileGenerateSetBtn = document.getElementById("mobile-generate-set-btn");
const mobileReviewTodayBtn = document.getElementById("mobile-review-today-btn");
const mobileOpenPlaylistBtn = document.getElementById("mobile-open-playlist-btn");
const homeContinueCard = document.getElementById("home-continue-card");
const homeContinueTitle = document.getElementById("home-continue-title");
const homeContinueDetail = document.getElementById("home-continue-detail");
const homeContinuePrimaryBtn = document.getElementById("home-continue-primary-btn");
const homeContinueSecondaryBtn = document.getElementById("home-continue-secondary-btn");
const lessonPackButtons = document.querySelectorAll("[data-lesson-pack]");
const appModeToggleBtn = document.getElementById("app-mode-toggle-btn");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const targetLanguageSelect = document.getElementById("target-language-select");
const learningDirectionNote = document.getElementById("learning-direction-note");
const spanishVoiceSelect = document.getElementById("spanish-voice-select");
const testVoiceBtn = document.getElementById("test-voice-btn");
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
const batchCountSelect = document.getElementById("batch-count");
const generateBatchBtn = document.getElementById("generate-batch-btn");
const downloadBatchPdfBtn = document.getElementById("download-batch-pdf-btn");
const downloadBatchMp3Btn = document.getElementById("download-batch-mp3-btn");
const saveBatchFavouritesBtn = document.getElementById("save-batch-favourites-btn");
const openBatchFocusBtn = document.getElementById("open-batch-focus-btn");
const addBatchPlaylistBtn = document.getElementById("add-batch-playlist-btn");
const batchStatus = document.getElementById("batch-status");
const batchList = document.getElementById("batch-list");
const batchFocusPanel = document.getElementById("batch-focus-panel");
const batchFocusProgress = document.getElementById("batch-focus-progress");
const batchFocusTitle = document.getElementById("batch-focus-title");
const batchFocusTranslation = document.getElementById("batch-focus-translation");
const batchFocusPrevBtn = document.getElementById("batch-focus-prev-btn");
const batchFocusPlayBtn = document.getElementById("batch-focus-play-btn");
const batchFocusNextBtn = document.getElementById("batch-focus-next-btn");
const batchFocusCloseBtn = document.getElementById("batch-focus-close-btn");
const savedBatchList = document.getElementById("saved-batch-list");
const savedBatchEmpty = document.getElementById("saved-batch-empty");
const librarySearchInput = document.getElementById("library-search-input");
const batchMp3Panel = document.getElementById("batch-mp3-panel");
const batchMp3Player = document.getElementById("batch-mp3-player");
const batchMp3Link = document.getElementById("batch-mp3-link");
const batchSpeedSelect = document.getElementById("batch-speed-select");
const batchLoopBtn = document.getElementById("batch-loop-btn");
const speakSpanishBtn = document.getElementById("speak-spanish-btn");
const speakEnglishBtn = document.getElementById("speak-english-btn");
const tooEasyBtn = document.getElementById("too-easy-btn");
const levelRightBtn = document.getElementById("level-right-btn");
const tooHardBtn = document.getElementById("too-hard-btn");
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
const wordRecallList = document.getElementById("word-recall-list");
const wordRecallSummary = document.getElementById("word-recall-summary");
const wordLanguageSummary = document.getElementById("word-language-summary");
const wordRecallEmptyMessage = document.getElementById("word-recall-empty-message");
const wordFilterButtons = document.querySelectorAll("[data-word-filter]");
const wordDetailPanel = document.getElementById("word-detail-panel");
const wordDetailTitle = document.getElementById("word-detail-title");
const wordDetailMeaning = document.getElementById("word-detail-meaning");
const wordDetailExample = document.getElementById("word-detail-example");
const wordDetailHistory = document.getElementById("word-detail-history");
const wordDetailPlayBtn = document.getElementById("word-detail-play-btn");
const wordDetailExamplesBtn = document.getElementById("word-detail-examples-btn");
const wordDetailReviewBtn = document.getElementById("word-detail-review-btn");
const wordDetailExamplesList = document.getElementById("word-detail-examples-list");
const closeWordDetailBtn = document.getElementById("close-word-detail-btn");
const dailyReviewSummary = document.getElementById("daily-review-summary");
const todayWordsDue = document.getElementById("today-words-due");
const todayRecallDue = document.getElementById("today-recall-due");
const todaySavedBatches = document.getElementById("today-saved-batches");
const todayMistakePatterns = document.getElementById("today-mistake-patterns");
const todayStreakCount = document.getElementById("today-streak-count");
const todayWeekGenerated = document.getElementById("today-week-generated");
const todayWeekSpoken = document.getElementById("today-week-spoken");
const todayWeekSaved = document.getElementById("today-week-saved");
const todayCallMinutes = document.getElementById("today-call-minutes");
const todaySuggestion = document.getElementById("today-suggestion");
const languageDashboardGrid = document.getElementById("language-dashboard-grid");
const mistakePatternList = document.getElementById("mistake-pattern-list");
const startMistakeReviewBtn = document.getElementById("start-mistake-review-btn");
const dailyReviewCard = document.getElementById("daily-review-card");
const buildDailyReviewBtn = document.getElementById("build-daily-review-btn");
const buildSmartReviewBtn = document.getElementById("build-smart-review-btn");
const startDailyReviewBtn = document.getElementById("start-daily-review-btn");
const nextDailyReviewBtn = document.getElementById("next-daily-review-btn");
const playDailyReviewBtn = document.getElementById("play-daily-review-btn");
const playlistFolderSelect = document.getElementById("playlist-folder");
const playlistFolderNameInput = document.getElementById("playlist-folder-name");
const playlistNameInput = document.getElementById("playlist-name");
const playlistSelect = document.getElementById("playlist-select");
const radioModeSelect = document.getElementById("radio-mode");
const shadowGapSelect = document.getElementById("shadow-gap");
const createPlaylistFolderBtn = document.getElementById("create-playlist-folder-btn");
const createPlaylistBtn = document.getElementById("create-playlist-btn");
const addCurrentToPlaylistBtn = document.getElementById("add-current-to-playlist-btn");
const playRadioBtn = document.getElementById("play-radio-btn");
const stopRadioBtn = document.getElementById("stop-radio-btn");
const previousRadioBtn = document.getElementById("previous-radio-btn");
const pauseRadioBtn = document.getElementById("pause-radio-btn");
const nextRadioBtn = document.getElementById("next-radio-btn");
const radioPlayerControls = document.getElementById("radio-player-controls");
const radioPlaybackProgress = document.getElementById("radio-playback-progress");
const radioSpeedSelect = document.getElementById("radio-speed-select");
const radioLoopBtn = document.getElementById("radio-loop-btn");
const downloadPlaylistMp3Btn = document.getElementById("download-playlist-mp3-btn");
const deletePlaylistBtn = document.getElementById("delete-playlist-btn");
const exportPracticeBtn = document.getElementById("export-practice-btn");
const restoreBackupBtn = document.getElementById("restore-backup-btn");
const restoreBackupInput = document.getElementById("restore-backup-input");
const radioStatus = document.getElementById("radio-status");
const playlistSentences = document.getElementById("playlist-sentences");
const playlistEmptyMessage = document.getElementById("playlist-empty-message");
const playlistMp3Panel = document.getElementById("playlist-mp3-panel");
const playlistMp3Player = document.getElementById("playlist-mp3-player");
const playlistMp3Link = document.getElementById("playlist-mp3-link");
const playlistSpeedSelect = document.getElementById("playlist-speed-select");
const playlistLoopBtn = document.getElementById("playlist-loop-btn");
const customEnglishInput = document.getElementById("custom-english-input");
const customEnglishLabel = document.querySelector('label[for="custom-english-input"]');
const customToneLabel = document.getElementById("custom-tone-label");
const customToneSelect = document.getElementById("custom-tone");
const customTopicSelect = document.getElementById("custom-topic");
const customDifficultySelect = document.getElementById("custom-difficulty");
const translateCustomBtn = document.getElementById("translate-custom-btn");
const playCustomSentenceBtn = document.getElementById("play-custom-sentence-btn");
const saveCustomBtn = document.getElementById("save-custom-btn");
const addCustomToPlaylistBtn = document.getElementById("add-custom-to-playlist-btn");
const customResultCard = document.getElementById("custom-result-card");
const customSpanishOutput = document.getElementById("custom-spanish-output");
const customEnglishOutput = document.getElementById("custom-english-output");
const customAiNote = document.getElementById("custom-ai-note");
const customStatus = document.getElementById("custom-status");
const dialogueTopicInput = document.getElementById("dialogue-topic");
const dialogueSettingSelect = document.getElementById("dialogue-setting");
const dialogueLevelSelect = document.getElementById("dialogue-level");
const dialogueToneSelect = document.getElementById("dialogue-tone");
const dialogueTurnsSelect = document.getElementById("dialogue-turns");
const generateDialogueBtn = document.getElementById("generate-dialogue-btn");
const saveDialogueBtn = document.getElementById("save-dialogue-btn");
const downloadDialoguePdfBtn = document.getElementById("download-dialogue-pdf-btn");
const playDialogueBtn = document.getElementById("play-dialogue-btn");
const stopDialogueBtn = document.getElementById("stop-dialogue-btn");
const downloadDialogueMp3Btn = document.getElementById("download-dialogue-mp3-btn");
const clearDialogueBtn = document.getElementById("clear-dialogue-btn");
const dialoguePlaybackControls = document.getElementById("dialogue-playback-controls");
const previousDialogueBtn = document.getElementById("previous-dialogue-btn");
const pauseDialogueBtn = document.getElementById("pause-dialogue-btn");
const nextDialogueBtn = document.getElementById("next-dialogue-btn");
const dialoguePlaybackProgress = document.getElementById("dialogue-playback-progress");
const dialogueAudioPlayer = document.getElementById("dialogue-audio-player");
const dialogueMp3Link = document.getElementById("dialogue-mp3-link");
const dialogueSpeedSelect = document.getElementById("dialogue-speed-select");
const dialogueLoopBtn = document.getElementById("dialogue-loop-btn");
const dialogueStatus = document.getElementById("dialogue-status");
const dialogueResult = document.getElementById("dialogue-result");
const dialogueTitle = document.getElementById("dialogue-title");
const savedDialoguesList = document.getElementById("saved-dialogues-list");
const savedDialoguesEmpty = document.getElementById("saved-dialogues-empty");
const deleteOldDialoguesBtn = document.getElementById("delete-old-dialogues-btn");
const youtubeUrlInput = document.getElementById("youtube-url-input");
const videoTranscriptLanguageSelect = document.getElementById("video-transcript-language");
const loadYoutubeVideoBtn = document.getElementById("load-youtube-video-btn");
const importYoutubeCaptionsBtn = document.getElementById("import-youtube-captions-btn");
const usePastedTranscriptBtn = document.getElementById("use-pasted-transcript-btn");
const generateVideoDialogueBtn = document.getElementById("generate-video-dialogue-btn");
const saveVideoDialogueBtn = document.getElementById("save-video-dialogue-btn");
const playVideoDialogueBtn = document.getElementById("play-video-dialogue-btn");
const youtubePlayerElement = document.getElementById("youtube-player");
const manualTranscriptInput = document.getElementById("manual-transcript-input");
const videoStatus = document.getElementById("video-status");
const videoTranscriptList = document.getElementById("video-transcript-list");
const videoDialogueResult = document.getElementById("video-dialogue-result");
const videoSelectedLine = document.getElementById("video-selected-line");
const videoLineTranslation = document.getElementById("video-line-translation");
const videoWordHint = document.getElementById("video-word-hint");
const chatTitle = document.getElementById("chat-title");
const chatNameInput = document.getElementById("chat-name-input");
const chatTopicSelect = document.getElementById("chat-topic");
const debateTopicField = document.getElementById("debate-topic-field");
const debateTopicInput = document.getElementById("debate-topic-input");
const chatToneSelect = document.getElementById("chat-tone");
const chatScenarioSelect = document.getElementById("chat-scenario");
const chatPersonalitySelect = document.getElementById("chat-personality");
const chatGoalSelect = document.getElementById("chat-goal");
const callPauseModeSelect = document.getElementById("call-pause-mode");
const startChatBtn = document.getElementById("start-chat-btn");
const startCallBtn = document.getElementById("start-call-btn");
const endCallBtn = document.getElementById("end-call-btn");
const interruptCallBtn = document.getElementById("interrupt-call-btn");
const callFocusPanel = document.getElementById("call-focus-panel");
const callFocusTitle = document.getElementById("call-focus-title");
const callFocusTimer = document.getElementById("call-focus-timer");
const callFocusStatus = document.getElementById("call-focus-status");
const callQualityIndicator = document.getElementById("call-quality-indicator");
const focusEndCallBtn = document.getElementById("focus-end-call-btn");
const focusInterruptCallBtn = document.getElementById("focus-interrupt-call-btn");
const callSummaryPanel = document.getElementById("call-summary-panel");
const callSummaryTitle = document.getElementById("call-summary-title");
const callSummaryDuration = document.getElementById("call-summary-duration");
const callSummaryTurns = document.getElementById("call-summary-turns");
const callSummaryCorrections = document.getElementById("call-summary-corrections");
const callSummaryScore = document.getElementById("call-summary-score");
const callSummaryPhrases = document.getElementById("call-summary-phrases");
const callSummaryNextStep = document.getElementById("call-summary-next-step");
const callSummaryReviewBtn = document.getElementById("call-summary-review-btn");
const callSummarySaveBtn = document.getElementById("call-summary-save-btn");
const speakChatReplyBtn = document.getElementById("speak-chat-reply-btn");
const useChatReplyBtn = document.getElementById("use-chat-reply-btn");
const saveChatReplyBtn = document.getElementById("save-chat-reply-btn");
const addChatReplyToPlaylistBtn = document.getElementById("add-chat-reply-to-playlist-btn");
const chatAutoSpeakCheckbox = document.getElementById("chat-auto-speak");
const chatLanguageBadge = document.getElementById("chat-language-badge");
const chatTimer = document.getElementById("chat-timer");
const saveConversationBtn = document.getElementById("save-conversation-btn");
const downloadChatPdfBtn = document.getElementById("download-chat-pdf-btn");
const downloadChatMp3sBtn = document.getElementById("download-chat-mp3s-btn");
const playFullChatBtn = document.getElementById("play-full-chat-btn");
const stopFullChatBtn = document.getElementById("stop-full-chat-btn");
const reviewConversationBtn = document.getElementById("review-conversation-btn");
const deepReviewConversationBtn = document.getElementById("deep-review-conversation-btn");
const addFullChatToPlaylistBtn = document.getElementById("add-full-chat-to-playlist-btn");
const conversationPlaybackControls = document.getElementById("conversation-playback-controls");
const previousConversationTurnBtn = document.getElementById("previous-conversation-turn-btn");
const pauseConversationBtn = document.getElementById("pause-conversation-btn");
const nextConversationTurnBtn = document.getElementById("next-conversation-turn-btn");
const conversationPlaybackProgress = document.getElementById("conversation-playback-progress");
const fullConversationAudioPlayer = document.getElementById("full-conversation-audio-player");
const conversationMp3Link = document.getElementById("conversation-mp3-link");
const conversationSpeedSelect = document.getElementById("conversation-speed-select");
const conversationLoopBtn = document.getElementById("conversation-loop-btn");
const playConversationPlaylistBtn = document.getElementById("play-conversation-playlist-btn");
const stopConversationPlaylistBtn = document.getElementById("stop-conversation-playlist-btn");
const conversationPlaylistList = document.getElementById("conversation-playlist-list");
const conversationPlaylistEmpty = document.getElementById("conversation-playlist-empty");
const savedConversationsList = document.getElementById("saved-conversations-list");
const savedConversationsEmpty = document.getElementById("saved-conversations-empty");
const conversationLibrarySearchInput = document.getElementById("conversation-library-search-input");
const conversationFolderSelect = document.getElementById("conversation-folder-select");
const conversationFolderNameInput = document.getElementById("conversation-folder-name");
const createConversationFolderBtn = document.getElementById("create-conversation-folder-btn");
const conversationReviewPanel = document.getElementById("conversation-review-panel");
const hideConversationReviewBtn = document.getElementById("hide-conversation-review-btn");
const repairConversationLanguageBtn = document.getElementById("repair-conversation-language-btn");
const conversationReviewSummary = document.getElementById("conversation-review-summary");
const conversationReviewList = document.getElementById("conversation-review-list");
const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const micChatBtn = document.getElementById("mic-chat-btn");
const sendChatBtn = document.getElementById("send-chat-btn");
const clearChatBtn = document.getElementById("clear-chat-btn");
const chatStatus = document.getElementById("chat-status");
const chatCard = document.querySelector(".chat-card");
const globalLibrarySearchInput = document.getElementById("global-library-search-input");
const libraryHubGrid = document.getElementById("library-hub-grid");
const libraryTabButtons = document.querySelectorAll("[data-library-filter]");
const pageTabs = document.querySelectorAll(".page-tab");
const navMore = document.querySelector(".nav-more");
const actionMenus = document.querySelectorAll(".action-menu");
const homePageTargetButtons = document.querySelectorAll("[data-home-page-target]");
const appPages = document.querySelectorAll(".app-page");
const runDiagnosticsBtn = document.getElementById("run-diagnostics-btn");
const exportLanguageBtn = document.getElementById("export-language-btn");
const restoreBackupSettingsBtn = document.getElementById("restore-backup-settings-btn");
const diagnosticsList = document.getElementById("diagnostics-list");
const dailyCallGoalInput = document.getElementById("daily-call-goal-input");
const dailySentenceGoalInput = document.getElementById("daily-sentence-goal-input");
const savePracticeGoalsBtn = document.getElementById("save-practice-goals-btn");
const undoToast = document.getElementById("undo-toast");
const undoToastMessage = document.getElementById("undo-toast-message");
const undoActionBtn = document.getElementById("undo-action-btn");
const nowPlayingBar = document.getElementById("now-playing-bar");
const nowPlayingTitle = document.getElementById("now-playing-title");
const nowPlayingDetail = document.getElementById("now-playing-detail");
const nowPlayingStopBtn = document.getElementById("now-playing-stop-btn");
const queueSpeedSelect = document.getElementById("queue-speed-select");
const queueLoopBtn = document.getElementById("queue-loop-btn");
const queuePrevBtn = document.getElementById("queue-prev-btn");
const queueNextBtn = document.getElementById("queue-next-btn");
const queueToggleBtn = document.getElementById("queue-toggle-btn");
const audioQueuePanel = document.getElementById("audio-queue-panel");
const audioQueueList = document.getElementById("audio-queue-list");
const clearAudioQueueBtn = document.getElementById("clear-audio-queue-btn");
const queueCurrentSentenceBtn = document.getElementById("queue-current-sentence-btn");
const queueSelectedPlaylistBtn = document.getElementById("queue-selected-playlist-btn");
const mobileBottomNavButtons = document.querySelectorAll("[data-mobile-nav-page]");

// Keep the chat action labels aligned with the "best version" behavior.
if (useChatReplyBtn) {
  useChatReplyBtn.textContent = "Use best version as sentence";
}

if (addChatReplyToPlaylistBtn) {
  addChatReplyToPlaylistBtn.textContent = "Add best version to playlist";
}

// These variables keep track of the app's current state.
let currentSentence = null;
let currentBatchSentences = [];
let batchFocusIndex = 0;
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
let callTurnRequestId = 0;
let callStartedAt = 0;
let callElapsedSeconds = 0;
let callTimerInterval = null;
let latestCallTranscript = "";
let callQualityState = "waiting";
let callMediaRecorder = null;
let callMediaStream = null;
let callAudioChunks = [];
let callAudioContext = null;
let callAnalyser = null;
let callSilenceFrame = null;
let callHeardSpeech = false;
let callListenStartedAt = 0;
let callBargeStream = null;
let callBargeAudioContext = null;
let callBargeAnalyser = null;
let callBargeFrame = null;
let callBargeStartedAt = 0;
let callBargeSpeechStartedAt = 0;
let latestMicTranscript = "";
let chatMediaRecorder = null;
let chatMediaStream = null;
let chatAudioChunks = [];
let deferredInstallPrompt = null;
let installHintShown = false;
let aiModeEnabled = JSON.parse(localStorage.getItem("spanishSentenceAiMode")) || false;
let darkModeEnabled = JSON.parse(localStorage.getItem("spanishSentenceDarkMode")) || false;
let sentenceDisplayMode = localStorage.getItem("spanishSentenceDisplayMode") || "show-translation";
let targetLanguage = localStorage.getItem("spanishSentenceTargetLanguage") || "spanish";
let languageVoiceChoices = JSON.parse(localStorage.getItem("spanishSentenceVoiceChoicesByLanguage")) || {};
let spanishVoiceChoice = languageVoiceChoices[targetLanguage] || localStorage.getItem("spanishSentenceVoiceChoice") || "primary";
let difficultyCalibration = JSON.parse(localStorage.getItem("spanishSentenceDifficultyCalibration")) || {};
let mistakePatterns = JSON.parse(localStorage.getItem("spanishSentenceMistakePatterns")) || [];
let callPauseMode = localStorage.getItem("spanishSentenceCallPauseMode") || "normal";
let aiCooldownUntil = 0;
let activePageId = localStorage.getItem("spanishSentenceActivePage") || "home-page";
let spanishAudioPlayer = null;
let currentSpanishAudioUrl = "";
let currentSpanishMediaSource = null;
let currentSpanishStreamReader = null;
let spanishAudioEndedCallback = null;
let spanishAudioPlaybackId = 0;
let batchMp3ObjectUrl = "";
let playlistMp3ObjectUrl = "";
let dialogueMp3ObjectUrl = "";
let wordHintRequestId = 0;
let activeWordActionPanel = null;
let activePhraseActionPanel = null;
let aiWordHintCache = JSON.parse(localStorage.getItem("spanishSentenceAiWordHints")) || {};
let aiWordDetailCache = JSON.parse(localStorage.getItem("languageCoachAiWordDetails")) || {};
let chatTimerInterval = null;
let fullConversationPlayback = {
  isPlaying: false,
  isPaused: false,
  index: 0,
  turns: [],
  playbackId: 0,
  audioUrl: ""
};
let lastCallSummaryChatHistory = [];
const SPANISH_AUDIO_CACHE_VERSION = "v5";

const targetLanguageProfiles = {
  spanish: {
    label: "Spanish",
    translationLabel: "English",
    sourceLabel: "English",
    translationSpeechCode: "en-GB",
    flagClass: "flag-spanish",
    phrase: "natural Spanish from Spain",
    speechCode: "es-ES",
    example: "I am going to Madrid tomorrow.",
    voiceTest: "Hola, esta es la voz que usaré para practicar contigo."
  },
  english: {
    label: "English",
    translationLabel: "Spanish",
    sourceLabel: "Spanish",
    translationSpeechCode: "es-ES",
    flagClass: "flag-english",
    phrase: "natural British English",
    speechCode: "en-GB",
    example: "Manana voy a Londres.",
    voiceTest: "Hi, this is the voice I will use to practise English with you."
  },
  french: {
    label: "French",
    translationLabel: "English",
    sourceLabel: "English",
    translationSpeechCode: "en-GB",
    flagClass: "flag-french",
    phrase: "natural French from France",
    speechCode: "fr-FR",
    example: "I am going to Paris tomorrow.",
    voiceTest: "Bonjour, c'est la voix que j'utiliserai pour pratiquer avec toi."
  },
  italian: {
    label: "Italian",
    translationLabel: "English",
    sourceLabel: "English",
    translationSpeechCode: "en-GB",
    flagClass: "flag-italian",
    phrase: "natural Italian from Italy",
    speechCode: "it-IT",
    example: "I am going to Rome tomorrow.",
    voiceTest: "Ciao, questa è la voce che userò per fare pratica con te."
  }
};

// We load saved data from localStorage when the page opens.
let favourites = JSON.parse(localStorage.getItem("spanishSentenceFavourites")) || [];
let recallSentences = JSON.parse(localStorage.getItem("spanishSentenceRecall")) || [];
let savedWords = JSON.parse(localStorage.getItem("spanishSentenceSavedWords")) || [];
let savedBatches = JSON.parse(localStorage.getItem("spanishSentenceSavedBatches")) || [];
let quizScore = JSON.parse(localStorage.getItem("spanishSentenceQuizScore")) || {
  correct: 0,
  wrong: 0
};
let playlists = JSON.parse(localStorage.getItem("spanishSentencePlaylists")) || [];
let playlistFolders = JSON.parse(localStorage.getItem("spanishSentencePlaylistFolders")) || ["General", "Daily life", "Chat corrections", "Generated batches", "Dialogues", "Weak sentences"];
let selectedPlaylistFolder = localStorage.getItem("spanishSentenceSelectedPlaylistFolder") || "all";
let dailyReviewQueue = [];
let dailyReviewIndex = 0;
let radioState = {
  isPlaying: false,
  isPaused: false,
  playlistId: "",
  mode: "repeat-one",
  index: 0,
  shadowTimeoutId: null,
  recoveryTimeoutId: null,
  playbackToken: 0
};
let latestCustomSentence = null;
let currentDialogue = JSON.parse(localStorage.getItem("spanishSentenceCurrentDialogue")) || null;
let savedDialogues = JSON.parse(localStorage.getItem("spanishSentenceSavedDialogues")) || [];
let dialoguePlayback = {
  isPlaying: false,
  audioUrl: ""
};
let youtubePlayer = null;
let youtubeApiReadyPromise = null;
let currentVideoId = "";
let videoTranscriptLines = [];
let activeVideoLineIndex = -1;
let videoSyncInterval = null;
let videoLineTranslationCache = {};
let videoWordHintCache = {};
let lastCoachReply = null;
let chatHistory = loadStoredChatHistory(targetLanguage);
let savedConversations = JSON.parse(localStorage.getItem("spanishSentenceSavedConversations")) || [];
let conversationFolders = JSON.parse(localStorage.getItem("spanishSentenceConversationFolders")) || ["General", "Daily life", "Calls", "Grammar practice"];
let selectedConversationFolder = localStorage.getItem("spanishSentenceSelectedConversationFolder") || "all";
let conversationPlaylist = JSON.parse(localStorage.getItem("spanishSentenceConversationPlaylist")) || [];
let libraryFilter = localStorage.getItem("spanishSentenceLibraryFilter") || "all";
let audioQueue = [];
let audioQueueIndex = -1;
let isAudioQueuePlaying = false;
let activeConversationId = localStorage.getItem(getChatStorageKey("spanishSentenceActiveConversationId")) || "";
let activeChatTitle = localStorage.getItem(getChatStorageKey("spanishSentenceChatTitle")) || "";
let chatStartedAt = Number(localStorage.getItem(getChatStorageKey("spanishSentenceChatStartedAt"))) || 0;
let chatAccumulatedSeconds = Number(localStorage.getItem(getChatStorageKey("spanishSentenceChatAccumulatedSeconds"))) || 0;
let customGeneratorTopics = JSON.parse(localStorage.getItem("spanishSentenceCustomGeneratorTopics")) || [];
let practiceStats = JSON.parse(localStorage.getItem("spanishSentencePracticeStats")) || null;
let practiceHistory = JSON.parse(localStorage.getItem("spanishSentencePracticeHistory")) || {};
let practiceGoals = JSON.parse(localStorage.getItem("spanishSentencePracticeGoals")) || { callMinutes: 10, sentences: 20 };
let wordFilterMode = localStorage.getItem("spanishSentenceWordFilterMode") || "all";
let appDisplayMode = localStorage.getItem("spanishSentenceAppDisplayMode") || "simple";
let activeWordDetailId = "";
let librarySearchText = "";
let homeContinuePrimaryAction = null;
let undoAction = null;
let undoTimer = null;

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

function addDaysToDateKey(dateKey, offsetDays) {
  const date = new Date(`${dateKey}T00:00:00`);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

// This helper keeps daily practice stats fresh.
function getCurrentPracticeStats() {
  const todayKey = getTodayKey();

  if (!practiceStats || practiceStats.date !== todayKey) {
    practiceStats = {
      date: todayKey,
      generated: 0,
      spoken: 0,
      saved: 0,
      callSeconds: 0
    };
  }

  return practiceStats;
}

function savePracticeGoals() {
  practiceGoals = {
    callMinutes: Math.max(0, Number(dailyCallGoalInput?.value || 0) || 0),
    sentences: Math.max(0, Number(dailySentenceGoalInput?.value || 0) || 0)
  };
  localStorage.setItem("spanishSentencePracticeGoals", JSON.stringify(practiceGoals));
  renderPracticeStats();
  renderTodayDashboard();
  showStatusMessage("Practice goals saved.");
}

// This helper saves the daily practice stats.
function savePracticeStats() {
  const stats = getCurrentPracticeStats();
  localStorage.setItem("spanishSentencePracticeStats", JSON.stringify(stats));
  practiceHistory[stats.date] = { ...stats };
  localStorage.setItem("spanishSentencePracticeHistory", JSON.stringify(practiceHistory));
}

function getPracticeStreak() {
  let streak = 0;
  let dateKey = getTodayKey();

  while (practiceHistory[dateKey] && (practiceHistory[dateKey].generated || practiceHistory[dateKey].spoken || practiceHistory[dateKey].saved)) {
    streak += 1;
    dateKey = addDaysToDateKey(dateKey, -1);
  }

  return streak;
}

function getWeeklyPracticeTotals() {
  const totals = { generated: 0, spoken: 0, saved: 0 };

  for (let dayOffset = 0; dayOffset < 7; dayOffset += 1) {
    const dateKey = addDaysToDateKey(getTodayKey(), -dayOffset);
    const dayStats = practiceHistory[dateKey];

    if (dayStats) {
      totals.generated += Number(dayStats.generated || 0);
      totals.spoken += Number(dayStats.spoken || 0);
      totals.saved += Number(dayStats.saved || 0);
    }
  }

  return totals;
}

function saveMistakePatterns() {
  localStorage.setItem("spanishSentenceMistakePatterns", JSON.stringify(mistakePatterns));
}

function getLanguageMistakePatterns() {
  return mistakePatterns.filter((item) => item.targetLanguage === targetLanguage);
}

function getMistakePatternsForLanguage(languageKey) {
  return mistakePatterns.filter((item) => getSavedItemLanguage(item) === languageKey);
}

function rememberMistakePattern(message) {
  if (!message?.correctionSpanish || !message?.spanish || message.correctionSpanish === message.spanish) {
    return;
  }

  const note = message.feedback || "More natural wording";
  const existing = mistakePatterns.find((item) => item.targetLanguage === targetLanguage && item.note === note);

  if (existing) {
    existing.count += 1;
    existing.lastSeenAt = new Date().toISOString();
    existing.example = message.correctionSpanish;
  } else {
    mistakePatterns.push({
      id: createId(),
      targetLanguage,
      note,
      count: 1,
      example: message.correctionSpanish,
      lastSeenAt: new Date().toISOString()
    });
  }

  mistakePatterns = mistakePatterns
    .sort((first, second) => new Date(second.lastSeenAt) - new Date(first.lastSeenAt))
    .slice(0, 80);
  saveMistakePatterns();
  renderTodayDashboard();
}

function applyDifficultyCalibration(value) {
  const order = ["beginner", "intermediate", "advanced"];
  const currentIndex = order.indexOf(difficultySelect.value);

  if (currentIndex === -1) {
    return;
  }

  let nextIndex = currentIndex;
  if (value === "too-easy") {
    nextIndex = Math.min(order.length - 1, currentIndex + 1);
  } else if (value === "too-hard") {
    nextIndex = Math.max(0, currentIndex - 1);
  }

  difficultySelect.value = order[nextIndex];
  difficultyCalibration[targetLanguage] = {
    level: order[nextIndex],
    lastFeedback: value,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem("spanishSentenceDifficultyCalibration", JSON.stringify(difficultyCalibration));
  showStatusMessage(value === "about-right"
    ? `Great. Keeping ${capitalize(order[nextIndex])} for ${getTargetLanguageProfile().label}.`
    : `Adjusted future practice to ${capitalize(order[nextIndex])}.`);
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

  if (dailyCallGoalInput) {
    dailyCallGoalInput.value = practiceGoals.callMinutes;
  }

  if (dailySentenceGoalInput) {
    dailySentenceGoalInput.value = practiceGoals.sentences;
  }

  savePracticeStats();
}

// This helper increments one daily practice counter.
function incrementPracticeStat(statName, amount = 1) {
  const stats = getCurrentPracticeStats();

  if (stats[statName] === undefined) {
    return;
  }

  stats[statName] += amount;
  savePracticeStats();
  renderPracticeStats();
  renderTodayDashboard();
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
    roleplay: "Role play mode",
    debate: "Debate mode",
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
    roleplay: "Run a realistic role play connected to the selected topic. Choose a clear role for yourself and stay in character. Do not explain the exercise; speak as the person in the situation.",
    debate: "Run a friendly debate about the selected topic. Take a clear but reasonable position, challenge the learner gently, ask them to defend their view, and keep it conversational rather than aggressive.",
    opinions: "Ask natural opinion questions and react like a real person, without sounding like a classroom debate.",
    story: "Invite the learner to tell you about their day, then follow up with natural curiosity.",
    "quick-fire": "Ask short, natural questions one at a time, like a lively quick chat."
  };

  return instructions[scenario] || instructions.casual;
}

function getSelectedChatTopic() {
  const presetTopic = chatTopicSelect?.value || "daily life";
  const manualDebateTopic = debateTopicInput?.value.trim() || "";

  if (chatScenarioSelect?.value === "debate" && manualDebateTopic) {
    return manualDebateTopic;
  }

  return presetTopic;
}

function updateDebateTopicVisibility() {
  if (!debateTopicField || !chatScenarioSelect) {
    return;
  }

  const isDebateMode = chatScenarioSelect.value === "debate";
  debateTopicField.classList.toggle("hidden", !isDebateMode);
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

function getChatReplyVariationInstruction(fromCall = false) {
  const variations = [
    "Start with a concrete reaction to one detail the learner mentioned, then continue naturally.",
    "Share a tiny personal-sounding opinion before asking anything.",
    "Build on the learner's idea with one practical detail or example.",
    "Make the reply feel like a casual audio message, with a natural conversational rhythm.",
    "If asking a question, ask it after a useful comment rather than immediately.",
    "Use a different sentence shape from the previous turn and avoid a generic agreement opener."
  ];
  const callVariations = [
    "Keep it spoken-friendly, but include one concrete reaction or detail.",
    "Answer naturally in one smooth spoken turn, without sounding clipped or simplified.",
    "Sound like a real person responding aloud, not a scripted tutor."
  ];
  const pool = fromCall ? variations.concat(callVariations) : variations;

  return pickRandom(pool);
}

function getChatOpeningVariationInstruction(fromCall = false) {
  const variations = [
    "Open with a concrete everyday hook connected to the topic.",
    "Begin like a real person starting a casual chat, not with a generic greeting.",
    "Use a small situational detail to make the conversation feel lived-in.",
    "Start with a natural comment first, then give the learner an easy way to reply."
  ];
  const callVariations = [
    "Make it easy to answer aloud after hearing it once.",
    "Keep the opening spoken-friendly while still sounding natural and specific."
  ];
  const pool = fromCall ? variations.concat(callVariations) : variations;

  return pickRandom(pool);
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

function getChatStorageKey(baseKey, language = targetLanguage) {
  return `${baseKey}_${language}`;
}

function getStoredChatValue(baseKey, language = targetLanguage) {
  const languageValue = localStorage.getItem(getChatStorageKey(baseKey, language));
  if (languageValue !== null) {
    return languageValue;
  }

  return language === targetLanguage ? localStorage.getItem(baseKey) : null;
}

function removeStoredChatValue(baseKey, language = targetLanguage) {
  localStorage.removeItem(getChatStorageKey(baseKey, language));
}

function loadStoredChatHistory(language = targetLanguage) {
  const languageHistory = getStoredChatValue("spanishSentenceChatHistory", language);
  const legacyHistory = localStorage.getItem("spanishSentenceChatHistory");
  const rawHistory = languageHistory || (language === targetLanguage ? legacyHistory : null);

  if (!rawHistory) {
    return [];
  }

  try {
    return JSON.parse(rawHistory) || [];
  } catch (error) {
    return [];
  }
}

// This helper formats a chat timer as mm:ss or hh:mm:ss.
const MAX_REASONABLE_CHAT_SECONDS = 12 * 60 * 60;

function resetRunawayChatTimerIfNeeded() {
  const liveSeconds = chatStartedAt ? Math.floor((Date.now() - chatStartedAt) / 1000) : 0;
  const totalSeconds = chatAccumulatedSeconds + liveSeconds;

  if (totalSeconds <= MAX_REASONABLE_CHAT_SECONDS) {
    return false;
  }

  chatAccumulatedSeconds = 0;
  chatStartedAt = 0;
  saveCurrentChatMeta();
  return true;
}

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
  if (resetRunawayChatTimerIfNeeded()) {
    return 0;
  }

  const liveSeconds = chatStartedAt ? Math.floor((Date.now() - chatStartedAt) / 1000) : 0;
  return chatAccumulatedSeconds + liveSeconds;
}

// This helper keeps the current chat metadata in localStorage.
function saveCurrentChatMeta() {
  localStorage.setItem(getChatStorageKey("spanishSentenceActiveConversationId"), activeConversationId);
  localStorage.setItem(getChatStorageKey("spanishSentenceChatTitle"), activeChatTitle);
  localStorage.setItem(getChatStorageKey("spanishSentenceChatStartedAt"), String(chatStartedAt));
  localStorage.setItem(getChatStorageKey("spanishSentenceChatAccumulatedSeconds"), String(chatAccumulatedSeconds));
}

// This helper saves the current chat log and timer together.
function saveCurrentChatState() {
  localStorage.setItem(getChatStorageKey("spanishSentenceChatHistory"), JSON.stringify(chatHistory));
  if (chatInput) {
    localStorage.setItem(getChatStorageKey("spanishSentenceChatDraft"), chatInput.value || "");
  }
  saveCurrentChatMeta();
}

function loadActiveChatStateForLanguage(language = targetLanguage) {
  chatHistory = loadStoredChatHistory(language);
  activeConversationId = getStoredChatValue("spanishSentenceActiveConversationId", language) || "";
  activeChatTitle = getStoredChatValue("spanishSentenceChatTitle", language) || "";
  chatStartedAt = Number(getStoredChatValue("spanishSentenceChatStartedAt", language)) || 0;
  chatAccumulatedSeconds = Number(getStoredChatValue("spanishSentenceChatAccumulatedSeconds", language)) || 0;
  lastCoachReply = getLastCoachReplyFromHistory(chatHistory);

  if (chatInput) {
    chatInput.value = getStoredChatValue("spanishSentenceChatDraft", language) || "";
  }

  updateChatNameInput();
  renderChatMessages();
  updateChatTimerDisplay();
}

function buildLanguageChatBackup() {
  return Object.keys(targetLanguageProfiles).reduce((backup, language) => {
    backup[language] = {
      activeConversationId: getStoredChatValue("spanishSentenceActiveConversationId", language) || "",
      activeChatTitle: getStoredChatValue("spanishSentenceChatTitle", language) || "",
      chatStartedAt: Number(getStoredChatValue("spanishSentenceChatStartedAt", language)) || 0,
      chatAccumulatedSeconds: language === targetLanguage
        ? getCurrentChatDurationSeconds()
        : Number(getStoredChatValue("spanishSentenceChatAccumulatedSeconds", language)) || 0,
      draft: getStoredChatValue("spanishSentenceChatDraft", language) || "",
      chatHistory: language === targetLanguage ? chatHistory : loadStoredChatHistory(language)
    };

    return backup;
  }, {});
}

// This helper saves vocabulary cards in localStorage.
function saveSavedWords() {
  localStorage.setItem("spanishSentenceSavedWords", JSON.stringify(savedWords));
  renderTodayDashboard();
}

// This helper normalises older or newly saved word cards.
function withWordSchedule(wordCard) {
  const nowText = new Date().toISOString();
  const cleanWord = normaliseWord(wordCard.word || wordCard.displayWord || "");

  return {
    id: wordCard.id || createId(),
    targetLanguage: getSavedItemLanguage(wordCard),
    word: wordCard.word || wordCard.displayWord || "",
    normalisedWord: wordCard.normalisedWord || cleanWord,
    meaning: wordCard.meaning || "",
    exampleSpanish: wordCard.exampleSpanish || "",
    exampleEnglish: wordCard.exampleEnglish || "",
    definitions: Array.isArray(wordCard.definitions) ? wordCard.definitions : [],
    grammar: wordCard.grammar && typeof wordCard.grammar === "object" ? wordCard.grammar : null,
    contextMeaning: wordCard.contextMeaning || wordCard.meaning || "",
    source: wordCard.source || "sentence",
    createdAt: wordCard.createdAt || nowText,
    lastReviewedAt: wordCard.lastReviewedAt || "",
    nextReviewAt: wordCard.nextReviewAt || nowText,
    repetitions: wordCard.repetitions || 0,
    easeFactor: wordCard.easeFactor || 2.5,
    intervalDays: wordCard.intervalDays || 0,
    correct: wordCard.correct || 0,
    wrong: wordCard.wrong || 0
  };
}

// This helper checks whether a saved word is due now.
function isWordDue(wordCard) {
  return !wordCard.nextReviewAt || new Date(wordCard.nextReviewAt).getTime() <= Date.now();
}

// This helper returns the source sentence object for a clicked word.
function getWordExampleFromElement(wordElement) {
  const exampleText = wordElement?.dataset?.example || "";
  const exampleEnglish = wordElement?.dataset?.exampleEnglish || "";

  if (exampleText) {
    return {
      spanish: exampleText,
      english: exampleEnglish
    };
  }

  if (currentSentence?.spanish) {
    return currentSentence;
  }

  return {
    spanish: wordElement?.textContent || "",
    english: ""
  };
}

// This helper saves one clicked word with its example sentence.
function saveWordFromElement(wordElement, source = "sentence") {
  const rawWord = wordElement?.textContent?.trim() || "";
  const cleanWord = normaliseWord(rawWord);
  const meaning = wordElement?.getAttribute("data-translation") || "";

  if (!cleanWord) {
    return false;
  }

  const example = getWordExampleFromElement(wordElement);
  const existingIndex = savedWords.findIndex((item) => {
    const scheduledItem = withWordSchedule(item);
    return scheduledItem.targetLanguage === targetLanguage && scheduledItem.normalisedWord === cleanWord;
  });

  const wordCard = withWordSchedule({
    targetLanguage,
    word: rawWord.replace(/[.,!?¿¡;:]+$/g, ""),
    normalisedWord: cleanWord,
    meaning: meaning && !meaning.toLowerCase().includes("hint") ? meaning : "",
    exampleSpanish: example.spanish || "",
    exampleEnglish: example.english || "",
    source
  });
  const detailCacheKey = getWordDetailCacheKey(cleanWord, example);
  const cachedDetail = aiWordDetailCache[detailCacheKey];

  if (cachedDetail) {
    wordCard.contextMeaning = cachedDetail.contextMeaning || wordCard.meaning;
    wordCard.meaning = wordCard.meaning || cachedDetail.contextMeaning || "";
    wordCard.definitions = Array.isArray(cachedDetail.definitions) ? cachedDetail.definitions : [];
    wordCard.grammar = cachedDetail.grammar && typeof cachedDetail.grammar === "object" ? cachedDetail.grammar : null;
  }

  if (existingIndex >= 0) {
    savedWords[existingIndex] = {
      ...withWordSchedule(savedWords[existingIndex]),
      meaning: wordCard.meaning || withWordSchedule(savedWords[existingIndex]).meaning,
      exampleSpanish: wordCard.exampleSpanish || withWordSchedule(savedWords[existingIndex]).exampleSpanish,
      exampleEnglish: wordCard.exampleEnglish || withWordSchedule(savedWords[existingIndex]).exampleEnglish,
      definitions: wordCard.definitions?.length ? wordCard.definitions : withWordSchedule(savedWords[existingIndex]).definitions,
      grammar: wordCard.grammar || withWordSchedule(savedWords[existingIndex]).grammar,
      contextMeaning: wordCard.contextMeaning || withWordSchedule(savedWords[existingIndex]).contextMeaning
    };
    showStatusMessage(`Updated saved word: ${wordCard.word}.`);
  } else {
    savedWords.push(wordCard);
    showStatusMessage(`Saved word: ${wordCard.word}.`);
  }

  saveSavedWords();
  renderSavedWords();
  return true;
}

function getPhraseExampleFromSelection(container, selectedText) {
  const firstWord = container?.querySelector?.(".spanish-word");

  if (firstWord?.dataset?.example) {
    return {
      spanish: firstWord.dataset.example,
      english: firstWord.dataset.exampleEnglish || ""
    };
  }

  const containerText = container?.innerText || container?.textContent || selectedText;
  return {
    spanish: containerText.trim() || selectedText,
    english: ""
  };
}

async function savePhraseFromSelection(phraseText, example, source = "phrase", button = null) {
  const cleanPhrase = phraseText.trim().replace(/^[.,!?¿¡;:\s]+|[.,!?¿¡;:\s]+$/g, "");
  const normalisedPhrase = normaliseWord(cleanPhrase);

  if (!cleanPhrase || !normalisedPhrase) {
    return false;
  }

  if (button) {
    button.disabled = true;
    button.textContent = "Saving...";
  }

  let detail = null;

  try {
    detail = await fetchWordDetailsForCard(withWordSchedule({
      targetLanguage,
      word: cleanPhrase,
      normalisedWord: normalisedPhrase,
      meaning: "",
      exampleSpanish: example.spanish || cleanPhrase,
      exampleEnglish: example.english || "",
      source
    }));
  } catch (error) {
    detail = null;
  }

  const existingIndex = savedWords.findIndex((item) => {
    const scheduledItem = withWordSchedule(item);
    return scheduledItem.targetLanguage === targetLanguage && scheduledItem.normalisedWord === normalisedPhrase;
  });
  const phraseCard = withWordSchedule({
    targetLanguage,
    word: cleanPhrase,
    normalisedWord: normalisedPhrase,
    meaning: detail?.contextMeaning || "",
    contextMeaning: detail?.contextMeaning || "",
    definitions: detail?.definitions || [],
    grammar: detail?.grammar || { partOfSpeech: "phrase", register: "neutral", usageNote: "Saved phrase" },
    exampleSpanish: example.spanish || cleanPhrase,
    exampleEnglish: example.english || "",
    source
  });

  if (existingIndex >= 0) {
    savedWords[existingIndex] = {
      ...withWordSchedule(savedWords[existingIndex]),
      ...phraseCard,
      id: withWordSchedule(savedWords[existingIndex]).id,
      createdAt: withWordSchedule(savedWords[existingIndex]).createdAt
    };
    showStatusMessage(`Updated saved phrase: ${cleanPhrase}.`);
  } else {
    savedWords.push(phraseCard);
    showStatusMessage(`Saved phrase: ${cleanPhrase}.`);
  }

  saveSavedWords();
  renderSavedWords();

  if (button) {
    button.textContent = "Saved";
  }

  return true;
}

function isPlaceholderWordHint(hint) {
  return !hint || hint === "Hint coming soon" || hint.endsWith("hint not added yet") || hint.startsWith("Loading ");
}

function saveAiWordDetailCache() {
  const cacheEntries = Object.entries(aiWordDetailCache).slice(-80);
  aiWordDetailCache = Object.fromEntries(cacheEntries);
  localStorage.setItem("languageCoachAiWordDetails", JSON.stringify(aiWordDetailCache));
}

function getWordDetailCacheKey(cleanWord, example) {
  return [
    targetLanguage,
    cleanWord,
    normaliseSentenceForSimilarity(example?.spanish || "")
  ].join(":");
}

function renderWordDetailList(parent, titleText, items, renderItem) {
  if (!items.length) {
    return;
  }

  const section = document.createElement("div");
  const title = document.createElement("p");
  const list = document.createElement("ul");

  section.className = "word-detail-section";
  title.className = "word-detail-section-title";
  list.className = "word-detail-list";
  title.textContent = titleText;

  items.forEach((item) => {
    const listItem = document.createElement("li");
    renderItem(listItem, item);
    list.appendChild(listItem);
  });

  section.appendChild(title);
  section.appendChild(list);
  parent.appendChild(section);
}

function renderClickedWordDetails(meaningElement, detail, fallbackHint = "") {
  const language = getTargetLanguageProfile();
  const definitions = Array.isArray(detail?.definitions) ? detail.definitions.slice(0, 6) : [];
  const examples = Array.isArray(detail?.examples) ? detail.examples.slice(0, 4) : [];
  const contextMeaning = detail?.contextMeaning || definitions[0]?.meaning || fallbackHint;

  meaningElement.textContent = "";

  const contextBlock = document.createElement("div");
  const contextLabel = document.createElement("p");
  const contextText = document.createElement("p");
  contextBlock.className = "word-detail-section";
  contextLabel.className = "word-detail-section-title";
  contextText.className = "word-detail-context";
  contextLabel.textContent = "In this sentence";
  contextText.textContent = contextMeaning || `No ${language.translationLabel} meaning returned yet.`;
  contextBlock.appendChild(contextLabel);
  contextBlock.appendChild(contextText);
  meaningElement.appendChild(contextBlock);

  renderWordGrammarSummary(meaningElement, detail?.grammar);

  renderWordDetailList(meaningElement, "Common meanings", definitions, (listItem, item) => {
    const meaning = document.createElement("span");
    const meta = document.createElement("span");
    meaning.textContent = item.meaning || "";
    meta.className = "word-detail-meta";
    meta.textContent = [item.partOfSpeech, item.note].filter(Boolean).join(" - ");
    listItem.appendChild(meaning);
    if (meta.textContent) {
      listItem.appendChild(meta);
    }
  });

  renderWordDetailList(meaningElement, "Examples", examples, (listItem, item) => {
    const targetText = document.createElement("span");
    const supportText = document.createElement("span");
    targetText.className = "word-detail-example-target";
    supportText.className = "word-detail-meta";
    targetText.textContent = item.target || item.spanish || "";
    supportText.textContent = item.english || item.translation || "";
    listItem.appendChild(targetText);
    if (supportText.textContent) {
      listItem.appendChild(supportText);
    }
  });
}

function getWordGrammarFacts(grammar) {
  if (!grammar || typeof grammar !== "object") {
    return [];
  }

  return [
    ["Part of speech", grammar.partOfSpeech],
    ["Infinitive", grammar.infinitive],
    ["Tense", grammar.tense],
    ["Person", grammar.person],
    ["Noun gender", grammar.gender],
    ["Plural", grammar.plural],
    ["Register", grammar.register],
    ["Usage", grammar.usageNote]
  ].filter(([, value]) => value);
}

function renderWordGrammarSummary(parent, grammar) {
  const facts = getWordGrammarFacts(grammar);

  if (!facts.length) {
    return;
  }

  const section = document.createElement("div");
  const title = document.createElement("p");
  const grid = document.createElement("div");

  section.className = "word-detail-section";
  title.className = "word-detail-section-title";
  grid.className = "word-grammar-grid";
  title.textContent = "Grammar";

  facts.forEach(([label, value]) => {
    const chip = document.createElement("span");
    chip.className = "word-grammar-chip";
    chip.textContent = `${label}: ${value}`;
    grid.appendChild(chip);
  });

  section.appendChild(title);
  section.appendChild(grid);
  parent.appendChild(section);
}

async function improveClickedWordHint(wordElement, meaningElement) {
  const currentHint = wordElement.getAttribute("data-translation") || "";
  const example = getWordExampleFromElement(wordElement);
  const cleanWord = normaliseWord(wordElement.textContent || "");
  const displayWord = wordElement.textContent.trim().replace(/[.,!?¿¡;:]+$/g, "");

  if (!cleanWord || !example.spanish) {
    return;
  }

  const cacheKey = getWordDetailCacheKey(cleanWord, example);

  if (aiWordDetailCache[cacheKey]) {
    const cachedDetail = aiWordDetailCache[cacheKey];
    if (cachedDetail.contextMeaning) {
      wordElement.setAttribute("data-translation", cachedDetail.contextMeaning);
    }
    renderClickedWordDetails(meaningElement, cachedDetail, currentHint);
    return;
  }

  meaningElement.textContent = "Loading definitions and examples...";

  try {
    const responseData = await callAiLanguageCoach({
      mode: "word-details",
      targetLanguage,
      spanish: example.spanish,
      english: example.english || "",
      word: displayWord
    });
    const detail = responseData.detail || responseData.wordDetail || {};
    const firstDefinition = Array.isArray(detail.definitions) ? detail.definitions[0] : null;
    const contextMeaning = detail.contextMeaning || firstDefinition?.meaning || "";

    if (!contextMeaning && !Array.isArray(detail.definitions)) {
      meaningElement.textContent = currentHint && !isPlaceholderWordHint(currentHint)
        ? currentHint
        : "No definitions returned yet.";
      return;
    }

  const normalisedDetail = {
      word: detail.word || displayWord,
      contextMeaning,
      definitions: Array.isArray(detail.definitions) ? detail.definitions : [],
      grammar: detail.grammar && typeof detail.grammar === "object" ? detail.grammar : null,
      examples: Array.isArray(detail.examples) ? detail.examples : []
    };

    if (contextMeaning) {
      wordElement.setAttribute("data-translation", contextMeaning);
    }

    aiWordDetailCache[cacheKey] = normalisedDetail;
    saveAiWordDetailCache();
    renderClickedWordDetails(meaningElement, normalisedDetail, currentHint);
  } catch (error) {
    meaningElement.textContent = currentHint && !isPlaceholderWordHint(currentHint)
      ? currentHint
      : "No definitions available yet. You can still save the word with its example.";
  }
}

function closeWordActionPanel() {
  if (activeWordActionPanel) {
    activeWordActionPanel.remove();
    activeWordActionPanel = null;
  }
  document.body.classList.remove("word-panel-open");
}

function closePhraseActionPanel() {
  if (activePhraseActionPanel) {
    activePhraseActionPanel.remove();
    activePhraseActionPanel = null;
  }
}

function showPhraseActionPanel(phraseText, example, source, rect) {
  closePhraseActionPanel();

  const cleanPhrase = phraseText.trim().replace(/^[.,!?¿¡;:\s]+|[.,!?¿¡;:\s]+$/g, "");

  if (!cleanPhrase || cleanPhrase.split(/\s+/).length < 2) {
    return;
  }

  const panel = document.createElement("div");
  const title = document.createElement("p");
  const saveButton = document.createElement("button");
  const closeButton = document.createElement("button");

  panel.className = "phrase-action-panel";
  title.className = "phrase-action-title";
  saveButton.className = "secondary-btn phrase-action-save";
  closeButton.className = "word-action-close";
  saveButton.type = "button";
  closeButton.type = "button";
  title.textContent = cleanPhrase;
  saveButton.textContent = "Save phrase";
  closeButton.textContent = "Close";

  saveButton.addEventListener("click", async () => {
    await savePhraseFromSelection(cleanPhrase, example, source, saveButton);
    setTimeout(closePhraseActionPanel, 500);
  });
  closeButton.addEventListener("click", closePhraseActionPanel);

  panel.appendChild(title);
  panel.appendChild(saveButton);
  panel.appendChild(closeButton);
  document.body.appendChild(panel);
  activePhraseActionPanel = panel;

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const top = Math.max(12, (rect?.top || 0) - panel.offsetHeight - 12);
  const left = Math.min(
    viewportWidth - panel.offsetWidth - 12,
    Math.max(12, (rect?.left || viewportWidth / 2) + ((rect?.width || 0) / 2) - (panel.offsetWidth / 2))
  );

  panel.style.top = `${top}px`;
  panel.style.left = `${left}px`;
}

function showWordActionPanel(wordElement, source = "sentence") {
  const rawWord = wordElement?.textContent?.trim() || "";
  const cleanWord = normaliseWord(rawWord);

  if (!cleanWord) {
    return;
  }

  closeWordActionPanel();

  const hint = wordElement.getAttribute("data-translation") || `${getTargetLanguageProfile().translationLabel} hint not added yet`;
  const example = getWordExampleFromElement(wordElement);
  const alreadySaved = savedWords.some((item) => {
    const scheduledItem = withWordSchedule(item);
    return scheduledItem.targetLanguage === targetLanguage && scheduledItem.normalisedWord === cleanWord;
  });
  const panel = document.createElement("div");
  const header = document.createElement("div");
  const title = document.createElement("p");
  const closeButton = document.createElement("button");
  const meaning = document.createElement("div");
  const exampleText = document.createElement("p");
  const actions = document.createElement("div");
  const saveButton = document.createElement("button");

  panel.className = "word-action-panel";
  header.className = "word-action-header";
  title.className = "word-action-title";
  closeButton.className = "word-action-close";
  meaning.className = "word-action-meaning";
  exampleText.className = "word-action-example";
  actions.className = "word-action-actions";
  saveButton.className = "secondary-btn word-save-btn";
  closeButton.type = "button";
  saveButton.type = "button";

  title.textContent = rawWord.replace(/[.,!?¿¡;:]+$/g, "");
  closeButton.textContent = "Close";
  meaning.textContent = hint;
  exampleText.textContent = example.spanish || "";
  saveButton.textContent = alreadySaved ? "Update saved word" : "Save word";

  closeButton.addEventListener("click", closeWordActionPanel);
  saveButton.addEventListener("click", () => {
    if (saveWordFromElement(wordElement, source)) {
      saveButton.textContent = "Saved";
      setTimeout(closeWordActionPanel, 450);
    }
  });

  header.appendChild(title);
  header.appendChild(closeButton);
  actions.appendChild(saveButton);
  panel.appendChild(header);
  panel.appendChild(meaning);
  if (example.spanish) {
    panel.appendChild(exampleText);
  }
  panel.appendChild(actions);
  document.body.appendChild(panel);
  activeWordActionPanel = panel;
  document.body.classList.add("word-panel-open");
  improveClickedWordHint(wordElement, meaning);
}

document.addEventListener("click", (event) => {
  if (!activeWordActionPanel) {
    if (activePhraseActionPanel && !event.target.closest(".phrase-action-panel")) {
      closePhraseActionPanel();
    }
    return;
  }

  if (event.target.closest(".word-action-panel") || event.target.closest(".spanish-word")) {
    return;
  }

  closeWordActionPanel();
});

function getSelectablePhraseContainer(node) {
  const element = node?.nodeType === Node.TEXT_NODE ? node.parentElement : node;

  if (!element?.closest) {
    return null;
  }

  return element.closest(".chat-text, .batch-spanish, #spanish-sentence, #custom-spanish-output, .word-example, .dialogue-phrases, .video-line-text, .recall-item h4, .playlist-sentence-text");
}

function maybeShowSelectedPhraseAction() {
  const selection = window.getSelection?.();

  if (!selection || selection.isCollapsed || !selection.rangeCount) {
    return;
  }

  const phraseText = selection.toString().trim().replace(/\s+/g, " ");

  if (!phraseText || phraseText.split(/\s+/).length < 2 || phraseText.length > 140) {
    return;
  }

  const range = selection.getRangeAt(0);
  const startContainer = getSelectablePhraseContainer(range.startContainer);
  const endContainer = getSelectablePhraseContainer(range.endContainer);

  if (!startContainer || startContainer !== endContainer) {
    return;
  }

  const example = getPhraseExampleFromSelection(startContainer, phraseText);
  const source = startContainer.closest(".chat-text") ? "chat-phrase"
    : startContainer.closest(".batch-spanish") ? "batch-phrase"
      : startContainer.closest("#custom-spanish-output") ? "translator-phrase"
        : startContainer.closest(".dialogue-phrases") ? "dialogue-phrase"
          : "phrase";
  const rect = range.getBoundingClientRect();

  showPhraseActionPanel(phraseText, example, source, rect);
}

document.addEventListener("mouseup", () => {
  setTimeout(maybeShowSelectedPhraseAction, 40);
});

document.addEventListener("touchend", () => {
  setTimeout(maybeShowSelectedPhraseAction, 180);
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Shift" || event.key.startsWith("Arrow")) {
    setTimeout(maybeShowSelectedPhraseAction, 40);
  }
});

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

function getCurrentCallDurationSeconds() {
  if (!callStartedAt) {
    return callElapsedSeconds;
  }

  return callElapsedSeconds + Math.floor((Date.now() - callStartedAt) / 1000);
}

function updateCallTimerDisplay() {
  if (!callFocusTimer) {
    return;
  }

  callFocusTimer.textContent = `Call time: ${formatChatDuration(getCurrentCallDurationSeconds())}`;
}

function startCallTimer() {
  callElapsedSeconds = 0;
  callStartedAt = Date.now();
  updateCallTimerDisplay();

  if (callTimerInterval) {
    clearInterval(callTimerInterval);
  }

  callTimerInterval = setInterval(updateCallTimerDisplay, 1000);
}

function stopCallTimer() {
  const durationSeconds = getCurrentCallDurationSeconds();
  callElapsedSeconds = durationSeconds;
  callStartedAt = 0;

  if (callTimerInterval) {
    clearInterval(callTimerInterval);
    callTimerInterval = null;
  }

  updateCallTimerDisplay();
  return durationSeconds;
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

// This helper keeps saved chats and downloaded files named by the learner.
function getDefaultChatTitle(date = new Date()) {
  return `${capitalize(chatTopicSelect?.value || "chat")} chat - ${date.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })}`;
}

function getActiveChatTitle(date = new Date()) {
  const typedTitle = (chatNameInput?.value || activeChatTitle || "").trim();
  return typedTitle || getDefaultChatTitle(date);
}

function getConversationExportBaseName(title = getActiveChatTitle()) {
  const languageLabel = getTargetLanguageProfile().label;
  return slugifyFilename(`${languageLabel}-${title}`);
}

function updateChatNameInput() {
  if (chatNameInput) {
    chatNameInput.value = activeChatTitle || "";
  }
}

function updateActiveChatTitleFromInput() {
  activeChatTitle = (chatNameInput?.value || "").trim();
  localStorage.setItem(getChatStorageKey("spanishSentenceChatTitle"), activeChatTitle);
}

// This helper turns a generated dialogue into the same turn shape used by MP3 export.
function getDialogueAudioTurns(dialogue = currentDialogue) {
  if (!dialogue || !Array.isArray(dialogue.lines)) {
    return [];
  }

  return dialogue.lines
    .map((line) => ({
      role: line.speaker || "Speaker",
      spanish: line.spanish || "",
      english: line.english || ""
    }))
    .filter((turn) => turn.spanish);
}

// This helper saves the current dialogue so refreshes do not lose it.
function saveCurrentDialogueState() {
  if (currentDialogue) {
    localStorage.setItem("spanishSentenceCurrentDialogue", JSON.stringify(currentDialogue));
  } else {
    localStorage.removeItem("spanishSentenceCurrentDialogue");
  }
}

// This helper saves generated dialogues.
function saveDialogues() {
  localStorage.setItem("spanishSentenceSavedDialogues", JSON.stringify(savedDialogues));
}

// This function redraws the current generated dialogue.
function renderDialogue() {
  if (!dialogueResult) {
    return;
  }

  dialogueResult.innerHTML = "";
  updateExportActionVisibility();

  if (!currentDialogue || !Array.isArray(currentDialogue.lines) || !currentDialogue.lines.length) {
    dialogueResult.innerHTML = '<p class="empty-message">No dialogue generated yet.</p>';
    return;
  }

  const title = document.createElement("h4");
  const meta = document.createElement("p");
  const list = document.createElement("div");

  title.className = "dialogue-title";
  title.textContent = currentDialogue.title || "Generated dialogue";
  meta.className = "sentence-meta";
  meta.textContent = `${capitalize(currentDialogue.level || "intermediate")} | ${capitalize(currentDialogue.tone || "informal")} | ${currentDialogue.lines.length} lines`;
  list.className = "dialogue-lines";

  currentDialogue.lines.forEach((line, index) => {
    const row = document.createElement("article");
    const textWrapper = document.createElement("div");
    const speaker = document.createElement("p");
    const spanish = document.createElement("p");
    const english = document.createElement("p");
    const actionRow = document.createElement("div");
    const speakButton = document.createElement("button");
    const playlistButton = document.createElement("button");

    row.className = "dialogue-line";
    speaker.className = "chat-role";
    spanish.className = "chat-text";
    english.className = "chat-text chat-english";
    actionRow.className = "actions";
    speaker.textContent = line.speaker || `Speaker ${index + 1}`;
    spanish.appendChild(buildHoverableFragment(line.spanish, {
      spanish: line.spanish,
      english: line.english || ""
    }, "dialogue"));
    english.textContent = line.english || "";
    speakButton.className = "secondary-btn chat-audio-btn";
    speakButton.type = "button";
    speakButton.textContent = "Speak";
    speakButton.addEventListener("click", () => playSpanishAudio(line.spanish, `${currentDialogue.title || "Dialogue"} line ${index + 1}`));
    playlistButton.className = "secondary-btn chat-audio-btn";
    playlistButton.type = "button";
    playlistButton.textContent = "Playlist";
    playlistButton.addEventListener("click", () => {
      choosePlaylistForSentence({
        targetLanguage,
        spanish: line.spanish,
        english: line.english || "",
        difficulty: currentDialogue.level || "intermediate",
        topic: currentDialogue.topic || "dialogue",
        tone: currentDialogue.tone || "informal",
        source: "dialogue",
        generated: true,
        ai: true
      }, (playlist) => {
        dialogueStatus.textContent = `Dialogue line added to "${playlist.name}".`;
      });
    });

    textWrapper.appendChild(speaker);
    textWrapper.appendChild(spanish);
    if (line.english) {
      textWrapper.appendChild(english);
    }
    actionRow.appendChild(speakButton);
    actionRow.appendChild(playlistButton);
    row.appendChild(textWrapper);
    row.appendChild(actionRow);
    list.appendChild(row);
  });

  dialogueResult.appendChild(title);
  dialogueResult.appendChild(meta);
  dialogueResult.appendChild(list);

  if (Array.isArray(currentDialogue.usefulPhrases) && currentDialogue.usefulPhrases.length) {
    const phrasePanel = document.createElement("div");
    const phraseTitle = document.createElement("p");

    phrasePanel.className = "dialogue-phrases";
    phraseTitle.className = "section-label";
    phraseTitle.textContent = "Useful phrases";
    phrasePanel.appendChild(phraseTitle);

    currentDialogue.usefulPhrases.forEach((phrase) => {
      const phraseText = document.createElement("p");
      phraseText.className = "chat-text";
      phraseText.appendChild(buildHoverableFragment(phrase.spanish || "", {
        spanish: phrase.spanish || "",
        english: phrase.english || ""
      }, "dialogue"));
      if (phrase.english) {
        phraseText.appendChild(document.createTextNode(` - ${phrase.english}`));
      }
      if (phrase.note) {
        phraseText.appendChild(document.createTextNode(` (${phrase.note})`));
      }
      phrasePanel.appendChild(phraseText);
    });

    dialogueResult.appendChild(phrasePanel);
  }
}

// This function redraws saved generated dialogues.
function renderSavedDialogues() {
  if (!savedDialoguesList || !savedDialoguesEmpty) {
    return;
  }

  const searchText = (librarySearchInput?.value || "").trim().toLowerCase();
  const languageDialogues = getCurrentLanguageItems(savedDialogues).filter((dialogue) => libraryItemMatchesSearch(dialogue, searchText));
  savedDialoguesList.innerHTML = "";
  savedDialoguesEmpty.style.display = languageDialogues.length ? "none" : "block";

  languageDialogues.forEach((dialogue) => {
    const listItem = document.createElement("li");
    const textWrapper = document.createElement("div");
    const title = document.createElement("h4");
    const meta = document.createElement("p");
    const actionRow = document.createElement("div");
    const loadButton = document.createElement("button");
    const renameButton = document.createElement("button");
    const duplicateButton = document.createElement("button");
    const playlistButton = document.createElement("button");
    const removeButton = document.createElement("button");

    listItem.className = "favourite-item saved-conversation-item";
    actionRow.className = "actions";
    title.textContent = dialogue.title || "Saved dialogue";
    meta.textContent = `${dialogue.lines?.length || 0} lines | ${capitalize(dialogue.level || "intermediate")} | ${new Date(dialogue.savedAt || Date.now()).toLocaleString()}`;
    loadButton.className = "secondary-btn";
    loadButton.type = "button";
    loadButton.textContent = "Load";
    loadButton.addEventListener("click", () => {
      currentDialogue = { ...dialogue, lines: dialogue.lines.map((line) => ({ ...line })) };
      saveCurrentDialogueState();
      renderDialogue();
      dialogueStatus.textContent = "Saved dialogue loaded.";
    });
    renameButton.className = "secondary-btn";
    renameButton.type = "button";
    renameButton.textContent = "Rename";
    renameButton.addEventListener("click", () => renameSavedDialogue(dialogue.id));
    duplicateButton.className = "secondary-btn";
    duplicateButton.type = "button";
    duplicateButton.textContent = "Duplicate";
    duplicateButton.addEventListener("click", () => duplicateSavedDialogue(dialogue.id));
    playlistButton.className = "secondary-btn";
    playlistButton.type = "button";
    playlistButton.textContent = "Add all to playlist";
    playlistButton.addEventListener("click", () => addDialogueToSelectedPlaylist(dialogue));
    removeButton.className = "delete-btn";
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      const removedDialogue = { ...dialogue, lines: (dialogue.lines || []).map((line) => ({ ...line })) };
      savedDialogues = savedDialogues.filter((item) => item.id !== dialogue.id);
      saveDialogues();
      renderSavedDialogues();
      dialogueStatus.textContent = "Saved dialogue removed.";
      showUndo("Saved dialogue removed.", () => {
        savedDialogues.unshift(removedDialogue);
        saveDialogues();
        renderSavedDialogues();
        dialogueStatus.textContent = "Saved dialogue restored.";
      });
    });

    actionRow.appendChild(loadButton);
    actionRow.appendChild(renameButton);
    actionRow.appendChild(duplicateButton);
    actionRow.appendChild(playlistButton);
    actionRow.appendChild(removeButton);
    textWrapper.appendChild(title);
    textWrapper.appendChild(meta);
    textWrapper.appendChild(actionRow);
    listItem.appendChild(textWrapper);
    savedDialoguesList.appendChild(listItem);
  });
}

function renameSavedDialogue(dialogueId) {
  const dialogue = savedDialogues.find((item) => item.id === dialogueId);
  if (!dialogue) {
    return;
  }
  const nextTitle = prompt("New dialogue name", dialogue.title || "Saved dialogue");
  if (!nextTitle?.trim()) {
    return;
  }
  dialogue.title = nextTitle.trim();
  if (currentDialogue?.id === dialogue.id) {
    currentDialogue.title = dialogue.title;
    saveCurrentDialogueState();
    renderDialogue();
  }
  saveDialogues();
  renderSavedDialogues();
  dialogueStatus.textContent = "Dialogue renamed.";
}

function duplicateSavedDialogue(dialogueId) {
  const dialogue = savedDialogues.find((item) => item.id === dialogueId);
  if (!dialogue) {
    return;
  }
  savedDialogues.unshift({
    ...dialogue,
    id: createConversationId(),
    title: `${dialogue.title || "Saved dialogue"} copy`,
    savedAt: new Date().toISOString(),
    lines: (dialogue.lines || []).map((line) => ({ ...line }))
  });
  saveDialogues();
  renderSavedDialogues();
  dialogueStatus.textContent = "Dialogue duplicated.";
}

function addDialogueToSelectedPlaylist(dialogue) {
  const playlist = choosePlaylistFromPrompt();
  if (!playlist) {
    alert("Create or choose a playlist first.");
    return;
  }
  let addedCount = 0;
  (dialogue.lines || []).forEach((line) => {
    if (!line.spanish || playlist.sentences.some((item) => item.spanish === line.spanish)) {
      return;
    }
    playlist.sentences.push(withCurrentLanguage({
      spanish: line.spanish,
      english: line.english || "",
      difficulty: dialogue.level || "intermediate",
      topic: dialogue.topic || "dialogue",
      tone: dialogue.tone || "informal",
      source: "dialogue",
      generated: true,
      ai: true
    }));
    addedCount += 1;
  });
  savePlaylists();
  renderPlaylists();
  dialogueStatus.textContent = `${addedCount} dialogue lines added to "${playlist.name}".`;
}

function deleteOldSavedDialogues() {
  const languageDialogues = getCurrentLanguageItems(savedDialogues);
  if (languageDialogues.length <= 10) {
    dialogueStatus.textContent = "You have 10 or fewer saved dialogues, so nothing was deleted.";
    return;
  }
  const keepIds = new Set(languageDialogues
    .slice()
    .sort((first, second) => new Date(second.savedAt || second.generatedAt || 0) - new Date(first.savedAt || first.generatedAt || 0))
    .slice(0, 10)
    .map((dialogue) => dialogue.id));
  savedDialogues = savedDialogues.filter((dialogue) => getSavedItemLanguage(dialogue) !== targetLanguage || keepIds.has(dialogue.id));
  saveDialogues();
  renderSavedDialogues();
  dialogueStatus.textContent = "Kept the 10 newest dialogues and deleted older ones.";
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

function buildConversationReviewItems() {
  return chatHistory
    .map((message) => {
      const isUser = message.role === "user";
      const original = message.spanish || message.text || "";
      const corrected = isUser
        ? message.correctionSpanish || original
        : original;
      const english = isUser
        ? message.correctionEnglish || message.english || ""
        : message.english || "";

      return {
        role: isUser ? "You" : "AI",
        original,
        corrected,
        english,
        note: message.feedback || "",
        changed: Boolean(isUser && message.correctionSpanish && message.correctionSpanish !== original)
      };
    })
    .filter((item) => item.original || item.corrected);
}

function renderConversationReview() {
  if (!conversationReviewPanel || !conversationReviewList || !conversationReviewSummary) {
    return;
  }

  const reviewItems = buildConversationReviewItems();
  const hasLanguageMix = detectConversationLanguageMix(chatHistory);
  conversationReviewList.innerHTML = "";
  if (repairConversationLanguageBtn) {
    repairConversationLanguageBtn.classList.toggle("hidden", !hasLanguageMix);
  }

  if (!reviewItems.length) {
    conversationReviewSummary.textContent = "Start a chat first, then come back here to review it.";
    conversationReviewList.innerHTML = '<p class="empty-message">No conversation to review yet.</p>';
    return;
  }

  const correctionCount = reviewItems.filter((item) => item.changed).length;
  conversationReviewSummary.textContent = `${reviewItems.length} turns | ${correctionCount} more-native user version${correctionCount === 1 ? "" : "s"} | ${getTargetLanguageProfile().label}${hasLanguageMix ? " | possible language mix found" : ""}`;

  reviewItems.forEach((item, index) => {
    const row = document.createElement("div");
    const label = document.createElement("p");
    const corrected = document.createElement("p");

    row.className = `conversation-review-item ${item.role === "You" ? "user" : "coach"}`;
    label.className = "section-label";
    label.textContent = `${index + 1}. ${item.role}${item.changed ? " - native version" : ""}`;
    corrected.className = "conversation-review-main";
    corrected.textContent = item.corrected;

    row.appendChild(label);

    if (item.changed) {
      const original = document.createElement("p");
      original.className = "conversation-review-original";
      original.textContent = `You said: ${item.original}`;
      row.appendChild(original);
    }

    row.appendChild(corrected);

    if (item.english) {
      const english = document.createElement("p");
      english.className = "chat-text chat-english";
      english.textContent = item.english;
      row.appendChild(english);
    }

    if (item.note) {
      const noteLabel = document.createElement("p");
      const note = document.createElement("p");
      noteLabel.className = "chat-role";
      noteLabel.textContent = "Quick note";
      note.className = "chat-text chat-english";
      note.textContent = item.note;
      row.appendChild(noteLabel);
      row.appendChild(note);
    }

    conversationReviewList.appendChild(row);
  });
}

function detectConversationLanguageMix(messages = chatHistory) {
  if (targetLanguage === "spanish") {
    return false;
  }

  return messages.some((message) => {
    const targetText = `${message.spanish || message.text || ""} ${message.correctionSpanish || ""}`.toLowerCase();

    if (!targetText.trim()) {
      return false;
    }

    if (targetLanguage === "english") {
      return /[Â¿Â¡]|\b(vivo|tengo|quiero|porque|tambien|tambiÃ©n|hermana|padres|espaÃ±ol|espanol|seguimos)\b/i.test(targetText);
    }

    return /[Â¿Â¡]|\b(vivo|tengo|quiero|porque|tambien|tambiÃ©n|hermana|padres|espaÃ±ol|espanol|seguimos)\b/i.test(targetText);
  });
}

async function repairConversationLanguageMix() {
  if (!chatHistory.length) {
    alert("Start a chat first.");
    return;
  }

  if (!detectConversationLanguageMix(chatHistory)) {
    chatStatus.textContent = "No obvious language mix found in this conversation.";
    return;
  }

  repairConversationLanguageBtn.disabled = true;
  repairConversationLanguageBtn.textContent = "Repairing...";
  chatStatus.textContent = `Repairing mixed-language turns so they stay in ${getTargetLanguageProfile().label}...`;

  try {
    const responseData = await callAiLanguageCoach({
      mode: "conversation-repair",
      targetLanguage,
      history: chatHistory.map((message) => ({
        role: message.role,
        spanish: message.spanish || message.text || "",
        english: message.english || "",
        correctionSpanish: message.correctionSpanish || "",
        correctionEnglish: message.correctionEnglish || "",
        feedback: message.feedback || ""
      }))
    });
    const repairedMessages = Array.isArray(responseData.messages) ? responseData.messages : [];

    if (!repairedMessages.length) {
      throw new Error("No repaired messages returned.");
    }

    chatHistory = chatHistory.map((message, index) => ({
      ...message,
      ...(repairedMessages[index] || {}),
      targetLanguage
    }));
    saveCurrentChatState();
    renderChatMessages();
    renderConversationReview();
    chatStatus.textContent = "Conversation language mix repaired.";
  } catch (error) {
    chatStatus.textContent = `Could not repair the conversation. ${formatAiErrorMessage(error.message)}`;
  } finally {
    repairConversationLanguageBtn.disabled = false;
    repairConversationLanguageBtn.textContent = "Repair language mix";
  }
}

function renderDeepConversationReview(review) {
  if (!conversationReviewPanel || !conversationReviewList || !conversationReviewSummary) {
    return;
  }

  conversationReviewList.innerHTML = "";
  conversationReviewSummary.textContent = review?.summary || "In-depth review ready.";

  const sections = [
    ["Strengths", review?.strengths],
    ["Main fixes", review?.mainFixes],
    ["Natural phrases to reuse", review?.naturalPhrases],
    ["Grammar or wording patterns", review?.patterns],
    ["Practice drills", review?.drills],
    ["Next conversation goal", review?.nextGoal ? [review.nextGoal] : []]
  ];

  sections.forEach(([sectionTitle, items]) => {
    if (!Array.isArray(items) || !items.length) {
      return;
    }

    const section = document.createElement("div");
    const title = document.createElement("p");
    const list = document.createElement("ul");

    section.className = "conversation-review-item deep-review-section";
    title.className = "section-label";
    title.textContent = sectionTitle;
    list.className = "deep-review-list";

    items.forEach((item) => {
      const listItem = document.createElement("li");
      if (typeof item === "string") {
        listItem.textContent = item;
      } else {
        const main = item.native || item.fix || item.phrase || item.point || item.drill || "";
        const detail = item.explanation || item.english || item.note || item.example || "";
        listItem.textContent = detail ? `${main} - ${detail}` : main;
      }
      list.appendChild(listItem);
    });

    section.appendChild(title);
    section.appendChild(list);
    conversationReviewList.appendChild(section);
  });
}

function truncateReviewText(text, maxLength = 700) {
  const cleanText = String(text || "").trim();
  return cleanText.length > maxLength ? `${cleanText.slice(0, maxLength)}...` : cleanText;
}

function buildConversationReviewHistory() {
  return chatHistory.map((message) => ({
    role: message.role,
    spanish: truncateReviewText(message.spanish || message.text || "", 700),
    english: truncateReviewText(message.english || "", 350),
    correctionSpanish: truncateReviewText(message.correctionSpanish || "", 500),
    correctionEnglish: truncateReviewText(message.correctionEnglish || "", 350),
    feedback: truncateReviewText(message.feedback || "", 300)
  }));
}

function chunkReviewHistory(history, chunkSize = 18) {
  const chunks = [];

  for (let index = 0; index < history.length; index += chunkSize) {
    chunks.push(history.slice(index, index + chunkSize));
  }

  return chunks;
}

async function runChunkedConversationReview(reviewHistory) {
  const chunks = chunkReviewHistory(reviewHistory);
  const chunkReviews = [];

  for (let index = 0; index < chunks.length; index += 1) {
    conversationReviewSummary.textContent = `Reviewing section ${index + 1} of ${chunks.length}...`;
    chatStatus.textContent = conversationReviewSummary.textContent;

    const responseData = await callAiLanguageCoach({
      mode: "conversation-review",
      targetLanguage,
      topic: getSelectedChatTopic(),
      tone: chatToneSelect.value,
      goal: chatGoalSelect.value,
      history: chunks[index]
    });

    chunkReviews.push(responseData.review || responseData);
  }

  conversationReviewSummary.textContent = "Combining section reviews into one full analysis...";
  chatStatus.textContent = conversationReviewSummary.textContent;

  const finalReview = await callAiLanguageCoach({
    mode: "conversation-review-final",
    targetLanguage,
    topic: getSelectedChatTopic(),
    tone: chatToneSelect.value,
    goal: chatGoalSelect.value,
    chunkReviews
  });

  return finalReview.review || finalReview;
}

function showConversationReview() {
  if (!conversationReviewPanel) {
    return;
  }

  renderConversationReview();
  conversationReviewPanel.classList.remove("hidden");
  chatStatus.textContent = "Conversation review opened.";
  conversationReviewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function showDeepConversationReview() {
  if (!conversationReviewPanel || !chatHistory.length) {
    alert("Start a chat first.");
    return;
  }

  conversationReviewPanel.classList.remove("hidden");
  conversationReviewSummary.textContent = "Running in-depth AI review...";
  conversationReviewList.innerHTML = '<p class="empty-message">Checking fluency, repeated patterns, useful phrases, and next practice steps.</p>';
  chatStatus.textContent = "Running in-depth conversation review with the higher-quality AI model...";
  deepReviewConversationBtn.disabled = true;
  deepReviewConversationBtn.textContent = "Reviewing...";

  try {
    const reviewHistory = buildConversationReviewHistory();
    const reviewResponse = reviewHistory.length > 24
      ? { review: await runChunkedConversationReview(reviewHistory) }
      : await callAiLanguageCoach({
          mode: "conversation-review",
          targetLanguage,
          topic: getSelectedChatTopic(),
          tone: chatToneSelect.value,
          goal: chatGoalSelect.value,
          history: reviewHistory
        });

    renderDeepConversationReview(reviewResponse.review || reviewResponse);
    chatStatus.textContent = "In-depth conversation review ready.";
    conversationReviewPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    conversationReviewSummary.textContent = `Could not run the in-depth review. ${formatAiErrorMessage(error.message)}`;
    chatStatus.textContent = conversationReviewSummary.textContent;
  } finally {
    deepReviewConversationBtn.disabled = false;
    deepReviewConversationBtn.textContent = "In-depth AI review";
  }
}

function hideConversationReview() {
  if (conversationReviewPanel) {
    conversationReviewPanel.classList.add("hidden");
  }
}

// This helper saves full-conversation playlist data.
function saveConversationPlaylist() {
  localStorage.setItem("spanishSentenceConversationPlaylist", JSON.stringify(conversationPlaylist));
}

function saveConversationFolders() {
  localStorage.setItem("spanishSentenceConversationFolders", JSON.stringify(conversationFolders));
  localStorage.setItem("spanishSentenceSelectedConversationFolder", selectedConversationFolder);
}

function getConversationFolder(conversation) {
  return conversation?.folder || capitalize(conversation?.topic || "General");
}

function getConversationFolderOptions() {
  const folderSet = new Set([
    "General",
    ...conversationFolders,
    ...savedConversations.map(getConversationFolder)
  ]);
  return Array.from(folderSet).filter(Boolean).sort((first, second) => first.localeCompare(second));
}

function renderConversationFolders() {
  if (!conversationFolderSelect) {
    return;
  }

  const previousValue = selectedConversationFolder || conversationFolderSelect.value || "all";
  conversationFolderSelect.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All conversation folders";
  conversationFolderSelect.appendChild(allOption);

  getConversationFolderOptions().forEach((folder) => {
    const option = document.createElement("option");
    option.value = folder;
    option.textContent = folder;
    conversationFolderSelect.appendChild(option);
  });

  const hasPrevious = Array.from(conversationFolderSelect.options).some((option) => option.value === previousValue);
  conversationFolderSelect.value = hasPrevious ? previousValue : "all";
  selectedConversationFolder = conversationFolderSelect.value;
}

function createConversationFolder() {
  const folderName = conversationFolderNameInput?.value.trim();

  if (!folderName) {
    alert("Type a conversation folder name first.");
    return;
  }

  if (!conversationFolders.includes(folderName)) {
    conversationFolders.push(folderName);
  }

  selectedConversationFolder = folderName;
  if (conversationFolderNameInput) {
    conversationFolderNameInput.value = "";
  }
  saveConversationFolders();
  renderSavedConversations();
  showStatusMessage(`Conversation folder "${folderName}" ready.`);
}

function moveSavedConversationToFolder(conversationId, folderName) {
  savedConversations = savedConversations.map((conversation) =>
    conversation.id === conversationId
      ? { ...conversation, folder: folderName || "General" }
      : conversation
  );

  if (folderName && !conversationFolders.includes(folderName)) {
    conversationFolders.push(folderName);
  }

  localStorage.setItem("spanishSentenceSavedConversations", JSON.stringify(savedConversations));
  saveConversationFolders();
  renderSavedConversations();
  showStatusMessage("Conversation moved.");
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
    targetLanguage,
    title: `${capitalize(chatTopicSelect.value)} conversation - ${new Date(savedAt).toLocaleString([], {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })}`,
      topic: getSelectedChatTopic(),
      baseTopic: chatTopicSelect.value,
      debateTopic: debateTopicInput?.value.trim() || "",
    tone: chatToneSelect.value,
    scenario: chatScenarioSelect.value,
    personality: chatPersonalitySelect.value,
    goal: chatGoalSelect.value,
    folder: selectedConversationFolder && selectedConversationFolder !== "all"
      ? selectedConversationFolder
      : capitalize(chatTopicSelect.value || "General"),
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

  const languageConversationPlaylist = getCurrentLanguageItems(conversationPlaylist);
  conversationPlaylistList.innerHTML = "";
  conversationPlaylistEmpty.style.display = languageConversationPlaylist.length ? "none" : "block";

  languageConversationPlaylist.forEach((conversation) => {
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

  renderConversationFolders();
  const searchText = (conversationLibrarySearchInput?.value || librarySearchInput?.value || "").trim().toLowerCase();
  const languageConversations = getCurrentLanguageItems(savedConversations)
    .filter((conversation) => selectedConversationFolder === "all" || getConversationFolder(conversation) === selectedConversationFolder)
    .filter((conversation) => libraryItemMatchesSearch({
      ...conversation,
      title: `${getConversationTitle(conversation)} ${getConversationFolder(conversation)}`
    }, searchText));
  savedConversationsList.innerHTML = "";
  savedConversationsEmpty.style.display = languageConversations.length ? "none" : "block";

  languageConversations
    .slice()
    .sort((first, second) => new Date(second.savedAt) - new Date(first.savedAt))
    .forEach((conversation) => {
      const listItem = document.createElement("li");
      const textWrapper = document.createElement("div");
      const title = document.createElement("h4");
      const meta = document.createElement("p");
      const folderTag = document.createElement("span");
      const actionRow = document.createElement("div");
      const loadButton = document.createElement("button");
      const folderSelect = document.createElement("select");

      listItem.className = "favourite-item saved-conversation-item";
      actionRow.className = "conversation-item-actions";
      title.textContent = getConversationTitle(conversation);
      meta.textContent = `${conversation.messages.length} messages | ${formatChatDuration(conversation.durationSeconds)} | ${capitalize(conversation.tone || "informal")}`;
      folderTag.className = "tag";
      folderTag.textContent = getConversationFolder(conversation);
      loadButton.className = "secondary-btn";
      loadButton.type = "button";
      loadButton.textContent = "Load";
      loadButton.addEventListener("click", () => loadSavedConversation(conversation.id));
      folderSelect.className = "conversation-folder-move";
      folderSelect.setAttribute("aria-label", "Move conversation to folder");
      getConversationFolderOptions().forEach((folder) => {
        const option = document.createElement("option");
        option.value = folder;
        option.textContent = folder;
        folderSelect.appendChild(option);
      });
      folderSelect.value = getConversationFolder(conversation);
      folderSelect.addEventListener("change", () => moveSavedConversationToFolder(conversation.id, folderSelect.value));

      textWrapper.appendChild(title);
      textWrapper.appendChild(meta);
      textWrapper.appendChild(folderTag);
      actionRow.appendChild(loadButton);
      actionRow.appendChild(folderSelect);
      listItem.appendChild(textWrapper);
      listItem.appendChild(actionRow);
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

function getTargetLanguageProfile() {
  return targetLanguageProfiles[targetLanguage] || targetLanguageProfiles.spanish;
}

function getLearningDirectionLabel() {
  const profile = getTargetLanguageProfile();
  return `I speak ${profile.sourceLabel} -> learning ${profile.label}`;
}

function getSavedItemLanguage(item) {
  return item?.targetLanguage || item?.language || "spanish";
}

function isCurrentLanguageItem(item) {
  return getSavedItemLanguage(item) === targetLanguage;
}

function withCurrentLanguage(item) {
  return {
    ...item,
    targetLanguage: item?.targetLanguage || targetLanguage
  };
}

function getCurrentLanguageItems(items) {
  return items.filter(isCurrentLanguageItem);
}

function chatHasMixedLanguageHistory() {
  return chatHistory.some((message) => getSavedItemLanguage(message) !== targetLanguage);
}

function getDominantChatLanguage() {
  const counts = chatHistory.reduce((languageCounts, message) => {
    const messageLanguage = getSavedItemLanguage(message);
    languageCounts[messageLanguage] = (languageCounts[messageLanguage] || 0) + 1;
    return languageCounts;
  }, {});

  const sortedLanguages = Object.entries(counts).sort((first, second) => second[1] - first[1]);
  return sortedLanguages[0]?.[0] || targetLanguage;
}

function applyAppDisplayMode() {
  appDisplayMode = "advanced";
  document.body.classList.remove("simple-mode");
  document.body.classList.add("advanced-mode");
  localStorage.setItem("spanishSentenceAppDisplayMode", appDisplayMode);
}

function toggleAppDisplayMode() {
  applyAppDisplayMode();
  showStatusMessage("All tools are shown in the main app layout.");
}

function getLibrarySearchText() {
  return (globalLibrarySearchInput?.value || librarySearchInput?.value || "").trim().toLowerCase();
}

function getLibraryHubStats() {
  const languagePlaylists = getCurrentLanguageItems(playlists);
  return [
    {
      label: "Sentence sets",
      count: getCurrentLanguageItems(savedBatches).length,
      detail: "Generated batches saved automatically",
      group: "practice",
      page: "generator-page"
    },
    {
      label: "Dialogues",
      count: getCurrentLanguageItems(savedDialogues).length,
      detail: "Generated practice conversations",
      group: "practice",
      page: "dialogue-page"
    },
    {
      label: "Conversations",
      count: getCurrentLanguageItems(savedConversations).length,
      detail: `${getConversationFolderOptions().length} folders`,
      group: "practice",
      page: "chat-page"
    },
    {
      label: "Audio playlists",
      count: languagePlaylists.reduce((total, playlist) => total + (playlist.sentences || []).length, 0),
      detail: `${languagePlaylists.length} playlists`,
      group: "audio",
      page: "radio-page"
    },
    {
      label: "Review sentences",
      count: getCurrentLanguageItems(recallSentences).length,
      detail: "Active recall queue",
      group: "review",
      page: "recall-page"
    },
    {
      label: "Mistake patterns",
      count: getLanguageMistakePatterns().length,
      detail: "Recurring chat and call fixes",
      group: "review",
      page: "review-page"
    },
    {
      label: "Vocabulary",
      count: getCurrentLanguageItems(savedWords).length,
      detail: "Saved words and SRS examples",
      group: "review",
      page: "words-page"
    }
  ];
}

function renderLibraryHub() {
  if (!libraryHubGrid) {
    return;
  }

  const searchText = getLibrarySearchText();
  libraryTabButtons.forEach((button) => {
    button.classList.toggle("active", (button.dataset.libraryFilter || "all") === libraryFilter);
  });

  const cards = getLibraryHubStats().filter((item) => {
    const matchesFilter = libraryFilter === "all" || item.group === libraryFilter;
    const matchesSearch = !searchText || `${item.label} ${item.detail}`.toLowerCase().includes(searchText);
    return matchesFilter && matchesSearch;
  });
  libraryHubGrid.innerHTML = "";

  if (!cards.length) {
    libraryHubGrid.innerHTML = '<p class="empty-message">No library section matches that search.</p>';
    return;
  }

  cards.forEach((item) => {
    const card = document.createElement("article");
    const count = document.createElement("span");
    const title = document.createElement("h4");
    const detail = document.createElement("p");
    const button = document.createElement("button");

    card.className = "library-hub-card-item";
    count.className = "library-hub-count";
    count.textContent = item.count;
    title.textContent = item.label;
    detail.textContent = item.detail;
    button.className = "secondary-btn";
    button.type = "button";
    button.textContent = "Open";
    button.addEventListener("click", () => showPage(item.page));

    card.appendChild(count);
    card.appendChild(title);
    card.appendChild(detail);
    card.appendChild(button);
    libraryHubGrid.appendChild(card);
  });
}

function updateChatLanguageBadge() {
  const profile = getTargetLanguageProfile();
  const hasMessages = chatHistory.length > 0;
  const mixedHistory = hasMessages && chatHasMixedLanguageHistory();

  if (chatTitle) {
    chatTitle.textContent = `${profile.label} chat coach`;
  }

  if (chatLanguageBadge) {
    chatLanguageBadge.textContent = mixedHistory
      ? `Mixed chat - start a new ${profile.label} chat`
      : `${profile.label} chat`;
    chatLanguageBadge.classList.toggle("warning", mixedHistory);
  }
}

function clearMixedLanguageChatIfNeeded() {
  if (!chatHasMixedLanguageHistory()) {
    return false;
  }

  saveCurrentConversation({ silent: true, targetLanguage: getDominantChatLanguage() });
  clearActiveChatState();
  chatStatus.textContent = `Saved and cleared the mixed-language chat. New messages will stay in ${getTargetLanguageProfile().label}.`;
  return true;
}

function refreshLanguageScopedViews() {
  renderFavourites();
  renderRecallSentences();
  renderSavedWords();
  renderSavedBatches();
  renderPlaylists();
  renderSavedDialogues();
  renderSavedConversations();
  renderConversationPlaylist();
  renderLibraryHub();
}

function clearActiveChatState() {
  chatHistory = [];
  lastCoachReply = null;
  activeConversationId = "";
  activeChatTitle = "";
  chatAccumulatedSeconds = 0;
  chatStartedAt = 0;
  pauseChatTimer();
  removeStoredChatValue("spanishSentenceChatHistory");
  removeStoredChatValue("spanishSentenceActiveConversationId");
  removeStoredChatValue("spanishSentenceChatTitle");
  removeStoredChatValue("spanishSentenceChatStartedAt");
  removeStoredChatValue("spanishSentenceChatAccumulatedSeconds");
  removeStoredChatValue("spanishSentenceChatDraft");
  if (chatInput) {
    chatInput.value = "";
  }
  updateChatNameInput();
  renderChatMessages();
  updateChatLanguageBadge();
  updateChatTimerDisplay();
}

function applyTargetLanguagePreference() {
  const profile = getTargetLanguageProfile();

  if (targetLanguageSelect) {
    targetLanguageSelect.value = targetLanguage;
  }

  if (difficultySelect && difficultyCalibration[targetLanguage]?.level) {
    difficultySelect.value = difficultyCalibration[targetLanguage].level;
  }

  if (appEyebrow) {
    const flag = appEyebrow.querySelector(".language-flag");
    appEyebrow.textContent = "";
    if (flag) {
      flag.className = `language-flag ${profile.flagClass}`;
      appEyebrow.appendChild(flag);
    }
    appEyebrow.append(`${profile.label} practice studio`);
  }

  if (appTitle) {
    appTitle.textContent = "Language Coach";
  }

  document.title = "Language Coach";

  if (appIntro) {
    appIntro.textContent = `Practise conversations, sentence sets, audio playlists, and vocabulary for ${profile.phrase}.`;
  }

  if (spanishVoiceSelect) {
    const voiceLabel = document.querySelector('label[for="spanish-voice-select"]');
    if (voiceLabel) {
      voiceLabel.textContent = `${profile.label} voice`;
    }
  }

  if (speakSpanishBtn) {
    speakSpanishBtn.textContent = `Speak ${profile.label}`;
  }

  if (speakEnglishBtn) {
    speakEnglishBtn.textContent = `Speak ${profile.translationLabel}`;
  }

  if (copySentenceBtn) {
    copySentenceBtn.textContent = `Copy ${profile.label}`;
  }

  if (learningDirectionNote) {
    learningDirectionNote.textContent = `${getLearningDirectionLabel()}. Translations, word hints, chat prompts, call transcription, and saved files follow this direction.`;
  }

  if (batchStatus && (!batchStatus.textContent.trim() || batchStatus.textContent.includes("Generate a batch to view"))) {
    batchStatus.textContent = `Generate a batch to view ${profile.label} and ${profile.translationLabel} side by side.`;
  }

  if (favouritesSearchInput) {
    favouritesSearchInput.placeholder = `Search ${profile.label} or ${profile.translationLabel}`;
  }

  if (customToneLabel) {
    customToneLabel.textContent = `${profile.label} style`;
  }

  if (customEnglishLabel) {
    customEnglishLabel.textContent = `Write a sentence in ${profile.sourceLabel}`;
  }

  if (customEnglishInput) {
    customEnglishInput.placeholder = `For example: ${profile.example}`;
  }

  if (translateCustomBtn) {
    translateCustomBtn.textContent = `Translate to ${profile.label}`;
  }

  if (customAiNote) {
    customAiNote.textContent = `AI helped make this sound more natural in ${profile.label}.`;
  }

  if (customSpanishOutput && !latestCustomSentence) {
    customSpanishOutput.textContent = `Your ${profile.label} sentence will appear here.`;
  }

  if (customEnglishOutput && !latestCustomSentence) {
    customEnglishOutput.textContent = `Your ${profile.sourceLabel} sentence will stay visible here too.`;
  }

  if (customStatus && (!customStatus.textContent.trim() || customStatus.textContent.includes("Best for short everyday sentences"))) {
    customStatus.textContent = targetLanguage === "spanish"
      ? "Best for short everyday sentences. Spanish can use the offline translator if AI is unavailable."
      : `Best for short everyday sentences. ${profile.label} custom translations use AI to stay in the right language.`;
  }

  if (dialogueTitle) {
    dialogueTitle.textContent = `AI ${profile.label} dialogues`;
  }

  if (dialogueStatus && (!dialogueStatus.textContent.trim() || dialogueStatus.textContent.includes("Choose a topic and generate"))) {
    dialogueStatus.textContent = `Choose a topic and generate a natural ${profile.label} dialogue.`;
  }

  if (chatInput) {
    chatInput.placeholder = `Write in ${profile.sourceLabel} or simple ${profile.label}. For example: ${profile.example}`;
  }

  if (chatStatus && (!chatStatus.textContent.trim() || chatStatus.textContent.includes("Start a chat to practise"))) {
    chatStatus.textContent = `Start a chat to practise a short ${profile.label} conversation with the built-in coach.`;
  }

  localStorage.setItem("spanishSentenceTargetLanguage", targetLanguage);
  updateChatLanguageBadge();
  updateAiModeNote();
}

function saveTargetLanguagePreference() {
  const nextLanguage = targetLanguageSelect?.value || "spanish";

  if (nextLanguage === targetLanguage) {
    return;
  }

  if (isCallModeActive) {
    stopCallMode("Call mode ended because the language changed.", { autoSave: true });
  } else {
    pauseChatTimer();
    saveCurrentChatState();
  }

  targetLanguage = nextLanguage;
  spanishVoiceChoice = languageVoiceChoices[targetLanguage] || "primary";
  loadActiveChatStateForLanguage(targetLanguage);
  applyTargetLanguagePreference();
  applySpanishVoicePreference();
  refreshLanguageScopedViews();

  if (chatStatus) {
    chatStatus.textContent = chatHistory.length
      ? `${getTargetLanguageProfile().label} chat restored.`
      : `${getTargetLanguageProfile().label} selected. Start a chat when you're ready.`;
  }
}

function applyQuickSetupLanguage(language) {
  if (!targetLanguageProfiles[language]) {
    return;
  }

  if (targetLanguageSelect) {
    targetLanguageSelect.value = language;
  }

  saveTargetLanguagePreference();
  localStorage.setItem("spanishSentenceSetupComplete", "true");
  if (firstRunSetup) {
    firstRunSetup.classList.add("hidden");
  }
  showStatusMessage(`${getLearningDirectionLabel()} selected.`);
}

function applyFirstRunSetupVisibility() {
  if (!firstRunSetup) {
    return;
  }

  const setupComplete = localStorage.getItem("spanishSentenceSetupComplete") === "true";
  firstRunSetup.classList.toggle("hidden", setupComplete);
}

function createFirstSetupPlaylist() {
  const name = setupFirstPlaylistInput?.value.trim();

  if (!name) {
    return;
  }

  const alreadyExists = playlists.some((playlist) => getSavedItemLanguage(playlist) === targetLanguage && playlist.name.toLowerCase() === name.toLowerCase());

  if (!alreadyExists) {
    playlists.unshift({
      id: createId(),
      targetLanguage,
      name,
      folder: "General",
      sentences: []
    });
    savePlaylists();
    renderPlaylists();
  }

  setupFirstPlaylistInput.value = "";
}

function applySetupPreset(preset) {
  const presets = {
    travel: { topic: "travel", goal: "small-talk", scenario: "roleplay" },
    daily: { topic: "daily life", goal: "natural-flow", scenario: "casual" },
    shadowing: { topic: "daily life", goal: "natural-flow", scenario: "quick-fire" },
    work: { topic: "work", goal: "small-talk", scenario: "roleplay" }
  };
  const presetConfig = presets[preset];

  if (!presetConfig) {
    return;
  }

  if (topicSelect) {
    topicSelect.value = presetConfig.topic;
  }
  if (chatTopicSelect) {
    chatTopicSelect.value = presetConfig.topic;
  }
  if (chatGoalSelect) {
    chatGoalSelect.value = presetConfig.goal;
  }
  if (chatScenarioSelect) {
    chatScenarioSelect.value = presetConfig.scenario;
  }
  if (shadowGapSelect && preset === "shadowing") {
    shadowGapSelect.value = "3";
    localStorage.setItem("spanishSentenceShadowGap", "3");
  }

  localStorage.setItem("spanishSentenceSetupComplete", "true");
  applyFirstRunSetupVisibility();
  showStatusMessage(`${capitalize(preset)} preset applied.`);
}

function applyLessonPack(pack) {
  const packs = {
    cafe: { topic: "food", goal: "ordering", scenario: "roleplay", tone: "informal", page: "chat-page", status: "Cafe role play loaded." },
    gym: { topic: "gym/fitness", goal: "natural-flow", scenario: "casual", tone: "informal", page: "chat-page", status: "Gym chat loaded." },
    weekend: { topic: "daily life", goal: "future-plans", scenario: "catch-up", tone: "informal", page: "chat-page", status: "Weekend plans chat loaded." },
    debate: { topic: "daily life", goal: "opinions", scenario: "debate", tone: "informal", page: "chat-page", status: "Friendly debate loaded." },
    travel: { topic: "travel", goal: "small-talk", scenario: "roleplay", tone: "informal", page: "chat-page", status: "Travel role play loaded." }
  };
  const config = packs[pack];

  if (!config) {
    return;
  }

  if (topicSelect) {
    topicSelect.value = config.topic;
  }
  if (chatTopicSelect) {
    chatTopicSelect.value = config.topic;
  }
  if (chatGoalSelect) {
    chatGoalSelect.value = config.goal;
  }
  if (chatScenarioSelect) {
    chatScenarioSelect.value = config.scenario;
  }
  if (chatToneSelect) {
    chatToneSelect.value = config.tone;
  }
  showPage(config.page);
  chatStatus.textContent = `${config.status} Press Start chat or Start call.`;
  showStatusMessage(config.status);
}

function reviewLastCallSummary() {
  if (!lastCallSummaryChatHistory.length) {
    alert("No recent call summary to review.");
    return;
  }

  chatHistory = lastCallSummaryChatHistory.map((message) => ({ ...message }));
  saveCurrentChatState();
  renderChatMessages();
  showDeepConversationReview();
}

function saveLastCallSummaryConversation() {
  if (!lastCallSummaryChatHistory.length) {
    alert("No recent call to save.");
    return;
  }

  chatHistory = lastCallSummaryChatHistory.map((message) => ({ ...message }));
  if (!activeConversationId) {
    activeConversationId = createConversationId();
  }
  saveCurrentConversation();
}

function applyCallPausePreference() {
  if (callPauseModeSelect) {
    callPauseModeSelect.value = callPauseMode;
  }

  localStorage.setItem("spanishSentenceCallPauseMode", callPauseMode);
}

function saveCallPausePreference() {
  callPauseMode = callPauseModeSelect?.value || "normal";
  applyCallPausePreference();
}

function getCallPauseTiming() {
  const timings = {
    fast: {
      silenceAfterSpeechMs: 1900,
      recognitionSendDelayMs: 650
    },
    normal: {
      silenceAfterSpeechMs: 3200,
      recognitionSendDelayMs: 1000
    },
    thinking: {
      silenceAfterSpeechMs: 4800,
      recognitionSendDelayMs: 1400
    }
  };

  return timings[callPauseMode] || timings.normal;
}

// This helper keeps the selected ElevenLabs voice in sync with the page.
function getAllowedVoiceChoicesForLanguage(language = targetLanguage) {
  const choices = ["primary", "alternative"];

  if (language === "english") {
    choices.push("english-mlso", "english-female-lcmy");
  }

  if (language === "french") {
    choices.push("french-male", "french-female");
  }

  if (language === "italian") {
    choices.push("italian-male", "italian-female");
  }

  return choices;
}

function normaliseVoiceChoiceForLanguage(voiceChoice, language = targetLanguage) {
  const allowedChoices = getAllowedVoiceChoicesForLanguage(language);
  return allowedChoices.includes(voiceChoice) ? voiceChoice : "primary";
}

function updateVoiceOptionsForLanguage() {
  if (!spanishVoiceSelect) {
    return;
  }

  const allowedChoices = new Set(getAllowedVoiceChoicesForLanguage());

  Array.from(spanishVoiceSelect.options).forEach((option) => {
    const isAllowed = allowedChoices.has(option.value);
    option.hidden = !isAllowed;
    option.disabled = !isAllowed;
  });
}

function applySpanishVoicePreference() {
  updateVoiceOptionsForLanguage();
  spanishVoiceChoice = normaliseVoiceChoiceForLanguage(languageVoiceChoices[targetLanguage] || spanishVoiceChoice || "primary");

  if (spanishVoiceSelect) {
    spanishVoiceSelect.value = spanishVoiceChoice;
  }

  languageVoiceChoices[targetLanguage] = spanishVoiceChoice;
  localStorage.setItem("spanishSentenceVoiceChoicesByLanguage", JSON.stringify(languageVoiceChoices));
  localStorage.setItem("spanishSentenceVoiceChoice", spanishVoiceChoice);
}

// This helper returns the voice option to send to the audio backend.
function getSelectedSpanishVoice() {
  if (!spanishVoiceSelect) {
    return normaliseVoiceChoiceForLanguage(spanishVoiceChoice || "primary");
  }

  return normaliseVoiceChoiceForLanguage(spanishVoiceSelect.value || "primary");
}

// This function saves the selected ElevenLabs voice option.
function saveSpanishVoicePreference() {
  spanishVoiceChoice = getSelectedSpanishVoice();
  languageVoiceChoices[targetLanguage] = spanishVoiceChoice;
  applySpanishVoicePreference();
}

// This function plays a short sample with the current language and voice settings.
function testSelectedVoice() {
  const profile = getTargetLanguageProfile();
  const voiceLabel = spanishVoiceSelect?.options[spanishVoiceSelect.selectedIndex]?.text || "selected voice";

  if (testVoiceBtn) {
    testVoiceBtn.disabled = true;
    testVoiceBtn.textContent = "Testing...";
  }

  showStatusMessage(`Testing ${profile.label} ${voiceLabel.toLowerCase()}...`);

  playSpanishAudio(profile.voiceTest, `${profile.label} voice test`, () => {
    if (testVoiceBtn) {
      testVoiceBtn.disabled = false;
      testVoiceBtn.textContent = "Test voice";
    }
    showStatusMessage(`${profile.label} voice test finished.`);
  }, { progressive: false });
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
      fileName: `chat-mic-audio.${fileExtension}`,
      targetLanguage
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

// This helper stops the lightweight mic monitor used for hands-free interruption.
function stopCallBargeInMonitor() {
  if (callBargeFrame) {
    cancelAnimationFrame(callBargeFrame);
    callBargeFrame = null;
  }

  if (callBargeStream) {
    callBargeStream.getTracks().forEach((track) => track.stop());
    callBargeStream = null;
  }

  if (callBargeAudioContext) {
    callBargeAudioContext.close().catch(() => {
      // Ignore audio-context cleanup errors.
    });
    callBargeAudioContext = null;
  }

  callBargeAnalyser = null;
  callBargeStartedAt = 0;
  callBargeSpeechStartedAt = 0;
}

// This helper keeps the call-mode panel focused on the current call state.
function updateCallFocusLayout(statusText = "") {
  if (!callFocusPanel || !chatCard) {
    return;
  }

  const isActive = Boolean(isCallModeActive);

  chatCard.classList.toggle("call-mode-active", isActive);
  callFocusPanel.classList.toggle("hidden", !isActive);

  if (!isActive) {
    return;
  }

  const currentStatus = statusText || chatStatus.textContent || "Call mode is active.";
  const lowerStatus = currentStatus.toLowerCase();
  let title = "In call";

  if (lowerStatus.includes("listening") || lowerStatus.includes("speak")) {
    title = "Listening";
  } else if (lowerStatus.includes("hearing")) {
    title = "Hearing you";
  } else if (lowerStatus.includes("transcribing") || lowerStatus.includes("processing")) {
    title = "Transcribing";
  } else if (lowerStatus.includes("thinking")) {
    title = "Thinking";
  } else if (lowerStatus.includes("replying") || lowerStatus.includes("speaking")) {
    title = "Speaking";
  } else if (lowerStatus.includes("interrupted")) {
    title = "Interrupted";
  }

  callFocusTitle.textContent = title;
  callFocusStatus.textContent = currentStatus;
  focusInterruptCallBtn.classList.toggle("hidden", !isCallReplying);
}

// This helper updates chat status and mirrors it in the call-focus panel.
function setChatStatus(text) {
  chatStatus.textContent = text;
  updateCallFocusLayout(text);
}

function updateCallQuality(level = 0, state = "") {
  if (!callQualityIndicator) {
    return;
  }

  let nextState = state || "waiting";
  if (!state) {
    if (level > 0.075) {
      nextState = "noisy";
    } else if (level > 0.034) {
      nextState = "good";
    } else if (level > 0.014) {
      nextState = "quiet";
    }
  }

  callQualityState = nextState;
  const labels = {
    waiting: "Mic waiting",
    quiet: "Mic quiet",
    good: "Mic good",
    noisy: "Mic noisy",
    error: "Mic issue"
  };
  callQualityIndicator.textContent = labels[nextState] || labels.waiting;
  callQualityIndicator.dataset.quality = nextState;
}

// This helper reads a quiet mic monitor while the AI is replying, so the user can interrupt by speaking.
async function startCallBargeInMonitor() {
  if (!isCallModeActive || !isCallReplying || callBargeStream) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !AudioContextClass) {
    return;
  }

  try {
    callBargeStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      }
    });
    callBargeAudioContext = new AudioContextClass();
    callBargeAnalyser = callBargeAudioContext.createAnalyser();
    callBargeAnalyser.fftSize = 2048;
    callBargeAudioContext.createMediaStreamSource(callBargeStream).connect(callBargeAnalyser);
    callBargeStartedAt = Date.now();
    callBargeSpeechStartedAt = 0;
  } catch (error) {
    stopCallBargeInMonitor();
    return;
  }

  if (!isCallModeActive || !isCallReplying) {
    stopCallBargeInMonitor();
    return;
  }

  const samples = new Uint8Array(callBargeAnalyser.fftSize);
  const graceMs = 650;
  const speechThreshold = 0.052;
  const sustainedSpeechMs = 260;

  const monitor = () => {
    if (!isCallModeActive || !isCallReplying || !callBargeAnalyser) {
      stopCallBargeInMonitor();
      return;
    }

    callBargeAnalyser.getByteTimeDomainData(samples);

    let sum = 0;
    samples.forEach((sample) => {
      const centeredSample = (sample - 128) / 128;
      sum += centeredSample * centeredSample;
    });

    const level = Math.sqrt(sum / samples.length);
    const elapsedMs = Date.now() - callBargeStartedAt;

    if (elapsedMs > graceMs && level > speechThreshold) {
      if (!callBargeSpeechStartedAt) {
        callBargeSpeechStartedAt = Date.now();
      }

      if (Date.now() - callBargeSpeechStartedAt > sustainedSpeechMs) {
        interruptCallReply("Interrupted because you started speaking. Listening again...");
        return;
      }
    } else {
      callBargeSpeechStartedAt = 0;
    }

    callBargeFrame = requestAnimationFrame(monitor);
  };

  monitor();
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
  callRecognition.continuous = true;
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
      const pauseTiming = getCallPauseTiming();
      setChatStatus("Processing your call turn...");
      setTimeout(() => {
        if (isCallModeActive && !isCallReplying) {
          sendChatMessage({ fromCall: true, userMessage: spokenMessage });
        }
      }, pauseTiming.recognitionSendDelayMs);
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
  stopCallBargeInMonitor();

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
  const pauseTiming = getCallPauseTiming();
  const maxTurnLengthMs = 45000;
  const noSpeechTimeoutMs = 12000;
  const silenceAfterSpeechMs = pauseTiming.silenceAfterSpeechMs;
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
      updateCallQuality(0, "error");
      chatStatus.textContent = "Mic recording failed. Trying browser speech recognition instead.";
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
      setChatStatus("Call mode is listening. Speak when you are ready.");
      restartCallListening(350);
      return;
    }

    try {
      isCallReplying = true;
      setChatStatus("Transcribing your call audio...");
      const transcript = await transcribeRecordedChatAudio(recordedAudioBlob);

      isCallReplying = false;

      if (!transcript) {
        setChatStatus("The call audio was heard, but no words were returned.");
        restartCallListening(500);
        return;
      }

      latestCallTranscript = transcript;
      chatInput.value = transcript;
      setChatStatus("Call mode is thinking...");
      sendChatMessage({ fromCall: true, userMessage: transcript });
    } catch (error) {
      isCallReplying = false;
      setChatStatus(`Transcription failed: ${error.message} Trying browser speech recognition instead.`);
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
    updateCallQuality(level);

    if (level > speechThreshold) {
      callHeardSpeech = true;
      silenceStartedAt.value = 0;
      setChatStatus("Call mode is hearing you...");
    } else if (callHeardSpeech) {
      if (!silenceStartedAt.value) {
        silenceStartedAt.value = Date.now();
      }

      if (Date.now() - silenceStartedAt.value > silenceAfterSpeechMs) {
        setChatStatus("Processing your call turn after your pause...");
        stopRecorderIfActive();
        return;
      }
    }

    if (!callHeardSpeech && elapsedMs > noSpeechTimeoutMs) {
      stopRecorderIfActive();
      return;
    }

    if (elapsedMs > maxTurnLengthMs) {
      setChatStatus("Processing this longer call turn...");
      stopRecorderIfActive();
      return;
    }

    callSilenceFrame = requestAnimationFrame(monitorSilence);
  };

  isCallListening = true;
  latestCallTranscript = "";
  chatInput.value = "";
  updateCallQuality(0, "waiting");
  setChatStatus("Call mode is listening. Speak naturally, then pause.");
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
        updateCallQuality(0, "error");
        chatStatus.textContent = `Mic setup failed: ${error.message || "permission or device problem"}. Trying browser speech recognition instead.`;
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

  clearMixedLanguageChatIfNeeded();

  if (chatHistory.length) {
    saveCurrentConversation({ silent: true });
    clearActiveChatState();
    hideConversationReview();
  }

  let shouldWaitForOpeningAudio = false;
  chatAutoSpeakCheckbox.checked = true;

  isCallModeActive = true;
  isCallReplying = false;
  startCallTimer();
  callReplyPlaybackId += 1;
  callTurnRequestId += 1;
  startCallBtn.classList.add("hidden");
  endCallBtn.classList.remove("hidden");
  interruptCallBtn.classList.add("hidden");
  setChatStatus("Call mode started. Preparing the opening...");
  updateCallFocusLayout();

  shouldWaitForOpeningAudio = Boolean(await startChat({
    fromCall: true,
    forceSpeakOpening: true,
    onOpeningSpoken: () => {
      if (!isCallModeActive) {
        return;
      }

      isCallReplying = false;
      stopCallBargeInMonitor();
      interruptCallBtn.classList.add("hidden");
      setChatStatus("Your turn. Speak naturally, then pause.");
      restartCallListening(300);
    }
  }));

  if (shouldWaitForOpeningAudio) {
    setChatStatus("Call mode started. Speak naturally after the coach finishes.");
  } else {
    setChatStatus("Call mode started. Speak naturally, then pause.");
  }
  updateCallFocusLayout();

  if (!shouldWaitForOpeningAudio) {
    restartCallListening(200);
  }
}

// This helper clears the active chat without trying to stop call mode again.
function resetActiveChatAfterCall() {
  clearActiveChatState();
}

function calculateConversationScore(turns, corrections, durationSeconds) {
  const turnCount = turns.length;
  const userTurns = chatHistory.filter((message) => message.role === "user");
  const averageUserLength = userTurns.length
    ? userTurns.reduce((total, message) => total + (message.spanish || "").split(/\s+/).filter(Boolean).length, 0) / userTurns.length
    : 0;
  const lengthScore = Math.min(25, Math.round(averageUserLength * 2));
  const flowScore = Math.min(30, turnCount * 4);
  const timeScore = Math.min(20, Math.round(durationSeconds / 18));
  const correctionScore = Math.max(10, 25 - corrections.length * 3);

  return Math.max(0, Math.min(100, lengthScore + flowScore + timeScore + correctionScore));
}

function renderCallSummary(durationSeconds, savedConversation = null) {
  if (!callSummaryPanel) {
    return;
  }

  const turns = getCorrectedConversationTurns();
  const corrections = chatHistory.filter((message) => message.role === "user" && message.correctionSpanish).slice(-4);
  const score = calculateConversationScore(turns, corrections, durationSeconds);
  lastCallSummaryChatHistory = chatHistory.map((message) => ({ ...message }));
  callSummaryPanel.classList.remove("hidden");

  if (callSummaryTitle) {
    callSummaryTitle.textContent = savedConversation ? "Saved call" : "Last call";
  }
  if (callSummaryDuration) {
    callSummaryDuration.textContent = formatChatDuration(durationSeconds);
  }
  if (callSummaryTurns) {
    callSummaryTurns.textContent = turns.length;
  }
  if (callSummaryCorrections) {
    callSummaryCorrections.textContent = corrections.length;
  }
  if (callSummaryScore) {
    callSummaryScore.textContent = score;
  }
  if (callSummaryPhrases) {
    callSummaryPhrases.innerHTML = "";
    const recentTurns = chatHistory.slice(-6);

    recentTurns.forEach((message) => {
      const item = document.createElement("li");
      const label = message.role === "user" ? "You" : "AI";
      const nativeVersion = message.role === "user" && message.correctionSpanish && message.correctionSpanish !== message.spanish
        ? ` | Native: ${message.correctionSpanish}`
        : "";
      item.textContent = `${label}: ${message.spanish || ""}${nativeVersion}`;
      callSummaryPhrases.appendChild(item);
    });

    if (!corrections.length && !recentTurns.length) {
      const item = document.createElement("li");
      item.textContent = "No corrected phrases in this call yet.";
      callSummaryPhrases.appendChild(item);
    } else if (corrections.length) {
      corrections.forEach((message) => {
        const item = document.createElement("li");
        item.textContent = `Weak phrase: ${message.correctionSpanish} - ${message.correctionEnglish || message.feedback || "native version"}`;
        callSummaryPhrases.appendChild(item);
      });
    }
  }

  if (callSummaryNextStep) {
    if (corrections.length) {
      callSummaryNextStep.textContent = `Next: replay the call, then recall ${corrections.length} native version${corrections.length === 1 ? "" : "s"}.`;
    } else if (durationSeconds < 120) {
      callSummaryNextStep.textContent = "Next: try another two-minute call so the coach has more language to review.";
    } else if (score >= 80) {
      callSummaryNextStep.textContent = "Next: raise the difficulty or try debate mode to stretch the conversation.";
    } else {
      callSummaryNextStep.textContent = "Next: save two useful replies to a playlist and replay them once.";
    }
  }
}

// This function stops the hands-free voice chat loop.
function stopCallMode(message = "Call mode ended.", options = {}) {
  const shouldAutoSave = Boolean(options.autoSave);
  const callDurationSeconds = stopCallTimer();
  const callDurationText = formatChatDuration(callDurationSeconds);
  const savedConversation = shouldAutoSave && chatHistory.length
    ? saveCurrentConversation({ silent: true })
    : null;
  const shouldShowSummary = chatHistory.length > 0;

  isCallModeActive = false;
  isCallReplying = false;
  callReplyPlaybackId += 1;
  callTurnRequestId += 1;
  latestCallTranscript = "";
  stopCallBargeInMonitor();
  const stats = getCurrentPracticeStats();
  stats.callSeconds = Number(stats.callSeconds || 0) + callDurationSeconds;
  savePracticeStats();
  renderPracticeStats();
  renderTodayDashboard();

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

  if (shouldAutoSave) {
    if (shouldShowSummary) {
      renderCallSummary(callDurationSeconds, savedConversation);
    }
    resetActiveChatAfterCall();
    setChatStatus(savedConversation
      ? `Call saved and chat cleared. Call length: ${callDurationText}. Ready for the next call.`
      : `Call ended. Call length: ${callDurationText}. Ready for the next call.`);
  } else {
    if (shouldShowSummary) {
      renderCallSummary(callDurationSeconds, savedConversation);
    }
    setChatStatus(`${message} Call length: ${callDurationText}.`);
  }

  updateCallFocusLayout();
}

// This function lets call mode stop the current AI reply and listen again.
function interruptCallReply(message = "Interrupted. Listening again...") {
  if (!isCallModeActive) {
    return;
  }

  callReplyPlaybackId += 1;
  callTurnRequestId += 1;
  isCallReplying = false;
  spanishAudioEndedCallback = null;
  stopCallBargeInMonitor();

  if (spanishAudioPlayer) {
    spanishAudioPlayer.pause();
    spanishAudioPlayer.currentTime = 0;
  }

  clearCurrentSpanishAudioUrl();

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  interruptCallBtn.classList.add("hidden");
  setChatStatus(message);
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

// This helper finds the support-language meaning for one target-language word.
function getWordTranslation(word) {
  if (targetLanguage !== "spanish") {
    return `Loading ${getTargetLanguageProfile().translationLabel} hint`;
  }

  const cleanWord = normaliseWord(word);

  if (!cleanWord) {
    return "";
  }

  return wordTranslations[cleanWord] || "Hint coming soon";
}

// This helper finds the words that still need better hover hints.
function getMissingWordHints(includeAllVisibleWords = false) {
  const missingWords = new Map();

  document.querySelectorAll(".spanish-word").forEach((wordSpan) => {
    const hint = wordSpan.getAttribute("data-translation") || "";
    const cleanWord = normaliseWord(wordSpan.textContent || "");

    if (!cleanWord) {
      return;
    }

    if (includeAllVisibleWords || isPlaceholderWordHint(hint)) {
      missingWords.set(cleanWord, wordSpan.textContent.trim().replace(/[.,!?¿¡;:]+$/g, ""));
    }
  });

  return [...missingWords.entries()].map(([key, display]) => ({ key, display }));
}

// This helper applies a sentence-specific set of hover hints to the visible words.
function applyWordHints(hints, persistToLocalDictionary = true) {
  if (!hints || typeof hints !== "object") {
    return;
  }

  const normalisedHints = {};

  Object.entries(hints).forEach(([word, hint]) => {
    const cleanWord = normaliseWord(word);

    if (cleanWord && hint) {
      normalisedHints[cleanWord] = String(hint).trim();
      if (persistToLocalDictionary) {
        wordTranslations[cleanWord] = normalisedHints[cleanWord];
      }
    }
  });

  document.querySelectorAll(".spanish-word").forEach((wordSpan) => {
    const cleanWord = normaliseWord(wordSpan.textContent || "");
    const hint = normalisedHints[cleanWord] || wordTranslations[cleanWord];

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
  return `${targetLanguage}:${normaliseSentenceForSimilarity(sentence.spanish || "")}`;
}

// This helper asks AI for contextual word hints only when the local dictionary misses words.
async function improveMissingWordHintsWithAi(sentence, requestId) {
  if (!sentence || !(aiModeEnabled || targetLanguage !== "spanish")) {
    return;
  }

  const missingWords = getMissingWordHints(targetLanguage !== "spanish");

  if (!missingWords.length) {
    return;
  }

  const cacheKey = getWordHintCacheKey(sentence);

  if (aiWordHintCache[cacheKey]) {
    applyWordHints(aiWordHintCache[cacheKey], targetLanguage === "spanish");
    return;
  }

  try {
    const responseData = await callAiLanguageCoach({
      mode: "word-hints",
      targetLanguage,
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
    applyWordHints(hints, targetLanguage === "spanish");
  } catch (error) {
    // Keep the local hints if AI is unavailable; sentence generation should not be interrupted.
  }
}

// This helper loads one sentence into the main sentence viewer.
function setCurrentSentence(sentence, sourceLabel) {
  currentSentence = withCurrentLanguage(sentence);
  lastGeneratedSpanish = currentSentence.spanish;

  renderSpanishSentence(currentSentence.spanish);
  wordHintRequestId += 1;
  improveMissingWordHintsWithAi(currentSentence, wordHintRequestId);
  currentSentence.grammarTags = inferGrammarTags(currentSentence);
  sentenceMeta.textContent = `${capitalize(currentSentence.difficulty)} | ${capitalize(currentSentence.topic)} | ${capitalize(currentSentence.tone)} | ${formatGrammarTags(currentSentence)} | Hover words for ${getTargetLanguageProfile().translationLabel} hints | ${sourceLabel}`;
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

  if (targetLanguage !== "spanish") {
    customStatus.textContent = `${getTargetLanguageProfile().label} custom translation needs the AI translator so it stays in the right language. Turn on the AI sentence engine and try again.`;
    return null;
  }

  if (!englishInput) {
    alert(`Write a ${getTargetLanguageProfile().sourceLabel} sentence first.`);
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
    alert(`Write a ${getTargetLanguageProfile().sourceLabel} sentence first.`);
    return null;
  }

  const responseData = await callAiLanguageCoach({
    mode: "custom",
    targetLanguage,
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
  const profile = getTargetLanguageProfile();

  if (customAiNote) {
    customAiNote.classList.add("hidden");
    customAiNote.textContent = `AI helped make this sound more natural in ${profile.label}.`;
  }

  if (aiModeEnabled || targetLanguage !== "spanish") {
    const remainingCooldown = Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown > 0) {
      if (targetLanguage === "spanish") {
        customStatus.textContent = `AI cooldown is active. Please wait ${formatSecondsLabel(remainingCooldown)}. The offline translator was used for now.`;
        translatedSentence = buildOfflineCustomSentence();
      } else {
        customStatus.textContent = `AI cooldown is active. Please wait ${formatSecondsLabel(remainingCooldown)} before translating to ${profile.label}.`;
        return;
      }
    } else {
      translateCustomBtn.disabled = true;
      translateCustomBtn.textContent = "Translating...";
      customStatus.textContent = `Asking AI to translate this into more natural ${profile.label}...`;
      aiCooldownUntil = Date.now() + 10000;

      try {
        translatedSentence = await buildAiCustomSentence();
        if (customAiNote) {
          customAiNote.textContent = translatedSentence.feedback || `AI helped make this sound more natural in ${profile.label}.`;
          customAiNote.classList.remove("hidden");
        }
      } catch (error) {
        if (targetLanguage === "spanish") {
          customStatus.textContent = `${formatAiErrorMessage(error.message)} The offline translator was used instead.`;
          translatedSentence = buildOfflineCustomSentence();
        } else {
          customStatus.textContent = `${formatAiErrorMessage(error.message)} ${profile.label} translation needs AI, so no offline fallback was used.`;
        }
      } finally {
        translateCustomBtn.disabled = false;
        translateCustomBtn.textContent = `Translate to ${profile.label}`;
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
    setHoverableTargetText(customSpanishOutput, latestCustomSentence.spanish, latestCustomSentence, "translator");
    customEnglishOutput.textContent = latestCustomSentence.english;
  }

  setCurrentSentence(latestCustomSentence, "Translated sentence");

  if (!(aiModeEnabled && latestCustomSentence.ai !== true)) {
    customStatus.textContent = latestCustomSentence.ai
      ? `AI translated your sentence and made it sound more native in ${profile.label}.`
      : "Sentence translated and loaded into the main player. You can now speak it, save it, or add it to a playlist.";
  }
}

// This helper adds a message bubble to the chat log.
function addChatMessage(role, spanish, english = "") {
  chatHistory.push({ role, spanish, english, targetLanguage });
  saveCurrentChatState();
  renderChatMessages();
}

// This function redraws the chat panel.
function renderChatMessages() {
  chatMessages.innerHTML = "";
  updateChatLanguageBadge();
  updateExportActionVisibility();

  if (chatHistory.length === 0) {
    const emptyBubble = document.createElement("div");
    emptyBubble.className = "chat-bubble coach";
    emptyBubble.innerHTML = `<p class="chat-role">Coach</p><p class="chat-text">Start a chat to practise a conversation in ${getTargetLanguageProfile().label}.</p>`;
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
    const messageActions = document.createElement("div");
    const speakButton = document.createElement("button");
    const playlistButton = document.createElement("button");
    const sentenceFromMessage = {
      targetLanguage,
      spanish: messageSpanish,
      english: messageEnglish,
      difficulty: message.difficulty || "intermediate",
      topic: message.topic || chatTopicSelect.value,
      tone: message.tone || chatToneSelect.value,
      focus: "mixed",
      source: message.role === "coach" ? "chat-reply" : "chat-message",
      generated: false,
      custom: true
    };

    bubble.className = `chat-bubble ${message.role === "coach" ? "coach" : "user"}`;
    header.className = "chat-bubble-header";
    role.className = "chat-role";
    text.className = "chat-text";
    messageActions.className = "actions chat-inline-actions";
    role.textContent = message.role === "coach" ? "Coach" : "You";
    setHoverableTargetText(text, messageSpanish, { spanish: messageSpanish, english: messageEnglish }, "chat");
    header.appendChild(role);

    speakButton.className = "secondary-btn chat-audio-btn";
    playlistButton.className = "secondary-btn chat-audio-btn";
    speakButton.type = "button";
    playlistButton.type = "button";
    speakButton.textContent = "Speak";
    playlistButton.textContent = "Playlist";
    speakButton.addEventListener("click", () => {
      playSpanishAudio(messageSpanish, message.role === "coach" ? "Chat reply" : "Your chat sentence");
    });
    playlistButton.addEventListener("click", () => {
      choosePlaylistForSentence(sentenceFromMessage, (playlist) => {
        chatStatus.textContent = `Chat sentence added to "${playlist.name}".`;
      });
    });
    messageActions.appendChild(speakButton);
    messageActions.appendChild(playlistButton);

    bubble.appendChild(header);
    bubble.appendChild(text);
    if (messageSpanish) {
      bubble.appendChild(messageActions);
    }

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
        setHoverableTargetText(correctionText, correctionSpanish, {
          spanish: correctionSpanish,
          english: correctionEnglish || messageEnglish
        }, "chat");
        bubble.appendChild(correctionText);

        if (correctionEnglish) {
          const correctionEnglishText = document.createElement("p");
          correctionEnglishText.className = "chat-text chat-english";
          correctionEnglishText.textContent = correctionEnglish;
          bubble.appendChild(correctionEnglishText);
        }

        const correctionActions = document.createElement("div");
        const correctionSpeakButton = document.createElement("button");
        const correctionPlaylistButton = document.createElement("button");
        const correctionSentence = {
          ...sentenceFromMessage,
          spanish: correctionSpanish,
          english: correctionEnglish || messageEnglish || "More native chat version",
          source: "chat-correction"
        };

        correctionActions.className = "actions chat-inline-actions";
        correctionSpeakButton.className = "secondary-btn chat-audio-btn";
        correctionPlaylistButton.className = "secondary-btn chat-audio-btn";
        correctionSpeakButton.type = "button";
        correctionPlaylistButton.type = "button";
        correctionSpeakButton.textContent = "Speak";
        correctionPlaylistButton.textContent = "Playlist";
        correctionSpeakButton.addEventListener("click", () => {
          playSpanishAudio(correctionSpanish, "More native version");
        });
        correctionPlaylistButton.addEventListener("click", () => {
          choosePlaylistForSentence(correctionSentence, (playlist) => {
            chatStatus.textContent = `More native version added to "${playlist.name}".`;
          });
        });
        correctionActions.appendChild(correctionSpeakButton);
        correctionActions.appendChild(correctionPlaylistButton);
        bubble.appendChild(correctionActions);
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
      setHoverableTargetText(correctionText, correctionSpanish, {
        spanish: correctionSpanish,
        english: correctionEnglish || messageEnglish
      }, "chat");
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

  if (isCallModeActive) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// This helper builds a simple coach reply based on topic and keywords.
function buildCoachReply(userMessage) {
  const topic = getSelectedChatTopic();
  const tone = chatToneSelect.value;
  const promptGroup = chatPrompts[chatTopicSelect.value][tone];
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
  const topic = getSelectedChatTopic();
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
    debate: informal
      ? [{ spanish: `Venga, debatimos un poco sobre ${topic}: yo defiendo una postura y tÃº me llevas la contraria. Â¿QuÃ© opinas?`, english: `Come on, let's debate a bit about ${topic}: I will defend one side and you disagree with me. What do you think?` }]
      : [{ spanish: `Vamos a debatir un poco sobre ${topic}: yo defenderÃ© una postura y usted puede rebatirme. Â¿CuÃ¡l es su opiniÃ³n?`, english: `Let's debate a bit about ${topic}: I will defend one side and you can argue against me. What is your opinion?` }],
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
async function buildAiChatOpening(options = {}) {
  const fromCall = Boolean(options.fromCall);
  const responseData = await callAiLanguageCoach({
    mode: "chat-opening",
    targetLanguage,
    callMode: fromCall,
    topic: getSelectedChatTopic(),
    tone: chatToneSelect.value,
    scenario: chatScenarioSelect.value,
    scenarioInstruction: getChatScenarioInstruction(),
    personality: chatPersonalitySelect.value,
    personalityInstruction: getChatPersonalityInstruction(),
    goal: chatGoalSelect.value,
    goalInstruction: getChatGoalInstruction(),
    variationInstruction: getChatOpeningVariationInstruction(fromCall)
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
async function startChat(options = {}) {
  const fromCall = Boolean(options.fromCall);
  const forceSpeakOpening = Boolean(options.forceSpeakOpening);
  const onOpeningSpoken = typeof options.onOpeningSpoken === "function"
    ? options.onOpeningSpoken
    : null;

  if (isCallModeActive && !fromCall) {
    stopCallMode("Call mode ended. New chat started.");
  }

  let opening = targetLanguage === "spanish" ? buildLocalChatOpening() : null;

  activeConversationId = createConversationId();
  startChatTimer(true);
  chatHistory = [];
  updateActiveChatTitleFromInput();

  if (aiModeEnabled || targetLanguage !== "spanish") {
    const remainingCooldown = Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown <= 0) {
      startChatBtn.disabled = true;
      startChatBtn.textContent = "Starting...";
      chatStatus.textContent = fromCall
        ? "Starting a quick call-mode conversation..."
        : `Starting a more natural ${getTargetLanguageProfile().label} conversation...`;
      aiCooldownUntil = Date.now() + 10000;

      try {
        opening = await buildAiChatOpening({ fromCall });
      } catch (error) {
        if (targetLanguage === "spanish") {
          opening = buildLocalChatOpening();
          chatStatus.textContent = `${formatAiErrorMessage(error.message)} The built-in opening was used instead.`;
        } else {
          chatStatus.textContent = `${formatAiErrorMessage(error.message)} Try again in a moment.`;
        }
      } finally {
        startChatBtn.disabled = false;
        startChatBtn.textContent = "Start chat";
      }
    }
  }

  if (!opening) {
    return false;
  }

  lastCoachReply = opening;
  addChatMessage("coach", opening.spanish, opening.english);
  saveCurrentConversation({ silent: true });
  if (chatAutoSpeakCheckbox.checked || forceSpeakOpening) {
    playSpanishAudio(opening.spanish, "Chat opening", onOpeningSpoken, {
      progressive: false,
      browserFallback: !fromCall
    });
  } else if (onOpeningSpoken) {
    onOpeningSpoken();
  }
  if (!chatStatus.textContent.includes("built-in opening")) {
    chatStatus.textContent = `Chat started: ${getChatScenarioLabel()} | Goal: ${getChatGoalLabel()}. Reply in ${getTargetLanguageProfile().sourceLabel} or simple ${getTargetLanguageProfile().label}.`;
  }

  return true;
}

// This function saves the current conversation for later.
function saveCurrentConversation(options = {}) {
  if (!chatHistory.length) {
    if (!options.silent) {
      alert("Start a chat first.");
    }
    return;
  }

  if (!activeConversationId) {
    activeConversationId = createConversationId();
  }

  const savedAt = new Date().toISOString();
  updateActiveChatTitleFromInput();
  const conversationLanguage = options.targetLanguage || targetLanguage;
  const existingIndex = savedConversations.findIndex((item) => item.id === activeConversationId);
  const existingConversation = existingIndex === -1 ? null : savedConversations[existingIndex];
  const title = options.title || getActiveChatTitle(new Date(savedAt));
  const conversation = {
    id: activeConversationId,
    targetLanguage: conversationLanguage,
    title,
      topic: getSelectedChatTopic(),
      baseTopic: chatTopicSelect.value,
      debateTopic: debateTopicInput?.value.trim() || "",
    tone: chatToneSelect.value,
    scenario: chatScenarioSelect.value,
    personality: chatPersonalitySelect.value,
    goal: chatGoalSelect.value,
    folder: existingConversation?.folder || "General",
    durationSeconds: getCurrentChatDurationSeconds(),
    savedAt,
    messages: chatHistory.map((message) => ({
      ...message,
      targetLanguage: message?.targetLanguage || conversationLanguage
    }))
  };

  if (existingIndex === -1) {
    savedConversations.push(conversation);
  } else {
    savedConversations[existingIndex] = conversation;
  }

  localStorage.setItem("spanishSentenceSavedConversations", JSON.stringify(savedConversations));
  saveCurrentChatState();
  renderSavedConversations();
  if (!options.silent) {
    chatStatus.textContent = `Conversation saved at ${formatChatDuration(conversation.durationSeconds)}.`;
  }

  return conversation;
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
  activeChatTitle = conversation.title || "";
  chatStartedAt = 0;
  chatAccumulatedSeconds = conversation.durationSeconds || 0;
  chatHistory = conversation.messages.map((message) => ({ ...message }));
  lastCoachReply = getLastCoachReplyFromHistory(chatHistory);

  if (conversation.baseTopic || conversation.topic) {
    chatTopicSelect.value = conversation.baseTopic || conversation.topic;
  }

  if (conversation.tone) {
    chatToneSelect.value = conversation.tone;
  }

  if (conversation.scenario) {
    chatScenarioSelect.value = conversation.scenario;
  }

  if (debateTopicInput) {
    debateTopicInput.value = conversation.debateTopic || (conversation.scenario === "debate" ? conversation.topic || "" : "");
  }

  updateDebateTopicVisibility();

  if (conversation.personality) {
    chatPersonalitySelect.value = conversation.personality;
  }

  if (conversation.goal) {
    chatGoalSelect.value = conversation.goal;
  }

  updateChatNameInput();
  saveCurrentChatState();
  if (chatInput) {
    chatInput.value = "";
    removeStoredChatValue("spanishSentenceChatDraft");
  }
  renderChatMessages();
  hideConversationReview();
  updateChatTimerDisplay();
  chatStatus.textContent = `Loaded saved conversation from ${new Date(conversation.savedAt).toLocaleString()}.`;
}

// This helper asks AI to correct a chat message and make it sound more native.
async function buildAiChatReply(userMessage, options = {}) {
  const fromCall = Boolean(options.fromCall);
  const recentHistoryLimit = fromCall ? 4 : 6;
  const recentHistory = chatHistory.slice(-recentHistoryLimit).map((message) => ({
    role: message.role,
    spanish: message.spanish || "",
    english: message.english || ""
  }));

  const responseData = await callAiLanguageCoach({
    mode: "chat",
    targetLanguage,
    callMode: fromCall,
    topic: getSelectedChatTopic(),
    tone: chatToneSelect.value,
    scenario: chatScenarioSelect.value,
    scenarioInstruction: getChatScenarioInstruction(),
    personality: chatPersonalitySelect.value,
    personalityInstruction: getChatPersonalityInstruction(),
    goal: chatGoalSelect.value,
    goalInstruction: getChatGoalInstruction(),
    variationInstruction: getChatReplyVariationInstruction(fromCall),
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
  const callRequestId = fromCall ? callTurnRequestId + 1 : 0;

  if (!userMessage) {
    if (!fromCall) {
      alert("Write a message first.");
    }
    return;
  }

  clearMixedLanguageChatIfNeeded();

  if (!activeConversationId) {
    activeConversationId = createConversationId();
  }

  if (fromCall) {
    callTurnRequestId = callRequestId;
    isCallReplying = true;
    interruptCallBtn.classList.remove("hidden");
    updateCallFocusLayout("Call mode is thinking...");
    startCallBargeInMonitor();
  }

  startChatTimer(false);
  addChatMessage("user", userMessage);
  let coachReply;

  if (aiModeEnabled || fromCall || targetLanguage !== "spanish") {
    const remainingCooldown = fromCall
      ? 0
      : Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown > 0) {
      if (targetLanguage === "spanish") {
        coachReply = buildCoachReply(userMessage);
        chatStatus.textContent = `AI cooldown is active. Please wait ${formatSecondsLabel(remainingCooldown)}. The built-in coach was used for now.`;
      } else {
        chatStatus.textContent = `AI cooldown is active. Please wait ${formatSecondsLabel(remainingCooldown)} before sending another ${getTargetLanguageProfile().label} message.`;
        return;
      }
    } else {
      sendChatBtn.disabled = true;
      sendChatBtn.textContent = "Sending...";
      const thinkingStatus = fromCall
        ? "Call mode is thinking..."
        : `Asking AI to reply naturally in ${getTargetLanguageProfile().label}...`;
      if (fromCall) {
        setChatStatus(thinkingStatus);
      } else {
        chatStatus.textContent = thinkingStatus;
      }
      aiCooldownUntil = Date.now() + 10000;

      try {
        coachReply = await buildAiChatReply(userMessage, { fromCall });
      } catch (error) {
        if (targetLanguage === "spanish") {
          coachReply = buildCoachReply(userMessage);
          chatStatus.textContent = fromCall
            ? `AI reply failed: ${formatAiErrorMessage(error.message)} The built-in coach was used instead.`
            : `${formatAiErrorMessage(error.message)} The built-in coach was used instead.`;
        } else {
          chatStatus.textContent = fromCall
            ? `AI reply failed: ${formatAiErrorMessage(error.message)} Try again in a moment.`
            : `${formatAiErrorMessage(error.message)} Try again in a moment.`;
          isCallReplying = false;
          stopCallBargeInMonitor();
          interruptCallBtn.classList.add("hidden");
          return;
        }
      } finally {
        sendChatBtn.disabled = false;
        sendChatBtn.textContent = "Send message";
      }
    }
  } else {
    coachReply = buildCoachReply(userMessage);
  }

  if (fromCall && (!isCallModeActive || callRequestId !== callTurnRequestId)) {
    return;
  }

  lastCoachReply = coachReply;
  if (coachReply.correctionSpanish) {
    const lastUserMessage = [...chatHistory].reverse().find((message) => message.role === "user");

    if (lastUserMessage) {
      lastUserMessage.correctionSpanish = coachReply.correctionSpanish;
      lastUserMessage.correctionEnglish = coachReply.correctionEnglish || "";
      lastUserMessage.feedback = coachReply.feedback || "";
      lastUserMessage.hideNativeAlternative = false;
      rememberMistakePattern(lastUserMessage);
    }
  }

  chatHistory.push({
    role: "coach",
    targetLanguage,
    ...coachReply,
    correctionSpanish: "",
    correctionEnglish: "",
    feedback: ""
  });
  saveCurrentChatState();
  saveCurrentConversation({ silent: true });
  renderChatMessages();
  if (conversationReviewPanel && !conversationReviewPanel.classList.contains("hidden")) {
    renderConversationReview();
  }
  if (fromCall) {
    const playbackId = callReplyPlaybackId + 1;
    callReplyPlaybackId = playbackId;
    interruptCallBtn.classList.remove("hidden");
    setChatStatus("Coach is replying. Call mode will listen again afterwards.");
    playSpanishAudio(coachReply.spanish, "Call reply", () => {
      if (playbackId !== callReplyPlaybackId) {
        return;
      }

      isCallReplying = false;
      stopCallBargeInMonitor();
      interruptCallBtn.classList.add("hidden");
      if (isCallModeActive) {
        setChatStatus("Your turn. Speak naturally, then pause.");
        restartCallListening(300);
      }
    }, { progressive: false, browserFallback: false });
  } else if (chatAutoSpeakCheckbox.checked) {
    playSpanishAudio(coachReply.spanish, "Chat reply");
  }
  chatInput.value = "";
  removeStoredChatValue("spanishSentenceChatDraft");

  if (!fromCall && !(aiModeEnabled && coachReply.ai !== true)) {
    chatStatus.textContent = coachReply.ai
      ? coachReply.correctionSpanish
        ? `AI replied naturally and gave you a short more-native ${getTargetLanguageProfile().label} correction.`
        : `AI replied naturally in ${getTargetLanguageProfile().label} and kept the conversation going.`
      : `The coach replied in ${getTargetLanguageProfile().label}. You can speak it or use it as a sentence.`;
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
  activeChatTitle = "";
  chatAccumulatedSeconds = 0;
  chatStartedAt = 0;
  pauseChatTimer();
  removeStoredChatValue("spanishSentenceChatHistory");
  removeStoredChatValue("spanishSentenceActiveConversationId");
  removeStoredChatValue("spanishSentenceChatTitle");
  removeStoredChatValue("spanishSentenceChatStartedAt");
  removeStoredChatValue("spanishSentenceChatAccumulatedSeconds");
  removeStoredChatValue("spanishSentenceChatDraft");
  chatInput.value = "";
  updateChatNameInput();
  renderChatMessages();
  hideConversationReview();
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

  const title = getActiveChatTitle();
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
    chatStatus.textContent = `Corrected conversation opened as "${title}". Choose Save as PDF in the print dialog.`;
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

function updateMediaLoopButton(loopButton, isLooping) {
  if (!loopButton) {
    return;
  }

  loopButton.textContent = isLooping ? "Loop on" : "Loop off";
  loopButton.setAttribute("aria-pressed", String(Boolean(isLooping)));
}

function applyMediaPlayerOptions(player, speedSelect = null, loopButton = null) {
  if (!player) {
    return;
  }

  const speed = Number(speedSelect?.value || 1) || 1;
  player.playbackRate = speed;
  updateMediaLoopButton(loopButton, player.loop);
}

function bindMediaPlayerOptions(player, speedSelect = null, loopButton = null) {
  if (!player) {
    return;
  }

  if (speedSelect) {
    speedSelect.addEventListener("change", () => applyMediaPlayerOptions(player, speedSelect, loopButton));
  }

  if (loopButton) {
    loopButton.addEventListener("click", () => {
      player.loop = !player.loop;
      updateMediaLoopButton(loopButton, player.loop);
    });
  }

  applyMediaPlayerOptions(player, speedSelect, loopButton);
}

function syncRadioAudioOptions() {
  if (!spanishAudioPlayer) {
    return;
  }

  applyMediaPlayerOptions(spanishAudioPlayer, radioSpeedSelect, radioLoopBtn);
}

// This helper keeps a prepared MP3 available for mobile browsers.
function showPreparedMp3(panel, player, link, objectUrlName, blob, filename) {
  if (!panel || !player || !link) {
    return;
  }

  if (objectUrlName === "playlist" && playlistMp3ObjectUrl) {
    URL.revokeObjectURL(playlistMp3ObjectUrl);
  }

  if (objectUrlName === "batch" && batchMp3ObjectUrl) {
    URL.revokeObjectURL(batchMp3ObjectUrl);
  }

  if (objectUrlName === "dialogue" && dialogueMp3ObjectUrl) {
    URL.revokeObjectURL(dialogueMp3ObjectUrl);
  }

  const objectUrl = URL.createObjectURL(blob);

  if (objectUrlName === "playlist") {
    playlistMp3ObjectUrl = objectUrl;
  } else if (objectUrlName === "dialogue") {
    dialogueMp3ObjectUrl = objectUrl;
  } else {
    batchMp3ObjectUrl = objectUrl;
  }

  player.src = objectUrl;
  applyMediaPlayerOptions(player,
    objectUrlName === "playlist" ? playlistSpeedSelect : objectUrlName === "dialogue" ? dialogueSpeedSelect : batchSpeedSelect,
    objectUrlName === "playlist" ? playlistLoopBtn : objectUrlName === "dialogue" ? dialogueLoopBtn : batchLoopBtn
  );
  link.href = objectUrl;
  link.download = filename;
  link.textContent = `Save MP3 (${filename})`;
  link.classList.remove("hidden");
  panel.classList.remove("hidden");
  return objectUrl;
}

// This helper keeps a prepared batch MP3 available for mobile browsers.
function showBatchMp3Ready(blob, filename) {
  showPreparedMp3(batchMp3Panel, batchMp3Player, batchMp3Link, "batch", blob, filename);
}

// This helper keeps a prepared playlist MP3 available for mobile browsers.
function showPlaylistMp3Ready(blob, filename) {
  showPreparedMp3(playlistMp3Panel, playlistMp3Player, playlistMp3Link, "playlist", blob, filename);
}

function showDialogueMp3Ready(blob, filename) {
  return showPreparedMp3(dialoguePlaybackControls, dialogueAudioPlayer, dialogueMp3Link, "dialogue", blob, filename);
}

function showConversationMp3Ready(blob, filename, turns = []) {
  stopRadioMode();
  stopFullConversationPlayback("");

  fullConversationPlayback = {
    isPlaying: true,
    isPaused: true,
    index: 0,
    turns,
    playbackId: fullConversationPlayback.playbackId + 1,
    audioUrl: URL.createObjectURL(blob),
    filename
  };

  fullConversationAudioPlayer.src = fullConversationPlayback.audioUrl;
  applyMediaPlayerOptions(fullConversationAudioPlayer, conversationSpeedSelect, conversationLoopBtn);

  if (conversationMp3Link) {
    conversationMp3Link.href = fullConversationPlayback.audioUrl;
    conversationMp3Link.download = filename;
    conversationMp3Link.textContent = `Save MP3 (${filename})`;
    conversationMp3Link.classList.remove("hidden");
  }

  conversationPlaybackControls.classList.remove("hidden");
  fullConversationAudioPlayer.classList.remove("hidden");
  playFullChatBtn.classList.add("hidden");
  stopFullChatBtn.classList.remove("hidden");
  fullConversationAudioPlayer.load();
  updateConversationPlaybackControls();
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
      body: JSON.stringify({
        turns,
        targetLanguage,
        voice: getSelectedSpanishVoice()
      })
    });
  } catch (error) {
    throw new Error("Network error. The app could not reach the conversation audio backend.");
  }

  if (!response.ok) {
    let errorMessage = "The conversation audio backend was not ready.";

    const responseText = await response.text();

    try {
      const errorData = JSON.parse(responseText);
      errorMessage = errorData.details || errorData.error || errorMessage;
    } catch (error) {
      errorMessage = responseText.trim()
        ? `The conversation audio backend returned ${response.status}: ${responseText.trim().slice(0, 180)}`
        : `The conversation audio backend returned ${response.status} without details.`;
    }

    throw new Error(errorMessage);
  }

  return response.blob();
}

// This helper creates one playable MP3 from several smaller backend requests.
async function fetchChunkedConversationAudioBlob(turns, statusCallback = null, chunkSize = 10, cacheScope = "conversation") {
  const fullCacheKey = createConversationAudioCacheKey(turns, `${cacheScope}-full`);
  const cachedFullBlob = await getCachedAudioBlobByKey(fullCacheKey);

  if (cachedFullBlob) {
    return cachedFullBlob;
  }

  const chunks = [];

  for (let index = 0; index < turns.length; index += chunkSize) {
    const chunkTurns = turns.slice(index, index + chunkSize);
    const chunkNumber = Math.floor(index / chunkSize) + 1;
    const totalChunks = Math.ceil(turns.length / chunkSize);
    const chunkCacheKey = createConversationAudioCacheKey(chunkTurns, `${cacheScope}-chunk-${chunkNumber}`);

    if (typeof statusCallback === "function") {
      statusCallback(chunkNumber, totalChunks);
    }

    let chunkBlob = await getCachedAudioBlobByKey(chunkCacheKey);

    if (!chunkBlob) {
      chunkBlob = await fetchConversationAudioBlob(chunkTurns);
      await cacheAudioBlobByKey(chunkCacheKey, chunkBlob);
    }

    chunks.push(chunkBlob);
  }

  const fullBlob = new Blob(chunks, { type: "audio/mpeg" });
  await cacheAudioBlobByKey(fullCacheKey, fullBlob);
  return fullBlob;
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

  const filename = `${getConversationExportBaseName()}-full.mp3`;

  try {
    const audioBlob = await fetchChunkedConversationAudioBlob(turns, (chunkNumber, totalChunks) => {
      chatStatus.textContent = `Preparing full conversation audio part ${chunkNumber} of ${totalChunks}...`;
    }, 10, "chat");
    showConversationMp3Ready(audioBlob, filename, turns);
    downloadAudioBlob(audioBlob, filename);
    chatStatus.textContent = `Full conversation MP3 ready. If your phone did not download it automatically, use Save MP3.`;
  } catch (error) {
    chatStatus.textContent = `Could not download the full MP3. ${error.message}`;
  } finally {
    downloadChatMp3sBtn.disabled = false;
    downloadChatMp3sBtn.textContent = "Download full conversation MP3";
  }
}

// This function asks AI to create a full dialogue from the selected topic.
async function generateDialogue() {
  const topic = dialogueTopicInput.value.trim();

  if (!topic) {
    alert("Type a dialogue topic first.");
    return;
  }

  generateDialogueBtn.disabled = true;
  generateDialogueBtn.textContent = "Generating...";
  dialogueStatus.textContent = `Generating a natural ${getTargetLanguageProfile().label} dialogue...`;

  try {
    const data = await callAiLanguageCoach({
      mode: "dialogue",
      targetLanguage,
      topic,
      setting: dialogueSettingSelect.value,
      level: dialogueLevelSelect.value,
      tone: dialogueToneSelect.value,
      turnCount: Number(dialogueTurnsSelect.value) || 8
    });

    if (!data || !data.dialogue || !Array.isArray(data.dialogue.lines) || !data.dialogue.lines.length) {
      throw new Error("The AI did not return a valid dialogue.");
    }

    currentDialogue = {
      id: createConversationId(),
      targetLanguage,
      generatedAt: new Date().toISOString(),
      ...data.dialogue
    };
    saveCurrentDialogueState();
    renderDialogue();
    saveCurrentDialogue({ silent: true });
    dialogueStatus.textContent = "Dialogue generated and auto-saved. Add any lines you like to a playlist, or download the full PDF/MP3.";
  } catch (error) {
    dialogueStatus.textContent = `Could not generate the dialogue. ${formatAiErrorMessage(error.message)}`;
  } finally {
    generateDialogueBtn.disabled = false;
    generateDialogueBtn.textContent = "Generate dialogue";
  }
}

// This function saves the full generated dialogue for later.
function saveCurrentDialogue(options = {}) {
  const silent = Boolean(options.silent);

  if (!currentDialogue || !currentDialogue.lines?.length) {
    if (!silent) {
      alert("Generate a dialogue first.");
    }
    return false;
  }

  const savedDialogue = {
    ...currentDialogue,
    id: currentDialogue.id || createConversationId(),
    targetLanguage,
    savedAt: new Date().toISOString()
  };
  const existingIndex = savedDialogues.findIndex((dialogue) => dialogue.id === savedDialogue.id);

  if (existingIndex === -1) {
    savedDialogues.push(savedDialogue);
  } else {
    savedDialogues[existingIndex] = savedDialogue;
  }

  currentDialogue = savedDialogue;
  saveCurrentDialogueState();
  saveDialogues();
  renderSavedDialogues();
  if (!silent) {
    dialogueStatus.textContent = "Dialogue saved.";
  }
  return true;
}

// This function opens a print-ready dialogue document for saving as PDF.
function downloadDialoguePdf() {
  if (!currentDialogue || !currentDialogue.lines?.length) {
    alert("Generate a dialogue first.");
    return;
  }

  const title = currentDialogue.title || `${getTargetLanguageProfile().label} dialogue`;
  const profile = getTargetLanguageProfile();
  const printableWindow = window.open("", "_blank");

  if (!printableWindow) {
    alert("Pop-up blocked. Please allow pop-ups, then try again.");
    return;
  }

  const rows = currentDialogue.lines.map((line, index) => `
    <tr>
      <td class="line-number">${index + 1}</td>
      <td>
        <p class="role">${escapeHtml(line.speaker || "Speaker")}</p>
        <p class="target">${escapeHtml(line.spanish)}</p>
      </td>
      <td>
        <p class="translation">${escapeHtml(line.english || "")}</p>
      </td>
    </tr>
  `).join("");
  const phrases = Array.isArray(currentDialogue.usefulPhrases) && currentDialogue.usefulPhrases.length
    ? `
      <h2>Useful phrases</h2>
      <table>
        <thead>
          <tr>
            <th class="line-number"></th>
            <th>${escapeHtml(profile.label)}</th>
            <th>${escapeHtml(profile.translationLabel)}</th>
          </tr>
        </thead>
        <tbody>
          ${currentDialogue.usefulPhrases.map((phrase, index) => `
            <tr>
              <td class="line-number">${index + 1}</td>
              <td>
                <p class="target">${escapeHtml(phrase.spanish)}</p>
                ${phrase.note ? `<p class="note">${escapeHtml(phrase.note)}</p>` : ""}
              </td>
              <td>
                <p class="translation">${escapeHtml(phrase.english || "")}</p>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `
    : "";

  printableWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${escapeHtml(title)}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 32px; color: #1f2937; }
        h1 { margin: 0 0 8px; font-size: 28px; }
        h2 { margin: 28px 0 12px; font-size: 20px; }
        .meta { margin: 0 0 24px; color: #6b7280; }
        table { width: 100%; border-collapse: collapse; table-layout: fixed; }
        th { padding: 10px 12px; text-align: left; color: #b45309; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 2px solid #d1d5db; }
        td { vertical-align: top; padding: 14px 12px; border-bottom: 1px solid #e5e7eb; }
        tr { break-inside: avoid; }
        .line-number { width: 36px; color: #9ca3af; font-size: 12px; font-weight: 700; text-align: right; }
        .role { margin: 0 0 6px; color: #b45309; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; font-size: 11px; }
        .target { margin: 0; font-size: 18px; font-weight: 700; line-height: 1.45; }
        .translation { margin: 0; color: #4b5563; line-height: 1.55; }
        .note { margin: 8px 0 0; color: #6b7280; font-size: 13px; font-style: italic; line-height: 1.45; }
        @media print {
          body { margin: 22mm 18mm; }
          th, td { padding-left: 8px; padding-right: 8px; }
        }
      </style>
    </head>
    <body>
      <h1>${escapeHtml(title)}</h1>
      <p class="meta">${escapeHtml(capitalize(currentDialogue.level || "intermediate"))} | ${escapeHtml(capitalize(currentDialogue.tone || "informal"))} | ${escapeHtml(currentDialogue.topic || "dialogue")}</p>
      <table>
        <thead>
          <tr>
            <th class="line-number"></th>
            <th>${escapeHtml(profile.label)}</th>
            <th>${escapeHtml(profile.translationLabel)}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      ${phrases}
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
  dialogueStatus.textContent = "Dialogue PDF opened. Choose Save as PDF in the print dialog.";
}

// This function downloads the generated dialogue as one MP3.
async function downloadDialogueMp3() {
  const turns = getDialogueAudioTurns();

  if (!turns.length) {
    alert("Generate a dialogue first.");
    return;
  }

  downloadDialogueMp3Btn.disabled = true;
  downloadDialogueMp3Btn.textContent = "Preparing MP3...";
  dialogueStatus.textContent = "Preparing dialogue MP3...";

  try {
    const audioBlob = await fetchChunkedConversationAudioBlob(turns, (chunkNumber, totalChunks) => {
      dialogueStatus.textContent = `Preparing dialogue audio part ${chunkNumber} of ${totalChunks}...`;
    }, 10, "dialogue");
    const filename = `${slugifyFilename(currentDialogue.title || currentDialogue.topic || "dialogue")}.mp3`;
    const objectUrl = showDialogueMp3Ready(audioBlob, filename);
    dialoguePlayback.isPlaying = true;
    dialoguePlayback.audioUrl = objectUrl || dialoguePlayback.audioUrl || "";
    dialogueAudioPlayer.load();
    playDialogueBtn.classList.add("hidden");
    stopDialogueBtn.classList.remove("hidden");
    downloadAudioBlob(audioBlob, filename);
    dialogueStatus.textContent = "Dialogue MP3 ready. If your phone did not download it automatically, use Save MP3.";
    updateDialoguePlaybackControls();
  } catch (error) {
    dialogueStatus.textContent = `Could not download the dialogue MP3. ${error.message}`;
  } finally {
    downloadDialogueMp3Btn.disabled = false;
    downloadDialogueMp3Btn.textContent = "Download MP3";
  }
}

// This helper updates the generated-dialogue media control row.
function updateDialoguePlaybackControls() {
  const isActive = dialoguePlayback.isPlaying;
  const currentTime = dialogueAudioPlayer ? dialogueAudioPlayer.currentTime : 0;
  const duration = dialogueAudioPlayer ? dialogueAudioPlayer.duration : 0;
  const hasDuration = Number.isFinite(duration) && duration > 0;

  dialoguePlaybackControls.classList.toggle("hidden", !isActive);
  dialogueAudioPlayer.classList.toggle("hidden", !isActive);
  previousDialogueBtn.disabled = !isActive || currentTime <= 0;
  pauseDialogueBtn.disabled = !isActive;
  nextDialogueBtn.disabled = !isActive || (hasDuration && currentTime >= duration);
  pauseDialogueBtn.textContent = dialogueAudioPlayer && dialogueAudioPlayer.paused ? "Resume" : "Pause";
  dialoguePlaybackProgress.textContent = isActive
    ? `${dialogueAudioPlayer.paused ? "Paused" : "Playing"} ${formatMediaTime(currentTime)} / ${hasDuration ? formatMediaTime(duration) : "--:--"}`
    : "Not playing";
}

// This helper stops the generated-dialogue media player.
function stopDialoguePlayback(message = "Dialogue playback stopped.") {
  dialoguePlayback.isPlaying = false;

  if (dialogueAudioPlayer) {
    dialogueAudioPlayer.pause();
    dialogueAudioPlayer.removeAttribute("src");
    dialogueAudioPlayer.load();
  }

  if (dialoguePlayback.audioUrl) {
    URL.revokeObjectURL(dialoguePlayback.audioUrl);
    dialoguePlayback.audioUrl = "";
  }

  dialogueMp3ObjectUrl = "";

  if (dialogueMp3Link) {
    dialogueMp3Link.classList.add("hidden");
    dialogueMp3Link.removeAttribute("href");
    dialogueMp3Link.removeAttribute("download");
    dialogueMp3Link.textContent = "Save MP3";
  }

  playDialogueBtn.classList.remove("hidden");
  stopDialogueBtn.classList.add("hidden");
  updateDialoguePlaybackControls();

  if (message) {
    dialogueStatus.textContent = message;
  }
}

// This function loads the generated dialogue into an on-page media player.
async function playDialogueMedia() {
  const turns = getDialogueAudioTurns();

  if (!turns.length) {
    alert("Generate a dialogue first.");
    return;
  }

  stopDialoguePlayback("");
  dialoguePlayback.isPlaying = true;
  playDialogueBtn.classList.add("hidden");
  stopDialogueBtn.classList.remove("hidden");
  dialoguePlaybackProgress.textContent = "Preparing audio...";
  dialoguePlaybackControls.classList.remove("hidden");
  dialogueAudioPlayer.classList.remove("hidden");
  pauseDialogueBtn.disabled = true;
  previousDialogueBtn.disabled = true;
  nextDialogueBtn.disabled = true;
  dialogueStatus.textContent = "Preparing dialogue media player...";

  try {
    const audioBlob = await fetchChunkedConversationAudioBlob(turns, (chunkNumber, totalChunks) => {
      dialogueStatus.textContent = `Preparing dialogue audio part ${chunkNumber} of ${totalChunks}...`;
    }, 10, "dialogue");
    const filename = `${slugifyFilename(currentDialogue.title || currentDialogue.topic || "dialogue")}.mp3`;
    dialoguePlayback.audioUrl = showDialogueMp3Ready(audioBlob, filename);
    dialogueAudioPlayer.src = dialoguePlayback.audioUrl;
    dialogueAudioPlayer.load();
    await dialogueAudioPlayer.play();
    dialogueStatus.textContent = "Dialogue loaded in the media player.";
  } catch (error) {
    stopDialoguePlayback(`Could not load the dialogue player. ${error.message}`);
    return;
  }

  updateDialoguePlaybackControls();
}

// This function pauses or resumes the generated-dialogue media player.
function toggleDialoguePlaybackPause() {
  if (!dialoguePlayback.isPlaying) {
    return;
  }

  if (dialogueAudioPlayer.paused) {
    dialogueAudioPlayer.play().catch(() => {
      dialogueStatus.textContent = "Tap play in the media player to resume.";
    });
  } else {
    dialogueAudioPlayer.pause();
  }

  updateDialoguePlaybackControls();
}

// This function jumps backward or forward inside the generated-dialogue track.
function skipDialoguePlayback(direction) {
  if (!dialoguePlayback.isPlaying) {
    return;
  }

  const duration = Number.isFinite(dialogueAudioPlayer.duration)
    ? dialogueAudioPlayer.duration
    : Number.MAX_SAFE_INTEGER;
  const offset = direction === "previous" ? -15 : 15;
  dialogueAudioPlayer.currentTime = Math.max(
    0,
    Math.min(duration, dialogueAudioPlayer.currentTime + offset)
  );
  updateDialoguePlaybackControls();
}

// This function clears the generated dialogue panel.
function clearDialogue() {
  stopDialoguePlayback("");
  currentDialogue = null;
  saveCurrentDialogueState();
  renderDialogue();
  dialogueStatus.textContent = "Dialogue cleared.";
}

// This helper updates the full-conversation media control row.
function updateConversationPlaybackControls() {
  const isActive = fullConversationPlayback.isPlaying;
  const currentTime = fullConversationAudioPlayer ? fullConversationAudioPlayer.currentTime : 0;
  const duration = fullConversationAudioPlayer ? fullConversationAudioPlayer.duration : 0;
  const hasDuration = Number.isFinite(duration) && duration > 0;

  conversationPlaybackControls.classList.toggle("hidden", !isActive);
  fullConversationAudioPlayer.classList.toggle("hidden", !isActive);
  if (conversationMp3Link) {
    conversationMp3Link.classList.toggle("hidden", !isActive || !fullConversationPlayback.audioUrl);
  }
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

  if (conversationMp3Link) {
    conversationMp3Link.classList.add("hidden");
    conversationMp3Link.removeAttribute("href");
    conversationMp3Link.removeAttribute("download");
    conversationMp3Link.textContent = "Save MP3";
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
async function loadFullConversationMedia(turns, label = "Full conversation", fromPlaylist = false, filename = `${getConversationExportBaseName()}-full.mp3`) {
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
    audioUrl: "",
    filename
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
    const audioBlob = await fetchChunkedConversationAudioBlob(turns, (chunkNumber, totalChunks) => {
      chatStatus.textContent = `Preparing conversation audio part ${chunkNumber} of ${totalChunks}...`;
    }, 10, "conversation-playlist");
    fullConversationPlayback.audioUrl = URL.createObjectURL(audioBlob);
    fullConversationAudioPlayer.src = fullConversationPlayback.audioUrl;
    applyMediaPlayerOptions(fullConversationAudioPlayer, conversationSpeedSelect, conversationLoopBtn);
    if (conversationMp3Link) {
      conversationMp3Link.href = fullConversationPlayback.audioUrl;
      conversationMp3Link.download = filename;
      conversationMp3Link.textContent = `Save MP3 (${filename})`;
      conversationMp3Link.classList.remove("hidden");
    }
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

  loadFullConversationMedia(turns, "Full conversation loaded in the media player.", false, `${getConversationExportBaseName()}-full.mp3`);
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
  loadFullConversationMedia(conversation.turns, `Conversation loaded: ${conversation.title}`, true, `${getConversationExportBaseName(conversation.title)}-full.mp3`);
}

// This function plays every saved full conversation in order.
function playConversationPlaylist() {
  const languageConversationPlaylist = getCurrentLanguageItems(conversationPlaylist);

  if (!languageConversationPlaylist.length) {
    alert("Add a conversation to the conversation playlist first.");
    return;
  }

  const turns = languageConversationPlaylist.flatMap((conversation, conversationIndex) => {
    return conversation.turns.map((turn) => ({
      ...turn,
      role: `${conversationIndex + 1}. ${turn.role}`
    }));
  });

  playConversationPlaylistBtn.classList.add("hidden");
  stopConversationPlaylistBtn.classList.remove("hidden");
  loadFullConversationMedia(turns, "Conversation playlist loaded in the media player.", true, `${getConversationExportBaseName("conversation playlist")}-full.mp3`);
}

// This function removes one full conversation from the conversation playlist.
function removeConversationPlaylistItem(conversationId) {
  const removedConversation = conversationPlaylist.find((item) => item.id === conversationId);
  conversationPlaylist = conversationPlaylist.filter((item) => item.id !== conversationId);
  saveConversationPlaylist();
  renderConversationPlaylist();
  chatStatus.textContent = "Conversation removed from the conversation playlist.";
  if (removedConversation) {
    showUndo("Conversation removed from playlist.", () => {
      conversationPlaylist.unshift(removedConversation);
      saveConversationPlaylist();
      renderConversationPlaylist();
      chatStatus.textContent = "Conversation restored to playlist.";
    });
  }
}

// This function turns a Spanish sentence into hoverable words.
function buildHoverableFragment(text, exampleSentence = null, source = "sentence") {
  const fragment = document.createDocumentFragment();
  const safeText = String(text || "");
  const parts = safeText.split(" ");
  const example = exampleSentence || { spanish: safeText, english: "" };

  parts.forEach((part, index) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "spanish-word";
    wordSpan.textContent = part;
    wordSpan.setAttribute("tabindex", "0");
    wordSpan.setAttribute("data-translation", getWordTranslation(part));
    wordSpan.dataset.example = example.spanish || safeText;
    wordSpan.dataset.exampleEnglish = example.english || "";
    wordSpan.title = "Click for word options";
    wordSpan.addEventListener("click", (event) => {
      event.stopPropagation();
      showWordActionPanel(wordSpan, source);
    });
    fragment.appendChild(wordSpan);

    if (index < parts.length - 1) {
      fragment.appendChild(document.createTextNode(" "));
    }
  });

  return fragment;
}

function setHoverableTargetText(element, text, exampleSentence = null, source = "sentence") {
  if (!element) {
    return;
  }

  element.textContent = "";
  if (!text) {
    return;
  }

  element.appendChild(buildHoverableFragment(text, exampleSentence, source));
}

// This function draws the current Spanish sentence with hover hints.
function renderSpanishSentence(text) {
  spanishSentence.innerHTML = "";
  spanishSentence.appendChild(buildHoverableFragment(text, currentSentence));
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
  const sourceSentences = favouritesOnlyCheckbox?.checked
    ? getCurrentLanguageItems(favourites)
    : baseSentences;

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
function createSpanishAudioCacheKey(text, voiceChoice = getSelectedSpanishVoice()) {
  const cacheText = `${targetLanguage}:${voiceChoice || "primary"}:${text}`;
  return createAudioCacheKeyFromText("sentence", cacheText);
}

function createAudioCacheKeyFromText(scope, cacheText) {
  let hash = 0;

  for (let index = 0; index < cacheText.length; index += 1) {
    hash = ((hash << 5) - hash) + cacheText.charCodeAt(index);
    hash |= 0;
  }

  return `audio_${SPANISH_AUDIO_CACHE_VERSION}_${scope}_${Math.abs(hash)}_${cacheText.length}`;
}

function createConversationAudioCacheKey(turns, scope = "conversation") {
  const text = turns
    .map((turn) => String(turn.spanish || turn.text || "").trim())
    .filter(Boolean)
    .join("\n");
  const cacheText = `${targetLanguage}:${getSelectedSpanishVoice() || "primary"}:${text}`;
  return createAudioCacheKeyFromText(scope, cacheText);
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
async function getCachedAudioBlobByKey(cacheKey) {
  const db = await openSpanishAudioDb();

  if (!db) {
    return null;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("audio", "readonly");
    const store = transaction.objectStore("audio");
    const request = store.get(cacheKey);

    request.onsuccess = () => {
      resolve(request.result || null);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

async function getCachedSpanishAudioBlob(text) {
  return getCachedAudioBlobByKey(createSpanishAudioCacheKey(text));
}

async function cacheAudioBlobByKey(cacheKey, blob) {
  const db = await openSpanishAudioDb();

  if (!db) {
    return;
  }

  return new Promise((resolve, reject) => {
    const transaction = db.transaction("audio", "readwrite");
    const store = transaction.objectStore("audio");
    const request = store.put(blob, cacheKey);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

// This helper saves a Spanish audio blob locally so replays do not need a new request.
async function cacheSpanishAudioBlob(text, blob) {
  return cacheAudioBlobByKey(createSpanishAudioCacheKey(text), blob);
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
    hideNowPlaying();
    const callback = spanishAudioEndedCallback;
    spanishAudioEndedCallback = null;

    if (typeof callback === "function") {
      callback();
    }
  });
  spanishAudioPlayer.addEventListener("timeupdate", updateRadioPlaybackControls);
  spanishAudioPlayer.addEventListener("loadedmetadata", updateRadioPlaybackControls);
  spanishAudioPlayer.addEventListener("play", updateRadioPlaybackControls);
  spanishAudioPlayer.addEventListener("pause", updateRadioPlaybackControls);
  syncRadioAudioOptions();

  return spanishAudioPlayer;
}

// This helper cleans up the current object URL when a different audio clip is loaded.
function clearCurrentSpanishAudioUrl() {
  if (currentSpanishStreamReader) {
    currentSpanishStreamReader.cancel().catch(() => {
      // Ignore stream cancellation errors.
    });
    currentSpanishStreamReader = null;
  }

  if (currentSpanishAudioUrl) {
    URL.revokeObjectURL(currentSpanishAudioUrl);
    currentSpanishAudioUrl = "";
  }

  currentSpanishMediaSource = null;
}

// This helper fully stops any Spanish audio path before another one starts.
function stopSpanishAudioPlayback(clearCallback = true) {
  spanishAudioPlaybackId += 1;

  if (spanishAudioPlayer) {
    spanishAudioPlayer.pause();
    spanishAudioPlayer.removeAttribute("src");
    spanishAudioPlayer.load();
  }

  clearCurrentSpanishAudioUrl();

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  if (clearCallback) {
    spanishAudioEndedCallback = null;
  }

  hideNowPlaying();
}

// This helper adds Android lock-screen media information when available.
function updateSpanishMediaSession(titleText) {
  const profile = getTargetLanguageProfile();

  if (!("mediaSession" in navigator)) {
    return;
  }

  navigator.mediaSession.metadata = new MediaMetadata({
    title: titleText || `${profile.label} sentence`,
    artist: `${profile.label} Sentence Generator`,
    album: `${profile.label} practice`
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

function getAudioBackendLabel() {
  return `${getTargetLanguageProfile().label} voice backend`;
}

// This helper asks the backend for one target-language audio file from ElevenLabs.
async function fetchSpanishAudioBlob(text) {
  let response;
  const audioBackendLabel = getAudioBackendLabel();

  try {
    response = await fetch("/api/generate-spanish-audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text,
        targetLanguage,
        voice: getSelectedSpanishVoice()
      })
    });
  } catch (error) {
    throw new Error(`Network error. The app could not reach the ${audioBackendLabel}.`);
  }

  if (!response.ok) {
    let errorMessage = `The ${audioBackendLabel} was not ready.`;

    try {
      const errorData = await response.json();
      errorMessage = errorData.details || errorData.error || errorMessage;
    } catch (error) {
      errorMessage = `The ${audioBackendLabel} returned an unexpected error.`;
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

// This helper checks whether this browser can append streamed MP3 chunks to an audio player.
function canUseProgressiveSpanishAudio() {
  return Boolean(
    window.MediaSource &&
    typeof MediaSource.isTypeSupported === "function" &&
    MediaSource.isTypeSupported("audio/mpeg")
  );
}

// This helper streams ElevenLabs audio into the player as chunks arrive.
async function playProgressiveSpanishAudio(text, titleText = "Spanish sentence", playbackId = spanishAudioPlaybackId) {
  if (!canUseProgressiveSpanishAudio()) {
    throw new Error("Progressive audio is not supported in this browser.");
  }

  const assertCurrentPlayback = () => {
    if (playbackId !== spanishAudioPlaybackId) {
      throw new Error("Audio playback was cancelled.");
    }
  };

  const player = ensureSpanishAudioPlayer();
  const mediaSource = new MediaSource();
  const streamUrl = URL.createObjectURL(mediaSource);

  assertCurrentPlayback();
  currentSpanishAudioUrl = streamUrl;
  currentSpanishMediaSource = mediaSource;
  player.src = streamUrl;
  updateSpanishMediaSession(titleText);

  const sourceOpenPromise = new Promise((resolve, reject) => {
    mediaSource.addEventListener("sourceopen", resolve, { once: true });
    mediaSource.addEventListener("error", () => reject(new Error("The audio stream could not be opened.")), { once: true });
  });

  await sourceOpenPromise;
  assertCurrentPlayback();

  const response = await fetch("/api/stream-spanish-audio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text,
      targetLanguage,
      voice: getSelectedSpanishVoice()
    })
  });

  if (!response.ok || !response.body) {
    let errorMessage = "The streaming audio backend was not ready.";

    try {
      const errorData = await response.json();
      errorMessage = errorData.details || errorData.error || errorMessage;
    } catch (error) {
      errorMessage = "The streaming audio backend returned an unexpected error.";
    }

    throw new Error(errorMessage);
  }

  const sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");
  const reader = response.body.getReader();
  const streamedChunks = [];

  currentSpanishStreamReader = reader;

  const appendChunk = (chunk) => new Promise((resolve, reject) => {
    const finish = () => {
      sourceBuffer.removeEventListener("updateend", finish);
      sourceBuffer.removeEventListener("error", fail);
      resolve();
    };
    const fail = () => {
      sourceBuffer.removeEventListener("updateend", finish);
      sourceBuffer.removeEventListener("error", fail);
      reject(new Error("The streamed audio chunk could not be added."));
    };

    sourceBuffer.addEventListener("updateend", finish);
    sourceBuffer.addEventListener("error", fail);
    sourceBuffer.appendBuffer(chunk);
  });

  let playPromise = null;
  let playbackStarted = false;

  while (true) {
    assertCurrentPlayback();
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    streamedChunks.push(value);
    await appendChunk(value);

    if (!playbackStarted) {
      playbackStarted = true;
      playPromise = player.play();
      await playPromise;
      assertCurrentPlayback();
    }
  }

  currentSpanishStreamReader = null;

  if (mediaSource.readyState === "open") {
    mediaSource.endOfStream();
  }

  if (streamedChunks.length) {
    cacheSpanishAudioBlob(text, new Blob(streamedChunks, { type: "audio/mpeg" })).catch(() => {
      // Audio caching is a convenience; playback has already succeeded.
    });
  }
}

// This helper plays Spanish using cached/generated audio first, then falls back to browser TTS.
async function playSpanishAudio(text, titleText = "Spanish sentence", callback = null, options = {}) {
  if (!text) {
    return;
  }

  if (!options.fromQueue) {
    audioQueue = [{
      text,
      title: titleText || "Audio",
      detail: "Current audio"
    }];
    audioQueueIndex = 0;
    isAudioQueuePlaying = false;
    renderAudioQueue();
  }

  stopSpanishAudioPlayback(false);
  updateNowPlaying(titleText, "Preparing high-quality voice...");
  const playbackId = spanishAudioPlaybackId;
  const player = ensureSpanishAudioPlayer();
  if (radioState.isPlaying) {
    syncRadioAudioOptions();
  } else if (options.fromQueue || !callback) {
    applyQueuePlayerOptions();
  } else {
    player.loop = false;
    player.playbackRate = Number(queueSpeedSelect?.value || 1) || 1;
  }
  spanishAudioEndedCallback = () => {
    if (playbackId !== spanishAudioPlaybackId) {
      return;
    }

    if (typeof callback === "function") {
      callback();
    }
  };

  try {
    const shouldUseProgressiveAudio = Boolean(callback) && options.progressive !== false;
    const cachedAudioBlob = await getCachedSpanishAudioBlob(text);

    if (cachedAudioBlob) {
      if (playbackId !== spanishAudioPlaybackId) {
        return;
      }

      currentSpanishAudioUrl = URL.createObjectURL(cachedAudioBlob);
      player.src = currentSpanishAudioUrl;
      updateSpanishMediaSession(titleText);
      await player.play();
      updateNowPlaying(titleText, "Playing cached audio");
      return;
    }

    if (shouldUseProgressiveAudio) {
      try {
        await playProgressiveSpanishAudio(text, titleText, playbackId);
        updateNowPlaying(titleText, "Playing");
        return;
      } catch (streamingError) {
        if (playbackId !== spanishAudioPlaybackId) {
          return;
        }
        player.pause();
        player.removeAttribute("src");
        player.load();
        clearCurrentSpanishAudioUrl();
      }
    }

    const audioBlob = await fetchSpanishAudioBlob(text);
    await cacheSpanishAudioBlob(text, audioBlob);

    if (playbackId !== spanishAudioPlaybackId) {
      return;
    }

    currentSpanishAudioUrl = URL.createObjectURL(audioBlob);
    player.src = currentSpanishAudioUrl;
    updateSpanishMediaSession(titleText);
    await player.play();
    updateNowPlaying(titleText, "Playing");
    return;
  } catch (error) {
    if (playbackId !== spanishAudioPlaybackId) {
      return;
    }

    clearCurrentSpanishAudioUrl();
    const shouldUseBrowserFallback = options.browserFallback !== false;

    if (!shouldUseBrowserFallback) {
      showStatusMessage(`${getTargetLanguageProfile().label} voice audio was unavailable. ${error.message}`);
      updateNowPlaying(titleText, "High-quality voice unavailable");
      if (typeof callback === "function") {
        callback();
      }
      return;
    }

    if (callback) {
      speakTextWithCallback(text, getTargetLanguageProfile().speechCode, callback);
    } else {
      speakText(text, getTargetLanguageProfile().speechCode);
    }

    showStatusMessage(`${getTargetLanguageProfile().label} audio fallback used. ${error.message}`);
    updateNowPlaying(titleText, "Using browser fallback voice");
  }
}

function updateNowPlaying(title, detail = "Playing") {
  if (!nowPlayingBar) {
    return;
  }

  nowPlayingTitle.textContent = title || "Audio";
  nowPlayingDetail.textContent = detail;
  nowPlayingBar.classList.remove("hidden");
}

function hideNowPlaying() {
  nowPlayingBar?.classList.add("hidden");
}

function normaliseAudioQueueItem(item) {
  if (!item) {
    return null;
  }

  if (typeof item === "string") {
    return {
      text: item,
      title: "Queued sentence",
      detail: ""
    };
  }

  const text = item.text || item.spanish || item.nativeText || item.sentence || "";

  if (!text) {
    return null;
  }

  return {
    text,
    title: item.title || item.topic || "Queued sentence",
    detail: item.detail || item.english || item.translation || "",
    options: item.options || {}
  };
}

function renderAudioQueue() {
  if (!audioQueueList) {
    return;
  }

  audioQueueList.innerHTML = "";

  if (queueToggleBtn) {
    queueToggleBtn.textContent = `Queue (${audioQueue.length})`;
  }

  if (queuePrevBtn) {
    queuePrevBtn.disabled = !audioQueue.length || audioQueueIndex <= 0;
  }

  if (queueNextBtn) {
    queueNextBtn.disabled = !audioQueue.length || audioQueueIndex >= audioQueue.length - 1;
  }

  if (!audioQueue.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-message";
    emptyItem.textContent = "No audio queued yet.";
    audioQueueList.appendChild(emptyItem);
    return;
  }

  audioQueue.forEach((item, index) => {
    const listItem = document.createElement("li");
    const title = document.createElement("button");
    const detail = document.createElement("span");
    const removeButton = document.createElement("button");

    listItem.className = index === audioQueueIndex ? "active" : "";
    title.type = "button";
    title.className = "queue-item-title";
    title.textContent = `${index + 1}. ${item.title}`;
    title.addEventListener("click", () => playAudioQueueItem(index));
    detail.textContent = item.detail || item.text;
    removeButton.type = "button";
    removeButton.className = "secondary-btn compact-btn";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      audioQueue.splice(index, 1);
      if (audioQueueIndex >= audioQueue.length) {
        audioQueueIndex = audioQueue.length - 1;
      }
      renderAudioQueue();
    });

    listItem.appendChild(title);
    listItem.appendChild(detail);
    listItem.appendChild(removeButton);
    audioQueueList.appendChild(listItem);
  });
}

function applyQueuePlayerOptions() {
  const player = ensureSpanishAudioPlayer();
  const speed = Number(queueSpeedSelect?.value || 1) || 1;
  const shouldLoop = queueLoopBtn?.getAttribute("aria-pressed") === "true";

  player.playbackRate = speed;
  player.loop = shouldLoop;
  updateMediaLoopButton(queueLoopBtn, shouldLoop);
}

function setAudioQueue(items, startIndex = 0, autoplay = true) {
  audioQueue = (items || []).map(normaliseAudioQueueItem).filter(Boolean);
  audioQueueIndex = audioQueue.length ? Math.max(0, Math.min(startIndex, audioQueue.length - 1)) : -1;
  isAudioQueuePlaying = Boolean(autoplay && audioQueue.length);
  renderAudioQueue();

  if (audioQueuePanel && audioQueue.length) {
    audioQueuePanel.classList.remove("hidden");
  }

  if (autoplay && audioQueue.length) {
    playAudioQueueItem(audioQueueIndex);
  }
}

function addAudioQueueItems(items, shouldPlayIfIdle = false) {
  const newItems = (items || []).map(normaliseAudioQueueItem).filter(Boolean);

  if (!newItems.length) {
    return;
  }

  const wasEmpty = !audioQueue.length;
  audioQueue.push(...newItems);

  if (audioQueueIndex < 0) {
    audioQueueIndex = 0;
  }

  if (audioQueuePanel) {
    audioQueuePanel.classList.remove("hidden");
  }

  renderAudioQueue();

  if (shouldPlayIfIdle || (wasEmpty && !isAudioQueuePlaying)) {
    playAudioQueueItem(audioQueueIndex);
  }
}

function playAudioQueueItem(index = audioQueueIndex) {
  if (!audioQueue.length) {
    isAudioQueuePlaying = false;
    renderAudioQueue();
    return;
  }

  audioQueueIndex = Math.max(0, Math.min(index, audioQueue.length - 1));
  const item = audioQueue[audioQueueIndex];
  isAudioQueuePlaying = true;
  renderAudioQueue();
  playSpanishAudio(item.text, item.title, () => {
    if (!isAudioQueuePlaying) {
      return;
    }

    if (audioQueueIndex < audioQueue.length - 1) {
      playAudioQueueItem(audioQueueIndex + 1);
    } else {
      isAudioQueuePlaying = false;
      renderAudioQueue();
    }
  }, {
    ...(item.options || {}),
    fromQueue: true,
    progressive: false
  });
}

function playNextAudioQueueItem() {
  if (audioQueueIndex < audioQueue.length - 1) {
    playAudioQueueItem(audioQueueIndex + 1);
  }
}

function playPreviousAudioQueueItem() {
  if (audioQueueIndex > 0) {
    playAudioQueueItem(audioQueueIndex - 1);
  }
}

function clearAudioQueue() {
  isAudioQueuePlaying = false;
  audioQueue = [];
  audioQueueIndex = -1;
  stopSpanishAudioPlayback();
  renderAudioQueue();
}

function toggleAudioQueuePanel() {
  if (!audioQueuePanel) {
    return;
  }

  audioQueuePanel.classList.toggle("hidden");
}

function addCurrentSentenceToQueue() {
  const sentence = currentSentence || latestCustomSentence;

  if (!sentence?.spanish) {
    alert("Generate or choose a sentence first.");
    return;
  }

  addAudioQueueItems([{
    text: sentence.spanish,
    title: sentence.topic || "Current sentence",
    detail: sentence.english || ""
  }]);
  showStatusMessage("Current sentence added to the audio queue.");
}

function addSelectedPlaylistToQueue() {
  const playlist = getSelectedPlaylist();

  if (!playlist?.sentences?.length) {
    alert("Choose a playlist with sentences first.");
    return;
  }

  addAudioQueueItems(playlist.sentences.map((sentence, index) => ({
    text: sentence.spanish,
    title: `${playlist.name} ${index + 1}`,
    detail: sentence.english || ""
  })));
  showStatusMessage(`Added "${playlist.name}" to the audio queue.`);
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

function extractYouTubeVideoId(input) {
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

function loadYouTubeIframeApi() {
  if (window.YT?.Player) {
    return Promise.resolve();
  }

  if (youtubeApiReadyPromise) {
    return youtubeApiReadyPromise;
  }

  youtubeApiReadyPromise = new Promise((resolve) => {
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === "function") {
        previousReady();
      }
      resolve();
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });

  return youtubeApiReadyPromise;
}

async function loadYouTubeVideo() {
  const videoId = extractYouTubeVideoId(youtubeUrlInput.value);

  if (!videoId) {
    videoStatus.textContent = "Paste a valid YouTube link first.";
    return;
  }

  currentVideoId = videoId;
  videoStatus.textContent = "Loading YouTube video...";
  await loadYouTubeIframeApi();

  if (youtubePlayer) {
    youtubePlayer.loadVideoById(videoId);
  } else {
    youtubePlayer = new YT.Player("youtube-player", {
      videoId,
      playerVars: {
        playsinline: 1,
        rel: 0
      }
    });
  }

  startVideoTranscriptSync();
  videoStatus.textContent = "Video loaded. Import captions or paste a timestamped transcript.";
}

function getVideoTranscriptLanguage() {
  const selected = videoTranscriptLanguageSelect?.value || "current";
  if (selected !== "current") {
    return selected;
  }

  return targetLanguage;
}

function formatVideoTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function parseVideoTimestamp(text) {
  const parts = text.split(":").map((part) => Number(part));
  if (parts.some((part) => Number.isNaN(part))) {
    return 0;
  }

  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }

  return parts.length === 2 ? parts[0] * 60 + parts[1] : parts[0];
}

function parsePastedTranscript(text) {
  const rawLines = String(text || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const parsedLines = [];
  let pendingTime = null;
  let pendingText = [];

  const timestampOnlyPattern = /^\[?((?:\d{1,2}:)?\d{1,2}:\d{2}(?:\.\d+)?)\]?$/;
  const timestampWithTextPattern = /^\[?((?:\d{1,2}:)?\d{1,2}:\d{2}(?:\.\d+)?)\]?\s*(?:[-–—]\s*)?(.+)$/;

  const flushPending = () => {
    if (pendingTime === null || !pendingText.length) {
      return;
    }

    parsedLines.push({
      start: pendingTime,
      duration: 3,
      text: pendingText.join(" ").replace(/\s+/g, " ").trim()
    });
    pendingText = [];
  };

  rawLines.forEach((line) => {
    const timestampOnlyMatch = line.match(timestampOnlyPattern);
    const timestampWithTextMatch = line.match(timestampWithTextPattern);

    if (timestampOnlyMatch) {
      flushPending();
      pendingTime = parseVideoTimestamp(timestampOnlyMatch[1]);
      return;
    }

    if (timestampWithTextMatch) {
      flushPending();
      pendingTime = parseVideoTimestamp(timestampWithTextMatch[1]);
      pendingText = [timestampWithTextMatch[2].trim()];
      return;
    }

    if (pendingTime !== null) {
      pendingText.push(line);
    }
  });

  flushPending();

  if (!parsedLines.length && rawLines.length) {
    return rawLines.map((line, index) => ({
      start: index * 3,
      duration: 3,
      text: line
    }));
  }

  return parsedLines.map((line, index) => ({
    ...line,
    duration: parsedLines[index + 1] ? Math.max(0.5, parsedLines[index + 1].start - line.start) : line.duration
  }));
}

function setVideoTranscriptLines(lines, statusText) {
  videoTranscriptLines = lines.map((line, index) => ({
    id: `video-line-${index}`,
    start: Number(line.start || 0),
    duration: Number(line.duration || 3),
    text: String(line.text || "").trim()
  })).filter((line) => line.text);
  activeVideoLineIndex = -1;
  videoLineTranslationCache = {};
  videoWordHintCache = {};
  renderVideoDialogueResult();
  renderVideoTranscript();
  startVideoTranscriptSync();
  videoStatus.textContent = statusText || `${videoTranscriptLines.length} transcript lines loaded.`;
}

async function importYouTubeCaptions() {
  const videoId = currentVideoId || extractYouTubeVideoId(youtubeUrlInput.value);

  if (!videoId) {
    videoStatus.textContent = "Load or paste a YouTube link first.";
    return;
  }

  importYoutubeCaptionsBtn.disabled = true;
  importYoutubeCaptionsBtn.textContent = "Importing...";
  videoStatus.textContent = "Importing available YouTube captions...";

  try {
    const response = await fetch("/api/youtube-transcript", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        videoId,
        language: getVideoTranscriptLanguage(),
        targetLanguage
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.details || data.error || "Could not import captions.");
    }

    setVideoTranscriptLines(data.lines || [], `Imported ${data.lines?.length || 0} caption lines from ${data.trackName || "YouTube"}.`);
  } catch (error) {
    videoStatus.textContent = `${error.message} Paste a timestamped transcript if captions are unavailable.`;
  } finally {
    importYoutubeCaptionsBtn.disabled = false;
    importYoutubeCaptionsBtn.textContent = "Import captions";
  }
}

function usePastedTranscript() {
  const lines = parsePastedTranscript(manualTranscriptInput.value);

  if (!lines.length) {
    videoStatus.textContent = "Paste transcript lines with timestamps, for example [00:03] Hola.";
    return;
  }

  setVideoTranscriptLines(lines, `${lines.length} pasted transcript lines loaded.`);
}

function renderVideoTranscript() {
  if (!videoTranscriptList) {
    return;
  }

  videoTranscriptList.innerHTML = "";

  if (!videoTranscriptLines.length) {
    videoTranscriptList.innerHTML = '<p class="empty-message">No transcript loaded yet.</p>';
    return;
  }

  videoTranscriptLines.forEach((line, index) => {
    const row = document.createElement("div");
    const playButton = document.createElement("button");
    const time = document.createElement("button");
    const text = document.createElement("p");
    const translateButton = document.createElement("button");

    row.className = "video-transcript-line";
    row.dataset.index = String(index);
    playButton.className = "secondary-btn video-line-play-btn";
    playButton.type = "button";
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => toggleVideoLinePlayback(index));
    time.className = "secondary-btn video-time";
    time.type = "button";
    time.textContent = formatVideoTime(line.start);
    time.addEventListener("click", () => seekVideoLine(index));
    text.className = "video-line-text";
    renderVideoLineWords(text, line, index);
    translateButton.className = "secondary-btn";
    translateButton.classList.add("video-line-translate-btn");
    translateButton.type = "button";
    translateButton.textContent = "Translate";
    translateButton.addEventListener("click", () => translateVideoLine(index));

    row.appendChild(playButton);
    row.appendChild(time);
    row.appendChild(text);
    row.appendChild(translateButton);
    row.addEventListener("click", (event) => {
      if (event.target.closest("button") || event.target.closest(".video-word")) {
        return;
      }
      selectVideoLine(index);
    });
    videoTranscriptList.appendChild(row);
  });
}

// This helper builds a compact transcript context for AI video discussion.
function buildVideoTranscriptContext() {
  return videoTranscriptLines
    .slice(0, 80)
    .map((line) => `${formatVideoTime(line.start)} ${line.text}`)
    .join("\n")
    .slice(0, 6000);
}

// This helper redraws the NotebookLM-style video discussion panel.
function renderVideoDialogueResult() {
  if (!videoDialogueResult) {
    return;
  }

  videoDialogueResult.innerHTML = "";

  if (!currentDialogue || currentDialogue.source !== "video") {
    return;
  }

  const title = document.createElement("h4");
  const meta = document.createElement("p");
  const list = document.createElement("div");

  title.className = "dialogue-title";
  title.textContent = currentDialogue.title || "Video discussion";
  meta.className = "sentence-meta";
  meta.textContent = `${currentDialogue.lines?.length || 0} lines | Based on the loaded transcript`;
  list.className = "dialogue-lines";

  currentDialogue.lines.forEach((line, index) => {
    const row = document.createElement("div");
    const speaker = document.createElement("p");
    const targetText = document.createElement("p");
    const english = document.createElement("p");
    const saveButton = document.createElement("button");

    row.className = "dialogue-line";
    speaker.className = "dialogue-speaker";
    targetText.className = "dialogue-target";
    english.className = "dialogue-english";
    saveButton.className = "secondary-btn";

    speaker.textContent = line.speaker || (index % 2 === 0 ? "A" : "B");
    setHoverableTargetText(targetText, line.spanish, {
      spanish: line.spanish,
      english: line.english || ""
    }, "dialogue");
    english.textContent = line.english || "";
    saveButton.textContent = "Save line";
    saveButton.addEventListener("click", () => {
      saveSentenceToFavourites({
        spanish: line.spanish,
        english: line.english || "",
        difficulty: currentDialogue.level || "intermediate",
        topic: currentDialogue.topic || "video",
        tone: currentDialogue.tone || "informal",
        source: "video-dialogue"
      }, "Generate a video discussion first.");
      videoStatus.textContent = "Discussion line saved to favourites.";
    });

    row.appendChild(speaker);
    row.appendChild(targetText);
    row.appendChild(english);
    row.appendChild(saveButton);
    list.appendChild(row);
  });

  videoDialogueResult.appendChild(title);
  videoDialogueResult.appendChild(meta);
  videoDialogueResult.appendChild(list);
}

// This function creates a learner dialogue about the loaded YouTube transcript.
async function generateVideoDialogue() {
  if (!videoTranscriptLines.length) {
    videoStatus.textContent = "Import YouTube captions or paste a transcript before discussing the video.";
    return;
  }

  const transcriptContext = buildVideoTranscriptContext();

  if (!transcriptContext) {
    videoStatus.textContent = "The transcript is empty, so there is nothing to discuss yet.";
    return;
  }

  generateVideoDialogueBtn.disabled = true;
  generateVideoDialogueBtn.textContent = "Generating...";
  videoStatus.textContent = "Creating a discussion about the video...";

  try {
    const data = await callAiLanguageCoach({
      mode: "video-dialogue",
      targetLanguage,
      transcript: transcriptContext,
      videoUrl: youtubeUrlInput?.value || "",
      level: "intermediate",
      tone: "informal",
      turnCount: 10
    });

    if (!data?.dialogue?.lines?.length) {
      throw new Error("The AI did not return a valid video discussion.");
    }

    currentDialogue = {
      id: createId(),
      targetLanguage,
      source: "video",
      createdAt: Date.now(),
      ...data.dialogue
    };

    saveCurrentDialogueState();
    renderCurrentDialogue();
    renderVideoDialogueResult();
    videoStatus.textContent = "Video discussion generated. You can save it, play it, or save individual lines.";
  } catch (error) {
    videoStatus.textContent = `Could not generate a video discussion. ${formatAiErrorMessage(error.message)}`;
  } finally {
    generateVideoDialogueBtn.disabled = false;
    generateVideoDialogueBtn.textContent = "Generate video discussion";
  }
}

function updateVideoLinePlaybackButtons(isPlaying = false) {
  document.querySelectorAll(".video-line-play-btn").forEach((button) => {
    const row = button.closest(".video-transcript-line");
    const rowIndex = Number(row?.dataset.index || -1);
    button.textContent = isPlaying && rowIndex === activeVideoLineIndex ? "Pause" : "Play";
  });
}

function renderVideoLineWords(container, line, lineIndex) {
  line.text.split(/(\s+)/).forEach((part) => {
    if (!part.trim()) {
      container.appendChild(document.createTextNode(part));
      return;
    }

    const word = document.createElement("span");
    word.className = "video-word";
    word.tabIndex = 0;
    word.textContent = part;
    word.addEventListener("click", (event) => {
      event.stopPropagation();
      lookupVideoWord(lineIndex, part);
    });
    container.appendChild(word);
  });
}

function selectVideoLine(index) {
  const line = videoTranscriptLines[index];
  if (!line) {
    return;
  }

  activeVideoLineIndex = index;
  videoSelectedLine.textContent = line.text;
  videoLineTranslation.textContent = videoLineTranslationCache[index] || "Click Translate for the full English line.";
  updateActiveVideoLine();
}

function seekVideoLine(index) {
  selectVideoLine(index);
  if (youtubePlayer?.seekTo) {
    youtubePlayer.seekTo(videoTranscriptLines[index].start, true);
    youtubePlayer.playVideo?.();
    updateVideoLinePlaybackButtons(true);
  }
}

function toggleVideoLinePlayback(index) {
  const line = videoTranscriptLines[index];

  if (!line) {
    return;
  }

  const wasCurrentLine = activeVideoLineIndex === index;
  const isPlaying = youtubePlayer?.getPlayerState?.() === window.YT?.PlayerState?.PLAYING;
  selectVideoLine(index);

  if (!youtubePlayer?.seekTo) {
    videoStatus.textContent = "Load the YouTube video before using transcript play controls.";
    return;
  }

  if (wasCurrentLine && isPlaying) {
    youtubePlayer.pauseVideo?.();
    updateVideoLinePlaybackButtons(false);
    return;
  }

  youtubePlayer.seekTo(line.start, true);
  youtubePlayer.playVideo?.();
  updateVideoLinePlaybackButtons(true);
}

function updateActiveVideoLine() {
  document.querySelectorAll(".video-transcript-line").forEach((row) => {
    row.classList.toggle("active", Number(row.dataset.index) === activeVideoLineIndex);
  });
  updateVideoLinePlaybackButtons(youtubePlayer?.getPlayerState?.() === window.YT?.PlayerState?.PLAYING);

  const activeRow = document.querySelector(`.video-transcript-line[data-index="${activeVideoLineIndex}"]`);
  if (activeRow && videoTranscriptList) {
    activeRow.scrollIntoView({ block: "nearest" });
  }
}

function startVideoTranscriptSync() {
  if (videoSyncInterval) {
    clearInterval(videoSyncInterval);
  }

  videoSyncInterval = setInterval(() => {
    if (!youtubePlayer?.getCurrentTime || !videoTranscriptLines.length) {
      return;
    }

    const currentTime = youtubePlayer.getCurrentTime();
    const index = videoTranscriptLines.findIndex((line, lineIndex) => {
      const nextStart = videoTranscriptLines[lineIndex + 1]?.start ?? (line.start + line.duration);
      return currentTime >= line.start && currentTime < nextStart;
    });

    if (index !== -1 && index !== activeVideoLineIndex) {
      selectVideoLine(index);
    }
  }, 500);
}

async function translateVideoLine(index) {
  const line = videoTranscriptLines[index];
  if (!line) {
    return;
  }

  selectVideoLine(index);
  if (videoLineTranslationCache[index]) {
    videoLineTranslation.textContent = videoLineTranslationCache[index];
    return;
  }

  const row = document.querySelector(`.video-transcript-line[data-index="${index}"]`);
  const translateButton = row?.querySelector(".video-line-translate-btn");
  if (translateButton) {
    translateButton.disabled = true;
    translateButton.textContent = "Translating...";
  }
  videoLineTranslation.textContent = "Translating line...";
  videoStatus.textContent = "Translating selected transcript line...";

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    const response = await fetch("/api/language-coach", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      signal: controller.signal,
      body: JSON.stringify({
        mode: "video-line",
        targetLanguage,
        line: line.text
      })
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.details || errorData.error || "The line translation request failed.");
    }

    const data = await response.json();
    videoLineTranslationCache[index] = data.translation || "No translation returned.";
    videoLineTranslation.textContent = videoLineTranslationCache[index];
    videoStatus.textContent = "Line translated.";
  } catch (error) {
    const message = error.name === "AbortError"
      ? "Line translation timed out. Try again in a moment."
      : formatAiErrorMessage(error.message);
    videoLineTranslation.textContent = message;
    videoStatus.textContent = message;
  } finally {
    if (translateButton) {
      translateButton.disabled = false;
      translateButton.textContent = "Translate";
    }
  }
}

async function lookupVideoWord(index, rawWord) {
  const line = videoTranscriptLines[index];
  const cleanWord = rawWord.replace(/[^\p{L}'-]/gu, "");

  if (!line || !cleanWord) {
    return;
  }

  selectVideoLine(index);
  const cacheKey = `${index}:${cleanWord.toLowerCase()}`;
  if (videoWordHintCache[cacheKey]) {
    renderVideoWordHint(cleanWord, videoWordHintCache[cacheKey], line, index);
    return;
  }

  videoWordHint.textContent = `Looking up ${cleanWord}...`;

  try {
    const data = await callAiLanguageCoach({
      mode: "word-hints",
      targetLanguage,
      spanish: line.text,
      english: videoLineTranslationCache[index] || "",
      words: [cleanWord]
    });
    const hint = data.hints?.[cleanWord] || Object.values(data.hints || {})[0] || "No hint returned.";
    videoWordHintCache[cacheKey] = hint;
    renderVideoWordHint(cleanWord, hint, line, index);
  } catch (error) {
    videoWordHint.textContent = formatAiErrorMessage(error.message);
  }
}

// This helper shows a video word hint with a save action.
function renderVideoWordHint(word, hint, line, index) {
  videoWordHint.innerHTML = "";

  const text = document.createElement("span");
  const saveButton = document.createElement("button");

  text.textContent = `${word}: ${hint}`;
  saveButton.type = "button";
  saveButton.className = "secondary-btn word-save-btn";
  saveButton.textContent = "Save word";
  saveButton.addEventListener("click", () => {
    const fakeWordElement = document.createElement("span");
    fakeWordElement.textContent = word;
    fakeWordElement.setAttribute("data-translation", hint);
    fakeWordElement.dataset.example = line.text;
    fakeWordElement.dataset.exampleEnglish = videoLineTranslationCache[index] || "";
    saveWordFromElement(fakeWordElement, "video");
    videoStatus.textContent = `Saved word: ${word}.`;
  });

  videoWordHint.appendChild(text);
  videoWordHint.appendChild(saveButton);
}

// This function asks the Netlify backend for a fresh AI sentence.
function looksLikeSpanishText(text) {
  const lowerText = ` ${String(text || "").toLowerCase()} `;
  const markers = [
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

  return markers.filter((marker) => lowerText.includes(marker)).length >= 2;
}

function validateAiSentenceLanguage(sentence) {
  if (targetLanguage === "english" && looksLikeSpanishText(sentence?.spanish || "")) {
    throw new Error("The AI returned Spanish instead of English.");
  }
}

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
        targetLanguage,
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

  validateAiSentenceLanguage(sentence);

  if (isTooSimilarToRecentSentence(sentence.spanish)) {
    throw new Error("The AI returned a sentence too similar to a recent one.");
  }

  return sentence;
}

// This helper contains the built-in sentence generation path.
function generateLocalSentence(filteredSentences) {
  if (favouritesOnlyCheckbox?.checked) {
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

  if (filteredSentences.length === 0 && favouritesOnlyCheckbox?.checked) {
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

  if ((aiModeEnabled || targetLanguage !== "spanish") && !favouritesOnlyCheckbox?.checked) {
    let remainingCooldown = Math.max(0, Math.ceil((aiCooldownUntil - Date.now()) / 1000));

    if (remainingCooldown > 2) {
      if (targetLanguage !== "spanish") {
        showStatusMessage(`AI cooldown is active. Please wait ${formatSecondsLabel(remainingCooldown)} before generating another ${getTargetLanguageProfile().label} sentence.`);
        return;
      }

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
      if (targetLanguage !== "spanish") {
        showStatusMessage(`AI cooldown is still active. Please try another ${getTargetLanguageProfile().label} sentence in a moment.`);
        generateBtn.disabled = false;
        generateBtn.textContent = "Generate Sentence";
        return;
      }

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
        if (error.message.includes("too similar") || error.message.includes("instead of English")) {
          showStatusMessage(error.message.includes("instead of English")
            ? "The AI used the wrong language, so asking once more for an English sentence..."
            : "The AI repeated itself, so asking once more for a different sentence...");
          nextSentence = await generateAiSentence();
        } else {
          throw error;
        }
      }
    } catch (error) {
      if (targetLanguage === "spanish") {
        nextSentence = generateLocalSentence(filteredSentences);
        showStatusMessage(`${formatAiErrorMessage(error.message)} The built-in generator was used instead.`);
      } else {
        showStatusMessage(`${formatAiErrorMessage(error.message)} ${getTargetLanguageProfile().label} sentences need AI, so the Spanish built-in generator was not used.`);
        return;
      }
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

  if (!((aiModeEnabled || targetLanguage !== "spanish") && !favouritesOnlyCheckbox?.checked && nextSentence.ai !== true)) {
    showStatusMessage(
      quizModeCheckbox.checked
        ? "Quiz mode is on. Try to guess the meaning first."
        : `Hover over a ${getTargetLanguageProfile().label} word to see a ${getTargetLanguageProfile().translationLabel} hint.`
    );
  }
}

// This helper redraws the generated batch list.
function renderBatchSentences() {
  if (!batchList || !batchStatus) {
    return;
  }

  batchList.innerHTML = "";
  const hasBatchSentences = currentBatchSentences.length > 0;

  if (saveBatchFavouritesBtn) {
    saveBatchFavouritesBtn.disabled = !hasBatchSentences;
  }

  if (addBatchPlaylistBtn) {
    addBatchPlaylistBtn.disabled = !hasBatchSentences;
  }

  updateExportActionVisibility();

  if (!hasBatchSentences) {
    batchStatus.textContent = `Generate a batch to view ${getTargetLanguageProfile().label} and ${getTargetLanguageProfile().translationLabel} side by side.`;
    if (batchFocusPanel) {
      batchFocusPanel.classList.add("hidden");
    }
    return;
  }

  batchStatus.textContent = `${currentBatchSentences.length} sentences ready. You can save, add, play, export PDF, or make one MP3.`;

  currentBatchSentences.forEach((sentence, index) => {
    const row = document.createElement("div");
    const number = document.createElement("span");
    const spanish = document.createElement("p");
    const english = document.createElement("p");
    const actions = document.createElement("div");
    const playButton = document.createElement("button");
    const playlistButton = document.createElement("button");

    row.className = "batch-row";
    number.className = "batch-number";
    spanish.className = "batch-spanish";
    english.className = "batch-english";
    actions.className = "batch-actions";
    playButton.className = "secondary-btn batch-action-btn";
    playlistButton.className = "secondary-btn batch-action-btn";

    number.textContent = String(index + 1);
    setHoverableTargetText(spanish, sentence.spanish, sentence, "batch");
    english.textContent = sentence.english;
    playButton.textContent = "Play";
    playlistButton.textContent = "Playlist";

    playButton.addEventListener("click", () => {
      playSpanishAudio(sentence.spanish, `Batch sentence ${index + 1}`);
      batchStatus.textContent = `Playing sentence ${index + 1}.`;
    });

    playlistButton.addEventListener("click", () => {
      choosePlaylistForSentence(sentence, (playlist) => {
        batchStatus.textContent = `Sentence ${index + 1} added to "${playlist.name}".`;
      });
    });

    row.appendChild(number);
    row.appendChild(spanish);
    row.appendChild(english);
    actions.appendChild(playButton);
    actions.appendChild(playlistButton);
    row.appendChild(actions);
    batchList.appendChild(row);
  });

  renderBatchFocusMode();
}

function openBatchFocusMode(startIndex = 0) {
  if (!currentBatchSentences.length) {
    alert("Generate a batch first.");
    return;
  }

  batchFocusIndex = Math.max(0, Math.min(currentBatchSentences.length - 1, startIndex));
  if (batchFocusPanel) {
    batchFocusPanel.classList.remove("hidden");
  }
  renderBatchFocusMode();
  batchFocusPanel?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function closeBatchFocusMode() {
  if (batchFocusPanel) {
    batchFocusPanel.classList.add("hidden");
  }
}

function renderBatchFocusMode() {
  if (!batchFocusPanel || batchFocusPanel.classList.contains("hidden") || !currentBatchSentences.length) {
    return;
  }

  const sentence = currentBatchSentences[batchFocusIndex] || currentBatchSentences[0];
  const profile = getTargetLanguageProfile();

  if (batchFocusProgress) {
    batchFocusProgress.textContent = `Focus mode | ${batchFocusIndex + 1} of ${currentBatchSentences.length}`;
  }
  if (batchFocusTitle) {
    setHoverableTargetText(batchFocusTitle, sentence.spanish, sentence, "batch-focus");
  }
  if (batchFocusTranslation) {
    batchFocusTranslation.textContent = `${profile.translationLabel}: ${sentence.english}`;
  }
  if (batchFocusPrevBtn) {
    batchFocusPrevBtn.disabled = batchFocusIndex === 0;
  }
  if (batchFocusNextBtn) {
    batchFocusNextBtn.disabled = batchFocusIndex >= currentBatchSentences.length - 1;
  }
}

function moveBatchFocus(offset) {
  if (!currentBatchSentences.length) {
    return;
  }

  batchFocusIndex = Math.max(0, Math.min(currentBatchSentences.length - 1, batchFocusIndex + offset));
  renderBatchFocusMode();
}

function playBatchFocusSentence() {
  if (!currentBatchSentences.length) {
    return;
  }

  const sentence = currentBatchSentences[batchFocusIndex];
  playSpanishAudio(sentence.spanish, `Focus sentence ${batchFocusIndex + 1}`);
  batchStatus.textContent = `Playing focus sentence ${batchFocusIndex + 1}.`;
}

// This function saves every generated batch sentence to favourites.
function saveBatchToFavourites() {
  if (!currentBatchSentences.length) {
    alert("Generate a batch first.");
    return;
  }

  let savedCount = 0;
  let skippedCount = 0;

  currentBatchSentences.forEach((sentence) => {
    const sentenceToSave = withCurrentLanguage(sentence);
    const alreadySaved = favourites.some((item) => isCurrentLanguageItem(item) && item.spanish === sentenceToSave.spanish);

    if (alreadySaved) {
      skippedCount += 1;
      return;
    }

    favourites.push(sentenceToSave);
    savedCount += 1;
  });

  if (savedCount) {
    saveFavourites();
    renderFavourites();
    incrementPracticeStat("saved", savedCount);
  }

  batchStatus.textContent = `${savedCount} sentences saved to favourites.${skippedCount ? ` ${skippedCount} already saved.` : ""}`;
  showStatusMessage(batchStatus.textContent);
}

// This function adds every generated batch sentence to the selected playlist.
function addBatchToPlaylist() {
  if (!currentBatchSentences.length) {
    alert("Generate a batch first.");
    return;
  }

  const playlist = choosePlaylistFromPrompt();

  if (!playlist) {
    alert("Create a playlist first.");
    return;
  }

  let addedCount = 0;
  let skippedCount = 0;

  currentBatchSentences.forEach((sentence) => {
    const alreadyAdded = playlist.sentences.some((item) => item.spanish === sentence.spanish);

    if (alreadyAdded) {
      skippedCount += 1;
      return;
    }

    playlist.sentences.push(withCurrentLanguage(sentence));
    addedCount += 1;
  });

  if (addedCount) {
    savePlaylists();
    renderPlaylists();
  }

  batchStatus.textContent = `${addedCount} sentences added to "${playlist.name}".${skippedCount ? ` ${skippedCount} already in the playlist.` : ""}`;
  showStatusMessage(batchStatus.textContent);
}

// This function creates a batch of generator sentences using the current filters.
async function generateSentenceBatch() {
  const filteredSentences = getFilteredSentences();
  const requestedCount = Math.min(30, Math.max(1, Number(batchCountSelect.value) || 10));

  if (filteredSentences.length === 0 && favouritesOnlyCheckbox?.checked) {
    currentBatchSentences = [];
    renderBatchSentences();
    batchStatus.textContent = "There are no favourite sentences for this combination.";
    return;
  }

  generateBatchBtn.disabled = true;
  generateBatchBtn.textContent = "Generating...";
  currentBatchSentences = [];
  renderBatchSentences();
  batchStatus.textContent = `Generating ${requestedCount} sentences...`;

  try {
    for (let index = 0; index < requestedCount; index += 1) {
      let nextSentence;

      if ((aiModeEnabled || targetLanguage !== "spanish") && !favouritesOnlyCheckbox?.checked) {
        try {
          nextSentence = await generateAiSentence();
        } catch (error) {
          if (targetLanguage !== "spanish") {
            throw new Error(`${formatAiErrorMessage(error.message)} ${getTargetLanguageProfile().label} batches need AI, so the Spanish built-in generator was not used.`);
          }

          nextSentence = generateLocalSentence(filteredSentences);
        }
      } else {
        nextSentence = generateLocalSentence(filteredSentences);
      }

      const batchSentence = {
        ...nextSentence,
        grammarTags: inferGrammarTags(nextSentence)
      };

      currentBatchSentences.push(batchSentence);
      if (batchSentence.generated || batchSentence.ai) {
        rememberGeneratedSentence(batchSentence.spanish);
      }
      batchStatus.textContent = `Generated ${currentBatchSentences.length} of ${requestedCount} sentences...`;
    }

    const lastSentence = currentBatchSentences[currentBatchSentences.length - 1];
    if (lastSentence) {
      const sourceLabel = lastSentence.ai ? "AI generated" : lastSentence.generated ? "Generated" : "Example";
      setCurrentSentence(lastSentence, sourceLabel);
    }

    incrementPracticeStat("generated", requestedCount);
    renderBatchSentences();
    const savedBatch = saveGeneratedBatch(currentBatchSentences);
    if (savedBatch) {
      batchStatus.textContent = `${currentBatchSentences.length} sentences ready and auto-saved as "${savedBatch.title}".`;
      showStatusMessage("Generated batch saved with its own radio playlist.");
    }
  } catch (error) {
    batchStatus.textContent = `Could not finish the batch. ${error.message}`;
  } finally {
    generateBatchBtn.disabled = false;
    generateBatchBtn.textContent = "Generate batch";
  }
}

// This function opens a two-column batch document for saving as a PDF.
function downloadBatchPdf() {
  if (!currentBatchSentences.length) {
    alert("Generate a batch first.");
    return;
  }

  const printableWindow = window.open("", "_blank");

  if (!printableWindow) {
    alert("Pop-up blocked. Please allow pop-ups, then try again.");
    return;
  }

  const title = `${capitalize(getTargetLanguageProfile().label)} ${capitalize(topicSelect.value)} sentence batch`;
  const rows = currentBatchSentences.map((sentence, index) => `
    <tr>
      <td class="number">${index + 1}</td>
      <td class="spanish">${escapeHtml(sentence.spanish)}</td>
      <td>${escapeHtml(sentence.english)}</td>
    </tr>
  `).join("");

  printableWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${escapeHtml(title)}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 28px; color: #1f2937; }
        h1 { margin: 0 0 8px; font-size: 26px; }
        .meta { margin: 0 0 22px; color: #6b7280; }
        table { width: 100%; border-collapse: collapse; table-layout: fixed; }
        th { padding: 10px; color: #b45309; text-align: left; text-transform: uppercase; letter-spacing: 0.08em; font-size: 12px; border-bottom: 2px solid #d9e0ea; }
        td { padding: 11px 10px; vertical-align: top; line-height: 1.45; border-bottom: 1px solid #e5e7eb; }
        .number { width: 34px; color: #6b7280; font-weight: 700; }
        .spanish { font-weight: 700; }
      </style>
    </head>
    <body>
      <h1>${escapeHtml(title)}</h1>
      <p class="meta">${currentBatchSentences.length} sentences | ${escapeHtml(getTargetLanguageProfile().label)} left, ${escapeHtml(getTargetLanguageProfile().translationLabel)} right</p>
      <table>
        <thead>
          <tr><th class="number">#</th><th>${escapeHtml(getTargetLanguageProfile().label)}</th><th>${escapeHtml(getTargetLanguageProfile().translationLabel)}</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
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
  batchStatus.textContent = "Batch PDF opened. Choose Save as PDF in the print dialog.";
}

// This function downloads the whole generated batch as one MP3.
async function downloadBatchMp3() {
  if (!currentBatchSentences.length) {
    alert("Generate a batch first.");
    return;
  }

  if (batchMp3Panel) {
    batchMp3Panel.classList.add("hidden");
  }

  downloadBatchMp3Btn.disabled = true;
  downloadBatchMp3Btn.textContent = "Preparing MP3...";
  batchStatus.textContent = "Preparing one MP3 for the whole batch...";

  try {
    const turns = currentBatchSentences.map((sentence) => ({ spanish: sentence.spanish }));
    const audioBlob = await fetchChunkedConversationAudioBlob(turns, (chunkNumber, totalChunks) => {
      batchStatus.textContent = `Preparing audio part ${chunkNumber} of ${totalChunks}...`;
    }, 10, "batch");
    const title = slugifyFilename(`${difficultySelect.value}-${topicSelect.value}-sentence-batch`);
    const filename = `${title}.mp3`;

    showBatchMp3Ready(audioBlob, filename);
    downloadAudioBlob(audioBlob, filename);
    batchStatus.textContent = "Batch MP3 ready. If your phone did not download it automatically, use Save MP3.";
  } catch (error) {
    batchStatus.textContent = `Could not download the batch MP3. ${error.message}`;
  } finally {
    downloadBatchMp3Btn.disabled = false;
    downloadBatchMp3Btn.textContent = "Download batch MP3";
  }
}

// This function uses the browser's built-in speech system.
function speakText(text, languageCode) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    alert("Sorry, your browser does not support text-to-speech.");
    return;
  }

  stopSpanishAudioPlayback();
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

  stopSpanishAudioPlayback(false);
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

function showUndo(message, restoreCallback) {
  undoAction = restoreCallback;

  if (!undoToast || !undoToastMessage) {
    return;
  }

  undoToastMessage.textContent = message;
  undoToast.classList.remove("hidden");
  clearTimeout(undoTimer);
  undoTimer = setTimeout(() => {
    undoAction = null;
    undoToast.classList.add("hidden");
  }, 7000);
}

function runUndoAction() {
  if (typeof undoAction === "function") {
    undoAction();
  }
  undoAction = null;
  clearTimeout(undoTimer);
  undoToast?.classList.add("hidden");
}

function saveActivePage() {
  localStorage.setItem("spanishSentenceActivePage", activePageId);
}

function setElementHidden(element, shouldHide) {
  if (element) {
    element.classList.toggle("hidden", Boolean(shouldHide));
  }
}

function updateExportActionVisibility() {
  const hasBatch = currentBatchSentences.length > 0;
  const hasDialogue = Boolean(currentDialogue?.lines?.length);
  const hasChat = chatHistory.some((message) => message.spanish || message.text);
  const selectedPlaylist = getSelectedPlaylist();
  const hasPlaylist = Boolean(selectedPlaylist?.sentences?.length);

  setElementHidden(downloadBatchPdfBtn, !hasBatch);
  setElementHidden(downloadBatchMp3Btn, !hasBatch);
  setElementHidden(downloadDialoguePdfBtn, !hasDialogue);
  setElementHidden(downloadDialogueMp3Btn, !hasDialogue);
  setElementHidden(downloadChatPdfBtn, !hasChat);
  setElementHidden(downloadChatMp3sBtn, !hasChat);
  setElementHidden(downloadPlaylistMp3Btn, !hasPlaylist);
}

function getHomeContinueSuggestion() {
  const dueWords = getCurrentLanguageItems(savedWords).map(withWordSchedule).filter(isWordDue).length;
  const dueRecall = getCurrentLanguageItems(recallSentences).map(withRecallSchedule).filter(isRecallDue).length;

  if (dueWords || dueRecall || getLanguageMistakePatterns().length) {
    return {
      title: "Review what is due today",
      detail: `${dueWords} words due | ${dueRecall} sentence recalls | ${getLanguageMistakePatterns().length} recurring fixes`,
      label: "Start review",
      action: () => {
        buildSmartReviewSession();
        showPage("review-page");
      }
    };
  }

  if (chatHistory.length) {
    return {
      title: "Continue your current chat",
      detail: `${chatHistory.length} messages saved in this ${getTargetLanguageProfile().label} conversation.`,
      label: "Open chat",
      action: () => showPage("chat-page")
    };
  }

  if (currentDialogue?.lines?.length) {
    return {
      title: currentDialogue.title || "Continue your dialogue",
      detail: `${currentDialogue.lines.length} dialogue lines ready to play, export, or save.`,
      label: "Open dialogue",
      action: () => showPage("dialogue-page")
    };
  }

  if (currentBatchSentences.length) {
    return {
      title: "Continue your generated set",
      detail: `${currentBatchSentences.length} generated sentences are ready.`,
      label: "Open set",
      action: () => showPage("generator-page")
    };
  }

  const latestBatch = getCurrentLanguageItems(savedBatches)
    .slice()
    .sort((first, second) => new Date(second.createdAt || second.savedAt || 0) - new Date(first.createdAt || first.savedAt || 0))[0];

  if (latestBatch) {
    return {
      title: latestBatch.title || "Open your latest sentence set",
      detail: `${latestBatch.sentences?.length || 0} sentences | ${formatSavedBatchDate(latestBatch.createdAt || latestBatch.savedAt)}`,
      label: "Open set",
      action: () => {
        loadSavedBatch(latestBatch.id);
        showPage("generator-page");
      }
    };
  }

  const latestPlaylist = getCurrentLanguageItems(playlists).find((playlist) => playlist.sentences?.length);

  if (latestPlaylist) {
    return {
      title: `Listen to ${latestPlaylist.name}`,
      detail: `${latestPlaylist.sentences.length} saved sentences in this playlist.`,
      label: "Open audio",
      action: () => {
        playlistSelect.value = latestPlaylist.id;
        renderSelectedPlaylist();
        showPage("radio-page");
      }
    };
  }

  return {
    title: "Start with a short chat",
    detail: "No pending practice yet. A two-minute chat is the fastest way to create useful review material.",
    label: "Start chat",
    action: () => showPage("chat-page")
  };
}

function renderHomeContinueCard() {
  if (!homeContinueCard) {
    return;
  }

  const suggestion = getHomeContinueSuggestion();
  homeContinueTitle.textContent = suggestion.title;
  homeContinueDetail.textContent = suggestion.detail;
  homeContinuePrimaryBtn.textContent = suggestion.label;
  homeContinuePrimaryAction = suggestion.action;
  homeContinueCard.classList.remove("hidden");
}

function showPage(pageId) {
  const nextPageId = document.getElementById(pageId) ? pageId : "generator-page";
  const navPageId = nextPageId === "dialogue-page" ? "generator-page" : nextPageId;
  activePageId = nextPageId;
  saveActivePage();

  appPages.forEach((page) => {
    page.classList.toggle("active-page", page.id === nextPageId);
  });

  pageTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.pageTarget === navPageId);
  });

  if (navMore) {
    const activeMoreTab = navMore.querySelector(`.page-tab[data-page-target="${navPageId}"]`);
    navMore.classList.toggle("has-active", Boolean(activeMoreTab));
    if (!activeMoreTab) {
      navMore.removeAttribute("open");
    }
  }

  mobileBottomNavButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mobileNavPage === navPageId);
  });

  if (nextPageId === "library-page") {
    renderLibraryHub();
  }

  if (nextPageId === "home-page") {
    renderHomeContinueCard();
  }

  updateExportActionVisibility();
}

function downloadJsonFile(data, filename) {
  const jsonText = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonText], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const downloadLink = document.createElement("a");

  downloadLink.href = url;
  downloadLink.download = filename;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
  URL.revokeObjectURL(url);
}

// This function downloads a JSON backup of the user's practice data.
function exportPracticeBackup() {
  const exportedAt = new Date().toISOString();
  const backup = {
    app: "Language Coach",
    version: 1,
    exportedAt,
    settings: {
      aiModeEnabled,
      sentenceDisplayMode,
      shadowGapSeconds: Number(shadowGapSelect?.value || 0) || 0,
      activePageId
    },
    progress: {
      quizScore,
      recallSentences,
      playlists,
      playlistFolders,
      conversationFolders,
      savedBatches,
      savedWords,
      savedDialogues,
      currentDialogue,
      savedConversations,
      conversationPlaylist,
      languageChats: buildLanguageChatBackup(),
      currentChat: {
        activeConversationId,
        activeChatTitle,
        chatAccumulatedSeconds: getCurrentChatDurationSeconds(),
        chatHistory
      }
    }
  };
  const datePart = exportedAt.slice(0, 10);

  downloadJsonFile(backup, `language-practice-backup-${datePart}.json`);
  radioStatus.textContent = "Practice backup downloaded.";
}

function exportCurrentLanguageBackup() {
  const exportedAt = new Date().toISOString();
  const datePart = exportedAt.slice(0, 10);
  const profile = getTargetLanguageProfile();
  const languageKey = targetLanguage;
  const backup = {
    app: "Language Practice",
    version: 1,
    exportedAt,
    language: {
      key: languageKey,
      label: profile.label,
      translationLabel: profile.translationLabel,
      sourceLabel: profile.sourceLabel
    },
    settings: {
      aiModeEnabled,
      sentenceDisplayMode,
      selectedVoice: getSelectedSpanishVoice(),
      shadowGapSeconds: Number(shadowGapSelect?.value || 0) || 0,
      difficultyCalibration: difficultyCalibration[languageKey] || null,
      callPauseMode
    },
    progress: {
      practiceStats: getCurrentPracticeStats(),
      practiceHistory,
      quizScore,
      recallSentences: getCurrentLanguageItems(recallSentences),
      playlists: getCurrentLanguageItems(playlists),
      conversationFolders,
      savedBatches: getCurrentLanguageItems(savedBatches),
      savedWords: getCurrentLanguageItems(savedWords),
      savedDialogues: getCurrentLanguageItems(savedDialogues),
      savedConversations: getCurrentLanguageItems(savedConversations),
      conversationPlaylist: getCurrentLanguageItems(conversationPlaylist),
      mistakePatterns: getLanguageMistakePatterns(),
      currentChat: {
        activeConversationId,
        activeChatTitle,
        chatAccumulatedSeconds: getCurrentChatDurationSeconds(),
        chatHistory
      }
    }
  };

  downloadJsonFile(backup, `${slugifyFilename(profile.label)}-practice-backup-${datePart}.json`);
  const message = `${profile.label} backup downloaded.`;
  if (radioStatus) {
    radioStatus.textContent = message;
  }
  if (chatStatus) {
    chatStatus.textContent = message;
  }
}

function openRestoreBackupPicker() {
  if (!restoreBackupInput) {
    alert("Restore input is not available.");
    return;
  }

  restoreBackupInput.value = "";
  restoreBackupInput.click();
}

async function restorePracticeBackupFromFile(event) {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const backup = JSON.parse(text);
    const progress = backup.progress || {};
    const isLanguageBackup = Boolean(backup.language?.key);
    const confirmed = confirm(isLanguageBackup
      ? `Restore the ${backup.language.label || backup.language.key} backup into this app? Existing ${backup.language.label || "language"} items with the same IDs may be updated.`
      : "Restore this full practice backup? This will replace the current saved practice data in this browser.");

    if (!confirmed) {
      return;
    }

    if (isLanguageBackup) {
      mergeLanguageBackup(backup.language.key, progress);
    } else {
      restoreFullBackup(progress);
    }

    renderAllSavedData();
    showStatusMessage("Backup restored.");
    if (radioStatus) {
      radioStatus.textContent = "Backup restored.";
    }
  } catch (error) {
    alert(`Could not restore backup. ${error.message}`);
  } finally {
    restoreBackupInput.value = "";
  }
}

function mergeById(existingItems, incomingItems = []) {
  const map = new Map(existingItems.map((item) => [item.id || createId(), item]));
  incomingItems.forEach((item) => {
    const nextItem = { ...item, id: item.id || createId() };
    map.set(nextItem.id, nextItem);
  });
  return Array.from(map.values());
}

function mergeLanguageBackup(languageKey, progress) {
  const stampLanguage = (items = []) => items.map((item) => ({ ...item, targetLanguage: item.targetLanguage || item.language || languageKey }));

  recallSentences = mergeById(recallSentences, stampLanguage(progress.recallSentences));
  playlists = mergeById(playlists, stampLanguage(progress.playlists));
  savedBatches = mergeById(savedBatches, stampLanguage(progress.savedBatches));
  savedWords = mergeById(savedWords, stampLanguage(progress.savedWords));
  savedDialogues = mergeById(savedDialogues, stampLanguage(progress.savedDialogues));
  savedConversations = mergeById(savedConversations, stampLanguage(progress.savedConversations));
  conversationPlaylist = mergeById(conversationPlaylist, stampLanguage(progress.conversationPlaylist));
  mistakePatterns = mergeById(mistakePatterns, stampLanguage(progress.mistakePatterns));
  conversationFolders = Array.from(new Set([...conversationFolders, ...(progress.conversationFolders || [])]));
  saveAllPracticeData();
}

function restoreFullBackup(progress) {
  recallSentences = progress.recallSentences || [];
  playlists = progress.playlists || [];
  playlistFolders = progress.playlistFolders || playlistFolders;
  conversationFolders = progress.conversationFolders || conversationFolders;
  savedBatches = progress.savedBatches || [];
  savedWords = progress.savedWords || [];
  savedDialogues = progress.savedDialogues || [];
  currentDialogue = progress.currentDialogue || null;
  savedConversations = progress.savedConversations || [];
  conversationPlaylist = progress.conversationPlaylist || [];
  quizScore = progress.quizScore || quizScore;
  saveAllPracticeData();
  saveQuizScore();
}

function saveAllPracticeData() {
  saveRecallSentences();
  savePlaylists();
  savePlaylistFolders();
  saveConversationFolders();
  saveSavedBatches();
  saveSavedWords();
  saveDialogues();
  saveCurrentDialogueState();
  saveConversationPlaylist();
  saveMistakePatterns();
  localStorage.setItem("spanishSentenceSavedConversations", JSON.stringify(savedConversations));
}

function renderAllSavedData() {
  renderRecallSentences();
  renderPlaylists();
  renderSavedBatches();
  renderSavedWords();
  renderSavedDialogues();
  renderDialogue();
  renderSavedConversations();
  renderConversationPlaylist();
  renderTodayDashboard();
  renderLibraryHub();
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
  if (favouritesOnlyCheckbox?.checked) {
    aiModeNote.textContent = "AI mode does not change favourite-only practice. That mode still uses your saved sentences.";
    return;
  }

  const profile = getTargetLanguageProfile();

  if (targetLanguage !== "spanish") {
    aiModeNote.textContent = `${profile.label} mode uses the AI sentence engine for generation, chat, custom translation, and dialogues.`;
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

function savePlaylistFolders() {
  localStorage.setItem("spanishSentencePlaylistFolders", JSON.stringify(playlistFolders));
  localStorage.setItem("spanishSentenceSelectedPlaylistFolder", selectedPlaylistFolder);
}

function getPlaylistFolderOptions() {
  const folderSet = new Set(["General", ...playlistFolders, ...playlists.map((playlist) => playlist.folder || "General")]);
  return Array.from(folderSet).filter(Boolean).sort((first, second) => first.localeCompare(second));
}

function renderPlaylistFolders() {
  if (!playlistFolderSelect) {
    return;
  }
  const previousValue = selectedPlaylistFolder || playlistFolderSelect.value || "all";
  playlistFolderSelect.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All folders";
  playlistFolderSelect.appendChild(allOption);
  getPlaylistFolderOptions().forEach((folder) => {
    const option = document.createElement("option");
    option.value = folder;
    option.textContent = folder;
    playlistFolderSelect.appendChild(option);
  });
  const hasPrevious = Array.from(playlistFolderSelect.options).some((option) => option.value === previousValue);
  playlistFolderSelect.value = hasPrevious ? previousValue : "all";
  selectedPlaylistFolder = playlistFolderSelect.value;
}

function createPlaylistFolder() {
  const folderName = playlistFolderNameInput?.value.trim();
  if (!folderName) {
    alert("Type a folder name first.");
    return;
  }
  if (!playlistFolders.includes(folderName)) {
    playlistFolders.push(folderName);
  }
  selectedPlaylistFolder = folderName;
  if (playlistFolderNameInput) {
    playlistFolderNameInput.value = "";
  }
  savePlaylistFolders();
  renderPlaylistFolders();
  renderPlaylists();
  showStatusMessage(`Playlist folder created: ${folderName}`);
}

function saveSavedBatches() {
  localStorage.setItem("spanishSentenceSavedBatches", JSON.stringify(savedBatches));
  renderTodayDashboard();
}

function formatSavedBatchDate(dateText) {
  const date = new Date(dateText);

  if (Number.isNaN(date.getTime())) {
    return "Saved batch";
  }

  return date.toLocaleString([], {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function getBatchTitleFromMeta(createdAt = new Date().toISOString()) {
  return `${capitalize(getTargetLanguageProfile().label)} ${capitalize(topicSelect.value)} set - ${formatSavedBatchDate(createdAt)}`;
}

function ensureBatchPlaylist(batch) {
  if (!batch?.sentences?.length) {
    return null;
  }

  let playlist = playlists.find((item) => item.id === batch.playlistId);

  if (!playlist) {
    playlist = {
      id: batch.playlistId || createId(),
      targetLanguage: getSavedItemLanguage(batch),
      name: batch.title,
      source: "batch",
      folder: "Generated batches",
      batchId: batch.id,
      sentences: []
    };
    batch.playlistId = playlist.id;
    playlists.push(playlist);
  }

  playlist.targetLanguage = getSavedItemLanguage(batch);
  playlist.name = batch.title;
  playlist.source = "batch";
  playlist.folder = playlist.folder || "Generated batches";
  playlist.batchId = batch.id;
  playlist.sentences = batch.sentences.map((sentence) => ({
    ...sentence,
    targetLanguage: getSavedItemLanguage(batch)
  }));

  savePlaylists();
  saveSavedBatches();
  renderPlaylists();
  return playlist;
}

function saveGeneratedBatch(sentences) {
  if (!sentences?.length) {
    return null;
  }

  const createdAt = new Date().toISOString();
  const batch = {
    id: createId(),
    targetLanguage,
    title: getBatchTitleFromMeta(createdAt),
    createdAt,
    difficulty: difficultySelect.value,
    topic: topicSelect.value,
    tone: toneSelect.value,
    grammarFocus: grammarFocusSelect.value,
    count: sentences.length,
    playlistId: createId(),
    sentences: sentences.map((sentence) => withCurrentLanguage(sentence))
  };

  savedBatches.unshift(batch);

  const currentLanguageBatches = savedBatches.filter((item) => getSavedItemLanguage(item) === targetLanguage);
  const otherLanguageBatches = savedBatches.filter((item) => getSavedItemLanguage(item) !== targetLanguage);
  savedBatches = [
    ...currentLanguageBatches.slice(0, 30),
    ...otherLanguageBatches
  ];

  ensureBatchPlaylist(batch);
  saveSavedBatches();
  renderSavedBatches();
  return batch;
}

function loadSavedBatch(batchId) {
  const batch = savedBatches.find((item) => item.id === batchId);

  if (!batch) {
    return;
  }

  currentBatchSentences = batch.sentences.map((sentence) => ({
    ...sentence,
    targetLanguage: getSavedItemLanguage(batch)
  }));
  renderBatchSentences();
  batchStatus.textContent = `Loaded "${batch.title}".`;
  showStatusMessage(batchStatus.textContent);
}

function openBatchPlaylist(batchId, shouldStartRadio = false) {
  const batch = savedBatches.find((item) => item.id === batchId);

  if (!batch) {
    return;
  }

  const playlist = ensureBatchPlaylist(batch);

  if (!playlist) {
    alert("This saved batch has no sentences.");
    return;
  }

  playlistSelect.value = playlist.id;
  renderSelectedPlaylist();
  showPage("radio-page");

  if (radioModeSelect) {
    radioModeSelect.value = "play-once";
  }

  if (shouldStartRadio) {
    startRadioMode(0);
  } else {
    radioStatus.textContent = `Opened batch playlist: ${playlist.name}`;
  }
}

function deleteSavedBatch(batchId) {
  const batch = savedBatches.find((item) => item.id === batchId);

  if (!batch) {
    return;
  }

  if (radioState.playlistId === batch.playlistId) {
    stopRadioMode("");
  }

  const removedPlaylists = playlists.filter((playlist) => playlist.source === "batch" && playlist.batchId === batchId);
  savedBatches = savedBatches.filter((item) => item.id !== batchId);
  playlists = playlists.filter((playlist) => !(playlist.source === "batch" && playlist.batchId === batchId));
  saveSavedBatches();
  savePlaylists();
  renderSavedBatches();
  renderPlaylists();
  batchStatus.textContent = `Deleted "${batch.title}".`;
  showUndo("Saved batch deleted.", () => {
    savedBatches.unshift(batch);
    playlists = [...removedPlaylists, ...playlists];
    saveSavedBatches();
    savePlaylists();
    renderSavedBatches();
    renderPlaylists();
    batchStatus.textContent = `Restored "${batch.title}".`;
  });
}

function renderSavedBatches() {
  if (!savedBatchList || !savedBatchEmpty) {
    return;
  }

  const searchText = (librarySearchInput?.value || "").trim().toLowerCase();
  const languageBatches = getCurrentLanguageItems(savedBatches).filter((batch) => libraryItemMatchesSearch(batch, searchText));
  savedBatchList.innerHTML = "";
  savedBatchEmpty.style.display = languageBatches.length ? "none" : "block";

  languageBatches.forEach((batch) => {
    const item = document.createElement("li");
    const textWrapper = document.createElement("div");
    const title = document.createElement("h4");
    const meta = document.createElement("p");
    const preview = document.createElement("p");
    const actions = document.createElement("div");
    const loadButton = document.createElement("button");
    const radioButton = document.createElement("button");
    const playlistButton = document.createElement("button");
    const removeButton = document.createElement("button");

    item.className = "favourite-item saved-batch-item";
    meta.className = "sentence-meta saved-batch-meta";
    preview.className = "saved-batch-preview";
    actions.className = "playlist-item-actions saved-batch-actions";

    title.textContent = batch.title || "Saved generated set";
    meta.textContent = `${batch.sentences?.length || 0} sentences | ${capitalize(batch.difficulty || "mixed")} | ${capitalize(batch.topic || "mixed")} | ${formatSavedBatchDate(batch.createdAt)}`;
    preview.textContent = "";
    (batch.sentences || []).slice(0, 2).forEach((sentence, index) => {
      if (index > 0) {
        preview.appendChild(document.createTextNode("  "));
      }
      preview.appendChild(buildHoverableFragment(sentence.spanish, sentence, "saved-batch"));
    });

    loadButton.className = "secondary-btn";
    radioButton.className = "secondary-btn";
    playlistButton.className = "secondary-btn";
    removeButton.className = "delete-btn";
    loadButton.textContent = "Load set";
    radioButton.textContent = "Start radio";
    playlistButton.textContent = "Open playlist";
    removeButton.textContent = "Delete";

    loadButton.addEventListener("click", () => loadSavedBatch(batch.id));
    radioButton.addEventListener("click", () => openBatchPlaylist(batch.id, true));
    playlistButton.addEventListener("click", () => openBatchPlaylist(batch.id, false));
    removeButton.addEventListener("click", () => deleteSavedBatch(batch.id));

    textWrapper.appendChild(title);
    textWrapper.appendChild(meta);
    textWrapper.appendChild(preview);
    actions.appendChild(loadButton);
    actions.appendChild(radioButton);
    actions.appendChild(playlistButton);
    actions.appendChild(removeButton);
    item.appendChild(textWrapper);
    item.appendChild(actions);
    savedBatchList.appendChild(item);
  });
}

function libraryItemMatchesSearch(item, searchText) {
  if (!searchText) {
    return true;
  }

  const sentenceText = (item.sentences || item.lines || item.messages || [])
    .map((entry) => `${entry.spanish || ""} ${entry.english || ""} ${entry.correctionSpanish || ""}`)
    .join(" ");
  const haystack = [
    item.title,
    item.name,
    item.topic,
    item.folder,
    item.difficulty,
    item.tone,
    sentenceText
  ].join(" ").toLowerCase();

  return haystack.includes(searchText);
}

// This helper returns the selected playlist object.
function getSelectedPlaylist() {
  return getCurrentLanguageItems(playlists).find((playlist) => playlist.id === playlistSelect.value) || null;
}

// This function draws the playlist dropdown and sentence list.
function renderPlaylists() {
  const previousValue = playlistSelect.value;
  renderPlaylistFolders();
  const searchText = (librarySearchInput?.value || "").trim().toLowerCase();
  const languagePlaylists = getCurrentLanguageItems(playlists)
    .filter((playlist) => selectedPlaylistFolder === "all" || (playlist.folder || "General") === selectedPlaylistFolder)
    .filter((playlist) => libraryItemMatchesSearch(playlist, searchText));
  playlistSelect.innerHTML = "";

  if (languagePlaylists.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "No playlists yet";
    playlistSelect.appendChild(option);
    renderSelectedPlaylist();
    return;
  }

  languagePlaylists.forEach((playlist) => {
    const option = document.createElement("option");
    option.value = playlist.id;
    option.textContent = `${playlist.name} (${playlist.folder || "General"} - ${playlist.sentences.length})`;
    playlistSelect.appendChild(option);
  });

  const hasPrevious = languagePlaylists.some((playlist) => playlist.id === previousValue);
  playlistSelect.value = hasPrevious ? previousValue : languagePlaylists[0].id;
  renderSelectedPlaylist();
}

// This function draws the sentences inside the selected playlist.
function renderSelectedPlaylist() {
  playlistSentences.innerHTML = "";
  const playlist = getSelectedPlaylist();
  const hasPlaylistSentences = Boolean(playlist?.sentences?.length);

  if (downloadPlaylistMp3Btn) {
    downloadPlaylistMp3Btn.disabled = !hasPlaylistSentences;
  }
  updateExportActionVisibility();

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
    listItem.dataset.playlistIndex = String(index);
    if (radioState.isPlaying && radioState.playlistId === playlist.id && radioState.index === index) {
      listItem.classList.add("active-playlist-item");
    }

    const textWrapper = document.createElement("div");
    const title = document.createElement("h4");
    const translation = document.createElement("p");
    const tagRow = document.createElement("div");
    const difficultyTag = document.createElement("span");
    const topicTag = document.createElement("span");
    const toneTag = document.createElement("span");
    const actionRow = document.createElement("div");
    const playButton = document.createElement("button");
    const startHereButton = document.createElement("button");
    const recallButton = document.createElement("button");
    const removeButton = document.createElement("button");

    title.appendChild(buildHoverableFragment(sentence.spanish, sentence));
    translation.textContent = sentence.english;

    tagRow.className = "tag-row";
    difficultyTag.className = "tag";
    topicTag.className = "tag";
    toneTag.className = "tag";
    difficultyTag.textContent = capitalize(sentence.difficulty);
    topicTag.textContent = capitalize(sentence.topic);
    toneTag.textContent = capitalize(sentence.tone);

    actionRow.className = "playlist-item-actions";
    playButton.textContent = "Play";
    playButton.className = "secondary-btn";
    playButton.addEventListener("click", () => {
      playSinglePlaylistSentence(sentence, index);
    });
    startHereButton.textContent = "Start from here";
    startHereButton.className = "secondary-btn";
    startHereButton.addEventListener("click", () => {
      startRadioMode(index);
    });
    recallButton.textContent = "Recall";
    recallButton.className = "secondary-btn";
    recallButton.addEventListener("click", () => {
      addSentenceToRecall(sentence);
    });
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
    actionRow.appendChild(playButton);
    actionRow.appendChild(startHereButton);
    actionRow.appendChild(recallButton);
    actionRow.appendChild(removeButton);
    listItem.appendChild(textWrapper);
    listItem.appendChild(actionRow);
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
    targetLanguage,
    name,
    folder: selectedPlaylistFolder === "all" ? "General" : selectedPlaylistFolder,
    sentences: []
  });

  savePlaylists();
  playlistNameInput.value = "";
  renderPlaylists();
  showStatusMessage("Playlist created.");
}

function createPlaylistWithName(name, folder = "General") {
  const playlistName = (name || "").trim();

  if (!playlistName) {
    return null;
  }

  const existing = getCurrentLanguageItems(playlists).find((playlist) => playlist.name.toLowerCase() === playlistName.toLowerCase());

  if (existing) {
    return existing;
  }

  const playlist = {
    id: createId(),
    targetLanguage,
    name: playlistName,
    folder,
    sentences: []
  };

  playlists.push(playlist);
  savePlaylists();
  renderPlaylists();
  return playlist;
}

function addSentenceToPlaylist(sentence, playlist) {
  if (!sentence?.spanish || !playlist) {
    return false;
  }

  const alreadyAdded = playlist.sentences.some((item) => item.spanish === sentence.spanish);

  if (alreadyAdded) {
    alert(`This sentence is already in "${playlist.name}".`);
    return false;
  }

  playlist.sentences.push(withCurrentLanguage(sentence));
  savePlaylists();
  renderPlaylists();
  showStatusMessage(`Sentence added to "${playlist.name}".`);
  return true;
}

function choosePlaylistFromPrompt() {
  const languagePlaylists = getCurrentLanguageItems(playlists);
  let selectedPlaylist = null;

  if (!languagePlaylists.length) {
    const firstName = window.prompt("No playlists yet. Name your first playlist:", "My practice playlist");
    selectedPlaylist = createPlaylistWithName(firstName);
  } else {
    const options = languagePlaylists
      .map((playlist, index) => `${index + 1}. ${playlist.name} (${(playlist.sentences || []).length})`)
      .join("\n");
    const answer = window.prompt(`Add this sentence to which playlist?\n\n${options}\n\nType a number, or type a new playlist name.`);

    if (!answer) {
      return false;
    }

    const selectedIndex = Number(answer.trim()) - 1;
    selectedPlaylist = Number.isInteger(selectedIndex) && languagePlaylists[selectedIndex]
      ? languagePlaylists[selectedIndex]
      : createPlaylistWithName(answer.trim());
  }

  return selectedPlaylist;
}

function choosePlaylistForSentence(sentence, successCallback = null) {
  if (!sentence?.spanish) {
    alert("Choose or generate a sentence first.");
    return false;
  }

  const selectedPlaylist = choosePlaylistFromPrompt();

  const added = addSentenceToPlaylist(sentence, selectedPlaylist);

  if (added && typeof successCallback === "function") {
    successCallback(selectedPlaylist);
  }

  return added;
}

// This function adds one sentence to the selected playlist.
function addSentenceToSelectedPlaylist(sentence) {
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    alert("Create a playlist first.");
    return false;
  }

  return addSentenceToPlaylist(sentence, playlist);
}

// This function removes one sentence from the selected playlist.
function removeFromPlaylist(index) {
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    return;
  }

  const removedSentence = playlist.sentences[index];
  playlist.sentences.splice(index, 1);
  savePlaylists();
  renderPlaylists();
  showUndo("Playlist sentence removed.", () => {
    playlist.sentences.splice(index, 0, removedSentence);
    savePlaylists();
    renderPlaylists();
  });
}

// This function deletes the selected playlist.
function deleteSelectedPlaylist() {
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    alert("There is no playlist to delete.");
    return;
  }

  stopRadioMode();
  const removedPlaylist = { ...playlist, sentences: (playlist.sentences || []).map((sentence) => ({ ...sentence })) };
  playlists = playlists.filter((item) => item.id !== playlist.id);
  savePlaylists();
  renderPlaylists();
  showStatusMessage("Playlist deleted.");
  showUndo("Playlist deleted.", () => {
    playlists.unshift(removedPlaylist);
    savePlaylists();
    renderPlaylists();
    showStatusMessage("Playlist restored.");
  });
}

function buildDailyReviewQueue() {
  const wordItems = getCurrentLanguageItems(savedWords)
    .map(withWordSchedule)
    .filter(isWordDue)
    .slice(0, 8)
    .map((word) => ({ type: "word", word }));
  const recallItems = getCurrentLanguageItems(recallSentences)
    .map(withRecallSchedule)
    .filter(isRecallDue)
    .slice(0, 8)
    .map((sentence) => ({ type: "recall", sentence }));
  const playlistItems = getCurrentLanguageItems(playlists)
    .flatMap((playlist) => (playlist.sentences || []).slice(0, 4).map((sentence) => ({ type: "playlist", playlist, sentence })))
    .slice(0, 8);

  dailyReviewQueue = [...wordItems, ...recallItems, ...playlistItems];
  dailyReviewIndex = 0;
  renderDailyReview();
}

function getPlaylistPracticeItemsForLanguage(languageKey, limit = 8) {
  return playlists
    .filter((playlist) => getSavedItemLanguage(playlist) === languageKey)
    .flatMap((playlist) => (playlist.sentences || []).slice(0, 4).map((sentence) => ({ type: "playlist", playlist, sentence })))
    .slice(0, limit);
}

function getRecentConversationCorrections(languageKey, limit = 4) {
  const currentCorrections = chatHistory
    .filter((message) => getSavedItemLanguage(message) === languageKey && message.role === "user" && message.correctionSpanish && message.correctionSpanish !== (message.spanish || message.text || ""))
    .map((message) => ({ type: "correction", message }));
  const savedCorrections = savedConversations
    .filter((conversation) => getSavedItemLanguage(conversation) === languageKey)
    .slice()
    .sort((first, second) => new Date(second.savedAt || 0) - new Date(first.savedAt || 0))
    .flatMap((conversation) => (conversation.messages || [])
      .filter((message) => message.role === "user" && message.correctionSpanish && message.correctionSpanish !== (message.spanish || message.text || ""))
      .map((message) => ({ type: "correction", message, conversation })));

  return [...currentCorrections, ...savedCorrections].slice(0, limit);
}

function buildSmartReviewSession() {
  const wordItems = getCurrentLanguageItems(savedWords)
    .map(withWordSchedule)
    .filter(isWordDue)
    .slice(0, 6)
    .map((word) => ({ type: "word", word }));
  const weakItems = getLanguageMistakePatterns()
    .slice(0, 4)
    .map((pattern) => ({ type: "weak", pattern }));
  const correctionItems = getRecentConversationCorrections(targetLanguage, 4);
  const recallItems = getCurrentLanguageItems(recallSentences)
    .map(withRecallSchedule)
    .filter(isRecallDue)
    .slice(0, 5)
    .map((sentence) => ({ type: "recall", sentence }));
  const playlistItems = getPlaylistPracticeItemsForLanguage(targetLanguage, 6);
  const mixedItems = [];
  const groups = [wordItems, weakItems, correctionItems, recallItems, playlistItems];

  while (mixedItems.length < 18 && groups.some((group) => group.length)) {
    groups.forEach((group) => {
      const nextItem = group.shift();
      if (nextItem && mixedItems.length < 18) {
        mixedItems.push(nextItem);
      }
    });
  }

  dailyReviewQueue = mixedItems;
  dailyReviewIndex = 0;
  renderDailyReview();
  showPage("review-page");
  if (dailyReviewSummary) {
    dailyReviewSummary.textContent = dailyReviewQueue.length
      ? `${dailyReviewQueue.length} items | Smart session: due words, weak phrases, recent corrections, recall, and playlists.`
      : "No smart review items yet. Save words, use chat corrections, or add playlist sentences first.";
  }
}

function getLanguageDashboardStats(languageKey) {
  const wordsForLanguage = savedWords.map(withWordSchedule).filter((item) => getSavedItemLanguage(item) === languageKey);
  const recallForLanguage = recallSentences.map(withRecallSchedule).filter((item) => getSavedItemLanguage(item) === languageKey);
  const playlistsForLanguage = playlists.filter((item) => getSavedItemLanguage(item) === languageKey);
  const playlistSentenceCount = playlistsForLanguage.reduce((total, playlist) => total + (playlist.sentences || []).length, 0);

  return {
    words: wordsForLanguage.length,
    dueWords: wordsForLanguage.filter(isWordDue).length,
    recall: recallForLanguage.length,
    dueRecall: recallForLanguage.filter(isRecallDue).length,
    playlists: playlistsForLanguage.length,
    playlistSentences: playlistSentenceCount,
    batches: savedBatches.filter((item) => getSavedItemLanguage(item) === languageKey).length,
    dialogues: savedDialogues.filter((item) => getSavedItemLanguage(item) === languageKey).length,
    conversations: savedConversations.filter((item) => getSavedItemLanguage(item) === languageKey).length,
    weak: getMistakePatternsForLanguage(languageKey).length
  };
}

function renderLanguageDashboard() {
  if (!languageDashboardGrid) {
    return;
  }

  languageDashboardGrid.innerHTML = "";
  Object.entries(targetLanguageProfiles).forEach(([languageKey, profile]) => {
    const stats = getLanguageDashboardStats(languageKey);
    const card = document.createElement("article");
    const header = document.createElement("div");
    const title = document.createElement("h4");
    const note = document.createElement("p");
    const grid = document.createElement("div");
    const switchButton = document.createElement("button");

    card.className = `language-dashboard-card${languageKey === targetLanguage ? " active" : ""}`;
    header.className = "language-dashboard-header";
    title.textContent = profile.label;
    note.textContent = `Due now: ${stats.dueWords + stats.dueRecall} | ${profile.sourceLabel} -> ${profile.label}`;
    grid.className = "language-dashboard-mini-grid";

    [
      ["Words", stats.words],
      ["Playlists", stats.playlists],
      ["Lines", stats.playlistSentences],
      ["Sets", stats.batches],
      ["Dialogues", stats.dialogues],
      ["Chats", stats.conversations],
      ["Weak", stats.weak],
      ["Recall", stats.recall]
    ].forEach(([labelText, value]) => {
      const stat = document.createElement("span");
      stat.innerHTML = `<strong>${value}</strong>${labelText}`;
      grid.appendChild(stat);
    });

    switchButton.className = "secondary-btn compact-btn";
    switchButton.type = "button";
    switchButton.textContent = languageKey === targetLanguage ? "Active" : "Switch";
    switchButton.disabled = languageKey === targetLanguage;
    switchButton.addEventListener("click", () => {
      if (targetLanguageSelect) {
        targetLanguageSelect.value = languageKey;
        targetLanguageSelect.dispatchEvent(new Event("change"));
      }
      showPage("review-page");
    });

    header.appendChild(title);
    header.appendChild(switchButton);
    card.appendChild(header);
    card.appendChild(note);
    card.appendChild(grid);
    languageDashboardGrid.appendChild(card);
  });
}

function renderTodayDashboard() {
  const dueWords = getCurrentLanguageItems(savedWords).map(withWordSchedule).filter(isWordDue).length;
  const dueRecall = getCurrentLanguageItems(recallSentences).map(withRecallSchedule).filter(isRecallDue).length;
  const batchCount = getCurrentLanguageItems(savedBatches).length;
  const patternCount = getLanguageMistakePatterns().length;
  const weeklyTotals = getWeeklyPracticeTotals();

  if (todayWordsDue) {
    todayWordsDue.textContent = dueWords;
  }
  if (todayRecallDue) {
    todayRecallDue.textContent = dueRecall;
  }
  if (todaySavedBatches) {
    todaySavedBatches.textContent = batchCount;
  }
  if (todayMistakePatterns) {
    todayMistakePatterns.textContent = patternCount;
  }
  if (todayStreakCount) {
    todayStreakCount.textContent = getPracticeStreak();
  }
  if (todayWeekGenerated) {
    todayWeekGenerated.textContent = weeklyTotals.generated;
  }
  if (todayWeekSpoken) {
    todayWeekSpoken.textContent = weeklyTotals.spoken;
  }
  if (todayWeekSaved) {
    todayWeekSaved.textContent = weeklyTotals.saved;
  }
  if (todayCallMinutes) {
    todayCallMinutes.textContent = Math.round(Number(getCurrentPracticeStats().callSeconds || 0) / 60);
  }
  if (todaySuggestion) {
    const generatedGoal = Number(practiceGoals.sentences || 0);
    const callGoalSeconds = Number(practiceGoals.callMinutes || 0) * 60;
    const currentStats = getCurrentPracticeStats();

    if (dueWords || dueRecall) {
      todaySuggestion.textContent = `Start with ${dueWords + dueRecall} due review item${dueWords + dueRecall === 1 ? "" : "s"}, then use a playlist or call practice.`;
    } else if ((generatedGoal && currentStats.generated < generatedGoal) || (callGoalSeconds && currentStats.callSeconds < callGoalSeconds)) {
      const generatedText = generatedGoal ? `${Math.min(currentStats.generated, generatedGoal)}/${generatedGoal} sentences` : "sentence goal off";
      const callText = callGoalSeconds ? `${Math.min(Math.round(currentStats.callSeconds / 60), practiceGoals.callMinutes)}/${practiceGoals.callMinutes} call minutes` : "call goal off";
      todaySuggestion.textContent = `Daily goals: ${generatedText} | ${callText}.`;
    } else if (patternCount) {
      todaySuggestion.textContent = "No due cards right now. Review your recurring mistake patterns or start a short call.";
    } else {
      todaySuggestion.textContent = "No urgent reviews. Generate a set, start a dialogue, or do a short call.";
    }
  }
  renderMistakePatternsPanel();
  renderLanguageDashboard();
}

function renderMistakePatternsPanel() {
  if (!mistakePatternList) {
    return;
  }

  const patterns = getLanguageMistakePatterns().slice(0, 5);
  mistakePatternList.innerHTML = "";

  if (startMistakeReviewBtn) {
    startMistakeReviewBtn.disabled = !patterns.length;
  }

  if (!patterns.length) {
    const empty = document.createElement("li");
    empty.textContent = "No recurring fixes yet. Chat or call reviews will collect them here.";
    mistakePatternList.appendChild(empty);
    return;
  }

  patterns.forEach((pattern) => {
    const item = document.createElement("li");
    const example = pattern.example ? ` Example: ${pattern.example}` : "";
    item.textContent = `${pattern.note || "More natural wording"} - seen ${pattern.count || 1} time${Number(pattern.count || 1) === 1 ? "" : "s"}.${example}`;
    mistakePatternList.appendChild(item);
  });
}

function renderDailyReview() {
  if (!dailyReviewSummary || !dailyReviewCard) {
    return;
  }

  if (!dailyReviewQueue.length) {
    renderTodayDashboard();
    dailyReviewSummary.textContent = "No review queue built yet.";
    dailyReviewCard.innerHTML = '<p class="empty-message">Press Build today&apos;s queue to start a focused practice session.</p>';
    return;
  }

  const item = dailyReviewQueue[Math.min(dailyReviewIndex, dailyReviewQueue.length - 1)];
  renderTodayDashboard();
  dailyReviewSummary.textContent = `${dailyReviewIndex + 1} of ${dailyReviewQueue.length} | Words, recall, corrections, and playlist practice mixed together.`;
  dailyReviewCard.innerHTML = "";

  const label = document.createElement("p");
  const title = document.createElement("h3");
  const detail = document.createElement("p");
  const actions = document.createElement("div");
  const goodButton = document.createElement("button");
  const hardButton = document.createElement("button");

  label.className = "section-label";
  detail.className = "sentence-meta";
  actions.className = "actions";
  goodButton.className = "secondary-btn";
  hardButton.className = "secondary-btn";

  if (item.type === "word") {
    label.textContent = "Word SRS";
    title.textContent = item.word.word;
    detail.textContent = `${item.word.meaning || "Meaning saved from context"} | ${item.word.exampleSpanish || "No example sentence saved."}`;
    goodButton.textContent = "Good";
    hardButton.textContent = "Again";
    goodButton.addEventListener("click", () => {
      markWordReview(item.word.id, 4);
      nextDailyReviewItem();
    });
    hardButton.addEventListener("click", () => {
      markWordReview(item.word.id, 0);
      nextDailyReviewItem();
    });
  } else if (item.type === "recall") {
    label.textContent = "Sentence recall";
    title.textContent = item.sentence.english;
    detail.textContent = "Try to say the target-language sentence before revealing it.";
    goodButton.textContent = "Remembered";
    hardButton.textContent = "Missed";
    goodButton.addEventListener("click", () => {
      markRecallReview(item.sentence.spanish, true);
      nextDailyReviewItem();
    });
    hardButton.addEventListener("click", () => {
      markRecallReview(item.sentence.spanish, false);
      setHoverableTargetText(detail, item.sentence.spanish, item.sentence, "daily-review");
    });
  } else if (item.type === "weak") {
    label.textContent = "Weak phrase";
    title.textContent = item.pattern.example || "Saved correction";
    detail.textContent = `${item.pattern.note || "More natural wording"} | Seen ${item.pattern.count || 1} time${Number(item.pattern.count || 1) === 1 ? "" : "s"}`;
    goodButton.textContent = "Practised";
    hardButton.textContent = "Play";
    goodButton.addEventListener("click", nextDailyReviewItem);
    hardButton.addEventListener("click", playCurrentDailyReviewItem);
  } else if (item.type === "correction") {
    const originalText = item.message.spanish || item.message.text || "";
    label.textContent = "Recent chat correction";
    setHoverableTargetText(title, item.message.correctionSpanish || originalText, {
      spanish: item.message.correctionSpanish || originalText,
      english: item.message.correctionEnglish || item.message.english || ""
    }, "daily-review");
    detail.textContent = originalText && originalText !== title.textContent
      ? `You said: ${originalText}`
      : item.message.correctionEnglish || item.message.english || "Practise this more natural version aloud.";
    goodButton.textContent = "Practised";
    hardButton.textContent = "Play";
    goodButton.addEventListener("click", nextDailyReviewItem);
    hardButton.addEventListener("click", playCurrentDailyReviewItem);
  } else {
    label.textContent = `Playlist: ${item.playlist.name}`;
    setHoverableTargetText(title, item.sentence.spanish, item.sentence, "daily-review");
    detail.textContent = item.sentence.english || "";
    goodButton.textContent = "Done";
    hardButton.textContent = "Play again";
    goodButton.addEventListener("click", nextDailyReviewItem);
    hardButton.addEventListener("click", playCurrentDailyReviewItem);
  }

  actions.appendChild(goodButton);
  actions.appendChild(hardButton);
  dailyReviewCard.appendChild(label);
  dailyReviewCard.appendChild(title);
  dailyReviewCard.appendChild(detail);
  dailyReviewCard.appendChild(actions);
}

function nextDailyReviewItem() {
  if (!dailyReviewQueue.length) {
    buildDailyReviewQueue();
    return;
  }
  dailyReviewIndex += 1;
  if (dailyReviewIndex >= dailyReviewQueue.length) {
    dailyReviewSummary.textContent = `Review complete: ${dailyReviewQueue.length} items.`;
    dailyReviewCard.innerHTML = '<p class="empty-message">Nice work. Build a new queue when you want another mixed session.</p>';
    return;
  }
  renderDailyReview();
}

function playCurrentDailyReviewItem() {
  const item = dailyReviewQueue[dailyReviewIndex];
  if (!item) {
    return;
  }
  const text = item.type === "word"
    ? item.word.exampleSpanish || item.word.word
    : item.type === "weak"
      ? item.pattern?.example || ""
      : item.type === "correction"
        ? item.message?.correctionSpanish || item.message?.spanish || item.message?.text || ""
        : item.sentence?.spanish || "";
  if (text) {
    playSpanishAudio(text, "Daily review item");
  }
}

// This helper plays one playlist sentence without continuing through the playlist.
function playSinglePlaylistSentence(sentence, index) {
  if (!sentence?.spanish) {
    return;
  }

  stopRadioMode("");
  playSpanishAudio(sentence.spanish, `Playlist sentence ${index + 1}`);
  radioStatus.textContent = `Playing sentence ${index + 1}.`;
}

// This function downloads the selected sentence playlist as one MP3.
async function downloadSelectedPlaylistMp3() {
  const playlist = getSelectedPlaylist();

  if (!playlist) {
    alert("Create a playlist first.");
    return;
  }

  if (!playlist.sentences.length) {
    alert("Add at least one sentence to the playlist first.");
    return;
  }

  stopRadioMode();
  if (playlistMp3Panel) {
    playlistMp3Panel.classList.add("hidden");
  }

  downloadPlaylistMp3Btn.disabled = true;
  downloadPlaylistMp3Btn.textContent = "Preparing MP3...";
  radioStatus.textContent = `Preparing one MP3 for "${playlist.name}"...`;

  try {
    const turns = playlist.sentences.map((sentence) => ({ spanish: sentence.spanish }));
    const audioBlob = await fetchChunkedConversationAudioBlob(turns, (chunkNumber, totalChunks) => {
      radioStatus.textContent = `Preparing playlist audio part ${chunkNumber} of ${totalChunks}...`;
    }, 10, "playlist");
    const filename = slugifyFilename(`${getTargetLanguageProfile().label}-${playlist.name}-playlist`);
    const fullFilename = `${filename}.mp3`;

    showPlaylistMp3Ready(audioBlob, fullFilename);
    downloadAudioBlob(audioBlob, fullFilename);
    radioStatus.textContent = `Playlist MP3 ready: ${playlist.name}. If your phone did not download it automatically, use Save MP3.`;
  } catch (error) {
    radioStatus.textContent = `Could not download the playlist MP3. ${error.message}`;
  } finally {
    downloadPlaylistMp3Btn.disabled = false;
    downloadPlaylistMp3Btn.textContent = "Download playlist MP3";
  }
}

// This helper returns the selected shadowing pause in milliseconds.
function getShadowGapMs() {
  return Math.max(0, Number(shadowGapSelect?.value || 0) || 0) * 1000;
}

// This helper saves the radio shadowing gap preference.
function saveShadowGapPreference() {
  if (shadowGapSelect) {
    localStorage.setItem("spanishSentenceShadowGap", shadowGapSelect.value);
  }
}

// This helper waits before continuing radio playback so the learner can repeat.
function continueRadioAfterShadowGap(callback) {
  const gapMs = getShadowGapMs();

  if (!gapMs) {
    callback();
    return;
  }

  const seconds = Math.round(gapMs / 1000);
  radioStatus.textContent = `Shadowing pause: repeat out loud now. Next sentence in ${seconds} seconds.`;
  radioState.shadowTimeoutId = window.setTimeout(() => {
    radioState.shadowTimeoutId = null;
    if (radioState.isPlaying) {
      callback();
    }
  }, gapMs);
}

// This helper clears the safety timer that keeps playlist practice moving on mobile.
function clearRadioRecoveryTimer() {
  if (radioState.recoveryTimeoutId) {
    window.clearTimeout(radioState.recoveryTimeoutId);
    radioState.recoveryTimeoutId = null;
  }
}

// This helper redraws the compact playlist media controls.
function updateRadioPlaybackControls() {
  if (!radioPlayerControls || !radioPlaybackProgress || !pauseRadioBtn) {
    return;
  }

  const playlist = playlists.find((item) => item.id === radioState.playlistId);
  const player = spanishAudioPlayer;
  const isActive = radioState.isPlaying && playlist;
  const currentTime = player ? player.currentTime : 0;
  const duration = player ? player.duration : 0;
  const hasDuration = Number.isFinite(duration) && duration > 0;

  radioPlayerControls.classList.toggle("hidden", !isActive);
  pauseRadioBtn.textContent = radioState.isPaused ? "Resume" : "Pause";
  radioPlaybackProgress.textContent = isActive
    ? `${radioState.isPaused ? "Paused" : "Playing"} ${radioState.index + 1} of ${playlist.sentences.length} | ${formatMediaTime(currentTime)} / ${hasDuration ? formatMediaTime(duration) : "--:--"}`
    : "Not playing";

  document.querySelectorAll("[data-playlist-index]").forEach((item) => {
    item.classList.toggle(
      "active-playlist-item",
      isActive && Number(item.dataset.playlistIndex) === radioState.index
    );
  });
}

// This helper skips to a different sentence while playlist practice is active.
function skipRadioSentence(direction) {
  const playlist = playlists.find((item) => item.id === radioState.playlistId) || getSelectedPlaylist();

  if (!playlist || !playlist.sentences.length) {
    return;
  }

  radioState.isPlaying = true;
  radioState.isPaused = false;
  radioState.playlistId = playlist.id;
  radioState.mode = radioModeSelect.value;
  radioState.index = (radioState.index + direction + playlist.sentences.length) % playlist.sentences.length;
  spanishAudioEndedCallback = null;
  playRadioStep();
}

// This function pauses or resumes playlist radio playback.
function toggleRadioPause() {
  if (!radioState.isPlaying) {
    startRadioMode(radioState.index || 0);
    return;
  }

  const player = ensureSpanishAudioPlayer();

  if (radioState.isPaused) {
    radioState.isPaused = false;
    player.play().catch(() => {
      radioStatus.textContent = "Tap play again to resume audio.";
    });
    if ("speechSynthesis" in window) {
      window.speechSynthesis.resume();
    }
  } else {
    radioState.isPaused = true;
    clearRadioRecoveryTimer();
    player.pause();
    if ("speechSynthesis" in window) {
      window.speechSynthesis.pause();
    }
  }

  updateRadioPlaybackControls();
}

// This helper advances radio playback once, even if an audio end event fires twice.
function advanceRadioOnce(playbackToken, playlist) {
  if (!radioState.isPlaying || radioState.isPaused || playbackToken !== radioState.playbackToken) {
    return;
  }

  radioState.playbackToken += 1;
  clearRadioRecoveryTimer();

  continueRadioAfterShadowGap(() => {
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

// This helper recovers if a mobile browser finishes audio without firing "ended".
function armRadioRecoveryTimer(playbackToken, playlist) {
  clearRadioRecoveryTimer();

  radioState.recoveryTimeoutId = window.setTimeout(() => {
    radioState.recoveryTimeoutId = null;

    if (!radioState.isPlaying || playbackToken !== radioState.playbackToken) {
      return;
    }

    const player = ensureSpanishAudioPlayer();
    const audioLooksFinished = player.ended || (player.paused && player.currentTime > 0 && !player.seeking);

    if (audioLooksFinished) {
      advanceRadioOnce(playbackToken, playlist);
      return;
    }

    armRadioRecoveryTimer(playbackToken, playlist);
  }, 1500);
}

// This function stops any radio playback.
function stopRadioMode() {
  radioState.isPlaying = false;
  radioState.isPaused = false;
  radioState.playbackToken += 1;
  if (radioState.shadowTimeoutId) {
    window.clearTimeout(radioState.shadowTimeoutId);
    radioState.shadowTimeoutId = null;
  }
  clearRadioRecoveryTimer();
  ensureSpanishAudioPlayer().pause();
  ensureSpanishAudioPlayer().currentTime = 0;
  spanishAudioEndedCallback = null;
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  radioStatus.textContent = "Playlist practice stopped.";
  updateRadioPlaybackControls();
  renderSelectedPlaylist();
}

// This function chooses which sentence to play next in playlist practice.
function playRadioStep() {
  const playlist = playlists.find((item) => item.id === radioState.playlistId);

  if (!radioState.isPlaying || !playlist || playlist.sentences.length === 0) {
    radioState.isPlaying = false;
    return;
  }

  const currentPlaylistSentence = playlist.sentences[radioState.index];
  const sentenceText = currentPlaylistSentence?.spanish || "";

  if (!sentenceText.trim()) {
    radioState.index = (radioState.index + 1) % playlist.sentences.length;
    radioStatus.textContent = "Skipped an empty playlist sentence.";
    playRadioStep();
    return;
  }

  radioState.playbackToken += 1;
  const playbackToken = radioState.playbackToken;
  radioStatus.textContent = `Playing ${radioState.index + 1} of ${playlist.sentences.length}: ${playlist.name}`;
  radioState.isPaused = false;
  updateRadioPlaybackControls();

  playSpanishAudio(sentenceText, `${playlist.name} ${radioState.index + 1}`, () => {
    advanceRadioOnce(playbackToken, playlist);
  }, { progressive: false });
  armRadioRecoveryTimer(playbackToken, playlist);
}

// This function starts radio playback.
function startRadioMode(startIndex = 0) {
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
  radioState.isPaused = false;
  radioState.playlistId = playlist.id;
  radioState.mode = radioModeSelect.value;
  radioState.index = typeof startIndex === "number"
    ? Math.max(0, Math.min(startIndex, playlist.sentences.length - 1))
    : 0;
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

  const sentenceToSave = withCurrentLanguage(sentence);
  const alreadySaved = favourites.some((item) => isCurrentLanguageItem(item) && item.spanish === sentenceToSave.spanish);

  if (alreadySaved) {
    alert("This sentence is already in your favourites.");
    return false;
  }

  favourites.push(sentenceToSave);
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
  favourites = favourites.filter((item) => !(isCurrentLanguageItem(item) && item.spanish === spanishText));
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
  renderTodayDashboard();
}

// This helper adds spaced-repetition fields to older recall items.
function withRecallSchedule(sentence) {
  const nowText = new Date().toISOString();

  return {
    ...sentence,
    targetLanguage: getSavedItemLanguage(sentence),
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
  const sentenceToAdd = withCurrentLanguage(sentence);
  const alreadyAdded = recallSentences.some((item) => isCurrentLanguageItem(item) && item.spanish === sentenceToAdd.spanish);

  if (alreadyAdded) {
    alert("This sentence is already in Recall.");
    return;
  }

  recallSentences.push(withRecallSchedule(sentenceToAdd));
  saveRecallSentences();
  renderRecallSentences();
  showStatusMessage("Sentence added to Recall.");
}

// This function updates the spaced-repetition schedule after a review.
function markRecallReview(spanishText, remembered) {
  recallSentences = recallSentences.map((item) => {
    if (!isCurrentLanguageItem(item) || item.spanish !== spanishText) {
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
  recallSentences = recallSentences.filter((item) => !(isCurrentLanguageItem(item) && item.spanish === spanishText));
  saveRecallSentences();
  renderRecallSentences();
}

// This function draws the recall practice list.
function renderRecallSentences() {
  recallList.innerHTML = "";
  recallSentences = recallSentences.map(withRecallSchedule);
  const languageRecallSentences = getCurrentLanguageItems(recallSentences);

  if (languageRecallSentences.length === 0) {
    recallEmptyMessage.style.display = "block";
    recallSummary.textContent = "No recall reviews due yet.";
    return;
  }

  recallEmptyMessage.style.display = "none";
  const dueCount = languageRecallSentences.filter(isRecallDue).length;
  recallSummary.textContent = `${dueCount} due now | ${languageRecallSentences.length} total in Recall`;

  languageRecallSentences
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
      hiddenSpanish.appendChild(buildHoverableFragment(item.spanish, item));
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
      hiddenSpanish.appendChild(buildHoverableFragment(item.spanish, item));
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

// This helper updates a saved word with a high-quality spaced repetition grade.
function markWordReview(wordId, quality) {
  savedWords = savedWords.map((wordCard) => {
    const scheduledCard = withWordSchedule(wordCard);

    if (scheduledCard.id !== wordId) {
      return scheduledCard;
    }

    const nextEase = Math.max(
      1.3,
      scheduledCard.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );
    const remembered = quality >= 3;
    const nextRepetitions = remembered ? scheduledCard.repetitions + 1 : 0;
    let nextIntervalDays = 0;

    if (quality === 0) {
      nextIntervalDays = 0;
    } else if (quality === 3) {
      nextIntervalDays = Math.max(1, Math.round(Math.max(1, scheduledCard.intervalDays) * 1.2));
    } else if (quality === 4) {
      nextIntervalDays = nextRepetitions === 1
        ? 1
        : nextRepetitions === 2
          ? 3
          : Math.round(Math.max(1, scheduledCard.intervalDays) * nextEase);
    } else {
      nextIntervalDays = nextRepetitions === 1
        ? 3
        : Math.round(Math.max(2, scheduledCard.intervalDays) * nextEase * 1.3);
    }

    const nextReviewDate = new Date();

    if (quality === 0) {
      nextReviewDate.setMinutes(nextReviewDate.getMinutes() + 10);
    } else {
      nextReviewDate.setDate(nextReviewDate.getDate() + nextIntervalDays);
    }

    return {
      ...scheduledCard,
      repetitions: nextRepetitions,
      easeFactor: nextEase,
      intervalDays: nextIntervalDays,
      correct: scheduledCard.correct + (remembered ? 1 : 0),
      wrong: scheduledCard.wrong + (remembered ? 0 : 1),
      lastReviewedAt: new Date().toISOString(),
      nextReviewAt: nextReviewDate.toISOString()
    };
  });

  saveSavedWords();
  renderSavedWords();
  showStatusMessage(quality === 0 ? "Word stays due soon." : "Word review scheduled.");
}

// This function removes a saved word.
function deleteSavedWord(wordId) {
  const removedWord = savedWords.find((wordCard) => withWordSchedule(wordCard).id === wordId);
  savedWords = savedWords.filter((wordCard) => withWordSchedule(wordCard).id !== wordId);
  saveSavedWords();
  renderSavedWords();
  if (removedWord) {
    showUndo("Saved word removed.", () => {
      savedWords.unshift(removedWord);
      saveSavedWords();
      renderSavedWords();
      showStatusMessage("Saved word restored.");
    });
  }
}

async function fetchWordDetailsForCard(wordCard) {
  const example = {
    spanish: wordCard.exampleSpanish || wordCard.word,
    english: wordCard.exampleEnglish || ""
  };
  const cacheKey = getWordDetailCacheKey(wordCard.normalisedWord || normaliseWord(wordCard.word), example);

  if (aiWordDetailCache[cacheKey]) {
    return aiWordDetailCache[cacheKey];
  }

  const data = await callAiLanguageCoach({
    mode: "word-details",
    targetLanguage,
    word: wordCard.word,
    spanish: example.spanish,
    english: example.english
  });
  const detail = data.detail || data.wordDetail || {};
  const normalisedDetail = {
    word: detail.word || wordCard.word,
    contextMeaning: detail.contextMeaning || wordCard.meaning || "",
    definitions: Array.isArray(detail.definitions) ? detail.definitions : [],
    grammar: detail.grammar && typeof detail.grammar === "object" ? detail.grammar : null,
    examples: Array.isArray(detail.examples) ? detail.examples : []
  };

  aiWordDetailCache[cacheKey] = normalisedDetail;
  saveAiWordDetailCache();
  return normalisedDetail;
}

function updateSavedWordDetails(wordId, detail) {
  savedWords = savedWords.map((item) => {
    const scheduledItem = withWordSchedule(item);

    if (scheduledItem.id !== wordId) {
      return scheduledItem;
    }

    return {
      ...scheduledItem,
      meaning: scheduledItem.meaning || detail.contextMeaning || "",
      contextMeaning: detail.contextMeaning || scheduledItem.contextMeaning || scheduledItem.meaning,
      definitions: Array.isArray(detail.definitions) ? detail.definitions : scheduledItem.definitions,
      grammar: detail.grammar || scheduledItem.grammar
    };
  });
  saveSavedWords();
}

function renderSavedWordDetailContent(wordCard) {
  wordDetailTitle.textContent = wordCard.word;
  wordDetailMeaning.textContent = "";
  renderClickedWordDetails(wordDetailMeaning, {
    contextMeaning: wordCard.contextMeaning || wordCard.meaning || "",
    definitions: wordCard.definitions || [],
    grammar: wordCard.grammar || null,
    examples: []
  }, wordCard.meaning || "");
  setHoverableTargetText(wordDetailExample, wordCard.exampleSpanish || "", {
    spanish: wordCard.exampleSpanish || "",
    english: wordCard.exampleEnglish || ""
  }, "word-detail");
  wordDetailHistory.textContent = `Saved ${formatReviewDate(wordCard.savedAt || wordCard.createdAt)} | Next review: ${isWordDue(wordCard) ? "due now" : formatReviewDate(wordCard.nextReviewAt)} | Reviews: ${Number(wordCard.correct || 0) + Number(wordCard.wrong || 0)} | Ease: ${Number(wordCard.easeFactor || 2.5).toFixed(2)}`;
}

async function showWordDetail(wordId) {
  let wordCard = savedWords.map(withWordSchedule).find((item) => item.id === wordId);

  if (!wordCard || !wordDetailPanel) {
    return;
  }

  activeWordDetailId = wordId;
  renderSavedWordDetailContent(wordCard);
  wordDetailExamplesList.innerHTML = "";
  wordDetailPanel.classList.remove("hidden");
  wordDetailPanel.scrollIntoView({ behavior: "smooth", block: "center" });

  if (!wordCard.definitions?.length && !wordCard.grammar) {
    wordDetailExamplesList.innerHTML = '<li class="recall-item"><p class="sentence-meta">Loading dictionary details...</p></li>';

    try {
      const detail = await fetchWordDetailsForCard(wordCard);
      updateSavedWordDetails(wordId, detail);
      wordCard = savedWords.map(withWordSchedule).find((item) => item.id === wordId) || wordCard;
      renderSavedWordDetailContent(wordCard);
      wordDetailExamplesList.innerHTML = "";
      renderSavedWords();
    } catch (error) {
      wordDetailExamplesList.innerHTML = "";
      showStatusMessage(`Could not load extra word details. ${formatAiErrorMessage(error.message)}`);
    }
  }
}

function hideWordDetail() {
  activeWordDetailId = "";
  wordDetailPanel?.classList.add("hidden");
}

function playWordDetailExample() {
  const wordCard = savedWords.map(withWordSchedule).find((item) => item.id === activeWordDetailId);
  if (wordCard) {
    playSpanishAudio(wordCard.exampleSpanish || wordCard.word, `Word detail: ${wordCard.word}`);
  }
}

function renderWordDetailExampleItems(examples) {
  if (!wordDetailExamplesList) {
    return;
  }

  wordDetailExamplesList.innerHTML = "";
  examples.forEach((example, index) => {
    const targetText = typeof example === "string" ? example : example.spanish || example.target || "";
    const translationText = typeof example === "string" ? "" : example.english || example.translation || "";
    const item = document.createElement("li");
    const title = document.createElement("h4");
    const translation = document.createElement("p");
    const playButton = document.createElement("button");

    if (!targetText) {
      return;
    }

    item.className = "recall-item";
    setHoverableTargetText(title, targetText, {
      spanish: targetText,
      english: translationText
    }, "word-example");
    playButton.className = "secondary-btn";
    playButton.type = "button";
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => playSpanishAudio(targetText, `Word example ${index + 1}`));
    item.appendChild(title);
    if (translationText) {
      translation.className = "sentence-meta";
      translation.textContent = translationText;
      item.appendChild(translation);
    }
    item.appendChild(playButton);
    wordDetailExamplesList.appendChild(item);
  });
}

function renderWordContextReviewItems(wordCard, examples) {
  if (!wordDetailExamplesList) {
    return;
  }

  wordDetailExamplesList.innerHTML = "";
  examples.slice(0, 3).forEach((example, index) => {
    const targetText = typeof example === "string" ? example : example.spanish || example.target || "";
    const translationText = typeof example === "string" ? "" : example.english || example.translation || "";
    const item = document.createElement("li");
    const prompt = document.createElement("p");
    const sentence = document.createElement("h4");
    const answer = document.createElement("p");
    const actions = document.createElement("div");
    const revealButton = document.createElement("button");
    const rememberedButton = document.createElement("button");
    const missedButton = document.createElement("button");
    const playButton = document.createElement("button");

    if (!targetText) {
      return;
    }

    item.className = "recall-item word-context-review-item";
    prompt.className = "sentence-meta";
    answer.className = "sentence-meta hidden";
    actions.className = "actions";
    prompt.textContent = `What does "${wordCard.word}" mean in this sentence?`;
    setHoverableTargetText(sentence, targetText, {
      spanish: targetText,
      english: translationText
    }, "word-context-review");
    answer.textContent = `${wordCard.meaning || wordCard.contextMeaning || "Meaning not saved yet."}${translationText ? ` | ${translationText}` : ""}`;

    revealButton.className = "secondary-btn";
    rememberedButton.className = "secondary-btn";
    missedButton.className = "secondary-btn";
    playButton.className = "secondary-btn";
    revealButton.type = "button";
    rememberedButton.type = "button";
    missedButton.type = "button";
    playButton.type = "button";
    revealButton.textContent = "Reveal meaning";
    rememberedButton.textContent = "I knew it";
    missedButton.textContent = "I missed it";
    playButton.textContent = "Play";

    revealButton.addEventListener("click", () => {
      answer.classList.remove("hidden");
      revealButton.disabled = true;
    });
    rememberedButton.addEventListener("click", () => markWordReview(wordCard.id, 4));
    missedButton.addEventListener("click", () => markWordReview(wordCard.id, 0));
    playButton.addEventListener("click", () => playSpanishAudio(targetText, `Context review ${index + 1}`));

    actions.appendChild(revealButton);
    actions.appendChild(rememberedButton);
    actions.appendChild(missedButton);
    actions.appendChild(playButton);
    item.appendChild(prompt);
    item.appendChild(sentence);
    item.appendChild(answer);
    item.appendChild(actions);
    wordDetailExamplesList.appendChild(item);
  });
}

function getFallbackWordDetailExamples(wordCard, topic) {
  const exampleTemplates = {
    spanish: [
      `Quiero usar "${wordCard.word}" en una frase natural sobre ${topic}.`,
      `A veces oigo "${wordCard.word}" cuando hablo de ${topic}.`,
      `Me cuesta recordar "${wordCard.word}", asi que necesito practicarlo.`,
      `Esta frase me ayuda a entender mejor "${wordCard.word}".`,
      `Voy a repetir "${wordCard.word}" hasta que me salga natural.`
    ],
    french: [
      `Je veux utiliser "${wordCard.word}" dans une phrase naturelle sur ${topic}.`,
      `J'entends parfois "${wordCard.word}" quand on parle de ${topic}.`,
      `J'ai du mal a retenir "${wordCard.word}", donc je dois le pratiquer.`,
      `Cette phrase m'aide a mieux comprendre "${wordCard.word}".`,
      `Je vais repeter "${wordCard.word}" jusqu'a ce que ca sonne naturel.`
    ],
    italian: [
      `Voglio usare "${wordCard.word}" in una frase naturale su ${topic}.`,
      `A volte sento "${wordCard.word}" quando si parla di ${topic}.`,
      `Faccio fatica a ricordare "${wordCard.word}", quindi devo esercitarmi.`,
      `Questa frase mi aiuta a capire meglio "${wordCard.word}".`,
      `Ripetero "${wordCard.word}" finche non mi verra naturale.`
    ],
    english: [
      `I want to use "${wordCard.word}" in a natural sentence about ${topic}.`,
      `I sometimes hear "${wordCard.word}" when people talk about ${topic}.`,
      `I find "${wordCard.word}" hard to remember, so I need to practise it.`,
      `This sentence helps me understand "${wordCard.word}" better.`,
      `I will repeat "${wordCard.word}" until it sounds natural.`
    ]
  };

  return exampleTemplates[targetLanguage] || exampleTemplates.spanish;
}

async function generateWordDetailExamples() {
  const wordCard = savedWords.map(withWordSchedule).find((item) => item.id === activeWordDetailId);

  if (!wordCard || !wordDetailExamplesList) {
    return;
  }

  const topic = wordCard.topic || topicSelect?.value || "daily life";
  wordDetailExamplesList.innerHTML = '<li class="recall-item"><p class="sentence-meta">Generating natural examples...</p></li>';

  if (wordDetailExamplesBtn) {
    wordDetailExamplesBtn.disabled = true;
    wordDetailExamplesBtn.textContent = "Generating...";
  }

  try {
    const data = await callAiLanguageCoach({
      mode: "word-examples",
      targetLanguage,
      word: wordCard.word,
      meaning: wordCard.meaning || "",
      example: wordCard.exampleSpanish || "",
      topic,
      count: 5
    });
    const examples = Array.isArray(data.examples) ? data.examples : [];
    if (!examples.length) {
      throw new Error("No examples returned.");
    }
    renderWordDetailExampleItems(examples);
  } catch (error) {
    renderWordDetailExampleItems(getFallbackWordDetailExamples(wordCard, topic));
    showStatusMessage(`AI examples were unavailable, so built-in examples were used. ${formatAiErrorMessage(error.message)}`);
  } finally {
    if (wordDetailExamplesBtn) {
      wordDetailExamplesBtn.disabled = false;
      wordDetailExamplesBtn.textContent = "Generate 5 examples";
    }
  }
}

async function generateWordContextReview() {
  const wordCard = savedWords.map(withWordSchedule).find((item) => item.id === activeWordDetailId);

  if (!wordCard || !wordDetailExamplesList) {
    return;
  }

  const topic = wordCard.topic || topicSelect?.value || "daily life";
  wordDetailExamplesList.innerHTML = '<li class="recall-item"><p class="sentence-meta">Building context review...</p></li>';

  if (wordDetailReviewBtn) {
    wordDetailReviewBtn.disabled = true;
    wordDetailReviewBtn.textContent = "Building...";
  }

  try {
    const data = await callAiLanguageCoach({
      mode: "word-examples",
      targetLanguage,
      word: wordCard.word,
      meaning: wordCard.meaning || wordCard.contextMeaning || "",
      example: wordCard.exampleSpanish || "",
      topic,
      count: 3
    });
    const examples = Array.isArray(data.examples) ? data.examples : [];
    if (!examples.length) {
      throw new Error("No context examples returned.");
    }
    renderWordContextReviewItems(wordCard, examples);
  } catch (error) {
    renderWordContextReviewItems(wordCard, getFallbackWordDetailExamples(wordCard, topic).slice(0, 3));
    showStatusMessage(`AI context review was unavailable, so built-in examples were used. ${formatAiErrorMessage(error.message)}`);
  } finally {
    if (wordDetailReviewBtn) {
      wordDetailReviewBtn.disabled = false;
      wordDetailReviewBtn.textContent = "Review in context";
    }
  }
}

function generateLegacyWordDetailExamplesUnused() {
  const wordCard = savedWords.map(withWordSchedule).find((item) => item.id === activeWordDetailId);
  const topic = wordCard?.topic || topicSelect?.value || "daily life";
  const exampleTemplates = {
    spanish: [
      `Quiero usar "${wordCard.word}" en una frase natural sobre ${topic}.`,
      `A veces oigo "${wordCard.word}" cuando hablo de ${topic}.`,
      `Me cuesta recordar "${wordCard.word}", así que necesito practicarlo.`,
      `Esta frase me ayuda a entender mejor "${wordCard.word}".`,
      `Voy a repetir "${wordCard.word}" hasta que me salga natural.`
    ],
    french: [
      `Je veux utiliser "${wordCard.word}" dans une phrase naturelle sur ${topic}.`,
      `J'entends parfois "${wordCard.word}" quand on parle de ${topic}.`,
      `J'ai du mal à retenir "${wordCard.word}", donc je dois le pratiquer.`,
      `Cette phrase m'aide à mieux comprendre "${wordCard.word}".`,
      `Je vais répéter "${wordCard.word}" jusqu'à ce que ça sonne naturel.`
    ],
    italian: [
      `Voglio usare "${wordCard.word}" in una frase naturale su ${topic}.`,
      `A volte sento "${wordCard.word}" quando si parla di ${topic}.`,
      `Faccio fatica a ricordare "${wordCard.word}", quindi devo esercitarmi.`,
      `Questa frase mi aiuta a capire meglio "${wordCard.word}".`,
      `Ripeterò "${wordCard.word}" finché non mi verrà naturale.`
    ],
    english: [
      `I want to use "${wordCard.word}" in a natural sentence about ${topic}.`,
      `I sometimes hear "${wordCard.word}" when people talk about ${topic}.`,
      `I find "${wordCard.word}" hard to remember, so I need to practise it.`,
      `This sentence helps me understand "${wordCard.word}" better.`,
      `I will repeat "${wordCard.word}" until it sounds natural.`
    ]
  };
  const templates = exampleTemplates[targetLanguage] || exampleTemplates.spanish;

  templates.forEach((spanishText, index) => {
    const item = document.createElement("li");
    const title = document.createElement("h4");
    const playButton = document.createElement("button");
    item.className = "recall-item";
    setHoverableTargetText(title, spanishText, {
      spanish: spanishText,
      english: templates.english?.[index] || ""
    }, "word-example");
    playButton.className = "secondary-btn";
    playButton.type = "button";
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => playSpanishAudio(spanishText, `Word example ${index + 1}`));
    item.appendChild(title);
    item.appendChild(playButton);
    wordDetailExamplesList.appendChild(item);
  });
}

function setDiagnostics(items) {
  if (!diagnosticsList) {
    return;
  }

  diagnosticsList.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("li");
    row.className = item.ok ? "diagnostic-ok" : "diagnostic-warn";
    row.textContent = `${item.ok ? "OK" : "Check"}: ${item.label}`;
    diagnosticsList.appendChild(row);
  });
}

async function checkBackendConfig(endpoint, payload, successStatuses = [400]) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => ({}));
  return {
    ok: successStatuses.includes(response.status),
    details: data.details || data.error || response.statusText
  };
}

async function runConnectionDiagnostics() {
  const expectedScriptVersion = "v=86";
  const results = [
    {
      ok: Boolean(navigator.mediaDevices?.getUserMedia && window.MediaRecorder),
      label: "Browser supports microphone recording"
    },
    {
      ok: location.protocol === "https:" || location.hostname === "127.0.0.1" || location.hostname === "localhost",
      label: "Phone-safe secure context is available"
    },
    {
      ok: Boolean(window.speechSynthesis),
      label: "Browser fallback speech is available"
    },
    {
      ok: Boolean(document.querySelector(`script[src*="script.js?${expectedScriptVersion}"]`)),
      label: "Latest app script is loaded"
    }
  ];

  setDiagnostics(results);
  runDiagnosticsBtn.disabled = true;
  runDiagnosticsBtn.textContent = "Checking...";

  try {
    const openAiCheck = await checkBackendConfig("/api/language-coach", { mode: "diagnostic" }, [400]);
    results.push({
      ok: openAiCheck.ok,
      label: openAiCheck.ok ? "OpenAI backend key is reachable" : `OpenAI backend issue: ${openAiCheck.details}`
    });
  } catch (error) {
    results.push({ ok: false, label: "OpenAI backend could not be reached" });
  }

  try {
    const ttsCheck = await checkBackendConfig("/api/generate-spanish-audio", { text: "", targetLanguage, voice: getSelectedSpanishVoice() }, [400]);
    results.push({
      ok: ttsCheck.ok,
      label: ttsCheck.ok ? "ElevenLabs text-to-speech key is reachable" : `ElevenLabs TTS issue: ${ttsCheck.details}`
    });
  } catch (error) {
    results.push({ ok: false, label: "ElevenLabs text-to-speech backend could not be reached" });
  }

  try {
    const sttCheck = await checkBackendConfig("/api/transcribe-chat-audio", { audioBase64: "", targetLanguage }, [400]);
    results.push({
      ok: sttCheck.ok,
      label: sttCheck.ok ? "ElevenLabs speech-to-text key is reachable" : `ElevenLabs STT issue: ${sttCheck.details}`
    });
  } catch (error) {
    results.push({ ok: false, label: "ElevenLabs speech-to-text backend could not be reached" });
  }

  setDiagnostics(results);
  runDiagnosticsBtn.disabled = false;
  runDiagnosticsBtn.textContent = "Run connection check";
}

function runPhoneSetupCheck() {
  showPage("settings-page");
  setTimeout(() => {
    runConnectionDiagnostics();
    if (diagnosticsList) {
      diagnosticsList.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, 80);
}

// This function draws the saved-word spaced repetition list.
function renderSavedWords() {
  if (!wordRecallList || !wordRecallSummary || !wordRecallEmptyMessage) {
    return;
  }

  wordRecallList.innerHTML = "";
  savedWords = savedWords.map(withWordSchedule);
  const languageWords = getCurrentLanguageItems(savedWords).filter((wordCard) => wordCard.normalisedWord);
  const languageCounts = Object.keys(targetLanguageProfiles)
    .map((languageKey) => {
      const count = savedWords.filter((wordCard) => getSavedItemLanguage(wordCard) === languageKey && withWordSchedule(wordCard).normalisedWord).length;
      return count ? `${targetLanguageProfiles[languageKey].label}: ${count}` : "";
    })
    .filter(Boolean);

  if (wordLanguageSummary) {
    wordLanguageSummary.textContent = languageCounts.length
      ? `Saved by direction: ${languageCounts.join(" | ")}`
      : "Saved words are separated by learning direction.";
  }

  wordFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.wordFilter === wordFilterMode);
  });

  if (!languageWords.length) {
    wordRecallEmptyMessage.style.display = "block";
    wordRecallSummary.textContent = "No saved words yet.";
    saveSavedWords();
    return;
  }

  wordRecallEmptyMessage.style.display = "none";
  const dueCount = languageWords.filter(isWordDue).length;
  let visibleWords = languageWords;

  if (wordFilterMode === "due") {
    visibleWords = languageWords.filter(isWordDue);
  } else if (wordFilterMode === "hard") {
    visibleWords = languageWords.filter((wordCard) => Number(wordCard.wrong || 0) > Number(wordCard.correct || 0) || Number(wordCard.easeFactor || 2.5) < 2.1);
  } else if (wordFilterMode === "recent") {
    visibleWords = languageWords
      .slice()
      .sort((first, second) => new Date(second.savedAt || second.createdAt || 0) - new Date(first.savedAt || first.createdAt || 0))
      .slice(0, 20);
  } else if (wordFilterMode === "topic") {
    visibleWords = languageWords.filter((wordCard) => (wordCard.topic || "").toLowerCase() === (topicSelect?.value || "").toLowerCase());
  }

  wordRecallSummary.textContent = `${dueCount} due now | ${languageWords.length} saved words | Showing ${visibleWords.length}`;

  if (!visibleWords.length) {
    wordRecallEmptyMessage.style.display = "block";
    wordRecallEmptyMessage.textContent = "No saved words match this filter.";
    saveSavedWords();
    return;
  }

  wordRecallEmptyMessage.textContent = "No saved words yet. Click a highlighted word to save it.";

  visibleWords
    .slice()
    .sort((first, second) => {
      const firstDue = isWordDue(first) ? 0 : 1;
      const secondDue = isWordDue(second) ? 0 : 1;

      if (firstDue !== secondDue) {
        return firstDue - secondDue;
      }

      return new Date(first.nextReviewAt) - new Date(second.nextReviewAt);
    })
    .forEach((wordCard) => {
      const listItem = document.createElement("li");
      const title = document.createElement("h4");
      const meaning = document.createElement("p");
      const grammar = document.createElement("div");
      const example = document.createElement("p");
      const exampleEnglish = document.createElement("p");
      const schedule = document.createElement("p");
      const tagRow = document.createElement("div");
      const dueTag = document.createElement("span");
      const actionRow = document.createElement("div");
      const againButton = document.createElement("button");
      const hardButton = document.createElement("button");
      const goodButton = document.createElement("button");
      const easyButton = document.createElement("button");
      const playButton = document.createElement("button");
      const detailButton = document.createElement("button");
      const removeButton = document.createElement("button");

      listItem.className = "recall-item word-recall-item";
      title.textContent = wordCard.word;
      meaning.textContent = wordCard.meaning || "Meaning not saved yet. Click the word again after its hint loads to update it.";
      grammar.className = "word-card-grammar";
      getWordGrammarFacts(wordCard.grammar).slice(0, 4).forEach(([label, value]) => {
        const chip = document.createElement("span");
        chip.className = "word-grammar-chip";
        chip.textContent = `${label}: ${value}`;
        grammar.appendChild(chip);
      });
      example.className = "word-example";
      setHoverableTargetText(example, wordCard.exampleSpanish || "", {
        spanish: wordCard.exampleSpanish || "",
        english: wordCard.exampleEnglish || ""
      }, "saved-word");
      exampleEnglish.className = "word-example-english";
      exampleEnglish.textContent = wordCard.exampleEnglish || "";
      schedule.textContent = `Next review: ${isWordDue(wordCard) ? "due now" : formatReviewDate(wordCard.nextReviewAt)} | Interval: ${wordCard.intervalDays || "same day"} | Ease: ${wordCard.easeFactor.toFixed(2)} | Right: ${wordCard.correct} | Missed: ${wordCard.wrong}`;

      tagRow.className = "tag-row";
      dueTag.className = "tag";
      dueTag.textContent = isWordDue(wordCard) ? "Due now" : `Due ${formatReviewDate(wordCard.nextReviewAt)}`;
      tagRow.appendChild(dueTag);

      actionRow.className = "actions";
      againButton.textContent = "Again";
      hardButton.textContent = "Hard";
      goodButton.textContent = "Good";
      easyButton.textContent = "Easy";
      playButton.textContent = "Play example";
      detailButton.textContent = "Details";
      removeButton.textContent = "Remove";

      [againButton, hardButton, goodButton, easyButton, playButton, detailButton].forEach((button) => {
        button.className = "secondary-btn";
      });
      removeButton.className = "delete-btn";

      againButton.addEventListener("click", () => markWordReview(wordCard.id, 0));
      hardButton.addEventListener("click", () => markWordReview(wordCard.id, 3));
      goodButton.addEventListener("click", () => markWordReview(wordCard.id, 4));
      easyButton.addEventListener("click", () => markWordReview(wordCard.id, 5));
      playButton.addEventListener("click", () => {
        playSpanishAudio(wordCard.exampleSpanish || wordCard.word, `Word example: ${wordCard.word}`);
      });
      detailButton.addEventListener("click", () => showWordDetail(wordCard.id));
      removeButton.addEventListener("click", () => deleteSavedWord(wordCard.id));

      actionRow.appendChild(againButton);
      actionRow.appendChild(hardButton);
      actionRow.appendChild(goodButton);
      actionRow.appendChild(easyButton);
      actionRow.appendChild(playButton);
      actionRow.appendChild(detailButton);
      actionRow.appendChild(removeButton);

      listItem.appendChild(title);
      listItem.appendChild(meaning);
      if (grammar.childElementCount) {
        listItem.appendChild(grammar);
      }
      if (wordCard.exampleSpanish) {
        listItem.appendChild(example);
      }
      if (wordCard.exampleEnglish) {
        listItem.appendChild(exampleEnglish);
      }
      listItem.appendChild(schedule);
      listItem.appendChild(tagRow);
      listItem.appendChild(actionRow);
      wordRecallList.appendChild(listItem);
    });

  saveSavedWords();
}

// This function draws the favourites list.
// Saved Spanish text also uses hover word hints now.
function renderFavourites() {
  if (!favouritesList || !emptyMessage || !favouritesSearchInput) {
    return;
  }

  favouritesList.innerHTML = "";
  const searchText = favouritesSearchInput.value.trim().toLowerCase();
  const languageFavourites = getCurrentLanguageItems(favourites);

  if (languageFavourites.length === 0) {
    emptyMessage.style.display = "block";
    emptyMessage.textContent = "No favourites saved yet.";
    return;
  }

  const filteredFavourites = languageFavourites.filter((item) => {
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
    const playButton = document.createElement("button");
    const playlistButton = document.createElement("button");
    const recallButton = document.createElement("button");

    title.appendChild(buildHoverableFragment(item.spanish, item));
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

    playButton.textContent = "Play";
    playButton.className = "secondary-btn";
    playButton.addEventListener("click", () => {
      playSpanishAudio(item.spanish, item.topic || "Saved sentence");
    });

    playlistButton.textContent = "Add to playlist";
    playlistButton.className = "secondary-btn";
    playlistButton.addEventListener("click", () => {
      choosePlaylistForSentence(item);
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
    textWrapper.appendChild(playButton);
    textWrapper.appendChild(playlistButton);
    textWrapper.appendChild(recallButton);
    listItem.appendChild(textWrapper);
    listItem.appendChild(deleteButton);
    favouritesList.appendChild(listItem);
  });
}

// Event listeners tell the app what to do when buttons are clicked.
generateBtn.addEventListener("click", generateSentence);
generateBatchBtn.addEventListener("click", generateSentenceBatch);
downloadBatchPdfBtn.addEventListener("click", downloadBatchPdf);
downloadBatchMp3Btn.addEventListener("click", downloadBatchMp3);
if (saveBatchFavouritesBtn) {
  saveBatchFavouritesBtn.addEventListener("click", saveBatchToFavourites);
}
if (addBatchPlaylistBtn) {
  addBatchPlaylistBtn.addEventListener("click", addBatchToPlaylist);
}
if (createPlaylistFolderBtn) {
  createPlaylistFolderBtn.addEventListener("click", createPlaylistFolder);
}
if (playlistFolderSelect) {
  playlistFolderSelect.addEventListener("change", () => {
    selectedPlaylistFolder = playlistFolderSelect.value;
    savePlaylistFolders();
    renderPlaylists();
  });
}

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
  speakText(currentSentence.english, getTargetLanguageProfile().translationSpeechCode || "en-GB");
  incrementPracticeStat("spoken");
});

addGeneratorToPlaylistBtn.addEventListener("click", () => {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  choosePlaylistForSentence(currentSentence);
});

toggleTranslationBtn.addEventListener("click", () => {
  toggleTranslation();
  showStatusMessage(translationVisible ? "Translation revealed." : "Translation hidden.");
});

if (saveBtn) {
  saveBtn.addEventListener("click", saveCurrentSentence);
}
copySentenceBtn.addEventListener("click", copyCurrentSentence);
markCorrectBtn.addEventListener("click", () => markQuizAnswer("correct"));
markWrongBtn.addEventListener("click", () => markQuizAnswer("wrong"));
resetScoreBtn.addEventListener("click", resetQuizScore);
createPlaylistBtn.addEventListener("click", createPlaylist);
addCustomGeneratorTopicBtn.addEventListener("click", addCustomGeneratorTopic);
themeToggleBtn.addEventListener("click", toggleThemeMode);
if (targetLanguageSelect) {
  targetLanguageSelect.addEventListener("change", () => {
    saveTargetLanguagePreference();
    showStatusMessage(`${getTargetLanguageProfile().label} selected.`);
  });
}
setupLanguageButtons.forEach((button) => {
  button.addEventListener("click", () => applyQuickSetupLanguage(button.dataset.setupLanguage));
});
setupPresetButtons.forEach((button) => {
  button.addEventListener("click", () => applySetupPreset(button.dataset.setupPreset));
});
if (finishSetupBtn) {
  finishSetupBtn.addEventListener("click", () => {
    createFirstSetupPlaylist();
    localStorage.setItem("spanishSentenceSetupComplete", "true");
    applyFirstRunSetupVisibility();
  });
}
if (tooEasyBtn) {
  tooEasyBtn.addEventListener("click", () => applyDifficultyCalibration("too-easy"));
}
if (levelRightBtn) {
  levelRightBtn.addEventListener("click", () => applyDifficultyCalibration("about-right"));
}
if (tooHardBtn) {
  tooHardBtn.addEventListener("click", () => applyDifficultyCalibration("too-hard"));
}
if (runDiagnosticsBtn) {
  runDiagnosticsBtn.addEventListener("click", runConnectionDiagnostics);
}
if (mainPhoneTestBtn) {
  mainPhoneTestBtn.addEventListener("click", runPhoneSetupCheck);
}
lessonPackButtons.forEach((button) => {
  button.addEventListener("click", () => applyLessonPack(button.dataset.lessonPack));
});
if (mobileContinueChatBtn) {
  mobileContinueChatBtn.addEventListener("click", () => showPage("chat-page"));
}
if (mobileStartCallBtn) {
  mobileStartCallBtn.addEventListener("click", () => {
    showPage("chat-page");
    startCallMode();
  });
}
if (mobileGenerateSetBtn) {
  mobileGenerateSetBtn.addEventListener("click", () => {
    showPage("generator-page");
    generateBatch();
  });
}
if (mobileReviewTodayBtn) {
  mobileReviewTodayBtn.addEventListener("click", () => {
    buildSmartReviewSession();
    showPage("review-page");
  });
}
if (mobileOpenPlaylistBtn) {
  mobileOpenPlaylistBtn.addEventListener("click", () => showPage("radio-page"));
}
if (homeContinuePrimaryBtn) {
  homeContinuePrimaryBtn.addEventListener("click", () => {
    if (typeof homeContinuePrimaryAction === "function") {
      homeContinuePrimaryAction();
    }
  });
}
if (homeContinueSecondaryBtn) {
  homeContinueSecondaryBtn.addEventListener("click", () => {
    buildSmartReviewSession();
    showPage("review-page");
  });
}
if (startMistakeReviewBtn) {
  startMistakeReviewBtn.addEventListener("click", buildSmartReviewSession);
}
homePageTargetButtons.forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.homePageTarget));
});
if (exportLanguageBtn) {
  exportLanguageBtn.addEventListener("click", exportCurrentLanguageBackup);
}
if (restoreBackupBtn) {
  restoreBackupBtn.addEventListener("click", openRestoreBackupPicker);
}
if (restoreBackupSettingsBtn) {
  restoreBackupSettingsBtn.addEventListener("click", openRestoreBackupPicker);
}
if (restoreBackupInput) {
  restoreBackupInput.addEventListener("change", restorePracticeBackupFromFile);
}
if (savePracticeGoalsBtn) {
  savePracticeGoalsBtn.addEventListener("click", savePracticeGoals);
}
if (undoActionBtn) {
  undoActionBtn.addEventListener("click", runUndoAction);
}
if (nowPlayingStopBtn) {
  nowPlayingStopBtn.addEventListener("click", () => {
    isAudioQueuePlaying = false;
    stopSpanishAudioPlayback();
    renderAudioQueue();
  });
}
if (queueToggleBtn) {
  queueToggleBtn.addEventListener("click", toggleAudioQueuePanel);
}
if (queuePrevBtn) {
  queuePrevBtn.addEventListener("click", playPreviousAudioQueueItem);
}
if (queueNextBtn) {
  queueNextBtn.addEventListener("click", playNextAudioQueueItem);
}
if (queueSpeedSelect) {
  queueSpeedSelect.addEventListener("change", applyQueuePlayerOptions);
}
if (queueLoopBtn) {
  queueLoopBtn.addEventListener("click", () => {
    const player = ensureSpanishAudioPlayer();
    player.loop = !player.loop;
    updateMediaLoopButton(queueLoopBtn, player.loop);
  });
  updateMediaLoopButton(queueLoopBtn, false);
}
if (clearAudioQueueBtn) {
  clearAudioQueueBtn.addEventListener("click", clearAudioQueue);
}
if (queueCurrentSentenceBtn) {
  queueCurrentSentenceBtn.addEventListener("click", addCurrentSentenceToQueue);
}
if (queueSelectedPlaylistBtn) {
  queueSelectedPlaylistBtn.addEventListener("click", addSelectedPlaylistToQueue);
}
wordFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    wordFilterMode = button.dataset.wordFilter || "all";
    localStorage.setItem("spanishSentenceWordFilterMode", wordFilterMode);
    renderSavedWords();
  });
});
if (librarySearchInput) {
  librarySearchInput.addEventListener("input", () => {
    renderSavedBatches();
    renderSavedDialogues();
    renderPlaylists();
    renderLibraryHub();
  });
}
if (globalLibrarySearchInput) {
  globalLibrarySearchInput.addEventListener("input", renderLibraryHub);
}
libraryTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    libraryFilter = button.dataset.libraryFilter || "all";
    localStorage.setItem("spanishSentenceLibraryFilter", libraryFilter);
    renderLibraryHub();
  });
});
if (appModeToggleBtn) {
  appModeToggleBtn.addEventListener("click", toggleAppDisplayMode);
}
if (conversationLibrarySearchInput) {
  conversationLibrarySearchInput.addEventListener("input", renderSavedConversations);
}
if (conversationFolderSelect) {
  conversationFolderSelect.addEventListener("change", () => {
    selectedConversationFolder = conversationFolderSelect.value || "all";
    saveConversationFolders();
    renderSavedConversations();
  });
}
if (createConversationFolderBtn) {
  createConversationFolderBtn.addEventListener("click", createConversationFolder);
}
if (closeWordDetailBtn) {
  closeWordDetailBtn.addEventListener("click", hideWordDetail);
}
if (wordDetailPlayBtn) {
  wordDetailPlayBtn.addEventListener("click", playWordDetailExample);
}
if (wordDetailExamplesBtn) {
  wordDetailExamplesBtn.addEventListener("click", generateWordDetailExamples);
}
if (wordDetailReviewBtn) {
  wordDetailReviewBtn.addEventListener("click", generateWordContextReview);
}
mobileBottomNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.mobileNavPage;
    showPage(pageId);
    if (pageId === "review-page") {
      buildDailyReviewQueue();
    }
  });
});
if (testVoiceBtn) {
  testVoiceBtn.addEventListener("click", testSelectedVoice);
}
if (repairConversationLanguageBtn) {
  repairConversationLanguageBtn.addEventListener("click", repairConversationLanguageMix);
}
if (callSummaryReviewBtn) {
  callSummaryReviewBtn.addEventListener("click", reviewLastCallSummary);
}
if (callSummarySaveBtn) {
  callSummarySaveBtn.addEventListener("click", saveLastCallSummaryConversation);
}
if (callPauseModeSelect) {
  callPauseModeSelect.addEventListener("change", () => {
    saveCallPausePreference();
    chatStatus.textContent = `Call pause set to ${callPauseModeSelect.options[callPauseModeSelect.selectedIndex].text}.`;
  });
}
if (spanishVoiceSelect) {
  spanishVoiceSelect.addEventListener("change", () => {
    saveSpanishVoicePreference();
    showStatusMessage(`${getTargetLanguageProfile().label} voice set to ${spanishVoiceSelect.options[spanishVoiceSelect.selectedIndex].text}.`);
  });
}
translateCustomBtn.addEventListener("click", translateCustomSentence);
generateDialogueBtn.addEventListener("click", generateDialogue);
if (saveDialogueBtn) {
  saveDialogueBtn.addEventListener("click", saveCurrentDialogue);
}
downloadDialoguePdfBtn.addEventListener("click", downloadDialoguePdf);
playDialogueBtn.addEventListener("click", playDialogueMedia);
stopDialogueBtn.addEventListener("click", () => stopDialoguePlayback());
previousDialogueBtn.addEventListener("click", () => skipDialoguePlayback("previous"));
pauseDialogueBtn.addEventListener("click", toggleDialoguePlaybackPause);
nextDialogueBtn.addEventListener("click", () => skipDialoguePlayback("next"));
dialogueAudioPlayer.addEventListener("timeupdate", updateDialoguePlaybackControls);
dialogueAudioPlayer.addEventListener("loadedmetadata", updateDialoguePlaybackControls);
dialogueAudioPlayer.addEventListener("play", updateDialoguePlaybackControls);
dialogueAudioPlayer.addEventListener("pause", updateDialoguePlaybackControls);
dialogueAudioPlayer.addEventListener("ended", () => {
  stopDialoguePlayback("Dialogue finished.");
});
downloadDialogueMp3Btn.addEventListener("click", downloadDialogueMp3);
clearDialogueBtn.addEventListener("click", clearDialogue);
if (deleteOldDialoguesBtn) {
  deleteOldDialoguesBtn.addEventListener("click", deleteOldSavedDialogues);
}
if (loadYoutubeVideoBtn) {
  loadYoutubeVideoBtn.addEventListener("click", loadYouTubeVideo);
}
if (importYoutubeCaptionsBtn) {
  importYoutubeCaptionsBtn.addEventListener("click", importYouTubeCaptions);
}
if (usePastedTranscriptBtn) {
  usePastedTranscriptBtn.addEventListener("click", usePastedTranscript);
}
if (generateVideoDialogueBtn) {
  generateVideoDialogueBtn.addEventListener("click", generateVideoDialogue);
}
if (saveVideoDialogueBtn) {
  saveVideoDialogueBtn.addEventListener("click", () => {
    if (!currentDialogue || currentDialogue.source !== "video") {
      alert("Generate a video discussion first.");
      return;
    }
    saveCurrentDialogue();
    videoStatus.textContent = "Video discussion saved.";
  });
}
if (playVideoDialogueBtn) {
  playVideoDialogueBtn.addEventListener("click", () => {
    if (!currentDialogue || currentDialogue.source !== "video") {
      alert("Generate a video discussion first.");
      return;
    }
    playDialogueMedia();
  });
}
if (chatNameInput) {
  chatNameInput.addEventListener("input", () => {
    updateActiveChatTitleFromInput();
    saveCurrentChatState();
  });
  chatNameInput.addEventListener("change", () => {
    updateActiveChatTitleFromInput();
    if (chatHistory.length) {
      saveCurrentConversation({ silent: true });
      chatStatus.textContent = `Chat name saved as "${getActiveChatTitle()}".`;
    }
  });
}
startChatBtn.addEventListener("click", startChat);
startCallBtn.addEventListener("click", startCallMode);
endCallBtn.addEventListener("click", () => stopCallMode("Call mode ended.", { autoSave: true }));
interruptCallBtn.addEventListener("click", interruptCallReply);
focusEndCallBtn.addEventListener("click", () => stopCallMode("Call mode ended.", { autoSave: true }));
focusInterruptCallBtn.addEventListener("click", interruptCallReply);
saveConversationBtn.addEventListener("click", saveCurrentConversation);
downloadChatPdfBtn.addEventListener("click", downloadCorrectedConversationPdf);
downloadChatMp3sBtn.addEventListener("click", downloadCorrectedConversationMp3s);
reviewConversationBtn.addEventListener("click", showConversationReview);
if (deepReviewConversationBtn) {
  deepReviewConversationBtn.addEventListener("click", showDeepConversationReview);
}
hideConversationReviewBtn.addEventListener("click", hideConversationReview);
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
if (saveChatReplyBtn) {
  saveChatReplyBtn.addEventListener("click", () => {
    const chatSentence = getBestChatSentence();
    saveSentenceToFavourites(chatSentence, "Start a chat first.");

    if (chatSentence && lastCoachReply.correctionSpanish) {
      chatStatus.textContent = "The more native version was saved to favourites.";
    }
  });
}
addChatReplyToPlaylistBtn.addEventListener("click", () => {
  const chatSentence = getBestChatSentence();

  if (!chatSentence) {
    alert("Start a chat first.");
    return;
  }

  choosePlaylistForSentence(chatSentence, (playlist) => {
    chatStatus.textContent = lastCoachReply.correctionSpanish
      ? `The more native version was added to "${playlist.name}".`
      : `The last reply was added to "${playlist.name}".`;
  });
});
addCurrentToPlaylistBtn.addEventListener("click", () => {
  if (!currentSentence) {
    alert("Generate a sentence first.");
    return;
  }

  choosePlaylistForSentence(currentSentence);
});
addCustomToPlaylistBtn.addEventListener("click", () => {
  if (!latestCustomSentence) {
    alert("Translate a custom sentence first.");
    return;
  }

  choosePlaylistForSentence(latestCustomSentence, (playlist) => {
    customStatus.textContent = `Translated sentence added to "${playlist.name}".`;
  });
});
if (playCustomSentenceBtn) {
  playCustomSentenceBtn.addEventListener("click", () => {
    if (!latestCustomSentence) {
      alert("Translate a custom sentence first.");
      return;
    }

    playSpanishAudio(latestCustomSentence.spanish, "Translated sentence");
    customStatus.textContent = "Playing translated sentence.";
  });
}
if (saveCustomBtn) {
  saveCustomBtn.addEventListener("click", () => {
    saveSentenceToFavourites(latestCustomSentence, "Translate a custom sentence first.");
  });
}
playRadioBtn.addEventListener("click", startRadioMode);
stopRadioBtn.addEventListener("click", stopRadioMode);
if (previousRadioBtn) {
  previousRadioBtn.addEventListener("click", () => skipRadioSentence(-1));
}
if (pauseRadioBtn) {
  pauseRadioBtn.addEventListener("click", toggleRadioPause);
}
if (nextRadioBtn) {
  nextRadioBtn.addEventListener("click", () => skipRadioSentence(1));
}
if (downloadPlaylistMp3Btn) {
  downloadPlaylistMp3Btn.addEventListener("click", downloadSelectedPlaylistMp3);
}
bindMediaPlayerOptions(batchMp3Player, batchSpeedSelect, batchLoopBtn);
bindMediaPlayerOptions(playlistMp3Player, playlistSpeedSelect, playlistLoopBtn);
bindMediaPlayerOptions(dialogueAudioPlayer, dialogueSpeedSelect, dialogueLoopBtn);
bindMediaPlayerOptions(fullConversationAudioPlayer, conversationSpeedSelect, conversationLoopBtn);
if (radioSpeedSelect) {
  radioSpeedSelect.addEventListener("change", syncRadioAudioOptions);
}
if (radioLoopBtn) {
  radioLoopBtn.addEventListener("click", () => {
    const player = ensureSpanishAudioPlayer();
    player.loop = !player.loop;
    updateMediaLoopButton(radioLoopBtn, player.loop);
  });
  updateMediaLoopButton(radioLoopBtn, false);
}
deletePlaylistBtn.addEventListener("click", deleteSelectedPlaylist);
exportPracticeBtn.addEventListener("click", exportPracticeBackup);
if (openBatchFocusBtn) {
  openBatchFocusBtn.addEventListener("click", () => openBatchFocusMode(0));
}
if (batchFocusPrevBtn) {
  batchFocusPrevBtn.addEventListener("click", () => moveBatchFocus(-1));
}
if (batchFocusNextBtn) {
  batchFocusNextBtn.addEventListener("click", () => moveBatchFocus(1));
}
if (batchFocusPlayBtn) {
  batchFocusPlayBtn.addEventListener("click", playBatchFocusSentence);
}
if (batchFocusCloseBtn) {
  batchFocusCloseBtn.addEventListener("click", closeBatchFocusMode);
}
playlistSelect.addEventListener("change", renderSelectedPlaylist);
if (shadowGapSelect) {
  shadowGapSelect.addEventListener("change", saveShadowGapPreference);
}
if (buildDailyReviewBtn) {
  buildDailyReviewBtn.addEventListener("click", buildDailyReviewQueue);
}
if (buildSmartReviewBtn) {
  buildSmartReviewBtn.addEventListener("click", buildSmartReviewSession);
}
if (startDailyReviewBtn) {
  startDailyReviewBtn.addEventListener("click", () => {
    buildSmartReviewSession();
    showPage("review-page");
  });
}
if (nextDailyReviewBtn) {
  nextDailyReviewBtn.addEventListener("click", nextDailyReviewItem);
}
if (playDailyReviewBtn) {
  playDailyReviewBtn.addEventListener("click", playCurrentDailyReviewItem);
}

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

if (favouritesSearchInput) {
  favouritesSearchInput.addEventListener("input", renderFavourites);
}

if (favouritesOnlyCheckbox) {
  favouritesOnlyCheckbox.addEventListener("change", () => {
    showStatusMessage(favouritesOnlyCheckbox.checked ? "Now practising saved favourites only." : "Now practising from all sentences, including unlimited generated ones.");
    updateAiModeNote();
  });
}
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
chatInput.addEventListener("input", () => {
  localStorage.setItem(getChatStorageKey("spanishSentenceChatDraft"), chatInput.value || "");
});
if (chatScenarioSelect) {
  chatScenarioSelect.addEventListener("change", () => {
    updateDebateTopicVisibility();
    if (chatScenarioSelect.value === "debate") {
      debateTopicInput?.focus();
    }
  });
}
if (debateTopicInput) {
  debateTopicInput.addEventListener("input", () => {
    if (chatScenarioSelect?.value === "debate" && chatStatus) {
      const topic = debateTopicInput.value.trim();
      chatStatus.textContent = topic
        ? `Debate topic set to: ${topic}. Press Start chat or Start call.`
        : "Type a debate topic, then press Start chat or Start call.";
    }
  });
}

// These functions run as soon as the page loads.
loadVoices();
applyThemePreference();
applyTargetLanguagePreference();
applySpanishVoicePreference();
applyAppDisplayMode();
applyFirstRunSetupVisibility();
applyCallPausePreference();
updateDebateTopicVisibility();
if (chatInput) {
  chatInput.value = getStoredChatValue("spanishSentenceChatDraft") || "";
}
updateChatNameInput();
if (shadowGapSelect) {
  shadowGapSelect.value = localStorage.getItem("spanishSentenceShadowGap") || "0";
}
renderPracticeStats();
renderTodayDashboard();
renderBatchSentences();
renderSavedBatches();
renderGeneratorTopics();
renderDialogue();
renderSavedDialogues();
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

    navigator.serviceWorker.register("service-worker.js?v=59").catch(() => {
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
    if (tab.closest(".nav-more")) {
      navMore?.removeAttribute("open");
    }
  });
});
actionMenus.forEach((menu) => {
  menu.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => menu.removeAttribute("open"));
  });
});
renderFavourites();
renderRecallSentences();
renderSavedWords();
renderDailyReview();
renderPlaylists();
renderChatMessages();
renderSavedConversations();
renderConversationPlaylist();
renderLibraryHub();
renderAudioQueue();
renderHomeContinueCard();
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
