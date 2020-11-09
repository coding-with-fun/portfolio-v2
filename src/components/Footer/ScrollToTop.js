import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    const scrollFun = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollFun();
    }, [pathname]);

    return (
        <a href="#home">
            <div className="scroll_to_top__container">
                <span>
                    <i className="fas fa-chevron-up"></i>
                </span>
            </div>
        </a>
    );
};

export default ScrollToTop;
