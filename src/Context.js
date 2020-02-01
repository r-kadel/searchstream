import React, { useState } from 'react'
import config from './config'

const Context = React.createContext()

function ContextProvider(props) {
  const [searchResults, setSearchResults] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  function getSearchResults(searchTerm) {
    const request = async () => {
      const response = await fetch(
        `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${searchTerm}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': config.API_KEY,
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
    <Context.Provider value={{ searchResults, getSearchResults }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
