import React from 'react'
import {
  motion,
  stagger,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  Mail,
} from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../context/useTheme';

import Profil from '../assets/images/profile-img.png';


const Hero = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as any,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as any,
      },
    },
  };

  const imageVariants = {
    hidden: { x:50, opacity: 0 },
    visible: {
      x:0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut' as any,
        delay: 0.5,
      },
    },
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className=''
      >
        <div className="">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="">
          {/* Mobile Layout - Centered */}
          <div className="">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className=""
            >
              {/* Profile Image - Mobile */}
              <motion.div variants={imageVariants} className="">
                <div className=''>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${
                      isDarkMode ? "border-gray-800" : "border-gray-200"
                    } shadow-2xl`}
                  >
                    <img
                      src={Profil}
                      alt="Profile"
                      className=""
                    />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className=""
                  />
                </div>
              </motion.div>


              {/* Content - mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  isDarkMode ? "text-primary" : "text-text"
                } mb-4`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className=""
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Le Boss Du game
                </span>
                <span className="">
                  experiences
                </span>
                <br />
                <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  that matter
                </span>
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                Actuellement sans emplois je vais abandonner et m'inscrire sur Onlyfans 
              </motion.p>

              {/* CTA Buttons - Mobile */}
              <motion.div
                variants={itemVariants}
                className=""
              >

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('work')}
                  className=''
                >
                  View Work
                </motion.button>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode
                      ? "border-gray-700 hover:border-gray-600 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 `}
                >
                  Get in Touch
                </motion.button>

              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div
                variants={itemVariants}
                className=''
              >
                {[
                  { icon: FiGithub, href: "#" },
                  { icon: FiLinkedin, href: "#" },
                  { icon: Mail, href: "mailto:nabiltouchepro@gmail.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={`p-3 rounded-full transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-text hover:bg-gray-800"
                        : "text-gray-600 hover:text-primary hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Tech Stack - Mobile */}
              <motion.div
                variants={itemVariants}
                className=""
              >
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  React
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  ⸱
                </span>
                <span
                  className={isDarkMode ? "text-gray-800" : "text-gray-500"}
                >
                  Node.js
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  ⸱
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  TypeScript
                </span>
                <span
                  className={isDarkMode ? "text-gray-700" : "text-gray-400"}
                >
                  ⸱
                </span>
                <span
                  className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                >
                  MongoDB
                </span>
              </motion.div>
            </motion.div>    
          </div>
        </div>
        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className=""
        >
          <ArrowDown
            size={24}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
        
      </motion.section>
    </div>
  )
}

export default Hero
