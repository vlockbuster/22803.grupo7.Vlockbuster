import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";

const RequireAuth = ({children}) => { 
    const {authUser} = useContext(UserContext)
    if(!authUser){
        return <Navigate to="login" />
    }
    return children
}

export default RequireAuth;