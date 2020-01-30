import React from 'react'
import './Register.css'

function Register() {
  return (
    <main className='content'>
        <form className="regis-form"> 
          <label htmlFor="username">Username:</label>
            <input type="text" />
          <label htmlFor="password">Password</label>
            <input type="password" />
          <label htmlFor="email">Email:</label>
            <input type="email" />
          <button className="regis-btn">Submit</button>
        </form>
    </main>
  )
}

export default Register