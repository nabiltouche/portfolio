import { motion, useInView } from "framer-motion"
// import { ArrowUpRight, Code2, Globe, Users, Zap } from "lucide-react"
import { useRef } from "react"
import { useTheme } from "../context/useTheme"
import { PROJECTS } from "../utils/data"
import { containerVariants, itemVariants } from "../utils/helper"
import ProjectCard from "./ProjectCard"


const ProjectsSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true});

  return (
    <section
  id="work"
  ref={sectionRef}
  className={`py-24 px-6 ${
    isDarkMode ? "bg-text text-primary" : "bg-bg text-text"
  } relative overflow-hidden`}
>
  {/* Background Elements */}
  <div className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none z-0 ${
    isDarkMode ? "bg-primary" : "bg-text"}`}/>
  <div className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none z-0 ${
    isDarkMode ? "bg-primary" : "bg-text"}`}/>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Section Header */}
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="text-center mb-20"
    >
      <motion.div
        variants={itemVariants}
        className={`text-sm uppercase tracking-widest ${
          isDarkMode ? "text-primary" : "text-text"
        } mb-4`}
      >
        Featured Work
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-light mb-6"
      >
        Recent
        <span className="text-primary font-medium"> Projects</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className={`text-lg ${
          isDarkMode ? "text-primary" : "text-text"
        } max-w-2xl mx-auto font-light`}
      >
        A selection of projects showcasing my skills in web development, from frontend interfaces to full-stack applications.
      </motion.p>
    </motion.div>

    {/* Projects Grid */}
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          isDarkMode={isDarkMode}
        />
      ))}
    </motion.div>
  </div>
</section>

  )
}

export default ProjectsSection
