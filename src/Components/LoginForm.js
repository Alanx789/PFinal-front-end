import React, {useState} from 'react'
import './LogIn.css'

export const LoginForm = () => {

  const [user, setUser] = useState(undefined)
  const [password, setPassword] = useState(undefined)

  const handleUserOnChange = (e) => { 
    setUser(e.target.value)
   }

  const handlePasswordOnChange = (e) => {
     setPassword(e.target.value)
   }


  return (

    <>
      <div className='loginForm'>
        <h1>Log In</h1>
        <form>
          <label>ID: </label> <input onChange={ handleUserOnChange }/> <br/>
          <label>Password: </label> <input type="password" onChange={ handlePasswordOnChange }/> <br/>
          <button>Log in</button>
          <p> Don't have an account? <a href="http://ww.google.com">Sign In</a> </p>
        </form>
      </div>
    </>

  )
}