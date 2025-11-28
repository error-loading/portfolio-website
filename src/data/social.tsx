import { FileText, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import resumeUrl from "../assets/resume.pdf";

export interface SocialLink {
    icon : React.ReactNode;
    href : string;
    label : string;
}

export const socialLinks : SocialLink[] = [
    {icon: <FileText size={20}/>, href: resumeUrl, label: "Resume"},
    {icon: <Linkedin size={20}/>, href: "https://www.linkedin.com/in/gurjas-singh-7a5099266/", label: "LinkedIn"},
    {icon: <Github size={20}/>, href: "https://github.com/error-loading", label: "GitHub"},
    {icon: <Instagram size={20}/>, href: "https://www.instagram.com/gurjas.ont/", label: "Instagram"},
    {icon: <Mail size={20}/>, href: "mailto:gsingh.ont@gmail.com", label: "Email"},
];