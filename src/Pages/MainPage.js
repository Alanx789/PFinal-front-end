import React from 'react'
import { useNavigate } from 'react-router-dom'
import './mainPage.css'
import PropTypes from 'prop-types'

export const MainPage = ( {name, id, setUserID, setUserName} ) => {

  const navigate = useNavigate()
  const handleLogIn = () =>{ navigate(`/accounts-info/${id}`) }
  const handleLogOut = () =>{
    setUserID(undefined)
    setUserName('guest') 
    navigate('/logged-out') 
  }

  const component = (name === "guest") ? <div>
    <h1>Welcome to Up bank</h1>
    <u> <a href='log-in'>Wanna log in?</a></u>
  </div> : <div>
    <h1>Welcome back {name}</h1>
    <button onClick={ handleLogIn }>Check your accounts</button><br/><br/>
    <button onClick={ handleLogOut }>Log Out</button>
  </div>

  return (
    <>
      <div className='showUserName'>
        <p>Logged in as "{name}"</p>
      </div>

      <div className='generalDiv'>
        <>{ component }</>
      </div>
    </>
  )

}

MainPage.propType = {
  name: PropTypes.string.isRequired,
  setUserID: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired
}