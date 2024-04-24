import {Element} from "react-scroll";
import Topcontent from "../topcontent/Topcontent";
import "./Topcontainer.css"

import React from 'react'

const Topcontainer = () => {
  return (
  <Element name="about" className="topContainer">
    <Topcontent/>

  </Element>
  );
};

export default Topcontainer;