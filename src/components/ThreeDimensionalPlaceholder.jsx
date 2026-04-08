import React from 'react'
import { motion } from 'framer-motion'
import './ThreeDimensionalPlaceholder.css'

const ThreeDimensionalPlaceholder = ({ imageSrc, alt, className = '', accent = 'blue' }) => {
  const glowClass = accent === 'green' ? 'neon-glow-green' : 'neon-glow-blue';
  
  return (
    <div className={`canvas-container ${className}`}>
      <motion.div
        className={`placeholder-inner ${glowClass}`}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          rotateX: -5,
        }}
        style={{ perspective: 1000 }}
      >
        <img src={imageSrc} alt={alt} className="placeholder-image" />
        <div className="placeholder-overlay">
          <div className="overlay-badge">
            <span className="pulse-dot"></span>
            <span className="placeholder-text">WebGL Canvas Placeholder</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ThreeDimensionalPlaceholder
