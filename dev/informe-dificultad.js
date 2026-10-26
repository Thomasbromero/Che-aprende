/* Arma dev/dificultad-informe.md. Lo llama dev/puntuar.js --informe; no se usa solo. */
const fs = require("fs"), path = require("path");

module.exports = function (d) {
  const { VOCAB, VERBOS, Conjugador, Formats, Dificultad, nivelPalabra, motivoPalabra, gramatica, NIVEL_PRODUCCION, MOTIVO_PRODUCCION, todos, BASE, histograma, prom, raiz } = d;
  const L = [];
  const hoy = new Date().toISOString().slice(0, 10);
  function semilla(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  const nombreFormato = {};
  Formats.lista().forEach((f) => (nombreFormato[f.id] = f.nombre));

  L.push("# Dificultad de los ejercicios", "");
  L.push("Informe generado el " + hoy + " con `node dev/puntuar.js --informe`. Cada ejercicio tiene un puntaje de **1 a 100**; el modo Aventura los ordena de menor a mayor para armar el camino.", "");

  L.push("## Cómo se calcula", "");
  L.push("**puntaje = 60 % lo que se enseña + 40 % lo que hay que hacer con eso.**", "");
  L.push("Así una misma palabra es fácil cuando solo hay que *reconocerla* entre opciones y difícil cuando hay que *escribirla de memoria*: aparece en dos puntos distintos del camino.", "");

  L.push("### Lo que se enseña: palabras (puntaje del 0 al 100)", "");
  L.push("Se pensó para alguien que ya sabe español estándar y quiere hablar rioplatense, así que cuesta más lo que *no* está en los libros.", "");
  L.push("| Tipo de palabra | Puntos base | Ejemplos |", "|---|---|---|");
  L.push("| Saludo o fórmula | " + BASE.G + " | Encantada, Hola soy… |");
  L.push("| Básica y transparente | " + BASE.B + " | silla, mesa, cabeza, leche |");
  L.push("| Estándar | " + BASE.S + " | escoba, tobillo, impresora |");
  L.push("| Variante argentina de algo conocido | " + BASE.R + " | heladera, pileta, remera, vereda |");
  L.push("| Jerga / lunfardo | " + BASE.J + " | quilombo, guita, chamuyar |", "");
  L.push("A eso se suma: **+6 y +2 por cada palabra extra** si es una frase (dar bola, estar al pedo), **+1,5 por letra** pasadas las 8 en la palabra más larga (máx. 9), **+1,5 por tilde o ñ** (máx. 4,5), **+6 si es un verbo** (aparece conjugado en las frases) y **+7 si tiene trampa** (se confunde con otra o significa dos cosas: *piso*, *medias*, *cartera*). Hay además algunos ajustes a mano para casos que la regla no capta (por ejemplo *finde* o *che* son jerga pero muy fáciles: −25).", "");

  L.push("### Lo que se enseña: formas verbales (calculado por regla)", "");
  L.push("| Tiempo | Base |", "|---|---|");
  [["presente", 12], ["futuro", 28], ["imperfecto", 30], ["condicional", 34], ["pretérito indefinido", 44], ["subjuntivo presente", 66]].forEach(([t, n]) => L.push("| " + t + " | " + n + " |"));
  L.push("", "Persona: yo / él +0, nosotros / ustedes +3, vos +4. Si la forma se aparta de la regla: **+16**, y **+10 más** si casi no se parece al infinitivo (*fueron*, *tuve*, *dijeron*). Los verbos más usados (ser, estar, ir, tener, hacer) restan 6, porque se conocen aunque sean irregulares.", "");

  L.push("### Lo que se enseña: Gramática y Producción (escritas a mano)", "");
  L.push("Cada tema tiene un nivel base, del más simple al más complejo, con un pequeño ajuste por el largo de la consigna. En «Conjugación de verbos» pesa además el tiempo pedido (presente −15, subjuntivo +15). Las consignas de Producción se puntúan una por una.", "");
  const temas = {};
  gramatica.forEach((g) => { (temas[g.topic.id] = temas[g.topic.id] || { titulo: g.topic.title, n: [] }).n.push(g.nivel); });
  L.push("| Tema | Ejercicios | Nivel (mín – prom – máx) |", "|---|---|---|");
  Object.entries(temas).sort((a, b) => prom(a[1].n) - prom(b[1].n)).forEach(([id, t]) => L.push("| " + t.titulo + " | " + t.n.length + " | " + Math.min(...t.n) + " – " + prom(t.n) + " – " + Math.max(...t.n) + " |"));
  L.push("", "| Consigna de Producción | Nivel | Por qué |", "|---|---|---|");
  Object.keys(NIVEL_PRODUCCION).forEach((id) => L.push("| " + id + " | " + NIVEL_PRODUCCION[id] + " | " + MOTIVO_PRODUCCION[id] + " |"));

  L.push("", "### Lo que hay que hacer: esfuerzo del formato (0 a 100)", "");
  L.push("| Formato | Esfuerzo | Por qué |", "|---|---|---|");
  [
    ["Significado", "10", "reconocer la traducción entre 4 opciones"],
    ["Emparejar", "20", "reconocer, pero con 4 pares a la vez"],
    ["Palabra (traducción → palabra)", "25", "reconocer la palabra en español entre 4"],
    ["Completar con opciones", "35", "entender la frase y elegir (con la traducción de pista)"],
    ["Conjugar con opciones", "40", "elegir la forma entre otras formas del mismo verbo"],
    ["Ordenar la frase", "42 a 66", "armar una frase; cuesta más cuanto más palabras tenga"],
    ["Completar escribiendo", "65 (75 si hay que flexionar)", "escribir la palabra de memoria"],
    ["Conjugar escribiendo", "78 (86 si la tilde cuenta)", "escribir la forma exacta de memoria"],
    ["Gramática de opciones", "22 a 32", "elegir entre 2 a 4 opciones"],
    ["Gramática / Producción escribiendo", "62", "escribir la respuesta"],
  ].forEach((r) => L.push("| " + r.join(" | ") + " |"));

  L.push("", "## Cómo quedó el reparto", "");
  L.push("Hay **" + todos.length + " ejercicios posibles** (" + todos.filter((x) => x.clase === "vocab").length + " de vocabulario, " + todos.filter((x) => x.clase === "verbo").length + " de conjugación, " + todos.filter((x) => x.clase === "gramatica").length + " de gramática y " + todos.filter((x) => x.clase === "produccion").length + " de producción). Puntaje mínimo " + Math.min(...todos.map((x) => x.puntaje)) + ", máximo " + Math.max(...todos.map((x) => x.puntaje)) + ", promedio " + prom(todos.map((x) => x.puntaje)) + ".", "");
  L.push("```", histograma(todos), "```", "");
  const porFormato = {};
  todos.forEach((x) => { const k = x.clase + " · " + x.formato; (porFormato[k] = porFormato[k] || []).push(x.puntaje); });
  L.push("| Formato | Cantidad | Promedio | Mín – máx |", "|---|---|---|---|");
  Object.entries(porFormato).sort((a, b) => prom(a[1]) - prom(b[1])).forEach(([k, a]) => L.push("| " + k + " | " + a.length + " | " + prom(a) + " | " + Math.min(...a) + " – " + Math.max(...a) + " |"));

  L.push("", "## La misma palabra en distintos formatos", "");
  const muestra = ["silla", "cuadra", "heladera", "quilombo", "laburar", "alpedo"];
  const fmts = Formats.lista().filter((f) => f.fuente === "vocab");
  L.push("| Palabra | nivel | " + fmts.map((f) => f.nombre).join(" | ") + " |", "|---|---|" + fmts.map(() => "---").join("|") + "|");
  muestra.forEach((id) => {
    const c = VOCAB.find((v) => v.id === id);
    const celdas = fmts.map((f) => { const ex = Formats.generar(f.id, c, { rng: semilla(7) }); return ex ? Dificultad.puntaje(ex) : "—"; });
    L.push("| " + c.term + " | " + nivelPalabra[id] + " | " + celdas.join(" | ") + " |");
  });

  L.push("", "## Verbos: ejemplos (puntaje al escribir la forma)", "");
  const ejemplos = [["v-hablar", "presente", "yo"], ["v-hablar", "presente", "vos"], ["v-comer", "preterito", "el"], ["v-ser", "presente", "yo"], ["v-ir", "preterito", "ustedes"], ["v-tener", "futuro", "vos"], ["v-hacer", "preterito", "yo"], ["v-hablar", "subjuntivo", "vos"], ["v-tener", "subjuntivo", "vos"], ["v-pedir", "preterito", "el"]];
  L.push("| Verbo | Tiempo y persona | Forma | Nivel de la forma | Puntaje al elegir | Puntaje al escribir |", "|---|---|---|---|---|---|");
  ejemplos.forEach(([vid, t, p]) => {
    const v = VERBOS.find((x) => x.id === vid);
    const o = Formats.generar("conjugar_opciones", v, { rng: semilla(7), tiempo: t, persona: p });
    const e = Formats.generar("conjugar_escribir", v, { rng: semilla(7), tiempo: t, persona: p });
    L.push("| " + v.inf + " | " + Conjugador.tiempoDe(t).etiqueta + ", " + p + " | " + Conjugador.formas(v, t, p)[0] + " | " + Conjugador.nivel(v, t, p) + " | " + Dificultad.puntaje(o) + " | " + Dificultad.puntaje(e) + " |");
  });

  L.push("", "## Las " + VOCAB.length + " palabras, de la más fácil a la más difícil", "");
  L.push("Si algún número no te convence, se puede cambiar a mano en `data/vocab.data.js` (campo `nivel`) o en `dev/puntuar.js` y volver a correr la herramienta.", "");
  L.push("| Nivel | Palabra | Tema | Por qué |", "|---|---|---|---|");
  VOCAB.slice().sort((a, b) => nivelPalabra[a.id] - nivelPalabra[b.id] || a.term.localeCompare(b.term)).forEach((c) => L.push("| " + nivelPalabra[c.id] + " | " + c.term.replace(/\|/g, "/") + " | " + c.tema + " | " + motivoPalabra[c.id] + " |"));

  fs.writeFileSync(path.join(raiz, "dev/dificultad-informe.md"), L.join("\n") + "\n");
  console.log("informe escrito: dev/dificultad-informe.md");
};
