import React from 'react'
import './Home.css'

function Home() {
  return (
    <main className="content">
      <section className="search-wrapper">
        <h1>SearchStream</h1>
        <label htmlFor="search-bar">Enter your search here:</label>
        <input name="search-bar" className="search-bar" type="text" required />
      </section>

      <section className="results-section">
        Results data goes here
      </section>

    </main>
  )
}

export default Home