/* Mapa del modo Aventura: cómo se dibuja el camino. Acá se enchufa el arte cuando esté listo.

   El mapa se dibuja de abajo (nivel 1) hacia arriba y se escala al ancho del celular, así que todas las
   medidas están en "unidades" de un lienzo de `ancho` unidades de ancho.

   - ancho:       ancho del lienzo (400 = un celular chico; todo se escala proporcionalmente)
   - separacion:  distancia vertical entre un nivel y el siguiente
   - altoCartel:  alto del espacio que ocupa el cartel de cada zona
   - amplitud:    cuánto se corre el camino hacia los costados (zigzag)
   - zonas:       grupos de niveles seguidos. Cada una acepta:
        nombre:       el texto del cartel
        niveles:      cuántos niveles tiene (las zonas tienen que sumar los niveles del camino)
        fondo:        (opcional) imagen de fondo de la zona, ej. "assets/mapa/zona1-fondo.png". Se estira
                      al ancho completo y al alto de la zona (lienzo de 400 unidades de ancho; el alto
                      de una zona es altoCartel + niveles x separacion + 20: para 6 niveles son 832 unidades, o sea una imagen de 400 x 832).
        decoraciones: (opcional) lista de imágenes sueltas: { img, x, y, ancho, alto }. "alto" es opcional (si falta, vale lo mismo
                      que ancho); la imagen conserva sus proporciones dentro de ese rectángulo.
                      x e y son la esquina de arriba a la izquierda, en unidades del lienzo; y se cuenta desde
                      el borde de arriba de la zona hacia abajo. Ej: { img: "assets/mapa/cactus.png", x: 20, y: 100, ancho: 90 }
   Lo que esté en null o vacío se dibuja con formas simples de relleno (colores de la paleta).
   Las imágenes van en la carpeta assets/mapa/. */
window.MAPA = {
  ancho: 400,
  separacion: 116,
  altoCartel: 116,
  amplitud: 105,
  zonas: [
    { nombre: "Zona 1", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 2", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 3", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 4", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 5", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 6", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 7", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 8", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 9", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 10", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 11", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 12", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Zona 13", niveles: 6, fondo: null, decoraciones: [] },
  ],
};
