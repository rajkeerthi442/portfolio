import React from 'react'
import {Element} from "react-scroll";
import Prj from '../Prj/Prj';
import './Prjcontainer.css' 

const Prjcontainer = () => {
    
    const Projects=[
        {
        img:"https://itseeze.com/_webedit/cached-images/2761-0-0-1250-10000-7500-1344.png",
        title:"ecommercewebsite",
        desc:"An ecommerce website is your digital storefront on the internet.It facilitates the transaction between a buyer and seller",
        link:"www.google.com"
        },
        {
            img:"https://i.stack.imgur.com/KA2u0.jpg",
            title:"FormValidation",
            desc:"useful when you need a user to input information that is expected to meet certain requirements",
            link:"www.google.com"
        }
    ];
  return (
   <Element className='projectContainer' id="projects">
    <h1>Projects</h1>
        <p>
            Here are some project which I done for making lives of people easy.
        </p>
        <div className='Prjcontainer_prjs'>
            {
                
                Projects.map((Project,index)=>{
                        return (
                            <Prj key={index} img={Project.img} title={Project.title} desc={Project.desc} link={Project.link}/>
                        )
                })
            }


        </div>

   </Element>
  )
}

export default Prjcontainer