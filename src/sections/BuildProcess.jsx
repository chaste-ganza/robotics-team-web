import React from 'react'
import { motion } from 'framer-motion'
import { Wrench, TestTube, Rocket } from 'lucide-react'
import './BuildProcess.css'

const BuildProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Prototyping",
      desc: "Chassis design & kinematics testing.",
      icon: <Wrench size={24} />
    },
    {
      id: 2,
      title: "Integration & Testing",
      desc: "Sensor calibration and AI model training on field data.",
      icon: <TestTube size={24} />
    },
    {
      id: 3,
      title: "Field Deployment",
      desc: "Live field trials showcasing autonomous navigation.",
      icon: <Rocket size={24} />
    }
  ];

  return (
    <section className="timeline-section">
      <h2 className="section-title text-gradient text-center">Development Journey</h2>
      
      <div className="timeline">
        {steps.map((step, index) => (
          <motion.div 
            key={step.id} 
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-marker">
              {step.icon}
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">Stage {step.id}: {step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default BuildProcess
