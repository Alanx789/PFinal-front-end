import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { MainPage } from './Pages/index';
import {LoginForm} from './Components/index';
import {SignInForm} from './Components/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <LoginForm/>
    <SignInForm/>

  </React.StrictMode>
);