/* Arma los 27 fondos del mapa de Aventura (un viaje por Argentina) como SVG en assets/mapa/ y los conecta en data/mapa.data.js.
     node dev/fondos/armar-fondos.js              genera solo los archivos SVG
     node dev/fondos/armar-fondos.js --conectar   además actualiza nombre y fondo de cada zona en data/mapa.data.js
     node dev/fondos/armar-fondos.js --solo 3,8   genera solo esas zonas (para probar)
   Medidas: 400 x 832 unidades (zonas de 6 niveles) o 400 x 948 (zonas de 7). Todos los bordes de arriba y de abajo terminan en el
   mismo crema, así las zonas se pegan sin costura. El camino va por el centro (x de 95 a 305): ahí el dibujo es suave. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const K = require("./kit.js");
const raiz = path.join(__dirname, "..", "..");

// ---------- Medidas reales de cada zona (las calcula la misma geometría que usa la app) ----------
const ctxApp = { console }; ctxApp.window = ctxApp; vm.createContext(ctxApp);
["data/camino.data.js", "data/mapa.data.js"].forEach((a) => vm.runInContext(fs.readFileSync(path.join(raiz, a), "utf8"), ctxApp));
vm.runInContext(fs.readFileSync(path.join(raiz, "js/mapa.js"), "utf8").replace(/^const Mapa/m, "var Mapa"), ctxApp);
const geo = vm.runInContext("Mapa.calcular(CAMINO.niveles.length, MAPA)", ctxApp);
const ALTOS = geo.zonas.map((z) => Math.round(z.bottom - z.top));

const { f, at, claro, oscuro, NAVY, CREMA } = K;
const VERSION_ARTE = 1; // subirla cada vez que se cambie el arte, así los celulares bajan los dibujos nuevos

// ---------- Piezas por nombre: [función que dibuja, opciones por defecto] ----------
const PIEZAS = {
  obelisco: () => K.obelisco(),
  farola: () => K.farola(),
  rocas: (c, o) => K.rocas(o.c),
  ciudad: (c, o) => K.ciudad(c, o.n || 6, o.cols),
  colectivo: (c, o) => K.colectivo(o.c),
  ombu: (c, o) => K.ombu(o),
  molino: () => K.molino(),
  vaca: (c, o) => K.vaca(o.c),
  rancho: () => K.rancho(),
  sombrilla: (c, o) => K.sombrilla(o.c),
  lobo: () => K.loboMarino(),
  faro: (c, o) => K.faro(o.c),
  bote: (c, o) => K.bote(o.c),
  palafito: () => K.palafito(),
  bandera: () => K.monumentoBandera(),
  casa: (c, o) => K.casaHistorica(o.c),
  iglesia: () => K.iglesiaAdobe(),
  cabana: () => K.cabana(),
  base: () => K.baseAntartica(),
  viaducto: () => K.viaducto(),
  llama: (c, o) => K.llama(o),
  flamenco: () => K.flamenco(),
  garza: () => K.garza(),
  condor: (c, o) => K.condor(o.c),
  pinguino: (c, o) => K.pinguino(o),
  ballena: () => K.ballena(),
  yacare: () => K.yacare(),
  carpincho: () => K.carpincho(),
  tucan: () => K.tucan(),
  dino: () => K.dino(),
  abeto: (c, o) => K.abeto(o),
  palmera: (c, o) => K.palmera(o),
  sauce: (c, o) => K.sauce(o),
  borracho: (c, o) => K.paloBorracho(o),
  cardon: (c, o) => K.cardon(o),
  araucaria: (c, o) => K.araucaria(o),
  calden: (c, o) => K.caldenArbol(o),
  quebracho: (c, o) => K.quebracho(o),
  algodon: () => K.algodon(),
  canaveral: () => K.canaveral(),
  limonero: () => K.limonero(),
  olivo: () => K.olivo(),
  pasto: (c, o) => K.pasto(o.c, o.n),
  hongo: (c, o) => K.hongo(o.c),
  arbol: (c, o) => K.arbolRedondo(o),
  torre: (c, o) => K.torreRoca(c, o.c || "#d98f6f", o.w || 24, o.h || 70),
  iceberg: (c, o) => K.iceberg(c, 0, 0, 1),
};

function equis(c, x) {
  if (typeof x === "number") return x;
  const r = c.rng();
  if (x === "L") return 12 + r * 56;       // costado izquierdo
  if (x === "R") return 332 + r * 56;      // costado derecho
  if (x === "l") return 70 + r * 50;       // un poco más adentro, a la izquierda
  if (x === "r") return 280 + r * 50;
  return 140 + r * 120;                    // "C": centro (solo piezas lejanas y suaves)
}
// item: [pieza, x, y (fracción del alto), tamaño, espejado, opciones]
const REPETIBLES = ["farola", "rocas", "arbol", "palmera", "sauce", "borracho", "cardon", "araucaria", "calden", "quebracho", "algodon", "canaveral", "limonero", "olivo", "abeto", "pasto", "vaca", "llama", "flamenco", "garza", "pinguino", "lobo", "yacare", "carpincho", "hongo", "torre", "sombrilla", "ombu", "tucan", "dino"];
const TAMANO = 1.4; // todo el dibujo de las piezas se agranda un poco: en el celular el mapa se ve chico
function poner(c, items) {
  const base = items.map((it) => ({ t: it[0], x: equis(c, it[1]), y: it[2], s: it[3] || 1, e: it[4] ? 1 : 0, o: it[5] || {} }));
  // ecos: una repetición de las piezas que se pueden repetir, del otro lado y a otra altura (más densidad, sin duplicar monumentos)
  const ecos = [];
  base.forEach((it) => {
    if (!REPETIBLES.includes(it.t) || it.y < 0.42 || c.rng() > 0.8) return;
    const otroLado = it.x < 200 ? 400 - it.x + (c.rng() - 0.5) * 30 : 400 - it.x + (c.rng() - 0.5) * 30;
    const y = Math.max(0.44, Math.min(0.9, it.y + (c.rng() - 0.5) * 0.26));
    ecos.push({ t: it.t, x: Math.max(4, Math.min(396, otroLado)), y, s: it.s * (0.75 + c.rng() * 0.35), e: c.rng() > 0.5 ? 1 : 0, o: it.o });
  });
  // segundo eco, más abajo y del mismo lado: llena la mitad de abajo, que es donde el camino se ve más
  base.forEach((it) => {
    if (!REPETIBLES.includes(it.t) || c.rng() > 0.6) return;
    const x = Math.max(4, Math.min(396, it.x + (c.rng() - 0.5) * 70));
    ecos.push({ t: it.t, x: it.x < 200 ? Math.min(x, 90) : Math.max(x, 310), y: 0.6 + c.rng() * 0.3, s: it.s * (0.9 + c.rng() * 0.35), e: c.rng() > 0.5 ? 1 : 0, o: it.o });
  });
  const lista = base.concat(ecos);
  lista.sort((a, b) => a.y - b.y);
  return lista.map((it) => {
    const persp = 0.55 + 0.75 * Math.max(0, Math.min(1, (it.y - 0.36) / 0.52));
    const op = it.o.op !== undefined ? it.o.op : (it.y < 0.42 ? 0.8 : 1);
    if (!PIEZAS[it.t]) throw new Error("pieza desconocida: " + it.t);
    return at(it.x, it.y * c.H, it.s * persp * TAMANO * (it.o.k || 1), it.e, PIEZAS[it.t](c, it.o), op);
  }).join("\n");
}

// ---------- Cielo ----------
function cielo(c, o) {
  let s = "";
  if (o.estrellas) s += K.estrellas(c, o.estrellas, c.H * 0.34);
  if (o.aurora) s += K.aurora(c, o.aurora[0] * c.H, o.aurora[1]);
  if (o.sol) s += K.sol(c, o.sol[0], o.sol[1] * c.H, o.sol[2], o.sol[3]);
  if (o.luna) s += K.luna(c, o.luna[0], o.luna[1] * c.H, o.luna[2]);
  if (o.arcoiris) s += K.arcoiris(o.arcoiris[0], o.arcoiris[1] * c.H, o.arcoiris[2]);
  const nubes = o.nubes === undefined ? 4 : o.nubes;
  for (let i = 0; i < nubes; i++) s += K.nube(c.rng() * 380 + 10, c.H * (0.07 + c.rng() * 0.28), 0.7 + c.rng() * 0.9, o.nubesOp, o.nubesColor);
  (o.pajaros || []).forEach((p) => { s += K.pajaros(p[0], p[1] * c.H, p[2], p[3], o.pajarosColor); });
  return s;
}

// ---------- Una zona completa ----------
function componer(numero, z, alto) {
  const c = K.contexto(numero, 400, alto, z.sem * 977 + numero);
  const hor = alto * (z.hor || 0.46), P = z.P;
  const partes = [];
  // 1. lavado de color de toda la zona: crema en los bordes (así las zonas se pegan sin costura), el cielo arriba y el suelo abajo
  const lavado = K.degradado(c, 0, 0, 0, alto, [[0, CREMA], [0.1, P.top], [0.42, P.bot], [(hor / alto) + 0.01, P.s1], [0.9, P.s2], [1, CREMA]]);
  partes.push(`<rect width="400" height="${alto}" fill="${lavado}"/>`);
  // 2. cielo y fondo lejano
  partes.push(cielo(c, z.cielo || {}));
  if (z.lejos) partes.push(z.lejos(c, hor));
  // 3. terreno: capas de colinas
  (z.capas || [{ y: hor, amp: 8, color: P.s1, abajo: P.s2 }]).forEach((cp) => {
    partes.push(K.colina(c, cp.y === undefined ? hor : cp.y * alto, cp.amp, cp.color, { abajo: cp.abajo || P.s2, op: cp.op || 1, pasos: cp.pasos || 7 }));
  });
  if (z.medio) partes.push(z.medio(c, hor));
  // 4. piezas (de lo más lejano a lo más cercano)
  partes.push(poner(c, z.items || []));
  // 5. velo del centro: baja el contraste donde van el camino y los niveles
  const velo = K.degradado(c, 70, 0, 330, 0, [[0, "#ffffff", 0], [0.3, "#ffffff", 0.2], [0.7, "#ffffff", 0.2], [1, "#ffffff", 0]]);
  partes.push(`<rect x="70" y="${f(hor - 60)}" width="260" height="${f(alto - hor + 60)}" fill="${velo}"/>`);
  // 6. motitas de textura en el suelo
  let tex = "";
  for (let i = 0; i < 70; i++) tex += `<circle cx="${f(c.rng() * 400)}" cy="${f(hor + 20 + c.rng() * (alto - hor - 20))}" r="${f(0.8 + c.rng() * 1.6)}" fill="${z.tex || oscuro(P.s2, 0.25)}" opacity="${f(0.1 + c.rng() * 0.16)}"/>`;
  partes.push(tex);
  // 7. bordes: arriba y abajo se funden en crema
  const ft = z.fadeTop || 80;
  const arriba = K.degradado(c, 0, 0, 0, ft, [[0, CREMA, 1], [1, CREMA, 0]]);
  const abajo = K.degradado(c, 0, alto - 100, 0, alto, [[0, CREMA, 0], [1, CREMA, 1]]);
  partes.push(`<rect width="400" height="${ft}" fill="${arriba}"/><rect y="${alto - 100}" width="400" height="100" fill="${abajo}"/>`);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="${alto}" viewBox="0 0 400 ${alto}">\n<title>${z.nombre}</title>\n<defs>${c.defs.join("")}</defs>\n${partes.join("\n")}\n</svg>\n`;
}

// ---------- Las 27 zonas ----------
const pasto = (c) => ["pasto", c ? "L" : "L", 0.7, 1, 0, {}];
const ZONAS = require("./zonas.js")(K, PIEZAS, { pasto });

const solo = (() => { const i = process.argv.indexOf("--solo"); return i >= 0 ? process.argv[i + 1].split(",").map(Number) : null; })();
const salida = path.join(raiz, "assets", "mapa");
fs.mkdirSync(salida, { recursive: true });
if (ZONAS.length !== ALTOS.length) throw new Error("hay " + ZONAS.length + " escenas y " + ALTOS.length + " zonas en el mapa");
const nombres = [];
ZONAS.forEach((z, i) => {
  const n = i + 1;
  nombres.push(z.nombre);
  if (solo && !solo.includes(n)) return;
  const svg = componer(n, z, ALTOS[i]);
  fs.writeFileSync(path.join(salida, "zona-" + String(n).padStart(2, "0") + ".svg"), svg);
});
console.log("fondos generados:", solo ? solo.join(",") : "los " + ZONAS.length, "| peso total:", Math.round(fs.readdirSync(salida).filter((a) => a.endsWith(".svg")).reduce((s, a) => s + fs.statSync(path.join(salida, a)).size, 0) / 1024) + " KB");

// ---------- Conectar con data/mapa.data.js ----------
if (process.argv.includes("--conectar")) {
  const archivo = path.join(raiz, "data", "mapa.data.js");
  const crudo = fs.readFileSync(archivo, "utf8");
  const crlf = crudo.includes("\r\n");
  let s = crudo.split("\r\n").join("\n");
  const ini = s.indexOf("  zonas: ["), fin = s.indexOf("\n  ],", ini);
  if (ini < 0 || fin < 0) throw new Error("no encuentro las zonas en data/mapa.data.js");
  const lineas = geo.zonas.map((zz, i) => `    { nombre: ${JSON.stringify(nombres[i])}, niveles: ${zz.niveles}, fondo: "assets/mapa/zona-${String(i + 1).padStart(2, "0")}.svg?v=${VERSION_ARTE}", decoraciones: [] },`);
  s = s.slice(0, ini) + "  zonas: [\n" + lineas.join("\n") + s.slice(fin);
  fs.writeFileSync(archivo, crlf ? s.split("\n").join("\r\n") : s);
  console.log("conectado en data/mapa.data.js");
}
