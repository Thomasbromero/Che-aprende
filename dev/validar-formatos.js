/* Valida los formatos de ejercicio (js/formats.js) con todo el vocabulario.
   Herramienta de desarrollo, no la usa la app. Correr desde la carpeta del proyecto:
     node dev/validar-formatos.js            (resumen + errores)
     node dev/validar-formatos.js --detalle  (además lista cada hueco y los casos raros)
     node dev/validar-formatos.js --tablas   (además imprime la conjugación de cada verbo, para revisarla)
   Genera cada formato para cada palabra con 40 semillas y revisa las reglas de calidad
   (la respuesta está entre las opciones, no hay opciones repetidas ni con el mismo
   significado, la frase con hueco se reconstruye, etc.). Termina con error si algo falla. */
const vm = require("vm"), fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
["data/vocab.data.js", "data/verbos.data.js", "data/grammar.data.js", "data/produccion.data.js", "js/util.js", "js/conjugador.js", "js/formats.js", "js/dificultad.js"].forEach((f) => vm.runInContext(fs.readFileSync(path.join(raiz, f), "utf8"), ctx, { filename: f }));
const { Formats, Conjugador, Dificultad, VOCAB, VERBOS, GRAMMAR, PRODUCCION, respuestaCorrecta } = vm.runInContext("({ Formats, Conjugador, Dificultad, VOCAB, VERBOS, GRAMMAR, PRODUCCION, respuestaCorrecta })", ctx);
const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const detalle = process.argv.includes("--detalle");

