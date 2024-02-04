import React from 'react'
import Signupleft from './signupleft';
import Signupright from './signupright';
import "./signup.css";
import "./mobile.css"
const Signup = () => {
  return (
    <div>
        <div className='signup_page'>
            <div className='signup_left'>
            <Signupleft/>
            </div>
        <Signupright className='signup_right'/>
        </div>
        
    </div>
  )
}

export default Signup;