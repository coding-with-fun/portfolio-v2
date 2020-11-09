import React from "react";
import ScrollToTop from "./Footer/ScrollToTop";

const Footer = () => {
    return (
        <div className="footer__container">
            <ScrollToTop />

            <div className="text__container container">
                <div className="harsh__container">
                    <div className="data__container">
                        Handcrafted with{" "}
                        <span>
                            <i className="fas fa-heart"></i>
                        </span>{" "}
                        and{" "}
                        <span>
                            <i className="fas fa-mug-hot"></i>
                        </span>{" "}
                        by
                    </div>
                    <a
                        href="https://github.com/arc-coder"
                        target="_blank"
                        rel="noreferrer"
                        className="link__container"
                    >
                        Arc Coder | Harsh Patel
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
