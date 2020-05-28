import React from "react"
import { NavLink } from "react-router-dom"
import "./Navigation.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faHistory,
  faUsersCog,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons"

export const Navigation = () => {
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

      <NavLink id="admin" className="bm-item" to="/admin">
        <div className="font-icon">
          <FontAwesomeIcon icon={faUsersCog} />
        </div>
        <span className="link-text">Администратор</span>
      </NavLink>
      <NavLink id="auth" className="bm-item" to="/auth">
        <div className="font-icon">
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
        <span className="link-text">Авторизация</span>
      </NavLink>
    </nav>
  )
}
