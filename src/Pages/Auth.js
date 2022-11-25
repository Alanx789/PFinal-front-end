import React, { useState } from 'react'
import { LoginForm, SignInForm} from '../Components/index';

const pages = {
  mainPage: 0,
  logIn: 1,
  signIn: 2
}

export const Auth = () => {

  const { mainPage, logIn, signIn } = pages;
  const [pageToRender, setPageToRender] = useState(1)

  const redirect = () => {
    setPageToRender(pageToRender === logIn ? logIn : signIn );
  }

  return (
    <>
      { pageToRender === logIn ? <LoginForm redirect = {redirect}/> : <SignInForm redirect={redirect}/>}
    </>
  )
}

