import { createContext,useState } from "react";

const Context = createContext();


const ContextApi = ({children}) => {
    const [user,setUser]= useState({})
  return (
    <Context.Provider value={{
        user,setUser
    }}>
        {children}
    </Context.Provider>
  )
}

export  {Context,ContextApi};