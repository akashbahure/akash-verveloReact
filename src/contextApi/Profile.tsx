import React, { useContext } from 'react'
import { UserContext } from './UserContext'


const Profile :React.FC= () => {
  
    const userContext=useContext(UserContext)
    if(!userContext) return null;

    const {user}=userContext;

    if(!user) return <p>No user logged in!</p>

  return (
    <div>
        <h2>Welcome {user.name}</h2>
        <p>Email: {user.email}</p>
      
    </div>
  )
}

export default Profile
