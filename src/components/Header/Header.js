import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Header.css'
import { Context } from '../../Context'
import Login from '../Login/Login'

function Header() {
  const {
    loggedIn,
    logOut,
    showLogin,
    setShowLogin,
    setErrorMessage
  } = useContext(Context)
  const history = useHistory()

  function handleLoginBtn() {
    setShowLogin(!showLogin)
  }

  function handleDemoBtn() {
    if (!loggedIn) {
      setErrorMessage('Please log in to continue')
    } else {
      history.push('/search')
    }
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
        <li>
          <button className="demo-btn nav-btn" onClick={handleDemoBtn}>
            Demo
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
