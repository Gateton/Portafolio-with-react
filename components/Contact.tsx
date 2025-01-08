import { motion } from 'framer-motion'
import { config } from '../config'

const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Get In Touch</h2>
        <div className="social-links">
          {Object.entries(config.social).map(([platform, url], index) => (
            <motion.a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {platform}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
