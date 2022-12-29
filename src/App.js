import './App.css';
import NavBar from './componentes/navbar';
import Home from './pages/home';
import Peliculas from './pages/peliculas';
import Series from './pages/series';
import NotFound from './pages/notFound';
import { Route ,Routes} from 'react-router-dom';
import Login from "./componentes/auth/login";
import CrearUser from "./componentes/auth/crearUser";
import User from "./componentes/auth/user";
import MasVistas from "./componentes/peliculas/masVistas";
import RequireAuth from './componentes/RequireAuth';
import MiListaPage from './pages/miLista';
import LoginPages from './pages/LoginPage'

const App = () => {
  
  /* Todo componente que se encuentre dentro de app 
      puede usar  la variable authUser */
  return (

<div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
    <div>
    <br /><br /><br /><br /><br />
      <br />
      <Login />
      <br />
      <User />
      <br />
      <CrearUser />
      {/* en home esta el ejemplo para usar el carrusel solo se importa y se le manda 
      la peticion de la api con la variable lista */}
      <Routes>
        <Route element={ <RequireAuth/>}> 
          {/* aca van los paginas que necesitan que el usuario este login  para eso 
          se usa el componente <RequireAuth>*/}
          {/* tambiensirve para proteger componentes 
          <RequireAuth/>
          <componente a proteger/>
          <RequireAuth/>
          */}
          <Route path='/MiLista' element={<MiListaPage/>}/>
        </Route> 
        <Route path='/' element={<Home/>}/>
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/Login' element={<LoginPages/>}/>
        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <br />
      <br />
        <MasVistas />
      <br />
      
      </div>
    </div>
  );
}

export default App;
