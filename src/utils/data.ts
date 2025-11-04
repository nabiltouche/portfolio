import { FaCode, FaServer, FaTools } from "react-icons/fa"

export const SKILLS_CATEGORY = [
  {
    title: "Frontend Development",
    description: "Building responsive and dynamic user interfaces.",
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
    title: "Backend Development",
    description: "APIs, databases, and server-side logic.",
    icon: FaServer,
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-500" },
      { name: "Express", level: 80, color: "bg-gray-700" },
      { name: "MongoDB", level: 75, color: "bg-green-600" },
      { name: "MySQL", level: 70, color: "bg-blue-600" },
    ],
  },
  {
    title: "Tools & Others",
    description: "Development tools and version control.",
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
  { label: "Projects Completed", value: "25+" },
  { label: "Technologies Mastered", value: "15+" },
  { label: "Years of Experience", value: "3+" },
]
