import React from 'react'
import { useNavigate } from 'react-router-dom'
import './mainPage.css'

export const MainPage = ( {name = "guest", id} ) => {

  const navigate = useNavigate()
  const handleLogIn = () =>{ navigate(`/accounts-info/${id}`) }

  const message = (name === "guest") ? <u> <a href='log-in'>Wanna log in?</a></u> : <button onClick={ handleLogIn}>Check your accounts</button>

  return (
    <>
      <p>Logged in as "{name}"</p>
      <h1> Welcome to UP Bank</h1>
      <>{ message }</>
    </>
  )

}