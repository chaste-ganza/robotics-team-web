import React from 'react'
import { motion } from 'framer-motion'
import waterModuleImg from '../assets/images/module_water.png'
import seedModuleImg from '../assets/images/module_seed.png'
import './ModularAttachments.css'

const ModularAttachments = () => {
  const modules = [
    {
      id: "water",
      name: "Watering Module",
      desc: "Precision localized hydration with adjustable pressure sprayers and a 50L internal tank.",
      img: waterModuleImg
    },
    {
      id: "seed",
      name: "Seed Planting Module",
      desc: "High-speed pneumatic seed drilling for flawless row planting at exact depths.",
      img: seedModuleImg
    },
    {
      id: "carry",
      name: "Carrying Module",
      desc: "Robust flatbed payload tray handling up to 120kg of harvested crops or external batteries.",
      img: waterModuleImg // Re-using image proxy for now
    }
  ];

  return (
    <section className="modules-section">
      <div className="modules-bg-glow"></div>
      
      <div className="modules-header">
        <h2 className="section-title text-gradient-green">Modular Ecosystem</h2>
        <p className="modules-subtitle">Swap tools on the fly. No downtime.</p>
      </div>

      <div className="modules-list">
        {modules.map((mod, i) => (
          <motion.div 
            key={mod.id}
            className={`module-card flex-row-${i % 2 === 0 ? 'regular' : 'reverse'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="module-text-content">
              <h3 className="module-title">{mod.name}</h3>
              <p className="module-desc">{mod.desc}</p>
              <button className="pill-btn dark">View Specs</button>
            </div>
            
            <div className="module-visual">
              <div className="module-placeholder-wrapper">
                {/* 2D image is back, replacing WebGL */}
                <img src={mod.img} alt={mod.name} className="module-image-asset" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ModularAttachments
