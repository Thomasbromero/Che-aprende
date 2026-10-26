/* Valida el camino del modo Aventura (data/camino.data.js). Herramienta de desarrollo:
     node dev/validar-camino.js
   Comprueba que cada receta se convierta en un ejercicio válido, que no haya ejercicios repetidos,
   que el camino suba de a poco y que cubra todo el contenido. Termina con error si algo falla.
   Si falla "el nivel guardado no coincide", hay que volver a armar el camino:
     node dev/armar-camino.js --escribir */
const vm = require("vm"), fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
// Un Store de mentira (en el navegador es el de js/storage.js) para probar el desbloqueo
const progreso = {};
vm.runInContext("var Store = { aventuraNodo: function (id) { return __progreso[id]; } };", Object.assign(ctx, { __progreso: progreso }));
["data/vocab.data.js", "data/verbos.data.js", "data/grammar.data.js", "data/produccion.data.js", "data/camino.data.js", "js/util.js", "js/conjugador.js", "js/formats.js", "js/dificultad.js", "js/aventura.js"]
  .forEach((f) => vm.runInContext(fs.readFileSync(path.join(raiz, f), "utf8"), ctx, { filename: f }));
const { Formats, Conjugador, Dificultad, Aventura, VOCAB, VERBOS, GRAMMAR, PRODUCCION, CAMINO } = vm.runInContext("({ Formats, Conjugador, Dificultad, Aventura, VOCAB, VERBOS, GRAMMAR, PRODUCCION, CAMINO })", ctx);

