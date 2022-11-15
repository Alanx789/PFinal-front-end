import React, { useState } from 'react'

export const SignInForm = () => {

  //Variables del usuario
  const [user, setUser] = useState(undefined)
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

  return (

    <>
      <div>
        <form>
          <label>User name:  </label> <input onChange={ (e) => { setUser(e.target.value) } }/> <br/>
          <label>New password: </label> <input onChange={ (e) => { setPassword(e.target.value) } }/> <br/>
          <label>Confirm password: </label> <input onChange={ (e) => { setConfirmPassword(e.target.value) } }/> <br/>
          <button>Sign in</button>
          <p> Already have an account? <a href="http://ww.google.com">Log In</a> </p>
          <p>{message}</p>
        </form>
      </div>
    </>

  )
}
