import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase";
import {ListaContext} from './contextLista'
import { useContext } from "react";
import Swal from "sweetalert2";


// para que funcione siempre tiene que recibir el id a eliminar

function BtEliminarDeLista(data) {
  const [lista, setLista] = useContext(ListaContext);
  let nuevaLista = [];

  // elimina de lista
  const eliminarDeLista = () => {
    let id = data.id;
    if (lista.length > 1) {
      nuevaLista = lista.filter((list) => list.id !== id);
      setLista(nuevaLista);
      eliminarDeDB();
      console.log("nueva", nuevaLista);
      console.log("lista", lista);
    } else {
      setLista([]);
      // eslint-disable-next-line no-unused-expressions
      nuevaLista.shift;
      eliminarDeDB();
      console.log("nueva vacia", nuevaLista);
    }
  };

  // elimina de DB
  const eliminarDeDB = () => {
    const auth = getAuth();
    console.log("llego a eliminar", lista);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        const docRef = doc(db, "usuarios", uid);
        await updateDoc(docRef, {
          lista: nuevaLista,
        }).then(Swal.fire({
          icon: 'success',
          title: 'Eliminada de la lista',
          showConfirmButton: false,
          timer: 1500
        }));
      } else {
        Swal.fire("Por favor loguear para guardar");
      }
    });
  };

  
  return (
    <>
      <button type="button" onClick={eliminarDeLista}>
        - lista
      </button>
    </>
  );
}

export default BtEliminarDeLista;
