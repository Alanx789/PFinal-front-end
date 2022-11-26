import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LogOutPage = () => {

    const navigate = useNavigate()
    const handleReturn = () => { navigate('/') }

    return (
        <div className=' generalDiv'>
            <h1>You succesfully logged out</h1>
            <button onClick={handleReturn}>Return to home page</button>
        </div>
    )
}
