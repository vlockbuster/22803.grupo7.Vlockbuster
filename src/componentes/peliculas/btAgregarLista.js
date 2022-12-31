import React, { useContext } from "react";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { ListaContext } from './contextLista'

// para que funciones siempre tiene que recibir los parametros id, poster_path y contenido

function BtAgregarLista(data) {
  const navigate = useNavigate();
  const [lista, setLista] = useContext(ListaContext);

  // agregar a lista en firebase
  const agregarLista = async () => {
    let id = data.id;
    let poster_path = data.poster_path;
    let contenido = data.contenido
    // console.log("lista:", id, poster_path);
    if (auth.currentUser) {
      let uid = auth.currentUser.uid;
      // console.log(data);
      // console.log(lista)
      setLista((actuales) => [...actuales, data])
      const docRef = doc(db, "usuarios", uid);
      await updateDoc(docRef, {
        lista: arrayUnion({
          id,
          poster_path,
          contenido
        }),
      }).then(Swal.fire({
        icon: 'success',
        title: 'Agregado a la lista',
        showConfirmButton: false,
        timer: 1500
      }))
        ;
    } else {
      Swal.fire({
        html: "Por favor loguear para guardar",
        confirmButtonText: 'Login'
      })
        .then(function (inputvalue) {
          if (inputvalue.isConfirmed) {
            navigate('/login');
          } else if (inputvalue.isCancel) {
            Swal.fire('')
          }
        });
    }
  };

  return (
    <>
      <button type="button" onClick={agregarLista}>
        + lista
      </button>
    </>
  );
}

export default BtAgregarLista;
