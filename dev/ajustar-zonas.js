/* Reparte los niveles del camino en zonas parejas (de 6 o 7 niveles) en data/mapa.data.js.
     node dev/ajustar-zonas.js            muestra cómo quedaría
     node dev/ajustar-zonas.js --escribir lo escribe
   Conserva el nombre, el fondo y las decoraciones de las zonas que ya existen (por orden) y crea las que falten
   como "Zona N". OJO: si ya hay arte hecho para las zonas, un cambio en la cantidad de niveles de una zona cambia el
   alto que tiene que tener su imagen (altoCartel + niveles x separacion + 20 unidades). Correr esto recién cuando el
   contenido esté cerrado. */
const vm = require("vm"), fs = require("fs"), path = require("path");
const raiz = path.join(__dirname, "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
["data/camino.data.js", "data/mapa.data.js"].forEach((f) => vm.runInContext(fs.readFileSync(path.join(raiz, f), "utf8"), ctx));
const { CAMINO, MAPA } = vm.runInContext("({ CAMINO, MAPA })", ctx);

const N = CAMINO.niveles.length;
const Z = Math.max(1, Math.round(N / 6));
const base = Math.floor(N / Z), extra = N % Z;
// Las zonas más grandes (con un nivel de más) van repartidas parejo, no todas juntas
const tamanos = [];
let acumulado = 0;
for (let k = 0; k < Z; k++) { const hasta = Math.round(((k + 1) * N) / Z); tamanos.push(hasta - acumulado); acumulado = hasta; }

const lit = (v) => JSON.stringify(v);
const lineas = tamanos.map((n, k) => {
  const vieja = MAPA.zonas[k] || {};
  const z = { nombre: vieja.nombre || "Zona " + (k + 1), niveles: n, fondo: vieja.fondo || null, decoraciones: vieja.decoraciones || [] };
  return "    { nombre: " + lit(z.nombre) + ", niveles: " + n + ", fondo: " + lit(z.fondo) + ", decoraciones: " + lit(z.decoraciones).replace(/,/g, ", ").replace(/:/g, ": ") + " },";
});
console.log(N + " niveles en " + Z + " zonas: " + tamanos.join(" ") + "  (antes: " + MAPA.zonas.map((z) => z.niveles).join(" ") + ")");

if (process.argv.includes("--escribir")) {
  const archivo = path.join(raiz, "data/mapa.data.js");
  const crudo = fs.readFileSync(archivo, "utf8");
  const crlf = crudo.indexOf("\r\n") >= 0;
  let s = crudo.split("\r\n").join("\n");
  const ini = s.indexOf("  zonas: [");
  const fin = s.indexOf("\n  ],", ini);
  if (ini < 0 || fin < 0) throw new Error("no encuentro la lista de zonas en data/mapa.data.js");
  s = s.slice(0, ini) + "  zonas: [\n" + lineas.join("\n") + s.slice(fin);
  fs.writeFileSync(archivo, crlf ? s.split("\n").join("\r\n") : s);
  console.log("escrito data/mapa.data.js");
}
