import React, { useState } from 'react'
import TokenService from './services/token-service'
import config from './config'

const Context = React.createContext()
const BASE_URL = 'http://localhost:8000/api' || 'https://calm-cliffs-26137.herokuapp.com/api/search'

function ContextProvider(props) {
  const [searchResults, setSearchResults] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function logIn(credentials, cb) {
    fetch(`${BASE_URL}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${config.TOKEN_KEY}`
      },
      body: JSON.stringify(credentials)
    })
      .then(res =>
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(res => {
              TokenService.saveAuthToken(res.authToken)
              setLoggedIn(true)
              cb()
            })
      )
      .catch(err => {
        setHasError(true)
        setErrorMessage(err.error)
      })
    setShowLogin(false)
  }

  function logOut() {
    TokenService.clearAuthToken()
    setLoggedIn(false)
  }

  function getSearchResults(searchTerm) {
    setIsLoading(true)
    fetch(`${BASE_URL}/search/${searchTerm}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(resJson => {
        setIsLoading(false)
        setSearchResults(resJson.results)
        setHasSearched(true)
      })
      .catch(err => setErrorMessage(err.error))
  }

  return (
    <Context.Provider
      value={{
        searchResults,
        getSearchResults,
        loggedIn,
        logIn,
        logOut,
        hasSearched,
        showLogin,
        setShowLogin,
        hasError,
        setHasError,
        errorMessage,
        setErrorMessage,
        setHasSearched,
        isLoading,
        setIsLoading
      }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
