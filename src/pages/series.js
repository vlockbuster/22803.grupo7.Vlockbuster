import {Consultas} from "../componentes/peliculas/consulta";
import VerSeries from "../componentes/peliculas/series";
import Carrusel from "../componentes/Carrusel";

 const Series = () => {
  const props = { 
    tipo: "tv",
    genero:"comedia"}
const peli = Consultas(props);
   return (<>
  {/*  <Carrusel2 lista={peli}/> */}
   <div className="bg-dark p-1 mt-0 text ali">
     <h2 className="text-white text-center">Comedia</h2>
    </div>
    <Carrusel lista={peli}/>
   {/*  <Carrusel1 lista={peli}/> */}
     <VerSeries/>
   </>
  )
}

export default Series;
