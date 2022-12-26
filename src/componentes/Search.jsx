import { useEffect, useState } from "react";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useConsulta } from "../hooks/useConsulta";

export const Search = () => {
  const [searchText, setSearchText] = useState("");
  const query = useConsulta();
  const search = query.get("search");

  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/?search=" + searchText, { replace: true });
  };
  return (
    <form
      className={styles.busquedaContenedor}
      role="search"
      onSubmit={handleSubmit}>
      <div className={styles.CajaBusqueda}>
        <FaSearch size={20} />
        <input
          className={`text-light  ${styles.inputBusqueda}`}
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Buscar"
          aria-label="Search"
        />
      </div>
    </form>
  );
};
