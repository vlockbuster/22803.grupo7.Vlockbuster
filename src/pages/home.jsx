import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
/* para usar la variable de estado hay que importar las 2 de arriba e 
instanciarla como en la linea 8 y luego usarla */

 const Home = () => {

  const {authUser} = useContext(UserContext);
  return (
    <>
    <div>
    <h1>  home   </h1> 
    {authUser && (<p>{`Usuario ${authUser.email}`}</p> )}
    
    </div>
    </>
  )
}

export default Home;