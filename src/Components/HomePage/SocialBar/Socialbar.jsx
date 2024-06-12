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
            <a target = "_blank" href="https://x.com/?lang=en&mx=2" className="link"><div className="icon"><FaXTwitter /></div></a>
            <a target = "_blank" href="https://www.linkedin.com/in/daksh-kanaujia/" className="link"><div className="icon"><FaLinkedin /> </div></a>
            <a target = "_blank" href="https://www.youtube.com/channel/UCW8DCByIFHu9UMOU5T9Q6Lg" className="link"><div className="icon"><FaYoutube /></div></a>
            <a target = "_blank" href="https://github.com/dakshkanaujia" className="link"><div className="icon"><FaGithub /></div></a>
        </div>
    );
}

export default Socialbar;
