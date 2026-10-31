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
 },
 {
  "id": "u31",
  "title": "Unir frases: und, oder, aber, denn",
  "nivel": 10,
  "bloques": [
   {
    "p": "Con estas cuatro palabritas unís dos frases, y lo bueno es que **no cambian el orden**: el verbo sigue en segunda posición en cada parte, igual que en español."
   },
   {
    "tabla": [
     [
      "und",
      "y"
     ],
     [
      "oder",
      "o"
     ],
     [
      "aber",
      "pero"
     ],
     [
      "denn",
      "porque (explica un motivo)"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich trinke Kaffee und du trinkst Tee.",
      "Yo tomo café y vos tomás té."
     ],
     [
      "Möchtest du Tee oder Kaffee?",
      "¿Querés té o café?"
     ],
     [
      "Ich bin müde, aber ich arbeite.",
      "Estoy cansado, pero trabajo."
     ],
     [
      "Ich bleibe zu Hause, denn ich bin krank.",
      "Me quedo en casa porque estoy enfermo."
     ]
    ]
   },
   {
    "nota": "Antes de **aber** y **denn** va una coma. Y fijate que después de **denn** el orden sigue siendo el normal («ich bin krank»); en el próximo tema vas a ver que **weil** (también «porque») se comporta distinto."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "«Tee ___ Kaffee?» (¿té o café?)",
    "options": [
     "oder",
     "und",
     "aber"
    ],
    "answer": "oder",
    "explain": "«oder» = o.",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "«Ich bin müde, ___ ich arbeite.» (pero)",
    "options": [
     "aber",
     "und",
     "oder"
    ],
    "answer": "aber",
    "explain": "«aber» = pero.",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "«denn» significa…",
    "options": [
     "porque",
     "pero",
     "entonces"
    ],
    "answer": "porque",
    "explain": "«denn» = porque.",
    "nivel": 10
   },
   {
    "type": "fill",
    "prompt": "Ich esse Brot ___ ich trinke Milch. (y)",
    "answer": "und",
    "accept": [
     "und"
    ],
    "explain": "«und» = y.",
    "nivel": 10
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Estoy cansado, pero trabajo».",
    "answer": "Ich bin müde, aber ich arbeite.",
    "words": [
     "ich",
     "bin",
     "Ich",
     "arbeite.",
     "aber",
     "müde,"
    ],
    "explain": "«Ich bin müde, aber ich arbeite.»",
    "nivel": 10
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "und",
      "right": "y"
     },
     {
      "left": "oder",
      "right": "o"
     },
     {
      "left": "aber",
      "right": "pero"
     },
     {
      "left": "denn",
      "right": "porque"
     }
    ],
    "answer": "und = y · oder = o · aber = pero · denn = porque",
    "explain": "und = y · oder = o · aber = pero · denn = porque",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "¿Cuál es correcta?",
    "options": [
     "Ich bleibe zu Hause, denn ich bin krank.",
     "Ich bleibe zu Hause, denn ich krank bin.",
     "Ich bleibe zu Hause, denn bin ich krank."
    ],
    "answer": "Ich bleibe zu Hause, denn ich bin krank.",
    "explain": "Después de «denn» el orden es normal: «ich bin krank».",
    "nivel": 10
   }
  ]
 },
 {
  "id": "u32",
  "title": "Porque: weil (el verbo se va al final)",
  "nivel": 20,
  "bloques": [
   {
    "p": "**weil** también significa «porque», pero tiene un truco: manda al verbo conjugado **al final** de su parte de la frase."
   },
   {
    "tabla": [
     [
      "Warum lernst du Deutsch?",
      "¿Por qué estudiás alemán?"
     ],
     [
      "Weil ich in Wien arbeite.",
      "Porque trabajo en Viena."
     ],
     [
      "Ich bleibe hier, weil ich müde bin.",
      "Me quedo acá porque estoy cansado."
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich esse, weil ich Hunger habe.",
      "Como porque tengo hambre."
     ],
     [
      "Er lernt Deutsch, weil er in Wien wohnt.",
      "Él estudia alemán porque vive en Viena."
     ]
    ]
   },
   {
    "nota": "Siempre hay una **coma** antes de «weil». Comparalo con **denn**: «..., denn ich bin müde» (orden normal) contra «..., weil ich müde **bin**» (verbo al final). Para responder un «Warum?» (¿por qué?) empezás con «Weil…»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "¿Cuál es correcta?",
    "options": [
     "Ich bleibe hier, weil ich müde bin.",
     "Ich bleibe hier, weil ich bin müde.",
     "Ich bleibe hier, weil bin ich müde."
    ],
    "answer": "Ich bleibe hier, weil ich müde bin.",
    "explain": "Con «weil» el verbo va al final: «ich müde bin».",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "«Warum lernst du Deutsch?» significa…",
    "options": [
     "¿Por qué estudiás alemán?",
     "¿Cuándo estudiás alemán?",
     "¿Dónde estudiás alemán?"
    ],
    "answer": "¿Por qué estudiás alemán?",
    "explain": "«warum» = por qué.",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Ich esse, weil ich Hunger ___. (haben)",
    "answer": "habe",
    "accept": [
     "habe"
    ],
    "explain": "El verbo conjugado va al final: «habe».",
    "nivel": 20
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Me quedo en casa porque estoy enfermo».",
    "answer": "Ich bleibe zu Hause, weil ich krank bin.",
    "words": [
     "Hause,",
     "krank",
     "weil",
     "Ich",
     "bin.",
     "ich",
     "zu",
     "bleibe"
    ],
    "explain": "El verbo «bin» queda al final.",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "Después de «weil», ¿dónde va el verbo conjugado?",
    "options": [
     "Al final",
     "En segunda posición",
     "Al principio"
    ],
    "answer": "Al final",
    "explain": "Con «weil» el verbo se va al final de su parte.",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "Te preguntan «Warum bist du müde?». Respondés:",
    "options": [
     "Weil ich nicht schlafe.",
     "Weil ich schlafe nicht.",
     "Denn schlafe ich nicht."
    ],
    "answer": "Weil ich nicht schlafe.",
    "explain": "«Weil ich nicht schlafe»: el verbo al final.",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Er lernt Deutsch, weil er in Wien ___. (wohnen)",
    "answer": "wohnt",
    "accept": [
     "wohnt"
    ],
    "explain": "Con «er»: «wohnt», al final.",
    "nivel": 20
   }
  ]
 },
 {
  "id": "u33",
  "title": "Preguntas con W: wer, was, wo, wann…",
  "nivel": 11,
  "bloques": [
   {
    "p": "Las preguntas empiezan con una palabra que arranca con **W** (por eso se llaman «W-Fragen»). Después viene el **verbo**, en segunda posición:"
   },
   {
    "tabla": [
     [
      "Wer",
      "quién",
      "Wer ist das?"
     ],
     [
      "Was",
      "qué",
      "Was ist das?"
     ],
     [
      "Wo",
      "dónde",
      "Wo wohnst du?"
     ],
     [
      "Woher",
      "de dónde",
      "Woher kommst du?"
     ],
     [
      "Wohin",
      "adónde",
      "Wohin gehst du?"
     ],
     [
      "Wann",
      "cuándo",
      "Wann kommst du?"
     ],
     [
      "Warum",
      "por qué",
      "Warum lernst du Deutsch?"
     ],
     [
      "Wie",
      "cómo",
      "Wie heißt du?"
     ]
    ]
   },
   {
    "nota": "Fijate en la diferencia entre **wo** (dónde, un lugar fijo), **woher** (de dónde viene) y **wohin** (adónde va). Y «wie viel» es «cuánto»: «Wie viel kostet das?»."
   }
  ],
  "exercises": [
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado (1).",
    "pairs": [
     {
      "left": "Wer",
      "right": "quién"
     },
     {
      "left": "Was",
      "right": "qué"
     },
     {
      "left": "Wo",
      "right": "dónde"
     },
     {
      "left": "Wann",
      "right": "cuándo"
     }
    ],
    "answer": "Wer = quién · Was = qué · Wo = dónde · Wann = cuándo",
    "explain": "Wer = quién · Was = qué · Wo = dónde · Wann = cuándo",
    "nivel": 11
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado (2).",
    "pairs": [
     {
      "left": "Warum",
      "right": "por qué"
     },
     {
      "left": "Wie",
      "right": "cómo"
     },
     {
      "left": "Woher",
      "right": "de dónde"
     },
     {
      "left": "Wohin",
      "right": "adónde"
     }
    ],
    "answer": "Warum = por qué · Wie = cómo · Woher = de dónde · Wohin = adónde",
    "explain": "Warum = por qué · Wie = cómo · Woher = de dónde · Wohin = adónde",
    "nivel": 11
   },
   {
    "type": "fill",
    "prompt": "___ wohnst du? (¿dónde?)",
    "answer": "Wo",
    "accept": [
     "Wo"
    ],
    "explain": "«wo» = dónde.",
    "nivel": 11
   },
   {
    "type": "choice",
    "prompt": "«Wer ist das?» significa…",
    "options": [
     "¿Quién es?",
     "¿Qué es?",
     "¿Dónde está?"
    ],
    "answer": "¿Quién es?",
    "explain": "«wer» = quién.",
    "nivel": 11
   },
   {
    "type": "choice",
    "prompt": "___ kommst du? (¿de dónde?)",
    "options": [
     "Woher",
     "Wohin",
     "Wo"
    ],
    "answer": "Woher",
    "explain": "«woher» = de dónde.",
    "nivel": 11
   },
   {
    "type": "choice",
    "prompt": "___ gehst du? (¿adónde?)",
    "options": [
     "Wohin",
     "Woher",
     "Wo"
    ],
    "answer": "Wohin",
    "explain": "«wohin» = adónde.",
    "nivel": 11
   },
   {
    "type": "fill",
    "prompt": "___ ist das? (¿qué?)",
    "answer": "Was",
    "accept": [
     "Was"
    ],
    "explain": "«was» = qué.",
    "nivel": 11
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Warum»): «¿Por qué estudiás alemán?»",
    "answer": "Warum lernst du Deutsch?",
    "words": [
     "du",
     "lernst",
     "Deutsch?",
     "Warum"
    ],
    "explain": "«Warum lernst du Deutsch?»",
    "nivel": 11
   }
  ]
 },
 {
  "id": "u34",
  "title": "Preguntas de sí o no",
  "nivel": 11,
  "bloques": [
   {
    "p": "Para las preguntas que se contestan con «sí» o «no», el **verbo pasa al principio**:"
   },
   {
    "tabla": [
     [
      "Du hast Hunger.",
      "Tenés hambre."
     ],
     [
      "Hast du Hunger?",
      "¿Tenés hambre?"
     ],
     [
      "Du sprichst Deutsch.",
      "Hablás alemán."
     ],
     [
      "Sprichst du Deutsch?",
      "¿Hablás alemán?"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Kommst du morgen?",
      "¿Venís mañana?"
     ],
     [
      "Trinkst du Kaffee?",
      "¿Tomás café?"
     ]
    ]
   },
   {
    "nota": "Se responde con **Ja** (sí) o **Nein** (no). Hay una tercera: **Doch**, que se usa para decir «sí» cuando la pregunta es negativa. «Hast du keinen Hunger? – **Doch**, ich habe Hunger!» (¿No tenés hambre? – ¡Sí, tengo!)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Convertí en pregunta «Du hast Hunger»:",
    "options": [
     "Hast du Hunger?",
     "Hast Hunger du?",
     "Du Hunger hast?"
    ],
    "answer": "Hast du Hunger?",
    "explain": "El verbo va primero.",
    "nivel": 11
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Sprichst»): «¿Hablás alemán?»",
    "answer": "Sprichst du Deutsch?",
    "words": [
     "Deutsch?",
     "du",
     "Sprichst"
    ],
    "explain": "«Sprichst du Deutsch?»",
    "nivel": 11
   },
   {
    "type": "fill",
    "prompt": "___ du Kaffee? (trinken)",
    "answer": "Trinkst",
    "accept": [
     "Trinkst"
    ],
    "explain": "Con «du»: «trinkst», al principio.",
    "nivel": 11
   },
   {
    "type": "choice",
    "prompt": "«Doch» se usa para…",
    "options": [
     "contestar «sí» a una pregunta negativa",
     "decir «no» con cortesía",
     "decir «tal vez»"
    ],
    "answer": "contestar «sí» a una pregunta negativa",
    "explain": "«Doch» contradice una pregunta negativa.",
    "nivel": 11
   },
   {
    "type": "choice",
    "prompt": "«Kommst du morgen?» significa…",
    "options": [
     "¿Venís mañana?",
     "¿Cuándo venís?",
     "¿Quién viene mañana?"
    ],
    "answer": "¿Venís mañana?",
    "explain": "Pregunta de sí o no.",
    "nivel": 11
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "Ja",
      "right": "sí"
     },
     {
      "left": "Nein",
      "right": "no"
     },
     {
      "left": "Doch",
      "right": "sí (a una pregunta negativa)"
     },
     {
      "left": "Vielleicht",
      "right": "tal vez"
     }
    ],
    "answer": "Ja = sí · Nein = no · Doch = sí (a una pregunta negativa) · Vielleicht = tal vez",
    "explain": "Ja = sí · Nein = no · Doch = sí (a una pregunta negativa) · Vielleicht = tal vez",
    "nivel": 11
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Hast»): «¿Tenés hambre?»",
    "answer": "Hast du Hunger?",
    "words": [
     "Hast",
     "Hunger?",
     "du"
    ],
    "explain": "«Hast du Hunger?»",
    "nivel": 11
   }
  ]
 },
 {
  "id": "u35",
  "title": "Me, te, lo: mich, dich, ihn…",
  "nivel": 16,
  "bloques": [
   {
    "p": "Cuando algo o alguien **recibe la acción** del verbo (el «lo / la / me / te» del español), el pronombre cambia. Es el **acusativo**:"
   },
   {
    "tabla": [
     [
      "ich",
      "mich",
      "me"
     ],
     [
      "du",
      "dich",
      "te"
     ],
     [
      "er",
      "ihn",
      "lo"
     ],
     [
      "sie (ella)",
      "sie",
      "la"
     ],
     [
      "es",
      "es",
      "lo (neutro)"
     ],
     [
      "wir",
      "uns",
      "nos"
     ],
     [
      "ihr",
      "euch",
      "los / las (ustedes)"
     ],
     [
      "sie (ellos)",
      "sie",
      "los / las"
     ],
     [
      "Sie (usted)",
      "Sie",
      "lo / la (usted)"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich liebe dich.",
      "Te amo."
     ],
     [
      "Er sieht mich.",
      "Él me ve."
     ],
     [
      "Kennst du ihn?",
      "¿Lo conocés?"
     ],
     [
      "Wir besuchen euch.",
      "Los visitamos (a ustedes)."
     ]
    ]
   },
   {
    "nota": "Solo cambian **ich, du, er, wir, ihr**. Las demás formas (sie, es, Sie) quedan iguales. Y fijate que «ihn» es para «er» (un hombre o una cosa «der»): «Der Hund? Ich sehe **ihn**»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Ich sehe ___. (a vos)",
    "options": [
     "dich",
     "du",
     "dir"
    ],
    "answer": "dich",
    "explain": "«du» → «dich» en acusativo.",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "Anna kennt ___. (a mí)",
    "options": [
     "mich",
     "ich",
     "mir"
    ],
    "answer": "mich",
    "explain": "«ich» → «mich» en acusativo.",
    "nivel": 16
   },
   {
    "type": "fill",
    "prompt": "Ich liebe ___. (a él)",
    "answer": "ihn",
    "accept": [
     "ihn"
    ],
    "explain": "«er» → «ihn» en acusativo.",
    "nivel": 16
   },
   {
    "type": "fill",
    "prompt": "Kennst du ___? (a nosotros)",
    "answer": "uns",
    "accept": [
     "uns"
    ],
    "explain": "«wir» → «uns».",
    "nivel": 16
   },
   {
    "type": "match",
    "prompt": "Unir cada pronombre con su acusativo.",
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
      "left": "er",
      "right": "ihn"
     },
     {
      "left": "wir",
      "right": "uns"
     }
    ],
    "answer": "ich = mich · du = dich · er = ihn · wir = uns",
    "explain": "ich = mich · du = dich · er = ihn · wir = uns",
    "nivel": 16
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Te amo».",
    "answer": "Ich liebe dich.",
    "words": [
     "liebe",
     "dich.",
     "Ich"
    ],
    "explain": "«Ich liebe dich.» = Te amo.",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "«Er sieht mich» significa…",
    "options": [
     "Él me ve.",
     "Yo lo veo.",
     "Él te ve."
    ],
    "answer": "Él me ve.",
    "explain": "«mich» = me.",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "Visitamos a ustedes:",
    "options": [
     "Wir besuchen euch.",
     "Wir besuchen ihr.",
     "Wir besuchen du."
    ],
    "answer": "Wir besuchen euch.",
    "explain": "«ihr» → «euch» en acusativo.",
    "nivel": 16
   }
  ]
 },
 {
  "id": "u36",
  "title": "A mí, a vos: mir, dir, ihm…",
  "nivel": 19,
  "bloques": [
   {
    "p": "Cuando algo es **para alguien** (el «le / me / te» de «le doy», «me gusta»), se usa el **dativo**. Los pronombres cambian así:"
   },
   {
    "tabla": [
     [
      "ich",
      "mir",
      "a mí"
     ],
     [
      "du",
      "dir",
      "a vos"
     ],
     [
      "er",
      "ihm",
      "a él"
     ],
     [
      "sie (ella)",
      "ihr",
      "a ella"
     ],
     [
      "es",
      "ihm",
      "a eso"
     ],
     [
      "wir",
      "uns",
      "a nosotros"
     ],
     [
      "ihr",
      "euch",
      "a ustedes"
     ],
     [
      "sie (ellos)",
      "ihnen",
      "a ellos"
     ],
     [
      "Sie (usted)",
      "Ihnen",
      "a usted"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Wie geht es dir?",
      "¿Cómo te va? (a vos)"
     ],
     [
      "Ich helfe dir.",
      "Te ayudo."
     ],
     [
      "Er gibt mir das Buch.",
      "Él me da el libro."
     ],
     [
      "Das Buch gefällt mir.",
      "Me gusta el libro."
     ]
    ]
   },
   {
    "nota": "Algunos verbos piden dativo: **helfen** (ayudar), **geben** (dar), **gefallen** (gustar). «Ich helfe **dir**» (no «dich»). Y **gefallen** funciona como «gustar» en español: lo que te gusta es el sujeto, y vos sos el «mir»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Ich helfe ___. (a vos)",
    "options": [
     "dir",
     "dich",
     "du"
    ],
    "answer": "dir",
    "explain": "«helfen» pide dativo: «dir».",
    "nivel": 19
   },
   {
    "type": "choice",
    "prompt": "Das Buch gefällt ___. (a mí)",
    "options": [
     "mir",
     "mich",
     "ich"
    ],
    "answer": "mir",
    "explain": "«gefallen» pide dativo: «mir».",
    "nivel": 19
   },
   {
    "type": "fill",
    "prompt": "Er gibt ___ das Buch. (a mí)",
    "answer": "mir",
    "accept": [
     "mir"
    ],
    "explain": "«geben» pide dativo: «mir».",
    "nivel": 19
   },
   {
    "type": "fill",
    "prompt": "Wie geht es ___? (a vos)",
    "answer": "dir",
    "accept": [
     "dir"
    ],
    "explain": "«Wie geht es dir?» = ¿Cómo te va?",
    "nivel": 19
   },
   {
    "type": "match",
    "prompt": "Unir cada pronombre con su dativo.",
    "pairs": [
     {
      "left": "ich",
      "right": "mir"
     },
     {
      "left": "du",
      "right": "dir"
     },
     {
      "left": "er",
      "right": "ihm"
     },
     {
      "left": "sie (ella)",
      "right": "ihr"
     }
    ],
    "answer": "ich = mir · du = dir · er = ihm · sie (ella) = ihr",
    "explain": "ich = mir · du = dir · er = ihm · sie (ella) = ihr",
    "nivel": 19
   },
   {
    "type": "choice",
    "prompt": "«Das gefällt mir» significa…",
    "options": [
     "Me gusta eso.",
     "Eso me ve.",
     "Eso me llama."
    ],
    "answer": "Me gusta eso.",
    "explain": "«gefallen» = gustar.",
    "nivel": 19
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Te ayudo».",
    "answer": "Ich helfe dir.",
    "words": [
     "Ich",
     "dir.",
     "helfe"
    ],
    "explain": "«Ich helfe dir.» = Te ayudo.",
    "nivel": 19
   },
   {
    "type": "choice",
    "prompt": "¿Por qué «Ich kenne dich» pero «Ich helfe dir»?",
    "options": [
     "«kennen» lleva acusativo y «helfen» lleva dativo",
     "Es lo mismo",
     "Depende de la persona"
    ],
    "answer": "«kennen» lleva acusativo y «helfen» lleva dativo",
    "explain": "Cada verbo pide su caso: hay que aprenderlo con el verbo.",
    "nivel": 19
   }
  ]
 },
 {
  "id": "u37",
  "title": "El dativo con sustantivos: dem, der, den",
  "nivel": 22,
  "bloques": [
   {
    "p": "El dativo también cambia el **artículo** de los sustantivos. Responde a la pregunta **«¿a quién?»** y va después de ciertas palabritas:"
   },
   {
    "tabla": [
     [
      "der Mann",
      "dem Mann",
      "al hombre"
     ],
     [
      "die Frau",
      "der Frau",
      "a la mujer"
     ],
     [
      "das Kind",
      "dem Kind",
      "al niño"
     ],
     [
      "die Kinder",
      "den Kindern",
      "a los niños (¡y se le suma una -n!)"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich gebe dem Mann das Buch.",
      "Le doy el libro al hombre."
     ],
     [
      "Ich helfe der Frau.",
      "Ayudo a la mujer."
     ],
     [
      "Ich wohne bei meiner Oma.",
      "Vivo con mi abuela."
     ],
     [
      "Ich gehe zur Schule.",
      "Voy a la escuela."
     ]
    ]
   },
   {
    "nota": "Estas palabras **siempre** piden dativo: **mit** (con), **bei** (en casa de / cerca de), **nach** (a / después de), **von** (de), **zu** (a), **aus** (de / desde). Y se contraen: **zu + dem = zum** («zum Arzt»), **zu + der = zur** («zur Schule»), **bei + dem = beim**, **von + dem = vom**."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Ich gebe ___ Frau das Buch. (a la)",
    "options": [
     "der",
     "die",
     "dem"
    ],
    "answer": "der",
    "explain": "«die Frau» → «der Frau» en dativo.",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "Ich helfe ___ Mann. (al)",
    "options": [
     "dem",
     "der",
     "den"
    ],
    "answer": "dem",
    "explain": "«der Mann» → «dem Mann» en dativo.",
    "nivel": 22
   },
   {
    "type": "fill",
    "prompt": "Ich gehe ___ Schule. (zu + der)",
    "answer": "zur",
    "accept": [
     "zur"
    ],
    "explain": "«zu» + «der» = «zur».",
    "nivel": 22
   },
   {
    "type": "fill",
    "prompt": "Ich gehe ___ Arzt. (zu + dem)",
    "answer": "zum",
    "accept": [
     "zum"
    ],
    "explain": "«zu» + «dem» = «zum».",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "Ich wohne bei ___ Oma. (mi)",
    "options": [
     "meiner",
     "meine",
     "meinem"
    ],
    "answer": "meiner",
    "explain": "«die Oma» → dativo «meiner Oma».",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "El dativo responde a la pregunta…",
    "options": [
     "¿A quién?",
     "¿Quién?",
     "¿Qué?"
    ],
    "answer": "¿A quién?",
    "explain": "Dativo = a quién (el que recibe).",
    "nivel": 22
   },
   {
    "type": "match",
    "prompt": "Unir cada sustantivo con su dativo.",
    "pairs": [
     {
      "left": "der Mann",
      "right": "dem Mann"
     },
     {
      "left": "die Frau",
      "right": "der Frau"
     },
     {
      "left": "das Kind",
      "right": "dem Kind"
     },
     {
      "left": "die Kinder",
      "right": "den Kindern"
     }
    ],
    "answer": "der Mann = dem Mann · die Frau = der Frau · das Kind = dem Kind · die Kinder = den Kindern",
    "explain": "der Mann = dem Mann · die Frau = der Frau · das Kind = dem Kind · die Kinder = den Kindern",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "«aus» siempre lleva…",
    "options": [
     "dativo",
     "acusativo",
     "nominativo"
    ],
    "answer": "dativo",
    "explain": "Con «aus, bei, mit, nach, von, zu» siempre va dativo.",
    "nivel": 22
   }
  ]
 },
 {
  "id": "u38",
  "title": "Verbos reflexivos: sich freuen, sich waschen",
  "nivel": 20,
  "bloques": [
   {
    "p": "Un verbo es **reflexivo** cuando la acción vuelve sobre quien la hace («me lavo», «se sienta»). En alemán lleva un pronombre extra:"
   },
   {
    "tabla": [
     [
      "ich",
      "mich",
      "Ich freue mich."
     ],
     [
      "du",
      "dich",
      "Du freust dich."
     ],
     [
      "er / sie / es",
      "sich",
      "Er freut sich."
     ],
     [
      "wir",
      "uns",
      "Wir freuen uns."
     ],
     [
      "ihr",
      "euch",
      "Ihr freut euch."
     ],
     [
      "sie / Sie",
      "sich",
      "Sie freuen sich."
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich wasche mich.",
      "Me lavo."
     ],
     [
      "Er setzt sich.",
      "Él se sienta."
     ],
     [
      "Ich fühle mich gut.",
      "Me siento bien."
     ],
     [
      "Ich freue mich auf das Wochenende.",
      "Tengo ganas de que llegue el fin de semana."
     ]
    ]
   },
   {
    "nota": "Los más usados: **sich freuen** (alegrarse), **sich waschen** (lavarse), **sich setzen** (sentarse), **sich fühlen** (sentirse), **sich treffen** (encontrarse), **sich entschuldigen** (disculparse). El pronombre cambia según la persona, menos con **er / sie / es / sie / Sie**, que siempre es **sich**."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich freue ___. (me)",
    "answer": "mich",
    "accept": [
     "mich"
    ],
    "explain": "Con «ich»: «mich».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Du wäschst ___. (te)",
    "answer": "dich",
    "accept": [
     "dich"
    ],
    "explain": "Con «du»: «dich».",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "Er setzt ___. (se)",
    "options": [
     "sich",
     "ihn",
     "mich"
    ],
    "answer": "sich",
    "explain": "Con «er / sie / es»: «sich».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Wir freuen ___. (nos)",
    "answer": "uns",
    "accept": [
     "uns"
    ],
    "explain": "Con «wir»: «uns».",
    "nivel": 20
   },
   {
    "type": "match",
    "prompt": "Unir cada persona con su pronombre reflexivo.",
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
      "left": "er / sie",
      "right": "sich"
     },
     {
      "left": "wir",
      "right": "uns"
     }
    ],
    "answer": "ich = mich · du = dich · er / sie = sich · wir = uns",
    "explain": "ich = mich · du = dich · er / sie = sich · wir = uns",
    "nivel": 20
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Me siento bien».",
    "answer": "Ich fühle mich gut.",
    "words": [
     "Ich",
     "gut.",
     "mich",
     "fühle"
    ],
    "explain": "«Ich fühle mich gut.» = Me siento bien.",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "«Ich fühle mich gut» significa…",
    "options": [
     "Me siento bien.",
     "Lo siento mucho.",
     "Me gusta."
    ],
    "answer": "Me siento bien.",
    "explain": "«sich fühlen» = sentirse.",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "Con «ihr» el pronombre reflexivo es…",
    "options": [
     "euch",
     "sich",
     "dich"
    ],
    "answer": "euch",
    "explain": "«ihr» → «euch».",
    "nivel": 20
   }
  ]
 },
 {
  "id": "u39",
  "title": "Comparar: größer als, so schön wie",
  "nivel": 18,
  "bloques": [
   {
    "p": "Para comparar agregás **-er** al adjetivo y usás **als** (que): «Berlin ist **größer als** Hamburg». Muchos adjetivos cortos, además, le ponen **diéresis** a la vocal (a → ä, o → ö, u → ü):"
   },
   {
    "tabla": [
     [
      "klein",
      "kleiner",
      "más chico"
     ],
     [
      "schnell",
      "schneller",
      "más rápido"
     ],
     [
      "alt",
      "älter",
      "más viejo"
     ],
     [
      "jung",
      "jünger",
      "más joven"
     ],
     [
      "groß",
      "größer",
      "más grande"
     ],
     [
      "warm",
      "wärmer",
      "más cálido"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Berlin ist größer als Hamburg.",
      "Berlín es más grande que Hamburgo."
     ],
     [
      "Mein Bruder ist älter als ich.",
      "Mi hermano es mayor que yo."
     ],
     [
      "Der Zug ist so schnell wie das Auto.",
      "El tren es tan rápido como el auto."
     ]
    ]
   },
   {
    "nota": "Tres comparativos son **irregulares** y conviene aprenderlos de memoria: **gut → besser** (mejor), **viel → mehr** (más), **gern → lieber** (preferir). Y para «tan… como» se usa **so… wie**."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "klein → ___ (más chico)",
    "answer": "kleiner",
    "accept": [
     "kleiner"
    ],
    "explain": "klein + er = kleiner.",
    "nivel": 18
   },
   {
    "type": "fill",
    "prompt": "alt → ___ (más viejo)",
    "answer": "älter",
    "accept": [
     "älter",
     "aelter"
    ],
    "explain": "alt → älter (la «a» pasa a «ä»).",
    "estricto": true,
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "Berlin ist größer ___ Hamburg.",
    "options": [
     "als",
     "wie",
     "und"
    ],
    "answer": "als",
    "explain": "Para comparar: «größer als».",
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "Der Zug ist so schnell ___ das Auto. (tan… como)",
    "options": [
     "wie",
     "als",
     "aber"
    ],
    "answer": "wie",
    "explain": "«so… wie» = tan… como.",
    "nivel": 18
   },
   {
    "type": "match",
    "prompt": "Unir cada adjetivo con su comparativo.",
    "pairs": [
     {
      "left": "gut",
      "right": "besser"
     },
     {
      "left": "viel",
      "right": "mehr"
     },
     {
      "left": "groß",
      "right": "größer"
     },
     {
      "left": "jung",
      "right": "jünger"
     }
    ],
    "answer": "gut = besser · viel = mehr · groß = größer · jung = jünger",
    "explain": "gut = besser · viel = mehr · groß = größer · jung = jünger",
    "nivel": 18
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Mein»): «Mi hermano es mayor que yo».",
    "answer": "Mein Bruder ist älter als ich.",
    "words": [
     "Mein",
     "Bruder",
     "älter",
     "als",
     "ist",
     "ich."
    ],
    "explain": "«Mein Bruder ist älter als ich.»",
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "«schneller» significa…",
    "options": [
     "más rápido",
     "muy rápido",
     "el más rápido"
    ],
    "answer": "más rápido",
    "explain": "schnell + er = más rápido.",
    "nivel": 18
   }
  ]
 },
 {
  "id": "u40",
  "title": "El más…: el superlativo",
  "nivel": 20,
  "bloques": [
   {
    "p": "Para decir «el más…» usás **am** + el adjetivo con **-sten**: «Er ist **am schnellsten**» (él es el más rápido)."
   },
   {
    "tabla": [
     [
      "schnell",
      "am schnellsten",
      "el más rápido"
     ],
     [
      "groß",
      "am größten",
      "el más grande"
     ],
     [
      "klein",
      "am kleinsten",
      "el más chico"
     ],
     [
      "alt",
      "am ältesten",
      "el más viejo"
     ],
     [
      "jung",
      "am jüngsten",
      "el más joven"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Er läuft am schnellsten.",
      "Él corre más rápido que todos."
     ],
     [
      "Mein Bruder ist am jüngsten.",
      "Mi hermano es el más joven."
     ],
     [
      "Das ist am schönsten.",
      "Eso es lo más lindo."
     ]
    ]
   },
   {
    "nota": "Los irregulares: **gut → am besten** (el mejor), **viel → am meisten** (el que más), **gern → am liebsten** (lo que más me gusta). Y los adjetivos que terminan en -d, -t o -ß agregan una **e** para poder pronunciarse: **alt → am ältesten**, **heiß → am heißesten**."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "schnell → am ___ (el más rápido)",
    "answer": "schnellsten",
    "accept": [
     "schnellsten"
    ],
    "explain": "schnell + sten.",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "alt → am ___ (el más viejo)",
    "answer": "ältesten",
    "accept": [
     "ältesten",
     "aeltesten"
    ],
    "explain": "alt → ältesten (con «e» y diéresis).",
    "estricto": true,
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "gut → am ___ (el mejor)",
    "answer": "besten",
    "accept": [
     "besten"
    ],
    "explain": "gut → besser → am besten.",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "«Er läuft am schnellsten» significa…",
    "options": [
     "Él corre más rápido que todos.",
     "Él corre lento.",
     "Él corre más rápido que antes."
    ],
    "answer": "Él corre más rápido que todos.",
    "explain": "«am schnellsten» = el más rápido.",
    "nivel": 20
   },
   {
    "type": "match",
    "prompt": "Unir cada adjetivo con su superlativo.",
    "pairs": [
     {
      "left": "groß",
      "right": "am größten"
     },
     {
      "left": "klein",
      "right": "am kleinsten"
     },
     {
      "left": "gut",
      "right": "am besten"
     },
     {
      "left": "viel",
      "right": "am meisten"
     }
    ],
    "answer": "groß = am größten · klein = am kleinsten · gut = am besten · viel = am meisten",
    "explain": "groß = am größten · klein = am kleinsten · gut = am besten · viel = am meisten",
    "nivel": 20
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Mein»): «Mi hermano es el más joven».",
    "answer": "Mein Bruder ist am jüngsten.",
    "words": [
     "jüngsten.",
     "am",
     "ist",
     "Bruder",
     "Mein"
    ],
    "explain": "«am jüngsten» = el más joven.",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "¿Cuál es el superlativo de «viel»?",
    "options": [
     "am meisten",
     "am vielsten",
     "mehr"
    ],
    "answer": "am meisten",
    "explain": "viel → mehr → am meisten.",
    "nivel": 20
   }
  ]
 },
 {
  "id": "u41",
  "title": "Gern, lieber, am liebsten",
  "nivel": 12,
  "bloques": [
   {
    "p": "Para decir qué te **gusta hacer** no usás un verbo: usás la palabrita **gern** después del verbo. Y tiene dos hermanos para comparar:"
   },
   {
    "tabla": [
     [
      "gern",
      "con gusto / me gusta",
      "Ich spiele gern Fußball."
     ],
     [
      "lieber",
      "preferir",
      "Ich trinke lieber Tee."
     ],
     [
      "am liebsten",
      "lo que más me gusta",
      "Am liebsten schlafe ich."
     ],
     [
      "nicht gern",
      "no me gusta",
      "Ich esse nicht gern Fisch."
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich lese gern.",
      "Me gusta leer."
     ],
     [
      "Er isst lieber Brot.",
      "Él prefiere comer pan."
     ],
     [
      "Sie singt am liebsten.",
      "Lo que más le gusta a ella es cantar."
     ]
    ]
   },
   {
    "nota": "**gern** va **después del verbo conjugado**: «Ich spiele **gern** Fußball» (literalmente «juego con gusto»). Para negar: **nicht gern**. Es una de las formas más fáciles de contar tus gustos."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Ich spiele ___ Fußball. (me gusta jugar)",
    "options": [
     "gern",
     "lieber",
     "am liebsten"
    ],
    "answer": "gern",
    "explain": "«gern» = con gusto.",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "Ich trinke ___ Tee als Kaffee. (prefiero)",
    "options": [
     "lieber",
     "gern",
     "am liebsten"
    ],
    "answer": "lieber",
    "explain": "«lieber» = preferir.",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Ich schlafe am ___. (lo que más me gusta)",
    "answer": "liebsten",
    "accept": [
     "liebsten"
    ],
    "explain": "«am liebsten» = lo que más me gusta.",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "«Ich esse nicht gern Fisch» significa…",
    "options": [
     "No me gusta comer pescado.",
     "Me gusta mucho el pescado.",
     "Nunca como pescado."
    ],
    "answer": "No me gusta comer pescado.",
    "explain": "«nicht gern» = no me gusta.",
    "nivel": 12
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Me gusta leer».",
    "answer": "Ich lese gern.",
    "words": [
     "gern.",
     "Ich",
     "lese"
    ],
    "explain": "«Ich lese gern.» = Me gusta leer.",
    "nivel": 12
   },
   {
    "type": "match",
    "prompt": "Unir cada expresión con su significado.",
    "pairs": [
     {
      "left": "gern",
      "right": "con gusto"
     },
     {
      "left": "lieber",
      "right": "preferir"
     },
     {
      "left": "am liebsten",
      "right": "lo que más me gusta"
     },
     {
      "left": "nicht gern",
      "right": "no me gusta"
     }
    ],
    "answer": "gern = con gusto · lieber = preferir · am liebsten = lo que más me gusta · nicht gern = no me gusta",
    "explain": "gern = con gusto · lieber = preferir · am liebsten = lo que más me gusta · nicht gern = no me gusta",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "«gern» va…",
    "options": [
     "después del verbo",
     "al final de la frase siempre",
     "antes del sujeto"
    ],
    "answer": "después del verbo",
    "explain": "«Ich spiele gern Fußball»: después del verbo.",
    "nivel": 12
   }
  ]
 },
 {
  "id": "u42",
  "title": "La hora: halb y Viertel",
  "nivel": 15,
  "bloques": [
   {
    "p": "Además de «Es ist drei Uhr» (son las tres), en alemán se dice la hora con **Viertel** (cuarto) y **halb** (medio):"
   },
   {
    "tabla": [
     [
      "Es ist Viertel nach drei.",
      "Son las tres y cuarto. (3:15)"
     ],
     [
      "Es ist halb vier.",
      "Son las tres y media. (3:30)"
     ],
     [
      "Es ist Viertel vor vier.",
      "Son las cuatro menos cuarto. (3:45)"
     ],
     [
      "Es ist zehn nach drei.",
      "Son las tres y diez. (3:10)"
     ],
     [
      "Es ist fünf vor vier.",
      "Son las cuatro menos cinco. (3:55)"
     ]
    ]
   },
   {
    "nota": "**Ojo con «halb»**: significa «medio camino hacia la hora que viene». «Es ist **halb vier**» son las **tres y media** (3:30), no las 4:30. Para pensarlo: «halb vier» = «media hora antes de las cuatro»."
   },
   {
    "nota": "En Austria y en el sur de Alemania también vas a escuchar «Viertel vier» para las 3:15 («un cuarto hacia las cuatro»). Si lo escuchás, no te asustes: es lo mismo que «Viertel nach drei»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "«Es ist halb drei» son las…",
    "options": [
     "2:30",
     "3:30",
     "3:00"
    ],
    "answer": "2:30",
    "explain": "«halb drei» = media hora antes de las tres: 2:30.",
    "nivel": 15
   },
   {
    "type": "choice",
    "prompt": "«Viertel nach vier» es…",
    "options": [
     "4:15",
     "3:45",
     "4:45"
    ],
    "answer": "4:15",
    "explain": "«nach» = y: 4:15.",
    "nivel": 15
   },
   {
    "type": "choice",
    "prompt": "«Viertel vor fünf» es…",
    "options": [
     "4:45",
     "5:15",
     "4:15"
    ],
    "answer": "4:45",
    "explain": "«vor» = menos: 4:45.",
    "nivel": 15
   },
   {
    "type": "fill",
    "prompt": "Es ist ___ acht. (7:30)",
    "answer": "halb",
    "accept": [
     "halb"
    ],
    "explain": "7:30 = «halb acht».",
    "nivel": 15
   },
   {
    "type": "match",
    "prompt": "Unir cada expresión con su significado.",
    "pairs": [
     {
      "left": "Viertel nach",
      "right": "y cuarto"
     },
     {
      "left": "Viertel vor",
      "right": "menos cuarto"
     },
     {
      "left": "halb",
      "right": "y media (de la hora anterior)"
     },
     {
      "left": "Uhr",
      "right": "en punto"
     }
    ],
    "answer": "Viertel nach = y cuarto · Viertel vor = menos cuarto · halb = y media (de la hora anterior) · Uhr = en punto",
    "explain": "Viertel nach = y cuarto · Viertel vor = menos cuarto · halb = y media (de la hora anterior) · Uhr = en punto",
    "nivel": 15
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Es»): «Son las seis y cuarto».",
    "answer": "Es ist Viertel nach sechs.",
    "words": [
     "ist",
     "sechs.",
     "Es",
     "nach",
     "Viertel"
    ],
    "explain": "«Viertel nach sechs» = 6:15.",
    "nivel": 15
   },
   {
    "type": "choice",
    "prompt": "¿Cómo decís 9:30?",
    "options": [
     "halb zehn",
     "halb neun",
     "neun halb"
    ],
    "answer": "halb zehn",
    "explain": "9:30 = «halb zehn» (media hora antes de las diez).",
    "nivel": 15
   }
  ]
 },
 {
  "id": "u43",
  "title": "El primero, el segundo: ordinales y fechas",
  "nivel": 14,
  "bloques": [
   {
    "p": "Los ordinales (primero, segundo, tercero…) terminan en **-te** hasta el 19 y en **-ste** desde el 20. Se escriben con un **punto**: «1.» se lee «der erste»."
   },
   {
    "tabla": [
     [
      "1.",
      "der erste"
     ],
     [
      "2.",
      "der zweite"
     ],
     [
      "3.",
      "der dritte"
     ],
     [
      "4.",
      "der vierte"
     ],
     [
      "5.",
      "der fünfte"
     ],
     [
      "7.",
      "der siebte"
     ],
     [
      "10.",
      "der zehnte"
     ],
     [
      "20.",
      "der zwanzigste"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Heute ist der fünfte Juli.",
      "Hoy es cinco de julio."
     ],
     [
      "Mein Geburtstag ist am dritten März.",
      "Mi cumpleaños es el tres de marzo."
     ],
     [
      "Welches Datum ist heute?",
      "¿Qué fecha es hoy?"
     ]
    ]
   },
   {
    "nota": "Con «am» el ordinal lleva **-n** al final: «am ersten Mai» (el primero de mayo). Primero, tercero y séptimo son especiales: **erste, dritte, siebte**. Y para preguntar la fecha: **«Welches Datum ist heute?»** o **«Der Wievielte ist heute?»**."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "«der dritte» es…",
    "options": [
     "el tercero",
     "el cuarto",
     "el primero"
    ],
    "answer": "el tercero",
    "explain": "dritte = tercero.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "1. = der ___",
    "answer": "erste",
    "accept": [
     "erste"
    ],
    "explain": "1. = der erste.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Mein Geburtstag ist am ___ Mai. (1.)",
    "answer": "ersten",
    "accept": [
     "ersten"
    ],
    "explain": "«am ersten Mai» = el primero de mayo.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "Heute ist der ___ Juli. (5.)",
    "options": [
     "fünfte",
     "fünf",
     "fünfzehn"
    ],
    "answer": "fünfte",
    "explain": "5. = der fünfte.",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada ordinal con su número.",
    "pairs": [
     {
      "left": "der erste",
      "right": "1."
     },
     {
      "left": "der zweite",
      "right": "2."
     },
     {
      "left": "der dritte",
      "right": "3."
     },
     {
      "left": "der siebte",
      "right": "7."
     }
    ],
    "answer": "der erste = 1. · der zweite = 2. · der dritte = 3. · der siebte = 7.",
    "explain": "der erste = 1. · der zweite = 2. · der dritte = 3. · der siebte = 7.",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Mein»): «Mi cumpleaños es el tres de marzo».",
    "answer": "Mein Geburtstag ist am dritten März.",
    "words": [
     "Geburtstag",
     "dritten",
     "ist",
     "März.",
     "am",
     "Mein"
    ],
    "explain": "«am dritten März» = el tres de marzo.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "¿Cómo preguntás qué fecha es hoy?",
    "options": [
     "Welches Datum ist heute?",
     "Wie spät ist es?",
     "Wie alt bist du?"
    ],
    "answer": "Welches Datum ist heute?",
    "explain": "«Datum» = fecha.",
    "nivel": 14
   }
  ]
 },
 {
  "id": "u44",
  "title": "Números grandes: 100, 1000 y años",
  "nivel": 14,
  "bloques": [
   {
    "p": "Desde el cien los números se arman pegando palabras, **todo junto**: «dreihundert» (3 × 100), «zweitausend» (2 × 1000)."
   },
   {
    "tabla": [
     [
      "100",
      "hundert"
     ],
     [
      "200",
      "zweihundert"
     ],
     [
      "350",
      "dreihundertfünfzig"
     ],
     [
      "1000",
      "tausend"
     ],
     [
      "2000",
      "zweitausend"
     ],
     [
      "20 000",
      "zwanzigtausend"
     ],
     [
      "1 000 000",
      "eine Million"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Das kostet dreihundert Euro.",
      "Esto cuesta trescientos euros."
     ],
     [
      "Das Auto kostet zwanzigtausend Euro.",
      "El auto cuesta veinte mil euros."
     ]
    ]
   },
   {
    "nota": "Los **años** hasta el 1999 se dicen en «cienes»: 1990 = **neunzehnhundertneunzig** (diecinueve-cien-noventa). Desde el 2000 se dicen como número normal: 2025 = **zweitausendfünfundzwanzig**. Y no hace falta decir «Jahr» ni «en»: «Ich bin 1990 geboren» (nací en 1990)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "hundert =",
    "options": [
     "100",
     "1000",
     "10"
    ],
    "answer": "100",
    "explain": "hundert = 100.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "1000 = ___",
    "answer": "tausend",
    "accept": [
     "tausend"
    ],
    "explain": "tausend = 1000.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "zweihundert =",
    "options": [
     "200",
     "20",
     "2000"
    ],
    "answer": "200",
    "explain": "zwei + hundert = 200.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "¿Cómo se escribe 350?",
    "options": [
     "dreihundertfünfzig",
     "dreihundertfünf",
     "dreißighundertfünf"
    ],
    "answer": "dreihundertfünfzig",
    "explain": "drei + hundert + fünfzig.",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada número con su cifra.",
    "pairs": [
     {
      "left": "hundert",
      "right": "100"
     },
     {
      "left": "zweihundert",
      "right": "200"
     },
     {
      "left": "tausend",
      "right": "1000"
     },
     {
      "left": "eine Million",
      "right": "1 000 000"
     }
    ],
    "answer": "hundert = 100 · zweihundert = 200 · tausend = 1000 · eine Million = 1 000 000",
    "explain": "hundert = 100 · zweihundert = 200 · tausend = 1000 · eine Million = 1 000 000",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Das Auto kostet zwanzig___ Euro. (20 000)",
    "answer": "tausend",
    "accept": [
     "tausend"
    ],
    "explain": "zwanzig + tausend = 20 000.",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Das»): «Esto cuesta trescientos euros».",
    "answer": "Das kostet dreihundert Euro.",
    "words": [
     "kostet",
     "Das",
     "dreihundert",
     "Euro."
    ],
    "explain": "«Das kostet dreihundert Euro.»",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "El año 1990 se dice…",
    "options": [
     "neunzehnhundertneunzig",
     "neuntausendneunzig",
     "neunzigneunzehnhundert"
    ],
    "answer": "neunzehnhundertneunzig",
    "explain": "Los años del siglo XX se dicen en «cienes».",
    "nivel": 14
   }
  ]
 },
 {
  "id": "u45",
  "title": "Su, nuestro, de ustedes: sein, ihr, unser, euer",
  "nivel": 12,
  "bloques": [
   {
    "p": "Ya conocés **mein** (mi) y **dein** (tu). Faltan los demás «mi / tu / su» de las otras personas:"
   },
   {
    "tabla": [
     [
      "ich",
      "mein",
      "mi"
     ],
     [
      "du",
      "dein",
      "tu (de vos)"
     ],
     [
      "er / es",
      "sein",
      "su (de él)"
     ],
     [
      "sie (ella)",
      "ihr",
      "su (de ella)"
     ],
     [
      "wir",
      "unser",
      "nuestro"
     ],
     [
      "ihr",
      "euer",
      "de ustedes"
     ],
     [
      "sie (ellos)",
      "ihr",
      "su (de ellos)"
     ],
     [
      "Sie (usted)",
      "Ihr",
      "su (de usted)"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Das ist sein Auto.",
      "Este es su auto (de él)."
     ],
     [
      "Das ist ihre Tasche.",
      "Esta es su cartera (de ella)."
     ],
     [
      "Unser Haus ist groß.",
      "Nuestra casa es grande."
     ],
     [
      "Wo ist eure Katze?",
      "¿Dónde está la gata de ustedes?"
     ]
    ]
   },
   {
    "nota": "Funcionan igual que **ein / eine**: con palabras «die» (femeninas) y con plurales se agrega **-e** («ihre Tasche», «unsere Kinder»). Y **euer** pierde una «e» al agregar la terminación: **eure** (no «euere»)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Das ist ___ Auto. (de él)",
    "options": [
     "sein",
     "seine",
     "ihre"
    ],
    "answer": "sein",
    "explain": "«das Auto» es neutro: «sein» sin terminación.",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "Das ist ___ Tasche. (de ella)",
    "options": [
     "ihre",
     "ihr",
     "seine"
    ],
    "answer": "ihre",
    "explain": "«die Tasche» es femenina: «ihre».",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "___ Haus ist groß. (nuestro)",
    "answer": "Unser",
    "accept": [
     "Unser"
    ],
    "explain": "«unser» = nuestro.",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Wo ist ___ Katze? (la de ustedes)",
    "answer": "eure",
    "accept": [
     "eure"
    ],
    "explain": "«die Katze» es femenina: «eure».",
    "nivel": 12
   },
   {
    "type": "match",
    "prompt": "Unir cada posesivo con su significado.",
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
      "left": "ihr",
      "right": "su (de ella)"
     }
    ],
    "answer": "mein = mi · dein = tu (de vos) · sein = su (de él) · ihr = su (de ella)",
    "explain": "mein = mi · dein = tu (de vos) · sein = su (de él) · ihr = su (de ella)",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "«Unsere Kinder» significa…",
    "options": [
     "Nuestros hijos",
     "Sus hijos",
     "Mis hijos"
    ],
    "answer": "Nuestros hijos",
    "explain": "«unser» = nuestro.",
    "nivel": 12
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Das»): «Esta es nuestra casa».",
    "answer": "Das ist unser Haus.",
    "words": [
     "unser",
     "Das",
     "Haus.",
     "ist"
    ],
    "explain": "«Das ist unser Haus.»",
    "nivel": 12
   }
  ]
 },
 {
  "id": "u46",
  "title": "Ayer: war y hatte",
  "nivel": 20,
  "bloques": [
   {
    "p": "Para hablar del pasado con **sein** y **haben** no se usa el Perfekt: se usan formas propias, más cortas, que son muy comunes:"
   },
   {
    "verbosRef": [
     "v-sein",
     "v-haben"
    ],
    "t": "preterito"
   },
   {
    "ejemplos": [
     [
      "Gestern war ich müde.",
      "Ayer estaba cansado."
     ],
     [
      "Wo warst du?",
      "¿Dónde estabas?"
     ],
     [
      "Wir waren im Kino.",
      "Estuvimos en el cine."
     ],
     [
      "Ich hatte Hunger.",
      "Tenía hambre."
     ]
    ]
   },
   {
    "nota": "**war** y **hatte** son el pasado de **sein** y **haben**. Con los demás verbos, en la conversación de todos los días se usa el Perfekt (ya lo viste con «ich habe gemacht»)."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Gestern ___ ich müde. (sein)",
    "answer": "war",
    "accept": [
     "war"
    ],
    "explain": "Con «ich»: «war».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Wo ___ du gestern? (sein)",
    "answer": "warst",
    "accept": [
     "warst"
    ],
    "explain": "Con «du»: «warst».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Gestern ___ wir im Kino. (sein)",
    "answer": "waren",
    "accept": [
     "waren"
    ],
    "explain": "Con «wir»: «waren».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Ich ___ Hunger. (haben, ayer)",
    "answer": "hatte",
    "accept": [
     "hatte"
    ],
    "explain": "Con «ich»: «hatte».",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "«Ich hatte Hunger» significa…",
    "options": [
     "Tenía hambre.",
     "Tengo hambre.",
     "Tendré hambre."
    ],
    "answer": "Tenía hambre.",
    "explain": "«hatte» es el pasado de «haben».",
    "nivel": 20
   },
   {
    "type": "match",
    "prompt": "Unir cada forma con su significado.",
    "pairs": [
     {
      "left": "ich war",
      "right": "yo estaba / estuve"
     },
     {
      "left": "du warst",
      "right": "vos estabas / estuviste"
     },
     {
      "left": "wir waren",
      "right": "nosotros estábamos / estuvimos"
     },
     {
      "left": "ihr wart",
      "right": "ustedes estaban / estuvieron"
     }
    ],
    "answer": "ich war = yo estaba / estuve · du warst = vos estabas / estuviste · wir waren = nosotros estábamos / estuvimos · ihr wart = ustedes estaban / estuvieron",
    "explain": "ich war = yo estaba / estuve · du warst = vos estabas / estuviste · wir waren = nosotros estábamos / estuvimos · ihr wart = ustedes estaban / estuvieron",
    "nivel": 20
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Gestern»): «Ayer estuve en casa».",
    "answer": "Gestern war ich zu Hause.",
    "words": [
     "zu",
     "ich",
     "Gestern",
     "Hause.",
     "war"
    ],
    "explain": "«Gestern war ich zu Hause.»",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "«War» es el pasado de…",
    "options": [
     "sein",
     "haben",
     "werden"
    ],
    "answer": "sein",
    "explain": "ich bin → ich war.",
    "nivel": 20
   }
  ]
 },
 {
  "id": "u47",
  "title": "Perfekt con sein",
  "nivel": 22,
  "bloques": [
   {
    "p": "Ya viste el Perfekt con **haben** («ich habe gemacht»). Pero los verbos que expresan **movimiento** o **cambio de lugar o de estado** usan **sein**:"
   },
   {
    "tabla": [
     [
      "gehen",
      "ist gegangen",
      "ir"
     ],
     [
      "kommen",
      "ist gekommen",
      "venir"
     ],
     [
      "fahren",
      "ist gefahren",
      "ir en vehículo"
     ],
     [
      "bleiben",
      "ist geblieben",
      "quedarse"
     ],
     [
      "schwimmen",
      "ist geschwommen",
      "nadar"
     ],
     [
      "fliegen",
      "ist geflogen",
      "volar"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Ich bin nach Hause gegangen.",
      "Me fui a casa."
     ],
     [
      "Er ist nach Berlin gefahren.",
      "Él fue a Berlín."
     ],
     [
      "Wir sind zu Hause geblieben.",
      "Nos quedamos en casa."
     ]
    ]
   },
   {
    "nota": "Una regla práctica: si el verbo dice **ir, venir, quedarse, volar, nadar, caerse o levantarse**, probablemente lleva **sein**. Todos los demás («machen, lernen, kaufen, essen…») llevan **haben**. Lo mejor es aprender cada verbo con su auxiliar."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich ___ nach Hause gegangen. (sein)",
    "answer": "bin",
    "accept": [
     "bin"
    ],
    "explain": "Con «ich»: «bin».",
    "nivel": 22
   },
   {
    "type": "fill",
    "prompt": "Er ___ nach Berlin gefahren. (sein)",
    "answer": "ist",
    "accept": [
     "ist"
    ],
    "explain": "Con «er»: «ist».",
    "nivel": 22
   },
   {
    "type": "fill",
    "prompt": "Wir ___ zu Hause geblieben. (sein)",
    "answer": "sind",
    "accept": [
     "sind"
    ],
    "explain": "Con «wir»: «sind».",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "¿Cuál es correcta?",
    "options": [
     "Ich bin gekommen.",
     "Ich habe gekommen.",
     "Ich bin gekommt."
    ],
    "answer": "Ich bin gekommen.",
    "explain": "«kommen» usa «sein»: «ich bin gekommen».",
    "nivel": 22
   },
   {
    "type": "match",
    "prompt": "Unir cada verbo con su Perfekt.",
    "pairs": [
     {
      "left": "gehen",
      "right": "ist gegangen"
     },
     {
      "left": "fahren",
      "right": "ist gefahren"
     },
     {
      "left": "bleiben",
      "right": "ist geblieben"
     },
     {
      "left": "schwimmen",
      "right": "ist geschwommen"
     }
    ],
    "answer": "gehen = ist gegangen · fahren = ist gefahren · bleiben = ist geblieben · schwimmen = ist geschwommen",
    "explain": "gehen = ist gegangen · fahren = ist gefahren · bleiben = ist geblieben · schwimmen = ist geschwommen",
    "nivel": 22
   },
   {
    "type": "choice",
    "prompt": "Con «machen» se usa…",
    "options": [
     "haben (ich habe gemacht)",
     "sein (ich bin gemacht)",
     "werden"
    ],
    "answer": "haben (ich habe gemacht)",
    "explain": "«machen» no expresa movimiento: lleva «haben».",
    "nivel": 22
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Fui a Berlín en tren».",
    "answer": "Ich bin mit dem Zug nach Berlin gefahren.",
    "words": [
     "Berlin",
     "bin",
     "nach",
     "dem",
     "Zug",
     "gefahren.",
     "Ich",
     "mit"
    ],
    "explain": "«gefahren» queda al final.",
    "nivel": 22
   }
  ]
 },
 {
  "id": "u48",
  "title": "El futuro: werden",
  "nivel": 20,
  "bloques": [
   {
    "p": "Para decir lo que **vas a hacer** podés usar **werden** + el verbo en infinitivo **al final**:"
   },
   {
    "verbosRef": [
     "v-werden"
    ],
    "t": "presente"
   },
   {
    "ejemplos": [
     [
      "Ich werde morgen arbeiten.",
      "Mañana voy a trabajar."
     ],
     [
      "Er wird nach Wien fahren.",
      "Él va a ir a Viena."
     ],
     [
      "Wir werden Deutsch lernen.",
      "Vamos a aprender alemán."
     ]
    ]
   },
   {
    "nota": "En la vida real casi siempre se usa el **presente con una palabra de tiempo**: «Morgen **arbeite** ich» (mañana trabajo) suena más natural que «Ich werde morgen arbeiten». El futuro con **werden** se usa para promesas, predicciones y planes más lejanos."
   }
  ],
  "exercises": [
   {
    "type": "fill",
    "prompt": "Ich ___ morgen kommen. (werden)",
    "answer": "werde",
    "accept": [
     "werde"
    ],
    "explain": "Con «ich»: «werde».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Du ___ müde sein. (werden)",
    "answer": "wirst",
    "accept": [
     "wirst"
    ],
    "explain": "Con «du»: «wirst».",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Er ___ nach Wien fahren. (werden)",
    "answer": "wird",
    "accept": [
     "wird"
    ],
    "explain": "Con «er»: «wird».",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "«Wir werden lernen» significa…",
    "options": [
     "Vamos a aprender.",
     "Aprendimos.",
     "Aprendemos siempre."
    ],
    "answer": "Vamos a aprender.",
    "explain": "«werden» + infinitivo = futuro.",
    "nivel": 20
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Mañana voy a trabajar».",
    "answer": "Ich werde morgen arbeiten.",
    "words": [
     "werde",
     "arbeiten.",
     "Ich",
     "morgen"
    ],
    "explain": "El infinitivo «arbeiten» va al final.",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "En alemán, para el futuro también se puede usar…",
    "options": [
     "el presente + una palabra de tiempo",
     "solo el verbo werden",
     "el Perfekt"
    ],
    "answer": "el presente + una palabra de tiempo",
    "explain": "«Morgen komme ich» = mañana vengo.",
    "nivel": 20
   },
   {
    "type": "match",
    "prompt": "Unir cada forma con su significado.",
    "pairs": [
     {
      "left": "ich werde",
      "right": "yo voy a"
     },
     {
      "left": "du wirst",
      "right": "vos vas a"
     },
     {
      "left": "er wird",
      "right": "él va a"
     },
     {
      "left": "wir werden",
      "right": "vamos a"
     }
    ],
    "answer": "ich werde = yo voy a · du wirst = vos vas a · er wird = él va a · wir werden = vamos a",
    "explain": "ich werde = yo voy a · du wirst = vos vas a · er wird = él va a · wir werden = vamos a",
    "nivel": 20
   }
  ]
 },
 {
  "id": "u49",
  "title": "¿Dónde está? auf, unter, neben, vor, hinter",
  "nivel": 20,
  "bloques": [
   {
    "p": "Para decir **dónde está** algo respecto de otra cosa usás estas palabritas, seguidas del artículo en **dativo** (**dem** para «der» y «das», **der** para «die», **den** para plurales):"
   },
   {
    "tabla": [
     [
      "auf",
      "sobre",
      "auf dem Tisch"
     ],
     [
      "unter",
      "debajo de",
      "unter dem Tisch"
     ],
     [
      "neben",
      "al lado de",
      "neben dem Sofa"
     ],
     [
      "vor",
      "delante de",
      "vor dem Haus"
     ],
     [
      "hinter",
      "detrás de",
      "hinter dem Haus"
     ],
     [
      "in",
      "en / dentro de",
      "im Zimmer (in dem)"
     ],
     [
      "an",
      "contra / junto a",
      "an der Wand"
     ],
     [
      "zwischen",
      "entre",
      "zwischen den Stühlen"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Das Buch liegt auf dem Tisch.",
      "El libro está sobre la mesa."
     ],
     [
      "Die Katze sitzt unter dem Tisch.",
      "La gata está debajo de la mesa."
     ],
     [
      "Das Auto steht vor dem Haus.",
      "El auto está delante de la casa."
     ]
    ]
   },
   {
    "nota": "Para decir **dónde está** algo se usan **stehen** (de pie), **sitzen** (sentado) y **liegen** (acostado): los libros «liegen», los autos «stehen». Y **in + dem = im**, **an + dem = am**."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Das Buch liegt ___ dem Tisch. (sobre)",
    "options": [
     "auf",
     "unter",
     "neben"
    ],
    "answer": "auf",
    "explain": "«auf» = sobre.",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "Die Katze sitzt ___ dem Tisch. (debajo)",
    "options": [
     "unter",
     "auf",
     "vor"
    ],
    "answer": "unter",
    "explain": "«unter» = debajo de.",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Das Auto steht ___ dem Haus. (delante)",
    "answer": "vor",
    "accept": [
     "vor"
    ],
    "explain": "«vor» = delante de.",
    "nivel": 20
   },
   {
    "type": "fill",
    "prompt": "Die Lampe steht ___ dem Sofa. (al lado)",
    "answer": "neben",
    "accept": [
     "neben"
    ],
    "explain": "«neben» = al lado de.",
    "nivel": 20
   },
   {
    "type": "match",
    "prompt": "Unir cada preposición con su significado.",
    "pairs": [
     {
      "left": "auf",
      "right": "sobre"
     },
     {
      "left": "unter",
      "right": "debajo de"
     },
     {
      "left": "neben",
      "right": "al lado de"
     },
     {
      "left": "hinter",
      "right": "detrás de"
     }
    ],
    "answer": "auf = sobre · unter = debajo de · neben = al lado de · hinter = detrás de",
    "explain": "auf = sobre · unter = debajo de · neben = al lado de · hinter = detrás de",
    "nivel": 20
   },
   {
    "type": "choice",
    "prompt": "Der Hund liegt ___ Bett. (en el)",
    "options": [
     "im",
     "in",
     "ins"
    ],
    "answer": "im",
    "explain": "«in dem» = «im».",
    "nivel": 20
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Der»): «El perro está debajo de la mesa».",
    "answer": "Der Hund liegt unter dem Tisch.",
    "words": [
     "Der",
     "Tisch.",
     "Hund",
     "liegt",
     "dem",
     "unter"
    ],
    "explain": "«Der Hund liegt unter dem Tisch.»",
    "nivel": 20
   }
  ]
 },
 {
  "id": "u50",
  "title": "Hay: es gibt, y man",
  "nivel": 14,
  "bloques": [
   {
    "p": "Para decir que **hay** algo se usa **es gibt** (literalmente «ello da»), seguido de lo que hay en **acusativo**:"
   },
   {
    "tabla": [
     [
      "Es gibt einen Park.",
      "Hay un parque."
     ],
     [
      "Es gibt eine Bank.",
      "Hay un banco."
     ],
     [
      "Es gibt ein Café.",
      "Hay un café."
     ],
     [
      "Gibt es hier ein Café?",
      "¿Hay un café por acá?"
     ]
    ]
   },
   {
    "p": "Y **man** es el «se / uno» impersonal del español: se usa para hablar de lo que se hace en general:"
   },
   {
    "ejemplos": [
     [
      "Man spricht hier Deutsch.",
      "Acá se habla alemán."
     ],
     [
      "Wie sagt man das auf Deutsch?",
      "¿Cómo se dice eso en alemán?"
     ],
     [
      "Hier darf man nicht rauchen.",
      "Acá no se puede fumar."
     ]
    ]
   },
   {
    "nota": "Con **es gibt** el artículo masculino cambia (**ein → einen**), porque lo que hay es el «objeto» de la frase. Los otros géneros quedan iguales. Y **man** siempre lleva el verbo como si fuera «er» («man spricht»)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "«Es gibt einen Park» significa…",
    "options": [
     "Hay un parque.",
     "Él da un parque.",
     "Es un parque."
    ],
    "answer": "Hay un parque.",
    "explain": "«es gibt» = hay.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "Preguntás si hay un café cerca:",
    "options": [
     "Gibt es hier ein Café?",
     "Ist es hier ein Café?",
     "Gibt hier Café?"
    ],
    "answer": "Gibt es hier ein Café?",
    "explain": "«Gibt es …?» = ¿Hay …?",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Wie sagt man das?» significa…",
    "options": [
     "¿Cómo se dice eso?",
     "¿Quién dice eso?",
     "¿Cuándo lo digo?"
    ],
    "answer": "¿Cómo se dice eso?",
    "explain": "«man» = se.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "___ es hier ein Café? (hay)",
    "answer": "Gibt",
    "accept": [
     "Gibt"
    ],
    "explain": "«Gibt es …?» = ¿Hay …?",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Man»): «Acá se habla alemán».",
    "answer": "Man spricht hier Deutsch.",
    "words": [
     "spricht",
     "hier",
     "Deutsch.",
     "Man"
    ],
    "explain": "«Man spricht hier Deutsch.»",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada expresión con su significado.",
    "pairs": [
     {
      "left": "es gibt",
      "right": "hay"
     },
     {
      "left": "man",
      "right": "se / uno"
     },
     {
      "left": "Gibt es …?",
      "right": "¿Hay …?"
     },
     {
      "left": "Wie sagt man …?",
      "right": "¿Cómo se dice …?"
     }
    ],
    "answer": "es gibt = hay · man = se / uno · Gibt es …? = ¿Hay …? · Wie sagt man …? = ¿Cómo se dice …?",
    "explain": "es gibt = hay · man = se / uno · Gibt es …? = ¿Hay …? · Wie sagt man …? = ¿Cómo se dice …?",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "Después de «es gibt», la cosa que hay va en…",
    "options": [
     "acusativo (einen Park)",
     "dativo",
     "nominativo"
    ],
    "answer": "acusativo (einen Park)",
    "explain": "Es gibt + acusativo.",
    "nivel": 14
   }
  ]
 },
 {
  "id": "u51",
  "title": "Pedir con cortesía: ich hätte gern, könnten Sie",
  "nivel": 18,
  "bloques": [
   {
    "p": "Para pedir algo con **buena educación** (en un negocio, con alguien que no conocés) se usan formas especiales. No hace falta entender la gramática: aprendelas como frases hechas."
   },
   {
    "tabla": [
     [
      "Ich hätte gern …",
      "Quisiera …",
      "Ich hätte gern einen Kaffee."
     ],
     [
      "Könnten Sie …?",
      "¿Podría …?",
      "Könnten Sie mir helfen?"
     ],
     [
      "Würden Sie bitte …?",
      "¿Sería tan amable de …?",
      "Würden Sie bitte warten?"
     ],
     [
      "Entschuldigen Sie, …",
      "Disculpe, …",
      "Entschuldigen Sie, wo ist der Bahnhof?"
     ]
    ]
   },
   {
    "nota": "**hätte, könnten, würden** son las versiones corteses (condicional) de **haben, können, werden**. Comparalas: «Ich habe einen Kaffee» (tengo un café) contra «Ich **hätte** gern einen Kaffee» (quisiera un café). Con ellas nadie te va a escuchar mal."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "En una panadería pedís cortésmente:",
    "options": [
     "Ich hätte gern ein Brötchen.",
     "Gib mir ein Brötchen!",
     "Ich habe ein Brötchen."
    ],
    "answer": "Ich hätte gern ein Brötchen.",
    "explain": "«Ich hätte gern …» = Quisiera …",
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "«Könnten Sie mir helfen?» significa…",
    "options": [
     "¿Podría ayudarme?",
     "¿Puede ir?",
     "¿Quiere comer?"
    ],
    "answer": "¿Podría ayudarme?",
    "explain": "«helfen» = ayudar.",
    "nivel": 18
   },
   {
    "type": "fill",
    "prompt": "Ich ___ gern einen Kaffee. (quisiera)",
    "answer": "hätte",
    "accept": [
     "hätte",
     "haette"
    ],
    "explain": "«hätte» = quisiera (cortés).",
    "estricto": true,
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "«Entschuldigen Sie» sirve para…",
    "options": [
     "llamar la atención con cortesía",
     "despedirse",
     "agradecer"
    ],
    "answer": "llamar la atención con cortesía",
    "explain": "«Entschuldigen Sie» = Disculpe.",
    "nivel": 18
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Ich hätte gern …",
      "right": "Quisiera …"
     },
     {
      "left": "Könnten Sie …?",
      "right": "¿Podría …?"
     },
     {
      "left": "Würden Sie …?",
      "right": "¿Sería tan amable de …?"
     },
     {
      "left": "Entschuldigen Sie",
      "right": "Disculpe"
     }
    ],
    "answer": "Ich hätte gern … = Quisiera … · Könnten Sie …? = ¿Podría …? · Würden Sie …? = ¿Sería tan amable de …? · Entschuldigen Sie = Disculpe",
    "explain": "Ich hätte gern … = Quisiera … · Könnten Sie …? = ¿Podría …? · Würden Sie …? = ¿Sería tan amable de …? · Entschuldigen Sie = Disculpe",
    "nivel": 18
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Könnten»): «¿Podría ayudarme?»",
    "answer": "Könnten Sie mir helfen?",
    "words": [
     "Könnten",
     "Sie",
     "helfen?",
     "mir"
    ],
    "explain": "«Könnten Sie mir helfen?»",
    "nivel": 18
   },
   {
    "type": "choice",
    "prompt": "¿Qué suena más cortés?",
    "options": [
     "Könnten Sie das wiederholen?",
     "Wiederhol das!",
     "Du wiederholst das."
    ],
    "answer": "Könnten Sie das wiederholen?",
    "explain": "«Könnten Sie …?» es lo más cortés.",
    "nivel": 18
   }
  ]
 },
 {
  "id": "u52",
  "title": "De quién es: Annas Buch",
  "nivel": 12,
  "bloques": [
   {
    "p": "Para decir que algo **es de alguien** agregás una **-s** al nombre, sin apóstrofo, y la cosa va después:"
   },
   {
    "tabla": [
     [
      "Annas Buch",
      "el libro de Anna"
     ],
     [
      "Toms Auto",
      "el auto de Tom"
     ],
     [
      "Lisas Katze",
      "la gata de Lisa"
     ],
     [
      "Thomas' Auto",
      "el auto de Thomas (si termina en -s, solo apóstrofo)"
     ]
    ]
   },
   {
    "ejemplos": [
     [
      "Das ist Annas Buch.",
      "Este es el libro de Anna."
     ],
     [
      "Tims Schwester heißt Lisa.",
      "La hermana de Tim se llama Lisa."
     ]
    ]
   },
   {
    "nota": "Para las cosas y las personas que no son nombres propios se usa **von** + dativo: «das Auto **von** meinem Vater» (el auto de mi papá), «das Haus **von** Max» (la casa de Max). En alemán **no se usa el apóstrofo**: «Annas», nunca «Anna's»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "«Annas Hund» significa…",
    "options": [
     "el perro de Anna",
     "Anna es un perro",
     "Anna tiene perro"
    ],
    "answer": "el perro de Anna",
    "explain": "Nombre + s = «de».",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Das ist ___ Buch. (de Tom)",
    "answer": "Toms",
    "accept": [
     "Toms"
    ],
    "explain": "Tom + s = Toms.",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "¿Cuál es correcta?",
    "options": [
     "Das ist Lisas Tasche.",
     "Das ist Lisa Tasche.",
     "Das ist Lisa's Tasche."
    ],
    "answer": "Das ist Lisas Tasche.",
    "explain": "Sin apóstrofo: «Lisas».",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "Con nombres que terminan en -s se pone…",
    "options": [
     "solo un apóstrofo: Thomas' Auto",
     "-ss",
     "nada"
    ],
    "answer": "solo un apóstrofo: Thomas' Auto",
    "explain": "Thomas' Auto: el apóstrofo reemplaza la -s.",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Das ist das Auto ___ meinem Vater. (de)",
    "answer": "von",
    "accept": [
     "von"
    ],
    "explain": "«von» + dativo = de.",
    "nivel": 12
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Das»): «Este es el libro de Anna».",
    "answer": "Das ist Annas Buch.",
    "words": [
     "Buch.",
     "Das",
     "ist",
     "Annas"
    ],
    "explain": "«Das ist Annas Buch.»",
    "nivel": 12
   },
   {
    "type": "match",
    "prompt": "Unir cada expresión con su significado.",
    "pairs": [
     {
      "left": "Annas Buch",
      "right": "el libro de Anna"
     },
     {
      "left": "Toms Auto",
      "right": "el auto de Tom"
     },
     {
      "left": "Lisas Katze",
      "right": "la gata de Lisa"
     },
     {
      "left": "das Haus von Max",
      "right": "la casa de Max"
     }
    ],
    "answer": "Annas Buch = el libro de Anna · Toms Auto = el auto de Tom · Lisas Katze = la gata de Lisa · das Haus von Max = la casa de Max",
    "explain": "Annas Buch = el libro de Anna · Toms Auto = el auto de Tom · Lisas Katze = la gata de Lisa · das Haus von Max = la casa de Max",
    "nivel": 12
   }
  ]
 },
 {
  "id": "s01",
  "title": "En la panadería",
  "nivel": 10,
  "bloques": [
   {
    "p": "Ahora a practicar situaciones reales. Este es un diálogo típico en la **Bäckerei** (panadería). Leelo en voz alta:"
   },
   {
    "ejemplos": [
     [
      "Guten Morgen! Was darf es sein?",
      "¡Buen día! ¿Qué le sirvo?"
     ],
     [
      "Ich hätte gern zwei Brötchen, bitte.",
      "Quisiera dos pancitos, por favor."
     ],
     [
      "Sonst noch etwas?",
      "¿Algo más?"
     ],
     [
      "Nein, danke. Das ist alles.",
      "No, gracias. Eso es todo."
     ],
     [
      "Das macht zwei Euro.",
      "Son dos euros."
     ],
     [
      "Bitte schön. – Danke. Auf Wiedersehen!",
      "Aquí tiene. – Gracias. ¡Hasta luego!"
     ]
    ]
   },
   {
    "nota": "«Was darf es sein?» es lo que te pregunta quien atiende. «Das macht … Euro» significa «son … euros». Y «Das ist alles» (eso es todo) cierra la compra. «Bitte schön» se dice cuando te entregan algo."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Quien atiende te dice «Was darf es sein?». Te pregunta…",
    "options": [
     "¿Qué le sirvo?",
     "¿Cuánto es?",
     "¿Cómo se llama?"
    ],
    "answer": "¿Qué le sirvo?",
    "explain": "«Was darf es sein?» = ¿Qué le sirvo?",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "Querés dos pancitos. ¿Qué decís?",
    "options": [
     "Ich hätte gern zwei Brötchen, bitte.",
     "Ich bin zwei Brötchen.",
     "Wo sind zwei Brötchen?"
    ],
    "answer": "Ich hätte gern zwei Brötchen, bitte.",
    "explain": "«Ich hätte gern …» = Quisiera …",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "«Sonst noch etwas?» significa…",
    "options": [
     "¿Algo más?",
     "¿Algo menos?",
     "¿Quién es?"
    ],
    "answer": "¿Algo más?",
    "explain": "«sonst noch etwas» = ¿algo más?",
    "nivel": 10
   },
   {
    "type": "fill",
    "prompt": "Das ist ___. (eso es todo)",
    "answer": "alles",
    "accept": [
     "alles"
    ],
    "explain": "«Das ist alles.»",
    "nivel": 10
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Was darf es sein?",
      "right": "¿Qué le sirvo?"
     },
     {
      "left": "Sonst noch etwas?",
      "right": "¿Algo más?"
     },
     {
      "left": "Das macht zwei Euro.",
      "right": "Son dos euros."
     },
     {
      "left": "Bitte schön.",
      "right": "Aquí tiene."
     }
    ],
    "answer": "Was darf es sein? = ¿Qué le sirvo? · Sonst noch etwas? = ¿Algo más? · Das macht zwei Euro. = Son dos euros. · Bitte schön. = Aquí tiene.",
    "explain": "Was darf es sein? = ¿Qué le sirvo? · Sonst noch etwas? = ¿Algo más? · Das macht zwei Euro. = Son dos euros. · Bitte schön. = Aquí tiene.",
    "nivel": 10
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Das»): «Son dos euros».",
    "answer": "Das macht zwei Euro.",
    "words": [
     "macht",
     "Das",
     "zwei",
     "Euro."
    ],
    "explain": "«Das macht zwei Euro.»",
    "nivel": 10
   },
   {
    "type": "choice",
    "prompt": "Terminaste de comprar. ¿Qué decís?",
    "options": [
     "Nein, danke. Das ist alles.",
     "Ja, bitte. Das ist alles.",
     "Nein, ich bin alles."
    ],
    "answer": "Nein, danke. Das ist alles.",
    "explain": "«Nein, danke. Das ist alles.»",
    "nivel": 10
   }
  ]
 },
 {
  "id": "s02",
  "title": "En el restaurante",
  "nivel": 12,
  "bloques": [
   {
    "p": "Un almuerzo en un **Restaurant**. Estas frases te van a servir en cualquier mesa de Alemania, Austria o Suiza:"
   },
   {
    "ejemplos": [
     [
      "Einen Tisch für zwei Personen, bitte.",
      "Una mesa para dos personas, por favor."
     ],
     [
      "Die Speisekarte, bitte.",
      "La carta, por favor."
     ],
     [
      "Was möchten Sie trinken?",
      "¿Qué desea tomar?"
     ],
     [
      "Ich nehme ein Wasser und ein Schnitzel.",
      "Voy a pedir un agua y una milanesa."
     ],
     [
      "Guten Appetit!",
      "¡Buen provecho!"
     ],
     [
      "Die Rechnung, bitte. – Zusammen oder getrennt?",
      "La cuenta, por favor. – ¿Juntos o por separado?"
     ],
     [
      "Stimmt so.",
      "Quédese con el vuelto."
     ]
    ]
   },
   {
    "nota": "En los países de habla alemana **se paga en la mesa**, no en la caja: llamás al mozo y decís «Die Rechnung, bitte». El mozo suele preguntar «Zusammen oder getrennt?» (¿juntos o por separado?). La propina (**das Trinkgeld**) se deja redondeando la cuenta: «Stimmt so»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Pedís la cuenta:",
    "options": [
     "Die Rechnung, bitte.",
     "Die Speisekarte, bitte.",
     "Guten Appetit!"
    ],
    "answer": "Die Rechnung, bitte.",
    "explain": "«Rechnung» = cuenta.",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "«Guten Appetit!» se dice…",
    "options": [
     "antes de comer",
     "al pagar",
     "al llegar"
    ],
    "answer": "antes de comer",
    "explain": "«Guten Appetit!» = ¡buen provecho!",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "«Zusammen oder getrennt?» significa…",
    "options": [
     "¿Juntos o por separado?",
     "¿Dónde o cuándo?",
     "¿Té o café?"
    ],
    "answer": "¿Juntos o por separado?",
    "explain": "Se pregunta al pagar.",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Die ___, bitte. (la carta)",
    "answer": "Speisekarte",
    "accept": [
     "Speisekarte"
    ],
    "explain": "«Speisekarte» = carta (menú).",
    "nivel": 12
   },
   {
    "type": "fill",
    "prompt": "Ich ___ ein Wasser. (nehmen)",
    "answer": "nehme",
    "accept": [
     "nehme"
    ],
    "explain": "Con «ich»: «nehme».",
    "nivel": 12
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Die Rechnung",
      "right": "la cuenta"
     },
     {
      "left": "Die Speisekarte",
      "right": "la carta"
     },
     {
      "left": "Stimmt so.",
      "right": "Quédese con el vuelto."
     },
     {
      "left": "Guten Appetit!",
      "right": "¡Buen provecho!"
     }
    ],
    "answer": "Die Rechnung = la cuenta · Die Speisekarte = la carta · Stimmt so. = Quédese con el vuelto. · Guten Appetit! = ¡Buen provecho!",
    "explain": "Die Rechnung = la cuenta · Die Speisekarte = la carta · Stimmt so. = Quédese con el vuelto. · Guten Appetit! = ¡Buen provecho!",
    "nivel": 12
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Voy a pedir una milanesa».",
    "answer": "Ich nehme ein Schnitzel.",
    "words": [
     "nehme",
     "Schnitzel.",
     "ein",
     "Ich"
    ],
    "explain": "«Ich nehme ein Schnitzel.»",
    "nivel": 12
   },
   {
    "type": "choice",
    "prompt": "Querés una mesa para dos:",
    "options": [
     "Einen Tisch für zwei Personen, bitte.",
     "Ein Tisch zwei bitte.",
     "Ich bin zwei Personen."
    ],
    "answer": "Einen Tisch für zwei Personen, bitte.",
    "explain": "«für zwei Personen» = para dos personas.",
    "nivel": 12
   }
  ]
 },
 {
  "id": "s03",
  "title": "En la estación de tren",
  "nivel": 14,
  "bloques": [
   {
    "p": "Tomar el tren es una de las mejores formas de recorrer Alemania. Estas frases te sacan de apuros en el **Bahnhof**:"
   },
   {
    "ejemplos": [
     [
      "Eine Fahrkarte nach Berlin, bitte.",
      "Un pasaje a Berlín, por favor."
     ],
     [
      "Einfach oder hin und zurück?",
      "¿Ida o ida y vuelta?"
     ],
     [
      "Hin und zurück, bitte.",
      "Ida y vuelta, por favor."
     ],
     [
      "Von welchem Gleis fährt der Zug?",
      "¿De qué andén sale el tren?"
     ],
     [
      "Der Zug fährt von Gleis fünf.",
      "El tren sale del andén cinco."
     ],
     [
      "Wann kommt der Zug an?",
      "¿Cuándo llega el tren?"
     ],
     [
      "Der Zug hat Verspätung.",
      "El tren tiene retraso."
     ]
    ]
   },
   {
    "nota": "«**Verspätung**» significa retraso y la vas a ver en los carteles de las estaciones. Y mirá el verbo: «Wann **kommt** der Zug **an**?» es el separable **ankommen**: la partícula «an» se va al final."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Pedís un pasaje de ida y vuelta:",
    "options": [
     "Hin und zurück, bitte.",
     "Einfach, bitte.",
     "Zug, bitte."
    ],
    "answer": "Hin und zurück, bitte.",
    "explain": "«hin und zurück» = ida y vuelta.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Gleis» significa…",
    "options": [
     "andén",
     "tren",
     "boleto"
    ],
    "answer": "andén",
    "explain": "«Gleis» = andén (o vía).",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Der Zug hat Verspätung» significa…",
    "options": [
     "El tren tiene retraso.",
     "El tren llegó.",
     "El tren es nuevo."
    ],
    "answer": "El tren tiene retraso.",
    "explain": "«Verspätung» = retraso.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Eine ___ nach Berlin, bitte. (un pasaje)",
    "answer": "Fahrkarte",
    "accept": [
     "Fahrkarte"
    ],
    "explain": "«Fahrkarte» = pasaje.",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "einfach",
      "right": "ida (solo)"
     },
     {
      "left": "hin und zurück",
      "right": "ida y vuelta"
     },
     {
      "left": "das Gleis",
      "right": "el andén"
     },
     {
      "left": "die Verspätung",
      "right": "el retraso"
     }
    ],
    "answer": "einfach = ida (solo) · hin und zurück = ida y vuelta · das Gleis = el andén · die Verspätung = el retraso",
    "explain": "einfach = ida (solo) · hin und zurück = ida y vuelta · das Gleis = el andén · die Verspätung = el retraso",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Wann»): «¿Cuándo llega el tren?»",
    "answer": "Wann kommt der Zug an?",
    "words": [
     "Zug",
     "kommt",
     "an?",
     "der",
     "Wann"
    ],
    "explain": "El separable «an» va al final.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "¿Cómo preguntás de qué andén sale el tren?",
    "options": [
     "Von welchem Gleis fährt der Zug?",
     "Wie heißt der Zug?",
     "Wer fährt den Zug?"
    ],
    "answer": "Von welchem Gleis fährt der Zug?",
    "explain": "«Von welchem Gleis …?» = ¿De qué andén …?",
    "nivel": 14
   }
  ]
 },
 {
  "id": "s04",
  "title": "En el hotel",
  "nivel": 14,
  "bloques": [
   {
    "p": "Llegaste a un **Hotel** de Viena, Berlín o Zúrich. Así es el diálogo típico en la recepción:"
   },
   {
    "ejemplos": [
     [
      "Guten Tag! Ich habe ein Zimmer reserviert.",
      "¡Buenas tardes! Tengo una habitación reservada."
     ],
     [
      "Wie ist Ihr Name, bitte?",
      "¿Cuál es su nombre, por favor?"
     ],
     [
      "Auf den Namen Lopez.",
      "A nombre de López."
     ],
     [
      "Für wie viele Nächte?",
      "¿Por cuántas noches?"
     ],
     [
      "Für drei Nächte.",
      "Por tres noches."
     ],
     [
      "Wo ist das Frühstück?",
      "¿Dónde está el desayuno?"
     ],
     [
      "Das Frühstück ist von sieben bis zehn Uhr.",
      "El desayuno es de siete a diez."
     ],
     [
      "Hier ist Ihr Schlüssel.",
      "Acá tiene su llave."
     ]
    ]
   },
   {
    "nota": "Si no tenés reserva, preguntás: **«Haben Sie ein Zimmer frei?»** (¿Tiene una habitación libre?). Y recordá que «von … bis …» significa «de … a …»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Llegás al hotel con reserva. Decís…",
    "options": [
     "Ich habe ein Zimmer reserviert.",
     "Ich bin ein Zimmer.",
     "Ich reserviere dich."
    ],
    "answer": "Ich habe ein Zimmer reserviert.",
    "explain": "«reserviert» = reservada.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Für wie viele Nächte?» pregunta…",
    "options": [
     "¿Por cuántas noches?",
     "¿Cuánto cuesta?",
     "¿Cómo se llama?"
    ],
    "answer": "¿Por cuántas noches?",
    "explain": "«Nächte» = noches.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Hier ist Ihr ___. (la llave)",
    "answer": "Schlüssel",
    "accept": [
     "Schlüssel",
     "Schluessel"
    ],
    "explain": "«Schlüssel» = llave.",
    "estricto": true,
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "¿Cómo preguntás si hay una habitación libre?",
    "options": [
     "Haben Sie ein Zimmer frei?",
     "Wo ist das Zimmer frei?",
     "Ist das Zimmer Sie?"
    ],
    "answer": "Haben Sie ein Zimmer frei?",
    "explain": "«frei» = libre.",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "das Zimmer",
      "right": "la habitación"
     },
     {
      "left": "die Nacht",
      "right": "la noche"
     },
     {
      "left": "der Schlüssel",
      "right": "la llave"
     },
     {
      "left": "das Frühstück",
      "right": "el desayuno"
     }
    ],
    "answer": "das Zimmer = la habitación · die Nacht = la noche · der Schlüssel = la llave · das Frühstück = el desayuno",
    "explain": "das Zimmer = la habitación · die Nacht = la noche · der Schlüssel = la llave · das Frühstück = el desayuno",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Wo»): «¿Dónde está el desayuno?»",
    "answer": "Wo ist das Frühstück?",
    "words": [
     "Frühstück?",
     "ist",
     "das",
     "Wo"
    ],
    "explain": "«Wo ist das Frühstück?»",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«von sieben bis zehn Uhr» significa…",
    "options": [
     "de siete a diez",
     "a las diecisiete",
     "hace diez horas"
    ],
    "answer": "de siete a diez",
    "explain": "«von … bis …» = de … a …",
    "nivel": 14
   }
  ]
 },
 {
  "id": "s05",
  "title": "En la farmacia y con el médico",
  "nivel": 14,
  "bloques": [
   {
    "p": "Si te sentís mal de viaje, estas frases te ayudan en la **Apotheke** (farmacia) o con el **Arzt** (médico):"
   },
   {
    "ejemplos": [
     [
      "Was fehlt Ihnen?",
      "¿Qué le pasa?"
     ],
     [
      "Ich habe Kopfschmerzen.",
      "Tengo dolor de cabeza."
     ],
     [
      "Ich habe Fieber.",
      "Tengo fiebre."
     ],
     [
      "Seit gestern.",
      "Desde ayer."
     ],
     [
      "Haben Sie Tabletten gegen Schmerzen?",
      "¿Tiene pastillas para el dolor?"
     ],
     [
      "Nehmen Sie zwei Tabletten pro Tag.",
      "Tome dos pastillas por día."
     ],
     [
      "Gute Besserung!",
      "¡Que te mejores!"
     ]
    ]
   },
   {
    "nota": "**«Gute Besserung!»** es lo que se le dice a alguien enfermo, igual que «¡Que te mejores!». Y **«seit»** significa «desde» (hace cuánto): «seit gestern» (desde ayer), «seit drei Tagen» (hace tres días)."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "«Gute Besserung!» se le dice a alguien que…",
    "options": [
     "está enfermo",
     "cumple años",
     "se va de viaje"
    ],
    "answer": "está enfermo",
    "explain": "«Gute Besserung» = ¡que te mejores!",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Was fehlt Ihnen?» pregunta…",
    "options": [
     "¿Qué le pasa?",
     "¿Cómo se llama?",
     "¿Dónde vive?"
    ],
    "answer": "¿Qué le pasa?",
    "explain": "Es lo que pregunta el médico.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Ich habe ___. (fiebre)",
    "answer": "Fieber",
    "accept": [
     "Fieber"
    ],
    "explain": "«Fieber» = fiebre.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Seit gestern» significa…",
    "options": [
     "desde ayer",
     "hasta mañana",
     "durante hoy"
    ],
    "answer": "desde ayer",
    "explain": "«seit» = desde.",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada palabra con su significado.",
    "pairs": [
     {
      "left": "Kopfschmerzen",
      "right": "dolor de cabeza"
     },
     {
      "left": "Fieber",
      "right": "fiebre"
     },
     {
      "left": "Tabletten",
      "right": "pastillas"
     },
     {
      "left": "Gute Besserung!",
      "right": "¡Que te mejores!"
     }
    ],
    "answer": "Kopfschmerzen = dolor de cabeza · Fieber = fiebre · Tabletten = pastillas · Gute Besserung! = ¡Que te mejores!",
    "explain": "Kopfschmerzen = dolor de cabeza · Fieber = fiebre · Tabletten = pastillas · Gute Besserung! = ¡Que te mejores!",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Ich»): «Tengo fiebre desde ayer».",
    "answer": "Ich habe seit gestern Fieber.",
    "words": [
     "seit",
     "Fieber.",
     "habe",
     "gestern",
     "Ich"
    ],
    "explain": "«Ich habe seit gestern Fieber.»",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "En la farmacia pedís algo para el dolor:",
    "options": [
     "Haben Sie Tabletten gegen Schmerzen?",
     "Haben Sie Tabletten für mich Name?",
     "Ich bin Tabletten."
    ],
    "answer": "Haben Sie Tabletten gegen Schmerzen?",
    "explain": "«gegen» = contra / para.",
    "nivel": 14
   }
  ]
 },
 {
  "id": "s06",
  "title": "Invitar a alguien",
  "nivel": 14,
  "bloques": [
   {
    "p": "Hacer planes con amigos es parte de aprender un idioma. Así invitás, aceptás y rechazás con buena onda:"
   },
   {
    "ejemplos": [
     [
      "Hast du Lust, ins Kino zu gehen?",
      "¿Tenés ganas de ir al cine?"
     ],
     [
      "Ja, gern! Das ist eine gute Idee!",
      "¡Sí, con gusto! ¡Es una buena idea!"
     ],
     [
      "Leider habe ich keine Zeit.",
      "Lamentablemente no tengo tiempo."
     ],
     [
      "Wann treffen wir uns?",
      "¿Cuándo nos encontramos?"
     ],
     [
      "Um sieben Uhr vor dem Kino.",
      "A las siete delante del cine."
     ],
     [
      "Kommst du mit?",
      "¿Venís con nosotros?"
     ],
     [
      "Bis dann!",
      "¡Hasta luego!"
     ]
    ]
   },
   {
    "nota": "«**Hast du Lust, … zu …?**» (¿Tenés ganas de …?) es una fórmula: la palabra «zu» va justo antes del verbo en infinitivo («ins Kino **zu gehen**»). Y para decir que no, «**leider**» (lamentablemente) suaviza la respuesta."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Invitás a alguien al cine:",
    "options": [
     "Hast du Lust, ins Kino zu gehen?",
     "Hast du Kino?",
     "Gehst du Lust?"
    ],
    "answer": "Hast du Lust, ins Kino zu gehen?",
    "explain": "«Hast du Lust …?» = ¿Tenés ganas de …?",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "Aceptás con gusto:",
    "options": [
     "Ja, gern!",
     "Leider nein.",
     "Bis dann!"
    ],
    "answer": "Ja, gern!",
    "explain": "«gern» = con gusto.",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Leider habe ich keine Zeit» significa…",
    "options": [
     "Lamentablemente no tengo tiempo.",
     "Tengo mucho tiempo.",
     "No tengo dinero."
    ],
    "answer": "Lamentablemente no tengo tiempo.",
    "explain": "«leider» = lamentablemente.",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Wann ___ wir uns? (treffen)",
    "answer": "treffen",
    "accept": [
     "treffen"
    ],
    "explain": "Con «wir»: «treffen».",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Hast du Lust?",
      "right": "¿Tenés ganas?"
     },
     {
      "left": "Ja, gern!",
      "right": "¡Sí, con gusto!"
     },
     {
      "left": "Leider nicht.",
      "right": "Lamentablemente no."
     },
     {
      "left": "Bis dann!",
      "right": "¡Hasta luego!"
     }
    ],
    "answer": "Hast du Lust? = ¿Tenés ganas? · Ja, gern! = ¡Sí, con gusto! · Leider nicht. = Lamentablemente no. · Bis dann! = ¡Hasta luego!",
    "explain": "Hast du Lust? = ¿Tenés ganas? · Ja, gern! = ¡Sí, con gusto! · Leider nicht. = Lamentablemente no. · Bis dann! = ¡Hasta luego!",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Wann»): «¿Cuándo nos encontramos?»",
    "answer": "Wann treffen wir uns?",
    "words": [
     "uns?",
     "treffen",
     "wir",
     "Wann"
    ],
    "explain": "«Wann treffen wir uns?»",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Das ist eine gute Idee» significa…",
    "options": [
     "Es una buena idea.",
     "Es una mala idea.",
     "No tengo ideas."
    ],
    "answer": "Es una buena idea.",
    "explain": "«Idee» = idea.",
    "nivel": 14
   }
  ]
 },
 {
  "id": "s07",
  "title": "Mi día",
  "nivel": 14,
  "bloques": [
   {
    "p": "Contar tu día es de lo primero que se practica en un idioma. Con **dann** (después, entonces) vas encadenando los pasos:"
   },
   {
    "ejemplos": [
     [
      "Ich stehe um sieben Uhr auf.",
      "Me levanto a las siete."
     ],
     [
      "Dann frühstücke ich.",
      "Después desayuno."
     ],
     [
      "Um acht gehe ich zur Arbeit.",
      "A las ocho voy al trabajo."
     ],
     [
      "Am Mittag esse ich Suppe.",
      "Al mediodía como sopa."
     ],
     [
      "Am Abend lese ich ein Buch.",
      "A la noche leo un libro."
     ],
     [
      "Um elf gehe ich ins Bett.",
      "A las once me voy a dormir."
     ]
    ]
   },
   {
    "nota": "Después de **dann** (o de «um acht», «am Abend») el verbo sigue en **segunda posición**: «Dann **frühstücke** ich». El sujeto pasa después del verbo. Y «**ins Bett gehen**» es «irse a la cama»."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "«Dann» significa…",
    "options": [
     "después / entonces",
     "nunca",
     "antes"
    ],
    "answer": "después / entonces",
    "explain": "«dann» = después.",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Dann»): «Después desayuno».",
    "answer": "Dann frühstücke ich.",
    "words": [
     "ich.",
     "frühstücke",
     "Dann"
    ],
    "explain": "«Dann frühstücke ich.»",
    "nivel": 14
   },
   {
    "type": "fill",
    "prompt": "Ich ___ um sieben Uhr auf. (aufstehen)",
    "answer": "stehe",
    "accept": [
     "stehe"
    ],
    "explain": "Con «ich»: «stehe … auf».",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "«Um acht gehe ich zur Arbeit»: ¿cuándo?",
    "options": [
     "a las ocho",
     "a los ocho",
     "el ocho"
    ],
    "answer": "a las ocho",
    "explain": "«um acht» = a las ocho.",
    "nivel": 14
   },
   {
    "type": "match",
    "prompt": "Unir cada expresión con su significado.",
    "pairs": [
     {
      "left": "aufstehen",
      "right": "levantarse"
     },
     {
      "left": "frühstücken",
      "right": "desayunar"
     },
     {
      "left": "zur Arbeit gehen",
      "right": "ir al trabajo"
     },
     {
      "left": "ins Bett gehen",
      "right": "irse a dormir"
     }
    ],
    "answer": "aufstehen = levantarse · frühstücken = desayunar · zur Arbeit gehen = ir al trabajo · ins Bett gehen = irse a dormir",
    "explain": "aufstehen = levantarse · frühstücken = desayunar · zur Arbeit gehen = ir al trabajo · ins Bett gehen = irse a dormir",
    "nivel": 14
   },
   {
    "type": "choice",
    "prompt": "¿Cuál es correcta?",
    "options": [
     "Dann esse ich Suppe.",
     "Dann ich esse Suppe.",
     "Dann Suppe esse ich."
    ],
    "answer": "Dann esse ich Suppe.",
    "explain": "El verbo va en segunda posición.",
    "nivel": 14
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Am»): «A la noche leo un libro».",
    "answer": "Am Abend lese ich ein Buch.",
    "words": [
     "ich",
     "Am",
     "Buch.",
     "lese",
     "Abend",
     "ein"
    ],
    "explain": "«Am Abend lese ich ein Buch.»",
    "nivel": 14
   }
  ]
 },
 {
  "id": "s08",
  "title": "Hablar por teléfono",
  "nivel": 16,
  "bloques": [
   {
    "p": "El teléfono tiene sus propias frases hechas. Un llamado típico a una oficina:"
   },
   {
    "ejemplos": [
     [
      "Hallo, hier ist Anna.",
      "Hola, habla Anna."
     ],
     [
      "Kann ich bitte mit Herrn Müller sprechen?",
      "¿Puedo hablar con el señor Müller?"
     ],
     [
      "Einen Moment, bitte.",
      "Un momento, por favor."
     ],
     [
      "Er ist leider nicht da.",
      "Lamentablemente no está."
     ],
     [
      "Kann ich eine Nachricht hinterlassen?",
      "¿Puedo dejar un mensaje?"
     ],
     [
      "Ich rufe später noch einmal an.",
      "Llamo de nuevo más tarde."
     ],
     [
      "Auf Wiederhören!",
      "¡Hasta luego! (por teléfono)"
     ]
    ]
   },
   {
    "nota": "Para presentarte decís **«Hier ist …»** («acá está…»), no «yo soy». Y por teléfono la despedida es **«Auf Wiederhören!»** (hasta volver a oírnos) en vez de «Auf Wiedersehen» (hasta volver a vernos). «Herr» es señor y «Frau» es señora."
   }
  ],
  "exercises": [
   {
    "type": "choice",
    "prompt": "Llamás y te presentás:",
    "options": [
     "Hallo, hier ist Anna.",
     "Hallo, Anna ist hier ich.",
     "Anna hier hallo."
    ],
    "answer": "Hallo, hier ist Anna.",
    "explain": "«Hier ist …» = habla …",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "Por teléfono te despedís con…",
    "options": [
     "Auf Wiederhören!",
     "Auf Wiedersehen!",
     "Guten Appetit!"
    ],
    "answer": "Auf Wiederhören!",
    "explain": "«hören» = oír.",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "«Einen Moment, bitte» significa…",
    "options": [
     "Un momento, por favor.",
     "Un mes, por favor.",
     "Una vez más."
    ],
    "answer": "Un momento, por favor.",
    "explain": "«Moment» = momento.",
    "nivel": 16
   },
   {
    "type": "fill",
    "prompt": "Ich ___ später noch einmal an. (anrufen)",
    "answer": "rufe",
    "accept": [
     "rufe"
    ],
    "explain": "Con «ich»: «rufe … an».",
    "nivel": 16
   },
   {
    "type": "match",
    "prompt": "Unir cada frase con su significado.",
    "pairs": [
     {
      "left": "Hier ist Anna.",
      "right": "Habla Anna."
     },
     {
      "left": "Einen Moment, bitte.",
      "right": "Un momento, por favor."
     },
     {
      "left": "Er ist nicht da.",
      "right": "No está."
     },
     {
      "left": "eine Nachricht",
      "right": "un mensaje"
     }
    ],
    "answer": "Hier ist Anna. = Habla Anna. · Einen Moment, bitte. = Un momento, por favor. · Er ist nicht da. = No está. · eine Nachricht = un mensaje",
    "explain": "Hier ist Anna. = Habla Anna. · Einen Moment, bitte. = Un momento, por favor. · Er ist nicht da. = No está. · eine Nachricht = un mensaje",
    "nivel": 16
   },
   {
    "type": "order",
    "prompt": "Ordená (empezá con «Kann»): «¿Puedo dejar un mensaje?»",
    "answer": "Kann ich eine Nachricht hinterlassen?",
    "words": [
     "ich",
     "hinterlassen?",
     "eine",
     "Nachricht",
     "Kann"
    ],
    "explain": "«Kann ich eine Nachricht hinterlassen?»",
    "nivel": 16
   },
   {
    "type": "choice",
    "prompt": "«Er ist leider nicht da» significa…",
    "options": [
     "Lamentablemente no está.",
     "Él no es de acá.",
     "Él da algo."
    ],
    "answer": "Lamentablemente no está.",
    "explain": "«da sein» = estar (presente).",
    "nivel": 16
   }
  ]
 }
];
