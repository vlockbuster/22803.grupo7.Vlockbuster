import CrearUser from "../componentes/auth/crearUser"
import Login from "../componentes/auth/login"
import User from "../componentes/auth/user"

 const LoginPages  = () => {
  return (
    
      <div>
    <br /><br /><br /><br /><br />
      <br />
      <Login />
           <br />
      <User/>
            <br />
      <CrearUser/>
    </div>
  )
}

export default LoginPages
;