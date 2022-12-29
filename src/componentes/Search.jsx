import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useConsulta } from "../hooks/useConsulta";
import { useState } from "react";

export const Search = () => {
  const [textInput, setTextInput] = useState("");
  const query = useConsulta();

  const search = query.get("search");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setTextInput(value);
    navigate("/?search=" + value, { replace: true });
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
          type="search"
          value={textInput}
          onChange={handleInput}
          placeholder="Buscar"
          aria-label="Search"
        />
      </div>
    </form>
  );
};
