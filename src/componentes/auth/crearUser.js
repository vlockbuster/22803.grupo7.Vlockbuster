import React, { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import Swal from "sweetalert2/dist/sweetalert2.all.js";

function CrearUser() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // creacion de usuario en firebase
  const crearUsuario = async (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(() => {
        sendEmailVerification(auth.currentUser);
        Swal.fire(
          `En breve recibiras un email a ${email} para validar tu cuenta`
        );
      });
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        Swal.fire(`El email ${email} ya esta en uso`);
      } else if (error.code === "auth/weak-password") {
        Swal.fire("El password debe contener un minimo de 6 caracteres");
      } else if (error.code) {
        Swal.fire("Un error a ocurrido");
      }
    }
  };
  //  reset usuario
  const reset = async () => {
    const { value: email } = await Swal.fire({
      title: "Ingrese su email",
      input: "email",
      inputPlaceholder: "email",
    });
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Swal.fire(
            `En breve recibiras un email a ${email} para resetear tu password`
          );
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            Swal.fire(
              `En breve recibiras un email a ${email} para resetear tu password`
            );
          } else {
            console.log(error);
            Swal.fire(`Un error a ocurrido`);
          }
        });
    }
  };

  return (
    <div>
      Registrar Usuario
      <form onSubmit={crearUsuario}>
        <label htmlFor="email"></label>
        <input
          type="text"
          placeholder="Ingrese email"
          ref={emailRef}
          autoComplete="username"
          required
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="Ingrese password"
          autoComplete="current-password"
          ref={passwordRef}
          required
        />
        <button type="submit">Registrar Usuario</button>
      </form>
      <p onClick={reset}>
        Olvide mi password
      </p>
    </div>
  );
}

export default CrearUser;