function semilla(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const errores = [];
const fallo = (id, msg) => errores.push(id + ": " + msg);

// Convierte una receta en un ejercicio con el mismo código que usa la app
const expandir = (sp, rng) => Aventura.expandir(sp, rng);

const N = CAMINO.niveles;
const ids = N.map((n) => n.id);
if (new Set(ids).size !== ids.length) fallo("camino", "ids de nivel repetidos");
ids.forEach((id, i) => { if (id !== "n" + String(i + 1).padStart(2, "0")) fallo(id, "el id no sigue el orden (n01, n02, ...)"); });

const vistas = new Set();
const palabras = new Set(), grammarVistas = new Set(), prodVistas = new Set();
const niveles = [];
N.forEach((n) => {
  if (n.ejercicios.length < 5 || n.ejercicios.length > 10) fallo(n.id, "tiene " + n.ejercicios.length + " ejercicios (se esperan de 5 a 10)");
  if (!n.titulo || !n.tipo || !n.foco) fallo(n.id, "falta título, tipo o foco");
  const puntajes = [];
  const fuentesEnNivel = {};
  n.ejercicios.forEach((sp, k) => {
    const rng = semilla(k * 31 + 7);
    const ex = expandir(sp, rng);
    const id = n.id + "#" + k;
    if (!ex) { fallo(id, "la receta no genera un ejercicio: " + JSON.stringify(sp)); return; }
    if (/undefined|null|\[object/.test(JSON.stringify(ex))) fallo(id, "el ejercicio tiene undefined/null");
    if (ex.type === "choice" && (!ex.options.includes(ex.answer))) fallo(id, "la respuesta no está entre las opciones");
    puntajes.push(Dificultad.puntaje(ex));
    const clave = JSON.stringify([sp.f, sp.s, sp.t || "", sp.p || "", sp.i === undefined ? "" : sp.i]);
    if (vistas.has(clave)) fallo(id, "ejercicio repetido en el camino: " + clave);
    vistas.add(clave);
    // En un nivel una palabra o verbo aparece como mucho dos veces (y solo en temas chicos, con otro formato)
    if (sp.f !== "gramatica" && sp.f !== "produccion") {
      fuentesEnNivel[sp.s] = (fuentesEnNivel[sp.s] || 0) + 1;
      if (fuentesEnNivel[sp.s] > 2) fallo(id, "«" + sp.s + "» aparece más de dos veces en el nivel");
    }
    if (sp.f === "gramatica") grammarVistas.add(sp.s + "#" + sp.i);
    else if (sp.f === "produccion") prodVistas.add(sp.s);
    else if (VOCAB.some((c) => c.id === sp.s)) palabras.add(sp.s);
  });
  const prom = Math.round(puntajes.reduce((s, x) => s + x, 0) / puntajes.length);
  if (prom !== n.nivel) fallo(n.id, "el nivel guardado (" + n.nivel + ") no coincide con el recalculado (" + prom + "): volver a armar el camino");
  niveles.push(n.nivel);
  // La dificultad dentro del nivel sube de a poco: un ejercicio muy por encima del promedio rompe el ritmo
  if (Math.max(...puntajes) - Math.min(...puntajes) > 40) fallo(n.id, "demasiada diferencia entre ejercicios del nivel: " + Math.min(...puntajes) + " a " + Math.max(...puntajes));
});

// El camino sube de a poco
let maxSalto = 0, retroceso = 0, maxPrevio = 0;
niveles.forEach((v, i) => {
  if (i) maxSalto = Math.max(maxSalto, Math.abs(v - niveles[i - 1]));
  retroceso = Math.max(retroceso, maxPrevio - v);
  maxPrevio = Math.max(maxPrevio, v);
});
if (maxSalto > 8) fallo("camino", "salto de " + maxSalto + " puntos entre dos niveles seguidos (máximo 8)");
if (retroceso > 8) fallo("camino", "un nivel es " + retroceso + " puntos más fácil que uno anterior (máximo 8)");
if (niveles[0] > 25) fallo("camino", "el primer nivel es demasiado difícil: " + niveles[0]);
if (niveles[niveles.length - 1] < 65) fallo("camino", "el último nivel es demasiado fácil: " + niveles[niveles.length - 1]);

// Cobertura
VOCAB.forEach((c) => { if (!palabras.has(c.id)) fallo(c.id, "la palabra no aparece en el camino"); });
GRAMMAR.forEach((t) => t.exercises.forEach((e, i) => { if (!grammarVistas.has(t.id + "#" + i)) fallo(t.id + "#" + i, "el ejercicio de Gramática no aparece en el camino"); }));
PRODUCCION.forEach((p) => { if (!prodVistas.has(p.id)) fallo(p.id, "la consigna de Producción no aparece en el camino"); });
const verbosEnCamino = new Set();
N.forEach((n) => n.ejercicios.forEach((sp) => { if (VERBOS.some((v) => v.id === sp.s)) verbosEnCamino.add(sp.s); }));
if (verbosEnCamino.size < VERBOS.length) fallo("camino", "solo " + verbosEnCamino.size + " de " + VERBOS.length + " verbos aparecen");


// --- Reglas del modo (js/aventura.js) ---
const casos = [[7, 10, true, 1], [6, 10, false, 0], [5, 8, false, 0], [6, 8, true, 1], [0, 0, false, 0], [8, 8, true, 3], [7, 8, true, 2], [19, 20, true, 3], [6, 6, true, 3], [5, 6, true, 2], [4, 6, false, 0], [4, 5, true, 2], [3, 5, false, 0]];
casos.forEach(([a, t, pasa, est]) => {
  if (Aventura.aprobado(a, t) !== pasa) fallo("reglas", "aprobado(" + a + "," + t + ") deberia ser " + pasa);
  if (Aventura.estrellasPara(a, t) !== est) fallo("reglas", "estrellasPara(" + a + "," + t + ") deberia ser " + est + " y da " + Aventura.estrellasPara(a, t));
});
// La misma semilla arma la misma lección (para retomar a mitad); otra semilla, otras opciones
let distintas = 0;
N.slice(0, 25).forEach((n) => {
  const a = JSON.stringify(Aventura.armar(n, 12345)), b = JSON.stringify(Aventura.armar(n, 12345)), c = JSON.stringify(Aventura.armar(n, 999));
  if (a !== b) fallo(n.id, "con la misma semilla la leccion cambia");
  if (a !== c) distintas++;
});
if (distintas < 10) fallo("reglas", "con otra semilla casi nunca cambian las opciones (" + distintas + " de 25)");
// Desbloqueo en orden
if (!Aventura.desbloqueado(0)) fallo("reglas", "el primer nivel tiene que estar abierto");
if (Aventura.desbloqueado(1)) fallo("reglas", "el segundo nivel no puede estar abierto sin superar el primero");
progreso[N[0].id] = { hecho: true, estrellas: 2 };
if (!Aventura.desbloqueado(1)) fallo("reglas", "al superar el primero se abre el segundo");
if (Aventura.desbloqueado(2)) fallo("reglas", "el tercero sigue cerrado");
progreso[N[0].id] = { hecho: false, estrellas: 0, intentos: 3 };
if (Aventura.desbloqueado(1)) fallo("reglas", "intentar sin pasar no abre el siguiente");

const total = N.reduce((s, n) => s + n.ejercicios.length, 0);
console.log("Camino: " + N.length + " niveles, " + total + " ejercicios | dificultad " + niveles[0] + " a " + niveles[niveles.length - 1] + " | salto máximo " + maxSalto + " | mayor retroceso " + retroceso);
console.log("Cobertura: " + palabras.size + "/" + VOCAB.length + " palabras, " + grammarVistas.size + " ejercicios de Gramática, " + prodVistas.size + " consignas de Producción, " + verbosEnCamino.size + "/" + VERBOS.length + " verbos");
if (errores.length) {
  console.log("\nERRORES (" + errores.length + "):");
  errores.slice(0, 40).forEach((e) => console.log("  - " + e));
  process.exit(1);
}
console.log("\nOK: sin errores.");
