import React, {useContext} from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
import {Context} from '../../Context'

function Login() {
  let history = useHistory()
  const {logIn} = useContext(Context)

  function handleSubmit(e) {
    e.preventDefault()
    logIn()
    history.goBack()
  }

  return (
    <main className='content'>
        <form className="login-form" onSubmit={handleSubmit}> 
          <label htmlFor="username">Username:</label>
            <input type="text" />
          <label htmlFor="password">Password</label>
            <input type="password" />
          <button className="login-btn">Submit</button>
        </form>
    </main>
  )
}

export default Login