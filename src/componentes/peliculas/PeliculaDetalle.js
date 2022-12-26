import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { auth, db } from "../../firebase";
import { doc, getDoc, updateDoc, arrayUnion, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import html2canvas from 'html2canvas';

//TODO : exportar el poster <-- ver como trabajar con una version mas grande de la imange
//TODO: diseño.....

function PeliculaDetalle() {

  const [pelicula, setPelicula] = useState(null);
  const [enLista, setEnLista] = useState( null);
  const key = "e4e0f9c7c990f3921d36b5095affbe99"
  // const key = process.env.REACT_APP_KEY_TMDB

  let { id } = useParams();


  useEffect(() => {

    if( ! pelicula ){
        fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=es-ES`)
            
          .then( data  => {
            if (data.ok) {
              return data.json();
            }
            else {
               return data.json()
                 .then((data) => {
                  console.log( data.status_message );
                   throw(data.status_message);
          
                   // if the error is an object and you just want to display some elements:
                  // throw(JSON.parse(text));
                 });
            }
          })
          //.then(data => data.json())
          .then(json => setPelicula(json))
            //.then( console.log( pelicula ))
            .catch(err =>alert('Solicitud fallida --> ' + err));    
    } 
}, []);


const descargarPoster = (e) => {

  html2canvas(document.querySelector("#posterPelicula"), {
      allowTaint: true,
      useCORS: true,
    }).then(function(canvas) {
    
      let img = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");
      link.download = e.target.getAttribute("data-pelicula")+".jpg"; 
      link.href = img;
      link.click();
  });

}
  
  const [lista, setLista] = useState([]);
  let nuevaLista = [];


  // agregar a lista en firebase
  const agregarLista = async (e) => {
    Swal.fire("Pendiente");
    /*
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
    */
  };

  // trae lista
  const traerLista = () => {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const docRef = doc(db, "usuarios", uid);
          const docu = await getDoc(docRef);
          try {
            let listaok = docu.data().lista;
            if (listaok) {
               console.log(docu.data().lista);
                setEnLista( false );
               for( let x in docu.data().lista ){
                  if( docu.data().lista[x].id == id ){
                    console.log( "LA TENGO");
                    setEnLista( true );
                  }
               }

            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  
  // elimina de lista
  const eliminarDeLista = (e) => {

    Swal.fire("Pendiente");
    /*
    let id = e.target.dataset.id;
    if (lista.length > 1) {
      setLista((listaAnterior) =>
        listaAnterior.filter((list) => list.id !== id)
      );
      nuevaLista = lista.filter((list) => list.id !== id);
      eliminarDeDB();
      // console.log("nueva", nuevaLista);
    } else {
      // : setLista(lista.shift)
      setLista([]);
      nuevaLista.shift();
      eliminarDeDB();
      // console.log("nueva vacia", nuevaLista);
    }
    // console.log(lista);
    */
  };

  // elimina de DB
  const eliminarDeDB = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        // console.log(uid);
        const docRef = doc(db, "usuarios", uid);
        await updateDoc(docRef, {
          lista: nuevaLista,
        });
        // console.log("actualizado");
      } else {
        Swal.fire("Por favor loguear para guardar");
      }
    });
  };

  useEffect(() => {
    traerLista();
  }, []);

return (
    <main>
    {!pelicula 
    ?
    <div>Cargando.....</div>
    :
    <div>
        <div className="row">
          <div className="col-md-3"  id="posterPelicula"> 
          
          <img
                  className="img-fluid"
                  src={`https://image.tmdb.org/t/p/w500${ ! pelicula ? "" : pelicula.poster_path}`}
                  data-id={ ! pelicula ? "" : pelicula.id}
                  
                  alt={ ! pelicula ? "" : pelicula.original_title}
        />
        </div>

        
        
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          <p>
            { ! pelicula ? "" : pelicula.title}
          </p><p>
          { ! pelicula ? "" : pelicula.overview}
          
          </p>

          { ! enLista ?

          <button
                    className="m-2 p-1 btn btn-success btn-badge"
                    type="button"
                    onClick={agregarLista}
                    data-id={pelicula.id}
                    >
                    + lista
          </button>
          : 
          <button className="m-2 p-1 btn btn-success btn-badge"type="button" onClick={eliminarDeLista} data-id={pelicula.id}>
                  - lista
            </button>
          }

<button className="m-2 p-1 btn btn-success btn-badge"type="button" onClick={descargarPoster} data-pelicula={ pelicula.title}>
                  Descargar Poster
            </button>
          <p>
            
          </p>
        </div>
    </div>
    }
    </main>
);
}

export default PeliculaDetalle;
