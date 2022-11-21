import React, { useState } from 'react'

export const SignInForm = () => {

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

  const handleNameOnChange = (e) => { 
    setName(e.target.value)
   }

  const handleLastnameOnChange = (e) => { 
    setLastname(e.target.value)
   }

   const handlePhoneOnChange = (e) => {
    setPhone(e.target.value) 
   }

   const handlePasswordOnChange = (e) => {
    setPassword(e.target.value)
   }

   const handleConfirmOnChange = (e) => {
    setConfirmPassword(e.target.value)
   }


  return (

    <>
      <div>
        <form>
          <label>Name:  </label> <input onChange={ (e) => { handleNameOnChange } }/> <br/>
          <label>Lastname:  </label> <input onChange={ (e) => { handleLastnameOnChange } }/> <br/>
          <label>Phone:  </label> <input onChange={ (e) => { handlePhoneOnChange } }/> <br/>
          <label>Password: </label> <input onChange={ (e) => { handlePasswordOnChange } }/> <br/>
          <label>Confirm password: </label> <input onChange={ (e) => { handleConfirmOnChange } }/> <br/>
          <button>Sign in</button>
          <p> Already have an account? <a href="http://ww.google.com">Log In</a> </p>
          <p>{message}</p>
        </form>
      </div>
    </>

  )
}
