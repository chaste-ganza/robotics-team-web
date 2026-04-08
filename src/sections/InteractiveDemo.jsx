import React from 'react'
import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'
import './InteractiveDemo.css'

const InteractiveDemo = () => {
  return (
    <section className="demo-section">
      <div className="demo-container glass-panel">
        <motion.div 
          className="demo-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-gradient">See Farmo in Action</h2>
          <p className="demo-subtitle">Interactive WebGL Experience Loading...</p>
        </motion.div>

        <motion.div 
          className="demo-video-placeholder"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="glow-border-layer"></div>
          <div className="video-inner glass-panel">
            <motion.div 
              className="play-btn-container"
              whileHover={{ scale: 1.1 }}
            >
              <PlayCircle size={80} className="play-icon" />
            </motion.div>
            <p className="placeholder-note">[ 3D Spline Interactive Environment Here ]</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InteractiveDemo
