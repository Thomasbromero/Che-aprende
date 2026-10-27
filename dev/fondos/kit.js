/* Piezas para dibujar los fondos del mapa de Aventura (ilustraciones vectoriales, estilo plano con degradados suaves).
   Cada pieza devuelve texto SVG en coordenadas locales: (0,0) es el pie de la pieza y se dibuja hacia arriba (y negativo).
   Se ubican con at(x, y, escala, espejado, pieza). Los colores se pueden pasar por el objeto `c`. */
"use strict";

const f = (n) => Math.round(n * 10) / 10;
function rngDe(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const hex = (c) => { c = c.replace("#", ""); return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)]; };
function mezcla(a, b, t) { const A = hex(a), B = hex(b); return "#" + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, "0")).join(""); }
const claro = (c, t) => mezcla(c, "#ffffff", t);
const oscuro = (c, t) => mezcla(c, "#1d2a44", t);
const NAVY = "#1d2a44", CREMA = "#fff4d6", CIAN = "#1fb6b5", ROSA = "#d4cdce";

// ---------- Contexto de un fondo: guarda los degradados y reparte los ids ----------
function contexto(numero, ancho, alto, semilla) {
  return { p: "z" + numero + "-", n: 0, defs: [], W: ancho, H: alto, rng: rngDe(semilla) };
}
function degradado(ctx, x1, y1, x2, y2, stops) {
  const id = ctx.p + "g" + ctx.n++;
  ctx.defs.push(`<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" gradientUnits="userSpaceOnUse">` +
    stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ""}/>`).join("") + `</linearGradient>`);
  return `url(#${id})`;
}
function radial(ctx, cx, cy, r, stops) {
  const id = ctx.p + "g" + ctx.n++;
  ctx.defs.push(`<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}" gradientUnits="userSpaceOnUse">` +
    stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ""}/>`).join("") + `</radialGradient>`);
  return `url(#${id})`;
}
function recorte(ctx, formaSvg) {
  const id = ctx.p + "c" + ctx.n++;
  ctx.defs.push(`<clipPath id="${id}">${formaSvg}</clipPath>`);
  return `url(#${id})`;
}

const at = (x, y, s, espejo, inner, op) =>
  `<g transform="translate(${f(x)} ${f(y)}) scale(${espejo ? -s : s} ${s})"${op !== undefined && op < 1 ? ` opacity="${op}"` : ""}>${inner}</g>`;
const sombraSuelo = (rx, o) => `<ellipse cx="0" cy="1.5" rx="${rx}" ry="${f(rx * 0.17)}" fill="${NAVY}" fill-opacity="${o === undefined ? 0.13 : o}"/>`;

// ---------- Terreno: crestas, montañas, agua ----------
function crestaPuntos(rng, y, amp, pasos, x0, x1) {
  const fase = rng() * 6.28, pts = [];
  for (let i = 0; i <= pasos; i++) {
    const t = i / pasos;
    pts.push([x0 + (x1 - x0) * t, y + amp * (Math.sin(t * 6.28 * 1.25 + fase) * 0.6 + Math.sin(t * 6.28 * 3.3 + fase * 2) * 0.28 + (rng() - 0.5) * 0.3)]);
  }
  return pts;
}
function trazoSuave(pts) {
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
    d += ` Q${f(pts[i][0])} ${f(pts[i][1])} ${f(mx)} ${f(my)}`;
  }
  const l = pts[pts.length - 1];
  return d + ` L${f(l[0])} ${f(l[1])}`;
}
// Colina larga que ocupa todo el ancho: del contorno hacia abajo, con degradado que se aclara hacia abajo
function colina(ctx, y, amp, color, opts) {
  const o = Object.assign({ pasos: 8, hasta: ctx.H, op: 1, abajo: null }, opts || {});
  const pts = crestaPuntos(ctx.rng, y, amp, o.pasos, -30, ctx.W + 30);
  const d = trazoSuave(pts) + ` L${ctx.W + 30} ${o.hasta} L-30 ${o.hasta}Z`;
  const fill = degradado(ctx, 0, y - amp, 0, o.hasta, [[0, color], [1, o.abajo || claro(color, 0.35)]]);
  return `<path d="${d}" fill="${fill}"${o.op < 1 ? ` opacity="${o.op}"` : ""}/>`;
}
function pico(ctx, x, yBase, w, h, color, nieve, opts) {
  const o = Object.assign({ cima: 0, sombra: 0.22 }, opts || {});
  const ax = x + o.cima * w, ay = yBase - h;
  const izq = color, der = oscuro(color, o.sombra);
  let s = `<polygon points="${f(x - w / 2)},${f(yBase)} ${f(ax)},${f(ay)} ${f(x + w / 2)},${f(yBase)}" fill="${izq}"/>`;
  s += `<polygon points="${f(ax)},${f(ay)} ${f(x + w / 2)},${f(yBase)} ${f(x + w * 0.08)},${f(yBase)} ${f(ax - w * 0.02)},${f(ay + h * 0.45)}" fill="${der}" opacity="0.85"/>`;
  if (nieve) {
    const t = nieve === true ? 0.3 : nieve;
    const d = h * t, ex = w * t * 0.5;
    s += `<polygon points="${f(ax)},${f(ay)} ${f(ax - ex)},${f(ay + d)} ${f(ax - ex * 0.55)},${f(ay + d * 0.78)} ${f(ax - ex * 0.15)},${f(ay + d * 1.08)} ${f(ax + ex * 0.3)},${f(ay + d * 0.8)} ${f(ax + ex * 0.65)},${f(ay + d * 1.02)} ${f(ax + ex)},${f(ay + d)}" fill="#ffffff" opacity="0.96"/>`;
    s += `<polygon points="${f(ax)},${f(ay)} ${f(ax + ex)},${f(ay + d)} ${f(ax + ex * 0.65)},${f(ay + d * 1.02)} ${f(ax + ex * 0.3)},${f(ay + d * 0.8)} ${f(ax)},${f(ay + d * 0.5)}" fill="#dfe9f2" opacity="0.9"/>`;
  }
  return s;
}
function agua(ctx, y, h, c1, c2, opts) {
  const o = Object.assign({ olas: 7, claroOla: 0.5 }, opts || {});
  const fill = degradado(ctx, 0, y, 0, y + h, [[0, c1], [1, c2]]);
  let s = `<rect x="-5" y="${f(y)}" width="${ctx.W + 10}" height="${f(h)}" fill="${fill}"/>`;
  for (let i = 0; i < o.olas; i++) {
    const oy = y + 10 + ctx.rng() * (h - 20), ox = ctx.rng() * (ctx.W - 40), l = 18 + ctx.rng() * 34;
    s += `<path d="M${f(ox)} ${f(oy)} q${f(l / 4)} -4 ${f(l / 2)} 0 t${f(l / 2)} 0" fill="none" stroke="#ffffff" stroke-opacity="${o.claroOla * 0.6}" stroke-width="1.6" stroke-linecap="round"/>`;
  }
  return s;
}

// ---------- Cielo ----------
function nube(x, y, s, op, color) {
  const c = color || "#ffffff";
  return at(x, y, s, false, `<ellipse cx="2" cy="5" rx="27" ry="7" fill="#8fa6bd" opacity="0.28"/><g fill="${c}"><ellipse cx="0" cy="0" rx="26" ry="9"/><circle cx="-10" cy="-7" r="10"/><circle cx="6" cy="-11" r="13"/><circle cx="19" cy="-4" r="8"/></g><ellipse cx="-4" cy="-13" rx="9" ry="4" fill="#ffffff" opacity="0.7"/>`, op === undefined ? 0.92 : op);
}
function sol(ctx, x, y, r, c) {
  const col = c || "#ffd77a";
  const g = radial(ctx, x, y, r * 3.4, [[0, col, 0.55], [0.35, col, 0.18], [1, col, 0]]);
  let rayos = "";
  for (let i = 0; i < 16; i++) { const a = (i * 22.5) * Math.PI / 180, r1 = r * 1.35, r2 = r * (i % 2 ? 1.75 : 2.1); rayos += `<line x1="${f(x + Math.cos(a) * r1)}" y1="${f(y + Math.sin(a) * r1)}" x2="${f(x + Math.cos(a) * r2)}" y2="${f(y + Math.sin(a) * r2)}" stroke="${col}" stroke-width="${i % 2 ? 2 : 3}" stroke-linecap="round" opacity="0.4"/>`; }
  return `<circle cx="${x}" cy="${y}" r="${f(r * 3.4)}" fill="${g}"/>${rayos}<circle cx="${x}" cy="${y}" r="${r}" fill="${claro(col, 0.3)}"/><circle cx="${x}" cy="${y}" r="${f(r * 0.78)}" fill="${claro(col, 0.6)}"/>`;
}
function luna(ctx, x, y, r) {
  const g = radial(ctx, x, y, r * 3, [[0, "#ffffff", 0.45], [1, "#ffffff", 0]]);
  return `<circle cx="${x}" cy="${y}" r="${f(r * 3)}" fill="${g}"/><circle cx="${x}" cy="${y}" r="${r}" fill="#fff8e1"/><circle cx="${x - r * 0.3}" cy="${y - r * 0.2}" r="${f(r * 0.22)}" fill="#efe3c0"/><circle cx="${x + r * 0.28}" cy="${y + r * 0.3}" r="${f(r * 0.16)}" fill="#efe3c0"/>`;
}
function estrellas(ctx, n, yMax) {
  let s = "";
  for (let i = 0; i < n; i++) {
    const x = ctx.rng() * ctx.W, y = 20 + ctx.rng() * yMax, r = 0.7 + ctx.rng() * 1.5;
    s += `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r)}" fill="#ffffff" opacity="${f(0.45 + ctx.rng() * 0.5)}"/>`;
  }
  return s;
}
function pajaros(x, y, s, n, color) {
  let o = "";
  for (let i = 0; i < n; i++) {
    const dx = i * 16 + (i % 2) * 5, dy = -((i * 7) % 12);
    o += `<path d="M${dx} ${dy} q4 -5 8 0 q4 -5 8 0" fill="none" stroke="${color || NAVY}" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>`;
  }
  return at(x, y, s, false, o);
}
function arcoiris(x, y, r) {
  const cols = ["#ff8a80", "#ffb74d", "#fff176", "#81c784", "#4fc3f7", "#9575cd"];
  return cols.map((c, i) => `<path d="M${f(x - r + i * 4)} ${y} A${f(r - i * 4)} ${f(r - i * 4)} 0 0 1 ${f(x + r - i * 4)} ${y}" fill="none" stroke="${c}" stroke-width="4" opacity="0.5"/>`).join("");
}
function aurora(ctx, y, alto) {
  let s = "";
  const cols = [["#7ef0c9", 0.38], ["#7ad7f0", 0.3], ["#b39bf5", 0.28]];
  cols.forEach(([c, o], i) => {
    const g = degradado(ctx, 0, y - alto, 0, y + alto, [[0, c, 0], [0.45, c, o], [1, c, 0]]);
    const y0 = y + i * 26;
    s += `<path d="M-10 ${y0} C60 ${y0 - alto} 120 ${y0 + alto * 0.5} 200 ${y0 - alto * 0.3} S340 ${y0 + alto * 0.4} 410 ${y0 - alto * 0.6} L410 ${y0 + alto * 0.9} C340 ${y0 + alto * 0.5} 260 ${y0 + alto * 1.2} 200 ${y0 + alto * 0.5} S60 ${y0 + alto * 1.1} -10 ${y0 + alto * 0.8}Z" fill="${g}"/>`;
  });
  return s;
}

// ---------- Árboles y plantas ----------
function ombu(c) {
  const v = c && c.verde || "#6f9a5b", t = c && c.tronco || "#8a6a4a";
  return sombraSuelo(30) + `<path d="M-12 0 C-14 -14 -7 -22 -5 -36 L7 -36 C9 -22 16 -14 14 0 Z" fill="${t}"/><path d="M-3 -36 L7 -36 C9 -22 16 -14 14 0 L6 0 C8 -14 3 -24 -3 -36Z" fill="${oscuro(t, 0.2)}"/>` +
    `<g fill="${oscuro(v, 0.12)}"><circle cx="-26" cy="-48" r="21"/><circle cx="26" cy="-48" r="21"/><circle cx="0" cy="-64" r="27"/></g><g fill="${v}"><circle cx="-14" cy="-56" r="20"/><circle cx="16" cy="-58" r="20"/><circle cx="0" cy="-72" r="20"/></g><g fill="${claro(v, 0.25)}"><circle cx="-8" cy="-76" r="11"/><circle cx="-24" cy="-58" r="8"/></g>`;
}
function arbolRedondo(c) {
  const v = c && c.verde || "#5f9a62", t = c && c.tronco || "#7a5a40", r = c && c.r || 18;
  return sombraSuelo(r * 1.1) + `<path d="M-3 0 L-2 -${r + 4} L2 -${r + 4} L3 0Z" fill="${t}"/><circle cx="0" cy="-${r + 12}" r="${r}" fill="${oscuro(v, 0.15)}"/><circle cx="-${f(r * 0.3)}" cy="-${r + 16}" r="${f(r * 0.85)}" fill="${v}"/><circle cx="-${f(r * 0.45)}" cy="-${r + 20}" r="${f(r * 0.4)}" fill="${claro(v, 0.25)}"/>`;
}
function abeto(c) {
  const v = c && c.verde || "#3f7f69", nv = c && c.nieve;
  let s = sombraSuelo(18) + `<rect x="-3" y="-10" width="6" height="10" fill="#6b4f3a"/>`;
  [[-8, 26, 34], [-26, 21, 28], [-42, 15, 22]].forEach(([y, w, h], i) => {
    s += `<polygon points="${-w},${y} 0,${y - h} ${w},${y}" fill="${i % 2 ? oscuro(v, 0.12) : v}"/><polygon points="0,${y - h} ${w},${y} ${f(w * 0.1)},${y}" fill="${oscuro(v, 0.25)}" opacity="0.6"/>`;
    if (nv) s += `<polygon points="0,${y - h} ${f(-w * 0.45)},${f(y - h * 0.55)} ${f(-w * 0.15)},${f(y - h * 0.62)} ${f(w * 0.1)},${f(y - h * 0.5)} ${f(w * 0.45)},${f(y - h * 0.55)}" fill="#fff" opacity="0.92"/>`;
  });
  return s;
}
function palmera(c) {
  const v = c && c.verde || "#4f9a63", t = c && c.tronco || "#9a7b57";
  let s = sombraSuelo(18) + `<path d="M-3 0 C-2 -30 4 -50 2 -76 L6 -76 C8 -50 3 -28 4 0Z" fill="${t}"/>`;
  for (let i = 0; i < 7; i++) {
    const a = -150 + i * 50;
    s += `<g transform="translate(4 -76) rotate(${a})"><path d="M0 0 Q24 -16 50 -2 Q26 -6 0 0Z" fill="${i % 2 ? v : oscuro(v, 0.14)}"/></g>`;
  }
  s += `<circle cx="4" cy="-74" r="3.5" fill="${oscuro(t, 0.3)}"/>`;
  return s;
}
function sauce(c) {
  const v = c && c.verde || "#86ab6b";
  let s = sombraSuelo(26) + `<path d="M-5 0 C-4 -16 -2 -26 0 -40 L5 -40 C4 -26 6 -14 7 0Z" fill="#7d6247"/><ellipse cx="2" cy="-46" rx="30" ry="17" fill="${v}"/>`;
  for (let i = 0; i < 11; i++) {
    const x = -26 + i * 5.6, l = 22 + (i * 7) % 16;
    s += `<path d="M${x} -42 q${i % 2 ? 3 : -3} ${f(l / 2)} 0 ${l}" fill="none" stroke="${i % 2 ? oscuro(v, 0.1) : claro(v, 0.12)}" stroke-width="2.4" stroke-linecap="round"/>`;
  }
  return s;
}
function paloBorracho(c) {
  const fl = c && c.flor || "#f29bc3";
  return sombraSuelo(26) + `<path d="M-6 0 C-17 -22 -11 -40 -4 -54 L5 -54 C11 -40 17 -22 6 0Z" fill="#a39a73"/><path d="M-4 -54 L5 -54 C11 -40 17 -22 6 0 L2 0 C10 -22 6 -40 -4 -54Z" fill="#8c845f"/>` +
    `<g fill="${oscuro(fl, 0.1)}"><circle cx="-18" cy="-62" r="14"/><circle cx="18" cy="-62" r="14"/></g><g fill="${fl}"><circle cx="0" cy="-72" r="18"/><circle cx="-10" cy="-62" r="13"/><circle cx="12" cy="-64" r="13"/></g><g fill="${claro(fl, 0.5)}"><circle cx="-6" cy="-78" r="6"/><circle cx="10" cy="-70" r="4"/></g>`;
}
function cardon(c) {
  const v = c && c.verde || "#6c9a6a";
  const col = `<rect x="-5.5" y="-70" width="11" height="70" rx="5.5" fill="${v}"/><rect x="0" y="-70" width="5.5" height="70" rx="2.7" fill="${oscuro(v, 0.18)}"/>`;
  const brazo = (sx) => `<path d="M${sx * 5} -34 q${sx * 16} 0 ${sx * 16} -16 l0 -14" fill="none" stroke="${v}" stroke-width="9" stroke-linecap="round"/>`;
  let ray = "";
  for (let i = 0; i < 9; i++) ray += `<line x1="-4" y1="${-8 - i * 7}" x2="4" y2="${-8 - i * 7}" stroke="${claro(v, 0.55)}" stroke-width="0.7" opacity="0.7"/>`;
  return sombraSuelo(16) + brazo(-1) + brazo(1) + col + ray;
}
function araucaria(c) {
  const v = c && c.verde || "#3f7a5c";
  let s = sombraSuelo(18) + `<path d="M-3 0 L-2 -52 L3 -52 L4 0Z" fill="#6b5240"/>`;
  [[-46, 34, 8], [-56, 28, 7], [-64, 20, 6]].forEach(([y, w, h], i) => {
    s += `<path d="M${-w} ${y} Q0 ${y - h * 2.6} ${w} ${y} Q0 ${y - h * 0.4} ${-w} ${y}Z" fill="${i % 2 ? oscuro(v, 0.12) : v}"/>`;
  });
  s += `<path d="M-22 -40 Q0 -56 22 -40" fill="none" stroke="${oscuro(v, 0.2)}" stroke-width="1.4"/>`;
  return s;
}
function caldenArbol(c) {
  const v = c && c.verde || "#8aa062";
  return sombraSuelo(22) + `<path d="M-3 0 C-8 -10 -3 -18 -8 -30 M3 0 C8 -10 3 -18 10 -30 M0 -6 L0 -26" fill="none" stroke="#6a5240" stroke-width="5" stroke-linecap="round"/><g fill="${oscuro(v, 0.12)}"><ellipse cx="-12" cy="-36" rx="17" ry="11"/><ellipse cx="14" cy="-36" rx="16" ry="11"/></g><g fill="${v}"><ellipse cx="0" cy="-42" rx="21" ry="13"/></g><ellipse cx="-6" cy="-47" rx="9" ry="5" fill="${claro(v, 0.3)}"/>`;
}
function quebracho(c) {
  const v = c && c.verde || "#6d7f4e";
  return sombraSuelo(24) + `<path d="M-6 0 C-6 -16 -12 -24 -10 -42 M6 0 C6 -16 12 -22 14 -40 M0 -4 C0 -18 -2 -28 2 -46" fill="none" stroke="#5c4636" stroke-width="6" stroke-linecap="round"/><g fill="${oscuro(v, 0.14)}"><circle cx="-14" cy="-50" r="12"/><circle cx="16" cy="-48" r="12"/></g><g fill="${v}"><circle cx="0" cy="-58" r="15"/><circle cx="-8" cy="-48" r="11"/></g>`;
}
function algodon() {
  let s = "";
  for (let i = 0; i < 4; i++) {
    const x = -15 + i * 10;
    s += `<path d="M${x} 0 L${x} -22" stroke="#6f8f55" stroke-width="2" /><circle cx="${x}" cy="-25" r="5.5" fill="#fff"/><circle cx="${x - 3}" cy="-21" r="3.5" fill="#f4f1ec"/><path d="M${x} -16 l-6 -5 M${x} -12 l6 -4" stroke="#6f8f55" stroke-width="1.6"/>`;
  }
  return sombraSuelo(18) + s;
}
function canaveral() {
  let s = "";
  for (let i = 0; i < 9; i++) {
    const x = -22 + i * 5.4, h = 44 + (i * 11) % 16;
    s += `<path d="M${x} 0 L${x + (i % 2 ? 2 : -2)} -${h}" stroke="${i % 2 ? "#86ad62" : "#6f9a55"}" stroke-width="2.2" stroke-linecap="round"/><path d="M${x + (i % 2 ? 2 : -2)} -${h} q10 -4 16 4 M${x + (i % 2 ? 2 : -2)} -${h} q-10 -4 -14 6" stroke="#9cbf70" stroke-width="1.6" fill="none"/>`;
  }
  return sombraSuelo(26) + s;
}
function limonero() {
  const v = "#6ea25a";
  return sombraSuelo(20) + `<path d="M-2 0 L-1.5 -16 L2 -16 L3 0Z" fill="#7a5a40"/><circle cx="0" cy="-26" r="17" fill="${oscuro(v, 0.14)}"/><circle cx="-3" cy="-29" r="14" fill="${v}"/><g fill="#ffd54f"><ellipse cx="-8" cy="-26" rx="2.6" ry="3.4"/><ellipse cx="6" cy="-32" rx="2.6" ry="3.4"/><ellipse cx="3" cy="-20" rx="2.6" ry="3.4"/><ellipse cx="-5" cy="-36" rx="2.6" ry="3.4"/></g>`;
}
function olivo() {
  const v = "#8da56a";
  return sombraSuelo(22) + `<path d="M-4 0 C-7 -10 -3 -16 -8 -24 M4 0 C7 -9 3 -15 9 -24" stroke="#756049" stroke-width="5" fill="none" stroke-linecap="round"/><g fill="${oscuro(v, 0.12)}"><circle cx="-10" cy="-32" r="13"/><circle cx="12" cy="-31" r="12"/></g><circle cx="0" cy="-38" r="15" fill="${v}"/><circle cx="-5" cy="-42" r="7" fill="${claro(v, 0.35)}"/>`;
}
function pasto(c, n) {
  const col = c || "#7ea560";
  let s = "";
  for (let i = 0; i < (n || 5); i++) {
    const x = -8 + i * 4;
    s += `<path d="M${x} 0 q${i % 2 ? 3 : -3} -8 ${i % 2 ? 6 : -6} -14" stroke="${i % 2 ? claro(col, 0.1) : col}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  }
  return s;
}
function hongo(c) { // formación de roca con forma de hongo (Valle de la Luna)
  const col = c || "#cfc3d6";
  return sombraSuelo(26) + `<path d="M-8 0 C-7 -14 -5 -22 -5 -30 L5 -30 C5 -22 7 -14 8 0Z" fill="${oscuro(col, 0.1)}"/><ellipse cx="0" cy="-34" rx="22" ry="11" fill="${col}"/><path d="M-22 -34 q22 12 44 0 q-4 8 -22 8 q-18 0 -22 -8Z" fill="${oscuro(col, 0.15)}"/>`;
}

// ---------- Construcciones ----------
function obelisco() {
  const b = "#f6efe3", s = oscuro(b, 0.16);
  return sombraSuelo(24) + `<rect x="-15" y="-7" width="30" height="7" rx="2" fill="${s}"/><polygon points="-8,-7 8,-7 5.5,-98 0,-116 -5.5,-98" fill="${b}"/><polygon points="0,-116 5.5,-98 8,-7 1,-7" fill="${s}"/><rect x="-1.5" y="-96" width="3" height="7" rx="1.3" fill="${oscuro(b, 0.45)}"/><rect x="-1.5" y="-76" width="3" height="3" fill="${oscuro(b, 0.35)}"/>`;
}
function ciudad(ctx, n, c) {
  const cols = c || ["#e6d9c6", "#d9c5b0", "#f0e4d2", "#cdbfae"];
  let s = "", x = -((n * 22) / 2);
  for (let i = 0; i < n; i++) {
    const w = 16 + ctx.rng() * 12, h = 30 + ctx.rng() * 58, col = cols[i % cols.length];
    s += `<rect x="${f(x)}" y="${-f(h)}" width="${f(w)}" height="${f(h)}" fill="${col}"/><rect x="${f(x + w * 0.62)}" y="${-f(h)}" width="${f(w * 0.38)}" height="${f(h)}" fill="${oscuro(col, 0.12)}"/>`;
    for (let yy = 8; yy < h - 6; yy += 9) for (let xx = 3; xx < w - 5; xx += 7) s += `<rect x="${f(x + xx)}" y="${-f(h) + yy}" width="3" height="4.5" rx="0.6" fill="#fff6dc" opacity="${ctx.rng() > 0.35 ? 0.85 : 0.35}"/>`;
    x += w + 3;
  }
  return s;
}
function colectivo(c) {
  const col = c || "#3b8fd0";
  return sombraSuelo(24) + `<rect x="-22" y="-21" width="44" height="18" rx="4" fill="${col}"/><rect x="-22" y="-10" width="44" height="3" fill="#fff"/><g fill="#eaf5fa"><rect x="-18" y="-19" width="8" height="7" rx="1.4"/><rect x="-8" y="-19" width="8" height="7" rx="1.4"/><rect x="2" y="-19" width="8" height="7" rx="1.4"/><rect x="12" y="-19" width="7" height="7" rx="1.4"/></g><g fill="${NAVY}"><circle cx="-12" cy="-3" r="4"/><circle cx="12" cy="-3" r="4"/></g><g fill="#c9d5db"><circle cx="-12" cy="-3" r="1.7"/><circle cx="12" cy="-3" r="1.7"/></g>`;
}
function molino() {
  const g = "#b6b0a6";
  let s = sombraSuelo(14) + `<polygon points="-6,0 6,0 2.8,-52 -2.8,-52" fill="${g}"/><polygon points="0,0 6,0 2.8,-52 0,-52" fill="${oscuro(g, 0.2)}"/>`;
  s += `<path d="M-5 -10 L5 -22 M5 -10 L-5 -22 M-4 -26 L4 -38 M4 -26 L-4 -38" stroke="${oscuro(g, 0.3)}" stroke-width="1" fill="none"/><circle cx="0" cy="-55" r="3.4" fill="${oscuro(g, 0.35)}"/>`;
  for (let i = 0; i < 8; i++) s += `<g transform="translate(0 -55) rotate(${i * 45})"><path d="M-1.6 -3 L-3.2 -26 L3.2 -26 L1.6 -3Z" fill="${i % 2 ? "#dcd6cb" : "#c8c1b5"}"/></g>`;
  s += `<path d="M3 -55 L28 -56 L26 -48 L3 -52Z" fill="#cdc6b9"/>`;
  return s;
}
function vaca(c) {
  const mancha = c || "#6b4a3a";
  return sombraSuelo(22) + `<g fill="#f4efe6"><rect x="-16" y="-24" width="32" height="15" rx="7"/><rect x="-14" y="-10" width="4" height="10" rx="1.5"/><rect x="-6" y="-10" width="4" height="10" rx="1.5"/><rect x="6" y="-10" width="4" height="10" rx="1.5"/><rect x="12" y="-10" width="4" height="10" rx="1.5"/><rect x="-27" y="-27" width="14" height="12" rx="5"/></g><g fill="${mancha}"><ellipse cx="-4" cy="-19" rx="6" ry="4.5"/><ellipse cx="9" cy="-14" rx="4" ry="3"/><ellipse cx="-24" cy="-23" rx="3.5" ry="3"/><rect x="-26" y="-31" width="3" height="5" rx="1.4"/></g><path d="M16 -20 q8 2 6 12" stroke="${mancha}" stroke-width="1.6" fill="none"/><circle cx="-24.5" cy="-23" r="0.9" fill="${NAVY}"/><rect x="-29" y="-20" width="6" height="5" rx="2" fill="#f1c9c0"/>`;
}
function rancho() {
  return sombraSuelo(26) + `<rect x="-20" y="-20" width="40" height="20" fill="#d9b48f"/><rect x="2" y="-20" width="18" height="20" fill="#c89e78"/><polygon points="-26,-20 0,-40 26,-20" fill="#a98152"/><polygon points="0,-40 26,-20 6,-20" fill="#93703f"/><rect x="-6" y="-13" width="9" height="13" fill="#6e5236"/><rect x="9" y="-14" width="7" height="7" fill="#fdf0c8"/>`;
}
function sombrilla(c) {
  const a = c && c[0] || "#ff8a80", b = c && c[1] || "#fff4d6";
  return sombraSuelo(16, 0.1) + `<line x1="0" y1="0" x2="0" y2="-36" stroke="#8a6a4a" stroke-width="2"/><path d="M-22 -36 Q0 -62 22 -36Z" fill="${a}"/><path d="M-11 -36 Q-9 -56 0 -52 Q9 -56 11 -36Z" fill="${b}"/><path d="M-22 -36 q5.5 5 11 0 q5.5 5 11 0 q5.5 5 11 0 q5.5 5 11 0" fill="${a}"/>`;
}
function loboMarino() {
  const c = "#7a5a46";
  return sombraSuelo(24) + `<path d="M-24 0 C-24 -8 -16 -17 -8 -19 C-7 -29 1 -38 9 -36 C14 -35 16 -30 14 -25 C21 -21 25 -11 23 0 Z" fill="${c}"/><path d="M9 -36 C14 -35 16 -30 14 -25 C21 -21 25 -11 23 0 L16 0 C18 -10 14 -22 9 -36Z" fill="${oscuro(c, 0.25)}" opacity="0.7"/><path d="M-24 0 q-9 2 -12 -4 q4 -3 12 -2Z" fill="${oscuro(c, 0.15)}"/><circle cx="8" cy="-31" r="1.2" fill="#10151f"/><circle cx="14" cy="-27" r="1.4" fill="#10151f"/><path d="M13 -26 l8 -1 M13 -24 l8 1" stroke="#e7dccd" stroke-width="0.6"/>`;
}
function faro(c) {
  const rojo = c || "#e0524a";
  const ancho = (y) => 9 - 3.2 * (-y / 74);
  const banda = (y1, y2, col) => `<polygon points="${-f(ancho(y1))},${y1} ${f(ancho(y1))},${y1} ${f(ancho(y2))},${y2} ${-f(ancho(y2))},${y2}" fill="${col}"/>`;
  return sombraSuelo(18) + `<polygon points="-9,0 9,0 5.8,-74 -5.8,-74" fill="#fbf6ec"/>` + banda(-18, -34, rojo) + banda(-50, -66, rojo) +
    `<polygon points="0,0 9,0 5.8,-74 0,-74" fill="#1d2a44" opacity="0.12"/><rect x="-7.5" y="-82" width="15" height="9" rx="1.5" fill="${NAVY}"/><rect x="-5" y="-80.5" width="10" height="6" fill="#ffd77a"/><polygon points="-9,-82 9,-82 0,-95" fill="${rojo}"/><rect x="-10" y="-74" width="20" height="3" fill="${oscuro("#fbf6ec", 0.2)}"/>` +
    `<polygon points="0,-77 60,-92 60,-62" fill="#ffe9a8" opacity="0.28"/><polygon points="0,-77 -60,-92 -60,-62" fill="#ffe9a8" opacity="0.28"/>`;
}
function bote(c) {
  const col = c || "#c9704a";
  return `<ellipse cx="0" cy="2" rx="22" ry="3.6" fill="#fff" opacity="0.35"/><path d="M-20 -6 Q0 8 20 -6 L15 -13 L-15 -13Z" fill="${col}"/><path d="M-20 -6 Q0 8 20 -6 L17 -8 Q0 4 -17 -8Z" fill="${oscuro(col, 0.25)}"/><line x1="2" y1="-13" x2="2" y2="-38" stroke="#6b5240" stroke-width="1.6"/><path d="M3 -36 L3 -16 L18 -16Z" fill="#fff8ea"/>`;
}
function palafito() {
  return `<g stroke="#7a5a40" stroke-width="2.2"><line x1="-14" y1="-12" x2="-14" y2="2"/><line x1="-5" y1="-12" x2="-5" y2="2"/><line x1="5" y1="-12" x2="5" y2="2"/><line x1="14" y1="-12" x2="14" y2="2"/></g><rect x="-20" y="-30" width="40" height="18" fill="#e0b98c"/><rect x="2" y="-30" width="18" height="18" fill="#cfa174"/><polygon points="-24,-30 0,-46 24,-30" fill="#b9573f"/><polygon points="0,-46 24,-30 6,-30" fill="#a24a35"/><rect x="-14" y="-25" width="7" height="8" fill="#fdf0c8"/><rect x="-3" y="-26" width="7" height="14" fill="#6e5236"/>`;
}
function monumentoBandera() {
  const h = "#efe7da";
  return sombraSuelo(34) + `<path d="M-8 -34 Q-38 -26 -44 0 L-8 0Z" fill="${h}"/><path d="M-44 0 Q-38 -26 -8 -34 L-8 -28 Q-34 -20 -38 0Z" fill="${oscuro(h, 0.18)}"/><rect x="-8" y="-104" width="16" height="104" fill="${h}"/><rect x="0" y="-104" width="8" height="104" fill="${oscuro(h, 0.14)}"/><polygon points="-8,-104 8,-104 3,-116 -3,-116" fill="${oscuro(h, 0.1)}"/><rect x="-2" y="-130" width="1.6" height="16" fill="#6b5240"/><path d="M-0.4 -130 h14 v9 h-14z" fill="#74b8e6"/><rect x="-0.4" y="-127" width="14" height="3" fill="#fff"/><path d="M8 -44 L34 -30 L34 0 L8 0Z" fill="${oscuro(h, 0.05)}"/><g stroke="${oscuro(h, 0.3)}" stroke-width="0.8"><line x1="14" y1="-40" x2="14" y2="0"/><line x1="20" y1="-37" x2="20" y2="0"/><line x1="27" y1="-33" x2="27" y2="0"/></g>`;
}
function casaHistorica(c) {
  const col = c || "#f6efe3";
  return sombraSuelo(34) + `<rect x="-32" y="-30" width="64" height="30" fill="${col}"/><rect x="8" y="-30" width="24" height="30" fill="${oscuro(col, 0.1)}"/><polygon points="-36,-30 0,-46 36,-30" fill="${oscuro(col, 0.05)}"/><polygon points="0,-46 36,-30 8,-30" fill="${oscuro(col, 0.14)}"/><g fill="#8a6f55"><path d="M-24 0 v-14 a5 5 0 0 1 10 0 v14z"/><path d="M-5 0 v-14 a5 5 0 0 1 10 0 v14z"/><path d="M14 0 v-14 a5 5 0 0 1 10 0 v14z"/></g><g fill="#cdbfa8"><rect x="-26" y="-4" width="14" height="2"/><rect x="-7" y="-4" width="14" height="2"/><rect x="12" y="-4" width="14" height="2"/></g><circle cx="0" cy="-36" r="3.4" fill="${oscuro(col, 0.22)}"/>`;
}
function iglesiaAdobe() {
  const c = "#e2b690";
  return sombraSuelo(28) + `<rect x="-22" y="-28" width="44" height="28" fill="${c}"/><rect x="2" y="-28" width="20" height="28" fill="${oscuro(c, 0.14)}"/><rect x="-18" y="-50" width="14" height="22" fill="${c}"/><rect x="-18" y="-50" width="14" height="22" fill="${oscuro(c, 0.06)}"/><polygon points="-20,-50 -11,-62 -2,-50" fill="${oscuro(c, 0.22)}"/><rect x="-12.4" y="-72" width="1.8" height="10" fill="#6b5240"/><rect x="-15" y="-69" width="7" height="1.8" fill="#6b5240"/><path d="M-14 -38 a3 3 0 0 1 6 0 v5 h-6z" fill="#6e5236"/><path d="M4 0 v-14 a5 5 0 0 1 10 0 v14z" fill="#7a5a40"/>`;
}
function cabana() {
  return sombraSuelo(30) + `<rect x="-26" y="-22" width="52" height="22" fill="#b6845a"/><g stroke="${oscuro("#b6845a", 0.25)}" stroke-width="1.4"><line x1="-26" y1="-16" x2="26" y2="-16"/><line x1="-26" y1="-10" x2="26" y2="-10"/><line x1="-26" y1="-4" x2="26" y2="-4"/></g><polygon points="-32,-22 0,-44 32,-22" fill="#7a4f3a"/><polygon points="-32,-22 0,-44 8,-39 -26,-22" fill="#ffffff" opacity="0.92"/><polygon points="0,-44 32,-22 24,-22 4,-38" fill="#ffffff" opacity="0.85"/><rect x="10" y="-52" width="7" height="14" fill="#8e6d52"/><rect x="-6" y="-14" width="9" height="14" fill="#5d3f2e"/><rect x="9" y="-16" width="9" height="8" fill="#ffe9a8"/>`;
}
function baseAntartica() {
  return sombraSuelo(26) + `<rect x="-22" y="-18" width="44" height="18" rx="2" fill="#e0524a"/><rect x="2" y="-18" width="20" height="18" fill="${oscuro("#e0524a", 0.18)}"/><path d="M-24 -18 Q0 -34 24 -18Z" fill="#cf463f"/><rect x="-14" y="-13" width="8" height="7" fill="#e6f6fb"/><rect x="-2" y="-13" width="8" height="7" fill="#e6f6fb"/><rect x="10" y="-12" width="7" height="12" fill="#5b2f2a"/><line x1="-16" y1="-26" x2="-16" y2="-48" stroke="#6b5240" stroke-width="1.6"/><path d="M-15 -48 h14 v9 h-14z" fill="#74b8e6"/><rect x="-15" y="-45" width="14" height="3" fill="#fff"/>`;
}
function viaducto() {
  let s = `<rect x="-52" y="-34" width="104" height="6" fill="#c9bfae"/>`;
  for (let i = 0; i < 4; i++) s += `<path d="M${-46 + i * 26} 0 v-20 a13 13 0 0 1 26 0 v20z" fill="${i % 2 ? "#d8cdbb" : "#cbbfab"}"/>`;
  s += `<rect x="-52" y="-28" width="104" height="4" fill="${oscuro("#c9bfae", 0.18)}"/>`;
  s += `<rect x="-34" y="-46" width="46" height="12" rx="3" fill="#d85a5a"/><rect x="-30" y="-44" width="6" height="6" fill="#eaf5fa"/><rect x="-21" y="-44" width="6" height="6" fill="#eaf5fa"/><rect x="-12" y="-44" width="6" height="6" fill="#eaf5fa"/><rect x="-3" y="-44" width="6" height="6" fill="#eaf5fa"/><rect x="14" y="-44" width="26" height="10" rx="2" fill="#b94b4b"/>`;
  return s;
}
function torreRoca(ctx, col, w, h) { // torre de roca con estratos (Talampaya)
  let s = `<path d="M${-w / 2} 0 L${-w / 2 + 3} ${-h} Q0 ${-h - 8} ${w / 2 - 3} ${-h} L${w / 2} 0Z" fill="${col}"/><path d="M${w * 0.08} ${-h - 4} Q${w / 2 - 3} ${-h} ${w / 2 - 3} ${-h} L${w / 2} 0 L${w * 0.12} 0Z" fill="${oscuro(col, 0.22)}" opacity="0.8"/>`;
  for (let i = 1; i < 6; i++) s += `<line x1="${-w / 2 + 2}" y1="${-h * i / 6}" x2="${w / 2 - 2}" y2="${-h * i / 6 - 1}" stroke="${oscuro(col, 0.2)}" stroke-width="1.2" opacity="0.55"/>`;
  return s;
}


function farola() {
  return sombraSuelo(10, 0.1) + `<rect x="-2" y="-46" width="4" height="46" rx="1.5" fill="#3a4258"/><path d="M-1.5 -46 q-12 -4 -14 6" stroke="#3a4258" stroke-width="2.6" fill="none" stroke-linecap="round"/><ellipse cx="-16" cy="-38" rx="5.5" ry="3.6" fill="#ffe9a8"/><circle cx="-16" cy="-38" r="11" fill="#ffe9a8" opacity="0.22"/>`;
}
function rocas(c) {
  const col = c || "#a8a8ae";
  return sombraSuelo(26) + `<ellipse cx="-12" cy="-10" rx="15" ry="11" fill="${col}"/><ellipse cx="9" cy="-8" rx="13" ry="9" fill="${oscuro(col, 0.12)}"/><ellipse cx="-14" cy="-14" rx="8" ry="4.5" fill="${claro(col, 0.35)}"/><ellipse cx="22" cy="-5" rx="9" ry="6" fill="${col}"/>`;
}

// ---------- Animales ----------
function llama(c) {
  const col = c && c.cuerpo || "#f3ead9", man = c && c.manchas || "#a98a66";
  return sombraSuelo(18) + `<g fill="${col}"><ellipse cx="0" cy="-18" rx="15" ry="9"/><rect x="-11" y="-14" width="3.4" height="14" rx="1.5"/><rect x="-4" y="-14" width="3.4" height="14" rx="1.5"/><rect x="5" y="-14" width="3.4" height="14" rx="1.5"/><rect x="11" y="-14" width="3.4" height="14" rx="1.5"/><path d="M9 -22 C13 -28 13 -38 16 -44 L22 -44 C20 -38 20 -28 17 -20Z"/><ellipse cx="22" cy="-47" rx="7" ry="4.4"/></g><g fill="${man}"><ellipse cx="-4" cy="-21" rx="8" ry="4.5"/><path d="M19 -52 l2 -7 l3 7Z"/><path d="M23 -52 l3 -6 l1 7Z"/></g><circle cx="24" cy="-48" r="0.9" fill="${NAVY}"/><path d="M-15 -20 q-6 2 -5 7" stroke="${man}" stroke-width="2" fill="none"/>`;
}
function flamenco() {
  return `<g stroke="#e58fa9" stroke-width="1.6" fill="none"><line x1="-2" y1="0" x2="-1" y2="-22"/><line x1="3" y1="0" x2="2" y2="-20"/></g><ellipse cx="0" cy="-26" rx="12" ry="7" fill="#f4a6bd"/><path d="M-8 -30 q8 -6 16 -2" fill="none" stroke="#ffd0dc" stroke-width="2"/><path d="M8 -29 C16 -34 16 -48 10 -54" stroke="#f4a6bd" stroke-width="3.4" fill="none" stroke-linecap="round"/><circle cx="9" cy="-55" r="3.4" fill="#f4a6bd"/><path d="M11 -56 l7 3 l-6 2Z" fill="#2a2a34"/><path d="M-10 -26 q-5 -2 -9 3 q6 2 10 0Z" fill="#2a2a34" opacity="0.4"/>`;
}
function garza() {
  return `<g stroke="#e2a24a" stroke-width="1.4"><line x1="-2" y1="0" x2="-1" y2="-22"/><line x1="3" y1="0" x2="2" y2="-20"/></g><ellipse cx="0" cy="-26" rx="12" ry="6.5" fill="#fbfaf6"/><path d="M8 -29 C14 -36 12 -46 8 -52" stroke="#fbfaf6" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="8" cy="-53" r="3" fill="#fbfaf6"/><path d="M10 -54 l9 1 l-8 2Z" fill="#f2b84b"/><path d="M-10 -28 q-6 2 -8 8 q7 -1 10 -4Z" fill="#e9e6df"/>`;
}
function condor(c) {
  const col = c || "#2c3140";
  return `<path d="M0 0 C-10 -8 -24 -10 -40 -3 C-26 -1 -16 2 -9 6 C-5 8 -2 7 0 5 C2 7 5 8 9 6 C16 2 26 -1 40 -3 C24 -10 10 -8 0 0Z" fill="${col}"/><circle cx="0" cy="-1.5" r="3" fill="${col}"/><rect x="-3" y="1" width="6" height="2.4" rx="1.2" fill="#ffffff"/><path d="M2 -2 l4 1 l-3 1.5Z" fill="#d6b25a"/>`;
}
function pinguino(c) {
  const col = c && c.cuerpo || "#2b3040";
  return sombraSuelo(10) + `<ellipse cx="0" cy="-14" rx="9" ry="14" fill="${col}"/><ellipse cx="1.5" cy="-12" rx="5.6" ry="10.5" fill="#fbfaf6"/><circle cx="0" cy="-27" r="6.2" fill="${col}"/><path d="M3 -27 l7 1.2 l-6.6 2.2Z" fill="#f2a63b"/><circle cx="2" cy="-28" r="0.9" fill="#fff"/><path d="M-9 -16 q-5 4 -3 10 q3 -3 4 -6Z" fill="${col}"/><g fill="#f2a63b"><ellipse cx="-3" cy="0" rx="4" ry="1.6"/><ellipse cx="4" cy="0" rx="4" ry="1.6"/></g>`;
}
function ballena() {
  const c = "#3f5775";
  return `<path d="M-40 4 C-38 -14 -14 -24 8 -20 C22 -18 32 -10 38 -22 C40 -12 42 -4 36 0 C30 -4 24 -1 18 3 C6 8 -22 12 -40 4Z" fill="${c}"/><path d="M-40 4 C-22 12 6 8 18 3 C10 6 -22 6 -40 4Z" fill="#e6eef5"/><path d="M38 -22 C46 -28 52 -26 56 -30 C54 -22 50 -16 44 -14Z" fill="${c}"/><circle cx="-24" cy="-6" r="1.4" fill="#e6eef5"/><path d="M-6 -22 q-1 -10 -6 -14 M-6 -22 q1 -10 6 -14" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.8"/>`;
}
function yacare() {
  const c = "#587a58";
  let d = "";
  for (let i = 0; i < 8; i++) d += `<path d="M${-14 + i * 5} -8 l2 -3.4 l2 3.4Z" fill="${oscuro(c, 0.2)}"/>`;
  return `<path d="M-30 -2 C-26 -9 -4 -11 14 -8 L36 -9 C40 -9 40 -4 36 -4 C30 -2 26 0 14 1 C-4 3 -24 2 -30 -2Z" fill="${c}"/>${d}<circle cx="29" cy="-10" r="2" fill="${c}"/><circle cx="29" cy="-10.2" r="0.9" fill="#f2d065"/><path d="M-30 -2 q-8 -2 -12 2 q8 1 12 0Z" fill="${c}"/><path d="M26 -5 l1.4 2 l1.4 -2 l1.4 2 l1.4 -2" stroke="#fff" stroke-width="0.7" fill="none"/>`;
}
function carpincho() {
  const c = "#9b7048";
  return sombraSuelo(20) + `<path d="M-18 -4 C-20 -18 -6 -22 6 -20 C14 -19 20 -14 22 -9 C24 -4 22 0 20 0 L-14 0 C-17 0 -18 -2 -18 -4Z" fill="${c}"/><path d="M12 -19 C20 -18 24 -12 24 -6 L20 -6 C20 -12 16 -16 12 -19Z" fill="${oscuro(c, 0.2)}" opacity="0.7"/><rect x="-12" y="-6" width="4" height="6" rx="1.4" fill="${oscuro(c, 0.22)}"/><rect x="8" y="-6" width="4" height="6" rx="1.4" fill="${oscuro(c, 0.22)}"/><circle cx="21" cy="-12" r="1" fill="#10151f"/><ellipse cx="25" cy="-7" rx="1.6" ry="1" fill="#2a1d14"/>`;
}
function tucan() {
  return sombraSuelo(8, 0.08) + `<path d="M-3 0 q-2 -22 3 -28 q9 0 9 12 q0 9 -4 16Z" fill="#232733"/><circle cx="2" cy="-30" r="5.4" fill="#232733"/><ellipse cx="4" cy="-24" rx="4" ry="5" fill="#fbf2c8"/><path d="M5 -33 C14 -34 22 -30 24 -24 C16 -24 10 -26 6 -28Z" fill="#f29a3a"/><path d="M6 -30 C14 -31 20 -28 22 -25 C16 -26 10 -27 6 -28Z" fill="#ffd66b"/><circle cx="3.6" cy="-33" r="1" fill="#fff"/><path d="M-3 0 l-3 7 l5 -1Z" fill="#232733"/><line x1="-4" y1="-4" x2="-4" y2="8" stroke="#6a523c" stroke-width="2"/>`;
}
function dino() {
  const c = "#7aa38a";
  return sombraSuelo(30) + `<path d="M-30 -10 C-22 -22 -4 -24 8 -18 C14 -28 12 -42 12 -52 C12 -58 20 -60 22 -54 C23 -50 20 -48 19 -44 C19 -32 22 -22 22 -14 C24 -8 22 0 18 0 L14 0 L12 -8 C6 -6 -2 -6 -8 -8 L-10 0 L-16 0 L-18 -8 C-24 -4 -28 -2 -34 4 C-32 -2 -30 -6 -30 -10Z" fill="${c}"/><path d="M12 -18 C16 -24 18 -34 18 -42 L20 -44 C19 -32 22 -22 22 -14Z" fill="${oscuro(c, 0.22)}" opacity="0.6"/><circle cx="19" cy="-55" r="1" fill="#10151f"/>`;
}

// ---------- Terreno temático ----------
function cataratas(ctx, x, y, w, h, c) {
  const roca = c || "#5f8a6a";
  // muralla de roca con el borde de arriba irregular (como un anfiteatro)
  let s = `<path d="M${x - 14} ${y + h + 20} L${x - 14} ${y + 16} Q${x + w * 0.08} ${y - 8} ${x + w * 0.2} ${y + 10} Q${x + w * 0.36} ${y - 16} ${x + w * 0.52} ${y + 8} Q${x + w * 0.7} ${y - 12} ${x + w * 0.86} ${y + 12} Q${x + w + 4} ${y - 2} ${x + w + 14} ${y + 18} L${x + w + 14} ${y + h + 20}Z" fill="${roca}"/>`;
  s += `<path d="M${x - 14} ${y + 16} Q${x + w * 0.08} ${y - 8} ${x + w * 0.2} ${y + 10} Q${x + w * 0.36} ${y - 16} ${x + w * 0.52} ${y + 8} Q${x + w * 0.7} ${y - 12} ${x + w * 0.86} ${y + 12} Q${x + w + 4} ${y - 2} ${x + w + 14} ${y + 18} L${x + w + 14} ${y + 34} L${x - 14} ${y + 34}Z" fill="${claro(roca, 0.25)}" opacity="0.55"/>`;
  const n = 9;
  for (let i = 0; i < n; i++) {
    const cx = x + w * ((i + 0.5) / n) + (ctx.rng() - 0.5) * 12, top = y + 8 + ctx.rng() * 12, ww = 12 + ctx.rng() * 20, bot = y + h;
    const g = degradado(ctx, 0, top, 0, bot, [[0, "#ffffff", 0.97], [0.6, "#eaf7fc", 0.9], [1, "#cfeaf5", 0.85]]);
    const m1 = top + (bot - top) * 0.35, m2 = top + (bot - top) * 0.7, j = (ctx.rng() - 0.5) * 6;
    s += `<path d="M${f(cx - ww / 2)} ${f(top)} C${f(cx - ww / 2 - 2 + j)} ${f(m1)} ${f(cx - ww * 0.6)} ${f(m2)} ${f(cx - ww * 0.62)} ${f(bot)} L${f(cx + ww * 0.62)} ${f(bot)} C${f(cx + ww * 0.6)} ${f(m2)} ${f(cx + ww / 2 + 2 + j)} ${f(m1)} ${f(cx + ww / 2)} ${f(top)}Z" fill="${g}"/>`;
    s += `<line x1="${f(cx - ww * 0.12)}" y1="${f(top + 6)}" x2="${f(cx - ww * 0.14)}" y2="${f(bot - 6)}" stroke="#ffffff" stroke-width="1.6" opacity="0.7"/>`;
    if (i % 2 === 0) s += `<rect x="${f(cx - ww * 0.8)}" y="${f(m1 + ctx.rng() * 10)}" width="${f(ww * 1.6)}" height="3.4" rx="1.7" fill="#ffffff" opacity="0.85"/>`;
  }
  for (let i = 0; i < 5; i++) {
    const rx = x + w * (0.08 + ctx.rng() * 0.84), ry = y + h * (0.55 + ctx.rng() * 0.4);
    s += `<path d="M${f(rx - 18)} ${f(y + h + 8)} L${f(rx - 8)} ${f(ry)} L${f(rx + 6)} ${f(ry + 8)} L${f(rx + 20)} ${f(y + h + 8)}Z" fill="${oscuro(roca, 0.2)}" opacity="0.85"/>`;
  }
  const bruma = radial(ctx, x + w / 2, y + h, w * 0.75, [[0, "#ffffff", 0.95], [0.6, "#ffffff", 0.45], [1, "#ffffff", 0]]);
  s += `<ellipse cx="${x + w / 2}" cy="${y + h + 4}" rx="${f(w * 0.75)}" ry="${f(h * 0.3)}" fill="${bruma}"/>`;
  for (let i = 0; i < 12; i++) s += `<circle cx="${f(x + ctx.rng() * w)}" cy="${f(y + h - 4 + ctx.rng() * 10)}" r="${f(3 + ctx.rng() * 6)}" fill="#ffffff" opacity="0.75"/>`;
  return s;
}
function cerroSieteColores(ctx, x, yBase, w, h, colores) {
  const cols = colores || ["#e8b4a0", "#d98f7e", "#f0d6a0", "#b9cfa2", "#c9a4c0", "#e4a97a", "#9fc2cf", "#d9c0a0"];
  const forma = `<path d="M${x - w / 2} ${yBase} C${x - w * 0.35} ${yBase - h * 0.5} ${x - w * 0.15} ${yBase - h} ${x} ${yBase - h} C${x + w * 0.2} ${yBase - h} ${x + w * 0.4} ${yBase - h * 0.5} ${x + w / 2} ${yBase}Z"/>`;
  const cl = recorte(ctx, forma);
  let s = `<g clip-path="${cl}">`;
  const bandas = 8, bh = h / bandas;
  for (let i = 0; i < bandas; i++) s += `<path d="M${x - w} ${f(yBase - h + i * bh)} q${w / 2} ${i % 2 ? -6 : 6} ${w} 0 t${w} 0 V${f(yBase - h + (i + 1) * bh + 2)} H${x - w}Z" fill="${cols[i % cols.length]}"/>`;
  s += `<path d="M${x + w * 0.1} ${yBase - h} C${x + w * 0.4} ${yBase - h * 0.5} ${x + w / 2} ${yBase} ${x + w / 2} ${yBase} L${x + w * 0.05} ${yBase}Z" fill="${NAVY}" opacity="0.14"/></g>`;
  return s;
}
function volcan(ctx, x, yBase, w, h) {
  let s = pico(ctx, x, yBase, w, h, "#7c8aa3", 0.42, { sombra: 0.28 });
  s += `<ellipse cx="${x + w * 0.04}" cy="${yBase - h - 8}" rx="9" ry="5" fill="#ffffff" opacity="0.7"/><ellipse cx="${x + w * 0.1}" cy="${yBase - h - 18}" rx="12" ry="6" fill="#ffffff" opacity="0.5"/><ellipse cx="${x + w * 0.18}" cy="${yBase - h - 30}" rx="15" ry="7" fill="#ffffff" opacity="0.32"/>`;
  return s;
}
function vinedo(ctx, y0, y1, cx) {
  let s = "";
  for (let i = 0; i < 7; i++) {
    const t = i / 6, y = y0 + (y1 - y0) * t, w = 40 + t * 150;
    s += `<path d="M${f(cx - w)} ${f(y)} Q${cx} ${f(y - 6 - t * 6)} ${f(cx + w)} ${f(y)}" fill="none" stroke="${i % 2 ? "#7f9f5b" : "#6a8d4d"}" stroke-width="${f(3 + t * 5)}" stroke-linecap="round" opacity="0.8"/>`;
    if (i % 2 === 0) s += `<path d="M${f(cx - w)} ${f(y + 3 + t * 3)} Q${cx} ${f(y - 3)} ${f(cx + w)} ${f(y + 3 + t * 3)}" fill="none" stroke="#7b5a8a" stroke-width="${f(1.5 + t * 2)}" stroke-dasharray="1 5" stroke-linecap="round" opacity="0.7"/>`;
  }
  return s;
}
function laguna(ctx, cx, cy, rx, ry, c1, c2) {
  const g = degradado(ctx, 0, cy - ry, 0, cy + ry, [[0, c1], [1, c2]]);
  return `<ellipse cx="${cx}" cy="${f(cy + 3)}" rx="${f(rx + 5)}" ry="${f(ry + 3)}" fill="#ffffff" opacity="0.7"/><ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${g}"/><path d="M${cx - rx * 0.5} ${cy - ry * 0.2} q${rx * 0.2} -3 ${rx * 0.4} 0" stroke="#fff" stroke-opacity="0.6" stroke-width="1.4" fill="none"/>`;
}
function glaciar(ctx, x, yBase, w, h) {
  const g = degradado(ctx, 0, yBase - h, 0, yBase, [[0, "#f2fbff"], [0.5, "#bfe7f3"], [1, "#8ccfe2"]]);
  let s = `<path d="M${x - w / 2} ${yBase} L${x - w / 2} ${yBase - h * 0.5} L${x - w * 0.36} ${yBase - h * 0.82} L${x - w * 0.24} ${yBase - h * 0.62} L${x - w * 0.1} ${yBase - h} L${x + w * 0.04} ${yBase - h * 0.7} L${x + w * 0.18} ${yBase - h * 0.92} L${x + w * 0.3} ${yBase - h * 0.6} L${x + w / 2} ${yBase - h * 0.76} L${x + w / 2} ${yBase}Z" fill="${g}"/>`;
  for (let i = 0; i < 7; i++) {
    const gx = x - w / 2 + (i + 0.5) * (w / 7);
    s += `<path d="M${f(gx)} ${f(yBase - h * 0.9)} L${f(gx - 3 + (i % 3) * 2)} ${f(yBase)}" stroke="#7fc3d9" stroke-width="1.4" opacity="0.65"/>`;
  }
  return s;
}
function iceberg(ctx, x, y, s) {
  return at(x, y, s, false, `<path d="M-30 0 L-22 -20 L-12 -14 L-2 -38 L8 -18 L18 -26 L30 0Z" fill="#f2fbff"/><path d="M-2 -38 L8 -18 L18 -26 L30 0 L6 0Z" fill="#bfe3f0"/><path d="M-30 0 L30 0 L22 12 L-22 12Z" fill="#8cd0e4" opacity="0.7"/>`);
}
function fitzRoy(ctx, x, yBase, w, h) {
  const c = "#8d94a6";
  let s = pico(ctx, x - w * 0.28, yBase, w * 0.4, h * 0.7, c, 0.22);
  s += pico(ctx, x + w * 0.3, yBase, w * 0.44, h * 0.82, c, 0.22);
  s += pico(ctx, x, yBase, w * 0.34, h, oscuro(c, 0.06), 0.24, { cima: 0.02 });
  s += pico(ctx, x + w * 0.1, yBase, w * 0.24, h * 0.9, oscuro(c, 0.14), 0.22);
  return s;
}
function nubesBajas(ctx, y, n, op) {
  let s = "";
  for (let i = 0; i < n; i++) s += `<ellipse cx="${f(ctx.rng() * ctx.W)}" cy="${f(y + ctx.rng() * 20)}" rx="${f(40 + ctx.rng() * 50)}" ry="${f(6 + ctx.rng() * 6)}" fill="#ffffff" opacity="${op || 0.5}"/>`;
  return s;
}

module.exports = {
  f, rngDe, mezcla, claro, oscuro, NAVY, CREMA, CIAN, ROSA,
  contexto, degradado, radial, recorte, at, sombraSuelo,
  colina, pico, agua, crestaPuntos, trazoSuave,
  nube, sol, luna, estrellas, pajaros, arcoiris, aurora, nubesBajas,
  ombu, arbolRedondo, abeto, palmera, sauce, paloBorracho, cardon, araucaria, caldenArbol, quebracho, algodon, canaveral, limonero, olivo, pasto, hongo,
  farola, rocas, obelisco, ciudad, colectivo, molino, vaca, rancho, sombrilla, loboMarino, faro, bote, palafito, monumentoBandera, casaHistorica, iglesiaAdobe, cabana, baseAntartica, viaducto, torreRoca,
  llama, flamenco, garza, condor, pinguino, ballena, yacare, carpincho, tucan, dino,
  cataratas, cerroSieteColores, volcan, vinedo, laguna, glaciar, iceberg, fitzRoy,
};
