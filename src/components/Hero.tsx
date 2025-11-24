import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { useTheme } from '../context/useTheme'
import Profil from '../assets/images/profile-img.webp'

const Hero = () => {
  const { t } = useTranslation()
  const { isDarkMode } = useTheme()
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -100])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"}`}>

      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"} animate-pulse`} />
          <div className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"} animate-ping`} />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">

          <div className="block lg:hidden text-center">
            <div className="mb-8 fade-left">
              <div className="w-32 h-32 mx-auto relative">
                <div className={`w-full h-full rounded-2xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-200"} shadow-2xl transition-transform duration-500 hover:scale-105`}>
                  <img src={Profil} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-2 rounded-2xl border border-blue-500/20 spin-slow" />
              </div>
            </div>

            <div className={`text-sm uppercase tracking-widest mb-4 fade-up ${isDarkMode ? "text-primary" : "text-text"}`}>
              {t("hero.work")}
            </div>

            <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight fade-up-delay">
              <span>{t("hero.title1")}</span><br />
              <span className="text-blue-500 font-medium">{t("hero.title2")}</span><br />
              <span>{t("hero.title3")}</span>
            </h1>

            <p className={`text-base md:text-lg ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-8 max-w-xl mx-auto font-light leading-relaxed fade-up-delay`}>
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 fade-up-delay">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
              >
                {t("hero.viewWork")}
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className={`border px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all ${isDarkMode ? "border-gray-700 hover:border-gray-600 text-gray-300" : "border-gray-300 hover:border-gray-400 text-gray-700"}`}
              >
                {t("hero.getInTouch")}
              </button>
            </div>

            <div className="flex justify-center space-x-6 mb-8 fade-up-delay">
              <a href="https://github.com/nabiltouche/" className="p-3 rounded-full transition-colors hover:bg-gray-800">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nabil-touche-771baa213/" className="p-3 rounded-full transition-colors hover:bg-gray-800">
                <FiLinkedin size={20} />
              </a>
              <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="p-3 rounded-full transition-colors hover:bg-gray-800">
                <Mail size={20} />
              </a>
            </div>

            <div className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap fade-up-delay">
              <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>React</span>
              <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>⸱</span>
              <span className={isDarkMode ? "text-gray-800" : "text-gray-500"}>Node.js</span>
              <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>⸱</span>
              <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>TypeScript</span>
              <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>⸱</span>
              <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>MongoDB</span>
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

            <div className="fade-up">
              <div className={`text-sm uppercase tracking-widest mb-6 ${isDarkMode ? "text-primary" : "text-text"}`}>
                {t("hero.work")}
              </div>

              <h1 className="text-5xl xl:text-7xl font-light mb-8 leading-tight fade-up-delay">
                <span>{t("hero.title1")}</span><br />
                <span className="text-primary font-medium">{t("hero.title2")}</span><br />
                <span>{t("hero.title3")}</span>
              </h1>

              <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-12 font-light leading-relaxed max-w-lg fade-up-delay`}>
                {t("hero.subtitle")}
              </p>

              <div className="flex gap-6 mb-8 fade-up-delay">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="cursor-pointer bg-primary text-text px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:bg-primary/80"
                >
                  {t("hero.viewWork")}
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className={`border px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
                >
                  {t("hero.getInTouch")}
                </button>
              </div>

              <div className="flex space-x-6 mb-12 fade-up-delay">
                <a href="https://github.com/nabiltouche/" className="p-3 rounded-full transition-colors hover:bg-gray-800">
                  <FiGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/nabil-touche-771baa213/" className="p-3 rounded-full transition-colors hover:bg-gray-800">
                  <FiLinkedin size={20} />
                </a>
                <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="p-3 rounded-full transition-colors hover:bg-gray-800">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end fade-left">
              <div className="relative">

                <div className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest mb-6 fade-up-delay">
                  <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>React</span>
                  <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>⸱</span>
                  <span className={isDarkMode ? "text-gray-800" : "text-gray-500"}>Node.js</span>
                  <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>⸱</span>
                  <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>TypeScript</span>
                  <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>⸱</span>
                  <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>MongoDB</span>
                </div>

                <div className={`w-80 h-96 rounded-3xl overflow-hidden border-4 shadow-2xl ${isDarkMode ? "border-gray-800" : "border-gray-300"} transition-transform duration-500 hover:scale-105`}>
                  <img src={Profil} alt="Profile" className="w-full h-full object-cover" />
                </div>

                <div className="absolute -inset-0 rounded-3xl border border-blue-500/20 spin-slow" />
                <div className="absolute -inset-2 rounded-3xl border border-purple-500/10 spin-reverse" />

              </div>
            </div>
          </div>

        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 float">
          <ArrowDown size={20} className={isDarkMode ? "text-gray-600" : "text-gray-400"} />
        </div>

      </motion.section>

    </div>
  )
}

export default Hero
