import React from 'react';
import './App.css';
import NavBar from './componentes/navbar';
import Home from './pages/home';
import Peliculas from './pages/peliculas';
import Categorias from './pages/categorias';
import Series from './pages/series';
import NotFound from './pages/notFound';
import {BrowserRouter, Route ,Routes} from 'react-router-dom';
import Login from "./componentes/auth/login";
import CrearUser from "./componentes/auth/crearUser";
import User from "./componentes/auth/user";
import MasVistas from "./componentes/peliculas/masVistas";
import MiLista from "./componentes/peliculas/miLista";
import Profile from './pages/Profile';
import UserProvider from './context/UserProvider';
import RequireAuth from './componentes/RequireAuth';
import Profiles from "./pages/Profile"

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        {/* Todo componente que se encuentre dentro de  UserProvider puede usar 
        la variable authUser en Home hay un ejemplo de como usarla 
        */}
      <BrowserRouter>
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
      {/* en profile esta el ejemplo para usar el carrusel solo se importa y se le manda 
      la peticion de la api con la variable lista */}
      <Profile />      
      <Routes>
        <Route path='/' element={ <RequireAuth> 
          {/* aca van los componentes que necesitan que el usuario este login  para eso se usa el componente <RequireAuth>*/}
          <Home/>  
        </RequireAuth>}/> 
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <br />
      <Peliculas/>
      <br />
      <MiLista />
      <br />
      <MasVistas />
      </div>
     </BrowserRouter>    
     </UserProvider>
    </div>
  );
}

export default App;
