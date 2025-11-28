import { socialLinks } from "../data/social";

const SocialSidebar = () => {
    return (
        <div className="social-sidebar">
            {socialLinks.map((link, index) => (
                <a 
                    key={link.label} 
                    href={link.href} 
                    className="social-sidebar-link animate-slide-in-right" 
                    target="_blank" 
                    title={link.label}
                    style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    )
}

export default SocialSidebar;