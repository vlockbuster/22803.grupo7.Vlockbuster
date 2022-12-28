import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({children}) => { 
    const {authUser} = useContext(UserContext)
    if(!authUser){
        return <Navigate to="/login" />
    }

    return children ? children : <Outlet/>
}

export default RequireAuth;