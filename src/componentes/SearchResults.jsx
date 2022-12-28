import React, { useState, useEffect } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../firebase";
import Swal from "sweetalert2";
import { useConsulta } from "../hooks/useConsulta";
import { useDebounce } from "../hooks/useDebounce";
import NoResults from "./NoResults";

function SearchResults() {
  const [pelis, setPelis] = useState([]);
  const [pagina, setPagina] = useState(1);
  const key = "e4e0f9c7c990f3921d36b5095affbe99";
  // const key = process.env.REACT_APP_KEY_TMDB
  //agregado de useLocation para el search
  const query = useConsulta();
  const search = useDebounce(query.get("search"), 500);

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
      console.log(data);
      setPelis(data.results);

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

  // agregar a lista en firebase
  const agregarLista = async (e) => {
    let id = e.target.dataset.id;
    let poster_path = e.target.dataset.poster_path;
    // console.log("lista:", id, poster_path);
    if (auth.currentUser) {
      let uid = auth.currentUser.uid;
      // console.log(uid);
      const docRef = doc(db, "usuarios", uid);
      await updateDoc(docRef, {
        lista: arrayUnion({
          id,
          poster_path,
        }),
      });
    } else {
      Swal.fire("Por favor loguear para guardar");
    }
  };

  return (
    <>
      <div className="bg-dark p-1">
        <br />
        <h3 className="text-center text-light pt-1">Resultado de busqueda</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 p-1">
          {pelis.map((item, index) => (
            <div key={index} className="card bg-secondary p-1">
              <img
                className="card-img-top p-1"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                data-dato={index}
                onClick={verDetalle}
                alt={item.original_title}
              />
              <button
                className="m-2 p-1 btn btn-success btn-badge"
                type="button"
                onClick={agregarLista}
                data-id={item.id}
                data-poster_path={item.poster_path}>
                + lista
              </button>
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

export default SearchResults;
