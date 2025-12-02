import ProjectCard from "./ProjectCard";
import { projects } from "../data/project";

const ProjectSection = () => {
    return (
        <section id="projects" className="project">
            <div className="container">
                <h2 className="section-title project-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
                <div className="project-more">
                    <button className="project-button">Show Projects</button>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;