import React from "react";
import Project from "./Projects/Project";
import { data } from "../../ProjectData";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className="projects__container" id="projects">
            <div className="projects__header">
                <div className="header">Projects</div>
            </div>

            <div className="project_list container">
                {data.slice(0, 4).map((project, id) => {
                    return <Project data={project} key={id} />;
                })}
            </div>

            <div className="load_more__btn container">
                {data.length > 4 && <Link to="/projects">See More</Link>}
            </div>
        </div>
    );
};

export default Projects;
