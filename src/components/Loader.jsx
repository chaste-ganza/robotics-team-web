import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onComplete(), 500) // slight pause at 100 before clearing
          return 100
        }
        // Jump around for interesting fake loading texture
        return prev + Math.floor(Math.random() * 20) + 5
      })
    }, 150)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div 
      className="loader-wrapper"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="loader-content">
        <h1 className="loader-logo">FARMO</h1>
        
        <div className="loader-progress-wrapper">
          <span className="loader-number">{Math.min(progress, 100)}%</span>
          <div className="loader-bar-container">
            <motion.div 
              className="loader-bar" 
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ type: "tween", ease: "linear", duration: 0.15 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
