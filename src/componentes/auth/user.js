import "../user.css"
import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import { ListaContext } from "../peliculas/contextLista";

// estado del usuario
function User() {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [lista, setLista] = useContext(ListaContext)
  

  useEffect(() => {
    const logueado = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      logueado();
    };
  }, []);

  const desloguear = async () => {
    try {
      await signOut(auth).then(() => {
        setLista([])
        navigate('/')
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (

    <div className="container-user>
      {auth.currentUser ? (

        <>
          <p className="m-2 p-1">{`logueado ${auth.currentUser.email}`}</p>
          <button className="btn btn-secondary btn-badge m-2 p-1" onClick={desloguear}>Log Out</button>
        </>
      ) : (
        <p className="m-2 p-1">Deslogueado</p>
      )}
    </div>
  );
}

export default User;
