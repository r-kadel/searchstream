import React, { useContext } from 'react'
import { Context } from '../../Context'
import { useParams } from 'react-router-dom'
import './Details.css'

function Details() {
  const { searchResults } = useContext(Context)
  const params = useParams()
  let movie = {}

  searchResults.forEach(result => {
    if(result.id === params.searchId) {
      movie = result
    } 
  })

  const providerIcons = movie.locations.map(loc => {
    return (
      <img key={loc.id} className="provider-icon" src={loc.icon} alt= {loc.display_name} />
    )
  })

  return (
    <main className="content">
      <div className="detail-container">
        <img className="details-poster" src={movie.picture} alt={movie.name} />
        <h1>{movie.name}</h1>
        <h6>Availble Here:</h6>
        {providerIcons}
      </div>
    </main>
  )
}

export default Details
