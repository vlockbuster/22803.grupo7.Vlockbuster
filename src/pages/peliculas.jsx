import Carrusel from "../componentes/Carrusel";
import {Consultas} from "../componentes/peliculas/consulta";
import MasVistas from "../componentes/peliculas/masVistas";

 const Peliculas = () => {
  const props = { 
    tipo: "movie",
    genero:"drama"}
const peli = Consultas(props);
  return (
    <>
          <div className="bg-dark p-1 mt-0 text ali">
          <h2 className="text-white text-center">Drama</h2>
          <div className="d-flex justify-content-center">
    <Carrusel lista={peli}/>
    </div>
    </div>
    <MasVistas/>
  
    </>
  )
}

export default Peliculas;