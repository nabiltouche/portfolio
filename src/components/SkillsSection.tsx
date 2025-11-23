import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, type Easing, type Variants } from "framer-motion"

import { useTheme } from "../context/useTheme"
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../utils/data";
import { containerVariants, itemVariants } from "../utils/helper";
import { useTranslation } from "react-i18next";

const SkillsSection = () => {
    const { isDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const { t } = useTranslation();



    const skillBarVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
        width: `${level}%`,
        opacity: 1,
        transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1] as Easing, // remplace "easeInOut" par sa version array
        delay: 0.3,
        },
    }),
    }



    return <section 
        ref={sectionRef}
        id="skills"
        className={`py-24 px-6 ${
            isDarkMode ? "bg-text text-primary" : "bg-bg text-text"
        } relative overflow-hidden`}
    >
        <motion.div
            style={{ y }}
            className="absolute inset-0 overflow-y-hidden">
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
                    {t("skills.technicalExpertise")}
                </motion.div>

                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-light mb-6"
                >
                    {t("skills.skillsTechnologies1")}
                    <span className="text-blue-500 font-medium">{t("skills.skillsTechnologies2")}</span>
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className={`text-lg ${
                        isDarkMode ? "text-primary" : "text-text"
                    } max-w-2xl mx-auto font-light`}
                >
                    {t("skills.presentationSkills")}
                </motion.p>

            </motion.div>

        {/* Skills Grid */}
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className=""
        >
            {SKILLS_CATEGORY.map((category) => (
                <motion.div
                    key={category.title}
                    variants={itemVariants}
                    className={`p-8 rounded-2xl border ${
                        isDarkMode
                            ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                            : "bg-white/50 border-gray-200 backdrop-blur-sm"
                    }`}
                >
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                        <div
                            className={`p-3 rounded-xl ${
                                isDarkMode ? "bg-primary/10" : "bg-text/10"
                            } mr-4`}
                        >
                            <category.icon size={24} className="text-blue-500" />
                        </div>
                        <div>
                            <h3 className="">{t(category.title)}</h3>
                            <p
                                className={`text-sm ${
                                    isDarkMode ? "text-primary" : "text-text"
                                }`}
                            >
                                {t(category.description)}
                            </p>
                        </div>
                    </div>
                    {/* Skills List */}
                    <div className="">
                        {category.skills.map((skill) => (
                            <div key={skill.name} className="group">
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
                                    <motion.div
                                        variants={skillBarVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        custom={skill.level}
                                        className={`h-full ${skill.color} rounded-full relative`}
                                    >
                                        <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
                ))}
        </motion.div>

        {/* Additionnal Skills */}
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-16"
        >
            <motion.div variants={itemVariants} className="text-center mb-8">
                <h3 className="text-xl font-medium mb-4">{t("skills.alsoWorkingWith")}</h3>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-3"
            >
                {TECH_STACK.map((tech) => (
                    <motion.span
                        key={tech}
                        whileHover={{ y: -2, scale: 1.05}}
                        className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                            isDarkMode
                                ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                                : "bg-gray-100 border-gray-200 text-gray-700 hover:border-gray-400"
                        }`}
                    >
                        {tech}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>

        {/* Stats */} 
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
            {STATS.map((stat) => (
                <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center"
                >
                    <div className="text-2xl md:text-3xl font-light text-pri mb-2">
                        {stat.number}
                    </div>
                    <div
                        className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        {t(stat.label)}
                    </div>
                </motion.div>
            ))}
        </motion.div>

        

        </div>
    </section>
};

export default SkillsSection
