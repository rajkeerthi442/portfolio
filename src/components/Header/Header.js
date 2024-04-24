import React,{useState} from 'react';
import {Link} from "react-scroll"
import "./Header.css"



const Header = () => {
    const [Show,setShow]=useState(false);
    const Joinwithme=()=>{
            setShow(!Show)
    }
  return (
    <div className='header'>
        <div className='header_left'><h1>Develop<span>er</span></h1>
        </div>
        <div className='header_right'>
            <Link to="about" smooth={"true"} duration={500}>
                <h4>
                    About Me
                </h4>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
                <h4>
                    Skills
                </h4>
            </Link>
            <Link to="prj" smooth={true} duration={500}>
                <h4>
                    Project 
                </h4>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
                <h4>
                    Contact
                </h4>
            </Link>
          
          
                <div className='header_rightbutton'>
                    <button className='btn-show' onClick={Joinwithme}>
                 Join With Me
                 </button>
                </div>
                {Show && (
                <div className='show'>
                   
                    <div className='overlay' onClick={Joinwithme}></div>
                 <div className='showcontent'></div>
                    <h2>Lets Connect</h2>
                    <h4>Email : rajkeerthi442@gmail.com</h4>
                    
                    <button className='close' onClick={Joinwithme}>X</button>

                </div>
                )}
           

        </div>
    </div>
  )
}

export default Header