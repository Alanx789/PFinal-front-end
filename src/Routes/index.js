import React from 'react'
import { Route, Routes} from 'react-router-dom'
import { LoginForm, SignInForm, MainPage } from "../Pages/index"

export const Router = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={ <MainPage/> }/>
                <Route path='/sign-in' element={ <SignInForm/> }/>
                <Route path='/log-in' element={ <LoginForm/> }/>
            </Routes>
        </>
    )

}