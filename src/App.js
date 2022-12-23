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


const App = () => {
  return (
    <div className="App bg-secondary">

      <BrowserRouter>
      <header className="App-header">
        <NavBar/>
      </header>
        <br />
        <br />
        <br />
        <br />    
        <CrearUser />
        <br />
        <Login />
        <br />
        <User />
        <br />
        <MiLista />
        <br />
        <MasVistas />
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/peliculas' element={<Peliculas/>}/>
        <Route path='/categorias' element={<Categorias/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     </BrowserRouter>    
    </div>
  );
}

export default App;
