import React from "react";
import Skills from "./Skills/Skills.jsx";
import '../../Common.css'
import Timeline from './Timeline/Timeline.jsx'
import './About.css'

function About(){
    return(
        <>
        <div className="aboutDiv">
            <Skills/>
            <Timeline/>
        </div>
        </>
    )
}

export default About;