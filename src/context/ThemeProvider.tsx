import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { ThemeContext } from "./ThemeContext"

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("darkMode")
    if (saved !== null) return JSON.parse(saved)
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)
  

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
