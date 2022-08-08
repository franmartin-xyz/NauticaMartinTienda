import React, { useState } from 'react'
export const userLoginContext = React.createContext([]);
const LoginContext = (props) => {
    const [user,setUser]=useState({});

  return (
    <userLoginContext.Provider value={{user, setUser}}>
        {props.children}
    </userLoginContext.Provider>
  )
}

export default LoginContext