import AboutCard from "./AboutCard";
import { dataCardProps } from "../data/card";

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title about-title">About Me</h2>
                <div className="about-grid">
                    {dataCardProps.map((card, index) => (
                        <AboutCard 
                            key={index}
                            title={card.title}
                            subtitle={card.subtitle}
                            description={card.description}
                            delay={card.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutSection;