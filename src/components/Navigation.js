import React from "react"
import { NavLink } from "react-router-dom"
import "./Navigation.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faHistory, faUsersCog } from "@fortawesome/free-solid-svg-icons"

export const Navigation = () => {
  return (
    <nav className="bm-item-list">
      <NavLink id="home" className="bm-item" exact to="/">
        <FontAwesomeIcon icon={faHome} />
        Домашняя
      </NavLink>

      <NavLink id="search" className="bm-item" to="/search">
        <FontAwesomeIcon icon={faHistory} />
        История запросов
      </NavLink>

      <NavLink id="admin" className="bm-item" to="/admin">
        <FontAwesomeIcon icon={faUsersCog} />
        Администратор
      </NavLink>
    </nav>
  )
}
