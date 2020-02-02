import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Context } from '../../Context'

function Header() {
  const { loggedIn, logOut } = useContext(Context)
  
  function handleLogOut() {
    logOut()
  }

  return (
    <nav className="navbar">
      <i className="logo">
        <Link to="/">SearchStream</Link>
      </i>
      <ul className="nav-links">
        <li>
          <Link to="/register">Register</Link>
        </li>
        {!loggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {loggedIn && (
          <li onClick={handleLogOut}>
            <Link to="/">
              Log Out
            </Link>
          </li>
        )}
        <li>
          <Link to="/search">Demo</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
