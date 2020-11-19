import React from "react";

import Codepen from "../../../assets/socialIcons/codepen.svg";
import DevTo from "../../../assets/socialIcons/dev.svg";
import Facebook from "../../../assets/socialIcons/facebook.svg";
import Github from "../../../assets/socialIcons/github.svg";
import Gmail from "../../../assets/socialIcons/gmail.svg";
import Google from "../../../assets/socialIcons/google.svg";
import Instagram from "../../../assets/socialIcons/instagram.svg";
import LinkedIn from "../../../assets/socialIcons/linkedin.svg";
import Twitter from "../../../assets/socialIcons/twitter.svg";
import Whatsapp from "../../../assets/socialIcons/whatsapp.svg";
import YouTube from "../../../assets/socialIcons/youtube.svg";

const SocialIcons = () => {
    return (
        <div className="social_icons">
            <a
                href="https://www.youtube.com/channel/UC5fLpNYfnyHYX7rvm1LYEyQ"
                target="_blank"
                rel="noreferrer"
            >
                <img src={YouTube} alt="YouTube Logo" />
            </a>
            <a href="mailto:dev@arccoder.in" target="_blank" rel="noreferrer">
                <img src={Gmail} alt="Gmail Logo" />
            </a>
            <a
                href="https://wa.me/919099976321"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Whatsapp} alt="Whatsapp Logo" />
            </a>
            <a
                href="https://local.google.com/place?id=5197286609546633129&amp;use=srp&amp;ved=1t%3A65428&amp;_ga=2.69700307.232061930.1605595655-1379269024.1604657980#fpstate=lie"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Google} alt="Google Logo" />
            </a>
            <a
                href="https://linkedin.com/in/harshpatel2124"
                target="_blank"
                rel="noreferrer"
            >
                <img src={LinkedIn} alt="LinkedIn Logo" />
            </a>
            <a
                href="https://www.instagram.com/arc__coder"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Instagram} alt="Instagram Logo" />
            </a>
            <a
                href="https://www.facebook.com/harsh2124"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Facebook} alt="Facebook Logo" />
            </a>
            <a
                href="https://twitter.com/arc__coder"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Twitter} alt="Twitter Logo" />
            </a>
            <a
                href="https://github.com/arc-coder"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Github} alt="Github Logo" />
            </a>
            <a
                href="https://codepen.io/arc-coder"
                target="_blank"
                rel="noreferrer"
            >
                <img src={Codepen} alt="Codepen Logo" />
            </a>
            <a href="http://dev.to/arc__coder" target="_blank" rel="noreferrer">
                <img src={DevTo} alt="Dev.to Logo" />
            </a>
        </div>
    );
};

export default SocialIcons;
