import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Search } from "./Search";

import './navbar.css'

const NavBar = () => {
  const { authUser } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink to={"/"} className="navbar-brand">
          <img className="" src="./popcorn.png" width={40} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to={"/Peliculas"} className="nav-link">
                Peliculas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Series"} className="nav-link">
                Series
              </NavLink>
            </li>
            <li className="nav-item">
              {!authUser ? (
                ""
              ) : (
                <NavLink to={"/MiLista"} className="nav-link">
                  MiLista
                </NavLink>
              )}
            </li>

            <li className="nav-item">
              {!authUser ? (
                <NavLink to={"/Login"} className="nav-link">
                  Login
                </NavLink>
              ) : (
                <NavLink
                  to={"/Login"}
                  className="nav-link">{`Bienvenido ${authUser.email}`}</NavLink>
              )}
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
