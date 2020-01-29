import React from 'react'
import './Header.css'

function Header() {
  return (
    <nav className="navbar">
      <i className="logo">SlipStream</i>
      <ul className="nav-links">
        <li>Login</li>
        <li>Register</li>
        <li>Demo</li>
      </ul>
    </nav>
  )
}

export default Header