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
        ease: 'easeOut',
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
        ease: 'easeOut',
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
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  };

  return (
    <div>
      <h1 className='text-4xl font-bold'>Welcome to My Portfolio</h1>
      <p className='mt-4'>I'm a passionate developer with experience in building web applications.</p>
    </div>
  )
}

export default Hero
