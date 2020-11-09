import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar__container">
            <div className="left__container">
                <HashLink to="/#home">
                    <div className="logo__container">Arc Coder</div>
                    <div className="short_logo__container">AC</div>
                </HashLink>
            </div>

            <div className="right__container">
                <div
                    className={`menu__button ${
                        isMenuOpen ? "is_open" : "is_close"
                    }`}
                    onClick={() => toggleMenu()}
                >
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                </div>
                <div className="page_links">
                    <HashLink
                        to="/#home"
                        className="home_link"
                        onClick={() => toggleMenu()}
                    >
                        Home
                    </HashLink>
                    <HashLink
                        to="/#about"
                        className="about_link"
                        onClick={() => toggleMenu()}
                    >
                        About
                    </HashLink>
                    <HashLink
                        to="/#projects"
                        className="projects_link"
                        onClick={() => toggleMenu()}
                    >
                        Projects
                    </HashLink>
                    <HashLink
                        to="/#contact-me"
                        className="projects_link"
                        onClick={() => toggleMenu()}
                    >
                        Contact Me
                    </HashLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
