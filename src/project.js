import React from "react"
import ProjectList from "./projectList";

const Project = ()=>{
    return(
        <div className="project">
            <h1>Projects </h1>
            {ProjectList.map((project)=>(<div className="ProjectCard">
                <img src={project.image} /><div className="message">
                    <h4>{project.header}</h4>
                    <p>{project.message} <a href=""> <label className="github"><a href={project.RepoUrl} target="_blank">{project.github}</a></label> </a> <a href=""><label className="publish"><a href={project.Publish_url} target="_blank">{project.publish}</a></label></a></p>
                </div>
            </div>))}
        </div>
    )
}

export default Project;