import { useParams } from "react-router-dom"
import Reproductor from '../componentes/peliculas/reproductor'

const Watch = () => {

  const param = useParams();
  return (
    <>
      <Reproductor id={param.id} /></>
  )
}

export default Watch