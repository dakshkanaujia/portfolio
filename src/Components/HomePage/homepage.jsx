import React, { useEffect, useRef } from 'react';
import './homepage.css';
import Typing from "../Typer/Typing.jsx";
import Socialbar from "./SocialBar/Socialbar.jsx";
import '../../Common.css';

function Homepage() {


    return (
        <div className="homepage">
            <div className="typerAndSocial">
                <div className="typerElement">
                    <Typing
                        text={["Daksh Kanaujia", "Learning MERN Development", "Software Engineering Principles"]}
                        typingSpeed={100}
                        font="comfortaa"
                        deletingSpeed={50}
                        duration={1000}
                    />
                </div>
                <div className="socialbar">
                    <Socialbar />
                </div>
            </div>
            <div className="video-container w-128 h-96 rounded-3xl mr-8 shadow-lg shadow-gray-400">
                
            </div>
        </div>
    );
}

export default Homepage;
