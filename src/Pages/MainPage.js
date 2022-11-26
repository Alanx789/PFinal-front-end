import React from 'react'
import { useNavigate } from 'react-router-dom'
import './mainPage.css'

export const MainPage = ( {name, id, setUserID, setUserName} ) => {

  const navigate = useNavigate()
  const handleLogIn = () =>{ navigate(`/accounts-info/${id}`) }
  const handleLogOut = () =>{
    setUserID(undefined)
    setUserName('guest') 
    navigate('/logged-out') 
  }

  const message = (name === "guest") ? <u> <a href='log-in'>Wanna log in?</a></u> : <div>
    <button onClick={ handleLogIn }>Check your accounts</button><br/><br/>
    <button onClick={ handleLogOut }>Log Out</button>
  </div>

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