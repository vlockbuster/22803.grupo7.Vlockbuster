import { useParams } from "react-router-dom"
import Reproductor from '../componentes/peliculas/reproductor'

const DetalleId = () => {

  const param = useParams();
  return (
    <>
      <h1>Detalles pagina {param.id}</h1>
      <Reproductor id={param.id} />
    </>
  )
}

export default DetalleId