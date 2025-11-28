import Navigation from "../components/Navigation";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ExperienceSection from "../components/ExperienceSection";
import SocialSidebar from "../components/SocialSidebar";

const Index = () => {
    return (
        <main className="main-content">
            <Navigation />
            <AboutSection />
            <ProjectSection />
            <ExperienceSection />
            <SocialSidebar />
        </main>
    )
}

export default Index;