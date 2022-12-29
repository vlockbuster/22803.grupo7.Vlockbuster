import { createContext, useState } from "react";
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext()

const UserProvider = (props)=>{

    const [authUser, setAuthUser] = useState(null);

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

    
    return (
        <UserContext.Provider value={{authUser, setAuthUser}}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;