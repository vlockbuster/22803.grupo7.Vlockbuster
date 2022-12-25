import { useContext } from "react";
import { UserContext } from "../context/UserProvider";


 const Home = () => {

  const {authUser} = useContext(UserContext);
  return (
    <>
    <div>
    <h1>  home   </h1> 
    {authUser && (<p>{`Usuario ${authUser.email}`}</p> )}
    
    </div>
    </>
  )
}

export default Home;