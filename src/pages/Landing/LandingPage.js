import React, { useContext, useEffect } from 'react';
import './LandingPage.css';
import { Context } from '../../Context';
import Error from '../../Utils/Error';
import { useHistory } from 'react-router-dom';
import TokenService from '../../services/token-service';
import Loading from '../../components/Loading/Loading';

function LandingPage() {
  const {
    showLogin,
    setLoggedIn,
    setErrorMessage,
    setShowLogin,
    hasError,
    setHasError,
    errorMessage,
    isLoading
  } = useContext(Context);
  const history = useHistory();
  // use effect hook to see if user has an auth token and render appropriately
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      setLoggedIn(true);
    } else {
      history.push('/');
    }
  }, [history, setLoggedIn]);

  //User must log in to view the page
  function handleLandingButtonClick() {
    if (!TokenService.hasAuthToken()) {
      setHasError(true);
      setErrorMessage('Please log in to continue');
      setShowLogin(!showLogin);
    } else {
      setLoggedIn(true);
      history.push('/search');
    }
  }

  return (
    <main className="content">
      <div className="landing-page">
        <h1 className="welcome">Welcome to SearchStream</h1>
        <p className="welcome-p">
          Tired of searching through hundreds of videos through your tens of
          video streaming services? SearchStream was designed for you to quickly
          locate the content you want, without all the clutter of a traditional
          google search.
        </p>
        <ul className="setup-ul">
          <li>
            To use our service you will need to log in, which can be done by
            using
          </li>
          <li className="setup-li">User Name: admin</li>
          <li className="setup-li">Password: 1234</li>
        </ul>
        <button id="landing-page-btn" onClick={handleLandingButtonClick}>
          Try it out!
        </button>
        {isLoading && <Loading />}
        {hasError && !isLoading ? <Error message={errorMessage} /> : null}
      </div>
    </main>
  );
}

export default LandingPage;
