import * as bootstrap from 'bootstrap'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import UserProvider from './context/UserProvider';
import ListaContextProvider from "./componentes/peliculas/contextLista";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <ListaContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ListaContextProvider>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
