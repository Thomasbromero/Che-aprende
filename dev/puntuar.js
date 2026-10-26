/* Puntúa la dificultad del contenido y arma el informe (herramienta de desarrollo).
     node dev/puntuar.js                 simulación: muestra el resumen, no escribe nada
     node dev/puntuar.js --informe       además escribe dev/dificultad-informe.md
     node dev/puntuar.js --escribir      agrega `nivel` a las palabras / ejercicios que no lo tienen
     node dev/puntuar.js --escribir --todo   recalcula y pisa TODOS los `nivel` (cuidado: pisa ajustes a mano)
   La rúbrica (y el motivo de cada número) es la de este archivo; ver también js/dificultad.js.
   Para una palabra nueva basta con agregarla a CLASES y correr --escribir. */
const vm = require("vm"), fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
["data/vocab.data.js", "data/verbos.data.js", "data/grammar.data.js", "data/produccion.data.js", "js/util.js", "js/conjugador.js", "js/formats.js", "js/dificultad.js"]
  .forEach((f) => vm.runInContext(fs.readFileSync(path.join(raiz, f), "utf8"), ctx, { filename: f }));
const { Formats, Conjugador, Dificultad, VOCAB, VERBOS, GRAMMAR, PRODUCCION } = vm.runInContext("({ Formats, Conjugador, Dificultad, VOCAB, VERBOS, GRAMMAR, PRODUCCION })", ctx);
const args = process.argv.slice(2);
const TODO = args.includes("--todo");

// ======================= PALABRAS =======================
// Tipo de palabra según qué tan difícil es para quien ya sabe español estándar y quiere hablar rioplatense:
//   B básica y transparente (10) · S estándar (22) · R variante argentina de algo conocido (40)
//   J jerga / lunfardo, sin equivalente "de libro" y con matices de registro (60) · G saludo o fórmula (6)
// Cada palabra: id:TIPO y, si hace falta, un ajuste a mano (+5, -8...).
const BASE = { B: 10, S: 22, R: 40, J: 60, G: 6 };
const NOMBRE_TIPO = { B: "básica", S: "estándar", R: "variante argentina", J: "jerga", G: "saludo/fórmula" };
const CLASES = {
  cuerpo: "cabeza:B cara:B pelo:B frente:S+3 ojo:B nariz:B boca:B oreja:B diente:B lengua:S garganta:S+3 cuello:S hombro:S+3 brazo:B codo:S+3 mano:B dedo:B unia:S pecho:S+3 espalda:S+3 panza:R cintura:S+3 pierna:B rodilla:S+3 tobillo:S+3 pie:B corazon:B",
  ropa: "remera:R campera:R pantalon:B camisa:B zapatillas:R medias:R pollera:R vestido:B buzo:R pulover:S jean:S-8 short:S-8 calza:R pijama:S-8 saco:R traje:S malla:R ropainterior:S zapatos:B botas:S ojotas:R sandalias:S-8",
  accesorios: "bufanda:S gorro:S cartera:R mochila:S paraguas:S anteojos:R reloj:B cinturon:S corbata:S guantes:S gorra:S sombrero:S lentesdesol:R panuelo:S collar:S pulsera:S anillo:S aros:R billetera:S bolso:S rinonera:R",
  comida: "birra:R+5 frutilla:R palta:R mate:R facturas:R+10 asado:R pan:B leche:B queso:B huevo:B manzana:B pollo:B arroz:B fideos:S sal:B azucar:S desayuno:B",
  cocina: "heladera:R horno:S microondas:S-8 sarten:S olla:S cuchillo:B tenedor:B cuchara:B plato:B vaso:B taza:S canilla:R servilleta:S bombilla:R+5 termo:S",
  limpieza: "lavarropas:R escoba:S trapo:S tacho:R jabon:S toalla:S ducha:S cepillodientes:S papelhigienico:S",
  muebles: "silla:B mesa:B escritorio:S lampara:S-8 sofa:S-8 cama:B armario:S espejo:S estante:S cajon:S alfombra:S",
  casa: "ventana:B puerta:B techo:S piso:B pared:B cocina:B bano:B pasillo:S living:R departamento:R",
  tecnologia: "monitor:S-8 computadora:R teclado:S mouse:S-8 controlremoto:S enchufe:S impresora:S cargador:S pantalla:S celular:R auriculares:S",
  hotel: "pileta:R recepcion:S-4 habitacion:S huesped:S reserva:S-4 equipaje:S valija:R ascensor:S llave:B botones:S piscina:S estacionamiento:S pasaporte:S-8 checkin:S-8 checkout:S-8 propina:S conserje:S vista:S minibar:S-8",
  lugares: "kiosco:S changuito:R+5 calle:B esquina:B vereda:R semaforo:S-4 panaderia:S farmacia:S plaza:B",
  transporte: "bondi:J-5 colectivo:R subte:R remis:R+5",
  indicaciones: "cuadra:R derecho:S-12 doblar:S perdido:B cerca:B lejos:B disculpe:B donde-queda:S ayuda:B",
  saludos: "encantada:G soy-nombre:G-6 como-te-llamas:G-6 te-presento:G-6",
  personas: "boludo:J+6 viejos:R+5 pibe:J-3 mina:J tipo:S chabon:J+2 gil:J atorrante:J+4",
  elogios: "tremendo:S copado:J-2 zarpado:J+6 groso:J+2 capo:J-4 facha:J-6",
  jerga_cosas: "laburo:J-10 changa:J+2 curro:J+8 guita:J-2 mango:J+6 quilombo:J bardo:J+6 embole:J+2 pucho:J bocha:J+2",
  jerga_verbos: "laburar:J-8 morfar:J-4 chamuyar:J+8 bardear:J+8 rajar:J+2 bancar:J+2 darbola:J+4 alpedo:J+4",
  jerga_expresiones: "tranqui:J-25 re:J-15 posta:J-5 che:J-25",
  tiempo_libre: "previa:J-5 finde:J-25 feriado:S boliche:J-10 sobremesa:R+8",
};
// Palabras con trampa (se confunden con otra o significan dos cosas): suman un poco
const TRAMPAS = "lengua piso cocina plato manzana medias cartera buzo panuelo derecho saco pie pierna".split(" ");

