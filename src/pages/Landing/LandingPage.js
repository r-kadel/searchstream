import React, { useContext } from 'react'
import './LandingPage.css'
import { Context } from '../../Context'
import Error from '../../Utils/Error'

function LandingPage() {
  const { loggedIn, showLogin, setErrorMessage, setShowLogin, hasError, setHasError, errorMessage } = useContext(Context)

  function handleLandingButtonClick() {
    if (!loggedIn) {
      setHasError(true)
      setErrorMessage("Please log in to continue")
      setShowLogin(!showLogin)
    }
  }

  return (
    <main className="content">
      <div className="landing-page">
        <h1 id="welcome">Welcome to SearchStream</h1>
        <p>
          Tired of searching through hundreds of videos through your tens of
          video streaming services? SearchStream was designed for you to quickly
          locate the content you want, withought all the clutter of a
          traditional google search.
        </p>
        <p>
          To use our service you will need to log in, which can be done by using
          the User Name: User and the Password: 1234
        </p>
        <button id="landing-page-btn" onClick={handleLandingButtonClick}>
          Try it out!
        </button>
        {hasError && <Error message={errorMessage} />}
      </div>
    </main>
  )
}

export default LandingPage
