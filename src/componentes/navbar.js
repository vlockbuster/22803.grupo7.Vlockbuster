import { NavLink } from "react-router-dom";
import { Search } from "./Search";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink to={"/"} className="navbar-brand">
          <img src="popcorn.png" width={40}></img>
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
              <NavLink to={"/Categorias"} className="nav-link">
                Categorias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Contacto"} className="nav-link">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Login"} className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
