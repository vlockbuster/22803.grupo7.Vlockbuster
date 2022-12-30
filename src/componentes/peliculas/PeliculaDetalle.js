import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import html2canvas from 'html2canvas';
/*
import BtEliminar from "./btEliminarDeLista";
import BtAgregar from './btAgregarLista'
import { ListaContext } from "./contextLista";
*/

//TODO : exportar el poster <-- ver como trabajar con una version mas grande de la imange
//TODO: diseño.....
//TODO: Botones Agregar Eliminar

function PeliculaDetalle() {

  const [pelicula, setPelicula] = useState(null);
  //const [enLista, setEnLista] = useState( null);
  const key = "e4e0f9c7c990f3921d36b5095affbe99"
 
  let { id } = useParams();

  useEffect(() => {

        fetch( `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=es-ES`)
            
          .then( data  => {
            if (data.ok) {
              return data.json();
            }
            else {
               return data.json()
                 .then((data) => {
                  console.log( data.status_message );
                   throw(data.status_message);
          
                   // if the error is an object and you just want to display some elements:
                  // throw(JSON.parse(text));
                 });
            }
          })
          //.then(data => data.json())
          .then(json => {
            setPelicula(json);

          })
          
            //.then( console.log( pelicula ))
            .catch(err =>alert('Solicitud fallida --> ' + err));    
}, [id]);

/*
useEffect(() => {
  console.log( lista );
  for( let x in lista ){

    console.log( lista[x] );
    if(lista[x].id == id ){
      console.log( "LA TENGO");
      setEnLista( true );
    }
 }
}, [lista]);
*/

const descargarPoster = (e) => {

  html2canvas(document.querySelector("#posterPelicula"), {
      allowTaint: true,
      useCORS: true,
    }).then(function(canvas) {
    
      let img = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");
      link.download = e.target.getAttribute("data-pelicula")+".jpg"; 
      link.href = img;
      link.click();
  });

}
  

 


return (
    <main>
        {!pelicula 
        ?
          <div>Cargando.....</div>
        :
        <div>
        <div className="row">
          <div className="col-md-4 col-sm-12 p-5">  
            
              <div id="posterPelicula"> 

                <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500${ ! pelicula ? "" : pelicula.poster_path}`}
                data-id={ ! pelicula ? "" : pelicula.id}

                alt={ ! pelicula ? "" : pelicula.original_title}
                />
            </div>
            <button className="mt-5 btn btn-success btn-badge w-100"type="button" onClick={descargarPoster} data-pelicula={ pelicula.title}>
        Descargar Poster
        </button>
          </div>
          <div className="col-md-8 col-sm-12 p-5" >
            <h1>{pelicula.title}</h1>
            <p>
            {pelicula.overview}
            </p>
            <p>
              <b>G&eacute;neros : </b>{pelicula.genres.map( item => item.name ).join( " / ") }
            </p>
            <p>
              <b>Lanzamiento : </b>{ new Date( pelicula.release_date ).toLocaleString( "es-AR" , {dateStyle:"medium"}) }
            </p>
            <p>
              <b>Productoras : </b>{pelicula.production_companies.map( item => item.name ).join( " / ") }
            </p>
            

            
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        

        {/* ! enLista ?

        <button
        className="m-2 p-1 btn btn-success btn-badge"
        type="button"

        data-id={pelicula.id}
        >
        + lista
        </button>
        : 
        <button className="m-2 p-1 btn btn-success btn-badge"type="button"  data-id={pelicula.id}>
        - lista
        </button>
        */ }

        
        <p>

        </p>
        </div>
        </div>
        }
    </main>
);
}

export default PeliculaDetalle;
