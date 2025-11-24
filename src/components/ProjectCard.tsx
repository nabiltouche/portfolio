import { useEffect, useState } from "react"
import { easeOut, motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FiGithub } from "react-icons/fi"
import { PROJECTS } from "../utils/data"
import { useTranslation } from "react-i18next"

type Project = typeof PROJECTS[number]

interface ProjectCardProps {
  project: Project
  index: number
  isDarkMode: boolean
}

const ProjectCard = ({ project, index, isDarkMode }: ProjectCardProps) => {
  const { t } = useTranslation()

  const [isTouch, setIsTouch] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const touchDetected =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.maxTouchPoints > 0

    setIsTouch(touchDetected)
  }, [])

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
        delay: index * 0.2,
      },
    },
  }

  const handleCardClick = () => {
    if (!isTouch) return
    setShowButtons((prev) => !prev)
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover={!isTouch ? { y: -8 } : {}}
      className="group relative cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-700 hover:border-primary hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-white/50 border-gray-200 hover:border-primary hover:shadow-2xl hover:shadow-blue-500/10"
        } backdrop-blur-sm`}
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-48 object-cover transition-transform duration-500 ${
              !isTouch ? "group-hover:scale-105" : ""
            }`}
            loading="lazy"
          />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-text text-white text-xs px-3 py-1 rounded-full font-medium">
                Featured
              </span>
            </div>
          )}

          {/* Category */}
          <div className="absolute top-4 right-4">
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                isDarkMode
                  ? "bg-gray-800/80 text-gray-300"
                  : "bg-white/80 text-gray-700"
              } backdrop-blur-sm`}
            >
              {project.category}
            </span>
          </div>

          {/* OVERLAY – visible au hover OR si mobile + clicked */}
          <div
            className={`
              absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4 transition-opacity duration-300
              ${isTouch ? (showButtons ? "opacity-100" : "opacity-0") : "opacity-0 group-hover:opacity-100"}
            `}
          >
            {/* LIVE BUTTON */}
            <a
              href={project.liveUrl}
              onClick={(e) => isTouch && e.stopPropagation()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
            >
              <ExternalLink size={20} />
              <span>{t("projectCard.liveDemo")}</span>
            </a>

            {/* GITHUB BUTTON */}
            <a
              href={project.githubUrl}
              onClick={(e) => isTouch && e.stopPropagation()}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all"
            >
              <FiGithub size={20} />
              <span>{t("projectCard.github")}</span>
            </a>
          </div>
        </div>

        {/* TEXT */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
            {t(project.title)}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t(project.description)}
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`text-xs px-3 py-1 rounded-full font ${
                  isDarkMode
                    ? "bg-gray-800/80 text-gray-300"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
