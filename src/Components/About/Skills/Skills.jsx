import React from "react";
import '../../../Common.css'
import './Skills.css'
import { useState, useEffect } from "react";

const perc = {
    java : 80,
    javascript : 90,
    python : 70,
    typescript : 60,
    react1 : 60,
    springboot : 50,
    node : 60
}
function increase(){
    const elements = document.querySelectorAll('.progress-bar');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const name = element.classList[1];
        const width = perc[name]; // Assuming `perc.` is a prefix
        element.style.width = `${width}%`; // Set the width of the element
    }
    return "done";
}

function Skills(){
    const [incState, increaseState] = useState(""); // Initialize state with an empty string
    useEffect(() => {
        const result = increase(); // Call the increase function
        increaseState(result); // Update the state with the result
    }, []);
    return(
        <>

            <div className="SkillsBody poppins">
                <div className="SkillsContainer">
                    <div className="skillTab ">
                        <div className="heading bebas-neue-regular">SKILLS</div>
                        <div className="skillsProgressBars">
                            <div className="label bebas-neue-regular">
                                JAVA
                                <div class="progress-container">
                                    <div class="progress-bar java"><span>{perc.java}%</span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                JAVASCRIPT
                                <div class="progress-container">
                                    <div class="progress-bar javascript"><span>{perc.javascript}%</span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                PYTHON
                                <div class="progress-container">
                                    <div class="progress-bar python"><span>{perc.python}%</span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                TYPESCRIPT
                                <div class="progress-container">
                                    <div class="progress-bar typescript"><span>{perc.typescript}%</span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                REACT
                                <div class="progress-container">
                                    <div class="progress-bar react1"><span>{perc.react1}%</span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                SPRINGBOOT
                                <div class="progress-container">
                                    <div class="progress-bar springboot"><span>{perc.springboot}%</span></div>
                                </div>
                            </div>
                            <div className="label bebas-neue-regular">
                                NODE
                                <div class="progress-container">
                                    <div class="progress-bar node"><span>{perc.node}%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="imageContainer"></div>                        
                </div>
            </div>
        </>
    )
}

// increase();


export default Skills;