import React, { useState, useEffect } from 'react'
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
import Navbar from './components/Navbar'

// Critical heavy assets that must be preloaded before showing the site
import farmoRoverImg from './assets/images/farmo_rover.png'
import waterModuleImg from './assets/images/module_water.png'
import seedModuleImg from './assets/images/module_seed.png'

function App() {
  const [loading, setLoading] = useState(true)
  const [assetsLoaded, setAssetsLoaded] = useState(false)
  
  // Track continuous page scroll 0 -> 1 for the sidebar tracker
  const { scrollYProgress } = useScroll()

  // Hardware Asset Preloader
  useEffect(() => {
    const criticalImages = [farmoRoverImg, waterModuleImg, seedModuleImg]
    let loadedCount = 0

    const checkAllLoaded = () => {
      loadedCount++
      if (loadedCount === criticalImages.length) {
        setAssetsLoaded(true)
      }
    }

    criticalImages.forEach(src => {
      const img = new Image()
      img.src = src
      img.onload = checkAllLoaded
      img.onerror = checkAllLoaded // We proceed even if one asset fails to prevent locking the screen forever
    })
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" assetsLoaded={assetsLoaded} onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          className="app-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
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
