import { motion } from 'framer-motion'
import { portfolioConfig } from '../config/portfolio.config'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <img
            src={portfolioConfig.personal.avatar}
            alt={portfolioConfig.personal.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary/30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Hi, I'm </span>
            <span className="text-primary">{portfolioConfig.personal.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-400 font-mono">
            {portfolioConfig.personal.role}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-gray-400 text-lg mb-12"
        >
          {portfolioConfig.personal.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-md 
                     transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg 
                     hover:shadow-primary/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 
                     rounded-md transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiArrowDown className="w-6 h-6 text-primary/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
