import React from "react";
import './Socialbar.css';

const dest = ["/src/assets/Images/github-logo.png", "/src/assets/Images/linkedin.webp", "/src/assets/Images/Xlogo.webp", "/src/assets/Images/ytlogo.webp"];

function Socialbar() {
    return (
        <div className="container">
            {/* Correctly apply background image using style attribute */}
            <div className="icon" style={{ backgroundImage: `url(${dest[0]})` }}></div>
            <div className="icon" style={{ backgroundImage: `url(${dest[1]})` }}></div>
            <div className="icon" style={{ backgroundImage: `url(${dest[2]})` }}></div>
            <div className="icon" style={{ backgroundImage: `url(${dest[3]})` }}></div>
        </div>
    );
}

export default Socialbar;
