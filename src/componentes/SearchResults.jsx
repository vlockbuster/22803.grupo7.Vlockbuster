import React, { useState, useEffect, useContext } from "react";

import { useConsulta } from "../hooks/useConsulta";
import { useDebounce } from "../hooks/useDebounce";
import NoResults from "./NoResults";
import BtAgregar from "./peliculas/btAgregarLista";
import BtVer from "./peliculas/btVer";
import BtEliminar from "./peliculas/btEliminarDeLista";
import { ListaContext } from "./peliculas/contextLista";
import { Link } from 'react-router-dom'

function SearchResults() {
  const [pelis, setPelis] = useState([]);
  const [pagina, setPagina] = useState(1);
  const key = "e4e0f9c7c990f3921d36b5095affbe99";
  // const key = process.env.REACT_APP_KEY_TMDB
  //agregado de useLocation para el search
  const query = useConsulta();
  const search = useDebounce(query.get("search"), 500);

  // estas 2 lineas son para mas abajo comprobar si existe la peli en la lista
  const [lista] = useContext(ListaContext);
  let existeId = lista.map((item) => item.id);

  useEffect(() => {
    //parametro de busqueda
    const searchUrl = search
      ? "/search/movie?query=" + search + "&"
      : "/search/movie?query=%&";
    // fetch de api de la busqueda
    const datos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3${searchUrl}api_key=${key}&language=es-ES&page=${pagina}`
      );
      const data = await response.json();
      /*       console.log(data);
       */ setPelis(data.results);

      // console.log(data);
    };
    datos(pagina);
  }, [search, key, pagina]);

  if (search && pelis.length === 0) {
    return <NoResults />;
  }

  // ver mas
  const verMas = () => {
    setPagina((prevstate) => prevstate + 1);
  };

  const verDetalle = (e) => {
    let selDetalle = e.target.dataset.dato;
    console.log("detalle:", pelis[selDetalle]);
  };
  return (
    <>
      <div className="bg-dark p-1 mt-0">
        <br />
        {/*         <h3 className="text-center text-light">Resultado de Busqueda</h3>
         */}{" "}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-1">
          {pelis.map((item, index) => (
            <div key={index} className="card bg-secondary p-1">
              <Link to={`/detalle/${item.id}`}>
              <img
                className="card-img-top p-1"
                // src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                src={item.poster_path == undefined
                  ? `./popcorn.png`
                  : `https://image.tmdb.org/t/p/w500${item.poster_path}`}
                data-dato={index}
                onClick={verDetalle}
                alt={item.original_title}
              />
              </Link>
              {existeId.includes(item.id) ? (
                <BtEliminar id={item.id} />
              ) : (
                <BtAgregar
                  id={item.id}
                  poster_path={item.poster_path}
                  contenido="pelicula"
                />
              )}
              <BtVer id={item.id} contenido="pelicula" />{" "}
            </div>
          ))}
        </div>
      </div>
      {/*  <button
        className="m-2 p-1 btn btn-warning btn-badge"
        type="button"
        onClick={verMas}
        disabled={pagina > 15 ? true : false}>
        Ver más
      </button> */}
    </>
  );
}

export default SearchResults;
