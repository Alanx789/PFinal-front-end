import React from 'react'
import { useNavigate } from 'react-router-dom'

export const UserPage = ({id}) => {

    const navigate = useNavigate()
    const handleReturn = () => { navigate('/') }

    return (
        <>
            <div>showAccountsInfo: {id}</div>
            <button onClick={handleReturn}>Return to home page</button>
        </>
    )
}