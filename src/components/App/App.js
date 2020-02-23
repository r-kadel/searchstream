import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Home from '../../pages/Home/Home';
import LandingPage from '../../pages/Landing/LandingPage';
import Details from '../../pages/Details/Details';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <PrivateRoute exact path="/search" component={Home} />
        <Route path="/search/:searchId">
          <Details />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
