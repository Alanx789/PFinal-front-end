import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

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

UserPage.propType = {
    id : PropTypes.string.isRequired
}