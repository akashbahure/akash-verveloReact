import React, { useState } from 'react'

interface User{
    name:string;
    age:number;
}

const ConditinalExample : React.FC = () => {
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const [user, setUser] =useState<User | null>(null);

    const handleLogin =()=>{
        setUser({name:"Akash", age:24})
        setIsLoggedIn(true);
    };

    const handleLogout=()=>{
        setUser(null);
        setIsLoggedIn(false)
    }

  return (
    <>
    <div className="box">
        <h2>conditional rendering example</h2>

        {
          isLoggedIn ? (
            <p>Welcome back , {user?.name}</p>
          )  : (
            <p>Please log in to continue</p>
          )
        }

        {isLoggedIn && <p>Your age is, {user?.age}</p>  }

        <button onClick={isLoggedIn ? handleLogout : handleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
        </button>
    </div>
    </>
  )
}

export default ConditinalExample
