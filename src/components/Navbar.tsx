import { useState, useEffect } from "react"
import { useTheme } from "../context/useTheme"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"
import logo from "../assets/images/logoNabik.webp"
import frFlag from "../assets/flags/fr.png"
import enFlag from "../assets/flags/gb.png"
import { useTranslation } from "react-i18next"

interface NavButtonProps {
  label: string
  onClick: () => void
}

const NavButton = ({ label, onClick }: NavButtonProps) => (
  <motion.button
    whileHover={{ x: 5 }}
    onClick={onClick}
    className="relative block md:inline-block text-left md:text-center py-2 md:py-0 text-sm uppercase tracking-wider text-primary group cursor-pointer"
  >
    {label}
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary transform scale-x-0 origin-right transition-transform duration-300 ease-in-out group-hover:scale-x-100 group-hover:origin-left"></span>
  </motion.button>
)

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()

const links = [
  { key: "home", label: t("navbar.home") },
  { key: "projects", label: t("navbar.projects") },
  { key: "about", label: t("navbar.about") },
  { key: "contact", label: t("navbar.contact") },
]


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const toggleLanguage = () => {
  const newLang = i18n.language === "fr" ? "en" : "fr"
  i18n.changeLanguage(newLang)
  localStorage.setItem("language", newLang)
}


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-900/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 cursor-pointer">
          <img src={logo} alt="Logo" className="w-9 h-9" />
          <span className="text-primary ml-1 text-xl">Touche Nabil</span>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <NavButton key={link.key} label={link.label} onClick={() => scrollToSection(link.key.toLowerCase())} />
          ))}

          {/* Bouton langue */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
              isDarkMode
                ? "border-gray-700 hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <img
              src={i18n.language === "fr" ? frFlag : enFlag}
              alt={i18n.language === "fr" ? "Français" : "English"}
              className="w-10 h-8 rounded-full object-cover"
            />
          </motion.button>

          {/* Bouton mode clair/sombre */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode ? "bg-gray-900 text-white hover:bg-gray-800" : "bg-white text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Langue mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="w-8 h-8"
          >
            <img
              src={i18n.language === "fr" ? frFlag : enFlag}
              alt={i18n.language === "fr" ? "Français" : "English"}
              className="w-7 h-7 rounded-full object-cover"
            />
          </motion.button>

          {/* Dark mode */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode ? "text-primary hover:text-white hover:bg-gray-800" : "text-primary hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Menu mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode ? "text-primary hover:text-white hover:bg-gray-800" : "text-primary hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md-hidden mt-4 p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-white"} border ${
              isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}
          >
            {links.map((link) => (
              <NavButton key={link.key} label={link.label} onClick={() => scrollToSection(link.key.toLowerCase())} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
