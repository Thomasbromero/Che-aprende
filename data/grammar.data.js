/* Gramática: temas con explicación breve y ejercicios autocorregidos.
   Tipos de ejercicio:
   - "choice": prompt con ___, options: [...], answer: "texto exacto de la opción correcta"
   - "fill":   prompt con ___, accept: [respuestas válidas], answer: "forma correcta a mostrar"
   Cada ejercicio puede tener "explain" (se muestra tras responder).
*/
window.GRAMMAR = [
  {
    id: "ser-estar",
    title: "Ser vs. Estar",
    explain: "SER → identidad, características esenciales, origen, profesión, hora y fecha. ESTAR → estados y situaciones que cambian, ubicación, resultado. Pista en húngaro: a magyar 'van' mindkettőt jelenti, a spanyol viszont megkülönbözteti. Ojo con el voseo: vos SOS / vos ESTÁS.",
    examples: [
      "Ella es arquitecta. (profesión → ser)",
      "El café está frío. (estado → estar)",
      "Vos sos de Hungría. (origen → ser)",
      "La plaza está a dos cuadras. (ubicación → estar)"
    ],
    exercises: [
      { type: "choice", prompt: "Buenos Aires ___ en Argentina.", options: ["es", "está"], answer: "está", explain: "Ubicación geográfica → estar." },
      { type: "choice", prompt: "Hoy ___ martes.", options: ["es", "está"], answer: "es", explain: "Día / fecha → ser." },
      { type: "choice", prompt: "El café ya ___ frío, no lo tomo.", options: ["es", "está"], answer: "está", explain: "Estado que cambió → estar." },
      { type: "choice", prompt: "Vos ___ muy inteligente.", options: ["sos", "estás"], answer: "sos", explain: "Característica → ser. En voseo: vos SOS." },
      { type: "choice", prompt: "Los chicos ___ cansados después del partido.", options: ["son", "están"], answer: "están", explain: "Estado físico → estar." },
      { type: "fill", prompt: "¿De dónde ___ vos? (ser)", accept: ["sos"], answer: "sos", explain: "Origen → ser, en voseo: vos SOS." }
    ]
  },
  {
    id: "por-para",
    title: "Por vs. Para",
    explain: "POR → causa, motivo, medio, 'a través de', duración, 'a cambio de'. PARA → destino, finalidad (para + infinitivo), plazo, destinatario. Pista en húngaro: PARA ≈ cél/cím ('-nak/-nek', '-ért' mint cél), POR ≈ ok/eszköz ('miatt', 'által', csere).",
    examples: [
      "Este regalo es para vos. (destinatario → para)",
      "Gracias por la ayuda. (motivo → por)",
      "Estudio para aprobar. (finalidad → para)",
      "Vinimos por la autopista. (a través de → por)"
    ],
    exercises: [
      { type: "choice", prompt: "Este mate es ___ vos.", options: ["por", "para"], answer: "para", explain: "Destinatario → para." },
      { type: "choice", prompt: "Caminamos ___ el parque hasta el río.", options: ["por", "para"], answer: "por", explain: "A través de un lugar → por." },
      { type: "choice", prompt: "Estudio español ___ hablar con mi familia.", options: ["por", "para"], answer: "para", explain: "Finalidad (para + infinitivo) → para." },
      { type: "choice", prompt: "Te llamo ___ teléfono más tarde.", options: ["por", "para"], answer: "por", explain: "Medio → por." },
      { type: "choice", prompt: "Necesito el informe ___ el lunes.", options: ["por", "para"], answer: "para", explain: "Plazo / fecha límite → para." },
      { type: "choice", prompt: "Gracias ___ todo lo que hiciste.", options: ["por", "para"], answer: "por", explain: "Motivo → por." }
    ]
  }
];
