import Navigation from "../components/Navigation";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SocialSidebar from "../components/SocialSidebar";

const Index = () => {
    return (
        <main className="main-content">
            <Navigation />
            <AboutSection />
            <ExperienceSection />
            <SocialSidebar />
        </main>
    )
}

export default Index;