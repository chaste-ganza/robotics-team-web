import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './Overview.css'

const Overview = () => {
  const ref = useRef(null)
  
  // Track scroll specifically over this component's bounding box
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Slow down the Y movement of the text block to create physical depth
  const yOffset = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section ref={ref} className="overview-section">
      <div className="overview-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="overview-text-container"
          style={{ y: yOffset }} /* Applying true scrolling parallax */
        >
          <h2 className="section-title">The Future of Agriculture</h2>
          <p className="overview-description">
            Farmo is not just a tractor. It is a highly intelligent, <strong>modular platform</strong> designed to traverse rugged terrains while delicately performing complex agricultural tasks. <br/><br/>
            Whether it's precision watering, high-density seed planting, or heavy load carrying, Farmo adapts to the mission.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Overview
