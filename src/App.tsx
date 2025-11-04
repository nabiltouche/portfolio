import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SkillsSection from "./components/SkillsSection"
import { ThemeProvider } from "./context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <div className="pb-[100vh]">
        <Navbar />
        <Hero />
        <SkillsSection />
      </div>
    </ThemeProvider>
  )
}

export default App 
