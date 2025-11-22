import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"
import { ThemeProvider } from "./context/ThemeProvider"
import Footer from "./components/Footer"

const App = () => {
  return (
    <ThemeProvider>
      <div className="">
        <Navbar />
        <main>
          <Hero />
          <SkillsSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
