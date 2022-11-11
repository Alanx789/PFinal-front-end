import React, {useState} from 'react'
import './LogIn.css'

export const LoginForm = () => {

  const [user, setUser] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  return (

    <>
      <div  className='loginForm'>
        <h1>Log In</h1>
        <form>
          <label>User: </label> <input onChange={ (e) => { setUser(e.target.value) } }/> <br/>
          <label>Password: </label> <input onChange={ (e) => { setPassword(e.target.value) } }/> <br/>
          <button>Log in</button>
          <p> Don't have an account? <a href="http://ww.google.com">Sign In</a> </p>
        </form>
      </div>
    </>

  )
}