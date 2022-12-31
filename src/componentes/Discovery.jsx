import React, { useState, useEffect, useContext} from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../firebase";
import Swal from "sweetalert2";
import BtAgregar from './peliculas/btAgregarLista'
import BtVer from './peliculas/btVer'
import BtEliminar from './peliculas/btEliminarDeLista'
import { ListaContext } from "./peliculas/contextLista";
import { Link } from 'react-router-dom'


function Discovery() {
  const [pelis, setPelis] = useState([]);
  const [pagina, setPagina] = useState(1);
  const key = "e4e0f9c7c990f3921d36b5095affbe99";
  // const key = process.env.REACT_APP_KEY_TMDB
  //agregado de useLocation para el search
  const [lista] = useContext(ListaContext)
  let existeId = lista.map((item) => (item.id));


  useEffect(() => {
    //parametro de busqueda

    // fetch de api de la busqueda
    const datos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=es-ES&page=${pagina}`
      );
      const data = await response.json();
      console.log(data);
      setPelis(data.results.slice(0,18));
      // console.log(data);
    };
    datos(pagina);
  }, [key, pagina]);

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
      <div className="bg-dark p-1">
        <br />
        <h3 className="text-center text-light pt-1">Descubre</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 g-3 p-1">
          {pelis.map((item, index) => (
            <div key={index} className="card bg-secondary p-1">
               <Link to={`/detalle/${item.id}`}>
              <img
                className="card-img-top p-1 img-fluid"
                // src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                src={item.poster_path == undefined
                  ? `./popcorn.png`
                  : `https://image.tmdb.org/t/p/w500${item.poster_path}`}
                data-dato={index}
                onClick={verDetalle}
                alt={item.original_title}
              />
              </Link>
             {existeId.includes(item.id) ? <BtEliminar id={item.id} /> : <BtAgregar id={item.id} poster_path={item.poster_path}  contenido="pelicula"/>}
              <BtVer id={item.id} contenido="pelicula" />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center">
{/* 
      <button
        className="m-2 p-1 btn btn-warning btn-badge"
        type="button"
        onClick={verMas}
        disabled={pagina > 15 ? true : false}>
        Ver más
      </button>
      */}
          </div>
    </>
  );
}

export default Discovery;
