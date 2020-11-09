import React from "react";
import { data } from "../ProjectData";
import Project from "./Projects/Project";

const Projects = () => {
    return (
        <div className="projects__container" id="projects">
            <div className="projects__header">
                <div className="header">All Projects</div>
            </div>

            <div className="project_list container">
                {data.map((project, id) => {
                    return <Project data={project} key={id} />;
                })}
            </div>
        </div>
    );
};

export default Projects;
