/* Gramática del alemán (A1): temas para el modo Aventura. Mismo formato que grammar.data.js (type "choice" o "fill").
   Cada ejercicio lleva `nivel` (dificultad de 1 a 100, calculada por dev/aleman/cargar-lote.js).
   GENERADO por dev/aleman/cargar-lote.js: para cambiar algo, editar acá y volver a cargar con --revisar no hace falta. */
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
      { type: "choice", prompt: "El kiosquero te saluda: «Guten Tag! Was möchten Sie?». Querés pedir una Coca-Cola. ¿Qué decís?", options: ["Ich möchte eine Cola, bitte.","Ich habe eine Cola, bitte."], answer: "Ich möchte eine Cola, bitte.", explain: "'Ich möchte' = 'quisiera/quiero' (forma educada de pedir). 'Ich habe' significa 'tengo', no sirve para pedir algo.", nivel: 11 },
      { type: "choice", prompt: "El kiosquero te dice: «Das macht zwei Euro fünfzig.» (Son 2,50 €). Querés preguntar si podés pagar con tarjeta. ¿Qué decís?", options: ["Kann ich mit Karte zahlen?","Kann ich mit Karte kaufen?"], answer: "Kann ich mit Karte zahlen?", explain: "'Zahlen' = pagar. 'Kaufen' = comprar (eso ya lo estás haciendo; lo que falta es pagar).", nivel: 12 },
      { type: "choice", prompt: "El kiosquero responde: «Ja, klar.» ¿Qué te está diciendo?", options: ["Sí, claro.","No, todavía no."], answer: "Sí, claro.", explain: "'Ja, klar' = 'sí, claro / por supuesto'. Es una forma común e informal de decir que sí.", nivel: 8 },
      { type: "choice", prompt: "Ya pagaste y te da la Coca-Cola. ¿Cómo le agradecés?", options: ["Danke schön!","Bitte schön!"], answer: "Danke schön!", explain: "'Danke schön' = 'muchas gracias' (lo decís vos). 'Bitte schön' es lo que te responde ÉL (de nada), no lo que decís vos.", nivel: 9 },
      { type: "choice", prompt: "El kiosquero te responde: «Bitte schön!». ¿Qué significa acá?", options: ["De nada.","Hasta luego."], answer: "De nada.", explain: "'Bitte schön' se usa tanto para 'de nada' como para 'acá tenés' al entregarte algo.", nivel: 8 },
      { type: "choice", prompt: "Te vas del kiosko. ¿Cómo te despedís de forma simple e informal?", options: ["Tschüss!","Entschuldigung!"], answer: "Tschüss!", explain: "'Tschüss' = 'chau' (informal). 'Entschuldigung' significa 'disculpe' (para pedir perdón o llamar la atención), no sirve para despedirse.", nivel: 10 }
    ]
  },
  {
    id: "artikel-genero-de",
    title: "Der, die, das: el género",
    explain: "En alemán, todos los sustantivos son masculinos (der), femeninos (die) o neutros (das) y siempre tenés que aprenderlos con su artículo. El artículo indefinido es 'ein' para masculino y neutro, y 'eine' para femenino. Para el plural siempre se usa 'die'. Fijate en las terminaciones: las palabras que terminan en -ung, -heit o -tion suelen ser 'die', mientras que los diminutivos en -chen o -lein son 'das'. Acordate de que muchas palabras que terminan en -e son femeninas, pero no todas.",
    examples: [
      "Der Tisch ist groß. = La mesa es grande.",
      "Die Frau trinkt Wasser. = La mujer toma agua.",
      "Das Kind spielt im Park. = El niño juega en el parque.",
      "Ich habe ein Auto. = Yo tengo un auto.",
      "Sie kauft eine Banane. = Ella compra una banana."
    ],
    exercises: [
      { type: "choice", prompt: "___ Tisch ist groß.", options: ["der","die","das"], answer: "der", explain: "Tisch es un sustantivo masculino, por eso lleva 'der'.", nivel: 20 },
      { type: "choice", prompt: "___ Frau trinkt Kaffee.", options: ["der","die","das"], answer: "die", explain: "Frau es un sustantivo femenino, así que lleva 'die'.", nivel: 20 },
      { type: "choice", prompt: "___ Mädchen lernt Deutsch.", options: ["der","die","das"], answer: "das", explain: "Las palabras que terminan en -chen siempre son neutras, por lo tanto llevan 'das'.", nivel: 20 },
      { type: "choice", prompt: "___ Auto ist sehr schnell.", options: ["der","die","das"], answer: "das", explain: "Auto es neutro en alemán, entonces lleva 'das'.", nivel: 20 },
      { type: "choice", prompt: "___ Zeitung ist neu.", options: ["der","die","das"], answer: "die", explain: "Las palabras que terminan en -ung son femeninas y llevan 'die'.", nivel: 20 },
      { type: "choice", prompt: "Das ist ___ Hund.", options: ["ein","eine"], answer: "ein", explain: "Hund es masculino, por eso el indefinido es 'ein'.", nivel: 20 },
      { type: "choice", prompt: "Das ist ___ Banane.", options: ["ein","eine"], answer: "eine", explain: "Banane es femenino, entonces el artículo indefinido es 'eine'.", nivel: 20 },
      { type: "fill", prompt: "Das ist ___ Haus. (ein o eine)", accept: ["ein"], answer: "ein", explain: "Haus es neutro, así que lleva 'ein'.", nivel: 21 }
    ]
  },
  {
    id: "praesens-de",
    title: "Präsens: las terminaciones",
    explain: "En el presente, a los verbos regulares les sacás la terminación -en y les sumás la de cada persona: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie -en. Si la raíz del verbo termina en -t o -d, le agregás una 'e' extra para poder pronunciarlo mejor, como en 'du arbeitest'. Mirá bien los verbos irregulares como 'sein' (ser/estar) y 'haben' (tener), que cambian bastante. Además, algunos verbos cambian la vocal de la raíz con 'du' y 'er/sie/es', como 'sprechen' que pasa a 'du sprichst'.",
    examples: [
      "Ich lerne Deutsch. = Yo aprendo alemán.",
      "Du trinkst Kaffee. = Vos tomás café.",
      "Er arbeitet heute. = Él trabaja hoy.",
      "Wir sind aus Argentinien. = Nosotros somos de Argentina.",
      "Sie spricht sehr schnell. = Ella habla muy rápido.",
      "Ihr habt ein Auto. = Ustedes tienen un auto."
    ],
    exercises: [
      { type: "fill", prompt: "Ich ___ in Buenos Aires. (wohnen)", accept: ["wohne"], answer: "wohne", explain: "Para 'ich', sacamos -en y agregamos la terminación -e.", nivel: 25 },
      { type: "fill", prompt: "Was ___ du? (trinken)", accept: ["trinkst"], answer: "trinkst", explain: "Para 'du', al verbo regular trinken se le agrega la terminación -st.", nivel: 24 },
      { type: "fill", prompt: "Er ___ aus Italien. (kommen)", accept: ["kommt"], answer: "kommt", explain: "Para 'er', la terminación regular es -t.", nivel: 24 },
      { type: "fill", prompt: "Wir ___ glücklich. (sein)", accept: ["sind"], answer: "sind", explain: "El verbo sein es irregular y para 'wir' se usa 'sind'.", nivel: 24 },
      { type: "fill", prompt: "___ ihr heute? (arbeiten)", accept: ["Arbeitet","arbeitet"], answer: "Arbeitet", explain: "Como la raíz de arbeiten termina en -t, se suma una -e antes de la terminación -t de 'ihr'.", nivel: 24 },
      { type: "fill", prompt: "Maria ___ gutes Deutsch. (sprechen)", accept: ["spricht"], answer: "spricht", explain: "Para 'Maria' (= er/sie/es), el verbo sprechen cambia la vocal 'e' por 'i' y suma -t: spricht.", nivel: 24 },
      { type: "fill", prompt: "___ du Zeit? (haben)", accept: ["Hast","hast"], answer: "Hast", explain: "El verbo haben pierde la 'b' con 'du', quedando la forma 'hast'.", nivel: 24 },
      { type: "fill", prompt: "Er ___ mit dem Bus. (fahren)", accept: ["fährt","faehrt"], answer: "fährt", explain: "Con 'er', el verbo fahren suma diéresis en la 'a' y la terminación -t.", nivel: 25 }
    ]
  },
  {
    id: "wortstellung-de",
    title: "El orden de las palabras",
    explain: "En una oración afirmativa en alemán, el verbo conjugado va siempre en la segunda posición. Si empezás la frase con algo que no sea el sujeto (como 'heute'), el sujeto tiene que ir justo después del verbo. Cuando hacés una pregunta con una palabra interrogativa (como Wo, Was, Wer), esa palabra va primero y el verbo segundo. Pero si es una pregunta de sí o no, el verbo salta directamente a la primera posición.",
    examples: [
      "Ich wohne in Berlin. = Yo vivo en Berlín.",
      "Heute gehe ich ins Kino. = Hoy voy al cine.",
      "Wo wohnst du? = ¿Dónde vivís?",
      "Was trinkst du? = ¿Qué tomás?",
      "Wohnst du in Berlin? = ¿Vivís en Berlín?",
      "Kommst du aus Argentinien? = ¿Sos de Argentina?"
    ],
    exercises: [
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Ich spiele gern Fußball.","Ich gern spiele Fußball."], answer: "Ich spiele gern Fußball.", explain: "En una oración afirmativa, el verbo conjugado va en la segunda posición.", nivel: 28 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Heute ich lerne Deutsch.","Heute lerne ich Deutsch."], answer: "Heute lerne ich Deutsch.", explain: "Como la oración empieza con 'heute', el verbo va segundo y el sujeto pasa al tercer lugar.", nivel: 28 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Wo du wohnst?","Wo wohnst du?"], answer: "Wo wohnst du?", explain: "En preguntas con palabra interrogativa, el verbo va siempre en la segunda posición.", nivel: 28 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Kommst du aus Berlin?","Du aus Berlin kommst?"], answer: "Kommst du aus Berlin?", explain: "En las preguntas de sí o no, el verbo conjugado tiene que ir en el primer lugar.", nivel: 28 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Wir essen eine Pizza.","Wir eine Pizza essen."], answer: "Wir essen eine Pizza.", explain: "Es una oración afirmativa normal, por lo tanto el verbo va en el segundo lugar.", nivel: 28 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Jetzt ich trinke Tee.","Jetzt trinke ich Tee."], answer: "Jetzt trinke ich Tee.", explain: "Al empezar con el adverbio 'Jetzt', el verbo va en segunda posición y luego sigue el sujeto 'ich'.", nivel: 28 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Was trinkst du?","Was du trinkst?"], answer: "Was trinkst du?", explain: "La palabra interrogativa 'Was' va primero y el verbo 'trinkst' la sigue en segunda posición.", nivel: 28 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Hast du ein Auto?","Hast ein Auto du?"], answer: "Hast du ein Auto?", explain: "Para hacer una pregunta de sí o no, el verbo 'hast' se coloca al principio de la oración.", nivel: 28 }
    ]
  },
  {
    id: "akkusativ-de",
    title: "El acusativo: den, einen, mich",
    explain: "El objeto directo (lo que se ve, se compra, se tiene) va en acusativo. La buena noticia es que solo cambia el masculino: 'der' pasa a 'den' y 'ein' pasa a 'einen'. Los artículos 'die', 'das', el plural y 'eine' quedan igual, no cambian para nada. Fijate también en los pronombres: ich pasa a mich, du a dich, er a ihn, sie a sie, es a es, wir a uns, ihr a euch, y sie a sie.",
    examples: [
      "Ich sehe den Hund. = Yo veo al perro.",
      "Wir kaufen einen Tisch. = Nosotros compramos una mesa.",
      "Sie hat eine Schwester. = Ella tiene una hermana.",
      "Ich liebe dich. = Yo te amo.",
      "Er fragt mich. = Él me pregunta.",
      "Brauchst du das Auto? = ¿Necesitás el auto?"
    ],
    exercises: [
      { type: "choice", prompt: "Ich sehe ___ Hund.", options: ["der","den"], answer: "den", explain: "Como 'Hund' es el objeto directo masculino, 'der' cambia a acusativo y queda 'den'.", nivel: 36 },
      { type: "choice", prompt: "Er hat ___ Schwester.", options: ["eine","einen"], answer: "eine", explain: "La palabra 'Schwester' es femenina, por lo que el artículo 'eine' no cambia en acusativo.", nivel: 36 },
      { type: "choice", prompt: "Wir brauchen ___ Auto.", options: ["ein","einen"], answer: "ein", explain: "El sustantivo 'Auto' es neutro, así que el artículo 'ein' se mantiene igual.", nivel: 36 },
      { type: "choice", prompt: "Ich liebe ___.", options: ["du","dich"], answer: "dich", explain: "El pronombre 'du' en acusativo pasa a ser 'dich'.", nivel: 35 },
      { type: "choice", prompt: "Siehst du ___ Mann?", options: ["der","den"], answer: "den", explain: "El 'Mann' es objeto directo masculino, entonces usamos 'den'.", nivel: 36 },
      { type: "choice", prompt: "Er fragt ___.", options: ["ich","mich"], answer: "mich", explain: "El pronombre para 'ich' en acusativo es 'mich'.", nivel: 35 },
      { type: "fill", prompt: "Ich kaufe ___ Tisch. (el artículo «der» en acusativo)", accept: ["den"], answer: "den", explain: "Mesa (Tisch) es masculino, y como la compramos, va en acusativo: 'den'.", nivel: 38 },
      { type: "fill", prompt: "Er trinkt ___ Kaffee. (el artículo «der» en acusativo)", accept: ["den"], answer: "den", explain: "El café es masculino y es lo que él toma, así que 'der' pasa a 'den'.", nivel: 38 }
    ]
  },
  {
    id: "negation-de",
    title: "nicht y kein",
    explain: "Para negar un sustantivo usamos 'kein', que funciona exactamente igual que 'ein'. Por ejemplo, 'keinen' para masculino en acusativo, 'keine' para femenino y plural, y 'kein' para neutro. En cambio, usamos 'nicht' para negar verbos, adjetivos y todo el resto de las cosas. Acordate de que si negás una acción completa, el 'nicht' suele ir al final de la oración.",
    examples: [
      "Ich habe keinen Hund. = Yo no tengo perro.",
      "Das ist keine Katze. = Eso no es un gato.",
      "Wir trinken kein Bier. = Nosotros no tomamos cerveza.",
      "Ich arbeite nicht. = Yo no trabajo.",
      "Das ist nicht gut. = Eso no es bueno.",
      "Er kommt heute nicht. = Él no viene hoy."
    ],
    exercises: [
      { type: "choice", prompt: "Ich habe ___ Zeit.", options: ["nicht","keine"], answer: "keine", explain: "Como 'Zeit' es un sustantivo femenino, lo negamos con 'keine'.", nivel: 32 },
      { type: "choice", prompt: "Das ist ___ gut.", options: ["nicht","kein"], answer: "nicht", explain: "Para negar un adjetivo como 'gut', siempre se usa 'nicht'.", nivel: 32 },
      { type: "choice", prompt: "Er trinkt ___ Kaffee.", options: ["nicht","keinen"], answer: "keinen", explain: "El café es un sustantivo masculino en acusativo, por eso usamos 'keinen'.", nivel: 32 },
      { type: "choice", prompt: "Wir arbeiten heute ___.", options: ["nicht","keine"], answer: "nicht", explain: "Estamos negando el verbo (la acción de trabajar), así que usamos 'nicht'.", nivel: 32 },
      { type: "choice", prompt: "Das ist ___ Katze.", options: ["nicht","keine"], answer: "keine", explain: "Para negar un sustantivo femenino como 'Katze' usamos 'keine'.", nivel: 32 },
      { type: "fill", prompt: "Ich bin ___ müde. (negación)", accept: ["nicht"], answer: "nicht", explain: "Müde (cansado) es un adjetivo, por lo tanto se niega con 'nicht'.", nivel: 32 },
      { type: "fill", prompt: "Er hat ___ Auto. (negación)", accept: ["kein"], answer: "kein", explain: "Auto es un sustantivo neutro, se niega usando 'kein'.", nivel: 32 },
      { type: "fill", prompt: "Wir haben ___ Hunger. (negación)", accept: ["keinen"], answer: "keinen", explain: "Hunger (hambre) es un sustantivo masculino en acusativo, así que ponemos 'keinen'.", nivel: 32 }
    ]
  },
  {
    id: "modalverben-de",
    title: "können, müssen, wollen, möchten",
    explain: "Los verbos modales cambian bastante al conjugarse. Con 'ich' y 'er/sie/es' tienen la misma forma: ich kann / er kann, ich muss / er muss, ich will / er will, ich möchte / er möchte. La regla de oro acá es el orden de la oración: el modal va conjugado en la segunda posición y el otro verbo va en infinitivo, siempre al final de la frase.",
    examples: [
      "Ich kann gut schwimmen. = Yo puedo nadar bien.",
      "Wir müssen heute arbeiten. = Nosotros tenemos que trabajar hoy.",
      "Er will ein Eis essen. = Él quiere comer un helado.",
      "Ich möchte einen Kaffee trinken. = Yo quisiera tomar un café.",
      "Kannst du mir helfen? = ¿Podés ayudarme?",
      "Ihr müsst jetzt gehen. = Ustedes se tienen que ir ahora."
    ],
    exercises: [
      { type: "fill", prompt: "Ich ___ gut schwimmen. (können)", accept: ["kann"], answer: "kann", explain: "La primera persona del verbo können es irregular: 'kann'.", nivel: 40 },
      { type: "fill", prompt: "Wir ___ nach Hause gehen. (müssen)", accept: ["müssen","muessen"], answer: "müssen", explain: "Para 'wir', el verbo modal se usa en su forma infinitiva: 'müssen'.", nivel: 41 },
      { type: "fill", prompt: "Er ___ ein Eis essen. (wollen)", accept: ["will"], answer: "will", explain: "El verbo wollen cambia su vocal con er/sie/es y no lleva terminación extra, queda 'will'.", nivel: 41 },
      { type: "fill", prompt: "___ du einen Kaffee trinken? (möchten)", accept: ["Möchtest","möchtest","Moechtest","moechtest"], answer: "Möchtest", explain: "Para 'du', al verbo möchten se le agrega la terminación -st.", nivel: 41 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Ich kann gut kochen.","Ich kann kochen gut."], answer: "Ich kann gut kochen.", explain: "El verbo en infinitivo (kochen) tiene que ir sí o sí al final de la oración.", nivel: 40 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Wir müssen lernen heute.","Wir müssen heute lernen."], answer: "Wir müssen heute lernen.", explain: "El verbo principal (lernen) siempre va en infinitivo al final cuando hay un modal.", nivel: 40 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Er will ein Buch lesen.","Er will lesen ein Buch."], answer: "Er will ein Buch lesen.", explain: "El verbo modal va segundo y el verbo en infinitivo (lesen) se ubica en el último lugar.", nivel: 40 },
      { type: "choice", prompt: "¿Cuál oración está bien?", options: ["Möchtest du Wasser trinken?","Möchtest du trinken Wasser?"], answer: "Möchtest du Wasser trinken?", explain: "Incluso en una pregunta, el verbo principal (trinken) se va al final de todo.", nivel: 40 }
    ]
  }
];
