import React from 'react'
import './Result.css'
import { Link } from 'react-router-dom'

function Result(props) {
  const providerIcons = props.data.locations.map(loc => {
    return (
      <img
        src={loc.icon}
        key={loc.id}
        className="provider-icon"
        alt={loc.display_name}
        onError={(e) => e.target.style.display = "none"}
      />
    )
  })

  return (
    <article className="result-item">
      <Link to={`/search/${props.data.id}`}>
        <img className="poster" src={props.data.picture} alt="Movie Poster" />
      </Link>
      <section className="result-details">
        <Link to={`/search/${props.data.id}`}>
          <h3 className="result-title">{props.data.name}</h3>
        </Link>
        <h6>Availble Here:</h6>
        <p className="icons">{providerIcons}</p>
      </section>
    </article>
  )
}

export default Result
