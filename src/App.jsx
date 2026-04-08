import React, { useState } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import './App.css'

import Loader from './components/Loader'
import Hero from './sections/Hero'
import Overview from './sections/Overview'
import SystemBreakdown from './sections/SystemBreakdown'
import ModularAttachments from './sections/ModularAttachments'
import InteractiveDemo from './sections/InteractiveDemo'
import BuildProcess from './sections/BuildProcess'
import Features from './sections/Features'
import Team from './sections/Team'
import Footer from './sections/Footer'
import ExperienceRating from './components/ExperienceRating'

function App() {
  const [loading, setLoading] = useState(true)
  
  // Track continuous page scroll 0 -> 1 for the sidebar tracker
  const { scrollYProgress } = useScroll()

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          className="app-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Peripheral Right-Aligned Scroll Tracker */}
          <div className="scroll-tracker-wrapper">
            <div className="scroll-tracker-track">
              <motion.div 
                className="scroll-tracker-fill" 
                style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              />
            </div>
          </div>

          <Hero />
          <Overview />
          <SystemBreakdown />
          <ModularAttachments />
          <InteractiveDemo />
          <BuildProcess />
          <Features />
          <Team />
          <ExperienceRating />
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App
