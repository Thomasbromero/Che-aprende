/* Alemán desde cero: lecciones y ejercicios escritos a mano para el modo Aventura.
   Cada tema trae `bloques` (la lección que se lee antes de los ejercicios: párrafos, tablas, ejemplos, notas y tablas de verbos)
   y `exercises` (choice / fill / match / order). GENERADO por dev/aleman/armar-curso.js a partir de curso-1.js y curso-2.js: no se edita a mano. */
window.GRAMMAR_DE = [
 {
  "id": "u01a",
  "title": "Hola y chau",
  "nivel": 3,
  "bloques": [
   {
    "p": "Empecemos por lo más fácil: **saludar y despedirte**. Entre amigos, familia y gente de tu edad se dice así:"
   },
   {
    "tabla": [
     [
      "Hallo",
      "hola",
      "Se lee «jálo»: la h suena como una j suave."
     ],
     [
      "Tschüss",
      "chau",
      "Se lee «chüs»: la ü es una u dicha con la boca de i."
     ],
     [
      "Ja",
      "sí",
      "Se lee «ya»."
     ],
     [
      "Nein",
      "no",
      "Se lee «nain»."
     ]
    ]
   },
   {
    "nota": "«Hallo» y «Tschüss» son informales: perfectos para amigos, familia y gente de tu edad. Para gente que no conocés o más grande hay otras fórmulas: las vemos en los próximos niveles."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Llegás a la casa de un amigo. ¿Qué le decís?",
    "options": [
     "Hallo",
     "Tschüss",
     "Nein"
    ],
    "answer": "Hallo",
    "explain": "«Hallo» = hola.",
    "nivel": 3
   },
   {
    "type": "choice",
    "prompt": "Te vas de la casa de un amigo. ¿Qué le decís?",
    "options": [
     "Hallo",
     "Tschüss",
     "Ja"
    ],
    "answer": "Tschüss",
    "explain": "«Tschüss» = chau.",
    "nivel": 3
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "Hallo",
      "right": "hola"
     },
     {
      "left": "Tschüss",
      "right": "chau"
     },
     {
      "left": "Ja",
      "right": "sí"
     },
     {
      "left": "Nein",
      "right": "no"
     }
    ],
    "answer": "Hallo = hola · Tschüss = chau · Ja = sí · Nein = no",
    "explain": "Hallo = hola · Tschüss = chau · Ja = sí · Nein = no",
    "nivel": 3
   },
   {
    "type": "fill",
    "prompt": "Escribí «sí» en alemán: ___",
    "answer": "Ja",
    "accept": [
     "Ja"
    ],
    "explain": "«Ja» = sí (se lee «ya»).",
    "nivel": 3
   },
   {
    "type": "fill",
    "prompt": "Escribí «hola» en alemán: ___",
    "answer": "Hallo",
    "accept": [
     "Hallo"
    ],
    "explain": "«Hallo» = hola.",
    "nivel": 3
   }
  ]
 },
 {
  "id": "u01b",
  "title": "Buen día, buenas tardes, buenas noches",
  "nivel": 4,
  "bloques": [
   {
    "p": "En alemán hay un saludo distinto según la hora del día:"
   },
   {
    "tabla": [
     [
      "Guten Morgen",
      "buen día (a la mañana)",
      "Se lee «gúten mórguen»."
     ],
     [
      "Guten Tag",
      "buenas tardes (durante el día)",
      "Se lee «gúten tak». Es el saludo de todos los días: sirve con cualquier persona."
     ],
     [
      "Guten Abend",
      "buenas noches (al llegar a la noche)",
      "Se lee «gúten ábent»."
     ],
     [
      "Gute Nacht",
      "buenas noches (para irse a dormir)",
      "Se lee «gúte najt»: la ch suena como una j suave."
     ]
    ]
   },
   {
    "nota": "Fijate que «Gute Nacht» no lleva la «n» final de «Guten». Es porque «Nacht» es femenina; más adelante vas a ver por qué."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Son las 8 de la mañana y entrás a la oficina. ¿Qué decís?",
    "options": [
     "Guten Morgen",
     "Guten Abend",
     "Gute Nacht"
    ],
    "answer": "Guten Morgen",
    "explain": "«Morgen» = mañana (la parte del día).",
    "nivel": 4
   },
   {
    "type": "choice",
    "prompt": "Te vas a dormir y saludás a tu familia. ¿Qué decís?",
    "options": [
     "Guten Tag",
     "Gute Nacht",
     "Guten Morgen"
    ],
    "answer": "Gute Nacht",
    "explain": "«Gute Nacht» se dice solo para ir a dormir.",
    "nivel": 4
   },
   {
    "type": "choice",
    "prompt": "Llegás a una cena a las 20 h. ¿Qué decís?",
    "options": [
     "Guten Abend",
     "Guten Morgen",
     "Gute Nacht"
    ],
    "answer": "Guten Abend",
    "explain": "«Abend» = noche (la hora de la cena).",
    "nivel": 4
   },
   {
    "type": "choice",
    "prompt": "Es mediodía y saludás en el negocio. ¿Qué decís?",
    "options": [
     "Guten Tag",
     "Gute Nacht",
     "Guten Abend"
    ],
    "answer": "Guten Tag",
    "explain": "«Tag» = día. «Guten Tag» es el saludo de todos los días.",
    "nivel": 4
   },
   {
    "type": "fill",
    "prompt": "Escribí «buenas noches» para ir a dormir: Gute ___",
    "answer": "Nacht",
    "accept": [
     "Nacht"
    ],
    "explain": "«Gute Nacht» = buenas noches (para dormir).",
    "nivel": 4
   },
   {
    "type": "match",
    "prompt": "Unir cada saludo con el momento.",
    "pairs": [
     {
      "left": "Guten Morgen",
      "right": "a la mañana"
     },
     {
      "left": "Guten Tag",
      "right": "durante el día"
     },
     {
      "left": "Guten Abend",
      "right": "a la noche"
     },
     {
      "left": "Gute Nacht",
      "right": "para dormir"
     }
    ],
    "answer": "Guten Morgen = a la mañana · Guten Tag = durante el día · Guten Abend = a la noche · Gute Nacht = para dormir",
    "explain": "Guten Morgen = a la mañana · Guten Tag = durante el día · Guten Abend = a la noche · Gute Nacht = para dormir",
    "nivel": 4
   }
  ]
 },
 {
  "id": "u01c",
  "title": "Gracias, por favor y perdón",
  "nivel": 4,
  "bloques": [
   {
    "p": "Las tres palabras más útiles para ser amable en cualquier idioma:"
   },
   {
    "tabla": [
     [
      "Danke",
      "gracias",
      "Se lee «dánke»."
     ],
     [
      "Bitte",
      "por favor / de nada",
      "Se lee «bíte»."
     ],
     [
      "Entschuldigung",
      "perdón / disculpe",
      "Se lee «entshúldigung». La «sch» suena como «sh»."
     ],
     [
      "Es tut mir leid",
      "lo siento",
      "Se lee «es tut mir lait»."
     ]
    ]
   },
   {
    "nota": "«Bitte» tiene dos usos: para pedir algo («por favor») y para responder a un «Danke» («de nada»)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Te dan un café. ¿Qué decís?",
    "options": [
     "Danke",
     "Bitte",
     "Nein"
    ],
    "answer": "Danke",
    "explain": "«Danke» = gracias.",
    "nivel": 4
   },
   {
    "type": "choice",
    "prompt": "Alguien te dice «Danke». ¿Qué le respondés?",
    "options": [
     "Bitte",
     "Danke",
     "Tschüss"
    ],
    "answer": "Bitte",
    "explain": "«Bitte» también significa «de nada».",
    "nivel": 4
   },
   {
    "type": "choice",
    "prompt": "Chocás a alguien sin querer. ¿Qué decís?",
    "options": [
     "Entschuldigung",
     "Hallo",
     "Ja"
    ],
    "answer": "Entschuldigung",
    "explain": "«Entschuldigung» = perdón.",
    "nivel": 4
   },
   {
    "type": "choice",
    "prompt": "Un amigo te cuenta que se enfermó. ¿Qué le decís?",
    "options": [
     "Es tut mir leid",
     "Danke",
     "Guten Morgen"
    ],
    "answer": "Es tut mir leid",
    "explain": "«Es tut mir leid» = lo siento.",
    "nivel": 4
   },
   {
    "type": "fill",
    "prompt": "Escribí «gracias» en alemán: ___",
    "answer": "Danke",
    "accept": [
     "Danke"
    ],
    "explain": "«Danke» = gracias.",
    "nivel": 4
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Danke",
      "right": "gracias"
     },
     {
      "left": "Bitte",
      "right": "por favor"
     },
     {
      "left": "Entschuldigung",
      "right": "perdón"
     },
     {
      "left": "Es tut mir leid",
      "right": "lo siento"
     }
    ],
    "answer": "Danke = gracias · Bitte = por favor · Entschuldigung = perdón · Es tut mir leid = lo siento",
    "explain": "Danke = gracias · Bitte = por favor · Entschuldigung = perdón · Es tut mir leid = lo siento",
    "nivel": 4
   }
  ]
 },
 {
  "id": "u01d",
  "title": "Despedidas y buenos deseos",
  "nivel": 5,
  "bloques": [
   {
    "p": "Más formas de despedirte y de desearle algo bueno a alguien:"
   },
   {
    "tabla": [
     [
      "Auf Wiedersehen",
      "adiós (más formal que «Tschüss»)",
      "Se lee «auf vídersen»."
     ],
     [
      "Bis bald",
      "hasta pronto",
      "Se lee «bis balt»."
     ],
     [
      "Bis morgen",
      "hasta mañana",
      "Se lee «bis mórguen»."
     ],
     [
      "Prost",
      "¡salud! (al brindar)",
      "Se lee «prost»."
     ],
     [
      "Willkommen",
      "bienvenido",
      "Se lee «vilkómen»."
     ],
     [
      "Viel Glück",
      "buena suerte",
      "Se lee «fil glük»."
     ]
    ]
   },
   {
    "nota": "Fijate cómo suenan dos letras que engañan: la **w** alemana suena como nuestra **v** («Willkommen» = «vilkómen») y la **v** suena como **f** («Viel» = «fil»). En dos niveles las vemos con calma."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Te despedís de un profesor y querés ser formal. ¿Qué decís?",
    "options": [
     "Auf Wiedersehen",
     "Tschüss",
     "Prost"
    ],
    "answer": "Auf Wiedersehen",
    "explain": "«Auf Wiedersehen» es la despedida formal.",
    "nivel": 5
   },
   {
    "type": "choice",
    "prompt": "Mañana volvés a ver a un compañero. ¿Qué le decís al despedirte?",
    "options": [
     "Bis morgen",
     "Prost",
     "Danke"
    ],
    "answer": "Bis morgen",
    "explain": "«Bis morgen» = hasta mañana.",
    "nivel": 5
   },
   {
    "type": "choice",
    "prompt": "Brindás con tus amigos. ¿Qué decís?",
    "options": [
     "Prost",
     "Viel Glück",
     "Gute Nacht"
    ],
    "answer": "Prost",
    "explain": "«Prost» = ¡salud!",
    "nivel": 5
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Auf Wiedersehen",
      "right": "adiós (formal)"
     },
     {
      "left": "Bis bald",
      "right": "hasta pronto"
     },
     {
      "left": "Bis morgen",
      "right": "hasta mañana"
     },
     {
      "left": "Viel Glück",
      "right": "buena suerte"
     }
    ],
    "answer": "Auf Wiedersehen = adiós (formal) · Bis bald = hasta pronto · Bis morgen = hasta mañana · Viel Glück = buena suerte",
    "explain": "Auf Wiedersehen = adiós (formal) · Bis bald = hasta pronto · Bis morgen = hasta mañana · Viel Glück = buena suerte",
    "nivel": 5
   }
  ]
 },
 {
  "id": "u02a",
  "title": "Cómo suena el alemán: las vocales",
  "nivel": 5,
  "bloques": [
   {
    "p": "El alemán se lee **casi como se escribe**, y las reglas son siempre las mismas. Eso lo hace mucho más fácil de lo que parece. Primero, las vocales con puntitos y la «ß»:"
   },
   {
    "tabla": [
     [
      "ä",
      "suena como una «e» abierta",
      "Mädchen = «médjen» (la chica)"
     ],
     [
      "ö",
      "decí «e» con la boca como para decir «o»",
      "schön = «shoen» (lindo)"
     ],
     [
      "ü",
      "decí «i» con la boca como para decir «u»",
      "Tschüss = «chüs» (chau)"
     ],
     [
      "ß",
      "suena como «ss»",
      "heißen = «jáisen» (llamarse)"
     ]
    ]
   },
   {
    "p": "Y estas combinaciones de vocales, que suenan distinto de lo que parece:"
   },
   {
    "tabla": [
     [
      "ei",
      "suena «ai»",
      "nein = «nain»"
     ],
     [
      "ie",
      "suena «i» larga",
      "Bier = «bir» (cerveza)"
     ],
     [
      "eu / äu",
      "suena «oi»",
      "neun = «noin» (nueve)"
     ],
     [
      "au",
      "suena «au», como en español",
      "Haus = «jaus» (casa)"
     ]
    ]
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo suena «nein» (no)?",
    "options": [
     "nain",
     "néin",
     "nen"
    ],
    "answer": "nain",
    "explain": "«ei» suena «ai»: nein = «nain».",
    "nivel": 5
   },
   {
    "type": "choice",
    "prompt": "¿Cómo suena «Bier» (cerveza)?",
    "options": [
     "bir",
     "bíer",
     "béir"
    ],
    "answer": "bir",
    "explain": "«ie» suena como una «i» larga: Bier = «bir».",
    "nivel": 5
   },
   {
    "type": "choice",
    "prompt": "¿Cómo suena «neun» (nueve)?",
    "options": [
     "noin",
     "néun",
     "nun"
    ],
    "answer": "noin",
    "explain": "«eu» suena «oi»: neun = «noin».",
    "nivel": 5
   },
   {
    "type": "choice",
    "prompt": "¿Qué letra suena como «ss»?",
    "options": [
     "ß",
     "ü",
     "ö"
    ],
    "answer": "ß",
    "explain": "La «ß» (se llama «Eszett») suena como «ss».",
    "nivel": 5
   },
   {
    "type": "choice",
    "prompt": "¿Qué vocal se dice poniendo la boca como para decir «u» pero diciendo «i»?",
    "options": [
     "ü",
     "ö",
     "ä"
    ],
    "answer": "ü",
    "explain": "La «ü» es una «i» con la boca redondeada como para la «u».",
    "nivel": 5
   },
   {
    "type": "match",
    "prompt": "Unir cada combinación de letras con su sonido.",
    "pairs": [
     {
      "left": "ei",
      "right": "ai"
     },
     {
      "left": "ie",
      "right": "i larga"
     },
     {
      "left": "eu",
      "right": "oi"
     },
     {
      "left": "ä",
      "right": "e abierta"
     }
    ],
    "answer": "ei = ai · ie = i larga · eu = oi · ä = e abierta",
    "explain": "ei = ai · ie = i larga · eu = oi · ä = e abierta",
    "nivel": 5
   }
  ]
 },
 {
  "id": "u02b",
  "title": "Cómo suena el alemán: las consonantes",
  "nivel": 6,
  "bloques": [
   {
    "p": "Ahora las letras que **no suenan como en español**. Con estas pocas reglas ya podés leer cualquier palabra:"
   },
   {
    "tabla": [
     [
      "w",
      "suena como nuestra «v»",
      "Wasser = «vásser» (agua)"
     ],
     [
      "v",
      "suena casi siempre como «f»",
      "Vater = «fáter» (padre)"
     ],
     [
      "z",
      "suena «ts»",
      "zehn = «tsen» (diez)"
     ],
     [
      "sch",
      "suena «sh»",
      "Schule = «shúle» (escuela)"
     ],
     [
      "tsch",
      "suena «ch»",
      "Tschüss = «chüs»"
     ],
     [
      "j",
      "suena como nuestra «y»",
      "ja = «ya» (sí)"
     ],
     [
      "h",
      "al principio de una palabra suena como una «j» suave",
      "Hallo = «jálo»"
     ]
    ]
   },
   {
    "nota": "Y la «ch»: después de a, o, u suena como una «j» suave (Nacht = «najt», noche). Después de i o e suena más suave todavía, casi como una «sh» (ich = «ish» suave)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo suena «Wasser» (agua)?",
    "options": [
     "vásser",
     "uáser",
     "guáser"
    ],
    "answer": "vásser",
    "explain": "La «w» alemana suena como nuestra «v».",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "¿Cómo suena «Vater» (padre)?",
    "options": [
     "fáter",
     "váter",
     "báter"
    ],
    "answer": "fáter",
    "explain": "La «v» alemana suena casi siempre como «f».",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "¿Cómo suena «zehn» (diez)?",
    "options": [
     "tsen",
     "sen",
     "ken"
    ],
    "answer": "tsen",
    "explain": "La «z» alemana suena «ts».",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "¿Cómo suena «Schule» (escuela)?",
    "options": [
     "shúle",
     "skúle",
     "chúle"
    ],
    "answer": "shúle",
    "explain": "«sch» suena «sh».",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "¿Cómo suena «ja» (sí)?",
    "options": [
     "ya",
     "ja (como en «jamón»)",
     "cha"
    ],
    "answer": "ya",
    "explain": "La «j» alemana suena como nuestra «y».",
    "nivel": 6
   },
   {
    "type": "match",
    "prompt": "Unir cada letra con su sonido.",
    "pairs": [
     {
      "left": "w",
      "right": "v"
     },
     {
      "left": "v",
      "right": "f"
     },
     {
      "left": "z",
      "right": "ts"
     },
     {
      "left": "sch",
      "right": "sh"
     }
    ],
    "answer": "w = v · v = f · z = ts · sch = sh",
    "explain": "w = v · v = f · z = ts · sch = sh",
    "nivel": 6
   }
  ]
 },
 {
  "id": "u03a",
  "title": "Yo, vos, él, ella",
  "nivel": 6,
  "bloques": [
   {
    "p": "Antes de armar frases necesitás saber **quién** hace la acción. Estas son las palabras para «yo», «vos», «él» y «ella»:"
   },
   {
    "tabla": [
     [
      "ich",
      "yo",
      "Se lee casi «ij» (ch suave)."
     ],
     [
      "du",
      "vos (tú)",
      "Se lee «du»."
     ],
     [
      "er",
      "él",
      "Se lee «er»."
     ],
     [
      "sie",
      "ella",
      "Se lee «si»."
     ],
     [
      "es",
      "ello (para cosas y animales)",
      "Se lee «es»."
     ]
    ]
   },
   {
    "nota": "**«du» es el «vos» alemán**: lo usás con amigos, familia, chicos y gente de tu edad. Para gente que no conocés o mayor hay otra palabra, la vemos en el próximo nivel. Y ojo: «ich» va con minúscula en medio de una frase; solo se escribe con mayúscula al empezar."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo se dice «yo»?",
    "options": [
     "ich",
     "du",
     "er"
    ],
    "answer": "ich",
    "explain": "«ich» = yo.",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "Hablás con tu mejor amigo. ¿Qué palabra usás para decirle «vos»?",
    "options": [
     "du",
     "er",
     "es"
    ],
    "answer": "du",
    "explain": "«du» = vos.",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "Querés hablar de tu hermana. ¿Qué palabra usás?",
    "options": [
     "sie",
     "er",
     "du"
    ],
    "answer": "sie",
    "explain": "«sie» = ella.",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "Querés hablar de un amigo (varón). ¿Qué palabra usás?",
    "options": [
     "er",
     "sie",
     "ich"
    ],
    "answer": "er",
    "explain": "«er» = él.",
    "nivel": 6
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "ich",
      "right": "yo"
     },
     {
      "left": "du",
      "right": "vos"
     },
     {
      "left": "er",
      "right": "él"
     },
     {
      "left": "sie",
      "right": "ella"
     }
    ],
    "answer": "ich = yo · du = vos · er = él · sie = ella",
    "explain": "ich = yo · du = vos · er = él · sie = ella",
    "nivel": 6
   },
   {
    "type": "fill",
    "prompt": "Escribí «yo» en alemán: ___",
    "answer": "ich",
    "accept": [
     "ich",
     "Ich"
    ],
    "explain": "«ich» = yo.",
    "nivel": 6
   }
  ]
 },
 {
  "id": "u03b",
  "title": "Nosotros, ustedes, ellos y usted",
  "nivel": 7,
  "bloques": [
   {
    "p": "Ahora los plurales, y la palabra para tratar con respeto a alguien:"
   },
   {
    "tabla": [
     [
      "wir",
      "nosotros",
      "Se lee «vir»."
     ],
     [
      "ihr",
      "ustedes (entre amigos)",
      "Se lee «ir». Es «vos + otra persona»."
     ],
     [
      "sie",
      "ellos / ellas",
      "Se lee «si». Igual que «ella»; se distingue por el verbo."
     ],
     [
      "Sie",
      "usted (formal)",
      "Se lee «si». Siempre con S mayúscula."
     ]
    ]
   },
   {
    "p": "En alemán hay **dos formas de hablarle a alguien**: informal (**du**) y formal (**Sie**). Con un compañero o un amigo usás «du»; con un cliente, un médico o un desconocido mayor usás «Sie»."
   },
   {
    "nota": "«sie» (ella o ellos) con minúscula y «Sie» (usted) con mayúscula suenan igual: la mayúscula y el contexto te dicen cuál es."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Contás algo que hacés con tu hermano («nosotros»). ¿Qué palabra usás?",
    "options": [
     "wir",
     "ihr",
     "sie"
    ],
    "answer": "wir",
    "explain": "«wir» = nosotros.",
    "nivel": 7
   },
   {
    "type": "choice",
    "prompt": "Le hablás a un grupo de amigos (ustedes). ¿Qué palabra usás?",
    "options": [
     "ihr",
     "wir",
     "du"
    ],
    "answer": "ihr",
    "explain": "«ihr» = ustedes (informal).",
    "nivel": 7
   },
   {
    "type": "choice",
    "prompt": "Le hablás a un médico que no conocés. ¿Qué palabra usás?",
    "options": [
     "Sie",
     "du",
     "ihr"
    ],
    "answer": "Sie",
    "explain": "A los desconocidos y a los mayores se les dice «Sie».",
    "nivel": 7
   },
   {
    "type": "choice",
    "prompt": "Le hablás a tu mejor amigo. ¿Qué palabra usás?",
    "options": [
     "du",
     "Sie",
     "ihr"
    ],
    "answer": "du",
    "explain": "Con amigos, «du».",
    "nivel": 7
   },
   {
    "type": "choice",
    "prompt": "Hablás de Anna y de vos. ¿Qué palabra reemplaza a «Anna und ich»?",
    "options": [
     "wir",
     "ihr",
     "sie"
    ],
    "answer": "wir",
    "explain": "Anna y yo = nosotros = «wir».",
    "nivel": 7
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "wir",
      "right": "nosotros"
     },
     {
      "left": "ihr",
      "right": "ustedes"
     },
     {
      "left": "sie",
      "right": "ellos / ellas"
     },
     {
      "left": "Sie",
      "right": "usted"
     }
    ],
    "answer": "wir = nosotros · ihr = ustedes · sie = ellos / ellas · Sie = usted",
    "explain": "wir = nosotros · ihr = ustedes · sie = ellos / ellas · Sie = usted",
    "nivel": 7
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Sie» con S mayúscula en medio de una frase?",
    "options": [
     "usted",
     "ella",
     "vos"
    ],
    "answer": "usted",
    "explain": "«Sie» con mayúscula es el «usted» formal.",
    "nivel": 7
   }
  ]
 },
 {
  "id": "u04a",
  "title": "«Ser» y «estar»: ich bin, du bist",
  "nivel": 7,
  "bloques": [
   {
    "p": "El verbo más importante del alemán es **sein** (ser y estar, todo en uno). Cambia según quién habla:"
   },
   {
    "tabla": [
     [
      "ich bin",
      "yo soy / yo estoy",
      "Se lee «ij bin»."
     ],
     [
      "du bist",
      "vos sos / vos estás",
      "Se lee «du bist»."
     ],
     [
      "er ist",
      "él es / él está",
      "Se lee «er ist»."
     ],
     [
      "sie ist",
      "ella es / ella está",
      "Se lee «si ist»."
     ],
     [
      "es ist",
      "ello es / ello está",
      "Se lee «es ist»."
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich bin Thomas.",
      "Soy Thomas."
     ],
     [
      "Du bist Anna.",
      "Vos sos Anna."
     ],
     [
      "Er ist in Berlin.",
      "Él está en Berlín."
     ],
     [
      "Sie ist Lehrerin.",
      "Ella es maestra."
     ]
    ]
   },
   {
    "nota": "Fijate que en alemán el verbo siempre va **después** de la palabra que dice quién es: «ich bin», «du bist». Y «sein» sirve para «ser» y para «estar»: el contexto decide cuál."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich ___ Thomas. (sein)",
    "answer": "bin",
    "accept": [
     "bin"
    ],
    "explain": "Con «ich» el verbo «sein» es «bin».",
    "nivel": 7
   },
   {
    "type": "fill",
    "prompt": "Du ___ Anna. (sein)",
    "answer": "bist",
    "accept": [
     "bist"
    ],
    "explain": "Con «du» el verbo «sein» es «bist».",
    "nivel": 7
   },
   {
    "type": "fill",
    "prompt": "Er ___ in Berlin. (sein)",
    "answer": "ist",
    "accept": [
     "ist"
    ],
    "explain": "Con «er» el verbo «sein» es «ist».",
    "nivel": 7
   },
   {
    "type": "choice",
    "prompt": "¿Cómo se dice «Soy Lukas»?",
    "options": [
     "Ich bin Lukas.",
     "Ich ist Lukas.",
     "Ich bist Lukas."
    ],
    "answer": "Ich bin Lukas.",
    "explain": "Con «ich» va «bin».",
    "nivel": 7
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Du bist Anna»?",
    "options": [
     "Vos sos Anna.",
     "Yo soy Anna.",
     "Ella es Anna."
    ],
    "answer": "Vos sos Anna.",
    "explain": "«du bist» = vos sos.",
    "nivel": 7
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "ich bin",
      "right": "yo soy"
     },
     {
      "left": "du bist",
      "right": "vos sos"
     },
     {
      "left": "er ist",
      "right": "él es"
     },
     {
      "left": "sie ist",
      "right": "ella es"
     }
    ],
    "answer": "ich bin = yo soy · du bist = vos sos · er ist = él es · sie ist = ella es",
    "explain": "ich bin = yo soy · du bist = vos sos · er ist = él es · sie ist = ella es",
    "nivel": 7
   },
   {
    "type": "order",
    "prompt": "Ordená: «Soy Lukas».",
    "answer": "Ich bin Lukas.",
    "words": [
     "Lukas.",
     "Ich",
     "bin"
    ],
    "explain": "«Ich bin Lukas.» = Soy Lukas.",
    "nivel": 7
   }
  ]
 },
 {
  "id": "u04b",
  "title": "«Ser» y «estar»: wir sind, ihr seid, sie sind",
  "nivel": 8,
  "bloques": [
   {
    "p": "Y ahora el resto de las personas:"
   },
   {
    "tabla": [
     [
      "wir sind",
      "nosotros somos / estamos",
      "Se lee «vir sint»."
     ],
     [
      "ihr seid",
      "ustedes son / están",
      "Se lee «ir sait»."
     ],
     [
      "sie sind",
      "ellos son / están",
      "Se lee «si sint»."
     ],
     [
      "Sie sind",
      "usted es / está",
      "Se lee «si sint»."
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Wir sind Freunde.",
      "Somos amigos."
     ],
     [
      "Ihr seid in Argentinien.",
      "Ustedes están en Argentina."
     ],
     [
      "Sie sind Lehrer.",
      "Ellos son maestros."
     ],
     [
      "Sind Sie Herr Müller?",
      "¿Es usted el señor Müller?"
     ]
    ]
   },
   {
    "nota": "Repaso de todo «sein»: **ich bin · du bist · er/sie/es ist · wir sind · ihr seid · sie/Sie sind**. Memorizalo: se usa todo el tiempo."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Wir ___ Freunde. (sein)",
    "answer": "sind",
    "accept": [
     "sind"
    ],
    "explain": "Con «wir» el verbo «sein» es «sind».",
    "nivel": 8
   },
   {
    "type": "fill",
    "prompt": "Ihr ___ in Argentinien. (sein)",
    "answer": "seid",
    "accept": [
     "seid"
    ],
    "explain": "Con «ihr» el verbo «sein» es «seid».",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "Anna und Tom ___ hier. (sein)",
    "options": [
     "sind",
     "ist",
     "bist"
    ],
    "answer": "sind",
    "explain": "Anna y Tom = ellos = «sie» → «sind».",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "¿Qué palabra va con «seid»?",
    "options": [
     "ihr",
     "du",
     "ich"
    ],
    "answer": "ihr",
    "explain": "«ihr seid» = ustedes son.",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "Elegí la forma correcta: «Du ___ müde.» (sein)",
    "options": [
     "bist",
     "bin",
     "ist"
    ],
    "answer": "bist",
    "explain": "Con «du» va «bist».",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "Elegí la forma correcta: «Ich ___ in Berlin.» (sein)",
    "options": [
     "bin",
     "bist",
     "sind"
    ],
    "answer": "bin",
    "explain": "Con «ich» va «bin».",
    "nivel": 8
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "wir sind",
      "right": "nosotros somos"
     },
     {
      "left": "ihr seid",
      "right": "ustedes son"
     },
     {
      "left": "sie sind",
      "right": "ellos son"
     },
     {
      "left": "ich bin",
      "right": "yo soy"
     }
    ],
    "answer": "wir sind = nosotros somos · ihr seid = ustedes son · sie sind = ellos son · ich bin = yo soy",
    "explain": "wir sind = nosotros somos · ihr seid = ustedes son · sie sind = ellos son · ich bin = yo soy",
    "nivel": 8
   },
   {
    "type": "order",
    "prompt": "Ordená: «Somos amigos».",
    "answer": "Wir sind Freunde.",
    "words": [
     "sind",
     "Freunde.",
     "Wir"
    ],
    "explain": "«Wir sind Freunde.» = Somos amigos.",
    "nivel": 8
   }
  ]
 },
 {
  "id": "u05a",
  "title": "Cómo te llamás",
  "nivel": 8,
  "bloques": [
   {
    "p": "Para decir cómo te llamás usás el verbo **heißen** (llamarse):"
   },
   {
    "tabla": [
     [
      "Wie heißt du?",
      "¿Cómo te llamás?",
      "Se lee «vi jaist du»."
     ],
     [
      "Ich heiße Lukas.",
      "Me llamo Lukas.",
      "Se lee «ij jáise lúkas»."
     ]
    ]
   },
   {
    "verbosRef": [
     "v-heissen"
    ],
    "t": "presente"
   },
   {
    "nota": "«wie» = cómo. Fijate el orden: en la pregunta, «heißt» va **antes** de «du»: «Wie heißt du?». Probá decirlo en voz alta con tu nombre."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo preguntás «¿Cómo te llamás?»?",
    "options": [
     "Wie heißt du?",
     "Wie bist du?",
     "Ich heiße du?"
    ],
    "answer": "Wie heißt du?",
    "explain": "«wie» = cómo, «heißt» = te llamás.",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "Alguien te pregunta «Wie heißt du?». ¿Qué respondés?",
    "options": [
     "Ich heiße Thomas.",
     "Guten Morgen.",
     "Bis morgen."
    ],
    "answer": "Ich heiße Thomas.",
    "explain": "«Ich heiße…» = me llamo…",
    "nivel": 8
   },
   {
    "type": "fill",
    "prompt": "Ich ___ Anna. (heißen)",
    "answer": "heiße",
    "accept": [
     "heiße",
     "heisse"
    ],
    "explain": "Con «ich»: «heiße».",
    "estricto": true,
    "nivel": 8
   },
   {
    "type": "fill",
    "prompt": "Wie ___ du? (heißen)",
    "answer": "heißt",
    "accept": [
     "heißt",
     "heisst"
    ],
    "explain": "Con «du»: «heißt».",
    "estricto": true,
    "nivel": 8
   },
   {
    "type": "order",
    "prompt": "Ordená: «Me llamo Lukas».",
    "answer": "Ich heiße Lukas.",
    "words": [
     "heiße",
     "Lukas.",
     "Ich"
    ],
    "explain": "«Ich heiße Lukas.» = Me llamo Lukas.",
    "nivel": 8
   },
   {
    "type": "order",
    "prompt": "Ordená: «¿Cómo te llamás?»",
    "answer": "Wie heißt du?",
    "words": [
     "du?",
     "Wie",
     "heißt"
    ],
    "explain": "«Wie heißt du?» = ¿Cómo te llamás?",
    "nivel": 8
   }
  ]
 },
 {
  "id": "u05b",
  "title": "De dónde sos",
  "nivel": 8,
  "bloques": [
   {
    "p": "Para decir de dónde sos usás el verbo **kommen** (venir) con la palabra «aus» (de):"
   },
   {
    "tabla": [
     [
      "Woher kommst du?",
      "¿De dónde sos?",
      "Se lee «vojér komst du»."
     ],
     [
      "Ich komme aus Argentinien.",
      "Soy de Argentina.",
      "Literalmente: «vengo de Argentina»."
     ]
    ]
   },
   {
    "verbosRef": [
     "v-kommen"
    ],
    "t": "presente"
   },
   {
    "p": "Algunos países que te van a servir:"
   },
   {
    "tabla": [
     [
      "Argentinien",
      "Argentina"
     ],
     [
      "Deutschland",
      "Alemania"
     ],
     [
      "Österreich",
      "Austria"
     ],
     [
      "die Schweiz",
      "Suiza"
     ],
     [
      "Ungarn",
      "Hungría"
     ],
     [
      "Brasilien",
      "Brasil"
     ],
     [
      "Chile",
      "Chile"
     ],
     [
      "Uruguay",
      "Uruguay"
     ],
     [
      "Italien",
      "Italia"
     ],
     [
      "Frankreich",
      "Francia"
     ]
    ]
   }
  ],
  "exercises": [
   {
    "type": "order",
    "prompt": "Ordená: «Soy de Argentina».",
    "answer": "Ich komme aus Argentinien.",
    "words": [
     "Argentinien.",
     "aus",
     "komme",
     "Ich"
    ],
    "explain": "«Ich komme aus Argentinien.» = Soy de Argentina.",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Woher kommst du?»",
    "options": [
     "¿De dónde sos?",
     "¿Cómo te llamás?",
     "¿Cómo andás?"
    ],
    "answer": "¿De dónde sos?",
    "explain": "«woher» = de dónde.",
    "nivel": 8
   },
   {
    "type": "match",
    "prompt": "Unir cada país con su nombre en alemán.",
    "pairs": [
     {
      "left": "Alemania",
      "right": "Deutschland"
     },
     {
      "left": "Austria",
      "right": "Österreich"
     },
     {
      "left": "Hungría",
      "right": "Ungarn"
     },
     {
      "left": "Argentina",
      "right": "Argentinien"
     }
    ],
    "answer": "Alemania = Deutschland · Austria = Österreich · Hungría = Ungarn · Argentina = Argentinien",
    "explain": "Alemania = Deutschland · Austria = Österreich · Hungría = Ungarn · Argentina = Argentinien",
    "nivel": 8
   },
   {
    "type": "fill",
    "prompt": "Ich komme aus ___. (Alemania)",
    "answer": "Deutschland",
    "accept": [
     "Deutschland"
    ],
    "explain": "«Deutschland» = Alemania.",
    "nivel": 8
   },
   {
    "type": "fill",
    "prompt": "Woher ___ du? (kommen)",
    "answer": "kommst",
    "accept": [
     "kommst"
    ],
    "explain": "Con «du»: «kommst».",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "«Ich komme aus Österreich» significa…",
    "options": [
     "Soy de Austria.",
     "Soy de Alemania.",
     "Soy de Suiza."
    ],
    "answer": "Soy de Austria.",
    "explain": "«Österreich» = Austria.",
    "nivel": 8
   }
  ]
 },
 {
  "id": "u05c",
  "title": "¿Cómo andás?",
  "nivel": 9,
  "bloques": [
   {
    "p": "Para preguntar cómo está alguien y para contestar:"
   },
   {
    "tabla": [
     [
      "Wie geht es dir?",
      "¿Cómo andás?",
      "Se lee «vi guet es dir»."
     ],
     [
      "Sehr gut!",
      "¡Muy bien!"
     ],
     [
      "Gut, danke.",
      "Bien, gracias."
     ],
     [
      "Es geht.",
      "Más o menos."
     ],
     [
      "Schlecht.",
      "Mal."
     ],
     [
      "Und dir?",
      "¿Y vos?"
     ]
    ]
   },
   {
    "nota": "«dir» es el «a vos / para vos» de «du». Por ahora memorizá «Wie geht es dir?» y «Und dir?» como frases hechas, sin analizarlas."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Te preguntan «Wie geht es dir?» y estás muy bien. ¿Qué respondés?",
    "options": [
     "Sehr gut, danke!",
     "Schlecht.",
     "Tschüss!"
    ],
    "answer": "Sehr gut, danke!",
    "explain": "«Sehr gut» = muy bien.",
    "nivel": 9
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Es geht»?",
    "options": [
     "Más o menos",
     "Muy bien",
     "Mal"
    ],
    "answer": "Más o menos",
    "explain": "«Es geht» = más o menos.",
    "nivel": 9
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Wie geht es dir?",
      "right": "¿Cómo andás?"
     },
     {
      "left": "Sehr gut",
      "right": "muy bien"
     },
     {
      "left": "Schlecht",
      "right": "mal"
     },
     {
      "left": "Und dir?",
      "right": "¿Y vos?"
     }
    ],
    "answer": "Wie geht es dir? = ¿Cómo andás? · Sehr gut = muy bien · Schlecht = mal · Und dir? = ¿Y vos?",
    "explain": "Wie geht es dir? = ¿Cómo andás? · Sehr gut = muy bien · Schlecht = mal · Und dir? = ¿Y vos?",
    "nivel": 9
   },
   {
    "type": "fill",
    "prompt": "Escribí «mal» en alemán: ___",
    "answer": "Schlecht",
    "accept": [
     "Schlecht",
     "schlecht"
    ],
    "explain": "«schlecht» = mal.",
    "nivel": 9
   },
   {
    "type": "choice",
    "prompt": "Completá: «Gut, danke. Und ___?»",
    "options": [
     "dir",
     "ich",
     "ja"
    ],
    "answer": "dir",
    "explain": "«Und dir?» = ¿Y vos?",
    "nivel": 9
   },
   {
    "type": "order",
    "prompt": "Ordená: «¿Cómo andás?»",
    "answer": "Wie geht es dir?",
    "words": [
     "es",
     "dir?",
     "geht",
     "Wie"
    ],
    "explain": "«Wie geht es dir?» = ¿Cómo andás?",
    "nivel": 9
   }
  ]
 },
 {
  "id": "u05d",
  "title": "¿Hablás alemán?",
  "nivel": 9,
  "bloques": [
   {
    "p": "Cuando recién empezás vas a necesitar estas frases salvavidas:"
   },
   {
    "tabla": [
     [
      "Sprichst du Deutsch?",
      "¿Hablás alemán?",
      "Se lee «shprijst du doich»."
     ],
     [
      "Ich spreche ein bisschen Deutsch.",
      "Hablo un poquito de alemán."
     ],
     [
      "Ich verstehe nicht.",
      "No entiendo."
     ],
     [
      "Noch einmal, bitte.",
      "Otra vez, por favor."
     ],
     [
      "Wie bitte?",
      "¿Cómo? / ¿Perdón? (no escuché)"
     ]
    ]
   },
   {
    "nota": "Estas frases te van a servir muchísimo para practicar con personas: ahora mismo ya podrías pedirle a alguien que repita más despacio."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "No entendés lo que te dijo alguien. ¿Qué le decís?",
    "options": [
     "Ich verstehe nicht.",
     "Danke.",
     "Guten Tag."
    ],
    "answer": "Ich verstehe nicht.",
    "explain": "«Ich verstehe nicht» = no entiendo.",
    "nivel": 9
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Sprichst du Deutsch?»",
    "options": [
     "¿Hablás alemán?",
     "¿De dónde sos?",
     "¿Cómo te llamás?"
    ],
    "answer": "¿Hablás alemán?",
    "explain": "«sprichst» = hablás; «Deutsch» = alemán.",
    "nivel": 9
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Ich verstehe nicht",
      "right": "no entiendo"
     },
     {
      "left": "Noch einmal, bitte",
      "right": "otra vez, por favor"
     },
     {
      "left": "Wie bitte?",
      "right": "¿perdón? (no escuché)"
     },
     {
      "left": "ein bisschen",
      "right": "un poquito"
     }
    ],
    "answer": "Ich verstehe nicht = no entiendo · Noch einmal, bitte = otra vez, por favor · Wie bitte? = ¿perdón? (no escuché) · ein bisschen = un poquito",
    "explain": "Ich verstehe nicht = no entiendo · Noch einmal, bitte = otra vez, por favor · Wie bitte? = ¿perdón? (no escuché) · ein bisschen = un poquito",
    "nivel": 9
   },
   {
    "type": "order",
    "prompt": "Ordená: «No entiendo».",
    "answer": "Ich verstehe nicht.",
    "words": [
     "nicht.",
     "Ich",
     "verstehe"
    ],
    "explain": "«Ich verstehe nicht.» = No entiendo.",
    "nivel": 9
   },
   {
    "type": "order",
    "prompt": "Ordená: «¿Hablás alemán?»",
    "answer": "Sprichst du Deutsch?",
    "words": [
     "Deutsch?",
     "du",
     "Sprichst"
    ],
    "explain": "«Sprichst du Deutsch?» = ¿Hablás alemán?",
    "nivel": 9
   }
  ]
 },
 {
  "id": "u06a",
  "title": "Los números del 0 al 5",
  "nivel": 5,
  "bloques": [
   {
    "p": "Vamos a contar. Los primeros números:"
   },
   {
    "tabla": [
     [
      "0",
      "null",
      "Se lee «nul»."
     ],
     [
      "1",
      "eins",
      "Se lee «ains»."
     ],
     [
      "2",
      "zwei",
      "Se lee «tsvai»."
     ],
     [
      "3",
      "drei",
      "Se lee «drai»."
     ],
     [
      "4",
      "vier",
      "Se lee «fir»."
     ],
     [
      "5",
      "fünf",
      "Se lee «fünf»."
     ]
    ]
   },
   {
    "nota": "Recordá: la «z» suena «ts» y la «w» suena «v» (zwei = «tsvai»); «ei» suena «ai» (eins, zwei, drei) y «ie» suena «i» (vier = «fir»)."
   }
  ],
  "exercises": [
   {
    "type": "match",
    "prompt": "Unir cada número con su nombre en alemán.",
    "pairs": [
     {
      "left": "1",
      "right": "eins"
     },
     {
      "left": "2",
      "right": "zwei"
     },
     {
      "left": "3",
      "right": "drei"
     },
     {
      "left": "4",
      "right": "vier"
     }
    ],
    "answer": "1 = eins · 2 = zwei · 3 = drei · 4 = vier",
    "explain": "1 = eins · 2 = zwei · 3 = drei · 4 = vier",
    "nivel": 5
   },
   {
    "type": "choice",
    "prompt": "¿Qué número es «drei»?",
    "options": [
     "3",
     "2",
     "4"
    ],
    "answer": "3",
    "explain": "«drei» = 3.",
    "nivel": 5
   },
   {
    "type": "fill",
    "prompt": "Escribí 4 en alemán: ___",
    "answer": "vier",
    "accept": [
     "vier"
    ],
    "explain": "4 = «vier».",
    "nivel": 5
   },
   {
    "type": "fill",
    "prompt": "Escribí 0 en alemán: ___",
    "answer": "null",
    "accept": [
     "null"
    ],
    "explain": "0 = «null».",
    "nivel": 5
   },
   {
    "type": "choice",
    "prompt": "Zwei plus eins ist…",
    "options": [
     "drei",
     "vier",
     "eins"
    ],
    "answer": "drei",
    "explain": "2 + 1 = 3 = «drei».",
    "nivel": 5
   }
  ]
 },
 {
  "id": "u06b",
  "title": "Los números del 6 al 10",
  "nivel": 6,
  "bloques": [
   {
    "p": "Seguimos contando:"
   },
   {
    "tabla": [
     [
      "6",
      "sechs",
      "Se lee «seks»."
     ],
     [
      "7",
      "sieben",
      "Se lee «síben»."
     ],
     [
      "8",
      "acht",
      "Se lee «ajt»."
     ],
     [
      "9",
      "neun",
      "Se lee «noin»."
     ],
     [
      "10",
      "zehn",
      "Se lee «tsen»."
     ]
    ]
   },
   {
    "nota": "Un truco para recordar: «acht» (8) suena parecido a «ocho»; «neun» (9) suena «noin»; «zehn» (10) suena «tsen»."
   }
  ],
  "exercises": [
   {
    "type": "match",
    "prompt": "Unir cada número con su nombre en alemán.",
    "pairs": [
     {
      "left": "6",
      "right": "sechs"
     },
     {
      "left": "7",
      "right": "sieben"
     },
     {
      "left": "8",
      "right": "acht"
     },
     {
      "left": "9",
      "right": "neun"
     },
     {
      "left": "10",
      "right": "zehn"
     }
    ],
    "answer": "6 = sechs · 7 = sieben · 8 = acht · 9 = neun · 10 = zehn",
    "explain": "6 = sechs · 7 = sieben · 8 = acht · 9 = neun · 10 = zehn",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "¿Qué número es «neun»?",
    "options": [
     "9",
     "6",
     "10"
    ],
    "answer": "9",
    "explain": "«neun» = 9.",
    "nivel": 6
   },
   {
    "type": "fill",
    "prompt": "Escribí 7 en alemán: ___",
    "answer": "sieben",
    "accept": [
     "sieben"
    ],
    "explain": "7 = «sieben».",
    "nivel": 6
   },
   {
    "type": "fill",
    "prompt": "Escribí 10 en alemán: ___",
    "answer": "zehn",
    "accept": [
     "zehn"
    ],
    "explain": "10 = «zehn».",
    "nivel": 6
   },
   {
    "type": "choice",
    "prompt": "Fünf plus drei ist…",
    "options": [
     "acht",
     "sechs",
     "zehn"
    ],
    "answer": "acht",
    "explain": "5 + 3 = 8 = «acht».",
    "nivel": 6
   }
  ]
 },
 {
  "id": "u06c",
  "title": "Del 11 al 20",
  "nivel": 8,
  "bloques": [
   {
    "p": "Del 13 al 19 es fácil: **número + «zehn»** (drei + zehn = dreizehn). Solo el 11 y el 12 son especiales:"
   },
   {
    "tabla": [
     [
      "11",
      "elf"
     ],
     [
      "12",
      "zwölf"
     ],
     [
      "13",
      "dreizehn"
     ],
     [
      "14",
      "vierzehn"
     ],
     [
      "15",
      "fünfzehn"
     ],
     [
      "16",
      "sechzehn"
     ],
     [
      "17",
      "siebzehn"
     ],
     [
      "18",
      "achtzehn"
     ],
     [
      "19",
      "neunzehn"
     ],
     [
      "20",
      "zwanzig"
     ]
    ]
   },
   {
    "nota": "Ojo con dos: **16 es «sechzehn»** (sin la «s» final de «sechs») y **17 es «siebzehn»** (sin el «en» de «sieben»)."
   }
  ],
  "exercises": [
   {
    "type": "match",
    "prompt": "Unir cada número con su nombre en alemán.",
    "pairs": [
     {
      "left": "11",
      "right": "elf"
     },
     {
      "left": "12",
      "right": "zwölf"
     },
     {
      "left": "13",
      "right": "dreizehn"
     },
     {
      "left": "20",
      "right": "zwanzig"
     }
    ],
    "answer": "11 = elf · 12 = zwölf · 13 = dreizehn · 20 = zwanzig",
    "explain": "11 = elf · 12 = zwölf · 13 = dreizehn · 20 = zwanzig",
    "nivel": 8
   },
   {
    "type": "fill",
    "prompt": "Escribí 15 en alemán: ___",
    "answer": "fünfzehn",
    "accept": [
     "fünfzehn",
     "fuenfzehn"
    ],
    "explain": "5 + zehn = fünfzehn.",
    "estricto": true,
    "nivel": 8
   },
   {
    "type": "fill",
    "prompt": "Escribí 16 en alemán: ___",
    "answer": "sechzehn",
    "accept": [
     "sechzehn"
    ],
    "explain": "16 = «sechzehn» (sin la «s» final).",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "¿Qué número es «siebzehn»?",
    "options": [
     "17",
     "7",
     "70"
    ],
    "answer": "17",
    "explain": "«siebzehn» = 17.",
    "nivel": 8
   },
   {
    "type": "choice",
    "prompt": "¿Cómo se dice 12?",
    "options": [
     "zwölf",
     "zwei",
     "zwanzig"
    ],
    "answer": "zwölf",
    "explain": "12 = «zwölf».",
    "nivel": 8
   },
   {
    "type": "fill",
    "prompt": "Escribí 11 en alemán: ___",
    "answer": "elf",
    "accept": [
     "elf"
    ],
    "explain": "11 = «elf».",
    "nivel": 8
   }
  ]
 },
 {
  "id": "u06d",
  "title": "Las decenas y la edad",
  "nivel": 9,
  "bloques": [
   {
    "p": "Las decenas terminan en **«-zig»** (menos 30: «dreißig»):"
   },
   {
    "tabla": [
     [
      "20",
      "zwanzig"
     ],
     [
      "30",
      "dreißig"
     ],
     [
      "40",
      "vierzig"
     ],
     [
      "50",
      "fünfzig"
     ],
     [
      "60",
      "sechzig"
     ],
     [
      "70",
      "siebzig"
     ],
     [
      "80",
      "achtzig"
     ],
     [
      "90",
      "neunzig"
     ],
     [
      "100",
      "hundert"
     ]
    ]
   },
   {
    "p": "Y los números compuestos se dicen **al revés**: primero la unidad y después la decena. 21 es «einundzwanzig» (uno-y-veinte)."
   },
   {
    "ejemplos": [
     [
      "einundzwanzig",
      "21"
     ],
     [
      "fünfunddreißig",
      "35"
     ],
     [
      "achtundvierzig",
      "48"
     ]
    ]
   },
   {
    "nota": "Para decir la edad: «Wie alt bist du?» (¿Cuántos años tenés?) → «Ich bin dreißig Jahre alt.» Fijate que en alemán se usa «sein» (ser), no «tener»: «yo soy treinta años viejo»."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich bin ___ Jahre alt. (30)",
    "answer": "dreißig",
    "accept": [
     "dreißig",
     "dreissig"
    ],
    "explain": "30 = «dreißig».",
    "estricto": true,
    "nivel": 9
   },
   {
    "type": "choice",
    "prompt": "¿Cómo se dice 21?",
    "options": [
     "einundzwanzig",
     "zwanzigeins",
     "zwanzigundein"
    ],
    "answer": "einundzwanzig",
    "explain": "Primero la unidad: «ein-und-zwanzig».",
    "nivel": 9
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Wie alt bist du?»",
    "options": [
     "¿Cuántos años tenés?",
     "¿Cómo te llamás?",
     "¿De dónde sos?"
    ],
    "answer": "¿Cuántos años tenés?",
    "explain": "«alt» = viejo; «wie alt» = cuán viejo.",
    "nivel": 9
   },
   {
    "type": "fill",
    "prompt": "Escribí 50 en alemán: ___",
    "answer": "fünfzig",
    "accept": [
     "fünfzig",
     "fuenfzig"
    ],
    "explain": "50 = «fünfzig».",
    "estricto": true,
    "nivel": 9
   },
   {
    "type": "match",
    "prompt": "Unir cada número con su nombre en alemán.",
    "pairs": [
     {
      "left": "40",
      "right": "vierzig"
     },
     {
      "left": "60",
      "right": "sechzig"
     },
     {
      "left": "80",
      "right": "achtzig"
     },
     {
      "left": "100",
      "right": "hundert"
     }
    ],
    "answer": "40 = vierzig · 60 = sechzig · 80 = achtzig · 100 = hundert",
    "explain": "40 = vierzig · 60 = sechzig · 80 = achtzig · 100 = hundert",
    "nivel": 9
   },
   {
    "type": "choice",
    "prompt": "«vierundfünfzig» es…",
    "options": [
     "54",
     "45",
     "41"
    ],
    "answer": "54",
    "explain": "vier-und-fünfzig = 4 y 50 = 54.",
    "nivel": 9
   }
  ]
 },
 {
  "id": "u07a",
  "title": "Der, die, das: el género",
  "nivel": 10,
  "bloques": [
   {
    "p": "En alemán, **todo sustantivo** (el nombre de una persona, un animal o una cosa) tiene un género y va acompañado de su artículo, que es la palabra para «el / la»:"
   },
   {
    "tabla": [
     [
      "der",
      "masculino",
      "der Hund = el perro"
     ],
     [
      "die",
      "femenino",
      "die Katze = la gata"
     ],
     [
      "das",
      "neutro",
      "das Kind = el niño"
     ]
    ]
   },
   {
    "nota": "El género alemán **no coincide siempre con el español**: «das Mädchen» (la chica) es neutro. No hay truco: **aprendé cada palabra junto con su artículo**, siempre: «der Hund», no solo «Hund»."
   },
   {
    "nota": "Y una regla fácil: **los sustantivos siempre se escriben con mayúscula inicial**, estén donde estén en la frase («die Katze», «der Hund»)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo se escribe «la gata»?",
    "options": [
     "die Katze",
     "die katze",
     "der Katze"
    ],
    "answer": "die Katze",
    "explain": "«Katze» es femenina (die) y, como todo sustantivo, va con mayúscula.",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "¿Qué artículo lleva «Hund» (perro)?",
    "options": [
     "der",
     "die",
     "das"
    ],
    "answer": "der",
    "explain": "«der Hund»: masculino.",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "¿Qué artículo lleva «Katze» (gata)?",
    "options": [
     "der",
     "die",
     "das"
    ],
    "answer": "die",
    "explain": "«die Katze»: femenino.",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "¿Qué artículo lleva «Kind» (niño)?",
    "options": [
     "der",
     "die",
     "das"
    ],
    "answer": "das",
    "explain": "«das Kind»: neutro.",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "¿Qué artículo lleva «Mädchen» (chica)?",
    "options": [
     "der",
     "die",
     "das"
    ],
    "answer": "das",
    "explain": "Aunque sea una chica, «das Mädchen» es neutro: las palabras que terminan en «-chen» son siempre neutras.",
    "nivel": 10
   },
   {
    "type": "match",
    "prompt": "Unir cada sustantivo con su artículo.",
    "pairs": [
     {
      "left": "Hund",
      "right": "der"
     },
     {
      "left": "Katze",
      "right": "die"
     },
     {
      "left": "Kind",
      "right": "das"
     }
    ],
    "answer": "Hund = der · Katze = die · Kind = das",
    "explain": "Hund = der · Katze = die · Kind = das",
    "nivel": 10
   }
  ]
 },
 {
  "id": "u07b",
  "title": "Un y una: ein y eine",
  "nivel": 11,
  "bloques": [
   {
    "p": "Para decir **«un / una»** usás el artículo indefinido: **ein** (con palabras «der» y «das») y **eine** (con palabras «die»):"
   },
   {
    "tabla": [
     [
      "der Hund",
      "ein Hund",
      "un perro"
     ],
     [
      "die Katze",
      "eine Katze",
      "una gata"
     ],
     [
      "das Kind",
      "ein Kind",
      "un niño"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Das ist ein Hund.",
      "Eso es un perro."
     ],
     [
      "Das ist eine Katze.",
      "Eso es una gata."
     ],
     [
      "Das ist ein Kind.",
      "Eso es un niño."
     ]
    ]
   },
   {
    "nota": "«Das ist…» significa «Esto es… / Eso es…»: la frase que más vas a usar para señalar cosas."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Das ist ___ Hund. (un perro)",
    "options": [
     "ein",
     "eine"
    ],
    "answer": "ein",
    "explain": "«Hund» es «der»: lleva «ein».",
    "nivel": 11
   },
   {
    "type": "choice",
    "prompt": "Das ist ___ Katze. (una gata)",
    "options": [
     "ein",
     "eine"
    ],
    "answer": "eine",
    "explain": "«Katze» es «die»: lleva «eine».",
    "nivel": 11
   },
   {
    "type": "choice",
    "prompt": "Das ist ___ Kind. (un niño)",
    "options": [
     "ein",
     "eine"
    ],
    "answer": "ein",
    "explain": "«Kind» es «das»: lleva «ein».",
    "nivel": 11
   },
   {
    "type": "fill",
    "prompt": "Das ist ___ Frau. (una mujer)",
    "answer": "eine",
    "accept": [
     "eine"
    ],
    "explain": "«Frau» es «die»: lleva «eine».",
    "nivel": 11
   },
   {
    "type": "order",
    "prompt": "Ordená: «Eso es un perro».",
    "answer": "Das ist ein Hund.",
    "words": [
     "Hund.",
     "Das",
     "ist",
     "ein"
    ],
    "explain": "«Das ist ein Hund.» = Eso es un perro.",
    "nivel": 11
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "ein Hund",
      "right": "un perro"
     },
     {
      "left": "eine Katze",
      "right": "una gata"
     },
     {
      "left": "ein Kind",
      "right": "un niño"
     }
    ],
    "answer": "ein Hund = un perro · eine Katze = una gata · ein Kind = un niño",
    "explain": "ein Hund = un perro · eine Katze = una gata · ein Kind = un niño",
    "nivel": 11
   }
  ]
 },
 {
  "id": "u07c",
  "title": "Más de uno: el plural",
  "nivel": 12,
  "bloques": [
   {
    "p": "En plural el artículo es **siempre «die»**, sea cual sea el género. Y el sustantivo cambia de varias formas; no hay una regla única, así que conviene aprender el plural junto con cada palabra. Las terminaciones más comunes:"
   },
   {
    "tabla": [
     [
      "-e",
      "der Hund → die Hunde"
     ],
     [
      "-n / -en",
      "die Katze → die Katzen"
     ],
     [
      "-er (y la vocal cambia)",
      "das Kind → die Kinder"
     ],
     [
      "-s",
      "das Auto → die Autos"
     ],
     [
      "no cambia",
      "der Onkel → die Onkel"
     ],
     [
      "cambia la vocal (¨)",
      "die Mutter → die Mütter"
     ]
    ]
   },
   {
    "nota": "Cuando aprendas una palabra nueva, aprendé también su plural: lo vas a ver siempre en las tarjetas de palabras («Plural: die Hunde»)."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Plural de «der Hund»: die ___",
    "answer": "Hunde",
    "accept": [
     "Hunde"
    ],
    "explain": "«die Hunde».",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Plural de «die Katze»: die ___",
    "answer": "Katzen",
    "accept": [
     "Katzen"
    ],
    "explain": "«die Katzen».",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Plural de «das Kind»: die ___",
    "answer": "Kinder",
    "accept": [
     "Kinder"
    ],
    "explain": "«die Kinder».",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Plural de «das Auto»: die ___",
    "answer": "Autos",
    "accept": [
     "Autos"
    ],
    "explain": "«die Autos».",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "¿Qué artículo lleva el plural?",
    "options": [
     "die",
     "der",
     "das"
    ],
    "answer": "die",
    "explain": "En plural siempre es «die».",
    "nivel": 12
   },
   {
    "type": "match",
    "prompt": "Unir cada singular con su plural.",
    "pairs": [
     {
      "left": "der Hund",
      "right": "die Hunde"
     },
     {
      "left": "die Katze",
      "right": "die Katzen"
     },
     {
      "left": "das Kind",
      "right": "die Kinder"
     },
     {
      "left": "das Auto",
      "right": "die Autos"
     }
    ],
    "answer": "der Hund = die Hunde · die Katze = die Katzen · das Kind = die Kinder · das Auto = die Autos",
    "explain": "der Hund = die Hunde · die Katze = die Katzen · das Kind = die Kinder · das Auto = die Autos",
    "nivel": 12
   }
  ]
 },
 {
  "id": "u08",
  "title": "Mi, tu, su: mein, dein, sein",
  "nivel": 13,
  "bloques": [
   {
    "p": "Para decir **«mi», «tu», «su»** usás estas palabras, que van delante del sustantivo:"
   },
   {
    "tabla": [
     [
      "mein",
      "mi",
      "mein Vater"
     ],
     [
      "dein",
      "tu (de vos)",
      "dein Vater"
     ],
     [
      "sein",
      "su (de él)",
      "sein Vater"
     ],
     [
      "ihr",
      "su (de ella)",
      "ihr Vater"
     ],
     [
      "unser",
      "nuestro",
      "unser Vater"
     ],
     [
      "euer",
      "su (de ustedes)",
      "euer Vater"
     ]
    ]
   },
   {
    "nota": "Con sustantivos **femeninos** y con **plurales** se agrega una «-e»: **mein** Vater pero **meine** Mutter, **meine** Eltern (mis padres)."
   },
   {
    "ejemplos": [
     [
      "Mein Vater heißt Peter.",
      "Mi padre se llama Peter."
     ],
     [
      "Meine Mutter heißt Eva.",
      "Mi madre se llama Eva."
     ],
     [
      "Meine Eltern heißen Peter und Eva.",
      "Mis padres se llaman Peter y Eva. («und» = y)"
     ]
    ]
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "___ Vater heißt Peter. (mi)",
    "answer": "Mein",
    "accept": [
     "Mein",
     "mein"
    ],
    "explain": "Con «Vater» (masculino): «mein».",
    "nivel": 13
   },
   {
    "type": "choice",
    "prompt": "«Meine Mutter» significa…",
    "options": [
     "mi madre",
     "mi padre",
     "su madre (de él)"
    ],
    "answer": "mi madre",
    "explain": "«meine» = mi (con un sustantivo femenino).",
    "nivel": 13
   },
   {
    "type": "choice",
    "prompt": "Con «Mutter» (femenino) usás…",
    "options": [
     "meine",
     "mein"
    ],
    "answer": "meine",
    "explain": "Con sustantivos femeninos se agrega la «-e».",
    "nivel": 13
   },
   {
    "type": "choice",
    "prompt": "Con «Vater» (masculino) usás…",
    "options": [
     "mein",
     "meine"
    ],
    "answer": "mein",
    "explain": "Con sustantivos masculinos va «mein».",
    "nivel": 13
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "mein",
      "right": "mi"
     },
     {
      "left": "dein",
      "right": "tu (de vos)"
     },
     {
      "left": "sein",
      "right": "su (de él)"
     },
     {
      "left": "unser",
      "right": "nuestro"
     }
    ],
    "answer": "mein = mi · dein = tu (de vos) · sein = su (de él) · unser = nuestro",
    "explain": "mein = mi · dein = tu (de vos) · sein = su (de él) · unser = nuestro",
    "nivel": 13
   },
   {
    "type": "order",
    "prompt": "Ordená: «Mi madre se llama Eva».",
    "answer": "Meine Mutter heißt Eva.",
    "words": [
     "Eva.",
     "Mutter",
     "Meine",
     "heißt"
    ],
    "explain": "«Meine Mutter heißt Eva.» = Mi madre se llama Eva.",
    "nivel": 13
   }
  ]
 },
 {
  "id": "u09a",
  "title": "Los verbos: las terminaciones del presente",
  "nivel": 14,
  "bloques": [
   {
    "p": "El verbo básico (el **infinitivo**) termina en **«-en»**: machen (hacer), wohnen (vivir), lernen (aprender). Para conjugarlo sacás el «-en» y le agregás una terminación según **quién** hace la acción:"
   },
   {
    "tabla": [
     [
      "ich",
      "-e",
      "ich mache"
     ],
     [
      "du",
      "-st",
      "du machst"
     ],
     [
      "er / sie / es",
      "-t",
      "er macht"
     ],
     [
      "wir",
      "-en",
      "wir machen"
     ],
     [
      "ihr",
      "-t",
      "ihr macht"
     ],
     [
      "sie / Sie",
      "-en",
      "sie machen"
     ]
    ]
   },
   {
    "verbosRef": [
     "v-machen",
     "v-wohnen"
    ],
    "t": "presente"
   },
   {
    "nota": "Dos cosas para recordar: «wir» y «sie/Sie» tienen la misma forma que el infinitivo; y si la raíz termina en **-t** o **-d**, se agrega una «e» para poder pronunciarlo: **arbeiten → du arbeitest, er arbeitet**."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich ___ Deutsch. (lernen)",
    "answer": "lerne",
    "accept": [
     "lerne"
    ],
    "explain": "Con «ich»: raíz «lern» + «-e».",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Du ___ in Berlin. (wohnen)",
    "answer": "wohnst",
    "accept": [
     "wohnst"
    ],
    "explain": "Con «du»: raíz «wohn» + «-st».",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Er ___ in Berlin. (arbeiten)",
    "answer": "arbeitet",
    "accept": [
     "arbeitet"
    ],
    "explain": "La raíz «arbeit» termina en «t»: se agrega una «e» → «arbeitet».",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Wir ___ Deutsch. (lernen)",
    "answer": "lernen",
    "accept": [
     "lernen"
    ],
    "explain": "Con «wir» el verbo queda igual que el infinitivo.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Ihr ___ in Berlin. (wohnen)",
    "answer": "wohnt",
    "accept": [
     "wohnt"
    ],
    "explain": "Con «ihr»: raíz «wohn» + «-t».",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada persona con su terminación.",
    "pairs": [
     {
      "left": "ich",
      "right": "-e"
     },
     {
      "left": "du",
      "right": "-st"
     },
     {
      "left": "wir",
      "right": "-en"
     },
     {
      "left": "ihr",
      "right": "-t"
     }
    ],
    "answer": "ich = -e · du = -st · wir = -en · ihr = -t",
    "explain": "ich = -e · du = -st · wir = -en · ihr = -t",
    "nivel": 14
   }
  ]
 },
 {
  "id": "u09b",
  "title": "Verbos que cambian de vocal",
  "nivel": 16,
  "bloques": [
   {
    "p": "Algunos verbos importantes cambian la vocal de la raíz, pero **solo con «du» y «er / sie / es»**. Con los demás son regulares:"
   },
   {
    "tabla": [
     [
      "sprechen (hablar)",
      "e → i",
      "ich spreche · du sprichst · er spricht"
     ],
     [
      "essen (comer)",
      "e → i",
      "ich esse · du isst · er isst"
     ],
     [
      "sehen (ver)",
      "e → ie",
      "ich sehe · du siehst · er sieht"
     ],
     [
      "lesen (leer)",
      "e → ie",
      "ich lese · du liest · er liest"
     ],
     [
      "fahren (ir en vehículo)",
      "a → ä",
      "ich fahre · du fährst · er fährt"
     ],
     [
      "schlafen (dormir)",
      "a → ä",
      "ich schlafe · du schläfst · er schläft"
     ]
    ]
   },
   {
    "nota": "No se pueden adivinar: se aprenden con cada verbo. Por suerte son pocos, y las tarjetas de verbos de los próximos niveles te los muestran enteros."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Du ___ gut Deutsch. (sprechen)",
    "answer": "sprichst",
    "accept": [
     "sprichst"
    ],
    "explain": "«sprechen» cambia e → i: «du sprichst».",
    "nivel": 16
   },
   {
    "type": "fill",
    "prompt": "Er ___ Brot. (essen)",
    "answer": "isst",
    "accept": [
     "isst"
    ],
    "explain": "«essen» cambia e → i: «er isst».",
    "nivel": 16
   },
   {
    "type": "fill",
    "prompt": "Du ___ Anna. (sehen)",
    "answer": "siehst",
    "accept": [
     "siehst"
    ],
    "explain": "«sehen» cambia e → ie: «du siehst».",
    "nivel": 16
   },
   {
    "type": "fill",
    "prompt": "Er ___ Auto. (fahren)",
    "answer": "fährt",
    "accept": [
     "fährt",
     "faehrt"
    ],
    "explain": "«fahren» cambia a → ä: «er fährt».",
    "estricto": true,
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "«Ich schlafe»: ¿cómo es con «du»?",
    "options": [
     "du schläfst",
     "du schlafst",
     "du schläfest"
    ],
    "answer": "du schläfst",
    "explain": "«schlafen» cambia a → ä con «du»: «schläfst».",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "¿Cuál de estos verbos NO cambia la vocal?",
    "options": [
     "wohnen",
     "sprechen",
     "essen"
    ],
    "answer": "wohnen",
    "explain": "«wohnen» es regular: du wohnst, er wohnt.",
    "nivel": 16
   }
  ]
 },
 {
  "id": "u09c",
  "title": "El verbo «haben»: tener",
  "nivel": 15,
  "bloques": [
   {
    "p": "Otro verbo imprescindible es **haben** (tener). Es irregular, así que conviene memorizarlo entero:"
   },
   {
    "verbosRef": [
     "v-haben"
    ],
    "t": "presente"
   },
   {
    "ejemplos": [
     [
      "Ich habe einen Hund.",
      "Tengo un perro."
     ],
     [
      "Du hast ein Auto.",
      "Tenés un auto."
     ],
     [
      "Sie hat eine Schwester.",
      "Ella tiene una hermana."
     ],
     [
      "Wir haben Hunger.",
      "Tenemos hambre."
     ]
    ]
   },
   {
    "nota": "Con «der Hund» ves **einen Hund** (y no «ein Hund»): es un cambio que se explica en uno de los próximos niveles. Y «haben» también se usa para el hambre y la sed: «Ich habe **Hunger**» (tengo hambre), «Ich habe **Durst**» (tengo sed)."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich ___ einen Hund. (haben)",
    "answer": "habe",
    "accept": [
     "habe"
    ],
    "explain": "Con «ich»: «habe».",
    "nivel": 15
   },
   {
    "type": "fill",
    "prompt": "Du ___ ein Auto. (haben)",
    "answer": "hast",
    "accept": [
     "hast"
    ],
    "explain": "Con «du»: «hast».",
    "nivel": 15
   },
   {
    "type": "fill",
    "prompt": "Sie ___ eine Schwester. (haben)",
    "answer": "hat",
    "accept": [
     "hat"
    ],
    "explain": "Con «sie» (ella): «hat».",
    "nivel": 15
   },
   {
    "type": "fill",
    "prompt": "Wir ___ Hunger. (haben)",
    "answer": "haben",
    "accept": [
     "haben"
    ],
    "explain": "Con «wir»: «haben».",
    "nivel": 15
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Ich habe Durst»?",
    "options": [
     "Tengo sed.",
     "Tengo hambre.",
     "Soy alto."
    ],
    "answer": "Tengo sed.",
    "explain": "«Durst» = sed.",
    "nivel": 15
   },
   {
    "type": "match",
    "prompt": "Unir cada forma con su persona.",
    "pairs": [
     {
      "left": "ich",
      "right": "habe"
     },
     {
      "left": "du",
      "right": "hast"
     },
     {
      "left": "er / sie / es",
      "right": "hat"
     },
     {
      "left": "ihr",
      "right": "habt"
     }
    ],
    "answer": "ich = habe · du = hast · er / sie / es = hat · ihr = habt",
    "explain": "ich = habe · du = hast · er / sie / es = hat · ihr = habt",
    "nivel": 15
   }
  ]
 },
 {
  "id": "u10",
  "title": "El orden de las palabras",
  "nivel": 17,
  "bloques": [
   {
    "p": "En alemán el orden de la frase es muy firme. La regla de oro: **el verbo conjugado va siempre en segunda posición**."
   },
   {
    "ejemplos": [
     [
      "Ich wohne in Berlin.",
      "Vivo en Berlín."
     ],
     [
      "Wir lernen Deutsch.",
      "Aprendemos alemán."
     ]
    ]
   },
   {
    "p": "Las **preguntas con una palabra interrogativa** empiezan con esa palabra y el verbo va segundo:"
   },
   {
    "tabla": [
     [
      "Wo",
      "dónde",
      "Wo wohnst du?"
     ],
     [
      "Was",
      "qué",
      "Was machst du?"
     ],
     [
      "Wer",
      "quién",
      "Wer ist das?"
     ],
     [
      "Wie",
      "cómo",
      "Wie heißt du?"
     ],
     [
      "Woher",
      "de dónde",
      "Woher kommst du?"
     ]
    ]
   },
   {
    "p": "Y las **preguntas de «sí» o «no»** arrancan con el verbo: «Wohnst du in Berlin?» (¿Vivís en Berlín?)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cuál oración está bien?",
    "options": [
     "Ich wohne in Berlin.",
     "Ich in Berlin wohne."
    ],
    "answer": "Ich wohne in Berlin.",
    "explain": "El verbo va en segunda posición: «Ich wohne…».",
    "nivel": 17
   },
   {
    "type": "choice",
    "prompt": "¿Cuál pregunta está bien?",
    "options": [
     "Wo wohnst du?",
     "Wo du wohnst?"
    ],
    "answer": "Wo wohnst du?",
    "explain": "Después de la palabra interrogativa va el verbo.",
    "nivel": 17
   },
   {
    "type": "choice",
    "prompt": "¿Cuál pregunta de «sí» o «no» está bien?",
    "options": [
     "Wohnst du in Berlin?",
     "Du in Berlin wohnst?"
    ],
    "answer": "Wohnst du in Berlin?",
    "explain": "En las preguntas de sí o no el verbo va primero.",
    "nivel": 17
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Was machst du?»",
    "options": [
     "¿Qué hacés?",
     "¿Dónde vivís?",
     "¿Quién sos?"
    ],
    "answer": "¿Qué hacés?",
    "explain": "«was» = qué; «machst» = hacés.",
    "nivel": 17
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Wo»): «¿Dónde vivís?»",
    "answer": "Wo wohnst du?",
    "words": [
     "Wo",
     "du?",
     "wohnst"
    ],
    "explain": "«Wo wohnst du?» = ¿Dónde vivís?",
    "nivel": 17
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Wir»): «Aprendemos alemán».",
    "answer": "Wir lernen Deutsch.",
    "words": [
     "Deutsch.",
     "lernen",
     "Wir"
    ],
    "explain": "«Wir lernen Deutsch.» = Aprendemos alemán.",
    "nivel": 17
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra interrogativa con su significado.",
    "pairs": [
     {
      "left": "Wo",
      "right": "dónde"
     },
     {
      "left": "Was",
      "right": "qué"
     },
     {
      "left": "Wer",
      "right": "quién"
     },
     {
      "left": "Woher",
      "right": "de dónde"
     }
    ],
    "answer": "Wo = dónde · Was = qué · Wer = quién · Woher = de dónde",
    "explain": "Wo = dónde · Was = qué · Wer = quién · Woher = de dónde",
    "nivel": 17
   }
  ]
 },
 {
  "id": "u11",
  "title": "Querer, poder, tener que",
  "nivel": 20,
  "bloques": [
   {
    "p": "Hay verbos especiales que expresan **querer, poder y tener que**: se llaman **modales**. Se conjugan así:"
   },
   {
    "verbosRef": [
     "v-moechten",
     "v-koennen",
     "v-muessen",
     "v-wollen"
    ],
    "t": "presente"
   },
   {
    "p": "Lo importante: el otro verbo va en **infinitivo y al final** de la frase."
   },
   {
    "ejemplos": [
     [
      "Ich möchte einen Kaffee trinken.",
      "Quisiera tomar un café."
     ],
     [
      "Du kannst kommen.",
      "Podés venir."
     ],
     [
      "Wir müssen arbeiten.",
      "Tenemos que trabajar."
     ],
     [
      "Er will Deutsch lernen.",
      "Él quiere aprender alemán."
     ]
    ]
   },
   {
    "nota": "«möchten» es la forma amable y más usada para pedir: **Ich möchte einen Kaffee, bitte.** (Quisiera un café, por favor)."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich ___ einen Kaffee. (möchten)",
    "answer": "möchte",
    "accept": [
     "möchte",
     "moechte"
    ],
    "explain": "Con «ich»: «möchte».",
    "estricto": true,
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Du ___ kommen. (können)",
    "answer": "kannst",
    "accept": [
     "kannst"
    ],
    "explain": "Con «du»: «kannst».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Er ___ lernen. (wollen)",
    "answer": "will",
    "accept": [
     "will"
    ],
    "explain": "Con «er»: «will».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Wir ___ arbeiten. (müssen)",
    "answer": "müssen",
    "accept": [
     "müssen",
     "muessen"
    ],
    "explain": "Con «wir»: «müssen».",
    "estricto": true,
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "¿Cuál oración está bien?",
    "options": [
     "Ich kann Deutsch lernen.",
     "Ich kann lernen Deutsch."
    ],
    "answer": "Ich kann Deutsch lernen.",
    "explain": "El segundo verbo va en infinitivo y al final.",
    "nivel": 20
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Quiero aprender alemán».",
    "answer": "Ich will Deutsch lernen.",
    "words": [
     "lernen.",
     "will",
     "Deutsch",
     "Ich"
    ],
    "explain": "«Ich will Deutsch lernen.» = Quiero aprender alemán.",
    "nivel": 20
   }
  ]
 },
 {
  "id": "u12",
  "title": "Cuando algo recibe la acción: el acusativo",
  "nivel": 22,
  "bloques": [
   {
    "p": "Cuando una persona o cosa **recibe la acción** del verbo («veo **al perro**», «compro **una mesa**»), el artículo cambia, pero **solo con las palabras «der»**:"
   },
   {
    "tabla": [
     [
      "der Hund",
      "den Hund",
      "der → den"
     ],
     [
      "ein Hund",
      "einen Hund",
      "ein → einen"
     ],
     [
      "die Katze",
      "die Katze",
      "no cambia"
     ],
     [
      "das Kind",
      "das Kind",
      "no cambia"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich sehe den Hund.",
      "Veo al perro."
     ],
     [
      "Ich habe einen Hund.",
      "Tengo un perro."
     ],
     [
      "Ich sehe die Katze.",
      "Veo a la gata."
     ]
    ]
   },
   {
    "p": "También cambian los pronombres: «ich» pasa a **mich**, «du» pasa a **dich**:"
   },
   {
    "tabla": [
     [
      "ich → mich",
      "me"
     ],
     [
      "du → dich",
      "te / a vos"
     ],
     [
      "er → ihn",
      "lo / a él"
     ],
     [
      "sie → sie",
      "la / a ella"
     ],
     [
      "wir → uns",
      "nos"
     ],
     [
      "ihr → euch",
      "los / a ustedes"
     ]
    ]
   },
   {
    "nota": "«Ich sehe dich» significa «Te veo». Lo que cambia es siempre lo que **recibe** la acción, no quien la hace."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Ich sehe ___ Hund.",
    "options": [
     "den",
     "der"
    ],
    "answer": "den",
    "explain": "«der Hund» recibe la acción: «den Hund».",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "Ich habe ___ Hund. (un perro)",
    "options": [
     "einen",
     "ein"
    ],
    "answer": "einen",
    "explain": "«ein Hund» recibe la acción: «einen Hund».",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "Ich sehe ___ Katze.",
    "options": [
     "die",
     "den"
    ],
    "answer": "die",
    "explain": "«die Katze» no cambia.",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "Ich sehe ___. (a vos)",
    "options": [
     "dich",
     "du"
    ],
    "answer": "dich",
    "explain": "«du» pasa a «dich».",
    "nivel": 22
   },
   {
    "type": "fill",
    "prompt": "Ich kaufe ___ Tisch. (kaufen = comprar; poné el artículo «der» en acusativo)",
    "answer": "den",
    "accept": [
     "den"
    ],
    "explain": "«der Tisch» pasa a «den Tisch».",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "«Ich sehe dich» significa…",
    "options": [
     "Te veo.",
     "Me ves.",
     "Lo veo."
    ],
    "answer": "Te veo.",
    "explain": "«dich» = te / a vos.",
    "nivel": 22
   },
   {
    "type": "match",
    "prompt": "Unir cada pronombre con su forma de acusativo.",
    "pairs": [
     {
      "left": "ich",
      "right": "mich"
     },
     {
      "left": "du",
      "right": "dich"
     },
     {
      "left": "wir",
      "right": "uns"
     },
     {
      "left": "ihr",
      "right": "euch"
     }
    ],
    "answer": "ich = mich · du = dich · wir = uns · ihr = euch",
    "explain": "ich = mich · du = dich · wir = uns · ihr = euch",
    "nivel": 22
   }
  ]
 },
 {
  "id": "u13",
  "title": "Negar: nicht y kein",
  "nivel": 23,
  "bloques": [
   {
    "p": "Para decir que **no** tenés dos palabras: **nicht** (para negar verbos, adjetivos y casi todo) y **kein** (para negar un sustantivo: «ningún / ninguna»)."
   },
   {
    "ejemplos": [
     [
      "Ich bin nicht müde.",
      "No estoy cansado."
     ],
     [
      "Ich wohne nicht in Berlin.",
      "No vivo en Berlín."
     ],
     [
      "Ich habe keinen Hund.",
      "No tengo perro."
     ],
     [
      "Ich habe keine Katze.",
      "No tengo gata."
     ],
     [
      "Ich habe kein Auto.",
      "No tengo auto."
     ]
    ]
   },
   {
    "nota": "**kein** se declina igual que «ein»: **kein** (palabras «das» y «der» sin acusativo), **keine** (palabras «die» y plurales) y **keinen** (palabras «der» que reciben la acción): «Ich habe **keinen** Hund»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Ich habe ___ Katze. (no tengo gata)",
    "options": [
     "keine",
     "nicht"
    ],
    "answer": "keine",
    "explain": "«Katze» es femenina: «keine Katze».",
    "nivel": 23
   },
   {
    "type": "choice",
    "prompt": "Ich bin ___ müde. (no estoy cansado)",
    "options": [
     "nicht",
     "kein"
    ],
    "answer": "nicht",
    "explain": "Para negar un adjetivo se usa «nicht».",
    "nivel": 23
   },
   {
    "type": "choice",
    "prompt": "Ich habe ___ Hund. (no tengo perro)",
    "options": [
     "keinen",
     "kein",
     "keine"
    ],
    "answer": "keinen",
    "explain": "«der Hund» recibe la acción: «keinen Hund».",
    "nivel": 23
   },
   {
    "type": "fill",
    "prompt": "Ich habe ___ Auto. (no tengo auto)",
    "answer": "kein",
    "accept": [
     "kein"
    ],
    "explain": "«das Auto»: «kein Auto».",
    "nivel": 23
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «No vivo en Berlín».",
    "answer": "Ich wohne nicht in Berlin.",
    "words": [
     "nicht",
     "in",
     "Ich",
     "Berlin.",
     "wohne"
    ],
    "explain": "«nicht» va después del verbo.",
    "nivel": 23
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Ich habe keinen Hund",
      "right": "No tengo perro"
     },
     {
      "left": "Ich habe keine Katze",
      "right": "No tengo gata"
     },
     {
      "left": "Ich habe kein Auto",
      "right": "No tengo auto"
     }
    ],
    "answer": "Ich habe keinen Hund = No tengo perro · Ich habe keine Katze = No tengo gata · Ich habe kein Auto = No tengo auto",
    "explain": "Ich habe keinen Hund = No tengo perro · Ich habe keine Katze = No tengo gata · Ich habe kein Auto = No tengo auto",
    "nivel": 23
   }
  ]
 },
 {
  "id": "u14",
  "title": "¿Dónde? «in» y el lugar",
  "nivel": 18,
  "bloques": [
   {
    "p": "Para decir **dónde** está algo o alguien usás **«in»** (en), y el artículo cambia un poco:"
   },
   {
    "tabla": [
     [
      "der Park / das Haus",
      "im Park / im Haus",
      "en el parque / en la casa"
     ],
     [
      "die Stadt / die Küche",
      "in der Stadt / in der Küche",
      "en la ciudad / en la cocina"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich bin im Park.",
      "Estoy en el parque."
     ],
     [
      "Er ist in der Küche.",
      "Él está en la cocina."
     ],
     [
      "Wir sind im Haus.",
      "Estamos en la casa."
     ]
    ]
   },
   {
    "nota": "**im** es «in dem»: se usa con palabras «der» y «das». Con palabras «die» queda **in der**. Por ahora memorizalo así."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Ich bin ___ Park. (el parque)",
    "options": [
     "im",
     "in der"
    ],
    "answer": "im",
    "explain": "«der Park» → «im Park».",
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "Ich bin ___ Stadt. (la ciudad)",
    "options": [
     "in der",
     "im"
    ],
    "answer": "in der",
    "explain": "«die Stadt» → «in der Stadt».",
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "Wir sind ___ Haus. (la casa)",
    "options": [
     "im",
     "in der"
    ],
    "answer": "im",
    "explain": "«das Haus» → «im Haus».",
    "nivel": 18
   },
   {
    "type": "fill",
    "prompt": "Er ist ___ Küche. (la cocina)",
    "answer": "in der",
    "accept": [
     "in der"
    ],
    "explain": "«die Küche» → «in der Küche».",
    "nivel": 18
   },
   {
    "type": "order",
    "prompt": "Ordená: «Estoy en el parque».",
    "answer": "Ich bin im Park.",
    "words": [
     "im",
     "Ich",
     "Park.",
     "bin"
    ],
    "explain": "«Ich bin im Park.» = Estoy en el parque.",
    "nivel": 18
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "im Haus",
      "right": "en la casa"
     },
     {
      "left": "in der Stadt",
      "right": "en la ciudad"
     },
     {
      "left": "im Park",
      "right": "en el parque"
     }
    ],
    "answer": "im Haus = en la casa · in der Stadt = en la ciudad · im Park = en el parque",
    "explain": "im Haus = en la casa · in der Stadt = en la ciudad · im Park = en el parque",
    "nivel": 18
   }
  ]
 },
 {
  "id": "u15",
  "title": "¿Qué hora es?",
  "nivel": 12,
  "bloques": [
   {
    "p": "Para preguntar la hora: **«Wie spät ist es?»** (¿Qué hora es?). Para decir una hora en punto: **«Es ist … Uhr»** (son las… en punto)."
   },
   {
    "tabla": [
     [
      "Es ist ein Uhr.",
      "Es la una."
     ],
     [
      "Es ist zwei Uhr.",
      "Son las dos."
     ],
     [
      "Es ist drei Uhr.",
      "Son las tres."
     ],
     [
      "Es ist zehn Uhr.",
      "Son las diez."
     ]
    ]
   },
   {
    "nota": "«Uhr» significa «reloj» y también «hora (en punto)»: sirve para las dos cosas. Para la una se dice «ein Uhr» (con «ein», no «eins»)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo preguntás «¿Qué hora es?»?",
    "options": [
     "Wie spät ist es?",
     "Wie alt bist du?",
     "Wie heißt du?"
    ],
    "answer": "Wie spät ist es?",
    "explain": "«spät» = tarde: literalmente «¿cuán tarde es?».",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Es ist ___ Uhr. (son las tres)",
    "answer": "drei",
    "accept": [
     "drei"
    ],
    "explain": "3 = «drei».",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "«Es ist zehn Uhr» significa…",
    "options": [
     "Son las diez.",
     "Son las doce.",
     "Son las dos."
    ],
    "answer": "Son las diez.",
    "explain": "«zehn» = 10.",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Es ist ___ Uhr. (son las dos)",
    "answer": "zwei",
    "accept": [
     "zwei"
    ],
    "explain": "2 = «zwei».",
    "nivel": 12
   },
   {
    "type": "match",
    "prompt": "Unir cada hora con su número.",
    "pairs": [
     {
      "left": "ein Uhr",
      "right": "la una"
     },
     {
      "left": "zwei Uhr",
      "right": "las dos"
     },
     {
      "left": "drei Uhr",
      "right": "las tres"
     },
     {
      "left": "zehn Uhr",
      "right": "las diez"
     }
    ],
    "answer": "ein Uhr = la una · zwei Uhr = las dos · drei Uhr = las tres · zehn Uhr = las diez",
    "explain": "ein Uhr = la una · zwei Uhr = las dos · drei Uhr = las tres · zehn Uhr = las diez",
    "nivel": 12
   }
  ]
 },
 {
  "id": "u16",
  "title": "Hablar del pasado: el Perfekt",
  "nivel": 26,
  "bloques": [
   {
    "p": "Para contar lo que hiciste usás **haben** (o **sein**) conjugado + el **participio** del verbo, que va **al final**:"
   },
   {
    "tabla": [
     [
      "machen",
      "Ich habe gemacht",
      "hice"
     ],
     [
      "wohnen",
      "Ich habe gewohnt",
      "viví"
     ],
     [
      "trinken",
      "Ich habe getrunken",
      "tomé"
     ],
     [
      "kommen",
      "Ich bin gekommen",
      "vine"
     ],
     [
      "gehen",
      "Ich bin gegangen",
      "fui"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich habe Kaffee getrunken.",
      "Tomé café."
     ],
     [
      "Wir haben Deutsch gelernt.",
      "Aprendimos alemán."
     ],
     [
      "Er ist gekommen.",
      "Él vino."
     ]
    ]
   },
   {
    "nota": "Los verbos regulares forman el participio así: **ge- + raíz + -t** (machen → **ge**mach**t**). Los verbos de movimiento y cambio (kommen, gehen, fahren) usan **sein** en vez de «haben»: «Ich **bin** gekommen»."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich habe Deutsch ___. (lernen)",
    "answer": "gelernt",
    "accept": [
     "gelernt"
    ],
    "explain": "ge + lern + t = «gelernt».",
    "nivel": 26
   },
   {
    "type": "fill",
    "prompt": "Wir haben in Berlin ___. (wohnen)",
    "answer": "gewohnt",
    "accept": [
     "gewohnt"
    ],
    "explain": "ge + wohn + t = «gewohnt».",
    "nivel": 26
   },
   {
    "type": "choice",
    "prompt": "«Ich bin gekommen» significa…",
    "options": [
     "Vine.",
     "Voy a venir.",
     "Vengo."
    ],
    "answer": "Vine.",
    "explain": "«kommen» usa «sein»: «ich bin gekommen» = vine.",
    "nivel": 26
   },
   {
    "type": "choice",
    "prompt": "Con «gehen» (ir) usás…",
    "options": [
     "sein",
     "haben"
    ],
    "answer": "sein",
    "explain": "Los verbos de movimiento usan «sein».",
    "nivel": 26
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Tomé café».",
    "answer": "Ich habe Kaffee getrunken.",
    "words": [
     "Kaffee",
     "Ich",
     "habe",
     "getrunken."
    ],
    "explain": "El participio va al final.",
    "nivel": 26
   },
   {
    "type": "match",
    "prompt": "Unir cada verbo con su participio.",
    "pairs": [
     {
      "left": "machen",
      "right": "gemacht"
     },
     {
      "left": "wohnen",
      "right": "gewohnt"
     },
     {
      "left": "trinken",
      "right": "getrunken"
     },
     {
      "left": "gehen",
      "right": "gegangen"
     }
    ],
    "answer": "machen = gemacht · wohnen = gewohnt · trinken = getrunken · gehen = gegangen",
    "explain": "machen = gemacht · wohnen = gewohnt · trinken = getrunken · gehen = gegangen",
    "nivel": 26
   }
  ]
 },
 {
  "id": "u17",
  "title": "Verbos con prefijo separable",
  "nivel": 24,
  "bloques": [
   {
    "p": "Algunos verbos tienen un **prefijo separable**: en la frase, el prefijo **se va al final**. El ejemplo más común es **aufstehen** (levantarse): «Ich **stehe** um sieben Uhr **auf**»."
   },
   {
    "verbosRef": [
     "v-aufstehen"
    ],
    "t": "presente"
   },
   {
    "ejemplos": [
     [
      "Ich stehe um sieben Uhr auf.",
      "Me levanto a las siete."
     ],
     [
      "Du stehst auf.",
      "Vos te levantás."
     ],
     [
      "Wir stehen auf.",
      "Nos levantamos."
     ]
    ]
   },
   {
    "nota": "«um … Uhr» significa «a las … horas»: «um sieben Uhr» = a las siete. Y en el infinitivo el prefijo va **pegado**: «aufstehen»."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich stehe um sieben Uhr ___. (aufstehen)",
    "answer": "auf",
    "accept": [
     "auf"
    ],
    "explain": "El prefijo «auf» se va al final de la frase.",
    "nivel": 24
   },
   {
    "type": "fill",
    "prompt": "Du ___ auf. (aufstehen)",
    "answer": "stehst",
    "accept": [
     "stehst"
    ],
    "explain": "Con «du»: «stehst … auf».",
    "nivel": 24
   },
   {
    "type": "choice",
    "prompt": "¿Dónde va «auf» en «Ich stehe … auf»?",
    "options": [
     "al final de la frase",
     "al principio",
     "pegado al verbo"
    ],
    "answer": "al final de la frase",
    "explain": "El prefijo separable se va al final.",
    "nivel": 24
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Wir»): «Nos levantamos».",
    "answer": "Wir stehen auf.",
    "words": [
     "stehen",
     "Wir",
     "auf."
    ],
    "explain": "«Wir stehen auf.» = Nos levantamos.",
    "nivel": 24
   },
   {
    "type": "match",
    "prompt": "Unir cada persona con su forma de «aufstehen».",
    "pairs": [
     {
      "left": "ich",
      "right": "stehe auf"
     },
     {
      "left": "du",
      "right": "stehst auf"
     },
     {
      "left": "er",
      "right": "steht auf"
     },
     {
      "left": "wir",
      "right": "stehen auf"
     }
    ],
    "answer": "ich = stehe auf · du = stehst auf · er = steht auf · wir = stehen auf",
    "explain": "ich = stehe auf · du = stehst auf · er = steht auf · wir = stehen auf",
    "nivel": 24
   }
  ]
 },
 {
  "id": "kiosko-de",
  "title": "En el kiosko (conversación básica)",
  "nivel": 14,
  "explain": "Diálogo típico al comprar algo en un kiosko en alemán: pedís lo que querés, preguntás si podés pagar con tarjeta, agradecés y te despedís. En cada paso, elegí lo que dirías vos o lo que te está diciendo el kiosquero.",
  "examples": [
   "Guten Tag! Was möchten Sie? = ¡Buen día! ¿Qué desea?",
   "Ich möchte eine Cola, bitte. = Quiero una Coca-Cola, por favor.",
   "Das macht zwei Euro fünfzig. = Son dos euros con cincuenta.",
   "Kann ich mit Karte zahlen? = ¿Puedo pagar con tarjeta?",
   "Danke schön! / Bitte schön! = ¡Muchas gracias! / De nada.",
   "Tschüss! = ¡Chau! (informal)"
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "El kiosquero te saluda: «Guten Tag! Was möchten Sie?». Querés pedir una Coca-Cola. ¿Qué decís?",
    "options": [
     "Ich möchte eine Cola, bitte.",
     "Ich habe eine Cola, bitte."
    ],
    "answer": "Ich möchte eine Cola, bitte.",
    "explain": "«Ich möchte» = quiero / quisiera (forma educada de pedir). «Ich habe» significa «tengo», no sirve para pedir algo.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "El kiosquero te dice: «Das macht zwei Euro fünfzig.» (Son 2,50 €). Querés preguntar si podés pagar con tarjeta. ¿Qué decís?",
    "options": [
     "Kann ich mit Karte zahlen?",
     "Kann ich mit Karte kaufen?"
    ],
    "answer": "Kann ich mit Karte zahlen?",
    "explain": "«Zahlen» = pagar. «Kaufen» = comprar (eso ya lo estás haciendo; lo que falta es pagar).",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "El kiosquero responde: «Ja, klar.» ¿Qué te está diciendo?",
    "options": [
     "Sí, claro.",
     "No, todavía no."
    ],
    "answer": "Sí, claro.",
    "explain": "«Ja, klar» = sí, claro / por supuesto. Es una forma común e informal de decir que sí.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "Ya pagaste y te da la Coca-Cola. ¿Cómo le agradecés?",
    "options": [
     "Danke schön!",
     "Bitte schön!"
    ],
    "answer": "Danke schön!",
    "explain": "«Danke schön» = muchas gracias (lo decís vos). «Bitte schön» es lo que te responde ÉL (de nada), no lo que decís vos.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "El kiosquero te responde: «Bitte schön!». ¿Qué significa acá?",
    "options": [
     "De nada.",
     "Hasta luego."
    ],
    "answer": "De nada.",
    "explain": "«Bitte schön» se usa tanto para «de nada» como para «acá tenés» al entregarte algo.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "Te vas del kiosko. ¿Cómo te despedís de forma simple e informal?",
    "options": [
     "Tschüss!",
     "Entschuldigung!"
    ],
    "answer": "Tschüss!",
    "explain": "«Tschüss» = chau (informal). «Entschuldigung» significa «disculpe», no sirve para despedirse.",
    "nivel": 14
   }
  ]
 },
 {
  "id": "u20",
  "title": "Describir cosas: sein + adjetivo",
  "nivel": 12,
  "bloques": [
   {
    "p": "Para describir algo usás **sein** + un adjetivo. Lo bueno: el adjetivo **no cambia** (no concuerda como en español: «el auto rojo / la casa roja» → «rot» siempre)."
   },
   {
    "ejemplos": [
     [
      "Das Auto ist rot.",
      "El auto es rojo."
     ],
     [
      "Die Katze ist schwarz.",
      "La gata es negra."
     ],
     [
      "Die Kinder sind klein.",
      "Los chicos son chicos."
     ]
    ]
   },
   {
    "p": "Con **sehr** (muy) lo reforzás, con **nicht** (no) lo negás y con **zu** (demasiado) te pasás:"
   },
   {
    "tabla": [
     [
      "sehr groß",
      "muy grande"
     ],
     [
      "nicht groß",
      "no es grande"
     ],
     [
      "zu klein",
      "demasiado chico"
     ]
    ]
   },
   {
    "nota": "Los opuestos van de a pares y conviene aprenderlos así: **groß ↔ klein · heiß ↔ kalt · alt ↔ jung / neu · schnell ↔ langsam · teuer ↔ billig · lang ↔ kurz**."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Das Haus ___ groß. (sein)",
    "options": [
     "ist",
     "bin",
     "sind"
    ],
    "answer": "ist",
    "explain": "«Haus» = es → «ist».",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "¿Cómo se dice «El perro es negro»?",
    "options": [
     "Der Hund ist schwarz.",
     "Der Hund ist schwarze.",
     "Der Hund schwarz ist."
    ],
    "answer": "Der Hund ist schwarz.",
    "explain": "El adjetivo no cambia y va después de «ist».",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «sehr schnell»?",
    "options": [
     "muy rápido",
     "no rápido",
     "demasiado rápido"
    ],
    "answer": "muy rápido",
    "explain": "«sehr» = muy.",
    "nivel": 12
   },
   {
    "type": "match",
    "prompt": "Unir cada adjetivo con su opuesto.",
    "pairs": [
     {
      "left": "groß",
      "right": "klein"
     },
     {
      "left": "heiß",
      "right": "kalt"
     },
     {
      "left": "alt",
      "right": "jung"
     },
     {
      "left": "teuer",
      "right": "billig"
     }
    ],
    "answer": "groß = klein · heiß = kalt · alt = jung · teuer = billig",
    "explain": "groß ↔ klein · heiß ↔ kalt · alt ↔ jung · teuer ↔ billig",
    "nivel": 12
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Das»): «El auto es nuevo».",
    "answer": "Das Auto ist neu.",
    "words": [
     "ist",
     "Das",
     "neu.",
     "Auto"
    ],
    "explain": "«Das Auto ist neu.» = El auto es nuevo.",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Die Kinder ___ glücklich. (sein)",
    "answer": "sind",
    "accept": [
     "sind"
    ],
    "explain": "«die Kinder» = ellos → «sind».",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "«nicht teuer» significa…",
    "options": [
     "no es caro",
     "muy caro",
     "barato"
    ],
    "answer": "no es caro",
    "explain": "«nicht» niega el adjetivo.",
    "nivel": 12
   }
  ]
 },
 {
  "id": "u21",
  "title": "¿Qué tiempo hace?",
  "nivel": 12,
  "bloques": [
   {
    "p": "Para hablar del clima se usa **«es»** (ello) como sujeto, igual que en «llueve»:"
   },
   {
    "tabla": [
     [
      "Wie ist das Wetter?",
      "¿Cómo está el tiempo?"
     ],
     [
      "Es regnet.",
      "Llueve."
     ],
     [
      "Es schneit.",
      "Nieva."
     ],
     [
      "Es ist warm.",
      "Hace calor."
     ],
     [
      "Es ist kalt.",
      "Hace frío."
     ],
     [
      "Die Sonne scheint.",
      "Hay sol."
     ]
    ]
   },
   {
    "nota": "En alemán no se usa un verbo como «hacer» para el clima: se dice **«es ist» + adjetivo** («es ist warm» = «es cálido» = hace calor)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo decís «Llueve»?",
    "options": [
     "Es regnet.",
     "Es schneit.",
     "Es ist kalt."
    ],
    "answer": "Es regnet.",
    "explain": "«regnen» = llover.",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "«Es schneit» significa…",
    "options": [
     "Nieva.",
     "Llueve.",
     "Hay sol."
    ],
    "answer": "Nieva.",
    "explain": "«schneien» = nevar.",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "¿Cómo preguntás por el tiempo?",
    "options": [
     "Wie ist das Wetter?",
     "Wie heißt du?",
     "Wie spät ist es?"
    ],
    "answer": "Wie ist das Wetter?",
    "explain": "«Wetter» = el tiempo (el clima).",
    "nivel": 12
   },
   {
    "type": "order",
    "prompt": "Ordená: «Hace calor».",
    "answer": "Es ist warm.",
    "words": [
     "ist",
     "warm.",
     "Es"
    ],
    "explain": "«Es ist warm.» = Hace calor.",
    "nivel": 12
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Es regnet",
      "right": "llueve"
     },
     {
      "left": "Es schneit",
      "right": "nieva"
     },
     {
      "left": "Es ist warm",
      "right": "hace calor"
     },
     {
      "left": "Es ist kalt",
      "right": "hace frío"
     }
    ],
    "answer": "Es regnet = llueve · Es schneit = nieva · Es ist warm = hace calor · Es ist kalt = hace frío",
    "explain": "Es regnet = llueve · Es schneit = nieva · Es ist warm = hace calor · Es ist kalt = hace frío",
    "nivel": 12
   }
  ]
 },
 {
  "id": "u22",
  "title": "¿Cuándo? am, im, um",
  "nivel": 16,
  "bloques": [
   {
    "p": "Para decir **cuándo** pasa algo usás tres palabritas, según de qué se trate:"
   },
   {
    "tabla": [
     [
      "am",
      "el (un día)",
      "am Montag = el lunes"
     ],
     [
      "im",
      "en (un mes o una estación)",
      "im Mai = en mayo · im Winter = en invierno"
     ],
     [
      "um",
      "a (una hora)",
      "um drei Uhr = a las tres"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Am Montag arbeite ich.",
      "El lunes trabajo."
     ],
     [
      "Im Juli ist es heiß.",
      "En julio hace calor."
     ],
     [
      "Um zehn Uhr lerne ich Deutsch.",
      "A las diez estudio alemán."
     ]
    ]
   },
   {
    "nota": "«Wann?» significa «¿Cuándo?»: «Wann kommst du?» = ¿Cuándo venís? Y fijate que el verbo sigue en segunda posición aunque la frase empiece por «Am Montag»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "___ Montag arbeite ich. (el lunes)",
    "options": [
     "Am",
     "Im",
     "Um"
    ],
    "answer": "Am",
    "explain": "Con días se usa «am».",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "___ Mai ist es warm. (en mayo)",
    "options": [
     "Im",
     "Am",
     "Um"
    ],
    "answer": "Im",
    "explain": "Con meses se usa «im».",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "___ drei Uhr komme ich. (a las tres)",
    "options": [
     "Um",
     "Am",
     "Im"
    ],
    "answer": "Um",
    "explain": "Con horas se usa «um».",
    "nivel": 16
   },
   {
    "type": "fill",
    "prompt": "Mein Geburtstag ist ___ Juni. (en junio)",
    "answer": "im",
    "accept": [
     "im"
    ],
    "explain": "Con meses se usa «im».",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "«Wann kommst du?» significa…",
    "options": [
     "¿Cuándo venís?",
     "¿Adónde vas?",
     "¿Quién viene?"
    ],
    "answer": "¿Cuándo venís?",
    "explain": "«wann» = cuándo.",
    "nivel": 16
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Am»): «El lunes trabajo».",
    "answer": "Am Montag arbeite ich.",
    "words": [
     "Am",
     "Montag",
     "ich.",
     "arbeite"
    ],
    "explain": "El verbo queda en segunda posición.",
    "nivel": 16
   }
  ]
 },
 {
  "id": "u23",
  "title": "¿Cuánto cuesta?",
  "nivel": 15,
  "bloques": [
   {
    "p": "Para comprar necesitás estas frases:"
   },
   {
    "tabla": [
     [
      "Wie viel kostet das?",
      "¿Cuánto cuesta esto?"
     ],
     [
      "Das kostet zehn Euro.",
      "Cuesta diez euros."
     ],
     [
      "Ich nehme das.",
      "Me lo llevo."
     ],
     [
      "Ich möchte das, bitte.",
      "Quiero esto, por favor."
     ],
     [
      "Zu teuer!",
      "¡Muy caro!"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Das Brot kostet zwei Euro.",
      "El pan cuesta dos euros."
     ],
     [
      "Die Jacke kostet fünfzig Euro.",
      "La campera cuesta cincuenta euros."
     ]
    ]
   },
   {
    "nota": "**kosten** (costar) es regular: «es kostet» con una sola cosa y «sie kosten» con varias («Die Schuhe kosten hundert Euro»). Y fijate que «Euro» no cambia en plural: «zwei Euro»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo preguntás «¿Cuánto cuesta esto?»?",
    "options": [
     "Wie viel kostet das?",
     "Wie heißt das?",
     "Wo ist das?"
    ],
    "answer": "Wie viel kostet das?",
    "explain": "«wie viel» = cuánto; «kostet» = cuesta.",
    "nivel": 15
   },
   {
    "type": "fill",
    "prompt": "Das ___ zehn Euro. (kosten)",
    "answer": "kostet",
    "accept": [
     "kostet"
    ],
    "explain": "Con «das» (una cosa): «kostet».",
    "nivel": 15
   },
   {
    "type": "fill",
    "prompt": "Die Schuhe ___ hundert Euro. (kosten)",
    "answer": "kosten",
    "accept": [
     "kosten"
    ],
    "explain": "Con varias cosas: «kosten».",
    "nivel": 15
   },
   {
    "type": "choice",
    "prompt": "«Ich nehme das» significa…",
    "options": [
     "Me lo llevo.",
     "Lo vendo.",
     "Lo busco."
    ],
    "answer": "Me lo llevo.",
    "explain": "«nehmen» = tomar / llevar.",
    "nivel": 15
   },
   {
    "type": "choice",
    "prompt": "«Zu teuer!» significa…",
    "options": [
     "¡Muy caro!",
     "¡Muy barato!",
     "¡Muy grande!"
    ],
    "answer": "¡Muy caro!",
    "explain": "«zu» = demasiado; «teuer» = caro.",
    "nivel": 15
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Wie»): «¿Cuánto cuesta esto?»",
    "answer": "Wie viel kostet das?",
    "words": [
     "Wie",
     "kostet",
     "viel",
     "das?"
    ],
    "explain": "«Wie viel kostet das?» = ¿Cuánto cuesta esto?",
    "nivel": 15
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Wie viel kostet das?",
      "right": "¿cuánto cuesta?"
     },
     {
      "left": "Das kostet zehn Euro",
      "right": "cuesta diez euros"
     },
     {
      "left": "Ich nehme das",
      "right": "me lo llevo"
     },
     {
      "left": "Zu teuer",
      "right": "muy caro"
     }
    ],
    "answer": "Wie viel kostet das? = ¿cuánto cuesta? · Das kostet zehn Euro = cuesta diez euros · Ich nehme das = me lo llevo · Zu teuer = muy caro",
    "explain": "Wie viel kostet das? = ¿cuánto cuesta? · Das kostet zehn Euro = cuesta diez euros · Ich nehme das = me lo llevo · Zu teuer = muy caro",
    "nivel": 15
   }
  ]
 },
 {
  "id": "u24",
  "title": "Me duele… y cómo te sentís",
  "nivel": 14,
  "bloques": [
   {
    "p": "Para decir que algo te duele usás **«tut weh»**: «Mein Kopf **tut weh**» (me duele la cabeza). Y para decir cómo te sentís:"
   },
   {
    "tabla": [
     [
      "Mein Kopf tut weh.",
      "Me duele la cabeza."
     ],
     [
      "Meine Beine tun weh.",
      "Me duelen las piernas."
     ],
     [
      "Ich bin krank.",
      "Estoy enfermo."
     ],
     [
      "Mir ist kalt.",
      "Tengo frío."
     ],
     [
      "Mir ist warm.",
      "Tengo calor."
     ]
    ]
   },
   {
    "nota": "Con **una** parte del cuerpo se dice «tut weh»; con **varias**, «tun weh». Y recordá: delante de una parte del cuerpo va «mein / meine» (mi): «mein Kopf», «meine Beine»."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Mein Bauch ___ weh. (tun)",
    "answer": "tut",
    "accept": [
     "tut"
    ],
    "explain": "Una sola parte del cuerpo: «tut».",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Meine Füße ___ weh. (tun)",
    "answer": "tun",
    "accept": [
     "tun"
    ],
    "explain": "Varias partes del cuerpo: «tun».",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Ich bin krank» significa…",
    "options": [
     "Estoy enfermo.",
     "Estoy cansado.",
     "Tengo hambre."
    ],
    "answer": "Estoy enfermo.",
    "explain": "«krank» = enfermo.",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Mein»): «Me duele la cabeza».",
    "answer": "Mein Kopf tut weh.",
    "words": [
     "tut",
     "Mein",
     "weh.",
     "Kopf"
    ],
    "explain": "«Mein Kopf tut weh.» = Me duele la cabeza.",
    "nivel": 14
   }
  ]
 },
 {
  "id": "u25",
  "title": "¿A qué te dedicás?",
  "nivel": 13,
  "bloques": [
   {
    "p": "Para decir tu profesión usás **sein** y **sin artículo**: «Ich bin Lehrer» (soy maestro). Si es una mujer, se agrega **-in**: Lehrer → **Lehrerin**."
   },
   {
    "tabla": [
     [
      "Was bist du von Beruf?",
      "¿A qué te dedicás?"
     ],
     [
      "Ich bin Lehrer.",
      "Soy maestro."
     ],
     [
      "Ich bin Lehrerin.",
      "Soy maestra."
     ],
     [
      "Sie ist Ärztin.",
      "Ella es médica."
     ],
     [
      "Er ist Koch.",
      "Él es cocinero."
     ]
    ]
   },
   {
    "nota": "Fijate: en alemán **no** se dice «Ich bin ein Lehrer»; se dice «Ich bin Lehrer», sin «ein». Y «der Beruf» significa «la profesión»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cómo decís «Soy médico»?",
    "options": [
     "Ich bin Arzt.",
     "Ich Arzt bin.",
     "Ich habe Arzt."
    ],
    "answer": "Ich bin Arzt.",
    "explain": "Sin artículo: «Ich bin Arzt».",
    "nivel": 13
   },
   {
    "type": "choice",
    "prompt": "Una mujer que es maestra dice…",
    "options": [
     "Ich bin Lehrerin.",
     "Ich bin Lehrer.",
     "Ich bin Lehrers."
    ],
    "answer": "Ich bin Lehrerin.",
    "explain": "Para las mujeres se agrega «-in».",
    "nivel": 13
   },
   {
    "type": "fill",
    "prompt": "Sie ist ___. (médica)",
    "answer": "Ärztin",
    "accept": [
     "Ärztin"
    ],
    "explain": "«Arzt» + «-in» = «Ärztin» (la «a» pasa a «ä»).",
    "estricto": true,
    "nivel": 13
   },
   {
    "type": "choice",
    "prompt": "¿Qué significa «Was bist du von Beruf?»",
    "options": [
     "¿A qué te dedicás?",
     "¿De dónde sos?",
     "¿Cuántos años tenés?"
    ],
    "answer": "¿A qué te dedicás?",
    "explain": "«Beruf» = profesión.",
    "nivel": 13
   },
   {
    "type": "match",
    "prompt": "Unir cada profesión con su significado.",
    "pairs": [
     {
      "left": "Lehrer",
      "right": "maestro"
     },
     {
      "left": "Koch",
      "right": "cocinero"
     },
     {
      "left": "Arzt",
      "right": "médico"
     },
     {
      "left": "Bäcker",
      "right": "panadero"
     }
    ],
    "answer": "Lehrer = maestro · Koch = cocinero · Arzt = médico · Bäcker = panadero",
    "explain": "Lehrer = maestro · Koch = cocinero · Arzt = médico · Bäcker = panadero",
    "nivel": 13
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Mein»): «Mi papá es maestro».",
    "answer": "Mein Vater ist Lehrer.",
    "words": [
     "Lehrer.",
     "Vater",
     "ist",
     "Mein"
    ],
    "explain": "«Mein Vater ist Lehrer.» = Mi papá es maestro.",
    "nivel": 13
   }
  ]
 },
 {
  "id": "u26",
  "title": "¿Dónde queda…?",
  "nivel": 18,
  "bloques": [
   {
    "p": "Para preguntar por un lugar y entender la respuesta:"
   },
   {
    "tabla": [
     [
      "Wo ist der Bahnhof?",
      "¿Dónde está la estación?"
     ],
     [
      "links",
      "a la izquierda"
     ],
     [
      "rechts",
      "a la derecha"
     ],
     [
      "geradeaus",
      "todo derecho"
     ],
     [
      "hier",
      "acá"
     ],
     [
      "dort",
      "allá"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Der Bahnhof ist links.",
      "La estación está a la izquierda."
     ],
     [
      "Die Apotheke ist geradeaus.",
      "La farmacia está todo derecho."
     ],
     [
      "Der Park ist dort.",
      "El parque está allá."
     ]
    ]
   },
   {
    "nota": "Para llamar la atención de alguien: **«Entschuldigung, wo ist …?»** (Disculpe, ¿dónde está…?). Ya conocés «Entschuldigung»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "«rechts» significa…",
    "options": [
     "a la derecha",
     "a la izquierda",
     "todo derecho"
    ],
    "answer": "a la derecha",
    "explain": "«rechts» = a la derecha.",
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "Preguntás dónde queda la farmacia. ¿Qué decís?",
    "options": [
     "Wo ist die Apotheke?",
     "Wie ist die Apotheke?",
     "Was ist die Apotheke?"
    ],
    "answer": "Wo ist die Apotheke?",
    "explain": "«wo» = dónde.",
    "nivel": 18
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "links",
      "right": "a la izquierda"
     },
     {
      "left": "rechts",
      "right": "a la derecha"
     },
     {
      "left": "geradeaus",
      "right": "todo derecho"
     },
     {
      "left": "dort",
      "right": "allá"
     }
    ],
    "answer": "links = a la izquierda · rechts = a la derecha · geradeaus = todo derecho · dort = allá",
    "explain": "links = a la izquierda · rechts = a la derecha · geradeaus = todo derecho · dort = allá",
    "nivel": 18
   },
   {
    "type": "fill",
    "prompt": "Der Park ist ___. (a la derecha)",
    "answer": "rechts",
    "accept": [
     "rechts"
    ],
    "explain": "«rechts» = a la derecha.",
    "nivel": 18
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Wo»): «¿Dónde está el parque?»",
    "answer": "Wo ist der Park?",
    "words": [
     "ist",
     "Park?",
     "der",
     "Wo"
    ],
    "explain": "«Wo ist der Park?» = ¿Dónde está el parque?",
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "«Der Bahnhof ist links» significa…",
    "options": [
     "La estación está a la izquierda.",
     "La estación está a la derecha.",
     "La estación está acá."
    ],
    "answer": "La estación está a la izquierda.",
    "explain": "«links» = a la izquierda.",
    "nivel": 18
   }
  ]
 },
 {
  "id": "u27",
  "title": "Viajar: en qué vas",
  "nivel": 20,
  "bloques": [
   {
    "p": "Para decir **en qué** viajás usás **mit** (con / en) y el artículo cambia:"
   },
   {
    "tabla": [
     [
      "der Bus",
      "mit dem Bus",
      "en colectivo"
     ],
     [
      "das Auto",
      "mit dem Auto",
      "en auto"
     ],
     [
      "das Fahrrad",
      "mit dem Fahrrad",
      "en bici"
     ],
     [
      "die U-Bahn",
      "mit der U-Bahn",
      "en subte"
     ],
     [
      "der Zug",
      "mit dem Zug",
      "en tren"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich fahre mit dem Bus.",
      "Voy en colectivo."
     ],
     [
      "Wir fahren mit dem Zug nach Berlin.",
      "Vamos en tren a Berlín."
     ],
     [
      "Er geht zu Fuß nach Hause.",
      "Él va a pie a casa."
     ]
    ]
   },
   {
    "nota": "Con palabras «der» y «das» se dice **mit dem**; con palabras «die», **mit der**. Para ir **a** una ciudad o un país, usás **nach** («nach Berlin»); para «a casa» se dice **nach Hause**, y «a pie» es **zu Fuß**."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Ich fahre ___ Bus. (en colectivo)",
    "options": [
     "mit dem",
     "mit der",
     "mit den"
    ],
    "answer": "mit dem",
    "explain": "«der Bus» → «mit dem Bus».",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "Ich fahre ___ U-Bahn. (en subte)",
    "options": [
     "mit der",
     "mit dem"
    ],
    "answer": "mit der",
    "explain": "«die U-Bahn» → «mit der U-Bahn».",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "«zu Fuß» significa…",
    "options": [
     "a pie",
     "en tren",
     "en auto"
    ],
    "answer": "a pie",
    "explain": "«zu Fuß» = a pie.",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Wir fahren mit dem Zug ___ Berlin. (a)",
    "answer": "nach",
    "accept": [
     "nach"
    ],
    "explain": "Para ir a una ciudad se usa «nach».",
    "nivel": 20
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Voy en colectivo».",
    "answer": "Ich fahre mit dem Bus.",
    "words": [
     "Ich",
     "Bus.",
     "mit",
     "fahre",
     "dem"
    ],
    "explain": "«Ich fahre mit dem Bus.» = Voy en colectivo.",
    "nivel": 20
   },
   {
    "type": "match",
    "prompt": "Unir cada medio de transporte con su frase.",
    "pairs": [
     {
      "left": "en colectivo",
      "right": "mit dem Bus"
     },
     {
      "left": "en subte",
      "right": "mit der U-Bahn"
     },
     {
      "left": "en tren",
      "right": "mit dem Zug"
     },
     {
      "left": "en bici",
      "right": "mit dem Fahrrad"
     }
    ],
    "answer": "en colectivo = mit dem Bus · en subte = mit der U-Bahn · en tren = mit dem Zug · en bici = mit dem Fahrrad",
    "explain": "en colectivo = mit dem Bus · en subte = mit der U-Bahn · en tren = mit dem Zug · en bici = mit dem Fahrrad",
    "nivel": 20
   }
  ]
 },
 {
  "id": "u28",
  "title": "Dar indicaciones: el imperativo",
  "nivel": 22,
  "bloques": [
   {
    "p": "El **imperativo** sirve para pedir o indicar algo: «¡Vení!», «¡Hablá más despacio!». Con **du** se usa la raíz del verbo, sin la terminación «-st»:"
   },
   {
    "tabla": [
     [
      "kommen",
      "Komm!",
      "¡Vení!"
     ],
     [
      "machen",
      "Mach!",
      "¡Hacé!"
     ],
     [
      "warten",
      "Warte!",
      "¡Esperá!"
     ],
     [
      "sprechen",
      "Sprich!",
      "¡Hablá!"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Sprich langsam, bitte!",
      "¡Hablá despacio, por favor!"
     ],
     [
      "Kommt bitte!",
      "¡Vengan, por favor! (ustedes)"
     ],
     [
      "Kommen Sie bitte!",
      "¡Venga, por favor! (usted)"
     ]
    ]
   },
   {
    "nota": "Con **ihr** (ustedes) queda igual que el presente: «Kommt!». Con **Sie** (usted) el verbo va primero y se agrega «Sie»: «Kommen Sie!». Y los verbos que cambian e → i (sprechen) mantienen el cambio: «Sprich!»."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "___ bitte! (kommen, a vos)",
    "answer": "Komm",
    "accept": [
     "Komm"
    ],
    "explain": "Con «du»: se saca el «-st» → «Komm!».",
    "nivel": 22
   },
   {
    "type": "fill",
    "prompt": "___ langsam! (sprechen, a vos)",
    "answer": "Sprich",
    "accept": [
     "Sprich"
    ],
    "explain": "«sprechen» cambia e → i: «Sprich!».",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "Les pedís a tus amigos (ihr) que vengan:",
    "options": [
     "Kommt!",
     "Komm!",
     "Kommen!"
    ],
    "answer": "Kommt!",
    "explain": "Con «ihr»: «Kommt!».",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "Le pedís a un señor mayor (Sie) que venga:",
    "options": [
     "Kommen Sie!",
     "Komm!",
     "Kommt!"
    ],
    "answer": "Kommen Sie!",
    "explain": "Con «Sie»: el verbo primero y «Sie» después.",
    "nivel": 22
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Sprich»): «Hablá despacio, por favor».",
    "answer": "Sprich langsam, bitte!",
    "words": [
     "langsam,",
     "bitte!",
     "Sprich"
    ],
    "explain": "«Sprich langsam, bitte!»",
    "nivel": 22
   },
   {
    "type": "match",
    "prompt": "Unir cada imperativo con su significado.",
    "pairs": [
     {
      "left": "Komm!",
      "right": "¡Vení!"
     },
     {
      "left": "Kommt!",
      "right": "¡Vengan!"
     },
     {
      "left": "Kommen Sie!",
      "right": "¡Venga! (usted)"
     },
     {
      "left": "Sprich!",
      "right": "¡Hablá!"
     }
    ],
    "answer": "Komm! = ¡Vení! · Kommt! = ¡Vengan! · Kommen Sie! = ¡Venga! (usted) · Sprich! = ¡Hablá!",
    "explain": "Komm! = ¡Vení! · Kommt! = ¡Vengan! · Kommen Sie! = ¡Venga! (usted) · Sprich! = ¡Hablá!",
    "nivel": 22
   }
  ]
 },
 {
  "id": "u29",
  "title": "Poder (permiso), deber y gustar",
  "nivel": 24,
  "bloques": [
   {
    "p": "Tres modales más, muy usados:"
   },
   {
    "verbosRef": [
     "v-duerfen",
     "v-sollen",
     "v-moegen"
    ],
    "t": "presente"
   },
   {
    "ejemplos": [
     [
      "Darf ich kommen?",
      "¿Puedo venir? (¿me dejan?)"
     ],
     [
      "Du sollst Deutsch lernen.",
      "Tenés que aprender alemán. (te lo indicaron)"
     ],
     [
      "Ich mag Kaffee.",
      "Me gusta el café."
     ],
     [
      "Sie mag Katzen.",
      "A ella le gustan los gatos."
     ]
    ]
   },
   {
    "nota": "**dürfen** = poder en el sentido de «tener permiso»; **sollen** = deber porque alguien te lo indicó; **mögen** = gustar. Ojo con **mögen**: «Ich mag Kaffee» se dice literalmente «yo gusto de café» (en español el sujeto es el café)."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich ___ Kaffee. (mögen)",
    "answer": "mag",
    "accept": [
     "mag"
    ],
    "explain": "Con «ich»: «mag».",
    "nivel": 24
   },
   {
    "type": "fill",
    "prompt": "Du ___ Deutsch lernen. (sollen)",
    "answer": "sollst",
    "accept": [
     "sollst"
    ],
    "explain": "Con «du»: «sollst».",
    "nivel": 24
   },
   {
    "type": "fill",
    "prompt": "___ ich kommen? (dürfen)",
    "answer": "Darf",
    "accept": [
     "Darf",
     "darf"
    ],
    "explain": "Con «ich»: «darf».",
    "nivel": 24
   },
   {
    "type": "choice",
    "prompt": "«Ich mag Kaffee» significa…",
    "options": [
     "Me gusta el café.",
     "Quiero un café.",
     "Puedo tomar café."
    ],
    "answer": "Me gusta el café.",
    "explain": "«mögen» = gustar.",
    "nivel": 24
   },
   {
    "type": "choice",
    "prompt": "«Darf ich kommen?» significa…",
    "options": [
     "¿Puedo venir?",
     "¿Quiero venir?",
     "¿Tengo que venir?"
    ],
    "answer": "¿Puedo venir?",
    "explain": "«dürfen» = poder (con permiso).",
    "nivel": 24
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Me gusta el café».",
    "answer": "Ich mag Kaffee.",
    "words": [
     "Kaffee.",
     "mag",
     "Ich"
    ],
    "explain": "«Ich mag Kaffee.» = Me gusta el café.",
    "nivel": 24
   }
  ]
 },
 {
  "id": "u30",
  "title": "Saber y conocer: wissen y kennen",
  "nivel": 21,
  "bloques": [
   {
    "p": "En alemán hay **dos verbos** para lo que en español es «saber» y «conocer»:"
   },
   {
    "tabla": [
     [
      "wissen",
      "saber un dato",
      "Ich weiß das nicht. = No sé eso."
     ],
     [
      "kennen",
      "conocer a una persona o un lugar",
      "Ich kenne Anna. = Conozco a Anna."
     ]
    ]
   },
   {
    "verbosRef": [
     "v-wissen",
     "v-kennen"
    ],
    "t": "presente"
   },
   {
    "nota": "«wissen» es irregular en singular: **ich weiß, du weißt, er weiß** (sin «-e» ni «-st» regulares). «kennen» es regular."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich ___ das nicht. (wissen, no sé eso)",
    "answer": "weiß",
    "accept": [
     "weiß",
     "weiss"
    ],
    "explain": "Con «ich»: «weiß».",
    "estricto": true,
    "nivel": 21
   },
   {
    "type": "fill",
    "prompt": "Du ___ Anna. (kennen)",
    "answer": "kennst",
    "accept": [
     "kennst"
    ],
    "explain": "Con «du»: «kennst».",
    "nivel": 21
   },
   {
    "type": "choice",
    "prompt": "Querés decir «Conozco a Anna». ¿Qué verbo usás?",
    "options": [
     "kennen",
     "wissen"
    ],
    "answer": "kennen",
    "explain": "Para conocer personas se usa «kennen».",
    "nivel": 21
   },
   {
    "type": "choice",
    "prompt": "Querés decir «No sé eso». ¿Qué verbo usás?",
    "options": [
     "wissen",
     "kennen"
    ],
    "answer": "wissen",
    "explain": "Para saber un dato se usa «wissen».",
    "nivel": 21
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «No sé eso».",
    "answer": "Ich weiß das nicht.",
    "words": [
     "weiß",
     "nicht.",
     "Ich",
     "das"
    ],
    "explain": "«Ich weiß das nicht.» = No sé eso.",
    "nivel": 21
   },
   {
    "type": "match",
    "prompt": "Unir cada verbo con su uso.",
    "pairs": [
     {
      "left": "wissen",
      "right": "saber un dato"
     },
     {
      "left": "kennen",
      "right": "conocer a alguien"
     }
    ],
    "answer": "wissen = saber un dato · kennen = conocer a alguien",
    "explain": "wissen = saber un dato · kennen = conocer a alguien",
    "nivel": 21
   }
  ]
 }
];
