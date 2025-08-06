import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Login :React.FC= () => {
 const userContext=useContext(UserContext);
 if(!userContext) return null;

 const {setUser}=userContext;

 const handleLogin=()=>{
    setUser({name:"akash",email:"ak@gmail.com"})
 }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
