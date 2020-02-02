import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import Home from '../../pages/Home/Home'
import LandingPage from '../../pages/Landing/LandingPage'
import Register from '../../pages/Register/Register'
import Catalogue from '../../pages/Catalogue/Catalogue'
import Details from '../../pages/Details/Details'
import Login from '../../pages/Login/Login'


function App() {

  return (
    <div className="App">
      <Header />

      <Switch>

        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path="/search">
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/catalogue'>
          <Catalogue />
        </Route>
        <Route path='/search/:searchId'>
          <Details />
        </Route>

      </Switch>
      
      <Footer />
    </div>
  )
}

export default App
