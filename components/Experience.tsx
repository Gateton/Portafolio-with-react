import { motion } from 'framer-motion'
import { portfolioConfig } from '../config/portfolio.config'
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi'

const Experience = () => {
  const experiences = portfolioConfig?.experience || []

  return (
    <section id="experience" className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary/50 to-primary/5" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative grid md:grid-cols-2 gap-8 md:gap-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/3">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-dark-light" />
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-dark-lighter p-6 rounded-lg shadow-lg hover:shadow-primary/5 
                             transition-all duration-300 border border-primary/10"
                  >
                    {/* Title and Company */}
                    <div className={`flex items-center gap-3 mb-4 text-primary
                                  ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                      <HiOutlineBriefcase className="w-5 h-5" />
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    </div>

                    {/* Company */}
                    <p className="text-lg font-semibold text-gray-300 mb-2">{exp.company}</p>

                    {/* Period and Location */}
                    <div className={`flex items-center gap-6 text-sm text-gray-400 mb-4
                                  ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-2">
                        <HiOutlineCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiOutlineLocationMarker className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 text-gray-300 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((desc, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/50 mt-2" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full
                                   hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
