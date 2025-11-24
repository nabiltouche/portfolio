import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useTheme } from "../context/useTheme"
import { EDUCATION_JOURNEY_STEPS, PASSIONS } from "../utils/data"
import { useTranslation } from "react-i18next"

const AboutSection = () => {
  const { isDarkMode } = useTheme()
  const { t } = useTranslation()

  const sectionRef = useRef(null)
  const timelineRef = useRef(null)

  const [inView, setInView] = useState(false)
  const [timelineInView, setTimelineInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setInView(true)),
      { threshold: 0.2 }
    )

    const obs2 = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setTimelineInView(true)),
      { threshold: 0.15 }
    )

    if (sectionRef.current) obs.observe(sectionRef.current)
    if (timelineRef.current) obs2.observe(timelineRef.current)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} relative overflow-hidden`}
    >
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-700" : "bg-purple-300"}`} />
        <div className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-700" : "bg-blue-300"}`} />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-20 ${inView ? "fade-up" : "fade-init"}`}>
          <div className={`text-sm uppercase tracking-widest mb-4 ${isDarkMode ? "text-purple-400" : "text-purple-600"} ${inView ? "fade-up-delay" : "fade-init"}`}>
            {t("about.aboutMe")}
          </div>

          <h2 className={`text-4xl font-bold mb-6 ${inView ? "fade-up-delay" : "fade-init"}`}>
            {t("about.whoI")}
            <span className="text-blue-500 font-medium">{t("about.am")}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className={`${inView ? "fade-up" : "fade-init"} p-8 rounded-2xl border ${isDarkMode ? "border-gray-700 bg-gray-900 backdrop-blur-sm" : "border-gray-300 bg-white backdrop-blur-sm"}`}>
              <h3 className="text-2xl font-medium mb-6">{t("about.myMission")}</h3>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {t("about.subtitle")}
              </p>
              <p className={`text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {t("about.description")}
              </p>
            </div>

            <div className={`${inView ? "fade-up-delay" : "fade-init"} space-y-4`}>
              <h3 className="text-xl font-medium mb-6">{t("about.myPassions")}</h3>

              <div className="grid gap-4">
                {PASSIONS.map(p => (
                  <div
                    key={p.title}
                    className={`flex items-center space-x-4 p-4 rounded-xl hover-x ${isDarkMode ? "bg-gray-700 hover:bg-gray-800/50" : "bg-gray-200 hover:bg-gray-100/50"}`}
                  >
                    <div className={`p-3 rounded-lg ${isDarkMode ? "bg-purple-600/20" : "bg-purple-400/20"}`}>
                      <p.icon size={24} className="text-blue-500" />
                    </div>

                    <div>
                      <h4 className="font-medium mb-1">{t(p.title)}</h4>
                      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>{t(p.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={timelineRef} className="relative">
            <h3 className={`text-2xl font-medium mb-8 text-center lg:text-left ${timelineInView ? "fade-up" : "fade-init"}`}>
              {t("about.education")}
            </h3>

            <div className={`absolute left-8 top-16 bottom-0 w-px ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`} />

            <div className="space-y-8">
              {EDUCATION_JOURNEY_STEPS.map(step => (
                <div
                  key={step.year}
                  className={`${timelineInView ? "fade-left" : "fade-init"} relative flex items-start space-x-6 hover-x`}
                >
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center`}>
                    <step.icon size={24} className="text-white" />
                  </div>

                  <div className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${isDarkMode ? "border-gray-700 bg-gray-900 hover:border-gray-500 hover:bg-gray-800/50" : "border-gray-300 bg-white hover:border-gray-500 hover:bg-gray-100/50"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-medium">{t(step.title)}</h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${isDarkMode ? "bg-purple-600/20 text-purple-400" : "bg-purple-400/20 text-purple-700"}`}>
                        {step.year}
                      </span>
                    </div>

                    <div className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"} mb-3`}>
                      {t(step.company)}
                    </div>

                    <p className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {t(step.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${inView ? "fade-up" : "fade-init"} text-center py-8`}>
          <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4`}><em>{t("about.crafted")}</em></div>
          <div className="text-lg font-medium text-primary">Nabil Touche</div>
        </div>

        <div className={`${inView ? "fade-up" : "fade-init"} text-center mt-20`}>
          <div className="flex flex-col items-center space-y-6">
            <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {t("about.ready")}
            </p>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
              onClick={() => {
                const c = document.getElementById("contact")
                if (c) c.scrollIntoView({ behavior: "smooth" })
              }}
            >
              {t("about.work")}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
