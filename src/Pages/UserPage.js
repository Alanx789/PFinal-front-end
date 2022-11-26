import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const UserPage = ({id}) => {

    const navigate = useNavigate()
    const handleReturn = () => { navigate('/') }

    return (
        <>
            <div className='showUserName'> Your ID is: {id}</div>
            <div className='generalDiv'>
                <button onClick={handleReturn}>Return to home page</button>
            </div>
        </>
    )
}

UserPage.propType = {
    id : PropTypes.string.isRequired
}