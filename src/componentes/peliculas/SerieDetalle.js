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

function SerieDetalle() {

  const [serie, setSerie] = useState(null);
  //const [enLista, setEnLista] = useState( null);
  const key = "e4e0f9c7c990f3921d36b5095affbe99"
 
  let { id } = useParams();

  useEffect(() => {

        fetch( `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=es-ES`)
            
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
            setSerie(json);

          })
          
            //.then( console.log( serie ))
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

console.log( e) ;
  
  html2canvas(document.querySelector("#poster-" + e.target.getAttribute("data-id") ), {
      allowTaint: true,
      useCORS: true,
    }).then(function(canvas) {
    
      let img = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");
      link.download = e.target.getAttribute("data-serie")+".jpg"; 
      link.href = img;
      link.click();
  });

}
  

 


return (
    <main>
        {!serie 
        ?
          <div>Cargando.....</div>
        :
        <div>
        <div className="row">
          <div className="col-md-4 col-sm-12 p-5 text-center">  
            
              <div id={"poster-"+ serie.id}> 

                <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500${ ! serie ? "" : serie.poster_path}`}
                data-id={ ! serie ? "" : serie.id}

                alt={ ! serie ? "" : serie.original_title}
                />
            </div>
            <button className="mt-5 btn btn-success btn-badge w-100" key={serie.id} type="button" onClick={descargarPoster} data-serie={serie.name} data-id={serie.id}>
        Descargar Poster
        </button>
          </div>
          <div className="col-md-8 col-sm-12 p-5" >
            <h1>{serie.name}</h1>
            <p>
            {serie.overview}
            </p>
            <p>
              <b>G&eacute;neros : </b>{serie.genres.map( item => item.name ).join( " / ") }
            </p>
            <p>
              <b>Lanzamiento : </b>{ new Date( serie.first_air_date ).toLocaleString( "es-AR" , {dateStyle:"medium"}) }
            </p>
            <p>
              <b>Temporadas : </b>{ serie.number_of_seasons }
            </p>
            <p>
              <b>Episodios : </b>{ serie.number_of_episodes }
            </p>
            <p>
              <b>Productoras : </b>{serie.production_companies.map( item => item.name ).join( " / ") }
            </p>
            
            <h2>Detalle Temporadas</h2>
            {
                serie.seasons.map((item, index) => (
                  <div className="row">
                    {  item.poster_path != null &&
                    <div className="col-md-4 col-sm-12 p-5 text-center" >
                    <div id={"poster-"+ item.id}> 
                      <img
                          className="img-fluid"
                          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                          data-id={item.id}
                          alt={item.name }
                      />
                    </div>
                      <button className="mt-5 btn btn-success btn-badge w-100" type="button" key={item.id} onClick={descargarPoster}  data-id={item.id} data-serie={serie.name + " " + item.name}>
                          Descargar Poster
                      </button>
                    </div>
                    }
                    <div className="col-md-8 col-sm-12 p-5" >
                      <p>
                        {item.name}
                      </p>
                      <p>
                        {item.overview}
                      </p>
                      <p>
                        <b>Lanzamiento : </b>{ new Date( item.air_date ).toLocaleString( "es-AR" , {dateStyle:"medium"}) }
                      </p>
                      
                      <p>
                        <b>Episodios : </b>{ item.episode_count }
                      </p>
                   
                      </div>
                  </div>

              ))
            }

            

            
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        

        {/* ! enLista ?

        <button
        className="m-2 p-1 btn btn-success btn-badge"
        type="button"

        data-id={serie.id}
        >
        + lista
        </button>
        : 
        <button className="m-2 p-1 btn btn-success btn-badge"type="button"  data-id={serie.id}>
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

export default SerieDetalle;
