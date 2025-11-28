import { useState, useEffect } from "react";
import { navItems } from "../data/nav";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <ul className="nav-items">
                    {navItems.map((item, index) => (
                        <li key={item.label} className="nav-item">
                            <a href={item.href} className={`nav-link ${index === navItems.length - 1 ? 'nav-link-contact' : ''}`}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;