import { useEffect, useRef, useState } from 'react';
import type { Experience } from '../data/experience';
import { MapPin } from 'lucide-react';

const ExperienceCard = ({experience, index} : {experience : Experience, index : number}) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        },
        { threshold: 0.1 }
        );

        if (cardRef.current) {
        observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef} 
            className={`experience-card ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* date */}
            <div className="experience-card-date">
                <span>{experience.date}</span>
            </div>

            {/* timeline dot */}
            <div className="experience-card-timeline">
                <div className="experience-card-dot glow-sm" />
                <div className="experience-card-line" />
            </div>

            {/* content */}
            <div className="card-glass experience-card-content">
                <div className="experience-card-title">
                    {experience.title}
                </div>
                <p className='experience-card-company'>{experience.company}</p>
                <div className="experience-card-location">
                    <MapPin size={14} className="experience-card-location-icon" />
                    {experience.location}
                </div>
                <p className="experience-card-description">
                    {experience.description}
                </p>
            </div>
        </div>
    )
}

export default ExperienceCard;  