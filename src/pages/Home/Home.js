import React, { useState, useContext, useEffect } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import { Context } from '../../Context';
import Result from '../../components/Result/Result';
import Error from '../../Utils/Error';
import Loading from '../../components/Loading/Loading';
import TokenService from '../../services/token-service';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();
  const {
    searchResults,
    getSearchResults,
    hasSearched,
    hasError,
    setHasSearched,
    setHasError,
    setErrorMessage,
    errorMessage,
    isLoading,
    setLoggedIn
  } = useContext(Context);

  // use effect hook to see if user has an auth token and render appropriately
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      setLoggedIn(true);
    } else {
      history.push('/');
    }
  }, [history, setLoggedIn]);

  function handleChange(e) {
    const { value } = e.target;
    setHasSearched(false);
    setSearchTerm(value);
  }

  //Sends to API function in context
  function handleSubmit(e) {
    e.preventDefault();
    getSearchResults(searchTerm);
  }

  //renders in result section either search results or appropriate error message
  const results = () => {
    if (!searchResults) {
      setHasError(true);
      setErrorMessage('Something went wrong, please log in again');
    }
    if (hasSearched && searchResults.length === 0) {
      const badTerm = searchTerm;
      setHasError(true);
      setErrorMessage(
        `Sorry, we couldn't find any results for ${badTerm}, please try again`
      );
    } else {
      setHasError(false);
      return searchResults.map(result => (
        <Result key={result.id} data={result} />
      ));
    }
  };

  return (
    <main className="content">
      <section className="search-wrapper">
        <h1>SearchStream</h1>
        <form onSubmit={handleSubmit} className="search-form">
          <label className="search-bar-label" htmlFor="search-bar">
            Search for a show or movie
          </label>
          <input
            name="search-bar"
            className="search-bar"
            type="text"
            onChange={handleChange}
            placeholder="ie. Seinfeld"
            required
          />
          <button type="submit" id="search-page-btn">
            Search
          </button>
          {hasError && <Error message={errorMessage} />}
        </form>
      </section>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="results-section">{results()}</section>
      )}
    </main>
  );
}

export default Home;
