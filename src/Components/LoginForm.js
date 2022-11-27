import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const LoginForm = ({setUserID, setUserName}) => {

  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  
  const [message, setMessage] = useState(undefined)


  const handleSubmit = async(e) => {

    e.preventDefault()
    
    if( email === undefined || email === '' ){ setMessage("Enter your email"); return } 
    if( password === undefined || password === '' ){ setMessage("Enter your password"); return } 

    const userInfo = {
      email: email,
      password: password
    }

    try {

      const response = await fetch('/log-in', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      })

      const result = await response.json()
      console.log(result)

      if( result.status === 404 ){
        setMessage("User does not exist")
      } else {
        if( result.status === 202 ){
          setUserID(result.user.id)
          setUserName(result.user.name)
          handleReturn()
        } else {
          setMessage("Wrong Password")
        }
      }

    } catch (error) {
      console.log(error)
      setMessage("Server error")
    }

  }

  const navigate = useNavigate()
  const handleReturn = () => { navigate('/') }


  return (

    <>
      <div className='generalDiv'>
        <h1>UP Bank</h1>
        <p className='errorMessage'>{message}</p>

        <form onSubmit={ (e) => { handleSubmit(e) }}>
          <label>Email: </label> <input  type='email' onChange={ (e) => { setEmail(e.target.value) } }/> <br/><br/>
          <label>Password: </label> <input type="password" onChange={ (e) => { setPassword(e.target.value) } }/> <br/><br/><br/>
          <button type='submit'>Log in</button>
          <p> Don't have an account? <u><a href="sign-in">Sign in</a></u> </p> 
        </form> <br/><br/>
        
        <button onClick={handleReturn}>Return to home page</button>
      </div>
    </>

  )
}

LoginForm.propType =  {
  setUserID: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired
}