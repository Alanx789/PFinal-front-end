import React from 'react'
import { useNavigate } from 'react-router-dom'
import './mainPage.css'

export const MainPage = ( {name, id} ) => {

  const navigate = useNavigate()
  const handleLogIn = () =>{ navigate(`/accounts-info/${id}`) }

  const message = (name === "guest") ? <u> <a href='log-in'>Wanna log in?</a></u> : <button onClick={ handleLogIn}>Check your accounts</button>

  return (
    <>
      <div className='showUserName'>
        <p>Logged in as "{name}"</p>
      </div>

      <div className='generalDiv'>
        <h1> Welcome to UP Bank</h1>
        <>{ message }</>
      </div>
    </>
  )

}