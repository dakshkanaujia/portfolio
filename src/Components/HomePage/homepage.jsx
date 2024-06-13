import React, { useEffect, useRef } from 'react';
import './homepage.css';
import Typing from "../Typer/Typing.jsx";
import Socialbar from "./SocialBar/Socialbar.jsx";
import '../../Common.css';

function Homepage() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleMouseEnter = () => {
            video.pause();
        };

        const handleMouseLeave = () => {
            video.play();
        };

        video.addEventListener("mouseenter", handleMouseEnter);
        video.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup event listeners on component unmount
        return () => {
            video.removeEventListener("mouseenter", handleMouseEnter);
            video.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

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
            <div className="video-container rounded-3xl mr-8 shadow-lg shadow-gray-400">
                <video
                    // className=''
                    ref={videoRef}
                    src="/src/assets/video.mp4"
                    autoPlay
                    muted
                    loop
                    id="my-video"
                />
            </div>
        </div>
    );
}

export default Homepage;
