import { motion } from 'framer-motion'
import { portfolioConfig } from '../config/portfolio.config'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = portfolioConfig?.projects || []

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative overflow-hidden rounded-xl bg-dark-lighter">
                {/* Project Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform 
                             group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter via-dark-lighter/80 to-transparent" />
                </div>

                {/* Project Info */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full
                                 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary 
                               transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary 
                                 transition-colors duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Code</span>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-primary 
                                 transition-colors duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-dark-lighter/50 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={portfolioConfig?.social?.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-lighter 
                     hover:bg-primary/10 text-primary border border-primary rounded-lg
                     transition-all duration-300 hover:-translate-y-1"
          >
            <span>View More Projects</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
