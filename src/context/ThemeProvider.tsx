import { useEffect, useState, type ReactNode } from "react"
import { ThemeContext } from "./ThemeContext"

type ThemeProviderProps = {
  children: ReactNode
}

const getInitialTheme = () => {
  if (typeof window === "undefined") return false
  const stored = window.localStorage.getItem("theme")
  if (stored === "dark") return true
  if (stored === "light") return false
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add("dark")
      window.localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      window.localStorage.setItem("theme", "light")
    }
  }, [isDarkMode])

  const toggleDarkMode = () => setIsDarkMode(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
