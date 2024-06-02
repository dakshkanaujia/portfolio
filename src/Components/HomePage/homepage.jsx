import React from "react";
import './homepage.css';
import Typing from "../Typer/Typing.jsx";

function Homepage(){
    return (
        <div className="homepage">
            <div className="cover"></div>
            <div className="typerElement">
                <Typing
                    text = {["Daksh Kanaujia", "React Learner", "Web Development and DSA"]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    duration={1000}
                />
            </div>
        </div>
    )
}

export default Homepage;