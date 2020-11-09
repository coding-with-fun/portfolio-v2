import React from "react";

const Project = ({ data }) => {
    return (
        <div className="project__container">
            <div className="info">
                <div className="header">{data.name}</div>
                <div className="description">{data.description}</div>
            </div>
            <div className="details">
                <div className="languages">
                    {data.languages.map((language) => {
                        return <span key={language}>{language}</span>;
                    })}
                </div>

                <hr />

                <div className="links">
                    <a
                        href={data.git_repo}
                        target="_blank"
                        rel="noreferrer"
                        className="repo_link"
                    >
                        <span>
                            <i className="fab fa-github"></i>
                        </span>
                        Repo
                    </a>

                    <a
                        href={data.website_url}
                        target="_blank"
                        rel="noreferrer"
                        className="clone_link"
                    >
                        <span>
                            <i className="fas fa-globe"></i>
                        </span>
                        Website
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
