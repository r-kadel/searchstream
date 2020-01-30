import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className="navbar">
      <Link to='/'>
        <i className="logo">SearchStream</i>
      </Link>
      <ul className="nav-links">
        <Link to='/register'>
          <li>Register</li>
        </Link>
        <li>Login</li>
        <Link to='/home'>
          <li>Demo</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Header