import { useParams } from "react-router-dom"
import PeliculaDetalle from "../componentes/peliculas/PeliculaDetalle"


const DetalleId = () => {
  
    const param  = useParams();
    return (
    <div>
        <PeliculaDetalle/>
    </div>
  )
}

export default DetalleId