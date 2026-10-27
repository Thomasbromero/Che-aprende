/* Verbos del alemán (A1) para los ejercicios de conjugación (formatos "conjugar").
   Las personas van siempre en este orden: [ ich, du, er/sie/es, wir, ihr, sie/Sie ]
   - es:   traducción
   - pres: Präsens. Si falta, se usa la regla regular (ver js/conjugador.de.js)
   - perf: Perfekt = { aux: "haben" | "sein", part: "gemacht" }. Sin perf, el verbo no se conjuga en Perfekt
   - pret: Präteritum (solo sein, haben y los modales). Sin pret, el verbo no se conjuga en Präteritum
   Se valida con: node dev/aleman/validar-datos.js */
window.VERBOS_DE = [
  // ---- Regulares ----
  { id: "v-heissen", inf: "heißen", es: "llamarse", perf: { aux: "haben", part: "geheißen" } },
  { id: "v-kommen", inf: "kommen", es: "venir", perf: { aux: "sein", part: "gekommen" } },
  { id: "v-wohnen", inf: "wohnen", es: "vivir (en un lugar)", perf: { aux: "haben", part: "gewohnt" } },
  { id: "v-machen", inf: "machen", es: "hacer", perf: { aux: "haben", part: "gemacht" } },
  { id: "v-gehen", inf: "gehen", es: "ir (caminando)", perf: { aux: "sein", part: "gegangen" } },
  { id: "v-trinken", inf: "trinken", es: "beber", perf: { aux: "haben", part: "getrunken" } },
  { id: "v-lernen", inf: "lernen", es: "aprender", perf: { aux: "haben", part: "gelernt" } },
  { id: "v-sagen", inf: "sagen", es: "decir", perf: { aux: "haben", part: "gesagt" } },
  { id: "v-arbeiten", inf: "arbeiten", es: "trabajar", perf: { aux: "haben", part: "gearbeitet" } },
  { id: "v-spielen", inf: "spielen", es: "jugar / tocar (un instrumento)", perf: { aux: "haben", part: "gespielt" } },
  { id: "v-kaufen", inf: "kaufen", es: "comprar", perf: { aux: "haben", part: "gekauft" } },

  // ---- Irregulares ----
  { id: "v-sein", inf: "sein", es: "ser / estar",
    pres: ["bin", "bist", "ist", "sind", "seid", "sind"],
    perf: { aux: "sein", part: "gewesen" },
    pret: ["war", "warst", "war", "waren", "wart", "waren"] },
  { id: "v-haben", inf: "haben", es: "tener",
    pres: ["habe", "hast", "hat", "haben", "habt", "haben"],
    perf: { aux: "haben", part: "gehabt" },
    pret: ["hatte", "hattest", "hatte", "hatten", "hattet", "hatten"] },
  { id: "v-essen", inf: "essen", es: "comer",
    pres: ["esse", "isst", "isst", "essen", "esst", "essen"],
    perf: { aux: "haben", part: "gegessen" } },
  { id: "v-sprechen", inf: "sprechen", es: "hablar",
    pres: ["spreche", "sprichst", "spricht", "sprechen", "sprecht", "sprechen"],
    perf: { aux: "haben", part: "gesprochen" } },
  { id: "v-sehen", inf: "sehen", es: "ver",
    pres: ["sehe", "siehst", "sieht", "sehen", "seht", "sehen"],
    perf: { aux: "haben", part: "gesehen" } },
  { id: "v-fahren", inf: "fahren", es: "ir (en vehículo) / manejar",
    pres: ["fahre", "fährst", "fährt", "fahren", "fahrt", "fahren"],
    perf: { aux: "sein", part: "gefahren" } },
  { id: "v-lesen", inf: "lesen", es: "leer",
    pres: ["lese", "liest", "liest", "lesen", "lest", "lesen"],
    perf: { aux: "haben", part: "gelesen" } },
  { id: "v-schlafen", inf: "schlafen", es: "dormir",
    pres: ["schlafe", "schläfst", "schläft", "schlafen", "schlaft", "schlafen"],
    perf: { aux: "haben", part: "geschlafen" } },
  { id: "v-nehmen", inf: "nehmen", es: "tomar / llevar",
    pres: ["nehme", "nimmst", "nimmt", "nehmen", "nehmt", "nehmen"],
    perf: { aux: "haben", part: "genommen" } },
  { id: "v-aufstehen", inf: "aufstehen", es: "levantarse",
    pres: ["stehe auf", "stehst auf", "steht auf", "stehen auf", "steht auf", "stehen auf"],
    perf: { aux: "sein", part: "aufgestanden" } },

  // ---- Modales ----
  { id: "v-koennen", inf: "können", es: "poder",
    pres: ["kann", "kannst", "kann", "können", "könnt", "können"],
    perf: { aux: "haben", part: "gekonnt" },
    pret: ["konnte", "konntest", "konnte", "konnten", "konntet", "konnten"] },
  { id: "v-muessen", inf: "müssen", es: "tener que",
    pres: ["muss", "musst", "muss", "müssen", "müsst", "müssen"],
    perf: { aux: "haben", part: "gemusst" },
    pret: ["musste", "musstest", "musste", "mussten", "musstet", "mussten"] },
  { id: "v-wollen", inf: "wollen", es: "querer",
    pres: ["will", "willst", "will", "wollen", "wollt", "wollen"],
    perf: { aux: "haben", part: "gewollt" },
    pret: ["wollte", "wolltest", "wollte", "wollten", "wolltet", "wollten"] },
  { id: "v-moechten", inf: "möchten", es: "querer (más cortés), quisiera",
    pres: ["möchte", "möchtest", "möchte", "möchten", "möchtet", "möchten"] },
];
