/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BtEliminar from "./btEliminarDeLista";
import { ListaContext } from "./contextLista";
import { Link } from 'react-router-dom'
import BtVer from './btVer'


function MiLista() {
  const [lista, setLista] = useContext(ListaContext)

  // trae lista
  const traerLista = () => {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          const docRef = doc(db, "usuarios", uid);
          const docu = await getDoc(docRef);
          try {
            let listaok = docu.data().lista;
            if (listaok) {
              setLista(listaok);
              console.log(listaok.poster_path)
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // trae lista
    traerLista();
  },[]);

  return (
    <div className=" bg-dark">
      <h3 className="text-light text-center p-3">Mi lista</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6 g-3">
        {lista.map((item) => (
          <div key={item.id} className="card bg-secondary my-2">
            <Link to={`/detalle/${item.id}`}>
            <img
              className="card-img-top"
              // src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              src={item.poster_path == undefined
              ? `./popcorn.png`
              : `https://image.tmdb.org/t/p/w500${item.poster_path}`}
              data-id={item.id}
              alt={item.original_title}
            />
            </Link>
            <BtEliminar id={item.id} />
            <BtVer id={item.id} contenido={item.contenido} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiLista;
