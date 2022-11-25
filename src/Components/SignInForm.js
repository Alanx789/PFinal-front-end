import React, { useState } from 'react'

export const SignInForm = ( {redirect} ) => {

  //Variables del usuario
  const [name, setName] = useState(undefined)
  const [lastname, setLastname] = useState(undefined)
  const [phone, setPhone] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [confirmPassword, setConfirmPassword] = useState(undefined)

  //Para la verificacion de igualdad
  const [message, setMessage] = useState(undefined)
  const [verification, setVerification] = useState(undefined)

  //Verificar contraseña
  const verifyPassword = () => {
    if(password === confirmPassword){
      setVerification(true) 
    }else{ 
      setMessage('Passwords must match')
    }
  }

  const handleSubmit = () => {

    verifyPassword
    if( verification ){
      setMessage(" Login ")
    }

  }


  return (

    <>
      <div>
        <form  onSubmit={ handleSubmit }>
          <label>Name:  </label> <input onChange={ (e) => { setName( e.target.value ) } }/> <br/>
          <label>Lastname:  </label> <input onChange={ (e) => { setLastname( e.target.value ) } }/> <br/>
          <label>Phone:  </label> <input onChange={ (e) => { setPhone( e.target.value ) } }/> <br/>
          <label>Password: </label> <input onChange={ (e) => { setPassword( e.target.value )} }/> <br/>
          <label>Confirm password: </label> <input onChange={ (e) => { setConfirmPassword( e.target.value ) } }/> <br/>
          <button type="submit" >Sign in</button>
          <p> Already have an account? <a onClick={redirect}>Log In</a> </p>
          <p>{message}</p>
        </form>
      </div>
    </>

  )
}
