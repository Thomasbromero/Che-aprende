/* Arma el camino del modo Aventura (herramienta de desarrollo).
     node dev/armar-camino.js            simulación: muestra el resumen
     node dev/armar-camino.js --escribir escribe data/camino.data.js y dev/camino-informe.md
   El resultado es siempre el mismo (el azar usa una semilla fija). El camino se "compila" una vez y
   queda en un archivo de datos: así los niveles no cambian de lugar cuando se agrega contenido nuevo
   y el progreso guardado sigue apuntando a lo mismo.

   Cómo se arma:
   - Vocabulario: por tema. Las palabras de un tema se reparten en niveles de unas 6 palabras nuevas
     (de las más fáciles a las más difíciles) y cada nivel suma 2 o 3 palabras de repaso de niveles
     anteriores del mismo tema. Los primeros niveles de un tema usan formatos de reconocer (significado,
     emparejar) y los últimos formatos de producir (escribir), así toda palabra se ve al menos una vez.
   - Conjugación: por tiempo verbal; cada nivel junta formas de unos 8 verbos distintos con puntaje parecido.
   - Gramática: un nivel por tema (el de conjugación, que tiene 10 ejercicios, se parte en dos).
   - Producción: tres niveles con las consignas escritas a mano, completados con conjugaciones parecidas.
   - Al final se ordenan todos los niveles por puntaje promedio, de menor a mayor. */
const vm = require("vm"), fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
["data/vocab.data.js", "data/verbos.data.js", "data/grammar.data.js", "data/produccion.data.js", "js/util.js", "js/conjugador.js", "js/formats.js", "js/dificultad.js"]
  .forEach((f) => vm.runInContext(fs.readFileSync(path.join(raiz, f), "utf8"), ctx, { filename: f }));
const { Formats, Conjugador, Dificultad, VOCAB, VERBOS, GRAMMAR, PRODUCCION } = vm.runInContext("({ Formats, Conjugador, Dificultad, VOCAB, VERBOS, GRAMMAR, PRODUCCION })", ctx);
const ESCRIBIR = process.argv.includes("--escribir");

// ---------- Ajustes ----------
const NUEVAS_POR_NIVEL = 6;      // palabras nuevas por nivel de vocabulario
const TAMANO = 8;                // ejercicios por nivel (objetivo)
const MINIMO = 6;                // un nivel nunca tiene menos
const MAX_REPASO = 3;
const MAX_MISMO_FORMATO = 3;     // en un nivel de vocabulario, no más de 3 ejercicios del mismo formato
const MAX_FORMATO_VERBOS = 5;    // y en uno de verbos, no más de 5 (hay solo dos formatos)
const NIVELES_POR_TIEMPO = { presente: 4, preterito: 4, imperfecto: 3, futuro: 3, condicional: 3, subjuntivo: 4 };
const NOMBRE_TEMA = {
  cuerpo: "El cuerpo", ropa: "La ropa", accesorios: "Accesorios", comida: "Comida y bebida", cocina: "La cocina",
  limpieza: "Limpieza y baño", muebles: "Los muebles", casa: "La casa", tecnologia: "Tecnología", hotel: "Hotel y viaje",
  lugares: "Lugares de la ciudad", transporte: "Transporte", indicaciones: "Indicaciones", saludos: "Saludos",
  personas: "La gente", elogios: "Elogios", jerga_cosas: "Jerga: cosas", jerga_verbos: "Jerga: verbos",
  jerga_expresiones: "Jerga: expresiones", tiempo_libre: "Salidas y tiempo libre", familia: "La familia",
  restaurante: "En el restaurante", compras: "De compras", salud: "Salud y médicos",
  trabajo: "En el trabajo", clima: "El clima y la naturaleza", ciudad: "La ciudad y el transporte",
  ocio: "Ocio y deportes", estudios: "Estudios", emociones: "Emociones y carácter",
};
const NOMBRE_TIEMPO = { presente: "presente", preterito: "pretérito", imperfecto: "imperfecto", futuro: "futuro", condicional: "condicional", subjuntivo: "subjuntivo" };

