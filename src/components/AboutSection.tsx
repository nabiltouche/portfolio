/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, easeOut, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "../context/useTheme"
import { containerVariants, itemVariants } from "../utils/helper"
import { JOURNEY_STEPS, PASSIONS } from "../utils/data"


const AboutSection = () => {
    const { isDarkMode } = useTheme()
    const sectionRef = useRef(null)
    const timelineRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    const timelineInView = useInView(timelineRef, { once: true, margin: "-50px" })
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [50, -50])

    const timelineVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.3,
                delayChildren: 0.3,
            },
        },
    };

    const stepVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easeOut,
            },
        },
    };


    return (
        <section
            id="about"
            ref={sectionRef}
            className={`py-24 px-6 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            } relative overflow-hidden`}
        >
            {/* Background Elements */}
            <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5${
                        isDarkMode ? " bg-purple-700" : " bg-purple-300"
                    }`}
                />
                <div
                    className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5${
                        isDarkMode ? " bg-blue-700" : " bg-blue-300"
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
                            isDarkMode ? "text-purple-400" : "text-purple-600"
                        } mb-4`}
                    >
                        About Me
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold mb-6"
                    >
                        Who I 
                        <span className="text-blue-500 font-medium"> Am</span>
                    </motion.h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Personal Story */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="space-y-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className={`p-8 rounded-2xl border ${
                                isDarkMode
                                    ? "border-gray-700 bg-gray-900 backdrop-blur-sm"
                                    : "border-gray-300 bg-white backdrop-blur-sm"
                            }`}
                        >
                            <h3 className="text-2xl font-medium mb-6">My Mission</h3>
                            <p
                                className={`text-lg leading-relaxed mb-6 ${
                                    isDarkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                            >
                                My mission is to empower individuals through technology
                                and education, helping them unlock their full potential.
                            </p>
                            <p
                                className={`text-base leading-relaxed ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                            >
                                With a background in software development and a passion for
                                teaching, I strive to create innovative solutions that make a
                                positive impact on people's lives. Whether it's through
                                mentoring aspiring developers or building accessible educational
                                tools, I am committed to fostering a love for learning and
                                helping others succeed in their journeys.
                            </p>
                        </motion.div>

                        {/* What I Love Building */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-medium mb-6">What I Love Building</h3>
                            <div className="grid gap-4">
                                {PASSIONS.map((passion, index) => (
                                    <motion.div
                                        key={passion.title}
                                        variants={itemVariants}
                                        whileHover={{ x: 4}}
                                        className={`flex items-center space-x-4 p-4 rounded-xl ${
                                            isDarkMode 
                                            ? "bg-gray-700 hover:bg-gray-800/50" 
                                            : "bg-gray-200 hover:bg-gray-100/50"
                                        } transition-all duration-300`}
                                    >
                                        <div
                                            className={`p-3 rounded-lg ${
                                                isDarkMode ? "bg-purple-600/20" : "bg-purple-400/20"
                                            }`}
                                        >
                                            <passion.icon size={24} className="text-blue-500" />

                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-1">{passion.title}</h4>
                                            <p
                                                className={`text-sm ${
                                                    isDarkMode ? "text-gray-300" : "text-gray-700"
                                                }`}
                                            >
                                                {passion.description}
                                            </p>
                                        </div>
                                        

                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>


                        {/* Digital Signature */}
                        <motion.div variants={itemVariants} className="text-center py-8">
                            <div
                                className={`text-sm ${
                                    isDarkMode ? "text-gray-400" : "text-gray-600"
                                } mb-4`}
                            >
                                <em>Crafted with passion by</em>
                            </div>
                            <div className="text-lg font-medium text-primary mt-2">
                                Nabil Touche
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
            
        </section>
  )
}

export default AboutSection