const tabla = {};
Object.values(CLASES).forEach((txt) => txt.split(/\s+/).forEach((tok) => {
  const m = tok.match(/^([\w-]+):([BSRJG])([+-]\d+)?$/);
  if (!m) throw new Error("token mal escrito: " + tok);
  if (tabla[m[1]]) throw new Error("palabra repetida en CLASES: " + m[1]);
  tabla[m[1]] = { tipo: m[2], delta: m[3] ? +m[3] : 0 };
}));

function puntuarPalabra(c) {
  const t = tabla[c.id];
  if (!t) throw new Error("falta puntuar «" + c.id + "»: agregarla a CLASES en dev/puntuar.js");
  const partes = [NOMBRE_TIPO[t.tipo] + " " + BASE[t.tipo]];
  let n = BASE[t.tipo];
  if (t.delta) { n += t.delta; partes.push((t.delta > 0 ? "+" : "") + t.delta + " ajuste"); }
  const nuc = Formats.nucleo(c);
  const palabras = nuc.split(/\s+/).length;
  // El largo se mide en la palabra más larga (las varias palabras ya suman por su lado)
  const letras = Math.max(...nuc.split(/\s+/).map((w) => w.replace(/[^\p{L}]/gu, "").length));
  const tildes = (nuc.toLowerCase().match(/[áéíóúñü]/g) || []).length;
  let x;
  if (palabras > 1) { x = 6 + 2 * (palabras - 2); n += x; partes.push("+" + x + " " + palabras + " palabras"); }
  if (letras > 8) { x = Math.min(9, 1.5 * (letras - 8)); n += x; partes.push("+" + x + " palabra larga"); }
  if (tildes) { x = Math.min(4.5, 1.5 * tildes); n += x; partes.push("+" + x + " tilde/ñ"); }
  if (Formats.tipoDe(c) === "verbo") { n += 6; partes.push("+6 verbo"); }
  if (TRAMPAS.indexOf(c.id) >= 0) { n += 7; partes.push("+7 trampa"); }
  return { nivel: Math.max(2, Math.min(95, Math.round(n))), motivo: partes.join(", ") };
}

