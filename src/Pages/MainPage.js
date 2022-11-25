import React from 'react'
import './mainPage.css'

export const MainPage = ( {userName = "guest"} ) => {

  const logInMessage = (userName === "guest") ? <u onClick={ () => { console.log("Log in") } }>Wanna log in?</u> : <></>

  return (
    <>
      <p>Logged in as "{userName}"</p>
      <h1> Welcome to UP Bank</h1>
      <>{ logInMessage }</>
    </>
  )

}