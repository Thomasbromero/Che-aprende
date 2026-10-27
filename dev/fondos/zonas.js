/* Las 27 escenas del mapa de Aventura: un viaje por Argentina, de Buenos Aires al fin del mundo.
   Cada escena: nombre (sale en el cartel de la zona), paleta P (cielo arriba/abajo, suelo arriba/abajo), cielo, fondo lejano,
   capas de terreno y piezas [pieza, x, y (fracción del alto), tamaño, espejado, opciones]. x: número, "L"/"R" (costados),
   "l"/"r" (un poco más adentro) o "C" (centro, solo piezas lejanas). */
"use strict";
module.exports = function (K, PIEZAS) {
  const { at, claro, oscuro } = K;
  const ciudadLejos = (c, x, hor, k, n, cols) => at(x, hor + 3, k, false, K.ciudad(c, n, cols), 0.55);
  const lejano = (c, y, amp, color, op) => K.colina(c, y, amp, color, { abajo: color, hasta: y + 160, op: op || 0.7, pasos: 9 });
  const nenufares = (c, hor, alto, n) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const x = c.rng() * 400, y = hor + 12 + c.rng() * (alto - hor - 150), r = 5 + c.rng() * 9;
      s += `<ellipse cx="${K.f(x)}" cy="${K.f(y)}" rx="${K.f(r)}" ry="${K.f(r * 0.35)}" fill="${c.rng() > 0.5 ? "#6fae7a" : "#82bd83"}" opacity="0.9"/>`;
      if (c.rng() > 0.75) s += `<circle cx="${K.f(x)}" cy="${K.f(y - 2)}" r="2.2" fill="#f6b8cc"/>`;
    }
    return s;
  };
  const banco = (c, x, y, rx, ry, col) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${col}"/><ellipse cx="${x - rx * 0.15}" cy="${y - ry * 0.25}" rx="${K.f(rx * 0.8)}" ry="${K.f(ry * 0.6)}" fill="${claro(col, 0.22)}"/>`;
  const espuma = (c, y) => `<path d="M-10 ${y} q25 -7 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity="0.75"/>`;
  const avenida = (c, y, h) => {
    let r = `<rect x="-5" y="${K.f(y)}" width="410" height="${K.f(h)}" fill="#c8c2c1"/><rect x="-5" y="${K.f(y)}" width="410" height="3" fill="#e9e3de"/><rect x="-5" y="${K.f(y + h - 3)}" width="410" height="3" fill="#e9e3de"/>`;
    for (let i = 0; i < 14; i++) r += `<rect x="${i * 30 - 6}" y="${K.f(y + h / 2 - 1.5)}" width="18" height="3" rx="1.5" fill="#ffffff" opacity="0.85"/>`;
    for (let i = 0; i < 9; i++) r += `<rect x="${158 + i * 10}" y="${K.f(y + 7)}" width="6" height="${K.f(h - 14)}" fill="#ffffff" opacity="0.8"/>`;
    return r;
  };
  const EST = ["#d9bfd2", "#cdaec7", "#e6cbd0", "#c5a4c3", "#dcc0c9", "#bfa0be", "#e9cfd6", "#d3b4cf"];
  const tono = { vicuna: { cuerpo: "#d9b98c", manchas: "#bb946a" } };

  return [
    // 1
    {
      nombre: "Buenos Aires", sem: 1, fadeBottom: 0, P: { top: "#9ed3e2", bot: "#ffd0ad", s1: "#dccfd0", s2: "#eadbd2" },
      cielo: { sol: [250, 0.3, 26, "#ffb86b"], nubes: 5, pajaros: [[60, 0.17, 1, 3], [270, 0.12, 0.8, 2]] },
      lejos: (c, hor) => ciudadLejos(c, 62, hor, 1.1, 5) + ciudadLejos(c, 338, hor, 1.2, 5) + ciudadLejos(c, 200, hor, 0.8, 4, ["#dcc9b4", "#cfbba5"]),
      capas: [{ y: 0.46, amp: 5, color: "#e2d3cf", abajo: "#ecdcd2" }],
      medio: (c) => avenida(c, c.H * 0.7, c.H * 0.072),
      items: [["obelisco", "R", 0.6, 1.3], ["colectivo", 70, 0.745, 1.05], ["colectivo", 330, 0.76, 1, 1, { c: "#e6a23c" }], ["arbol", "L", 0.58, 1.2, 0, { verde: "#b79de6", r: 17 }], ["arbol", "R", 0.84, 1.2, 1, { verde: "#c3aaf0", r: 17 }], ["arbol", "l", 0.5, 0.9, 0, { verde: "#a98fdd" }], ["arbol", "R", 0.47, 0.8, 0, { verde: "#6aa06a" }], ["farola", "L", 0.64, 1.1], ["farola", "R", 0.67, 1.2, 1], ["farola", "L", 0.9, 1.3], ["pasto", "L", 0.88], ["pasto", "R", 0.92]],
    },
    // 2
    {
      nombre: "La Pampa húmeda", sem: 2, P: { top: "#bcdff0", bot: "#fdecd0", s1: "#cfdea3", s2: "#e3e8bb" },
      cielo: { sol: [90, 0.2, 22, "#ffe08a"], nubes: 6, pajaros: [[250, 0.16, 1, 3]] },
      lejos: (c, hor) => lejano(c, hor - 6, 5, "#9fbf86", 0.55),
      capas: [{ y: 0.47, amp: 7, color: "#c6d99b", abajo: "#dfe6b6" }, { y: 0.62, amp: 10, color: "#d2e0a6", abajo: "#e6ebbf", op: 0.9 }],
      items: [["ombu", "R", 0.57, 1.3], ["molino", "L", 0.5, 1.1], ["rancho", "L", 0.62, 1], ["vaca", "R", 0.7, 1], ["vaca", "L", 0.8, 1.1, 1], ["vaca", 290, 0.5, 0.8, 0, { op: 0.8 }], ["arbol", "C", 0.45, 0.6, 0, { op: 0.6, verde: "#8fb77f" }], ["pasto", "L", 0.7], ["pasto", "R", 0.84], ["pasto", "R", 0.9], ["pasto", "L", 0.88]],
    },
    // 3
    {
      nombre: "Mar del Plata", sem: 3, hor: 0.58, P: { top: "#bfe3f0", bot: "#e8f6f6", s1: "#f1dfb8", s2: "#f6ead0" },
      cielo: { sol: [320, 0.18, 22, "#ffe08a"], nubes: 4, pajaros: [[70, 0.2, 1, 3], [220, 0.13, 0.9, 2]] },
      lejos: (c, hor) => K.agua(c, c.H * 0.36, c.H * 0.23, "#7fd0e1", "#4fb5cf", { olas: 14 }) + espuma(c, c.H * 0.585),
      capas: [{ y: 0.595, amp: 4, color: "#f2e2bb", abajo: "#f7ecd2" }],
      items: [["faro", "R", 0.62, 1.15], ["sombrilla", "L", 0.7, 1.1], ["sombrilla", "R", 0.8, 1.2, 1, { c: ["#4fb5cf", "#fff4d6"] }], ["sombrilla", "L", 0.86, 1.1, 0, { c: ["#ffb74d", "#fff4d6"] }], ["lobo", "R", 0.7, 1], ["lobo", "L", 0.78, 1.1, 1], ["bote", 215, 0.5, 0.7, 0, { op: 0.8 }], ["pasto", "R", 0.9, 1, 0, { c: "#9cb87a" }]],
    },
    // 4
    {
      nombre: "Delta del Tigre", sem: 4, hor: 0.4, P: { top: "#cfe9e4", bot: "#eaf4dd", s1: "#8fc9b0", s2: "#b4dcc4" },
      cielo: { sol: [300, 0.17, 20, "#ffe39a"], nubes: 4, pajaros: [[60, 0.2, 1, 2]] },
      lejos: (c, hor) => lejano(c, hor - 8, 7, "#7fb28a", 0.6),
      capas: [{ y: 0.42, amp: 4, color: "#8fc9b0", abajo: "#b6dcc6" }],
      medio: (c, hor) => K.agua(c, hor + 12, c.H - hor - 140, "#8fc9b0", "#b6dcc6", { olas: 22 }) + banco(c, 20, c.H * 0.67, 95, 22, "#8fbf8c") + banco(c, 395, c.H * 0.58, 85, 18, "#86b884") + banco(c, 380, c.H * 0.86, 100, 20, "#92c28e"),
      items: [["sauce", "L", 0.55, 1.3], ["sauce", "R", 0.59, 1.2, 1], ["palafito", "L", 0.67, 1.1], ["bote", "r", 0.73, 1.1, 1, { c: "#c9704a" }], ["bote", 190, 0.54, 0.7, 0, { c: "#4a8fc0", op: 0.8 }], ["sauce", "R", 0.85, 1.3], ["garza", "L", 0.82, 1.1], ["pasto", "L", 0.9, 1, 0, { c: "#6fa56e" }], ["pasto", "R", 0.9, 1, 0, { c: "#6fa56e" }]],
    },
    // 5
    {
      nombre: "Rosario", sem: 5, hor: 0.5, P: { top: "#c3dcef", bot: "#f9e7cb", s1: "#cdd9a8", s2: "#e2e6bd" },
      cielo: { sol: [60, 0.22, 20, "#ffd78a"], nubes: 4, pajaros: [[250, 0.15, 1, 3]] },
      lejos: (c, hor) => ciudadLejos(c, 70, hor, 1, 6) + ciudadLejos(c, 330, hor, 0.9, 5) + K.agua(c, hor + 4, c.H * 0.14, "#86b6cf", "#a9cfe0", { olas: 12 }),
      capas: [{ y: 0.645, amp: 6, color: "#c9d9a0", abajo: "#e1e7ba" }],
      items: [["bandera", "R", 0.68, 1.3], ["bote", 190, 0.57, 1.3, 0, { c: "#d85a5a", op: 0.85 }], ["palmera", "L", 0.7, 1.1], ["arbol", "L", 0.82, 1.2], ["arbol", "R", 0.88, 1.1, 1], ["pasto", "R", 0.78], ["pasto", "L", 0.9]],
    },
    // 6
    {
      nombre: "Entre Ríos", sem: 6, P: { top: "#bfe3ea", bot: "#fdf0cf", s1: "#d5db9f", s2: "#e7e5b9" },
      cielo: { sol: [330, 0.2, 22, "#ffe08a"], nubes: 4, pajaros: [[60, 0.14, 1, 3]] },
      lejos: (c, hor) => K.agua(c, hor - 14, 22, "#8cc3d6", "#a5d3e0", { olas: 5 }),
      capas: [{ y: 0.48, amp: 8, color: "#d9d9a0", abajo: "#e8e6b8" }],
      medio: (c) => K.laguna(c, 78, c.H * 0.79, 62, 15, "#5fd0d0", "#8fe0dc"),
      items: [["palmera", "L", 0.56, 1.25], ["palmera", "L", 0.63, 1], ["palmera", "R", 0.7, 1.3], ["palmera", "R", 0.5, 0.9], ["rancho", "R", 0.6, 1], ["vaca", "L", 0.72, 1], ["sauce", "R", 0.87, 1.2], ["pasto", "L", 0.7], ["pasto", "R", 0.8]],
    },
    // 7 (7 niveles)
    {
      nombre: "Esteros del Iberá", sem: 7, hor: 0.42, P: { top: "#cfe9da", bot: "#eef4d6", s1: "#9ccaa9", s2: "#bfdfc2" },
      cielo: { sol: [200, 0.17, 20, "#ffe39a"], nubes: 5, pajaros: [[70, 0.14, 1, 3], [290, 0.2, 0.8, 2]] },
      lejos: (c, hor) => lejano(c, hor - 6, 5, "#86b890", 0.55),
      capas: [{ y: 0.43, amp: 4, color: "#9ccaa9", abajo: "#c0dfc4" }],
      medio: (c, hor) => nenufares(c, hor, c.H, 46) + banco(c, 15, c.H * 0.62, 80, 16, "#8cbc86") + banco(c, 395, c.H * 0.73, 90, 18, "#8cbc86"),
      items: [["yacare", "L", 0.62, 1.2], ["yacare", "R", 0.78, 1.3, 1], ["carpincho", "R", 0.6, 1.1, 1], ["carpincho", "L", 0.82, 1.2], ["garza", "L", 0.52, 1.1], ["garza", "R", 0.67, 1.1], ["garza", "R", 0.87, 1], ["sauce", "L", 0.46, 1.1], ["sauce", "R", 0.48, 1], ["pasto", "L", 0.7, 1, 0, { c: "#6fa56e" }], ["pasto", "R", 0.9, 1, 0, { c: "#6fa56e" }]],
    },
    // 8
    {
      nombre: "Cataratas del Iguazú", sem: 8, hor: 0.4, P: { top: "#d5eedf", bot: "#e9f5e4", s1: "#79b289", s2: "#a5cf9c" },
      cielo: { arcoiris: [200, 0.3, 120], nubes: 3, sol: [330, 0.1, 16, "#fff0a8"] },
      lejos: (c, hor) => lejano(c, hor - 40, 12, "#5f9a73", 0.85) + K.cataratas(c, -24, c.H * 0.24, 448, c.H * 0.17, "#5a8a68"),
      capas: [{ y: 0.46, amp: 14, color: "#6aa97c", abajo: "#9bcb92" }, { y: 0.63, amp: 12, color: "#7fb887", abajo: "#aed59c", op: 0.92 }],
      items: [["arbol", "L", 0.5, 1.5, 0, { verde: "#4f9a62", r: 20 }], ["arbol", "R", 0.56, 1.4, 1, { verde: "#58a26b", r: 20 }], ["palmera", "L", 0.67, 1.1, 0, { verde: "#3f8a58" }], ["palmera", "R", 0.74, 1.2, 1, { verde: "#3f8a58" }], ["tucan", "L", 0.8, 1.3], ["arbol", "R", 0.9, 1.3, 0, { verde: "#4f9a62", r: 20 }], ["pasto", "L", 0.9, 1, 0, { c: "#3f8a58", n: 7 }], ["pasto", "R", 0.82, 1, 0, { c: "#3f8a58", n: 7 }]],
    },
    // 9
    {
      nombre: "Gran Chaco", sem: 9, P: { top: "#f8d9b8", bot: "#ffe9c9", s1: "#dcbd90", s2: "#ecd2a8" },
      cielo: { sol: [200, 0.3, 34, "#ff9e5e"], nubes: 2, pajaros: [[60, 0.14, 1, 2]] },
      capas: [{ y: 0.47, amp: 9, color: "#dcc095", abajo: "#ecd4ab" }],
      items: [["quebracho", "L", 0.55, 1.35], ["quebracho", "R", 0.6, 1.25, 1], ["algodon", "L", 0.74, 1.4], ["algodon", "R", 0.8, 1.4], ["algodon", "L", 0.88, 1.5], ["rancho", "R", 0.72, 1], ["pasto", "L", 0.66, 1, 0, { c: "#b89a5e" }], ["pasto", "R", 0.9, 1, 0, { c: "#b89a5e" }], ["arbol", "C", 0.45, 0.6, 0, { verde: "#8a9a5b", op: 0.55 }]],
    },
    // 10
    {
      nombre: "Formosa", sem: 10, P: { top: "#f4cfda", bot: "#fde9cf", s1: "#c7d99f", s2: "#dfe7b8" },
      cielo: { sol: [300, 0.24, 26, "#ff9fa0"], nubes: 4, pajaros: [[70, 0.15, 1, 3]] },
      capas: [{ y: 0.47, amp: 7, color: "#c7d99f", abajo: "#dfe7b8" }],
      medio: (c) => K.laguna(c, 92, c.H * 0.67, 70, 17, "#d3e7f0", "#f4c8d6") + K.laguna(c, 318, c.H * 0.82, 66, 16, "#d3e7f0", "#f4c8d6"),
      items: [["borracho", "L", 0.55, 1.3], ["borracho", "R", 0.52, 1.2, 1], ["borracho", "R", 0.72, 1.45], ["borracho", "L", 0.84, 1.15], ["flamenco", 80, 0.66, 1.1], ["flamenco", 112, 0.68, 0.95, 1], ["flamenco", 310, 0.82, 1.15], ["flamenco", 338, 0.83, 1, 1], ["garza", 60, 0.78, 1], ["pasto", "L", 0.9], ["pasto", "R", 0.66]],
    },
    // 11
    {
      nombre: "Santiago del Estero", sem: 11, P: { top: "#f2d8ac", bot: "#ffe9c2", s1: "#d7b58b", s2: "#e8cca4" },
      cielo: { sol: [110, 0.22, 24, "#ffb457"], nubes: 3, pajaros: [[260, 0.15, 1, 3]] },
      capas: [{ y: 0.47, amp: 8, color: "#d9ba90", abajo: "#e9cfa8" }],
      items: [["quebracho", "L", 0.55, 1.3], ["quebracho", "R", 0.62, 1.2, 1], ["quebracho", "L", 0.82, 1.4], ["cardon", "L", 0.67, 1.2], ["cardon", "R", 0.78, 1.3], ["rancho", "R", 0.54, 1], ["arbol", "R", 0.9, 1.1, 0, { verde: "#8a9a5b", r: 16 }], ["pasto", "L", 0.74, 1, 0, { c: "#b89a5e" }], ["pasto", "R", 0.9, 1, 0, { c: "#b89a5e" }]],
    },
    // 12
    {
      nombre: "Tucumán", sem: 12, hor: 0.44, P: { top: "#d3ebdc", bot: "#f3f2d2", s1: "#a9cf8b", s2: "#cae0a2" },
      cielo: { sol: [320, 0.2, 20, "#ffe08a"], nubes: 4, pajaros: [[70, 0.14, 1, 3]] },
      lejos: (c, hor) => lejano(c, hor - 52, 22, "#7fb08a", 0.6) + lejano(c, hor - 22, 14, "#8fbf93", 0.7),
      capas: [{ y: 0.45, amp: 8, color: "#a9cf8b", abajo: "#cae0a2" }],
      items: [["canaveral", "L", 0.58, 1.25], ["canaveral", "R", 0.66, 1.3, 1], ["casa", "R", 0.56, 1.3], ["limonero", "L", 0.72, 1.3], ["limonero", "R", 0.84, 1.2, 1], ["canaveral", "L", 0.88, 1.4], ["pasto", "R", 0.76], ["pasto", "L", 0.8]],
    },
    // 13
    {
      nombre: "Salta la linda", sem: 13, hor: 0.48, P: { top: "#f5cbb8", bot: "#fbe2cc", s1: "#d6a37f", s2: "#e8c6a4" },
      cielo: { sol: [90, 0.2, 22, "#ffb36b"], nubes: 3, pajaros: [[260, 0.14, 1, 2]] },
      lejos: (c, hor) => K.pico(c, 60, hor, 150, 130, "#c79a86", true) + K.pico(c, 330, hor, 190, 150, "#b58270", true) + K.pico(c, 190, hor, 140, 90, "#d7b09c", 0.3) + lejano(c, hor - 14, 8, "#d49f84", 0.7),
      capas: [{ y: 0.5, amp: 9, color: "#d6a37f", abajo: "#e8c6a4" }],
      items: [["viaducto", "R", 0.55, 1.6], ["iglesia", "L", 0.62, 1.4], ["cardon", "R", 0.76, 1.3], ["cardon", "L", 0.8, 1.2], ["llama", "R", 0.88, 1.1], ["condor", 250, 0.2, 0.9, 0, { c: "#3a3f4e" }], ["pasto", "L", 0.7, 1, 0, { c: "#b89a5e" }], ["pasto", "R", 0.68, 1, 0, { c: "#b89a5e" }]],
    },
    // 14
    {
      nombre: "Quebrada de Humahuaca", sem: 14, hor: 0.5, P: { top: "#bfd9ee", bot: "#f2e9d4", s1: "#e5c9a6", s2: "#efdcc0" },
      cielo: { sol: [330, 0.17, 20, "#ffe08a"], nubes: 3, pajaros: [[60, 0.14, 1, 3]] },
      lejos: (c, hor) => K.cerroSieteColores(c, 255, hor + 6, 290, 175) + K.cerroSieteColores(c, 70, hor + 4, 160, 95),
      capas: [{ y: 0.51, amp: 6, color: "#e6cba9", abajo: "#f0dfc4" }],
      items: [["llama", "L", 0.66, 1.2], ["llama", 90, 0.7, 1, 1], ["llama", "R", 0.74, 1.2], ["llama", "R", 0.87, 1.3, 1, { c: "#fff", cuerpo: "#e9dcc6" }], ["rancho", "L", 0.58, 1.1], ["cardon", "R", 0.64, 1.1], ["cardon", "L", 0.84, 1.2], ["pasto", "R", 0.8, 1, 0, { c: "#b89a5e" }]],
    },
    // 15
    {
      nombre: "Puna de Catamarca", sem: 15, P: { top: "#c7e4f3", bot: "#f3efe0", s1: "#e9dcc4", s2: "#f2e8d2" },
      cielo: { sol: [330, 0.16, 18, "#fff0b0"], nubes: 3, pajaros: [[70, 0.16, 1, 2]] },
      lejos: (c, hor) => K.volcan(c, 120, hor, 210, 140) + K.pico(c, 330, hor, 190, 105, "#a98a78", 0.3) + lejano(c, hor - 8, 6, "#c9b9a4", 0.6),
      capas: [{ y: 0.47, amp: 6, color: "#e9dcc4", abajo: "#f2e8d2" }],
      medio: (c) => K.laguna(c, 330, c.H * 0.66, 72, 19, "#5fd3d0", "#8fe3df") + K.laguna(c, 72, c.H * 0.79, 62, 16, "#5fd3d0", "#8fe3df"),
      items: [["llama", "L", 0.6, 1.1, 0, tono.vicuna], ["llama", 85, 0.64, 0.9, 1, tono.vicuna], ["llama", "R", 0.7, 1.15, 1, tono.vicuna], ["flamenco", 300, 0.67, 1], ["flamenco", 345, 0.68, 0.9, 1], ["cardon", "L", 0.88, 1.2], ["pasto", "R", 0.88, 1, 0, { c: "#b89a5e" }]],
    },
    // 16
    {
      nombre: "Talampaya", sem: 16, P: { top: "#cfe3f0", bot: "#fbe6d0", s1: "#d98f6f", s2: "#eab594" },
      cielo: { sol: [310, 0.18, 22, "#ffd78a"], nubes: 2, pajaros: [] },
      lejos: (c, hor) => at(70, hor + 2, 1, false, PIEZAS.torre(c, { c: "#c9806b", w: 30, h: 70 }), 0.6) + at(140, hor + 2, 1, false, PIEZAS.torre(c, { c: "#b9705c", w: 22, h: 52 }), 0.55) + at(300, hor + 2, 1, false, PIEZAS.torre(c, { c: "#c9806b", w: 36, h: 80 }), 0.6) + at(362, hor + 2, 1, false, PIEZAS.torre(c, { c: "#b9705c", w: 24, h: 60 }), 0.55),
      capas: [{ y: 0.47, amp: 7, color: "#d98f6f", abajo: "#eab594" }],
      items: [["torre", "L", 0.56, 1.3, 0, { c: "#c9705a", w: 34, h: 120 }], ["torre", "R", 0.52, 1.3, 0, { c: "#bf6652", w: 40, h: 140 }], ["torre", "L", 0.74, 1.4, 0, { c: "#d0785f", w: 30, h: 90 }], ["torre", "R", 0.78, 1.4, 0, { c: "#c9705a", w: 36, h: 100 }], ["condor", 190, 0.22, 1.1], ["cardon", "R", 0.88, 1.2], ["pasto", "L", 0.88, 1, 0, { c: "#a98355" }]],
    },
    // 17
    {
      nombre: "Valle de la Luna", sem: 17, P: { top: "#b7a5dc", bot: "#f6d3da", s1: "#e6cfd8", s2: "#f1e0e2" },
      cielo: { luna: [92, 0.18, 22], estrellas: 55, nubes: 2, nubesOp: 0.7 },
      lejos: (c, hor) => lejano(c, hor - 46, 20, "#b7a1cf", 0.6) + K.cerroSieteColores(c, 70, hor + 8, 210, 112, EST) + K.cerroSieteColores(c, 322, hor + 8, 240, 132, EST) + K.cerroSieteColores(c, 200, hor + 4, 130, 62, EST),
      capas: [{ y: 0.48, amp: 6, color: "#e6cfd8", abajo: "#f1e0e2" }],
      items: [["hongo", "L", 0.56, 1.4, 0, { c: "#d7bfd6" }], ["hongo", "R", 0.5, 1.1, 1, { c: "#cdb3d4" }], ["hongo", "R", 0.74, 1.5, 0, { c: "#d7bfd6" }], ["hongo", "L", 0.82, 1.25, 1, { c: "#cdb3d4" }], ["rocas", "L", 0.68, 1.1, 0, { c: "#bda6c4" }], ["rocas", "R", 0.88, 1.2, 1, { c: "#bda6c4" }], ["cardon", "R", 0.9, 1.1], ["pasto", "L", 0.7, 1, 0, { c: "#b3a590" }], ["pasto", "R", 0.62, 1, 0, { c: "#b3a590" }]],
    },
    // 18
    {
      nombre: "Mendoza", sem: 18, hor: 0.44, P: { top: "#bfdcf2", bot: "#f6f0dc", s1: "#c8d9a0", s2: "#dfe5b9" },
      cielo: { sol: [330, 0.15, 20, "#ffe08a"], nubes: 3, pajaros: [[60, 0.2, 1, 3]] },
      lejos: (c, hor) => K.pico(c, 30, hor, 170, 115, "#9aa6bb", 0.3) + K.pico(c, 330, hor, 210, 150, "#a2acc0", 0.3) + K.pico(c, 140, hor, 330, 235, "#8e9bb4", 0.34),
      capas: [{ y: 0.45, amp: 6, color: "#c8d9a0", abajo: "#dfe5b9" }],
      medio: (c, hor) => K.vinedo(c, hor + 34, hor + 215, 200),
      items: [["olivo", "L", 0.64, 1.25], ["olivo", "R", 0.72, 1.3, 1], ["casa", "R", 0.58, 1.2, 0, { c: "#f0d6c4" }], ["abeto", "L", 0.86, 1.2, 0, { verde: "#6a9a56" }], ["abeto", "R", 0.88, 1.1, 0, { verde: "#6a9a56" }], ["pasto", "R", 0.8]],
    },
    // 19
    {
      nombre: "San Luis", sem: 19, P: { top: "#d9c5e8", bot: "#ffdcbc", s1: "#cfd7a2", s2: "#e2e6bb" },
      cielo: { sol: [250, 0.27, 30, "#ff9f6a"], nubes: 4, pajaros: [[80, 0.16, 1, 3]] },
      lejos: (c, hor) => lejano(c, hor - 56, 24, "#8fb28a", 0.6) + lejano(c, hor - 24, 14, "#a2c096", 0.75),
      capas: [{ y: 0.47, amp: 8, color: "#c5d9a2", abajo: "#dfe6bc" }],
      medio: (c) => K.laguna(c, 92, c.H * 0.62, 112, 27, "#7fd0e0", "#9fdde8"),
      items: [["cabana", "R", 0.58, 1.2], ["abeto", "L", 0.52, 1.2], ["abeto", "L", 0.74, 1.3, 0, { verde: "#4f8f66" }], ["abeto", "R", 0.74, 1.2], ["arbol", "R", 0.88, 1.2, 1, { verde: "#8aa05f" }], ["pasto", "L", 0.88], ["pasto", "R", 0.9]],
    },
    // 20
    {
      nombre: "Sierras de Córdoba", sem: 20, hor: 0.45, P: { top: "#a9d8ee", bot: "#f2f0d6", s1: "#bdd89c", s2: "#d9e6b4" },
      cielo: { sol: [310, 0.17, 20, "#ffe08a"], nubes: 4, pajaros: [] },
      lejos: (c, hor) => lejano(c, hor - 60, 26, "#7fae88", 0.6) + lejano(c, hor - 30, 18, "#94c093", 0.75) + lejano(c, hor - 8, 8, "#a9cf94", 0.85),
      capas: [{ y: 0.46, amp: 8, color: "#bdd89c", abajo: "#d9e6b4" }],
      medio: (c) => K.laguna(c, 330, c.H * 0.7, 66, 15, "#7fd0e0", "#9fdde8"),
      items: [["casa", "L", 0.57, 1.3], ["olivo", "R", 0.62, 1.2, 1], ["arbol", "L", 0.76, 1.3, 0, { verde: "#7aa35f" }], ["arbol", "R", 0.84, 1.25, 1, { verde: "#86ad63" }], ["condor", 230, 0.2, 1.2], ["rocas", "L", 0.7, 1.3], ["rocas", "R", 0.6, 1.2, 1], ["rocas", "R", 0.9, 1.4], ["pasto", "L", 0.9], ["pasto", "R", 0.74]],
    },
    // 21 (7 niveles)
    {
      nombre: "La Pampa", sem: 21, hor: 0.45, P: { top: "#f7d6b9", bot: "#fde9cf", s1: "#e3c8a4", s2: "#efdcc0" },
      cielo: { sol: [300, 0.28, 32, "#ff9d62"], nubes: 3, pajaros: [[70, 0.18, 1, 3]] },
      capas: [{ y: 0.46, amp: 7, color: "#e3c8a4", abajo: "#efdcc0" }],
      medio: (c) => K.laguna(c, 105, c.H * 0.63, 92, 21, "#e8c1c7", "#f3d6d8"),
      items: [["calden", "L", 0.55, 1.35], ["calden", "R", 0.62, 1.3, 1], ["calden", "R", 0.86, 1.45], ["flamenco", 70, 0.62, 1.15], ["flamenco", 108, 0.64, 1, 1], ["flamenco", 142, 0.63, 1.1], ["llama", "R", 0.72, 1.15, 1, tono.vicuna], ["llama", "L", 0.84, 1.2, 0, tono.vicuna], ["pasto", "L", 0.74, 1, 0, { c: "#b89a5e" }], ["pasto", "R", 0.76, 1, 0, { c: "#b89a5e" }]],
    },
    // 22
    {
      nombre: "Neuquén", sem: 22, hor: 0.44, P: { top: "#bfe0ee", bot: "#eef1e0", s1: "#b9c99c", s2: "#d5dfb6" },
      cielo: { sol: [330, 0.14, 18, "#ffe08a"], nubes: 3, pajaros: [[70, 0.18, 1, 2]] },
      lejos: (c, hor) => lejano(c, hor - 36, 18, "#9fb593", 0.65) + K.volcan(c, 200, hor, 270, 195),
      capas: [{ y: 0.45, amp: 8, color: "#b9c99c", abajo: "#d5dfb6" }],
      items: [["araucaria", "L", 0.56, 1.45], ["araucaria", "R", 0.54, 1.3, 1], ["araucaria", "L", 0.72, 1.5], ["araucaria", "R", 0.8, 1.6, 1], ["dino", "R", 0.68, 1.15, 1], ["dino", "L", 0.88, 1, 0], ["pasto", "L", 0.9], ["pasto", "R", 0.9]],
    },
    // 23
    {
      nombre: "Bariloche", sem: 23, hor: 0.48, P: { top: "#c9e5f4", bot: "#f4f1e4", s1: "#b3d19a", s2: "#d6e5b4" },
      cielo: { sol: [330, 0.14, 18, "#fff0b0"], nubes: 3, pajaros: [[80, 0.16, 1, 3]] },
      lejos: (c, hor) => K.pico(c, 40, hor, 190, 130, "#8c9bb4", 0.3) + K.pico(c, 330, hor, 230, 170, "#8696b0", 0.32) + K.pico(c, 190, hor, 250, 195, "#97a4bc", 0.34, { cima: -0.04 }) + K.agua(c, hor, c.H * 0.12, "#6fb6d3", "#9fd2e4", { olas: 10 }),
      capas: [{ y: 0.61, amp: 6, color: "#b3d19a", abajo: "#d6e5b4" }],
      items: [["bote", 215, 0.55, 0.85, 0, { c: "#d85a5a" }], ["abeto", "L", 0.62, 1.25], ["abeto", "R", 0.64, 1.3, 1], ["cabana", "L", 0.72, 1.15], ["abeto", "R", 0.8, 1.35], ["abeto", "L", 0.88, 1.3, 0, { verde: "#4f8f66" }], ["condor", 260, 0.2, 1.1], ["pasto", "R", 0.9]],
    },
    // 24
    {
      nombre: "Península Valdés", sem: 24, hor: 0.4, P: { top: "#b7d6ea", bot: "#e8f0f0", s1: "#ecdfc5", s2: "#f5ebd4" },
      cielo: { sol: [90, 0.16, 20, "#ffe9a0"], nubes: 4, pajaros: [[250, 0.17, 1, 3], [70, 0.24, 0.8, 2]] },
      lejos: (c, hor) => K.agua(c, c.H * 0.33, c.H * 0.27, "#5fb1cc", "#3f93b5", { olas: 18 }) + espuma(c, c.H * 0.6),
      capas: [{ y: 0.605, amp: 5, color: "#efe0c0", abajo: "#f6ecd6" }],
      items: [["ballena", 190, 0.45, 1.7, 0, { op: 0.9 }], ["ballena", 320, 0.52, 1.2, 1], ["pinguino", "L", 0.68, 1.3], ["pinguino", 90, 0.72, 1.2, 1], ["pinguino", "R", 0.76, 1.3], ["pinguino", "R", 0.82, 1.2, 1], ["pinguino", "L", 0.86, 1.4], ["lobo", "R", 0.67, 1.1, 1], ["lobo", "L", 0.8, 1.2], ["pasto", "R", 0.9, 1, 0, { c: "#9cb87a" }]],
    },
    // 25
    {
      nombre: "Glaciares", sem: 25, P: { top: "#c8e6f3", bot: "#f2f6f6", s1: "#d7dfe5", s2: "#e9eef1" },
      cielo: { sol: [330, 0.14, 18, "#fff3bd"], nubes: 3, pajaros: [] },
      lejos: (c, hor) => K.fitzRoy(c, 105, hor, 240, 225) + K.pico(c, 330, hor, 170, 105, "#a8b4c6", 0.3) + K.agua(c, hor, c.H * 0.11, "#7fd2dd", "#a9e3ea", { olas: 8 }) + K.glaciar(c, 262, c.H * 0.66, 290, 120),
      capas: [{ y: 0.655, amp: 5, color: "#d7dfe5", abajo: "#e9eef1" }],
      items: [["iceberg", 150, 0.57, 1.2], ["iceberg", 60, 0.6, 0.9], ["iceberg", 335, 0.58, 1], ["condor", 210, 0.2, 1.2], ["abeto", "L", 0.8, 1.2, 0, { nieve: true }], ["abeto", "R", 0.86, 1.3, 0, { nieve: true }], ["pasto", "L", 0.9, 1, 0, { c: "#9fb0a6" }]],
    },
    // 26
    {
      nombre: "Tierra del Fuego", sem: 26, P: { top: "#bfd0e4", bot: "#e6e7ee", s1: "#9fb8c4", s2: "#bdd0d8" },
      cielo: { sol: [90, 0.2, 18, "#ffe3a8"], nubes: 4, pajaros: [[250, 0.15, 1, 3]], nubesColor: "#f4f6fa" },
      lejos: (c, hor) => K.pico(c, 60, hor, 190, 120, "#8896ad", 0.34) + K.pico(c, 200, hor, 170, 95, "#97a3b8", 0.3) + K.pico(c, 330, hor, 210, 140, "#8493aa", 0.34) + K.agua(c, hor, c.H * 0.12, "#5e93ab", "#7fb0c4", { olas: 10 }),
      capas: [{ y: 0.62, amp: 6, color: "#b9c79a", abajo: "#cfd9ae" }],
      items: [["bote", 140, 0.54, 0.9, 0, { c: "#d85a5a" }], ["faro", "R", 0.66, 1.35, 0, { c: "#d94b45" }], ["arbol", "L", 0.58, 1.3, 0, { verde: "#e0924a", r: 16 }], ["arbol", "L", 0.7, 1.3, 1, { verde: "#d9a24a", r: 16 }], ["arbol", "R", 0.76, 1.3, 0, { verde: "#c97a3f", r: 16 }], ["arbol", "L", 0.86, 1.4, 0, { verde: "#e0924a", r: 17 }], ["pinguino", "R", 0.88, 1.2], ["pinguino", 330, 0.9, 1, 1], ["pasto", "L", 0.9, 1, 0, { c: "#9aab76" }]],
    },
    // 27
    {
      nombre: "Antártida Argentina", sem: 27, hor: 0.5, fadeTop: 190, P: { top: "#27375c", bot: "#6aa5c3", s1: "#dcf0f7", s2: "#eef8fb" }, tex: "#8fb8cc",
      cielo: { estrellas: 70, aurora: [0.2, 40], luna: [320, 0.15, 15], nubes: 0 },
      lejos: (c, hor) => K.pico(c, 60, hor, 190, 110, "#a9c9dc", 0.4) + K.pico(c, 330, hor, 230, 135, "#b4d2e3", 0.4) + K.pico(c, 200, hor, 150, 80, "#c4dce9", 0.4),
      capas: [{ y: 0.5, amp: 5, color: "#dcf0f7", abajo: "#eef8fb" }],
      items: [["base", "R", 0.6, 1.3], ["iceberg", "L", 0.52, 1.8], ["iceberg", 150, 0.5, 1.2, 0, { op: 0.7 }], ["pinguino", "L", 0.7, 1.3, 0, { cuerpo: "#2b3040" }], ["pinguino", 95, 0.74, 1.1, 1], ["pinguino", "R", 0.8, 1.35], ["pinguino", "R", 0.84, 1.2, 1], ["pinguino", "L", 0.88, 1.4], ["pasto", "L", 0.9, 1, 0, { c: "#bcd4de" }]],
    },
  ];
};
