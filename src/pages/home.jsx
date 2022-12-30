import React from "react";
import Carrusel1 from "../componentes/Carrusel1";
import Carrusel2 from "../componentes/Carrusel2";
import SearchResults from "../componentes/SearchResults";

const Home = () => {
  /* lista es solo una simulacion de la peticion a la api */
  const lista = [
    {
        "backdrop_path": null,
        "first_air_date": "2017-03-13",
        "genre_ids": [
            99
        ],
        "id": 98271,
        "name": "arte Re:",
        "origin_country": [
            "DE",
            "FR"
        ],
        "original_language": "fr",
        "original_name": "arte Re:",
        "overview": "",
        "popularity": 304.266,
        "poster_path": "/19ChTJxvw9jZpMnWKsuXc83eI5C.jpg",
        "vote_average": 4.5,
        "vote_count": 2
    },
    {
        "backdrop_path": "/zocVz88wzfCd2y3RPKxI8qjhRKc.jpg",
        "first_air_date": "2003-09-03",
        "genre_ids": [
            99,
            18
        ],
        "id": 90,
        "name": "Mayday Catástrofes Aéreas",
        "origin_country": [
            "CA"
        ],
        "original_language": "en",
        "original_name": "Mayday",
        "overview": "Cada episodio se centra en un desastre aéreo, primero dando al público la sensación de estar en el avión y luego explicando por qué se produjo el accidente. La serie brinda a los tele-espectadores tanto la sensación visceral del desastre como la explicación racional de lo que sucedió y qué derivó la industria de la aviación como aprendizaje a raíz del accidente.",
        "popularity": 125.818,
        "poster_path": "/2uuVIAb4MtPmMNTpOyID5V8DzrU.jpg",
        "vote_average": 8.3,
        "vote_count": 206
    },
    {
        "backdrop_path": "/kI8DGcgPOfZfruOrrVxt0R1e0iU.jpg",
        "first_air_date": "2022-10-28",
        "genre_ids": [
            99
        ],
        "id": 213288,
        "name": "Mi encuentro con el mal",
        "origin_country": [
            "MX"
        ],
        "original_language": "es",
        "original_name": "Mi encuentro con el mal",
        "overview": "",
        "popularity": 60.672,
        "poster_path": "/wepmAKAfDuVlZGmkIqdLWORa7A3.jpg",
        "vote_average": 6.7,
        "vote_count": 24
    },
    {
        "backdrop_path": "/mCZEHiyPkmsw3MDBNuiN5z85gs8.jpg",
        "first_air_date": "2002-10-20",
        "genre_ids": [
            99,
            10764,
            10767,
            35
        ],
        "id": 45,
        "name": "Top Gear",
        "origin_country": [
            "GB"
        ],
        "original_language": "en",
        "original_name": "Top Gear",
        "overview": "Top Gear. Programa de automóviles. Toda clase de pruebas con coches y resto de vehículos, incluyendo viajes a través de desiertos, caminos tortuosos. Experimentos con motores, lanzamientos por encima de caravanas....",
        "popularity": 91.421,
        "poster_path": "/ffvMv9SHMD7yPg9VV7TczQZrPSQ.jpg",
        "vote_average": 7.4,
        "vote_count": 588
    },
    {
        "backdrop_path": "/tjXXXRnEI3rxzTsrs4FvhjhPlQt.jpg",
        "first_air_date": "2022-05-23",
        "genre_ids": [
            99
        ],
        "id": 95171,
        "name": "Planeta Prehistórico",
        "origin_country": [
            "GB"
        ],
        "original_language": "en",
        "original_name": "Prehistoric Planet",
        "overview": "Experimenta las maravillas de nuestro mundo como nunca antes en esta docuserie épica de Jon Favreau y los productores de Planet Earth. Viaja 66 millones de años atrás, cuando los majestuosos dinosaurios y las criaturas extraordinarias vagaban por las tierras, los mares y los cielos.",
        "popularity": 67.548,
        "poster_path": "/u7Ulem8hT8nKVPvYlTeNLoWXfvk.jpg",
        "vote_average": 8.4,
        "vote_count": 232
    },
    {
        "backdrop_path": "/ztruG6mR07igZWchQHiaFkND8Di.jpg",
        "first_air_date": "2020-01-24",
        "genre_ids": [
            99,
            10768,
            10759
        ],
        "id": 96481,
        "name": "El gran Imperio otomano",
        "origin_country": [
            "TR"
        ],
        "original_language": "tr",
        "original_name": "Rise of Empires: Ottoman",
        "overview": "El sultán otomano Mehmed II libra una campaña épica para tomar la capital bizantina de Constantinopla y cambia el curso de la historia durante siglos.",
        "popularity": 77.293,
        "poster_path": "/ymzXIQD72mDXFRiTI61EfDAwXAR.jpg",
        "vote_average": 7.2,
        "vote_count": 214
    },
    {
        "backdrop_path": "/dasgPx3OgkxHSQyncKlApfZkpi2.jpg",
        "first_air_date": "1964-08-22",
        "genre_ids": [
            10767,
            10763
        ],
        "id": 224,
        "name": "Match of the Day",
        "origin_country": [
            "GB"
        ],
        "original_language": "en",
        "original_name": "Match of the Day",
        "overview": "",
        "popularity": 67.361,
        "poster_path": "/paRFRd11WlFOxVbGnzjjCBym7FW.jpg",
        "vote_average": 7.6,
        "vote_count": 26
    },
    {
        "backdrop_path": "/2UuWkqlDFT13MxNovuv9DF56j3t.jpg",
        "first_air_date": "2022-03-14",
        "genre_ids": [
            18
        ],
        "id": 195366,
        "name": "El último rey: El hijo del pueblo",
        "origin_country": [
            "MX"
        ],
        "original_language": "es",
        "original_name": "El último rey: El hijo del pueblo",
        "overview": "Aborda la vida de Vicente Fernández —mejor conocido como «El Charro de Huentitán»—, el cual, a través de entrevistas, testimonios y revelaciones inéditas, se cuenta como antes de llegar a cantar en el Estadio Azteca pintaba casas, de un matrimonio estable a varios amores tormentosos y de enmendar su ausencia como padre cuando se encomendó a Dios para salvar la vida de uno de sus hijos.",
        "popularity": 57.678,
        "poster_path": "/3YVQ6gsDnMYQWQCavtWE5bSfyJ2.jpg",
        "vote_average": 7,
        "vote_count": 34
    },
    {
        "backdrop_path": "/vXfTNHU5oBYjatT5oP7v5nV9M2Y.jpg",
        "first_air_date": "2022-10-11",
        "genre_ids": [
            99
        ],
        "id": 211694,
        "name": "La isla de los lobos costeros",
        "origin_country": [
            "GB"
        ],
        "original_language": "en",
        "original_name": "Island of the Sea Wolves",
        "overview": "Un viaje a la isla de Vancouver, un entorno salvaje donde animales como águilas calvas y lobos costeros encuentran su alimento en las frías aguas del océano.",
        "popularity": 44.022,
        "poster_path": "/8EqF6sYNO6TaCOih15ZzdNiHuMn.jpg",
        "vote_average": 8.8,
        "vote_count": 53
    },
    {
        "backdrop_path": "/wAEWZm2pSopAbqE5dQWE0ET8aR5.jpg",
        "first_air_date": "2021-01-08",
        "genre_ids": [
            99,
            10759,
            10765
        ],
        "id": 114695,
        "name": "Leyendas de Marvel Studios",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "Marvel Studios Legends",
        "overview": "Vuelve a visitar a los héroes, villanos y momentos épicos de todo el MCU en preparación para las historias que aún están por venir. Cada segmento dinámico se alimenta directamente de la próxima serie, lo que prepara el escenario para eventos futuros. Esta serie entrelaza los muchos hilos que constituyen el incomparable Universo Cinematográfico de Marvel.",
        "popularity": 46.57,
        "poster_path": "/apFUonh1wVE3LWxbAjJC2zJqZOC.jpg",
        "vote_average": 7.5,
        "vote_count": 606
    },
    {
        "backdrop_path": "/dZf3fpTAEdmLtekPb1LQb82wOyI.jpg",
        "first_air_date": "1974-03-03",
        "genre_ids": [
            99
        ],
        "id": 3562,
        "name": "NOVA",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "NOVA",
        "overview": "Serie documental semanal; cada episodio proporciona una mirada en profundidad sobre diferentes temas de investigación científica; examinando por ejemplo, desde los efectos a largo plazo de la deforestación de la selva amazónica, hasta un retorno a la central nuclear de Chernobyl, o información sobre los últimos avances en las técnicas médicas o la física teórica.",
        "popularity": 62.248,
        "poster_path": "/giUBXYnDAaJgNqA6iE3BMVE2EHp.jpg",
        "vote_average": 7,
        "vote_count": 90
    },
    {
        "backdrop_path": "/2Nwbv0hrN8sThLvgooShcPqmFrO.jpg",
        "first_air_date": "2014-03-09",
        "genre_ids": [
            99
        ],
        "id": 58474,
        "name": "Cosmos: Una odisea en el espacio-tiempo",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "Cosmos",
        "overview": "Más de 30 años después de que Carl Sagan buscase los límites del universo y del hombre a través de la ciencia, Cosmos: Una odisea en el espacio-tiempo propone un nuevo viaje hacia las estrellas. Presentado por el prestigioso astrofísico Neil deGrasse Tyson, esta continuación explora cómo descubrimos las leyes de la naturaleza y encontramos nuestro lugar en el tiempo y el espacio.",
        "popularity": 34.901,
        "poster_path": "/47f0rqHHwWVJnEHL1JOR8SHznBZ.jpg",
        "vote_average": 8.4,
        "vote_count": 1271
    },
    {
        "backdrop_path": "/9VvaU8b9oRDH6yzvzIIOLweCUvk.jpg",
        "first_air_date": "1988-10-04",
        "genre_ids": [
            99
        ],
        "id": 1181,
        "name": "American Experience",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "American Experience",
        "overview": "",
        "popularity": 34.878,
        "poster_path": "/g0CcpIzTA3nWETpLiatdnTcU2Qn.jpg",
        "vote_average": 8,
        "vote_count": 21
    },
    {
        "backdrop_path": "/47bjtOwhPrrpR3RQXrC5clIOXKm.jpg",
        "first_air_date": "1986-06-23",
        "genre_ids": [
            99
        ],
        "id": 15069,
        "name": "American Masters",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "American Masters",
        "overview": "",
        "popularity": 30.493,
        "poster_path": "/n2PHBbRwNxaQGuqIW4Y5ulq0HQC.jpg",
        "vote_average": 7.9,
        "vote_count": 11
    },
    {
        "backdrop_path": "/7FrImKLo2Vla7Evv7pPvK9g96wC.jpg",
        "first_air_date": "2012-05-26",
        "genre_ids": [
            99
        ],
        "id": 58775,
        "name": "Kingdom of Plants",
        "origin_country": [
            "GB"
        ],
        "original_language": "en",
        "original_name": "Kingdom of Plants",
        "overview": "",
        "popularity": 37.027,
        "poster_path": "/syEdeMnoa1DF0GzpUeFj1nJs9iA.jpg",
        "vote_average": 7.7,
        "vote_count": 10
    },
    {
        "backdrop_path": "/s7Puqpq4Yp67l8JfPZYwhDTVNi5.jpg",
        "first_air_date": "1993-12-10",
        "genre_ids": [
            99
        ],
        "id": 6145,
        "name": "Modern Marvels",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "Modern Marvels",
        "overview": "",
        "popularity": 39.731,
        "poster_path": "/uRMi6q4mazNTZ2HKdiY6RP5noDW.jpg",
        "vote_average": 8.3,
        "vote_count": 18
    },
    {
        "backdrop_path": "/11MXZO2hejk1CMhXgjOpCqAUaUq.jpg",
        "first_air_date": "1983-10-30",
        "genre_ids": [
            99
        ],
        "id": 21145,
        "name": "Mundo Natural",
        "origin_country": [
            "GB"
        ],
        "original_language": "en",
        "original_name": "Natural World",
        "overview": "",
        "popularity": 34.301,
        "poster_path": "/lM2O6k77POzauRNR6iAcOFZKwqY.jpg",
        "vote_average": 8,
        "vote_count": 12
    },
    {
        "backdrop_path": "/obqcjG9gDu8fnNkXEWI2HlJAb68.jpg",
        "first_air_date": "2010-04-20",
        "genre_ids": [
            99,
            9648,
            10765
        ],
        "id": 32608,
        "name": "Alienígenas ancestrales",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "Ancient Aliens",
        "overview": "Es una serie de televisión estadounidense que se estrenó el 20 de abril de 2010, en el canal History.1 Producido por Prometheus Entertainment, el programa presenta la hipótesis de los antiguos astronautas y propone que los textos históricos, la arqueología, las enseñanzas espirituales y diversas leyendas contienen pruebas de que en el pasado el ser humano tuvo contacto con civilizaciones extraterrestres.,2 3 mediante argumentos y explicaciones extraídas de documentos antiguos, creencias religiosas y acontecimientos históricos bíblicos.",
        "popularity": 51.257,
        "poster_path": "/wSV3iuaG6Ot6aUqQCqOHFyDQRMB.jpg",
        "vote_average": 6.9,
        "vote_count": 211
    },
    {
        "backdrop_path": "/6GdneIKJFjv5ArM5b6kKJQ4o8z4.jpg",
        "first_air_date": "2008-12-29",
        "genre_ids": [
            99
        ],
        "id": 27240,
        "name": "Los siete pecados capitales",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "Seven Deadly Sins",
        "overview": "Miniserie televisiva de siete episodios. Los siete pecados capitales del cristianismo han tenido un gran impacto en la cultura Occidental. Cada episodio trata sobre un pecado capital: gula, soberbia, ira, avaricia, pereza, envidia y lujuria.",
        "popularity": 30.156,
        "poster_path": "/u7UUYOeMcQ62qHhRhWeGO09h8qH.jpg",
        "vote_average": 7.7,
        "vote_count": 2281
    },
    {
        "backdrop_path": "/b7bdBCRw4siIhqEVKqbtOb3VlTS.jpg",
        "first_air_date": "1974-02-19",
        "genre_ids": [
            10767
        ],
        "id": 16730,
        "name": "American Music Awards",
        "origin_country": [
            "US"
        ],
        "original_language": "en",
        "original_name": "American Music Awards",
        "overview": "",
        "popularity": 22.938,
        "poster_path": "/lMfGSoq6otbyu7orszqAH4s9TQU.jpg",
        "vote_average": 8,
        "vote_count": 8
    }
]
const drama = [
  {
      "adult": false,
      "backdrop_path": "/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg",
      "genre_ids": [
          28,
          53,
          80,
          18
      ],
      "id": 740952,
      "original_language": "en",
      "original_title": "Savage Salvation",
      "overview": "Un adicto a los opioides en rehabilitación busca vengarse de los traficantes que provocaron la muerte de su prometida. Dos policías le siguen el rastro.",
      "popularity": 2252.41,
      "poster_path": "/xnCuJyDxnoTxlQ48yoOXBgVBtnC.jpg",
      "release_date": "2022-12-02",
      "title": "El Río de la Ira",
      "video": false,
      "vote_average": 5.3,
      "vote_count": 12
  },
  {
      "adult": false,
      "backdrop_path": "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
      "genre_ids": [
          28,
          18,
          36
      ],
      "id": 724495,
      "original_language": "en",
      "original_title": "The Woman King",
      "overview": "Una epopeya histórica inspirada en los hechos reales que sucedieron en el Reino de Dahomey, uno de los estados más poderosos de África en los siglos XVIII y XIX. La historia sigue a Nanisca (Davis), general de la unidad militar exclusivamente femenina y a Nawi (Mbedu), una recluta ambiciosa. Juntas lucharon contra enemigos que violaron su honor, esclavizaron a su gente y amenazaron con destruir todo por lo que habían vivido.",
      "popularity": 2141.73,
      "poster_path": "/jny1jvCkgpzc3C0axQsX9ADYcAl.jpg",
      "release_date": "2022-09-15",
      "title": "La mujer rey",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 881
  },
  {
      "adult": false,
      "backdrop_path": "/2JeIqOdSM5nC1SQmuhUOfj3iB1U.jpg",
      "genre_ids": [
          16,
          14,
          18
      ],
      "id": 555604,
      "original_language": "en",
      "original_title": "Guillermo del Toro's Pinocchio",
      "overview": "Versión musical en animación stop motion del famoso cuento de 'Pinocho', ambientada en la Italia fascista, durante la década de 1930.",
      "popularity": 1867.515,
      "poster_path": "/hVa3OCfwqFm6K3Sk6IF68cYr7uk.jpg",
      "release_date": "2022-11-09",
      "title": "Pinocho de Guillermo del Toro",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 1171
  },
  {
      "adult": false,
      "backdrop_path": "/AokFVAl1JVooW1uz2V2vxNUxfit.jpg",
      "genre_ids": [
          36,
          28,
          18
      ],
      "id": 551271,
      "original_language": "en",
      "original_title": "Medieval",
      "overview": "La historia del icono y señor de la guerra checo del siglo XIV, Jan Zizka, que derrotó a los ejércitos de la Orden Teutónica y el Sacro Imperio Romano Germánico.",
      "popularity": 1031.954,
      "poster_path": "/eeUNWsdoiOijOZAMaWFDA5Pb1n8.jpg",
      "release_date": "2022-09-08",
      "title": "Medieval",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 256
  },
  {
      "adult": false,
      "backdrop_path": "/ypFD4TJ3nLJesou76V59CnweaT0.jpg",
      "genre_ids": [
          36,
          18,
          53,
          28
      ],
      "id": 715931,
      "original_language": "en",
      "original_title": "Emancipation",
      "overview": "Inspirada en la conmovedora historia real de un hombre dispuesto a cualquier cosa por su familia, y por la libertad. Cuando Peter, un hombre esclavizado, arriesga su vida por escapar y regresar con su familia, se embarca en una peligrosa travesía de amor y resiliencia.",
      "popularity": 737.312,
      "poster_path": "/zQe7paVC4tSwb8vBwxSqajJ22Ue.jpg",
      "release_date": "2022-12-02",
      "title": "Hacia la libertad",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 501
  },
  {
      "adult": false,
      "backdrop_path": "/yNib9QAiyaopUJbaayKQ2xK7mYf.jpg",
      "genre_ids": [
          10752,
          28,
          18
      ],
      "id": 966220,
      "original_language": "uk",
      "original_title": "Снайпер. Білий ворон",
      "overview": "Mykola es un pacifista excéntrico que quiere ser útil a la humanidad. Cuando comienza la guerra en Donbass, el ingenuo mundo de Mykola se derrumba cuando los militantes matan a su esposa embarazada y queman su casa hasta los cimientos. Recuperado, toma una decisión cardinal y se enrola en una compañía de francotiradores. Habiendo conocido a los asesinos de su esposa, se derrumba emocionalmente y organiza el \"terror de francotiradores\" para el enemigo. Es salvado de una muerte sin sentido por su instructor, quien a su vez es herido de muerte. La muerte de un amigo deja una “cicatriz” y Mykola está dispuesto a sacrificar su vida.",
      "popularity": 831.765,
      "poster_path": "/bsHqULcPgIUroCHLfTIXWJ24sdd.jpg",
      "release_date": "2022-05-03",
      "title": "El francotirador de Donbás",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 178
  },
  {
      "adult": false,
      "backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
      "genre_ids": [
          28,
          18
      ],
      "id": 361743,
      "original_language": "en",
      "original_title": "Top Gun: Maverick",
      "overview": "Después de más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete \"Maverick\" Mitchell se encuentra dónde siempre quiso estar, empujando los límites como un valiente piloto de prueba y esquivando el alcance en su rango, que no le dejaría volar emplazándolo en tierra. Cuando se encuentra entrenando a un destacamento de graduados de Top Gun para una misión especializada, Maverick se encuentra allí con el teniente Bradley Bradshaw, el hijo de su difunto amigo \"Goose\".",
      "popularity": 706.417,
      "poster_path": "/AlWpEpQq0RgZIXVHAHZtFhEvRgd.jpg",
      "release_date": "2022-05-24",
      "title": "Top Gun: Maverick",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 5266
  },
  {
      "adult": false,
      "backdrop_path": "/wMNY6tU9WOUeAMRfqbCYwceOl9u.jpg",
      "genre_ids": [
          16,
          10751,
          14,
          18
      ],
      "id": 1001865,
      "original_language": "en",
      "original_title": "Scrooge: A Christmas Carol",
      "overview": "Un mezquino y avaro personaje (Ebenezer Scrooge) sólo dispone de unas horas en la víspera de la Navidad para abrir su corazón, deshacer años de iniquidad y cambiar el futuro antes de que sea demasiado tarde.",
      "popularity": 476.087,
      "poster_path": "/jqMEPeRCPJFAXE3ZqWv4eBrdCA4.jpg",
      "release_date": "2022-11-18",
      "title": "Scrooge: Cuento de Navidad",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 199
  },
  {
      "adult": false,
      "backdrop_path": "/mqsPyyeDCBAghXyjbw4TfEYwljw.jpg",
      "genre_ids": [
          10752,
          18,
          28
      ],
      "id": 49046,
      "original_language": "de",
      "original_title": "Im Westen nichts Neues",
      "overview": "Paul Baumer y sus amigos Albert y Muller, incitados por sueños románticos de heroísmo, se alistan voluntariamente en el ejército alemán. Llenos de emoción y fervor patriótico, los muchachos marchan con entusiasmo hacia una guerra en la que creen. Pero una vez en el frente occidental, descubren el horror destructor del alma de la Primera Guerra Mundial.",
      "popularity": 482.127,
      "poster_path": "/v2zSM7VA6miczc24197RgKkUygt.jpg",
      "release_date": "2022-10-07",
      "title": "Sin novedad en el frente",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 1229
  },
  {
      "adult": false,
      "backdrop_path": "/ri8NL1pLQiHlrx4Yy9MnmEhBTJJ.jpg",
      "genre_ids": [
          18,
          10749
      ],
      "id": 622082,
      "original_language": "en",
      "original_title": "In from the Side",
      "overview": "Después de disfrutar de un encuentro de una noche, dos hombres gays de un modesto club de rugby se encaminan sin saberlo a una aventura adúltera. Deberán ocultar sus sentimientos o arriesgarse a destruir el club que aman.",
      "popularity": 419.642,
      "poster_path": "/adNruVO37lpQRgjGqYOoWusmP3B.jpg",
      "release_date": "2022-09-16",
      "title": "Dentro del campo",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 11
  },
  {
      "adult": false,
      "backdrop_path": "/707thQazLJiYLBhCrZlRoV05NNL.jpg",
      "genre_ids": [
          28,
          18,
          53
      ],
      "id": 948276,
      "original_language": "fr",
      "original_title": "Balle perdue 2",
      "overview": "Tras la muerte de Charras, Lino y Julia toman el relevo y forman la nueva unidad de estupefacientes. Decidido a encontrar a los asesinos de su hermano y de su mentor, Lino continúa su cacería y no deja que nadie se interponga en su camino.",
      "popularity": 425.797,
      "poster_path": "/p6HNFpXiXIdyMRJTrfkgaPkFCK.jpg",
      "release_date": "2022-11-10",
      "title": "La bala perdida 2",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 187
  },
  {
      "adult": false,
      "backdrop_path": "/c6BEspznv2528qaOGzvqtpktn1J.jpg",
      "genre_ids": [
          80,
          18,
          53
      ],
      "id": 862965,
      "original_language": "en",
      "original_title": "Emily the Criminal",
      "overview": "Emily, que tiene una deuda estudiantil y está excluida del mercado laboral debido a antecedentes penales menores, se ve involucrada en una estafa con tarjeta de crédito que la lleva al inframundo criminal de Los Ángeles, lo que finalmente la lleva a consecuencias mortales.",
      "popularity": 403.672,
      "poster_path": "/omgF37fXTGoWl4Jg4gQNqOgBCrU.jpg",
      "release_date": "2022-08-12",
      "title": "Emily la estafadora",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 306
  },
  {
      "adult": false,
      "backdrop_path": "/6tAYyCxF0T5oUIH95zMBC3X3W5T.jpg",
      "genre_ids": [
          10751,
          14,
          12,
          18
      ],
      "id": 668461,
      "original_language": "en",
      "original_title": "Slumberland",
      "overview": "Una niña busca a su padre, desaparecido en un místico país de los sueños, con la ayuda de una gran criatura mitad hombre y mitad monstruo.",
      "popularity": 381.303,
      "poster_path": "/xvsftW0ai916VTtH2gPjSFC7mGN.jpg",
      "release_date": "2022-11-09",
      "title": "El país de los sueños",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 464
  },
  {
      "adult": false,
      "backdrop_path": "/atmII0hn3iQe3IWMBmIb3cc8EJZ.jpg",
      "genre_ids": [
          10749,
          18,
          27
      ],
      "id": 791177,
      "original_language": "en",
      "original_title": "Bones and All",
      "overview": "Cuenta la historia del primer amor entre Maren, una joven que está aprendiendo a sobrevivir al margen de la sociedad, y Lee, un vagabundo con ideas muy intensas que vive marginado. Cuando se conocen, se unen en un viaje de mil millas que les lleva por carreteras, pasajes ocultos y caminos alternos en los Estados Unidos de Ronald Reagan. Pero a pesar de sus esfuerzos, todos los caminos conducen a sus aterradores pasados y a una última parada que determinará si su amor puede sobrevivir a su forma de ser.",
      "popularity": 329.296,
      "poster_path": "/pemqQOft7obTGAmr7umdGC6qb3N.jpg",
      "release_date": "2022-11-18",
      "title": "Hasta los huesos: Bones and All",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 424
  },
  {
      "adult": false,
      "backdrop_path": "/9Md4CqzUGDtK5oEkRRvozLkGc9d.jpg",
      "genre_ids": [
          18,
          35
      ],
      "id": 674324,
      "original_language": "en",
      "original_title": "The Banshees of Inisherin",
      "overview": "Pádraic y Colm son dos amigos de toda la vida que se encuentran en un callejón sin salida cuando Colm pone inesperadamente fin a su amistad. Un aturdido Pádraic, ayudado por su hermana Siobhán y el problemático joven isleño Dominic se esfuerza por reparar la relación, negándose a aceptar un no por respuesta. Pero los repetidos esfuerzos de Pádraic no hacen más que reforzar la determinación de su antiguo amigo, y cuando Colm le da un ultimátum desesperado los acontecimientos se intensifican rápidamente, con consecuencias impactantes.",
      "popularity": 325.039,
      "poster_path": "/ucuuM51Kw3IoTXRUQLnKAz9jhip.jpg",
      "release_date": "2022-10-21",
      "title": "Almas en pena de Inisherin",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 261
  },
  {
      "adult": false,
      "backdrop_path": "/o4O2MQciuxg1wuQIHl7NTn5FP0y.jpg",
      "genre_ids": [
          18,
          35
      ],
      "id": 804095,
      "original_language": "en",
      "original_title": "The Fabelmans",
      "overview": "Al crecer en la era de Arizona posterior a la Segunda Guerra Mundial, un niño llamado Sammy Fabelman descubre un secreto familiar devastador y explora cómo el poder de las películas puede ayudarlo a ver la verdad. Película semiautobiográfica sobre la infancia y juventud de Steven Spielberg.",
      "popularity": 281.935,
      "poster_path": "/wcgPDyvKkgo2agNXcdE1eXLGzmf.jpg",
      "release_date": "2022-11-11",
      "title": "Los Fabelman",
      "video": false,
      "vote_average": 8,
      "vote_count": 236
  },
  {
      "adult": false,
      "backdrop_path": "/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
      "genre_ids": [
          18,
          28,
          53
      ],
      "id": 852046,
      "original_language": "fr",
      "original_title": "Athena",
      "overview": "Horas después de la trágica muerte de su hermano menor en circunstancias inexplicables, la vida de tres hermanos se ve sumida en el caos.",
      "popularity": 295.6,
      "poster_path": "/uponqptyKtBsJuODqmxoronFd8P.jpg",
      "release_date": "2022-09-09",
      "title": "Atenea",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 417
  },
  {
      "adult": false,
      "backdrop_path": "/rwgmDkIEv8VjAsWx25ottJrFvpO.jpg",
      "genre_ids": [
          10749,
          18
      ],
      "id": 744276,
      "original_language": "en",
      "original_title": "After Ever Happy",
      "overview": "El amor de Tessa y Hardin nunca ha sido fácil. Mientras él permanece en Londres después de la boda de su madre y se hunde cada vez más en su propia oscuridad, ella regresa a Seattle. Tessa es la única capaz de entenderle y calmarle... él la necesita, pero ella ya no es la chica buena y dulce que era cuando llegó a la universidad. Deberá plantearse si lo que debe hacer ahora es salvar a Hardin y su relación con él, o si ha llegado el momento de pensar solo en ella. Si quieren que su amor sobreviva, primero tendrán que trabajar en sí mismos. ¿Pero será su destino seguir estando juntos?",
      "popularity": 273.49,
      "poster_path": "/xbMYV7fR9ygl5PGlM6MBZ7Vgjef.jpg",
      "release_date": "2022-08-24",
      "title": "After: Amor infinito",
      "video": false,
      "vote_average": 7,
      "vote_count": 671
  },
  {
      "adult": false,
      "backdrop_path": "/2iGUavwv86Hubv3V5Iq4qEQXDfE.jpg",
      "genre_ids": [
          53,
          18,
          27
      ],
      "id": 848058,
      "original_language": "es",
      "original_title": "Cerdita",
      "overview": "Para Sara el verano solo significa tener que soportar las continuas burlas de las otras chicas de su pequeño pueblo. Pero todo terminará cuando un desconocido llegue al pueblo y secuestre a sus acosadoras. Sara sabe más de lo que dice, y tendrá que decidir entre hablar y salvar a las chicas, o no decir nada para proteger al extraño hombre que la ha salvado.",
      "popularity": 301.655,
      "poster_path": "/kmCjZjm4CHuuJdwUdn3h93WqDdR.jpg",
      "release_date": "2022-10-07",
      "title": "Cerdita",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 243
  },
  {
      "adult": false,
      "backdrop_path": "/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg",
      "genre_ids": [
          28,
          18,
          878
      ],
      "id": 629176,
      "original_language": "en",
      "original_title": "Samaritan",
      "overview": "Sam Cleary (Javon \"Wanna\" Walton), un joven de 13 años, sospecha que su misterioso y solitario vecino, el Sr. Smith (Sylvester Stallone), es en realidad un personaje legendario que se esconde a plena vista. Hace 20 años, el vigilante superpoderoso de Granite City, Samaritan, fue declarado muerto tras una batalla en un almacén con su rival, Némesis. La gente cree que Samaritan falleció en el incendio, pero algunos ciudadanos como Sam tienen la esperanza de que siga vivo. Con la delincuencia en aumento y la ciudad al borde del caos, Sam se propone sacar a su vecino de su escondite para salvar la ciudad de la ruina.",
      "popularity": 308.341,
      "poster_path": "/4GVIfQVABjKuAWy3fvidPJZE52t.jpg",
      "release_date": "2022-08-25",
      "title": "Samaritan",
      "video": false,
      "vote_average": 6.9,
      "vote_count": 1474
  }
]

 return (
    <>
      <SearchResults />
      <div>
      <div className="bg-dark p-1 mt-0 text ali">
     <h2 className="text-white text-center m-0 p-0">Las Mejores Peliculas</h2>
    </div>
        <Carrusel1 lista={drama} />
        <div className="bg-dark p-1 mt-0 text ali">
     <h2 className="text-white text-center m-0 p-0">Las Mejores Series</h2>
    </div>
        <Carrusel2 lista={lista} />
      </div>
    </>
  );
};

export default Home;
