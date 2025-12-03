import { useEffect, useRef, useState } from "react";
import type { CardProps } from "../data/card";

const AboutCard = ({ title, subtitle, description, className='', delay=0 } : CardProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry], obs) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    obs.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`card-glass about-card ${isVisible ? 'animate-fade-in' : ''} ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            <h3 className="about-card-title">{title}</h3>
            {subtitle && <h4 className="about-card-subtitle">{subtitle}</h4>}
            <p className="about-card-description">{description}</p>
        </div>
    )
}

export default AboutCard;