import React, { useContext } from 'react';
import { Context } from '../../Context';
import { useParams } from 'react-router-dom';
import './Details.css';

function Details() {
  const { searchResults } = useContext(Context);
  const params = useParams();
  let movie = {};

  //match the correct movie from the results state in context
  // and remap the icons
  searchResults.forEach(result => {
    if (result.id === params.searchId) {
      movie = result;
    }
  });
  const providerIcons = movie.locations.map(loc => {
    return (
      <a key={loc.id} href={loc.url}>
        <img
          key={loc.id}
          className="provider-icon"
          src={loc.icon}
          alt={loc.display_name}
        />
      </a>
    );
  });

  return (
    <main className="content">
      <div className="detail-container">
        <img className="details-poster" src={movie.picture} alt={movie.name} />
        <h1>{movie.name}</h1>
        <h6>Available Here:</h6>
        {providerIcons}
      </div>
    </main>
  );
}

export default Details;
