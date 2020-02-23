import React from 'react'
import './Result.css'
import { Link } from 'react-router-dom'

function Result(props) {
  console.log(props)
  const providerIcons = props.data.locations.map(loc => {
    return (
      <a key={loc.id} href={loc.url}>
        <img
          src={loc.icon}
          key={loc.id}
          className="provider-icon"
          alt={loc.display_name}
          onError={e => (e.target.style.display = 'none')}
        />
      </a>
    )
  })

  
  return (
    <article className="result-item">
      <div className="poster-div">
        <Link to={`/search/${props.data.id}`}>
          <img className="poster" src={props.data.picture} alt="Movie Poster" />
        </Link>
      </div>
      <section className="result-details">
        <Link to={`/search/${props.data.id}`}>
          <h3 className="result-title">{props.data.name}</h3>
        </Link>
        <h6>Available Here:</h6>
        <p className="icons">{providerIcons}</p>
      </section>
    </article>
  )
}

export default Result
