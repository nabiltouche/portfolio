import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Heart, ArrowUp, Code2 } from "lucide-react"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { useTheme } from "../context/useTheme"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { isDarkMode } = useTheme()
  const { t } = useTranslation()

  const footerRef = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)


  const { scrollYProgress } = useScroll()
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50])

  const socialLinks = [
    { name: "Github", icon: FiGithub, url: "https://github.com/nabiltouche", color: "hover:text-gray-400" },
    { name: "LinkedIn", icon: FiLinkedin, url: "https://www.linkedin.com/in/nabil-touche-771baa213/", color: "hover:text-blue-400" },
    { name: "Twitter", icon: FiTwitter, url: "https://x.com/babi_rhawey", color: "hover:text-sky-400" }
  ]

  useEffect(() => {
  const el = contentRef.current
  if (!el) return

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.classList.add("fade-up")
      }
    })
  })

  observer.observe(el)

  return () => observer.disconnect()
}, [])



  return (
    <footer
      ref={footerRef}
      className={`relative ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} overflow-hidden`}
    >

      <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
        <div className={`h-px w-full bg-gradient-to-r ${isDarkMode ? "from-transparent via-blue-500 to-transparent" : "from-transparent via-blue-600 to-transparent"} animate-line`} />
        <div className={`absolute top-0 h-px w-32 bg-gradient-to-r ${isDarkMode ? "from-blue-400 via-purple-500 to-blue-400" : "from-blue-500 via-purple-600 to-blue-500"} blur-sm animate-line-move`} />
      </div>

      <motion.div style={{ y: scrollY }} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute bottom-10 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`} />
        <div className={`absolute top-10 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`} />
      </motion.div>

      <div ref={contentRef} className="relative z-10 px-6 py-16 opacity-0 translate-y-6 transition-all duration-700">
        <div className="max-w-6xl mx-auto text-center space-y-8">

          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 text-2xl font-medium hover:scale-105 transition-transform duration-300">
              <div className="text-blue-500 animate-rotate-slow">
                <Code2 size={29} />
              </div>
              <span>Nabil Touche</span>
            </div>

            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm max-w-md mx-auto fade-up-delay`}>
              {t("footer.crafting")}
            </p>
          </div>

          <div className="flex justify-center space-x-6 fade-up-delay">
            {socialLinks.map((social, i) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 ${isDarkMode ? "bg-gray-800/50 hover:bg-gray-700/50" : "bg-gray-100/50 hover:bg-gray-200/50"} ${social.color} backdrop-blur-sm social-anim`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 fade-up-delay">
            <div className={`${isDarkMode ? "bg-gray-700" : "bg-gray-500"} h-px w-16`} />
            <div className="text-red-500 animate-heart">
              <Heart size={16} fill="currentColor" />
            </div>
            <div className={`${isDarkMode ? "bg-gray-700" : "bg-gray-400"} h-px w-16`} />
          </div>

          <div className="space-y-2 fade-up-delay">
            <p className={`${isDarkMode ? "text-gray-500" : "text-gray-600"} text-sm`}>
              © {new Date().getFullYear()} {t("footer.allRight")}.
            </p>
            <p className={`${isDarkMode ? "text-gray-500" : "text-gray-600"} text-sm`}>
              {t("footer.text")}
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isDarkMode ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white" : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-800"} backdrop-blur-sm border ${isDarkMode ? "border-gray-700" : "border-gray-300"} fade-up-delay`}
          >
            <ArrowUp size={16} />
            <span>{t("footer.backToTop")}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
