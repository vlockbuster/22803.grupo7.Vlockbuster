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
    <Carrusel lista={peli}/>
    <MasVistas/>
  
    </>
  )
}

export default Peliculas;