# Che, aprendé 🧉

Webapp para practicar **español rioplatense** por cuenta propia. Gratis, sin cuenta, sin backend: todo corre en el navegador y el progreso se guarda en el mismo dispositivo.

Pensada para un nivel intermedio/avanzado, con ayudas en **húngaro**.

## Módulos (v1)

- **📐 Gramática** — mini-lecciones + ejercicios autocorregidos (por ahora: *ser/estar* y *por/para*).
- **🗂️ Vocabulario** — tarjetas en contexto con **repaso espaciado** (tipo Anki). Vocabulario rioplatense con traducción al húngaro.
- **✍️ Producción** — producción controlada (conjugar, transformar) con corrección automática.

## Correr en local

Requiere Node.

```bash
node server.js
```

Abrí http://localhost:3039

## Cómo agregar contenido

Todo el contenido está en archivos simples dentro de `data/`:

- `data/vocab.data.js` — tarjetas de vocabulario
- `data/grammar.data.js` — temas y ejercicios de gramática
- `data/produccion.data.js` — consignas de producción

Cada archivo arriba explica el formato. Agregar una tarjeta o un ejercicio es copiar una línea y editarla.

## Estructura

```
index.html          # página única
css/styles.css      # estilos (mobile-first, modo claro/oscuro)
js/                  # lógica (storage, repaso espaciado, módulos)
data/                # contenido editable
server.js            # server estático local (solo desarrollo)
```

## Hosting gratis

Al ser 100% estática, se puede publicar gratis en GitHub Pages / Netlify. (Para GitHub Pages gratis, el repo debe ser público.)
