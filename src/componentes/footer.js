import { AiOutlineGithub, AiOutlineCopyright,AiOutlineInstagram,
    AiOutlineLinkedin,AiOutlineFacebook,
        } from "react-icons/ai";
import {NavLink} from "react-router-dom"

import React from 'react'

const Footer = () => {
  return (
<>
    <div className="row"> 
        <NavLink to={"/"}  className="col-2 justify-content-center d-flex align-items-center">
        <img className="rounded-circle" src="./popcorn.png" width={100}   alt="logo" />
        </NavLink>
        <div className="col-5 d-flex justify-content-center ">
          <ul class="list-group list-group-flush h5  ">
            <h3 className="text-center text-light bg-dark">Redes </h3>
            <li class="list-group-item text-light bg-dark"><AiOutlineGithub className="h1 p-0 m-0" /> Repositorio</li>
            <li class="list-group-item text-light bg-dark"><AiOutlineLinkedin className="h1 p-0 m-0"/> Linkedin</li>
            <li class="list-group-item text-light bg-dark"><AiOutlineInstagram className="h1 p-0 m-0" /> Instagram</li>
            <li class="list-group-item text-light bg-dark"><AiOutlineFacebook className="h1 p-0 m-0" /> Facebook</li>
          </ul>
        </div> 
        <div className="col-5 d-flex justify-content-center">
          <ul class="list-group list-group-flush h5 ">
            <h3 className="text-center text-light bg-dark">Menu </h3>
            <li class="list-group-item text-light bg-dark"> <NavLink to={"/Peliculas"} className="nav-link">
                Peliculas
              </NavLink></li>
            <li class="list-group-item text-light bg-dark"> <NavLink to={"/Series"} className="nav-link">
                Series
              </NavLink></li>
            <li class="list-group-item text-light bg-dark"> <NavLink to={"/MiLista"} className="nav-link">
                  MiLista
                </NavLink></li>
            <li class="list-group-item text-light bg-dark"> <NavLink to={"/"} className="nav-link">
                Home
              </NavLink></li>
            <li class="list-group-item text-light bg-dark"> <NavLink to={"/Login"} className="nav-link">
            Iniciar sesión
                </NavLink></li>
          </ul>
        </div> 
    </div>
        <h6 className="text-center">Copyright 2021 <AiOutlineCopyright/>Grupo7 Comisión 22803 </h6>
</>
  )
}

export default Footer