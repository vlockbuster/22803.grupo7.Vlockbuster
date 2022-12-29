import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Peliculas = () => {
  const { authUser } = useContext(UserContext);

  return (
    <>
      <div>peliculas</div>
      <h2>{authUser ? "en linea" : "offline"}</h2>
    </>
  );
};

export default Peliculas;
