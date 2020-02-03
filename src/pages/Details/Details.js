import React, { useContext } from 'react'
import { Context } from '../../Context'
import { useParams } from 'react-router-dom'
import './Details.css'

function Details() {
  const { searchResults } = useContext(Context)
  const params = useParams()

  const movie = searchResults.filter(result => result.id === params.searchId)
  const providerIcons = movie[0].locations.map(loc => {
    return (
      <img key={loc.id} className="provider-icon" src={loc.icon} alt= {loc.display_name} />
    )
  })

  return (
    <main className="content">
      <div className="detail-container">
        <img className="details-poster" src={movie[0].picture} alt={movie[0].name} />
        <h1>{movie[0].name}</h1>
        <h6>Availble Here:</h6>
        {providerIcons}
      </div>
    </main>
  )
}

export default Details
