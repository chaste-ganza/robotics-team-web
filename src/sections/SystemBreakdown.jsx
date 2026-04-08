import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Move, Layers } from 'lucide-react'
import './SystemBreakdown.css'

const SystemBreakdown = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const systems = [
    {
      id: 1,
      title: "Mobility",
      icon: <Move size={36} className="system-icon" />,
      desc: "6-wheel adaptive suspension base capable of navigating 40-degree inclines."
    },
    {
      id: 2,
      title: "Control",
      icon: <Cpu size={36} className="system-icon" />,
      desc: "Local AI processing for autonomous pathfinding and obstacle avoidance."
    },
    {
      id: 3,
      title: "Docking",
      icon: <Layers size={36} className="system-icon" />,
      desc: "Universal magnetic multi-port for hot-swapping modules securely."
    }
  ];

  return (
    <section className="system-section">
      <div className="system-header">
        <h2 className="section-title">Core Architecture</h2>
        <p className="system-subtitle">Engineered for extreme reliability and seamless adaptability.</p>
      </div>

      <motion.div 
        className="system-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {systems.map((sys) => (
          <motion.div key={sys.id} variants={itemVariants} className="system-card pill-panel">
            <div className="icon-container">
              {sys.icon}
            </div>
            <h3 className="system-title">{sys.title}</h3>
            <p className="system-desc">{sys.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SystemBreakdown
