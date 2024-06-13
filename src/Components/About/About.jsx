import React from "react";
import Skills from "./Skills/Skills.jsx";
import '../../Common.css'
import Timeline from './Timeline/Timeline.jsx'
import './About.css'
// import react-icons from 'react-icons'
import { FaRegArrowAltCircleDown } from "react-icons/fa";

function About(){
    return(
        <>
        <div className="aboutDiv">
            <Skills/>
            {/* <svg class="animate-bounce w-6 h-6"> */}
            <div className="w-100 flex justify-center">

                <div className="w-20 h-16 border-b-2 border-black flex justify-center">
                    <FaRegArrowAltCircleDown className="h-16 w-16 animate-bounce text-black font-light" />
                </div>
            </div>
            <Timeline/>
        </div>
        </>
    )
}

export default About;