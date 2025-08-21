/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { useTheme } from "../context/useTheme"
import {
    motion,
    useScroll,
    AnimatePresence,
} from "framer-motion";

import { 
    Sun, 
    Moon,
    Code2,
    Menu,
    X,
} from "lucide-react"

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [active, setActive] = useState("Home") // état pour VOIR quel menu est cliqué
  const [isMenuOpen, setIsMenuOpen] = useState(false) // etat pr voir si le menu est ouvert

  const links = ["Home", "Projects", "About", "Contact"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // Réinitialiser l'état actif après le clic
    }
  }

    return <motion.nav
            style = {{opacity : 1}}
            className={`fixed top-0 w-full z-50 px-6 py-4 ${
                isDarkMode ? "bg-gray-900/80" : "bg-gray-50/80"
            } backdrop-blur-md border-b ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
            }`}
        >

   

    <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
        >
            <Code2 size={24} className="text-primary" /> {" "}
            <span className="text-lg ml-1">Touche Nabil</span>
        </motion.div>

        {/* Dekstop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
            {links.map((item) => (
                <motion.button
                    key={item}
                    whileHover={{ y: -2}}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm uppercase tracking-wider transition-colors ${
                        isDarkMode 
                            ? "text-primary hover:text-white"
                            : "text-primary hover:text-gray-900"
                    }`}
                    >
                        {item}
                </motion.button>
            ))}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                    isDarkMode 
                        ? "bg-gray-900 text-white hover:bg-gray-800"
                        : "bg-white-500 text-gray-900 hover:bg-gray-200"
                }`}
            >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                    isDarkMode
                        ? "text-primary hover:text-white hover:bg-gray-800"
                        : "text-primary hover:text-gray-900 hover:bg-gray-200"
                }`}
            >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                    isDarkMode
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
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
                className={`md-hidden mt-4 p-4 rounded-lg ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}}`}
            >
                {links.map((item) => (
                    <motion.button
                        key={item}
                        whileHover={{ x: 5}}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${
                            isDarkMode 
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        {item}
                    </motion.button>
                ))}
                </motion.div>
            )}
        </AnimatePresence>
    </motion.nav>
};

export default Navbar

//   return (
//     <div className="w-full md:h-12 sm:h-14 h-18 flex justify-between items-center xl:px-36 lg:px-24 md:px-12 sm:px-6 px-4 fixed top-0 bg-slate-800">
//       <div className="flex items-center sm:gap-x-4 gap-x-2">
//         <a href="#" className="md:text-2xl sm:text-xl text-primary">Touche Nabil</a>
//         {isDarkMode ? (
//           <Moon className="md:text-3xl sm:text-2xl text-xl text-primary hover:cursor-pointer" onClick={toggleDarkMode}/>
//         ) : (
//           <Sun className="md:text-3xl sm:text-2xl text-xl text-primary hover:cursor-pointer" onClick={toggleDarkMode}/>
//         )}
//       </div>

//       <div className="flex">
//         {links.map(link => (
//           <a
//             key={link}
//             href="#"
//             onClick={() => setActive(link)}
//             className={`group lg:text-lg md:text-base text-sm font-light lg:mr-12 mr-8 tracking-wide relative
//               ${active === link ? "text-primary" : "text-white"}
//             `}
//           >
//             {link}
//             <span className={`absolute -bottom-1 left-0 w-full h-[1px] 
//               ${active === link ? "bg-primary scale-x-100 origin-left" : "bg-white scale-x-0 origin-right"}
//               transform transition duration-300
//             `}></span>
//           </a>
//         ))}
//       </div>
//     </div>
//   )
// }