// ======================= GRAMÁTICA Y PRODUCCIÓN (escritos a mano) =======================
// Nivel base de cada tema (de lo más simple a lo más complejo) y un pequeño ajuste por
// largo de la consigna. En "conjugacion-verbos" pesa el tiempo pedido.
const TEMAS_GRAMATICA = {
  presentarse: 5, indicaciones: 12, "ser-estar": 25, "comparativos-superlativos": 30, "por-para": 40,
  "futuro-simple": 40, "condicional-simple": 42, "imperativo-vos": 50, "conjugacion-verbos": 52,
  "compuesto-vs-simple": 55, "preterito-imperfecto": 62, "subjuntivo-presente": 72, "pronombres-combinados": 80,
};
const TIEMPO_CONJUGACION = { presente: -15, imperfecto: -5, futuro: -8, condicional: -5, pret: 0, subjuntivo: 15 };
function puntuarGramatica(topic, ex) {
  const base = TEMAS_GRAMATICA[topic.id];
  if (base === undefined) throw new Error("falta el tema «" + topic.id + "» en TEMAS_GRAMATICA");
  const partes = ["tema " + base];
  let n = base;
  const largo = ex.prompt.split(/\s+/).length;
  const d = Math.max(-3, Math.min(4, Math.round((largo - 9) / 2)));
  if (d) { n += d; partes.push((d > 0 ? "+" : "") + d + " largo de la consigna"); }
  if (topic.id === "conjugacion-verbos") {
    const m = ex.prompt.match(/presente|pretérito|imperfecto|futuro|condicional|subjuntivo/);
    const k = m ? (m[0] === "pretérito" ? "pret" : m[0]) : null;
    if (k && TIEMPO_CONJUGACION[k]) { n += TIEMPO_CONJUGACION[k]; partes.push((TIEMPO_CONJUGACION[k] > 0 ? "+" : "") + TIEMPO_CONJUGACION[k] + " " + m[0]); }
  }
  return { nivel: Math.max(2, Math.min(95, Math.round(n))), motivo: partes.join(", ") };
}
const NIVEL_PRODUCCION = { p1: 70, p2: 68, p3: 35, p4: 40, p5: 72, p6: 45, p7: 4, p8: 4, p9: 6, p10: 12, p11: 15, p12: 10 };
const MOTIVO_PRODUCCION = {
  p1: "subjuntivo tras «espero que»", p2: "subjuntivo tras «ojalá»", p3: "pretérito regular", p4: "imperfecto de hábito",
  p5: "subjuntivo tras «no creo que»", p6: "condicional con «si tuviera»", p7: "fórmula «Encantada»", p8: "fórmula «Encantada»",
  p9: "fórmula «Encantada»", p10: "«¿Me podés ayudar?»", p11: "«seguir derecho»", p12: "«más despacio»",
};

// ======================= APLICAR =======================
const nivelPalabra = {}, motivoPalabra = {};
VOCAB.forEach((c) => { const r = puntuarPalabra(c); nivelPalabra[c.id] = r.nivel; motivoPalabra[c.id] = r.motivo; });
Object.keys(tabla).forEach((id) => { if (!VOCAB.some((c) => c.id === id)) throw new Error("CLASES tiene un id que no existe: " + id); });

