import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const SignInForm = ( {setUserID, setUserName} )  => {

  //Variables del usuario
  const [email, setEmail] = useState(undefined)
  const [name, setName] = useState(undefined)
  const [lastName, setLastName] = useState(undefined)
  const [phone, setPhone] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [confirmPassword, setConfirmPassword] = useState(undefined)

  //Para la verificacion de igualdad
  const [message, setMessage] = useState(undefined)
  

  const handleSubmit = async(e) => {

    e.preventDefault()

    //Verificar que los campos tengan datos
    if( name === '' || lastName === '' || phone === '' || password === '' || confirmPassword === '' || email === '' ){ 
      setMessage("You must fill in all fields")
      return 
    }
    
    if( name === undefined || lastName === undefined || phone === undefined || password === undefined || 
      confirmPassword === undefined || email === undefined){ 
        setMessage("You must fill in all fields") 
        return 
    }

    if( password === confirmPassword){

      const newUser = {
        email,
        name: `${name} ${lastName}`, 
        phone,
        password

      }

      try {

        const response = await fetch('/sign-in', {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }
        })

        const result = await response.json()
        console.log(result)

        if( result.status === 406){
          setMessage("That user already exists")
        } else {
          setUserID(result.newUser.id)
          setUserName(result.newUser.name)
          handleReturn()
        }
        
      } catch (error) {
        console.log(error)
        setMessage("Server error")
      }

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
          <label>First Name: </label> <input type='text' onChange={ (e) => { setName( e.target.value ) } }/> <br/><br/>
          <label>Last name: </label> <input type='text' onChange={ (e) => { setLastName( e.target.value ) } }/> <br/><br/>
          <label>Email: </label> <input type='email' onChange={ (e) => { setEmail( e.target.value ) } }/> <br/><br/>
          <label>Phone: </label> <input type='tel' maxLength='10' onChange={ (e) => { setPhone( e.target.value ) } }/> <br/><br/>
          <label>Password: </label> <input type='password' onChange={ (e) => { setPassword( e.target.value )} }/> <br/><br/>
          <label>Confirm password: </label> <input type='password' onChange={ (e) => { setConfirmPassword( e.target.value ) } }/> <br/><br/><br/>
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