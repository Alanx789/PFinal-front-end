import React, {useState} from 'react'
import './LogIn.css'

export const LoginForm = ({redirect}) => {

  const [user, setUser] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  
  const [message, setMessage] = useState(undefined)


  const submitHandler = () => {
    if (user == '' || user == undefined ){ message = "You must enter an user name"; return } 
    if (password == '' || password == undefined ){ message = "You must enter a password"; return }

    //Función conectado con el backend

  }

  const handleUserOnChange = (e) => { 
    setUser(e.target.value)
   }

  const handlePasswordOnChange = (e) => {
     setPassword(e.target.value)
   }


  return (

    <>
      <div className='loginForm'>
        <h1>Bank Account</h1>
        <form onSubmit={submitHandler}>
          <label>ID: </label> <input onChange={ (e) => { setUser(e.target.value) } }/> <br/>
          <label>Password: </label> <input type="password" onChange={ (e) => { setPassword(e.target.value) } }/> <br/>
          <button type='submit'>Log in</button>
          <p> Don't have an account? <a onClick={ redirect }>Sign In</a> </p>
          <p>{message}</p>
        </form>
      </div>
    </>

  )
}