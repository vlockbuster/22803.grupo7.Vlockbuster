import { useParams } from "react-router-dom"


const Watch = () => {
  
    const param  = useParams();
    return (
    <div>
        <h1>ver peli   {param.id}</h1>
    </div>
  )
}

export default Watch