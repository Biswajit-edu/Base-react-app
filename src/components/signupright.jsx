import React from 'react'
import "./signup.css";
import Loginbox from "./loginbox/loginbox";
import icon from "./final2.png";
import { FaLinkedin, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
const signupright = () => {
  return (
    <div className='right_content'>
        <div className='navbar_signup flex'>
        <div className='navbar_signup_img'>
        <img src={icon} alt="ss" />
        </div>
        <span className='signup_base'>Base</span>
        </div>  
        <div className='right_loginbox'>
        <Loginbox/>
        </div>
        <div className='right_social'>
        <div className='social_media text-center bottom-0'>
            <ul className='social_media_icons flex justify-center gap-x-7'>
                <li><FaGithub className='icons'/></li>
                <li><FaTwitter className='icons'/></li>
                <li><FaLinkedin className='icons'/></li>
                <li><FaDiscord className='icons'/></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default signupright