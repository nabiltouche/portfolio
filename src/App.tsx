import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import { ThemeProvider } from "./context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh] bg-gray-400">
        <Navbar />
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </div>
    </ThemeProvider>
  )
}

export default App 
