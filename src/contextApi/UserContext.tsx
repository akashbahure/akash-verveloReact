import React, { createContext, useState, type ReactNode } from 'react'


interface User{
    name:string;
    email:string;
}

interface UserContextType{
    user:User | null;
    setUser:React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext=createContext<UserContextType | null>(null);

export const  UserProvider: React.FC<{children:ReactNode}>=({children})=>{

    const [user, setUser] =useState<User |null>(null);

    return(
       <UserContext.Provider value={{user,setUser}}>
        {children}
       </UserContext.Provider>
    )
}