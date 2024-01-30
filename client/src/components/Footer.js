import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="left-el">

                <a href="https://github.com/shadin-a"><img src="client/public/github-mark-white.png" alt="github-logo"></img> </a>
        
            </div>
            <div className="right-el">
                Built by
                &nbsp;
                <a href="https://github.com/shadin-a/horsesAPI">
                    Shadin Al-Arab
                </a>
            </div>
        </div>
    );
};
export default Footer;