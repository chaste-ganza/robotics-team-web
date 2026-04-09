import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import farmoRoverImg from '../assets/images/farmo_rover.png'
import './Hero.css'

const Hero = () => {
  const sentence = "Bold Ideas,\nBrought to Life"
  const words = sentence.split('\n')

  const x = useMotionValue(0)
  const y = useMotionValue(0)
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
      <div className="hero-content">
        
        <div className="hero-top">
          <h1 className="hero-main-title">
            {words.map((line, lineIndex) => (
              <div key={lineIndex} className={`title-line-wrapper ${lineIndex === 0 ? 'offset-left' : 'offset-right'}`}>
                <motion.span
                  className="title-line"
                  initial={{ y: "100%", skewY: 5 }}
                  animate={{ y: 0, skewY: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 + lineIndex * 0.15, ease: [0.33, 1, 0.68, 1] }}
                >
                  {line}
                </motion.span>
              </div>
            ))}
          </h1>
        </div>

        <div className="hero-bottom">
          <motion.div 
            className="hero-visual-box"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
            style={{ x: mouseParallaxX, y: mouseParallaxY }}
          >
            <img src={farmoRoverImg} alt="Farmo 6-Wheel Rover Prototype" className="hero-product-img" />
          </motion.div>

          <motion.div 
            className="hero-text-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
          >
            <p className="hero-paragraph">
              We combine design, motion, 3D, and development to create agricultural experiences that feel visually striking and technically seamless. From concept launches to immersive autonomous fields, we build work that captures attention and invites interaction.
            </p>
            <div style={{ display: 'flex' }}>
              <button className="nav-pill" style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}>
                <span className="nav-dot" style={{ backgroundColor: '#000' }}></span> OUR APPROACH
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
