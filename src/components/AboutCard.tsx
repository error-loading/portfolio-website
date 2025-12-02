import type { CardProps } from "../data/card";

const AboutCard = ({ title, subtitle, description, className='', delay=0 } : CardProps) => {

    return (
        <div 
        className={`card-glass about-car ${className}`}
        style={{ animationDelay: `${delay}` }}>
            <h3 className="about-card-title">{title}</h3>
            {subtitle && <h4 className="about-card-subtitle">{subtitle}</h4>}
            <p className="about-card-description">{description}</p>
        </div>
    )
}

export default AboutCard;