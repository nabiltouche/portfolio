import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Hearth,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {FIGithub, FILinkedIn, FITwitter} from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.jpg";
import PROJECT_IMG_2 from "../assets/images/project-2.jpg";
import PROJECT_IMG_3 from "../assets/images/project-3.jpg";
import PROJECT_IMG_4 from "../assets/images/project-4.jpg";
import PROJECT_IMG_5 from "../assets/images/project-5.jpg";
import PROJECT_IMG_6 from "../assets/images/project-6.jpg";
import PROJECT_IMG_7 from "../assets/images/project-7.jpg";
import { color } from "framer-motion";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend Development",
    icon: Code2,
    desc: "Building responsive and interactive user interfaces using modern web technologies.",
    skills: [
      {name: "JavaScript", icon: Code2},
      {name: "TypeScript", icon: Code2},
      {name: "Python", icon: Code2},
      {name: "Java", icon: Code2},
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    desc: "Creating robust server-side applications and APIs.",
    skills: [
      {name: "Node.js", icon: Code2},
      {name: "Express.js", icon: Code2},
      {name: "Django", icon: Code2},
      {name: "Flask", icon: Code2},
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    desc: "Designing and managing databases for efficient data storage and retrieval.",
    skills: [
      {name: "MySQL", icon: Database},
      {name: "PostgreSQL", icon: Database},
      {name: "MongoDB", icon: Database},
      {name: "SQLite", icon: Database},
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    desc: "Implementing CI/CD pipelines and managing cloud infrastructure.",
    skills: [
      {name: "Docker", icon: Cloud},
      {name: "Kubernetes", icon: Cloud},
      {name: "AWS", icon: Cloud},
      {name: "Azure", icon: Cloud},
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Node.js",
  "Express.js",
  "Django",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Jest",
  "Git",
  "Figma",
  "PostgreSQL",
  "MongoDB",
]

export const STATS = [
  { number: "50+", label: "Projects Completed" },
  { number: "3+", label: "Years of Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Clients Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    image: PROJECT_IMG_1,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-fledged e-commerce platform with user authentication and payment integration.",
    image: PROJECT_IMG_2,
    tags: ["Node.js", "Express.js", "MongoDB", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Blog Application",
    description: "A blogging platform with features like post creation, commenting, and user profiles.",
    image: PROJECT_IMG_3,
    tags: ["Django", "PostgreSQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Backend",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather application that fetches real-time weather data from an API.",
    image: PROJECT_IMG_4,
    tags: ["React", "API Integration", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "A task management tool to help teams collaborate and manage tasks efficiently.",
    image: PROJECT_IMG_5,
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "A real-time chat application with user authentication and message history.",
    image: PROJECT_IMG_6,
    tags: ["Socket.io", "Node.js", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    image: PROJECT_IMG_7,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Frontend",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started My Journey",
    description: "Began learning web development with HTML, CSS, and JavaScript.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First Job",
    description: "Landed my first job as a junior developer at a tech startup.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2023",
    title: "Freelancing",
    description: "Started freelancing and worked on various projects for different clients.",
    icon: Rocket,
    color: "bg-yellow-500",
  },
  {
    year: "2024",
    title: "Open Source Contributions",
    description: "Began contributing to open source projects and communities.",
    icon: Hearth,
    color: "bg-red-500",
  }, 
  {
    year: "2025",
    title: "Continuous Learning",
    description: "Continuing to learn new technologies and improve my skills.",
    icon: BookOpen,
    color: "bg-purple-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Passionate about creating intuitive and user-friendly interfaces that enhance user experience.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Enjoy tackling complex problems and finding efficient solutions through code.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Committed to lifelong learning and staying updated with the latest industry trends.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FIGithub,
    url: "https://github.com/",
    color:"hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
   name: "LinkedIn",
   icon: FILinkedIn,
   url: "https://www.linkedin.com/in/",
   color:"hover:text-blue-400",
   bgColor: "hover:bg-blue-800",
  },
  {
   name: "Twitter",
   icon: FITwitter,
   url: "https://twitter.com/",
   color:"hover:text-sky-400",
   bgColor: "hover:bg-sky-800",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:nabiltouchepro@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-800",
  }
];

export const CONTACT_INFO = [
  {
    icon : MapPin,
    label: "Location",
    value: "Marseille, France",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+33 7 83 83 25 81",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mailto:nabiltouchepro@gmail.com", 
  },
];