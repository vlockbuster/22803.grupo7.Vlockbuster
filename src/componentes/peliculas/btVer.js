import React from "react";
import { useNavigate } from 'react-router-dom'

// para utilizarlo se importa ej import BtVer from './btVer' y se pone en el render como por ej  <BtVer id={idpeli} />  idpeli es el id de la pelicula o serie


function BtVer(id) {
    const key = "e4e0f9c7c990f3921d36b5095affbe99"
    const navigate = useNavigate();

    const video = async () => {
        console.log("llego id", id.id)
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id.id}?api_key=${key}&append_to_response=videos`
        );
        let data = await response.json();
        let idVideo = data.videos.results[0].key
        navigate(`/watch/${idVideo}`)
    }


    return (
        <>
            <button type="button" onClick={video}>
                Ver
            </button>
        </>
    )
}

export default BtVer