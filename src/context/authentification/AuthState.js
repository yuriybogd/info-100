import React, { useReducer } from "react"
import Axios from "axios"
import { authReducer } from "./authReducer"
import { AUTH_SUCCESS } from "../types"
import { AUTH_LOGOUT } from "./../types"
import { AuthContext } from "./authContext"

export const AuthState = ({ children }) => {
  const initialState = {
    token: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const authentication = async (email, password, isLogin) => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    }

    //url from Firebase
    const APIKey = "AIzaSyBFk9wJ3MK9GJrHetTKNyRvJ_e1fYnV0hs"
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + APIKey

    //choose correct url depends of isLogin
    if (isLogin)
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        APIKey

    try {
      const response = await Axios.post(url, authData)
      const data = response.data

      const expirationDate = new Date(
        new Date().getTime() + data.expiresIn * 1000
      )

      localStorage.setItem("token", data.idToken)
      localStorage.setItem("userId", data.localId)
      localStorage.setItem("expirationDate", expirationDate)

      authSuccess(data.idToken)
      autoLogout(data.expiresIn)
    } catch (e) {
      console.error(e)
    }
  }

  const autoLogout = (time) => {
    setTimeout(() => {
      dispatch({ type: AUTH_LOGOUT })
      logout()
    }, time * 1000)
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("expirationDate")
  }

  const authSuccess = (token) => {
    dispatch({ type: AUTH_SUCCESS, token })
  }

  const autoLogin = () => {
    const token = localStorage.getItem("token")

    if (!token) {
      logout()
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"))
      if (expirationDate <= new Date()) {
        logout()
      } else {
        authSuccess(token)
        autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authentication,
        autoLogin,
        autoLogout,
        logout,
        token: state.token,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
