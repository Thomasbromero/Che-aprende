/* Arma dev/camino-informe.md (el camino completo, para revisarlo). Lo llama dev/armar-camino.js --escribir. */
const fs = require("fs"), path = require("path");

module.exports = function (d) {
  const { niveles, VOCAB, VERBOS, Formats, aparicionesPalabra, medir, raiz, totalEj, palabrasEnCamino, saltos } = d;
  const L = [];
  const nombreFormato = {};
  Formats.lista().forEach((f) => (nombreFormato[f.id] = f.nombre));
  nombreFormato.gramatica = "Gramática";
  nombreFormato.produccion = "Producción";
  const TIPO = { vocab: "Vocabulario", verbos: "Verbos", gramatica: "Gramática", produccion: "Producción" };

  function descripcion(sp) {
    const m = medir(sp);
    if (sp.f === "gramatica" || sp.f === "produccion") return nombreFormato[sp.f] + " · " + m.ex.prompt.replace(/\s+/g, " ").slice(0, 70);
    const v = VERBOS.find((x) => x.id === sp.s);
    if (v) return nombreFormato[sp.f] + " · " + v.inf + " (" + sp.t + ", " + sp.p + ")";
    const c = VOCAB.find((x) => x.id === sp.s);
    return nombreFormato[sp.f] + " · " + c.term;
  }

  L.push("# El camino del modo Aventura", "");
  L.push("Informe generado con `node dev/armar-camino.js --escribir`. Es la lista completa de niveles, de más fácil a más difícil; cada nivel es una mini-lección.", "");
  L.push("- **" + niveles.length + " niveles** y **" + totalEj + " ejercicios** (entre 5 y 9 por nivel).");
  L.push("- Dificultad de **" + niveles[0].nivel + "** (primer nivel) a **" + niveles[niveles.length - 1].nivel + "** (último). El salto más grande entre dos niveles seguidos es de " + Math.max(...saltos) + " puntos.");
  L.push("- Las **" + palabrasEnCamino + " de " + VOCAB.length + " palabras** del vocabulario aparecen al menos una vez (" + VOCAB.filter((c) => (aparicionesPalabra[c.id] || 0) > 1).length + " también como repaso en un nivel posterior).");
  L.push("- Por tipo: " + ["vocab", "verbos", "gramatica", "produccion"].map((t) => niveles.filter((n) => n.tipo === t).length + " de " + TIPO[t].toLowerCase()).join(", ") + ".", "");

  L.push("## Resumen", "");
  L.push("| N.º | Nivel | Título | Tipo | Dificultad | Ejercicios |", "|---|---|---|---|---|---|");
  niveles.forEach((n, i) => L.push("| " + (i + 1) + " | " + n.id + " | " + n.titulo + " | " + TIPO[n.tipo] + " | " + n.nivel + " | " + n.ejercicios.length + " |"));

  L.push("", "## Qué hay en cada nivel", "");
  niveles.forEach((n, i) => {
    L.push("### " + (i + 1) + ". " + n.titulo + " — dificultad " + n.nivel, "");
    n.ejercicios.forEach((e) => L.push("- (" + e._p + ") " + descripcion(e)));
    L.push("");
  });
  fs.writeFileSync(path.join(raiz, "dev/camino-informe.md"), L.join("\n"));
};
