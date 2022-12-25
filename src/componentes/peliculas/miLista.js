import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";

function MiLista() {
  const [lista, setLista] = useState([]);
  let nuevaLista = [];

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
              // console.log(docu.data().lista);
              setLista(listaok);
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
    <div className=" bg-dark">
      <h3 className="text-light text-center">Mi lista</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {lista.map((item) => (
          <div key={item.id} className="card bg-secondary my-2">
            <p>{item.id}</p>
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              data-id={item.id}
              //   onClick={verDetalle}
              alt={item.original_title}
            />
            <button className="m-2 p-1 btn btn-success btn-badge"type="button" onClick={eliminarDeLista} data-id={item.id}>
              - lista
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiLista;
