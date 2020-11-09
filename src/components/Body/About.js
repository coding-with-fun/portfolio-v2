import React from "react";

const About = () => {
    return (
        <div className="about__container" id="about">
            <div className="about__header">
                <div className="header">About Me</div>
            </div>

            <div className="container">
                <div className="about__content">
                    <p>
                        Hello! I'm <b>Harsh Patel</b>, a software engineer based
                        in Ahmedabad, Gujarat.
                    </p>
                    <p>
                        I enjoy creating things that live on the internet by the
                        name <b>Arc Coder</b>, whether that be websites,
                        applications, or anything in between. My goal is to
                        always build products that provide pixel-perfect,
                        performance experiences.
                    </p>
                    <p>
                        Before completing my graduation, I had done internship
                        as a <span>Python Developer</span> at{" "}
                        <a
                            href="https://www.crestdatasys.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Crest Data Systems
                        </a>{" "}
                        where I worked with{" "}
                        <a
                            href="https://www.splunk.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span style={{ fontStyle: "normal" }}>
                                Splunk software
                            </span>
                        </a>
                        . After graduating from{" "}
                        <a
                            href="https://www.gtu.ac.in/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Gujarat Technological University
                        </a>
                        , I joined the engineering team at{" "}
                        <a
                            href="https://softvan.in/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Softvan
                        </a>{" "}
                        where I work as a <span>React Developer</span> on a wide
                        variety of interesting and meaningful projects on a
                        daily basis.
                    </p>
                </div>

                <hr />

                <div className="skills__content">
                    <div className="skill__heading">
                        Here are a few technologies I've been working with
                        recently :-
                    </div>

                    <div className="skill__container">
                        <div className="skill">
                            <span className="header">Languages</span> - Python,
                            HTML, CSS / SCSS, Javascript
                        </div>
                        <div className="skill">
                            <span className="header">Frameworks</span> -
                            ReactJS, NodeJS, ExpressJS, Django
                        </div>
                        <div className="skill">
                            <span className="header">Tools</span> - Bash, Git,
                            Github, Gitlab, Bitbucket, Jira, Confluence
                        </div>
                        <div className="skill">
                            <span className="header">Design</span> - Figma,
                            Adobe XD
                        </div>
                    </div>
                </div>

                <div className="resume__container">
                    <p>
                        <a
                            href="https://drive.google.com/file/d/1a0Axdy3LoJQ-YpVct7igbUzoMxQVDLFF/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