// ---------- Utilidades ----------
function semilla(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const azar = semilla(20261026);
const redondo = (n) => Math.round(n);
const lerp = (a, b, t) => a + (b - a) * t;
function clave(sp) { return [sp.f, sp.s, sp.t || "", sp.p || "", sp.i === undefined ? "" : sp.i].join("|"); }
const usados = new Set(); // ejercicios ya usados en el camino (no se repite el mismo)

// Puntaje y esfuerzo de una especificación { f, s, t?, p?, i? }
function medir(sp) {
  let ex;
  if (sp.f === "gramatica") {
    const topic = GRAMMAR.find((x) => x.id === sp.s);
    ex = Object.assign({}, topic.exercises[sp.i], { format: "gramatica", source: sp.s + "#" + sp.i });
  } else if (sp.f === "produccion") {
    ex = Object.assign({}, PRODUCCION.find((x) => x.id === sp.s), { format: "produccion", source: sp.s });
  } else {
    const item = VOCAB.find((x) => x.id === sp.s) || VERBOS.find((x) => x.id === sp.s);
    ex = Formats.generar(sp.f, item, { rng: semilla(7), tiempo: sp.t, persona: sp.p });
  }
  return { puntaje: Dificultad.puntaje(ex), esfuerzo: sp.f === "gramatica" || sp.f === "produccion" ? Dificultad.esfuerzoDelFormato(ex) : Formats.esfuerzo(ex), ex };
}

// ---------- 1. Gramática ----------
const niveles = []; // { tipo, foco, titulo, ejercicios: [spec con puntaje] }
function conPuntaje(sp) { const m = medir(sp); return Object.assign({}, sp, { _p: m.puntaje }); }

GRAMMAR.forEach((topic) => {
  const lista = topic.exercises.map((e, i) => conPuntaje({ f: "gramatica", s: topic.id, i })).sort((a, b) => a._p - b._p);
  const partes = lista.length > 9 ? 2 : 1;
  const tam = Math.ceil(lista.length / partes);
  for (let k = 0; k < partes; k++) {
    const trozo = lista.slice(k * tam, (k + 1) * tam);
    trozo.forEach((sp) => usados.add(clave(sp)));
    niveles.push({ tipo: "gramatica", foco: topic.id, titulo: topic.title.replace(/^Presentarte: "Hola, soy… Encantada"$/, "Presentarte") + (partes > 1 ? " (" + (k + 1) + "/" + partes + ")" : ""), ejercicios: trozo });
  }
});

// ---------- 2. Conjugación ----------
const verbosUsadosPorTiempo = {};
const usoGlobalVerbos = {}; // cuántas veces entró cada verbo en cualquier tiempo: se prefieren los que todavía no aparecieron
const candidatosVerbo = [];
VERBOS.forEach((v) => Conjugador.todas(v).forEach((x) => Formats.formatosPara(v).forEach((f) => {
  const sp = conPuntaje({ f, s: v.id, t: x.tiempo, p: x.persona });
  candidatosVerbo.push(sp);
})));

function elegirFormas(tiempo, objetivo, cuantas, ya) {
  const penal = verbosUsadosPorTiempo[tiempo] = verbosUsadosPorTiempo[tiempo] || {};
  const pool = candidatosVerbo.filter((c) => c.t === tiempo && !usados.has(clave(c)) && !ya.some((x) => x.s === c.s));
  const ordenado = pool
    .map((c) => ({ c, d: Math.abs(c._p - objetivo) + 3 * (penal[c.s] || 0) + 4 * (usoGlobalVerbos[c.s] || 0) + azar() * 1.5 }))
    .sort((a, b) => a.d - b.d);
  const out = [];
  const porPersona = {}, porFormato = {};
  for (const { c } of ordenado) {
    if (out.length >= cuantas) break;
    if (out.some((x) => x.s === c.s)) continue;
    if ((porPersona[c.p] || 0) >= 3) continue;
    if ((porFormato[c.f] || 0) >= MAX_FORMATO_VERBOS) continue; // mezclar elegir y escribir
    out.push(c);
    porPersona[c.p] = (porPersona[c.p] || 0) + 1;
    porFormato[c.f] = (porFormato[c.f] || 0) + 1;
  }
  return out;
}

Object.keys(NIVELES_POR_TIEMPO).forEach((tiempo) => {
  const k = NIVELES_POR_TIEMPO[tiempo];
  const todos = candidatosVerbo.filter((c) => c.t === tiempo).map((c) => c._p).sort((a, b) => a - b);
  for (let j = 0; j < k; j++) {
    const objetivo = todos[Math.floor(((j + 0.5) / k) * todos.length)];
    const elegidas = elegirFormas(tiempo, objetivo, TAMANO, []);
    elegidas.forEach((sp) => { usados.add(clave(sp)); verbosUsadosPorTiempo[tiempo][sp.s] = (verbosUsadosPorTiempo[tiempo][sp.s] || 0) + 1; usoGlobalVerbos[sp.s] = (usoGlobalVerbos[sp.s] || 0) + 1; });
    niveles.push({ tipo: "verbos", foco: tiempo, titulo: "Verbos: " + NOMBRE_TIEMPO[tiempo] + (k > 1 ? " · " + (j + 1) : ""), ejercicios: elegidas.sort((a, b) => a._p - b._p) });
  }
});

// ---------- 3. Producción (consignas a mano + conjugaciones parecidas) ----------
const GRUPOS_PRODUCCION = [
  { titulo: "Producción: frases útiles", ids: ["p7", "p8", "p9", "p10", "p11", "p12"], tiempos: [] },
  { titulo: "Producción: pasado y condicional", ids: ["p3", "p4", "p6"], tiempos: ["preterito", "imperfecto", "condicional"] },
  { titulo: "Producción: subjuntivo", ids: ["p1", "p2", "p5"], tiempos: ["subjuntivo"] },
];
PRODUCCION.forEach((p) => { if (!GRUPOS_PRODUCCION.some((g) => g.ids.includes(p.id))) throw new Error("la consigna " + p.id + " no está en ningún nivel de Producción"); });
GRUPOS_PRODUCCION.forEach((g) => {
  const manuales = g.ids.map((id) => conPuntaje({ f: "produccion", s: id })).sort((a, b) => a._p - b._p);
  manuales.forEach((sp) => usados.add(clave(sp)));
  let ejercicios = manuales.slice();
  if (g.tiempos.length) {
    const objetivo = redondo(manuales.reduce((s, x) => s + x._p, 0) / manuales.length);
    const faltan = TAMANO - 2 - manuales.length;
    const extra = [];
    g.tiempos.forEach((t) => {
      const cada = Math.ceil(faltan / g.tiempos.length);
      elegirFormas(t, objetivo, cada, extra.concat(ejercicios)).forEach((sp) => extra.push(sp));
    });
    // solo "escribir": es lo que se parece a una consigna de producción
    const escribirExtra = extra.filter((x) => x.f === "conjugar_escribir");
    const sobrantes = extra.filter((x) => x.f !== "conjugar_escribir");
    let completos = escribirExtra;
    if (completos.length < faltan) {
      const mas = candidatosVerbo.filter((c) => g.tiempos.includes(c.t) && c.f === "conjugar_escribir" && !usados.has(clave(c)) && !completos.some((x) => x.s === c.s))
        .map((c) => ({ c, d: Math.abs(c._p - objetivo) + azar() }))
        .sort((a, b) => a.d - b.d).slice(0, faltan - completos.length).map((x) => x.c);
      completos = completos.concat(mas);
    }
    completos.slice(0, faltan).forEach((sp) => { usados.add(clave(sp)); });
    ejercicios = manuales.concat(completos.slice(0, faltan)).sort((a, b) => a._p - b._p);
  }
  niveles.push({ tipo: "produccion", foco: "produccion", titulo: g.titulo, ejercicios });
});

// ---------- 4. Vocabulario ----------
const aparicionesPalabra = {};   // id -> cuántas veces entra en el camino
const formatosDePalabra = {};    // id -> formatos ya usados
const infoVocab = {};
VOCAB.forEach((c) => {
  infoVocab[c.id] = Formats.formatosPara(c).map((f) => {
    const sp = conPuntaje({ f, s: c.id });
    return Object.assign(sp, { _e: medir(sp).esfuerzo });
  });
});

// Elige el formato que deja el ejercicio de esa palabra más cerca del puntaje objetivo del nivel:
// una palabra difícil se reconoce y una fácil se escribe, así el nivel queda parejo.
function elegirFormato(palabra, puntajeObjetivo, cuenta) {
  const usadosPalabra = formatosDePalabra[palabra.id] = formatosDePalabra[palabra.id] || new Set();
  const pool = infoVocab[palabra.id].filter((x) => !usadosPalabra.has(x.f) && (cuenta[x.f] || 0) < MAX_MISMO_FORMATO);
  const lista = pool.length ? pool : infoVocab[palabra.id].filter((x) => !usadosPalabra.has(x.f));
  if (!lista.length) return null;
  lista.sort((a, b) => Math.abs(a._p - puntajeObjetivo) - Math.abs(b._p - puntajeObjetivo) || (a.f < b.f ? -1 : 1));
  const sp = lista[0];
  usadosPalabra.add(sp.f);
  cuenta[sp.f] = (cuenta[sp.f] || 0) + 1;
  aparicionesPalabra[palabra.id] = (aparicionesPalabra[palabra.id] || 0) + 1;
  return Object.assign({}, sp);
}

const temas = [];
VOCAB.forEach((c) => { if (!temas.includes(c.tema)) temas.push(c.tema); });
temas.forEach((tema) => {
  const palabras = VOCAB.filter((c) => c.tema === tema).sort((a, b) => a.nivel - b.nivel || (a.id < b.id ? -1 : 1));
  const k = Math.max(1, Math.ceil(palabras.length / NUEVAS_POR_NIVEL));
  const trozos = [];
  const tam = Math.ceil(palabras.length / k);
  for (let j = 0; j < k; j++) trozos.push(palabras.slice(j * tam, (j + 1) * tam));
  const anteriores = [];
  trozos.forEach((nuevas, j) => {
    const nivelMedio = nuevas.reduce((s, c) => s + c.nivel, 0) / nuevas.length;
    // esfuerzo: reconocer al principio, escribir al final. Un tema de un solo nivel y fácil (Saludos) va suave.
    const E = k === 1 ? (nivelMedio < 20 ? 16 : 34) : lerp(18, 66, j / (k - 1));
    const T = 0.6 * nivelMedio + 0.4 * E; // puntaje objetivo del nivel
    const cuenta = {};
    const ejercicios = [];
    nuevas.forEach((c) => { const sp = elegirFormato(c, T, cuenta); if (sp) ejercicios.push(sp); });
    // repaso de palabras de niveles anteriores del mismo tema, en formatos más exigentes
    if (anteriores.length) {
      const nRep = Math.max(0, Math.min(MAX_REPASO, TAMANO - ejercicios.length));
      // Se prefieren las que menos aparecieron, pero también las que todavía tienen un formato que cae cerca del
      // objetivo (si a una palabra solo le queda el formato más fácil, el nivel queda desparejo)
      const cercania = (c) => {
        const usadosC = formatosDePalabra[c.id] || new Set();
        const libres = infoVocab[c.id].filter((x) => !usadosC.has(x.f) && (cuenta[x.f] || 0) < MAX_MISMO_FORMATO);
        return libres.length ? Math.min(...libres.map((x) => Math.abs(x._p - (T + 6)))) : 99;
      };
      const costo = (c) => cercania(c) + 8 * (aparicionesPalabra[c.id] || 0);
      const candidatas = anteriores.slice().sort((a, b) => costo(a) - costo(b) || a.nivel - b.nivel);
      for (const c of candidatas) {
        if (ejercicios.length >= TAMANO || ejercicios.filter((x) => !nuevas.some((n) => n.id === x.s)).length >= nRep) break;
        const sp = elegirFormato(c, T + 6, cuenta);
        if (sp) ejercicios.push(sp);
      }
    }
    // temas chicos: si faltan ejercicios, las mismas palabras otra vez con un formato más exigente
    let vuelta = 0;
    while (ejercicios.length < MINIMO && vuelta < 3) {
      vuelta++;
      for (const c of nuevas) {
        if (ejercicios.length >= TAMANO) break;
        const sp = elegirFormato(c, T + 8 * vuelta, cuenta);
        if (sp) ejercicios.push(sp);
      }
    }
    ejercicios.forEach((sp) => usados.add(clave(sp)));
    niveles.push({ tipo: "vocab", foco: tema, titulo: NOMBRE_TEMA[tema] + (k > 1 ? " · " + (j + 1) : ""), ejercicios: ejercicios.sort((a, b) => a._p - b._p) });
    nuevas.forEach((c) => anteriores.push(c));
  });
});

// ---------- 5. Ordenar y numerar ----------
// Dentro de un nivel los ejercicios suben de dificultad; esta pasada evita dos del mismo formato seguidos
// cambiándolos de lugar con uno de puntaje parecido (hasta 4 puntos de diferencia).
function desagrupar(lista) {
  const l = lista.slice();
  for (let i = 1; i < l.length; i++) {
    if (l[i].f !== l[i - 1].f) continue;
    for (let j = i + 1; j < l.length; j++) {
      if (l[j].f !== l[i - 1].f && Math.abs(l[j]._p - l[i]._p) <= 4) { const t = l[i]; l[i] = l[j]; l[j] = t; break; }
    }
  }
  return l;
}
niveles.forEach((n) => { n.ejercicios = desagrupar(n.ejercicios); });
niveles.forEach((n) => { n.nivel = redondo(n.ejercicios.reduce((s, x) => s + x._p, 0) / n.ejercicios.length); });
const PRIORIDAD = { gramatica: 0, produccion: 1, vocab: 2, verbos: 3 }; // desempate
// Para empezar por lo más natural (saludarse y presentarse) estos niveles se adelantan un poco en el
// orden; la dificultad que se muestra no cambia.
const ADELANTO = { saludos: 5, presentarse: 6 };
const clave_orden = (n) => n.nivel - (ADELANTO[n.foco] || 0);
niveles.forEach((n, i) => { n._orden = i; });
niveles.sort((a, b) => clave_orden(a) - clave_orden(b) || PRIORIDAD[a.tipo] - PRIORIDAD[b.tipo] || a._orden - b._orden);
niveles.forEach((n, i) => { n.id = "n" + String(i + 1).padStart(2, "0"); });

// ---------- Resumen ----------
const totalEj = niveles.reduce((s, n) => s + n.ejercicios.length, 0);
const palabrasEnCamino = Object.keys(aparicionesPalabra).length;
const saltos = [];
for (let i = 1; i < niveles.length; i++) saltos.push(Math.abs(niveles[i].nivel - niveles[i - 1].nivel));
console.log("Niveles: " + niveles.length + " | ejercicios: " + totalEj + " | palabras en el camino: " + palabrasEnCamino + "/" + VOCAB.length);
console.log("Por tipo: " + ["gramatica", "produccion", "vocab", "verbos"].map((t) => t + "=" + niveles.filter((n) => n.tipo === t).length).join("  "));
console.log("Dificultad del primer nivel: " + niveles[0].nivel + " (" + niveles[0].titulo + ") | del último: " + niveles[niveles.length - 1].nivel + " (" + niveles[niveles.length - 1].titulo + ")");
console.log("Salto máximo entre niveles consecutivos: " + Math.max(...saltos) + " | tamaños de nivel: " + Math.min(...niveles.map((n) => n.ejercicios.length)) + " a " + Math.max(...niveles.map((n) => n.ejercicios.length)));
if (process.argv.includes("--lista")) niveles.forEach((n) => console.log(n.id + "  " + String(n.nivel).padStart(3) + "  " + n.tipo.padEnd(10) + n.titulo.padEnd(34) + n.ejercicios.length + " ej  [" + n.ejercicios.map((e) => e._p).join(",") + "]"));

// ---------- Escribir ----------
function limpio(sp) { const o = { f: sp.f, s: sp.s }; if (sp.t) o.t = sp.t; if (sp.p) o.p = sp.p; if (sp.i !== undefined) o.i = sp.i; return o; }
function textoDatos() {
  const bloques = niveles.map((n) => "    { id: " + JSON.stringify(n.id) + ", titulo: " + JSON.stringify(n.titulo) + ", tipo: " + JSON.stringify(n.tipo) + ", foco: " + JSON.stringify(n.foco) + ", nivel: " + n.nivel + ",\n      ejercicios: [" + n.ejercicios.map((e) => JSON.stringify(limpio(e)).replace(/"(\w+)":/g, "$1:").replace(/,/g, ", ").replace(/:/g, ": ").replace(/\{/g, "{ ").replace(/\}/g, " }")).join(", ") + "] }");
  return "/* Camino del modo Aventura: la lista de niveles, de más fácil a más difícil.\n   GENERADO por \"node dev/armar-camino.js --escribir\"; no se edita a mano.\n   Cada ejercicio es una receta { f: formato, s: palabra / verbo / tema, t: tiempo, p: persona, i: posición }\n   que js/aventura.js convierte en un ejercicio con Formats.generar (o toma el escrito a mano). */\nwindow.CAMINO = {\n  niveles: [\n" + bloques.join(",\n") + "\n  ]\n};\n";
}
if (ESCRIBIR) {
  fs.writeFileSync(path.join(raiz, "data/camino.data.js"), textoDatos());
  require("./informe-camino.js")({ niveles, VOCAB, VERBOS, Formats, Dificultad, aparicionesPalabra, NOMBRE_TEMA, medir, raiz, totalEj, palabrasEnCamino, saltos });
  console.log("escrito: data/camino.data.js y dev/camino-informe.md");
} else console.log("(simulación; usar --escribir para guardar)");
