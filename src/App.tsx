import Hero from "./components/Hero"
import { ThemeProvider } from "./context/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-blue dark:bg-gray-900">
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App 
