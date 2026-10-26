/* Valida los formatos de ejercicio (js/formats.js) con todo el vocabulario.
   Herramienta de desarrollo, no la usa la app. Correr desde la carpeta del proyecto:
     node dev/validar-formatos.js            (resumen + errores)
     node dev/validar-formatos.js --detalle  (además lista cada hueco y los casos raros)
   Genera cada formato para cada palabra con 40 semillas y revisa las reglas de calidad
   (la respuesta está entre las opciones, no hay opciones repetidas ni con el mismo
   significado, la frase con hueco se reconstruye, etc.). Termina con error si algo falla. */
const vm = require("vm"), fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
["data/vocab.data.js", "js/util.js", "js/formats.js"].forEach((f) => vm.runInContext(fs.readFileSync(path.join(raiz, f), "utf8"), ctx, { filename: f }));
const { Formats, VOCAB } = vm.runInContext("({ Formats, VOCAB })", ctx);
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

// --- Resumen ---
console.log("Palabras: " + VOCAB.length + " | semillas por combinacion: " + SEMILLAS);
Formats.lista().forEach((f) => {
  console.log("  " + f.id.padEnd(20) + String(aplicables[f.id].length).padStart(4) + " / " + VOCAB.length + " palabras");
});
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

if (errores.length) {
  const unicos = [...new Set(errores)];
  console.log("\nERRORES (" + unicos.length + "):");
  unicos.slice(0, 40).forEach((e) => console.log("  - " + e));
  process.exit(1);
}
console.log("\nOK: sin errores.");
