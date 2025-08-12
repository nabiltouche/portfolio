import Hero from "./components/Hero"
import { ThemeProvider } from "./context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App 
