import React from "react";
import './homepage.css';
import Typing from "../Typer/Typing.jsx";
import Socialbar from "./SocialBar/Socialbar.jsx";

function Homepage(){
    return (
        <div className="homepage">
            <div className="cover"></div>

            <div className="typerAndSocial">
                <div className="typerElement">
                    <Typing
                        text = {["Daksh Kanaujia", "React Learner", "Web Development and DSA"]}
                        typingSpeed={100}
                        deletingSpeed={50}
                        duration={1000}
                    />
                </div>
                <div className="socialbar">
                    <Socialbar/>
                </div>
            </div>
            
        </div>
    )
}

export default Homepage;