import { useState } from "react"
import { useTheme } from "../context/useTheme"
import { Sun, Moon } from "lucide-react"

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const [active, setActive] = useState("Home") // état pour la page active

  const links = ["Home", "Projects", "About", "Contact"]

  return (
    <div className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-slate-800">
      <div className="flex items-center sm:gap-x-4 gap-x-2">
        <a href="#" className="md:text-2xl sm:text-xl text-primary">Touche Nabil</a>
        {darkMode ? (
          <Moon className="md:text-3xl sm:text-2xl text-xl text-primary hover:cursor-pointer" onClick={toggleDarkMode}/>
        ) : (
          <Sun className="md:text-3xl sm:text-2xl text-xl text-primary hover:cursor-pointer" onClick={toggleDarkMode}/>
        )}
      </div>

      <div className="flex">
        {links.map(link => (
          <a
            key={link}
            href="#"
            onClick={() => setActive(link)}
            className={`group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide relative
              ${active === link ? "text-primary" : "text-white"}
            `}
          >
            {link}
            <span className={`absolute -bottom-1 left-0 w-full h-[1px] 
              ${active === link ? "bg-primary scale-x-100 origin-left" : "bg-white scale-x-0 origin-right"}
              transform transition duration-300
            `}></span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
