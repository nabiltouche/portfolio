import { delay, easeOut, stagger, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "../context/useTheme"
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../utils/helper"


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

                <div className="">
                    {/* Personal Story */}
                    
                </div>
            </div>
             
        </section>
  )
}

export default AboutSection
