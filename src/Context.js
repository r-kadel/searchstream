import React, { useState } from 'react'

const Context = React.createContext()

function ContextProvider(props) {
  const [searchResults, setSearchResults] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  function logIn() {
    setLoggedIn(true)
  }

  function logOut() { 
    setLoggedIn(false)
  }

  function getSearchResults(searchTerm){
    fetch(`${process.env.REACT_APP_API_BASE_URL}/${searchTerm}`)
      .then(res => res.json())
      .then(resJson => setSearchResults(resJson.results))
  }

  return (
    <Context.Provider value={{ searchResults, getSearchResults, loggedIn, logIn, logOut }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
