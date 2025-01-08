import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { portfolioConfig } from '../config/portfolio.config'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-dark">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,51,51,0.05),rgba(17,17,17,1))]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        {portfolioConfig.experience && portfolioConfig.experience.length > 0 && (
          <Experience />
        )}
        {portfolioConfig.projects && portfolioConfig.projects.length > 0 && (
          <Projects />
        )}
        <Contact />
      </main>
    </div>
  )
}
