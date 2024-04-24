import React from 'react';
import {Element} from 'react-scroll';
import skilling from '../.././img/img4.jpg';
import {LinearProgress} from '@mui/material';
import './Skillcontainer.css'

const Skillcontainer = () => {
  return (
   <Element className="skillcontainer" id="skills">
    <div className='skillcontainer_img'>
        <img src={skilling}></img>
    </div>
    <div className='skillcontainertext'>
        <h2>SKILLSET</h2>
        <div className='skillContainerskillset'>
            <h5>Java</h5>
            <div className='skillContainer_slider skillcontainer_slider1'>
            <LinearProgress variant="determinate" value={90}/>
            </div>
        <div className='skillContainerskillset'>
            <h5>MySQL</h5>
            <div className='skillContainer_slider skillcontainer_slider2'>
            <LinearProgress variant="determinate" value={70}/>
        </div>
        </div>
        <div className='skillContainerskillset'>
            <h5>HTML</h5>
            <div className='skillContainer_slider skillcontainer_slider3'>
            <LinearProgress variant="determinate" value={80}/>
        </div>
        </div>
        <div className='skillContainerskillset'>
            <h5>CSS</h5>
            <div className='skillContainer_slider skillcontainer_slider4'>
            <LinearProgress variant="determinate" value={75}/>
        </div>
        </div>
        <div className='skillContainerskillset'>
            <h5>JavaScript</h5>
            <div className='skillContainer_slider skillcontainer_slider5'>
            <LinearProgress variant="determinate" value={80}/>
        </div>
        </div>
        <div className='skillContainerskillset'>
            <h5>ReactJS</h5>
            <div className='skillContainer_slider skillcontainer_slider6'>
            <LinearProgress variant="determinate" value={78}/>
        </div>
        </div>
        
    </div>

    </div>
   </Element>
  )
}

export default Skillcontainer