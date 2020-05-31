import React, { useContext, useEffect } from "react"
import { Redirect } from "react-router-dom"
import { AuthContext } from './../context/authentification/authContext';

export const Logout = () => {
    const { autoLogout } = useContext(AuthContext)
    
    useEffect(() => {
       autoLogout()
    })

  return <Redirect to="/" />
}
