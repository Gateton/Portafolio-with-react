import { motion } from 'framer-motion'
import { portfolioConfig } from '../config/portfolio.config'

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/about-image.jpg"
              alt="About me"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300"
          >
            <p className="text-lg leading-relaxed">
              {portfolioConfig.personal.description}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-primary font-semibold">Location</p>
                <p>{portfolioConfig.personal.location}</p>
              </div>
              <div>
                <p className="text-primary font-semibold">Email</p>
                <p>{portfolioConfig.personal.email}</p>
              </div>
              <div>
                <p className="text-primary font-semibold">Availability</p>
                <p>{portfolioConfig.personal.availability}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
