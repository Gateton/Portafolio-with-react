import { IconType } from 'react-icons'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaAws,
  FaGithub
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiGraphql,
  SiRedux,
  SiNextdotjs
} from 'react-icons/si'

export const portfolioConfig = {
  personal: {
    name: "John Doe",
    role: "Full Stack Developer",
    description: "Passionate developer crafting digital experiences with modern technologies",
    avatar: "https://avatars.githubusercontent.com/u/1234567?v=4",
    location: "New York, USA",
    email: "john@example.com",
    availability: "Open to opportunities",
  },
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  skills: [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "New York, USA",
      period: "2020 - Present",
      description: [
        "Led the development of modern web applications using React and TypeScript",
        "Implemented responsive designs and complex animations improving user engagement by 40%",
        "Mentored junior developers and conducted code reviews for team of 8 developers",
        "Optimized application performance reducing load time by 60%"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Innovation Labs",
      location: "San Francisco, USA",
      period: "2018 - 2020",
      description: [
        "Developed and maintained multiple full-stack applications using Node.js and React",
        "Implemented CI/CD pipelines reducing deployment time by 70%",
        "Designed and implemented RESTful APIs serving 100k+ daily users",
        "Collaborated with UX team to improve user experience and accessibility"
      ],
      technologies: ["Node.js", "React", "MongoDB", "Docker", "AWS"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions",
      location: "Remote",
      period: "2016 - 2018",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Implemented pixel-perfect designs from Figma mockups",
        "Reduced bundle size by 45% through code splitting and lazy loading",
        "Integrated third-party APIs and services"
      ],
      technologies: ["JavaScript", "Vue.js", "SASS", "Webpack", "REST APIs"],
    }
  ],
  projects: [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "A sophisticated analytics platform leveraging artificial intelligence to provide real-time insights and predictive analytics for business metrics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      tags: ["React", "Python", "TensorFlow", "AWS"],
      github: "https://github.com/project1",
      demo: "https://demo.com/project1"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2432&q=80",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/project2",
      demo: "https://demo.com/project2"
    },
    {
      title: "Real-time Collaboration Tool",
      description: "A collaborative workspace platform with real-time document editing, video conferencing, and team management features.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2440&q=80",
      tags: ["React", "WebRTC", "Socket.io", "Redis"],
      github: "https://github.com/project3",
      demo: "https://demo.com/project3"
    },
    {
      title: "Smart Home IoT Platform",
      description: "An IoT platform for smart home automation with real-time device monitoring, automation rules, and energy optimization.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2440&q=80",
      tags: ["React Native", "Node.js", "MQTT", "GraphQL"],
      github: "https://github.com/project4",
      demo: "https://demo.com/project4"
    }
  ]
}

export default portfolioConfig
