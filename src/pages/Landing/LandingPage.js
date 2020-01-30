import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
  <main className="content">
    <div className="landing-page">
      <h1 id="welcome">Welcome to SearchStream</h1>
      <p>Tired of searching through hundreds of videos through your tens of video streaming services?
        SearchStream was designed for you to quickly locate the content you want, withought
        all the clutter of a traditional google search.
      </p>
      <Link to='/home'>
        <button id="landing-page-btn">Try it out!</button>     
      </Link>
    </div>
  </main>
  )
}

export default LandingPage