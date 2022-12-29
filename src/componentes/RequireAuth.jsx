import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";

const RequireAuth = ({ children }) => {
  const { authUser } = useContext(UserContext);
  if (!authUser) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "iniciá  sesión para ver tu lista ",
    });
    return <Navigate to="/login" />;
  }

  return children ? children : <Outlet />;
};

export default RequireAuth;
