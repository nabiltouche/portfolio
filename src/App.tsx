import Hero from "./components/Hero"
import { ThemeProvider } from "./context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg dark:bg-text text-text dark:text-primary transition-colors duration-500">
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App 
