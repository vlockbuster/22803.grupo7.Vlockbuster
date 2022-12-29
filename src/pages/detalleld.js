import { useParams } from "react-router-dom";

const DetalleId = () => {
  const param = useParams();
  return (
    <div>
      <h1>Detalles pagina {param.id}</h1>
    </div>
  );
};

export default DetalleId;
