import './App.css';
import { Route ,Routes , Link} from 'react-router-dom';
//NavBar
import NavBar from './componentes/navbar';
//componente para usar autentificacion
import RequireAuth from './componentes/RequireAuth';
//paginas
import Home from './pages/home';
import Peliculas from './pages/peliculas';
import Series from './pages/series';
import NotFound from './pages/notFound';
import MiListaPage from './pages/miLista';
import LoginPages from './pages/LoginPage'
import DetalleId from './pages/detalleId';
import Watch from './pages/watch';
import DetalleTV from './pages/detalleTV';
import Footer from './componentes/footer';

const App = () => {
  
  /* Todo componente que se encuentre dentro de app 
      puede usar  la variable authUser */
  return (

<div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      
    <br /><br /><br /> 
    {/* para usar este link tenes que importar  import { Link} from 'react-router-dom';*/}

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
        <Route path='/detalle/:id' element={<DetalleId/>}/>
        <Route path='/watch/:id' element={<Watch/>}/>
        <Route path='/detalleTv/:id' element={<DetalleTV/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <footer>
          <Footer/>
      </footer>
      </div>
   
  );
}

export default App;
