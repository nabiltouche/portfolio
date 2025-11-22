import { FaCode, FaServer, FaTools } from "react-icons/fa"
import { Code, Heart, Globe } from "lucide-react"
import portfolio_img from "../assets/images/portfolio_img.webp"
import centre_img from "../assets/images/centre_img.webp"
import { FiGithub, FiInstagram, FiLinkedin, FiX } from "react-icons/fi"

const phone = import.meta.env.VITE_PHONE_NUMBER_VISU;
const email = import.meta.env.VITE_EMAIL;


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
      { name: "PostgreSQL", level: 70, color: "bg-blue-600" },
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
  "Java",
  "Spring Boot",
  "Python",
  "Django",
  "AWS",
  "AI Integration",
  "Figma",
  "Canva",
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
    image: portfolio_img,
    tags: ["React", "Tailwind", "Motion"],
    liveUrl: "https://nabiltouche.vercel.app",
    githubUrl: "https://github.com/nabiltouche/portfolio",
    featured: true,
    category: "Front End",
  },
  {
    id: 2,
    title: "projectItems.centre.title",
    description: "projectItems.centre.description",
    image: centre_img,
    tags: ["Next.js", "Tailwind", "Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "Full Stack",
  }
]

export const CONTACT_INFO = [
  {
    icon: Code,
    label: "contact.email",
    value: "nabiltouchepro@gmail.com",
  },
  {
    icon: Code,
    label: email,
    value: phone,
  },
  {
    icon: Code,
    label: "contact.localisation",
    value: "Marseille, France",
  },
]

export const SOCIAL_LINKS = [
  {
    name: "GITHUB",
    icon: FiGithub,
    url: "https://github.com/nabiltouche",
    color: "#fff",
    bgColor: "#000",
  },
  {
    name: "LINKEDIN",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/nabil-touche-771baa213/",
    color: "#fff",
    bgColor: "#0A66C2",
  },
  {
    name: "INSTAGRAM",
    icon: FiInstagram,
    url: "https://instagram.com/babi_kdb13",
    color: "#fff",
    bgColor: "#E4405F",
  },
  {
    name: "X",
    icon: FiX,
    url: "https://x.com/babi_rhawey",
    color: "#fff",
    bgColor: "#E4405F",
  },
]

export const PASSIONS = [
  {
    icon: Heart,
    title: "about.manga.title",
    description: "about.manga.description",
  },
  {
    icon: Globe,
    title: "about.animation.title",
    description: "about.animation.description",
  },
  {
    icon: Globe,
    title: "about.voyage.title",
    description: "about.voyage.description",
  },
]

export const EDUCATION_JOURNEY_STEPS = [
  {
    year: "2024",
    title: "about.licence.title",
    company: "about.licence.company",
    description: "about.licence.description",
    icon: Code,
    color: "#0A66C2",
  },
  {
    year: "2021",
    title: "about.bafa.title",
    company: "about.bafa.company",
    description: "about.bafa.description",
    icon: Code,
    color: "#F59E0B",
  },
  {
    year: "2021",
    title: "about.bac.title",
    company: "about.bac.company",
    description: "about.bac.description",
    icon: Code,
    color: "#10B981",
  },
]

