import { FaCode, FaServer, FaTools } from "react-icons/fa"
import { Code, Heart, Globe } from "lucide-react"
import PROJECT_IMG_1 from "../assets/images/nab.jpg"
import PROJECT_IMG_2 from "../assets/images/nab.jpg"
import PROJECT_IMG_3 from "../assets/images/nab.jpg"
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"



export const SKILLS_CATEGORY = [
  {
    title: "skills.frontendTitle",
    description: "skills.frontendSubtitle",
    icon: FaCode,
    skills: [
      { name: "JavaScript", level: 90, color: "bg-yellow-400" },
      { name: "TypeScript", level: 80, color: "bg-blue-500" },
      { name: "React", level: 85, color: "bg-cyan-500" },
      { name: "Next.js", level: 75, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 90, color: "bg-sky-400" },
    ],
  },
  {
    title: "skills.backendTitle",
    description: "skills.backendSubtitle",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-500" },
      { name: "Express", level: 80, color: "bg-gray-700" },
      { name: "MongoDB", level: 75, color: "bg-green-600" },
      { name: "MySQL", level: 70, color: "bg-blue-600" },
    ],
  },
  {
    title: "skills.toolsTitle",
    description: "skills.toolsSubtitle",
    icon: FaTools,
    skills: [
      { name: "Git / GitHub", level: 85, color: "bg-orange-500" },
      { name: "VS Code", level: 90, color: "bg-blue-400" },
      { name: "Postman", level: 70, color: "bg-pink-400" },
    ],
  },
]

export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "MySQL",
]

export const STATS = [
  { label: "skills.projectsCompleted", number: "2+" },
  { label: "skills.technologies", number: "8+" },
  { label: "skills.yearsOfExperience", number: "3+" },
  { label: "skills.clientSatisfaction", number: "100%" },
]
export const PROJECTS = [
  {
    id: 1,
    title: "projectItems.portfolio.title",
    description: "projectItems.portfolio.description",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind"],
    liveUrl: "https://youtube.com",
    githubUrl: "https://youtube.com",
    featured: true,
    category: "Front End",
  },
  {
    id: 2,
    title: "projectItems.taskManager.title",
    description: "projectItems.taskManager.description",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://youtube.com",
    githubUrl: "https://youtube.com",
    featured: false,
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "projectItems.dashboard.title",
    description: "projectItems.dashboard.description",
    image: PROJECT_IMG_3,
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://youtube.com",
    githubUrl: "https://youtube.com",
    featured: false,
    category: "Full-Stack",
  },
  {
    id: 4,
    title: "projectItems.blog.title",
    description: "projectItems.blog.description",
    image: PROJECT_IMG_1,
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://youtube.com",
    githubUrl: "https://youtube.com",
    featured: false,
    category: "Full-Stack",
  },
  {
    id: 5,
    title: "projectItems.weather.title",
    description: "projectItems.weather.description",
    image: PROJECT_IMG_2,
    tags: ["React", "Tailwind", "API"],
    liveUrl: "https://youtube.com",
    githubUrl: "https://youtube.com",
    featured: false,
    category: "Front End",
  },
  {
    id: 6,
    title: "projectItems.chat.title",
    description: "projectItems.chat.description",
    image: PROJECT_IMG_3,
    tags: ["React", "Node.js", "Socket.io"],
    liveUrl: "https://youtube.com",
    githubUrl: "https://youtube.com",
    featured: false,
    category: "Full-Stack",
  },
  {
    id: 7,
    title: "projectItems.elearning.title",
    description: "projectItems.elearning.description",
    image: PROJECT_IMG_1,
    tags: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://youtube.com",
    githubUrl: "https://youtube.com",
    featured: false,
    category: "Full-Stack",
  },
]

export const CONTACT_INFO = [
  {
    icon: Code,
    label: "EMAIL",
    value: "exemple@email.com",
  },
  {
    icon: Code,
    label: "TÉLÉPHONE",
    value: "+33 6 12 34 56 78",
  },
  {
    icon: Code,
    label: "LOCALISATION",
    value: "Marseille, France",
  },
]

export const SOCIAL_LINKS = [
  {
    name: "GITHUB",
    icon: FiGithub,
    url: "https://github.com/",
    color: "#fff",
    bgColor: "#000",
  },
  {
    name: "LINKEDIN",
    icon: FiLinkedin,
    url: "https://linkedin.com/",
    color: "#fff",
    bgColor: "#0A66C2",
  },
  {
    name: "INSTAGRAM",
    icon: FiInstagram,
    url: "https://instagram.com/",
    color: "#fff",
    bgColor: "#E4405F",
  },
]

export const PASSIONS = [
  {
    icon: Code,
    title: "DÉVELOPPEMENT WEB",
    description: "Créer des sites modernes et dynamiques avec React et Next.js.",
  },
  {
    icon: Heart,
    title: "ANIMATION JEUNESSE",
    description: "Transmettre, jouer et créer des activités uniques pour les jeunes.",
  },
  {
    icon: Globe,
    title: "VOYAGE & CULTURE",
    description: "Découvrir le monde et s’inspirer de chaque lieu et rencontre.",
  },
]

export const JOURNEY_STEPS = [
  {
    year: "2025",
    title: "ALTERNANCE DÉVELOPPEUR WEB",
    company: "Zapata Digital Europe",
    description: "Création de sites web vitrines et gestion des réseaux sociaux.",
    icon: Code,
    color: "#0A66C2",
  },
  {
    year: "2024",
    title: "SCRUM MASTER - PROJET ÉTUDIANT",
    company: "Université",
    description: "Encadrement d’une équipe de 13 personnes sur un projet agile.",
    icon: Code,
    color: "#F59E0B",
  },
  {
    year: "2023",
    title: "ANIMATEUR JEUNESSE",
    company: "Unité Marseillaise",
    description: "Organisation de séjours, veillées et grands jeux pour les jeunes.",
    icon: Code,
    color: "#10B981",
  },
]

