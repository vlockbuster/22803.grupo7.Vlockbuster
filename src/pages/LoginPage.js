import CrearUser from "../componentes/auth/crearUser"
import Login from "../componentes/auth/login"
import User from "../componentes/auth/user"
import { auth } from "../firebase";

const LoginPages = () => {
  return (

    <div className="">
      
      {auth.currentUser
        ? <User />
        :<> <Login />
        <CrearUser /> 
        <br />    
        </>}
        
      <br />
    </div>
  )
}

export default LoginPages
  ;