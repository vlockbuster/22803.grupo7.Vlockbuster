import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // login con usuario en firebase
  const loginEmail = async (e) => {
    e.preventDefault();
    try {
     await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!auth.currentUser.emailVerified) {
        Swal.fire("Por favor validar el email");
      }
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
    const provider = new GoogleAuthProvider();
    try {
    await signInWithPopup(auth, provider);
      // console.log(userCredential);
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

  return (
    <div className="bg-dark">
      <p className="m-2 p-1 text-light">login</p>
      <form onSubmit={loginEmail}>
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
        <button className="m-2 p-1 btn btn-secondary"type="submit">Login</button>
      </form>
      <br />
      <button className="m-2 p-1 btn btn-warning"type="button" onClick={loginGoogle}>
        Login Google
      </button>
    </div>
  );
}

export default Login;