function semilla(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

const errores = [];
const fallo = (id, formato, msg) => errores.push(id + " · " + formato + ": " + msg);
const porId = (id) => VOCAB.find((v) => v.id === id);
const SEMILLAS = 40;
const aplicables = {};
Formats.lista().forEach((f) => (aplicables[f.id] = []));

// --- Datos ---
const ids = VOCAB.map((v) => v.id);
if (new Set(ids).size !== ids.length) errores.push("ids repetidos");
VOCAB.forEach((v) => { if (!v.tema) fallo(v.id, "datos", "sin tema"); });

VOCAB.forEach((c) => {
  Formats.formatosPara(c).forEach((fid) => {
    aplicables[fid].push(c.id);
    for (let s = 1; s <= SEMILLAS; s++) {
      const ex = Formats.generar(fid, c, { rng: semilla(s * 7919 + c.id.length) });
      const otro = Formats.generar(fid, c, { rng: semilla(s * 7919 + c.id.length) });
      if (!ex) { fallo(c.id, fid, "aplica() es verdadero pero no genera"); return; }
      if (JSON.stringify(ex) !== JSON.stringify(otro)) fallo(c.id, fid, "con la misma semilla da resultados distintos");
      if (ex.format !== fid || ex.source !== c.id) fallo(c.id, fid, "faltan format/source");
      if (/undefined|null|\[object/.test(JSON.stringify(ex))) fallo(c.id, fid, "texto con undefined/null");
      if (ex.type === "choice") {
        if (ex.options.length !== 4) fallo(c.id, fid, "opciones: " + ex.options.length);
        if (new Set(ex.options).size !== ex.options.length) fallo(c.id, fid, "opciones repetidas: " + ex.options.join(" | "));
        if (!ex.options.includes(ex.answer)) fallo(c.id, fid, "la respuesta no esta en las opciones");
        if (fid === "significado" || fid === "termino") {
          const otras = ex.options.filter((o) => o !== ex.answer).map((o) => VOCAB.find((v) => (fid === "significado" ? v.hu : v.term) === o));
          otras.forEach((d) => {
            if (!d) fallo(c.id, fid, "opcion que no sale del vocabulario");
            else if (Formats.parecidas(c, d)) fallo(c.id, fid, "opcion con significado parecido: " + d.id);
          });
        }
        if (fid === "completar_opciones") {
          if (ex.prompt.split("___").length !== 2) fallo(c.id, fid, "el hueco no aparece una vez");
          ex.options.forEach((o) => {
            if (!/^[\p{L}]+$/u.test(o) || o !== o.toLowerCase()) fallo(c.id, fid, "opcion rara: " + o);
            const d = VOCAB.find((v) => Formats.nucleo(v) === o);
            if (d && Formats.articuloDe(d) !== Formats.articuloDe(c)) fallo(c.id, fid, "opcion con otro articulo: " + o);
          });
          if (!ex.hint) fallo(c.id, fid, "sin pista");
        }
      } else if (ex.type === "fill") {
        if (ex.prompt.split("___").length !== 2) fallo(c.id, fid, "el hueco no aparece una vez");
        if (ex.prompt.replace("___", ex.answer) !== c.example) fallo(c.id, fid, "la frase no se reconstruye");
        if (!ex.accept.map(norm).includes(norm(ex.answer))) fallo(c.id, fid, "accept no incluye la respuesta");
      } else if (ex.type === "order") {
        const toks = c.example.trim().split(/\s+/);
        if (ex.words.slice().sort().join("|") !== toks.slice().sort().join("|")) fallo(c.id, fid, "las palabras no coinciden con la frase");
        if (ex.words.join(" ") === toks.join(" ") && new Set(toks).size > 1) fallo(c.id, fid, "ya viene ordenada");
        if (ex.answer !== toks.join(" ")) fallo(c.id, fid, "respuesta distinta de la frase");
      } else if (ex.type === "match") {
        const P = ex.pairs;
        if (P.length !== 4) fallo(c.id, fid, "pares: " + P.length);
        if (new Set(P.map((p) => p.left)).size !== 4 || new Set(P.map((p) => p.right)).size !== 4) fallo(c.id, fid, "pares repetidos");
        if (!P.some((p) => p.left === c.term)) fallo(c.id, fid, "falta la palabra pedida");
        const V = P.map((p) => VOCAB.find((v) => v.term === p.left));
        for (let i = 0; i < V.length; i++) for (let j = i + 1; j < V.length; j++) if (Formats.parecidas(V[i], V[j])) fallo(c.id, fid, "pares con significado parecido: " + V[i].id + "/" + V[j].id);
        P.forEach((p, i) => { if (V[i].hu !== p.right) fallo(c.id, fid, "par mal armado: " + p.left); });
      } else fallo(c.id, fid, "tipo desconocido " + ex.type);
    }
  });
});

// --- Verbos / conjugación ---
// Respuestas que la app ya enseña a mano en grammar.data.js: el conjugador tiene que dar lo mismo
const CONOCIDAS = [
  ["hablar", "presente", "yo", "hablo"], ["tener", "presente", "vos", "tenés"], ["hacer", "preterito", "yo", "hice"],
  ["ir", "preterito", "ustedes", "fueron"], ["ser", "imperfecto", "nosotros", "éramos"], ["vivir", "imperfecto", "el", "vivía"],
  ["poder", "futuro", "vos", "podrás"], ["estudiar", "condicional", "yo", "estudiaría"], ["decir", "condicional", "ustedes", "dirían"],
  ["escribir", "subjuntivo", "vos", "escribas"], ["venir", "subjuntivo", "vos", "vengas"], ["hacer", "subjuntivo", "el", "haga"],
  ["comer", "preterito", "yo", "comí"], ["tener", "subjuntivo", "vos", "tengas"],
];
CONOCIDAS.forEach(([inf, t, p, esperada]) => {
  const v = VERBOS.find((x) => x.inf === inf);
  if (!v || !Conjugador.formas(v, t, p).includes(esperada)) fallo(inf, "conjugador", t + "/" + p + " no da «" + esperada + "»");
});
const idsV = VERBOS.map((v) => v.id);
if (new Set(idsV).size !== idsV.length || idsV.some((id) => VOCAB.some((c) => c.id === id))) errores.push("ids de verbos repetidos o iguales a los del vocabulario");
const FORMATOS_VERBO = Formats.lista().filter((f) => f.fuente === "verbo").map((f) => f.id);
let estrictos = 0, conjugaciones = 0;

VERBOS.forEach((v) => {
  Conjugador.todas(v).forEach((x) => {
    conjugaciones++;
    x.formas.forEach((f) => { if (!f || /undefined|\s/.test(f)) fallo(v.id, "conjugador", "forma rara: «" + f + "» (" + x.tiempo + "/" + x.persona + ")"); });
  });
  if (Formats.formatosPara(v).join() !== FORMATOS_VERBO.join()) fallo(v.id, "verbo", "no tiene todos los formatos de conjugar");
  Conjugador.todas(v).forEach((x) => {
    FORMATOS_VERBO.forEach((fid) => {
      for (let s = 1; s <= 3; s++) {
        const ex = Formats.generar(fid, v, { rng: semilla(s * 104729 + v.inf.length), tiempo: x.tiempo, persona: x.persona });
        const id = v.id + " " + x.tiempo + "/" + x.persona;
        if (!ex || ex.tiempo !== x.tiempo || ex.persona !== x.persona) { fallo(id, fid, "no respeta tiempo/persona pedidos"); return; }
        if (/undefined|null|\[object/.test(JSON.stringify(ex))) fallo(id, fid, "texto con undefined/null");
        if (!ex.explain) fallo(id, fid, "sin explicacion");
        if (ex.type === "choice") {
          if (ex.options.length !== 4 || new Set(ex.options).size !== 4) fallo(id, fid, "opciones mal: " + ex.options.join(" | "));
          if (ex.options.filter((o) => x.formas.some((f) => f.toLowerCase() === o.toLowerCase())).length !== 1) fallo(id, fid, "hay mas de una opcion correcta: " + ex.options.join(" | "));
          if (!x.formas.includes(ex.answer)) fallo(id, fid, "la respuesta no es una forma valida");
        } else {
          if (ex.prompt.split("___").length !== 2) fallo(id, fid, "el hueco no aparece una vez");
          if (!Formats.generar(fid, v, { rng: semilla(1), tiempo: x.tiempo, persona: x.persona }).accept.every((a, i) => a === x.formas[i])) fallo(id, fid, "accept distinto de las formas");
          // Lo importante: lo correcto se acepta y NINGUNA otra forma del verbo se acepta por error
          x.formas.forEach((f) => { if (!respuestaCorrecta(ex, f) || !respuestaCorrecta(ex, f.toUpperCase()) || !respuestaCorrecta(ex, "  " + f + " ")) fallo(id, fid, "no acepta «" + f + "»"); });
          Conjugador.todas(v).forEach((y) => y.formas.forEach((g) => {
            const esValida = x.formas.some((f) => f.toLowerCase() === g.toLowerCase());
            if (!esValida && respuestaCorrecta(ex, g)) fallo(id, fid, "acepta por error «" + g + "» (" + y.tiempo + "/" + y.persona + ")");
          }));
          if (ex.estricto) estrictos++;
        }
      }
    });
  });
});

// --- Dificultad ---
const nivelOk = (n) => Number.isInteger(n) && n >= 1 && n <= 100;
const FALTA_NIVEL = "falta el nivel (correr: node dev/puntuar.js --escribir)";
VOCAB.forEach((c) => { if (!nivelOk(c.nivel)) fallo(c.id, "dificultad", FALTA_NIVEL); });
GRAMMAR.forEach((t) => t.exercises.forEach((e, i) => { if (!nivelOk(e.nivel)) fallo(t.id + "#" + i, "dificultad", FALTA_NIVEL); }));
PRODUCCION.forEach((p) => { if (!nivelOk(p.nivel)) fallo(p.id, "dificultad", FALTA_NIVEL); });

const decil = new Array(10).fill(0);
let puntuados = 0;
const cuenta = (p, id, fid) => {
  if (!Number.isInteger(p) || p < 1 || p > 100) { fallo(id, fid, "puntaje fuera de 1-100: " + p); return; }
  decil[Math.min(9, Math.floor((p - 1) / 10))]++;
  puntuados++;
};
if (!errores.length) {
  VOCAB.forEach((c) => {
    const p = {};
    Formats.formatosPara(c).forEach((fid) => { p[fid] = Dificultad.puntaje(Formats.generar(fid, c, { rng: semilla(1) })); cuenta(p[fid], c.id, fid); });
    // La misma palabra tiene que costar más cuanto más hay que producir
    const mayor = (a, b) => { if (!(p[a] < p[b])) fallo(c.id, "dificultad", a + " (" + p[a] + ") deberia ser menor que " + b + " (" + p[b] + ")"); };
    mayor("significado", "termino"); mayor("termino", "completar_escribir"); mayor("significado", "ordenar");
    mayor("emparejar", "completar_escribir"); if (p.completar_opciones) mayor("completar_opciones", "completar_escribir");
  });
  VERBOS.forEach((v) => Conjugador.PERSONAS.forEach((pe) => {
    const pt = {};
    Conjugador.TIEMPOS.forEach((t) => {
      const o = Dificultad.puntaje(Formats.generar("conjugar_opciones", v, { rng: semilla(1), tiempo: t.id, persona: pe.id }));
      const e = Dificultad.puntaje(Formats.generar("conjugar_escribir", v, { rng: semilla(1), tiempo: t.id, persona: pe.id }));
      cuenta(o, v.id + " " + t.id + "/" + pe.id, "conjugar_opciones"); cuenta(e, v.id + " " + t.id + "/" + pe.id, "conjugar_escribir");
      if (!(o < e)) fallo(v.id + " " + t.id + "/" + pe.id, "dificultad", "conjugar_opciones (" + o + ") deberia ser menor que conjugar_escribir (" + e + ")");
      pt[t.id] = e;
    });
    if (!(pt.presente < pt.subjuntivo)) fallo(v.id + "/" + pe.id, "dificultad", "presente (" + pt.presente + ") deberia ser menor que subjuntivo (" + pt.subjuntivo + ")");
  }));
  GRAMMAR.forEach((t) => t.exercises.forEach((e, i) => cuenta(Dificultad.puntaje(Object.assign({}, e, { format: "gramatica", source: t.id + "#" + i })), t.id + "#" + i, "gramatica")));
  PRODUCCION.forEach((p) => cuenta(Dificultad.puntaje(Object.assign({}, p, { format: "produccion", source: p.id })), p.id, "produccion"));
  // El camino necesita ejercicios en todos los tramos: si un tramo queda casi vacío, el mapa tendría un salto
  decil.forEach((n, i) => { if (i < 9 && n < 20) fallo("reparto", "dificultad", "solo " + n + " ejercicios con puntaje " + (i * 10 + 1) + "-" + (i * 10 + 10)); });
}

// --- Resumen ---
console.log("Ejercicios puntuados: " + puntuados + " | por tramo de dificultad (1-10, 11-20, ...): " + decil.join(" "));
console.log("Palabras: " + VOCAB.length + " | verbos: " + VERBOS.length + " (" + conjugaciones + " formas) | semillas por combinacion: " + SEMILLAS);
Formats.lista().forEach((f) => {
  if (f.fuente === "verbo") console.log("  " + f.id.padEnd(20) + String(VERBOS.length).padStart(4) + " / " + VERBOS.length + " verbos (x 30 tiempos y personas)");
  else console.log("  " + f.id.padEnd(20) + String(aplicables[f.id].length).padStart(4) + " / " + VOCAB.length + " palabras");
});
console.log("Conjugar escribiendo: " + estrictos / 3 + " de " + conjugaciones + " combinaciones son estrictas (la tilde cambia el tiempo)");
const sinHueco = VOCAB.filter((c) => !Formats.fraseConHueco(c)).map((c) => c.id);
console.log("Sin 'completar' (no se pudo tapar nada): " + (sinHueco.join(", ") || "ninguna"));
const sinOrdenar = VOCAB.filter((c) => !aplicables.ordenar.includes(c.id)).map((c) => c.id + "(" + c.example.trim().split(/\s+/).length + ")");
console.log("Sin 'ordenar' (frase muy corta o larga): " + (sinOrdenar.join(", ") || "ninguna"));
const temas = {};
VOCAB.forEach((c) => (temas[c.tema] = (temas[c.tema] || 0) + 1));
console.log("Temas: " + Object.entries(temas).map(([t, n]) => t + "=" + n).join(" "));

if (detalle) {
  console.log("\n-- Huecos que NO son la palabra tal cual (plural/conjugacion): revisar que tengan sentido --");
  VOCAB.forEach((c) => { const f = Formats.fraseConHueco(c); if (f && norm(f.respuesta) !== norm(Formats.nucleo(c))) console.log("  " + c.id.padEnd(16) + c.term.padEnd(26) + "-> " + f.respuesta.padEnd(14) + "| " + f.prompt); });
}

if (process.argv.includes("--tablas")) {
  VERBOS.forEach((v) => {
    console.log("\n" + v.inf.toUpperCase() + "  (" + v.hu + ")");
    Conjugador.TIEMPOS.forEach((t) => {
      console.log("  " + t.id.padEnd(12) + Conjugador.PERSONAS.map((p) => Conjugador.formas(v, t.id, p.id).join("/")).join("  ·  "));
    });
  });
}

if (errores.length) {
  const unicos = [...new Set(errores)];
  console.log("\nERRORES (" + unicos.length + "):");
  unicos.slice(0, 40).forEach((e) => console.log("  - " + e));
  process.exit(1);
}
console.log("\nOK: sin errores.");
