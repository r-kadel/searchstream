import React, { useContext } from 'react'
import './LandingPage.css'
import { Context } from '../../Context'
import Error from '../../Utils/Error'
import { useHistory } from 'react-router-dom'

function LandingPage() {
  const {
    loggedIn,
    showLogin,
    setErrorMessage,
    setShowLogin,
    hasError,
    setHasError,
    errorMessage
  } = useContext(Context)
  const history = useHistory()

  function handleLandingButtonClick() {
    if (!loggedIn) {
      setHasError(true)
      setErrorMessage('Please log in to continue')
      setShowLogin(!showLogin)
    } else {
      history.push('/search')
    }
  }

  return (
    <main className="content">
      <div className="landing-page">
        <h1 className="welcome">Welcome to SearchStream</h1>
        <p className="welcome-p">
          Tired of searching through hundreds of videos through your tens of
          video streaming services? SearchStream was designed for you to quickly
          locate the content you want, withought all the clutter of a
          traditional google search.
        </p>
        <ul className="setup-ul">
          <li>
            To use our service you will need to log in, which can be done by
            using
          </li>
          <li className="setup-li">User Name: admin</li>
          <li className="setup-li">Password: 1234</li>
        </ul>
        <button id="landing-page-btn" onClick={handleLandingButtonClick}>
          Try it out!
        </button>
        {hasError && <Error message={errorMessage} />}
      </div>
    </main>
  )
}

export default LandingPage
