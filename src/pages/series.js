import {Consultas} from "../componentes/peliculas/consulta";
import VerSeries from "../componentes/peliculas/series";
import Carrusel from "../componentes/Carrusel";

 const Series = () => {
  const props = { 
    tipo: "tv",
    genero:"comedia"}
const peli = Consultas(props);
   return (<>
  {/*  
   <div className="bg-dark p-1 mt-0 ">
     <h2 className="text-white text-center">Comedia</h2>
    <div className="d-flex justify-content-center">
    <Carrusel lista={peli}/>
    </div>
    </div>
   */}
     <VerSeries/>
   </>
  )
}

export default Series;
