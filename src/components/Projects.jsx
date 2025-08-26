import React from "react";
import "./data/projects"
import projects from "./data/projects";
import "./Projects.css"
const Projects = () =>{
    return (
        <>
            <div className="projectparent" id="project">
                <div className="projecthead">My Recent <span style={{color: "#C770F0"}}>&nbsp;Works</span></div>
                <div className="projectsidehead">Here are my few projects that i've worked recently</div>
                <div className="projectsholder">
                    {
                        projects.map((project, index) =>(
                            <div className="project">
                                <div className="projectimage">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="projecttitle">{project.title}</div>
                                <div className="projectmatter">{project.description}</div>
                               <div className="Projectbuttons">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <button className="gitbut">GitHub</button>
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <button className="demobut">Demo</button>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Projects