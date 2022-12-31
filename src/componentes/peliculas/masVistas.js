/* eslint-disable eqeqeq */
import React from "react";
import { useState, useEffect,  useContext } from "react";
import { Link } from 'react-router-dom'
import BtAgregar from './btAgregarLista'
import BtVer from './btVer'
import BtEliminar from './btEliminarDeLista'
import { ListaContext } from "./contextLista";

import Carrusel from "../Carrusel";

function MasVistas() {
  const [pelis, setPelis] = useState([]);
  const [pagina, setPagina] = useState(1);
  const key = "e4e0f9c7c990f3921d36b5095affbe99"
  // const key = process.env.REACT_APP_KEY_TMDB

  // estas 2 lineas son para mas abajo comprobar si existe la peli en la lista
  const [lista] = useContext(ListaContext)
  let existeId = lista.map((item) => (item.id));

  useEffect(() => {
    // fetch de api mas vistas
    const datos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=${pagina}`
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

  return (
    <>
      <div className="bg-dark p-1">
        <br />
        <h3 className="text-center text-light">Recomendadas</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 g-3 p-1">
          {pelis.map((item, index) => (
            <div key={index} className="card bg-secondary p-1">
              <Link to={`/detalle/${item.id}`}>
                <img
                  className="card-img-top p-1"
                  // src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  src={item.poster_path == undefined
                    ? `./popcorn.png`
                    : `https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  data-dato={item.id}
                  alt={item.original_title}
                />
              </Link>
              {/* aca esta la logica de botones si esta logueado ve uno u otro boton */}
              {existeId.includes(item.id) ? <BtEliminar id={item.id} /> : <BtAgregar id={item.id} poster_path={item.poster_path} contenido="pelicula" />}
              <BtVer id={item.id} contenido="pelicula" />
              
            </div>
          ))}
        </div>
      </div>
      <button
        className="m-2 p-1 btn btn-warning btn-badge"
        type="button"
        onClick={verMas}
        disabled={pagina > 15 ? true : false}>
        Ver más
      </button>
    </>
  );
}

export default MasVistas;
