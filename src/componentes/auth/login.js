import "../login.css"
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log("currente",auth.currentUser)
  // login con usuario en firebase
  const loginEmail = async (e) => {
    e.preventDefault();
    desloguear()
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).then(async () => {
          if (!auth.currentUser.emailVerified) {
            Swal.fire("Por favor validar el email")
            try {
              const docRef = doc(db, "usuarios", auth.currentUser.uid);
              const data = {
                uid: auth.currentUser.uid,
                authProvider: "local",
                email: auth.currentUser.email
              }
              await setDoc(docRef, data)
            } catch (error) {
              Swal.fire("Un error a ocurrido");
              console.log(error)
            }
          }else{
            navigate('/MiLista')
          }
        });
    } catch (error) {
      console.log(error);
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        Swal.fire("El email y/o password es incorrecto");
      } else {
        Swal.fire("Un error a ocurrido");
      }
    }
  };

  // login con google firebase
  const loginGoogle = async () => {
    desloguear()
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider).then(() => { navigate('/MiLista') });
      const docRef = doc(db, "usuarios", auth.currentUser.uid);
      const data = {
        uid: auth.currentUser.uid,
        authProvider: "google",
        email: auth.currentUser.email,
      };
      try {
        await updateDoc(docRef, data);
      } catch (error) {
        if (error.code === "not-found") {
          await setDoc(docRef, data);
        }
      }
    } catch (error) {
      alert(error);
    }
  };
  // logout
  const desloguear = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container-login">
      <p className="m-2 p-1">login</p>
      <form onSubmit={loginEmail} style={{backgroundColor:'#4d4c4c'}} >
        <label htmlFor="email"></label>
        <input className="m-2 p-1"
          type="text"
          placeholder="Ingrese email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password"></label>
        <input className="m-2 p-1"
          type="password"
          autoComplete="current-password"
          placeholder="Ingrese password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        <button  id="boton-login" className="m-2 p-1 btn btn-dark" type="submit">Login</button>
      
      </form>
      <div>
      <button id="boton-google" className="m-2 p-1 btn btn-warning" type="button" onClick={loginGoogle}>
        
        Login Google
      </button>
      </div>
    </div>
  );
}

export default Login;
