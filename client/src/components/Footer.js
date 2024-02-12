import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="left-el">

                <a href="https://github.com/shadin-a"><img src="/github-mark-white.png" alt="github-logo" width='25' height='25'></img> </a>
        
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