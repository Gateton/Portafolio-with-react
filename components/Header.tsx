import { motion, useScroll, useTransform } from 'framer-motion'
import styled from '@emotion/styled'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem;
  background: rgba(15, 22, 36, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Header = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  
  return (
    <Nav>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'var(--gradient)',
            opacity
          }}
        />
        <ul className="nav-links">
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#about">About</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#experience">Experience</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </motion.div>
    </Nav>
  )
}

export default Header