const gramatica = []; // { topic, i, ex, nivel, motivo }
GRAMMAR.forEach((topic) => topic.exercises.forEach((ex, i) => { const r = puntuarGramatica(topic, ex); gramatica.push({ topic, i, ex, nivel: r.nivel, motivo: r.motivo }); }));
PRODUCCION.forEach((it) => { if (NIVEL_PRODUCCION[it.id] === undefined) throw new Error("falta puntuar la consigna " + it.id); });

// Para calcular los puntajes finales uso los niveles recién calculados (no hace falta haber escrito los archivos)
VOCAB.forEach((c) => { c.nivel = nivelPalabra[c.id]; });

// ======================= ESCRIBIR EN LOS ARCHIVOS =======================
function escribirNiveles() {
  const toques = [];
  // vocab: una palabra por línea
  const fv = path.join(raiz, "data/vocab.data.js");
  let lv = fs.readFileSync(fv, "utf8").split("\n").map((l) => {
    const m = l.match(/^(\s*\{ id: "([^"]+)",.*?)( \},?)(\r?)$/);
    if (!m) return l;
    const tiene = /, nivel: \d+/.test(m[1]);
    if (tiene && !TODO) return l;
    const cuerpo = m[1].replace(/, nivel: \d+/, "");
    return cuerpo + ", nivel: " + nivelPalabra[m[2]] + m[3] + m[4];
  });
  toques.push([fv, lv.join("\n")]);
  // gramática: una consigna por línea, en orden
  const fg = path.join(raiz, "data/grammar.data.js");
  let tema = null, idx = {}, n = 0;
  const lg = fs.readFileSync(fg, "utf8").split("\n").map((l) => {
    const mt = l.match(/^\s*id: "([^"]+)",?\s*(\r?)$/);
    if (mt) { tema = mt[1]; idx[tema] = 0; return l; }
    const m = l.match(/^(\s*\{ type: .*?)( \},?)(\r?)$/);
    if (!m || !tema) return l;
    const g = gramatica.find((x) => x.topic.id === tema && x.i === idx[tema]);
    idx[tema]++;
    if (!g) throw new Error("no encuentro el ejercicio " + tema + "#" + (idx[tema] - 1));
    const tiene = /, nivel: \d+/.test(m[1]);
    if (tiene && !TODO) return l;
    n++;
    return m[1].replace(/, nivel: \d+/, "") + ", nivel: " + g.nivel + m[2] + m[3];
  });
  GRAMMAR.forEach((t) => { if (idx[t.id] !== t.exercises.length) throw new Error("tema " + t.id + ": " + idx[t.id] + " lineas de " + t.exercises.length); });
  toques.push([fg, lg.join("\n")]);
  // producción: una consigna por línea
  const fp = path.join(raiz, "data/produccion.data.js");
  const lp = fs.readFileSync(fp, "utf8").split("\n").map((l) => {
    const m = l.match(/^(\s*\{ id: "(p\d+)",.*?)( \},?)(\r?)$/);
    if (!m) return l;
    const tiene = /, nivel: \d+/.test(m[1]);
    if (tiene && !TODO) return l;
    return m[1].replace(/, nivel: \d+/, "") + ", nivel: " + NIVEL_PRODUCCION[m[2]] + m[3] + m[4];
  });
  toques.push([fp, lp.join("\n")]);
  // Antes de escribir, compruebo que cargan y que el contenido anterior no cambió
  toques.forEach(([f, s]) => {
    const c2 = { window: {} }; c2.window = c2; vm.createContext(c2); vm.runInContext(s, c2);
  });
  toques.forEach(([f, s]) => fs.writeFileSync(f, s));
  console.log("escrito: " + toques.map(([f]) => path.basename(f)).join(", "));
}

