import React, { useState, useContext } from 'react'
import './Home.css'
import { Context } from '../../Context'
import Result from '../../components/Result/Result'
import SearchError from '../../components/ErrorBoundary/SearchError'
import Error from '../../Utils/Error'
import Loading from '../../components/Loading/Loading'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const {
    searchResults,
    getSearchResults,
    hasSearched,
    hasError,
    setHasSearched,
    setHasError,
    setErrorMessage,
    errorMessage,
    isLoading
  } = useContext(Context)

  function handleChange(e) {
    const { value } = e.target
    setHasSearched(false)
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
      const badTerm = searchTerm
      setHasError(true)
      setErrorMessage(
        `Sorry, we couldn't find any results for ${badTerm}, please try again`
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
        <section className="search-wrapper">
          <h1>SearchStream</h1>
          <form onSubmit={handleSubmit} className="search-form">
            <label className="search-bar-label" htmlFor="search-bar">
              Search for a show or movie
            </label>
            <input
              name="search-bar"
              className="search-bar"
              type="text"
              onChange={handleChange}
              placeholder="ie. Seinfeld"
              required
            />
            <button type="submit" id="search-page-btn">
              Search
            </button>
            {hasError && <Error message={errorMessage} />}
          </form>
        </section>
        {isLoading ? (
          <Loading />
        ) : (
          <section className="results-section">{results()}</section>
        )}
      </main>
    </SearchError>
  )
}

export default Home
