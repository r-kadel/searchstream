import React from 'react'
import './Result.css'

function Result(props) {
  console.log(props)
  return (
    <>
      <img className="poster" src={props.data.picture} alt="Movie Poster"/>
      <h3>{props.data.name}</h3>
      <h4>{props.data.locations.map(loc => loc.display_name)}</h4>
    </>
  )
}

export default Result