// ======================= PUNTAJES FINALES =======================
function semilla(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const todos = []; // { clase, formato, fuente, puntaje, ... }
VOCAB.forEach((c) => Formats.formatosPara(c).forEach((f) => {
  const ex = Formats.generar(f, c, { rng: semilla(7) });
  todos.push({ clase: "vocab", formato: f, fuente: c.id, puntaje: Dificultad.puntaje(ex) });
}));
VERBOS.forEach((v) => Conjugador.todas(v).forEach((x) => Formats.formatosPara(v).forEach((f) => {
  const ex = Formats.generar(f, v, { rng: semilla(7), tiempo: x.tiempo, persona: x.persona });
  todos.push({ clase: "verbo", formato: f, fuente: v.id + " " + x.tiempo + "/" + x.persona, puntaje: Dificultad.puntaje(ex), nivel: Conjugador.nivel(v, x.tiempo, x.persona) });
})));
gramatica.forEach((g) => {
  const ex = Object.assign({}, g.ex, { format: "gramatica", source: g.topic.id + "#" + g.i, nivel: g.nivel });
  todos.push({ clase: "gramatica", formato: g.ex.type, fuente: g.topic.id + "#" + g.i, puntaje: Dificultad.puntaje(ex) });
});
PRODUCCION.forEach((it) => {
  const ex = Object.assign({}, it, { format: "produccion", source: it.id, nivel: NIVEL_PRODUCCION[it.id] });
  todos.push({ clase: "produccion", formato: "fill", fuente: it.id, puntaje: Dificultad.puntaje(ex) });
});

// ======================= RESUMEN =======================
function histograma(lista) {
  const cubos = new Array(10).fill(0);
  lista.forEach((x) => cubos[Math.min(9, Math.floor((x.puntaje - 1) / 10))]++);
  const max = Math.max(...cubos);
  return cubos.map((n, i) => (String(i * 10 + 1).padStart(3) + "-" + String(i * 10 + 10).padEnd(3) + " " + "█".repeat(Math.round((n / max) * 40)) + " " + n)).join("\n");
}
const prom = (a) => Math.round(a.reduce((s, x) => s + x, 0) / a.length);

console.log("Ejercicios posibles: " + todos.length + " (vocabulario " + todos.filter((x) => x.clase === "vocab").length + ", conjugación " + todos.filter((x) => x.clase === "verbo").length + ", gramática " + todos.filter((x) => x.clase === "gramatica").length + ", producción " + todos.filter((x) => x.clase === "produccion").length + ")");
console.log("Puntaje mínimo " + Math.min(...todos.map((x) => x.puntaje)) + ", máximo " + Math.max(...todos.map((x) => x.puntaje)) + ", promedio " + prom(todos.map((x) => x.puntaje)));
console.log("\nCuántos ejercicios hay en cada tramo de dificultad:\n" + histograma(todos));
console.log("\nPor formato (promedio  mín-máx):");
const porFormato = {};
todos.forEach((x) => { const k = x.clase + " · " + x.formato; (porFormato[k] = porFormato[k] || []).push(x.puntaje); });
Object.entries(porFormato).sort((a, b) => prom(a[1]) - prom(b[1])).forEach(([k, a]) => console.log("  " + k.padEnd(34) + String(prom(a)).padStart(3) + "   " + Math.min(...a) + "-" + Math.max(...a) + "   (" + a.length + ")"));

// Revisión: la lista de palabras ordenada
if (args.includes("--palabras")) {
  console.log("\nPALABRAS (nivel · palabra · motivo)");
  VOCAB.slice().sort((a, b) => nivelPalabra[a.id] - nivelPalabra[b.id]).forEach((c) => console.log(String(nivelPalabra[c.id]).padStart(3) + "  " + c.term.padEnd(26) + motivoPalabra[c.id]));
}

module.exports = {};
if (args.includes("--escribir")) escribirNiveles();
if (args.includes("--informe")) require("./informe-dificultad.js")({ VOCAB, VERBOS, GRAMMAR, PRODUCCION, Conjugador, Formats, Dificultad, nivelPalabra, motivoPalabra, gramatica, NIVEL_PRODUCCION, MOTIVO_PRODUCCION, todos, BASE, histograma, prom, raiz });
