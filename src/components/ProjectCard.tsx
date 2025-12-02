import { useState } from "react";
import type { Project } from "../data/project";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index } : {project : Project, index : number}) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div 
        className={`card-glass project-card ${isVisible ? 'visible' : ''} `}
        style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* image and gradient */}
            <div className={`project-card-image ${project.gradientClass}`}>
                <span className="project-card-initial">
                    {project.title.charAt(0)}
                </span>
            </div>
            
            {/* content */}
            <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>

                {/* tags */}
                <div className="project-card-tags">
                    {project.tags.map((tag) => (
                        <span key={tag} className="project-card-tag">{tag}</span>
                    ))}
                </div>

                {/* links */}
                <div className="project-card-links">
                    {project.github && (
                        <a href={project.github} target="_blank" className="project-card-link" rel="noopener noreferrer" aria-label="GitHub Link">
                            <Github size={16} />
                            Code
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" className="project-card-link" rel="noopener noreferrer" aria-label="Live Demo Link">
                            <ExternalLink size={20} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>

        </div>
    )
}

export default ProjectCard;