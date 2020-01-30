import React from "react"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <nav className="navbar">
      <i className="logo">
        <Link to="/">SearchStream</Link>
      </i>
      <ul className="nav-links">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>Login</li>
        <li>
          <Link to="/home">Demo</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
