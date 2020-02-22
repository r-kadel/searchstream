import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Context } from '../../Context'
import Login from '../Login/Login'

function Header() {
  const {
    loggedIn,
    logOut,
    showLogin,
    setShowLogin,
  } = useContext(Context)

  function handleLoginBtn() {
    setShowLogin(!showLogin)
  }

  function handleLogOut() {
    logOut()
  }

  return (
    <nav className="navbar">
      <i className="logo">
        <Link to="/">SearchStream</Link>
      </i>
      <ul className="nav-links">
        {!loggedIn && (
          <li>
            <button className="login-btn nav-btn" onClick={handleLoginBtn}>
              Login
            </button>
            <div className="login-box">{showLogin && <Login />}</div>
          </li>
        )}
        {loggedIn && (
          <li className="logout-btn" onClick={handleLogOut}>
            <Link to="/">Log Out</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Header
