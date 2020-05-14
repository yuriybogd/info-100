import React from "react"
import { NavLink } from "react-router-dom"
import "./Navigation.scss"

export const Navigation = () => {
  return (
    <nav className="bm-item-list">
      <NavLink  id="home" className="bm-item" exact to="/">
        ИНФА 100%
      </NavLink>

      <NavLink id="search" className="bm-item" to="/search">
        История вопросов
      </NavLink>
    </nav>
  )
}
