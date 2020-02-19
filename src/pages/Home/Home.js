import React, { useState, useContext } from 'react'
import './Home.css'
import { Context } from '../../Context'
import Result from '../../components/Result/Result'
import SearchError from '../../components/ErrorBoundary/SearchError'
import Error from '../../Utils/Error'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const {
    searchResults,
    getSearchResults,
    hasSearched,
    hasError,
    setHasError,
    setErrorMessage,
    errorMessage
  } = useContext(Context)

  function handleChange(e) {
    const { value } = e.target
    setSearchTerm(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    getSearchResults(searchTerm)
  }

  const results = () => {
    if (!searchResults) {
      setHasError(true)
      setErrorMessage('Something went wrong, please log in again')
    }
    if (hasSearched && searchResults.length === 0) {
      setHasError(true)
      setErrorMessage(
        `Sorry, we couldn't find any results for ${searchTerm}, please try again`
      )
    } else {
      setHasError(false)
      return searchResults.map(result => (
        <Result key={result.id} data={result} />
      ))
    }
  }

  return (
    <SearchError>
      <main className="content">
        {hasError && <Error message={errorMessage} />}
        <section className="search-wrapper">
          <h1>SearchStream</h1>
          <form onSubmit={handleSubmit} className="search-form">
            <label htmlFor="search-bar">Enter your search here:</label>
            <input
              name="search-bar"
              className="search-bar"
              type="text"
              onChange={handleChange}
              placeholder="ie. Inception"
              required
            />
            <button type="submit" id="search-page-btn">
              Search
            </button>
          </form>
        </section>

        <section className="results-section">{results()}</section>
      </main>
    </SearchError>
  )
}

export default Home
