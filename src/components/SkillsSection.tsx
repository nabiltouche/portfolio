import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useTheme } from "../context/useTheme"
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../utils/data"
import { useTranslation } from "react-i18next"

const SkillsSection = () => {
  const { isDarkMode } = useTheme()
  const { t } = useTranslation()

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-text text-primary" : "bg-bg text-text"
      } relative overflow-hidden`}
    >
      <motion.div style={{ y }} className="absolute inset-0 overflow-y-hidden">
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-primary" : "bg-text"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-primary" : "bg-text"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className={`text-center mb-20 ${isInView ? "fade-up" : "fade-init"}`}>
          <div
            className={`text-sm uppercase tracking-widest mb-4 ${
              isDarkMode ? "text-primary" : "text-text"
            } ${isInView ? "fade-up-delay" : "fade-init"}`}
          >
            {t("skills.technicalExpertise")}
          </div>

          <h2
            className={`text-3xl md:text-5xl font-light mb-6 ${
              isInView ? "fade-up-delay" : "fade-init"
            }`}
          >
            {t("skills.skillsTechnologies1")}
            <span className="text-blue-500 font-medium">
              {t("skills.skillsTechnologies2")}
            </span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto font-light ${
              isInView ? "fade-up-delay" : "fade-init"
            }`}
          >
            {t("skills.presentationSkills")}
          </p>
        </div>

        <div className={`grid gap-10 ${isInView ? "fade-up" : "fade-init"}`}>
          {SKILLS_CATEGORY.map((category) => (
            <div
              key={category.title}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                  : "bg-white/50 border-gray-200 backdrop-blur-sm"
              } ${isInView ? "fade-up" : "fade-init"}`}
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-xl mr-4 ${
                    isDarkMode ? "bg-primary/10" : "bg-text/10"
                  } ${isInView ? "fade-left" : "fade-init"}`}
                >
                  <category.icon size={24} className="text-blue-500" />
                </div>

                <div>
                  <h3>{t(category.title)}</h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-primary" : "text-text"
                    }`}
                  >
                    {t(category.description)}
                  </p>
                </div>
              </div>

              <div>
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group mb-5 ${
                      isInView ? "fade-up-delay" : "fade-init"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-primary" : "text-text"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isDarkMode ? "bg-primary/10" : "bg-text/10"
                      }`}
                    >
                      <div
                        style={{ width: `${skill.level}%` }}
                        className={`h-full ${skill.color} rounded-full ${
                          isInView ? "bar-animate" : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${isInView ? "fade-up" : "fade-init"}`}>
          <h3
            className={`text-xl font-medium mb-6 ${
              isInView ? "fade-up-delay" : "fade-init"
            }`}
          >
            {t("skills.alsoWorkingWith")}
          </h3>

          <div
            className={`flex flex-wrap justify-center gap-3 ${
              isInView ? "fade-up-delay" : "fade-init"
            }`}
          >
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-2 text-sm rounded-full border transition-all hover:scale-[1.05] hover:-translate-y-[2px] duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                    : "bg-gray-100 border-gray-200 text-gray-700 hover:border-gray-400"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 ${
            isInView ? "fade-up" : "fade-init"
          }`}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className={`text-center ${
                isInView ? "fade-up-delay" : "fade-init"
              }`}
            >
              <div className="text-2xl md:text-3xl font-light mb-2 text-pri">
                {stat.number}
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t(stat.label)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SkillsSection
