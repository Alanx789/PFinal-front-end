import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginForm = () => {

  const [user, setUser] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  
  const [message, setMessage] = useState(undefined)


  const handleSubmit = (e) => {

    e.preventDefault()
    
    if( user === undefined || user === '' ){ setMessage("Enter your user name"); return } 
    if( password === undefined || password === '' ){ setMessage("Enter your password"); return } 

    setMessage(undefined)
    const userInfo = {
      user,
      password
    }

    console.log(userInfo)

  }

  const navigate = useNavigate()
  const handleReturn = () => {
    navigate('/')
  }


  return (

    <>
      <div className='generalDiv'>
        <h1>UP Bank</h1>
        <p className='errorMessage'>{message}</p>

        <form onSubmit={ (e) => { handleSubmit(e) }}>
          <label>User name: </label> <input onChange={ (e) => { setUser(e.target.value) } }/> <br/><br/>
          <label>Password: </label> <input type="password" onChange={ (e) => { setPassword(e.target.value) } }/> <br/><br/><br/>
          <button type='submit'>Log in</button>
          <p> Don't have an account? <u><a href="sign-in">Sign in</a></u> </p> 
        </form> <br/><br/>
        
        <button onClick={handleReturn}>Return to home page</button>
      </div>
    </>

  )
}