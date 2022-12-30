import { useState, useEffect } from "react";

export function Consultas(props) {
  const [pelis, setPelis] = useState([]);
  const [pagina, setPagina] = useState(1);
  const key = "e4e0f9c7c990f3921d36b5095affbe99"
  const busquedas = {
    "drama": "&with_genres=18",
    "accion": "&with_genres=crimen",
    "mejorDrama": "&with_genres=18&sort_by=vote_average.desc&vote_count.gte=10",
    "comedia": "&with_genres=35",
    "accion2":"with_genres=878&sort_by=vote_average.desc",
    "nose":"&sort_by=popularity.desc&page=1&with_type=0"
    
  }
  const  serieOPeli = {
    "movie": "movie",
    "tv" : "tv"
  }

  useEffect(() => {
    // fetch de api mas vistas
    const datos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/${serieOPeli[props.tipo]}?api_key=${key}&language=es-ES&page=${pagina}${busquedas[props.genero]}`
  
        );

      const data = await response.json();
      setPelis((pelisActuales) => [...pelisActuales, ...data.results]);
      // console.log(data);
    };
    datos(pagina);
  }, [key, pagina]);

  // ver mas
  const verMas = () => {
    setPagina((prevstate) => prevstate + 1);
  };
  return pelis;
}