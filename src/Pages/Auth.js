import React, { useState } from 'react'
import { LoginForm, SignInForm} from '../Components/index';

const pages = {
  logIn: 0,
  signIn: 1,
}

export const Auth = () => {
  const { logIn,signIn } = pages;
  const [pageToRender, setPageToRender] = useState(0)

  const redirect = () => {
    setPageToRender(pageToRender === logIn ? logIn : signIn);
  }

  return (
    <>
      { pageToRender === logIn ? 
        <LoginForm redirect={redirect}/> 
          : 
        <SignInForm redirect={redirect}/>
      }
    </>
  )
}

