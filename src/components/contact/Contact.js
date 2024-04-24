import React from 'react'
import {Element} from "react-scroll"
import {IconButton} from '@mui/material';
import {Twitter,Instagram,LinkedIn} from '@mui/icons-material';
import "./Contact.css"

const Contact = () => {
  return (
   <Element className='contact' id='contact'>
    <h1>Contact</h1>
    <div className='contact_container'>
        <p>
            Email : <span>rajkeerthi442@gmail.com</span>
        </p>
        <p>
            Github Username : <span>rajkeerthi442</span>
        </p>
        <div className='contact_icons'>
            <a href="https://www.linkedin.com/in/m-keerthi-raj-thanjavur-b35786300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <IconButton>
                    <LinkedIn/>
                </IconButton>
            </a>
            <a href="https://www.instagram.com/krthiraaj?igsh=NTNtanB4MW5seTV4">
                <IconButton>
                    <Instagram/>
                </IconButton>
            </a>
            <a href="https://twitter.com/keerthi1901?s=09">
                <IconButton>
                    <Twitter/>
                </IconButton>
            </a>
        </div>
    </div>


   </Element>
  )
}
export function functionName() { /* … */ }

export default Contact;