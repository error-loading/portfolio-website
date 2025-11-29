import { useEffect, useRef, useState } from "react";
import ExerperienceCard from "./ExerienceCard";
import { experiences } from "../data/experience.ts";

const ExperienceSection = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="section-title experience-title">Experience</h2>
                <div className="experience-cards">
                    {experiences.map((exp, index) => (
                        <ExerperienceCard 
                            experience={exp}
                            index={index}
                        />
                     ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;