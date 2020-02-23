import React, { useContext } from 'react';
import { Context } from '../../Context';
import { useParams, useHistory } from 'react-router-dom';
import './Details.css';

function Details() {
  const { searchResults } = useContext(Context);
  const params = useParams();
  const history = useHistory();
  let movie = {};
  let providerIcons;
  //match the correct movie from the results state in context
  // and remap the icons
  // if no result i.e after refresh push back to search page

  if (searchResults.length === 0) {
    history.push('/search');
  } else {
    searchResults.forEach(result => {
      if (result.id === params.searchId) {
        movie = result;
      }
    });
    providerIcons = movie.locations.map(loc => {
      return (
        <a key={loc.id} href={loc.url} target="_blank" rel="noopener noreferrer">
          <img
            key={loc.id}
            className="provider-icon"
            src={loc.icon}
            alt={loc.display_name}
          />
        </a>
      );
    });
  }

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
