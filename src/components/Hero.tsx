import { useEffect, useState } from 'react';
import resumeUrl from "../assets/resume.pdf";

const roles = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Creative Coder',
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const socialLinks = [
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/gurjas-singh-7a5099266/', label: 'LinkedIn' },
    { icon: 'github', href: 'https://github.com/error-loading', label: 'GitHub' },
    { icon: 'mail', href: 'mailto:your.email@gsingh.com', label: 'Email' },
    { icon: 'twitter', href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1
            className={`hero__title ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Hi, it's <span className="hero__title-highlight">Gurjas Singh</span>
          </h1>
          <div
            className={`hero__typewriter ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            I'm a <span className="hero__typewriter-text">{displayText}</span>
            <span className="hero__cursor" />
          </div>
          
          <div
            className={`hero__social ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.6s' }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                className="hero__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon === 'linkedin' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                )}
                {link.icon === 'github' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                )}
                {link.icon === 'mail' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                )}
                {link.icon === 'twitter' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <a
            href={resumeUrl}
            className={`hero__resume ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.8s' }}
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;