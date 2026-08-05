/* Alemán: por ahora un único tema para practicar (conversación básica de kiosko).
   Mismo formato que grammar.data.js (type "choice"), así reusa el mismo motor
   de ejercicios de Gramática. El contenido queda en alemán con la traducción
   al español entre paréntesis en el "explain". */
window.GRAMMAR_DE = [
  {
    id: "kiosko-de",
    title: "En el kiosko (conversación básica)",
    explain: "Diálogo típico al comprar algo en un kiosko en alemán: pedís lo que querés, preguntás si podés pagar con tarjeta, agradecés y te despedís. En cada paso, elegí lo que dirías vos o lo que te está diciendo el kiosquero.",
    examples: [
      "Guten Tag! Was möchten Sie? = ¡Buen día! ¿Qué desea?",
      "Ich möchte eine Cola, bitte. = Quiero una Coca-Cola, por favor.",
      "Das macht zwei Euro fünfzig. = Son dos euros con cincuenta.",
      "Kann ich mit Karte zahlen? = ¿Puedo pagar con tarjeta?",
      "Danke schön! / Bitte schön! = ¡Muchas gracias! / De nada.",
      "Tschüss! = ¡Chau! (informal)"
    ],
    exercises: [
      {
        type: "choice",
        prompt: "El kiosquero te saluda: «Guten Tag! Was möchten Sie?». Querés pedir una Coca-Cola. ¿Qué decís?",
        options: ["Ich möchte eine Cola, bitte.", "Ich habe eine Cola, bitte."],
        answer: "Ich möchte eine Cola, bitte.",
        explain: "'Ich möchte' = 'quisiera/quiero' (forma educada de pedir). 'Ich habe' significa 'tengo', no sirve para pedir algo."
      },
      {
        type: "choice",
        prompt: "El kiosquero te dice: «Das macht zwei Euro fünfzig.» (Son 2,50 €). Querés preguntar si podés pagar con tarjeta. ¿Qué decís?",
        options: ["Kann ich mit Karte zahlen?", "Kann ich mit Karte kaufen?"],
        answer: "Kann ich mit Karte zahlen?",
        explain: "'Zahlen' = pagar. 'Kaufen' = comprar (eso ya lo estás haciendo; lo que falta es pagar)."
      },
      {
        type: "choice",
        prompt: "El kiosquero responde: «Ja, klar.» ¿Qué te está diciendo?",
        options: ["Sí, claro.", "No, todavía no."],
        answer: "Sí, claro.",
        explain: "'Ja, klar' = 'sí, claro / por supuesto'. Es una forma común e informal de decir que sí."
      },
      {
        type: "choice",
        prompt: "Ya pagaste y te da la Coca-Cola. ¿Cómo le agradecés?",
        options: ["Danke schön!", "Bitte schön!"],
        answer: "Danke schön!",
        explain: "'Danke schön' = 'muchas gracias' (lo decís vos). 'Bitte schön' es lo que te responde ÉL (de nada), no lo que decís vos."
      },
      {
        type: "choice",
        prompt: "El kiosquero te responde: «Bitte schön!». ¿Qué significa acá?",
        options: ["De nada.", "Hasta luego."],
        answer: "De nada.",
        explain: "'Bitte schön' se usa tanto para 'de nada' como para 'acá tenés' al entregarte algo."
      },
      {
        type: "choice",
        prompt: "Te vas del kiosko. ¿Cómo te despedís de forma simple e informal?",
        options: ["Tschüss!", "Entschuldigung!"],
        answer: "Tschüss!",
        explain: "'Tschüss' = 'chau' (informal). 'Entschuldigung' significa 'disculpe' (para pedir perdón o llamar la atención), no sirve para despedirse."
      }
    ]
  }
];
