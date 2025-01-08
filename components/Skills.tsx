import { motion } from 'framer-motion'
import { portfolioConfig } from '../config/portfolio.config'

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {portfolioConfig.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-dark-lighter p-6 rounded-lg text-center 
                       hover:shadow-lg hover:shadow-primary/5 transition-all duration-300
                       transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <skill.icon 
                  className="w-12 h-12 text-gray-400 group-hover:text-primary transition-colors duration-300"
                  style={{ color: skill.color }}
                />
                <h3 className="text-lg font-medium text-gray-300">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
