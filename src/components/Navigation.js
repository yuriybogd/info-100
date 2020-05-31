import React, { useState, useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "./Navigation.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AuthContext } from "./../context/authentification/authContext"
import {
  faHome,
  faHistory,
  faUsersCog,
  faUserPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"

export const Navigation = () => {
  const { token } = useContext(AuthContext)
  
  console.log("token is ", !!token);
  
  const renderLinks = (isAuth) => {
    //if the user is logged in
    if (isAuth) {
      return (
        <>
          <NavLink id="admin" className="bm-item" to="/admin">
            <div className="font-icon">
              <FontAwesomeIcon icon={faUsersCog} />
            </div>
            <span className="link-text">Администратор</span>
          </NavLink>

          <NavLink id="logout" className="bm-item" to="/logout">
            <div className="font-icon">
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
            <span className="link-text">Выйти</span>
          </NavLink>
        </>
      )
    }

    // else the user is logged out
    else {
      return (
        <>
          <NavLink id="auth" className="bm-item" to="/auth">
            <div className="font-icon">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <span className="link-text">Авторизация</span>
          </NavLink>
        </>
      )
    }
  }

  return (
    <nav className="Navigation bm-item-list">
      <NavLink id="home" className="bm-item" exact to="/">
        <div className="font-icon">
          <FontAwesomeIcon icon={faHome} />
        </div>
        <span className="link-text">Домой</span>
      </NavLink>

      <NavLink id="search" className="bm-item" to="/search">
        <div className="font-icon">
          <FontAwesomeIcon icon={faHistory} />
        </div>
        <span className="link-text">История запросов</span>
      </NavLink>

      {renderLinks(!!token)}
    </nav>
  )
}
