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

  function getSearchResults(searchTerm) {
    const request = async () => {
      const response = await fetch(
        `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?country=us&term=${searchTerm}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            'Content-Type': 'application/json'
          }
        }
      )
        const json = await response.json()   
        setSearchResults(json.results)
    }
    request()
  }

  return (
    <Context.Provider value={{ searchResults, getSearchResults, loggedIn, logIn, logOut }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
