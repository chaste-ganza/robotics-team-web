import React from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  return (
    <motion.nav 
      className="main-nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    >
      <div className="nav-logo">
        FARMO
      </div>
      <div className="nav-actions">
        <button className="nav-icon-btn">—</button>
        <button className="nav-pill dark">
          LET'S TALK <span className="nav-dot"></span>
        </button>
        <button className="nav-pill">
          MENU <span className="nav-dots">••</span>
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
