import React from 'react'
import "./signup.css";
import icon from "./final2.png";
import { FaLinkedin, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa6";
const signupleft = () => {
  return (
    <div>
        <div className='container'>
        <div className='logo'>
        <img src={icon} alt="ss" />
       </div>
        <h1 className='base font-bold text-5xl text-center'>BASE</h1>
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

export default signupleft