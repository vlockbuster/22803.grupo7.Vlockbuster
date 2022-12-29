import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';

// estado del usuario
function User() {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  
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
      await signOut(auth).then(() => { navigate('/') });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {authUser ? (
        <>
          <p className="m-2 p-1">{`logueado ${authUser.email}`}</p>
          <button className="btn btn-secondary btn-badge m-2 p-1" onClick={desloguear}>Log Out</button>
        </>
      ) : (
        <p className="m-2 p-1">Deslogueado</p>
      )}
    </div>
  );
}

export default User;
