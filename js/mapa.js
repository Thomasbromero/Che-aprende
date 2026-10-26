/* Geometría del mapa de Aventura (no dibuja nada: solo calcula). Con las medidas de data/mapa.data.js
   decide dónde cae cada nivel, dónde van los carteles y las zonas, y cómo se curva el camino.
   Las coordenadas son del lienzo (ver data/mapa.data.js): x va de 0 a `ancho`, y de 0 (arriba) a `alto` (abajo).
   El nivel 1 queda abajo de todo y el último arriba. */
const Mapa = (function () {
  const BASE = { ancho: 400, separacion: 112, altoCartel: 100, amplitud: 105, margenInf: 60, margenSup: 60, huecoZona: 20, zonas: null };

  function calcular(cantidad, cfg) {
    const c = Object.assign({}, BASE, cfg || {});
    // Reparto de los niveles en zonas; si los números no cierran, sobran niveles en una zona extra
    const zonas = [];
    let asignados = 0;
    (c.zonas && c.zonas.length ? c.zonas : [{ nombre: "Zona 1", niveles: cantidad }]).forEach((z) => {
      const n = Math.max(0, Math.min(z.niveles || 0, cantidad - asignados));
      if (n > 0) { zonas.push(Object.assign({}, z, { niveles: n, primero: asignados })); asignados += n; }
    });
    if (asignados < cantidad) zonas.push({ nombre: "Zona " + (zonas.length + 1), niveles: cantidad - asignados, primero: asignados });

    // Alturas medidas desde abajo
    let cursor = c.margenInf;
    const abajo = new Array(cantidad);
    zonas.forEach((z, k) => {
      z.desde = cursor;
      z.cartelAbajo = cursor + c.altoCartel / 2;
      cursor += c.altoCartel;
      for (let i = 0; i < z.niveles; i++) {
        cursor += c.separacion;
        abajo[z.primero + i] = { desdeAbajo: cursor - c.separacion / 2, zona: k };
      }
      z.hasta = cursor;
      cursor += c.huecoZona;
    });
    const alto = cursor + c.margenSup - c.huecoZona;

    const puntos = abajo.map((p, i) => ({ x: c.ancho / 2 + c.amplitud * Math.sin(i * 0.8), y: alto - p.desdeAbajo, zona: p.zona }));
    zonas.forEach((z) => {
      z.top = alto - (z.hasta + c.huecoZona / 2);        // borde de arriba de la franja de la zona
      z.bottom = alto - (z.desde - c.huecoZona / 2);     // borde de abajo
      z.cartelY = alto - z.cartelAbajo;
      z.ultimo = z.primero + z.niveles - 1;
    });
    return { ancho: c.ancho, alto, puntos, zonas };
  }

  const f = (n) => n.toFixed(1);

  // Curva suave (Catmull-Rom pasada a Bézier) por los puntos 0..hasta. Para cualquier tramo usa los mismos
  // vecinos que usaría el camino entero, así el tramo ya recorrido calza exacto sobre el camino completo.
  function trazo(puntos, hasta) {
    const ultimo = Math.min(hasta === undefined ? puntos.length - 1 : hasta, puntos.length - 1);
    if (ultimo < 1) return "";
    let d = "M" + f(puntos[0].x) + " " + f(puntos[0].y);
    for (let i = 0; i < ultimo; i++) {
      const p0 = puntos[Math.max(0, i - 1)], p1 = puntos[i], p2 = puntos[i + 1], p3 = puntos[Math.min(puntos.length - 1, i + 2)];
      d += " C" + f(p1.x + (p2.x - p0.x) / 6) + " " + f(p1.y + (p2.y - p0.y) / 6) + " " + f(p2.x - (p3.x - p1.x) / 6) + " " + f(p2.y - (p3.y - p1.y) / 6) + " " + f(p2.x) + " " + f(p2.y);
    }
    return d;
  }

  return { calcular, trazo };
})();
