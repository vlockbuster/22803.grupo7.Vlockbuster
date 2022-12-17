import './App.css';
import Login from "./componentes/auth/login";
import CrearUser from "./componentes/auth/crearUser";
import User from "./componentes/auth/user";
import MasVistas from "./componentes/peliculas/masVistas";
import MiLista from "./componentes/peliculas/miLista";

function App() {
  return (
    <div className="App">
      <CrearUser />
      <br />
      <Login />
      <br />
      <User />
      <br />
      <MiLista />
      <br />
      <MasVistas />
    </div>
  );
}

export default App;
