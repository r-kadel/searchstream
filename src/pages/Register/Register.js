/* 
Not being used for now unless its decided to allow people to register
and authenticate them
*/

import React from 'react'
import './Register.css'
import { useHistory } from 'react-router-dom'

function Register() {
  let history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    history.goBack()
  }

  return (
    <main className='content'>
        <form className="regis-form" onSubmit={handleSubmit}> 
          <label htmlFor="username">Username:</label>
            <input type="text" required />
          <label htmlFor="password">Password</label>
            <input type="password" required />
          <label htmlFor="email">Email:</label>
            <input type="email" required />
          <button className="regis-btn">Submit</button>
        </form>
    </main>
  )
}

export default Register