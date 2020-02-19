import React, {useContext} from 'react'
import './Login.css'
import {Context} from '../../Context'
import { useHistory } from 'react-router-dom'

function Login() {
  const {logIn, setHasError} = useContext(Context)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    const { username, password } = e.target
    const credentials = {
      username: username.value,
      password: password.value
    }
    logIn(credentials)
    setHasError(false)
    username.value =''
    password.value =''
    history.push('/search')
  }

  return (
        <form className="login-form" onSubmit={handleSubmit}> 
          <label htmlFor="username">Username:</label>
            <input name="username" type="text" required />
          <label htmlFor="password">Password</label>
            <input name="password" type="password" required />
          <button className="login-submit">Submit</button>
        </form>
  )
}

export default Login

