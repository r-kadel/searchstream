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


function App() {

  return (
    <div className="App">
      <Header />

      <Switch>

        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/catalogue'>
          <Catalogue />
        </Route>
        <Route path='/details'>
          <Details />
        </Route>

      </Switch>
      
      <Footer />
    </div>
  )
}

export default App
