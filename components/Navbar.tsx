import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { portfolioConfig } from '../config/portfolio.config'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', updateScrolled)
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const firstName = portfolioConfig?.personal?.name?.split(' ')[0] || 'Portfolio'

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {firstName}
            <span className="text-primary">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {portfolioConfig?.social?.github && (
              <motion.a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
            )}
            {portfolioConfig?.social?.linkedin && (
              <motion.a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
            )}
            {portfolioConfig?.social?.twitter && (
              <motion.a
                href={portfolioConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </nav>

        {/* Progress Bar */}
        <motion.div
          className="h-[2px] bg-primary origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </motion.header>
  )
}

export default Navbar
