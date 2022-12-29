import { useContext } from "react";
import MiLista from "../componentes/peliculas/miLista";
import { UserContext } from "../context/UserProvider";
/* para usar la variable de estado hay que importar las 2 de arriba e 
instanciarla como en la linea 8 y luego usarla */

 const MiListaPage = () => {

  const {authUser} = useContext(UserContext);
  return (
    <>
    <div>
      <h1> 
      {authUser && (<p>{`Bienvenido ${authUser.email}`}</p> )}
      </h1> 
    </div>
    <MiLista/>
    </>
  )
}
export default MiListaPage;