import { useParams } from "react-router-dom"

const DetalleId = () => {

  const param = useParams();
  return (
    <>
      <h1>Detalles pagina {param.id}</h1>
    </>
  )
}

export default DetalleId