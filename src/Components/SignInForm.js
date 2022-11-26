import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const SignInForm = ( {setUserID, setUserName} )  => {

  //Variables del usuario
  const [name, setName] = useState(undefined)
  const [lastName, setLastName] = useState(undefined)
  const [phone, setPhone] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [confirmPassword, setConfirmPassword] = useState(undefined)

  //Para la verificacion de igualdad
  const [message, setMessage] = useState(undefined)
  

  const handleSubmit = (e) => {

    e.preventDefault()

    //Verificar que los campos tengan datos
    if( name === '' || lastName === '' || phone === '' || password === '' || confirmPassword === '' ){ 
      setMessage("You must fill in all fields")
      return 
    }
    
    if( name === undefined || lastName === undefined || phone === undefined || password === undefined || 
      confirmPassword === undefined ){ 
        setMessage("You must fill in all fields") 
        return 
    }

    if( password === confirmPassword){
      setMessage(undefined)

      const newUser = {
        name : {
          firstName: name,
          lastName: lastName,
        },
        phone,
        password
      }

      console.log(newUser)

      setUserID('1')
      setUserName(name)

      handleReturn()

    } else{
      setMessage("Passwords must match")
    }

  }

  const navigate = useNavigate()
  const handleReturn = () => { navigate('/') }


  return (

    <>
      <div className='generalDiv'>
        <h1> Account creation </h1>
        <p className='errorMessage'>{message}</p>
        
        <form  onSubmit={ (e) => { handleSubmit(e) } }>
          <label>First Name:   </label> <input type='text' onChange={ (e) => { setName( e.target.value ) } }/> <br/><br/>
          <label>Last name:  </label> <input type='text' onChange={ (e) => { setLastName( e.target.value ) } }/> <br/><br/>
          <label>Phone: </label> <input type='tel' maxLength='10' onChange={ (e) => { setPhone( e.target.value ) } }/> <br/><br/>
          <label>New password: </label> <input type='text' onChange={ (e) => { setPassword( e.target.value )} }/> <br/><br/>
          <label>Confirm password: </label> <input type='text' onChange={ (e) => { setConfirmPassword( e.target.value ) } }/> <br/><br/><br/>
          <button type='submit'>Create account</button>
          <p> Already have an account? <u><a href="log-in">Log in</a></u> </p>
        </form> <br/><br/>

        <button onClick={handleReturn}>Return to home page</button>
      </div>
    </>

  )
}

SignInForm.propType = {
  setUserID : PropTypes.func.isRequired,
  setUserName : PropTypes.func.isRequired
}