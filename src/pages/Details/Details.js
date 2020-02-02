import React, { useContext } from 'react'
import { Context } from '../../Context'
import { useParams } from 'react-router-dom'

function Details() {
  const { searchResults } = useContext(Context)
  const params = useParams()

  const movie = searchResults.filter(result => result.id === params.searchId)
  console.log(movie)

  return (
    <main className="content">
      <h1>{movie[0].name}</h1>
    </main>
  )
}

export default Details
