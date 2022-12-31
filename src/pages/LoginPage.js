import CrearUser from "../componentes/auth/crearUser"
import Login from "../componentes/auth/login"
import User from "../componentes/auth/user"
import { auth } from "../firebase";

const LoginPages = () => {
  return (

    <div className="row" style={{backgroundColor:'#4d4c4c'}}>

      
      


      {auth.currentUser
        ? <User />
        : <>
        <div className="col-md-6">
          <Login />
        </div>
        
        <div className="col-md-6">
          <CrearUser /> 
        </div>
            
        </>}
        
    </div>
  )
}

export default LoginPages
  ;