import React from "react";
import './Socialbar.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Socialbar() {
    return (
        <div className="Conntainer">
            {/* Correctly apply background image using style attribute */}
            <div className="icon"><FaXTwitter /></div>
            <div className="icon"><FaLinkedin /> </div>
            <div className="icon"><FaYoutube /></div>
            <div className="icon"><FaGithub /></div>
        </div>
    );
}

export default Socialbar;
