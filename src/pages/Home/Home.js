import React, { useState, useContext } from 'react'
import './Home.css'
import { Context } from '../../Context'
import Result from '../../components/Result/Result'
import SearchError from '../../components/ErrorBoundary/SearchError'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const { searchResults, getSearchResults } = useContext(Context)

  function handleChange(e) {
    const { value } = e.target
    setSearchTerm(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getSearchResults(searchTerm)
  }

  const results = searchResults.map(result => (
    <Result key={result.id} data={result} />
  ))

  return (
    <SearchError>
      <main className="content">
        <section className="search-wrapper">
          <h1>SearchStream</h1>
          <form onSubmit={handleSubmit} className="search-form">
            <label htmlFor="search-bar">Enter your search here:</label>
            <input
              name="search-bar"
              className="search-bar"
              type="text"
              onChange={handleChange}
              required
            />
            <button type="submit" id="search-page-btn">
              Search
            </button>
          </form>
        </section>

        <section className="results-section">{results}</section>
      </main>
    </SearchError>
  )
}

export default Home
