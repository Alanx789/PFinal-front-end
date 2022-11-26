import React, { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { LoginForm, SignInForm } from '../Components'
import { MainPage, UserPage } from '../Pages'
import { LogOutPage } from '../Pages/LogOutPage'

export const Router = () => {

    const [userID, setUserID] = useState(undefined)
    const [userName, setUserName] = useState('guest')

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={ <MainPage name={userName} id={userID} setUserID={setUserID} setUserName={setUserName}/> }/>
                    <Route path='/sign-in' element={ <SignInForm setUserID={setUserID} setUserName={setUserName}/> }/>
                    <Route path='/log-in' element={ <LoginForm setUserID={setUserID} setUserName={setUserName}/> }/>
                    <Route path='/accounts-info/:id' element={ <UserPage id={userID}/> }/>
                    <Route path='/logged-out' element={ <LogOutPage /> }/>
                </Routes>
            </BrowserRouter>
        </>
    )

}