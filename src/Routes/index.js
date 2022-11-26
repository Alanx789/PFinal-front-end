import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { LoginForm, SignInForm } from '../Components'
import { MainPage, UserPage } from '../Pages'

export const Router = () => {

    const [userID, setUserID] = useState(undefined)
    const [userName, setUserName] = useState('guest')

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={ <MainPage name={userName} id={userID}/> }/>
                    <Route path='/sign-in' element={ <SignInForm/> }/>
                    <Route path='/log-in' element={ <LoginForm/> }/>
                    <Route path='/accounts-info/:id' element={ <UserPage id={userID}/> }/>
                </Routes>
            </BrowserRouter>
        </>
    )

}