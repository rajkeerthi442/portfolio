import React from 'react'
import { Link } from 'react-scroll'
import './Topcontent.css'
import resume from "../resumes/Resumes.pdf"

const Topcontent = () => {
  return (
    <div className='topContent'>
        <div className='topcontent_container'>
            <h1>
                Mr.Keerthi Raj
            </h1>
            <p>A Fullstack Java Developer</p>
            <a href={resume} smooth={true} duration={500} download="Resume">
                <button className='topContent_downloadButton'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topContent_workButton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default Topcontent