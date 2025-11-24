import { useRef } from "react"
import { useInView } from "framer-motion"
import { useTheme } from "../context/useTheme"
import { PROJECTS } from "../utils/data"
import ProjectCard from "./ProjectCard"
import { useTranslation } from "react-i18next"

const ProjectsSection = () => {
  const { isDarkMode } = useTheme()
  const sectionRef = useRef(null)

  const isInView = useInView(sectionRef, { once: true, margin: "-150px" })

  const { t } = useTranslation()

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-text text-primary" : "bg-bg text-text"
      } relative overflow-hidden`}
    >

      {/* Background Elements */}
      <div
        className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none z-0 ${
          isDarkMode ? "bg-primary" : "bg-text"
        }`}
      />
      <div
        className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none z-0 ${
          isDarkMode ? "bg-primary" : "bg-text"
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --------------------------- HEADER --------------------------- */}
        <div className={`text-center mb-20 ${isInView ? "fade-up" : "fade-init"}`}>

          <div
            className={`text-sm uppercase tracking-widest mb-4 ${
              isDarkMode ? "text-primary" : "text-text"
            } ${isInView ? "fade-up-delay" : "fade-init"}`}
          >
            {t("project.preTitle")}
          </div>

          <h2
            className={`text-3xl md:text-5xl font-light mb-6 ${
              isInView ? "fade-up-delay" : "fade-init"
            }`}
          >
            {t("project.title1")}
            <span className="text-primary font-medium">{t("project.title2")}</span>
          </h2>

          <p
            className={`text-lg max-w-2xl mx-auto font-light ${
              isInView ? "fade-up-delay" : "fade-init"
            } ${isDarkMode ? "text-primary" : "text-text"}`}
          >
            {t("project.description")}
          </p>

        </div>

        {/* --------------------------- GRID --------------------------- */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${
            isInView ? "fade-up" : "fade-init"
          }`}
        >
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={isInView ? "fade-up-delay" : "fade-init"}
            >
              <ProjectCard
                project={project}
                index={index}
                isDarkMode={isDarkMode}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProjectsSection
