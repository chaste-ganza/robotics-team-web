import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import farmoRoverImg from '../assets/images/farmo_rover.png'
import './Hero.css'

const Hero = () => {
  const sentence = "Bold Engineering,\nBrought to Life"
  const words = sentence.split('\n')

  // Sophisticated cursor tracking for image parallax
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Fluid spring configuration for the image lag
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })

  const mouseParallaxX = useTransform(springX, [-1000, 1000], [30, -30])
  const mouseParallaxY = useTransform(springY, [-1000, 1000], [30, -30])

  const handleMouseMove = (e) => {
    if (typeof window !== 'undefined') {
      x.set(e.clientX - window.innerWidth / 2)
      y.set(e.clientY - window.innerHeight / 2)
    }
  }

  return (
    <section className="hero-section" onMouseMove={handleMouseMove}>
      <div className="hero-grid">
        <div className="hero-text">
          <div className="badge-container">
            <button className="pill-btn">
              <span className="dot-indicator"></span> FARMO PROJECT
            </button>
          </div>
          <h1 className="hero-title">
            {words.map((line, lineIndex) => (
              <div key={lineIndex} className="title-line-wrapper">
                <motion.span
                  className="title-line"
                  initial={{ y: "100%", skewY: 5 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ duration: 0.9, delay: lineIndex * 0.15, ease: [0.33, 1, 0.68, 1] }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h1>
          
          <motion.div 
            className="hero-subtitle-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          >
            <p className="hero-subtitle">
              We combine robust engineering, autonomous AI, and modern hardware to create agricultural machinery that feels visually striking and technically seamless.
            </p>
            <div className="hero-actions">
              <button className="pill-btn dark">
                <span className="dot-indicator" style={{color: '#fff'}}></span> OUR APPROACH
              </button>
              <button className="pill-btn" style={{border: 'none', background: 'transparent', boxShadow: 'none'}}>
                EXPLORE ↓
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          style={{ x: mouseParallaxX, y: mouseParallaxY }}
        >
          <img src={farmoRoverImg} alt="Farmo 6-Wheel Rover Prototype" className="hero-product-img" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
