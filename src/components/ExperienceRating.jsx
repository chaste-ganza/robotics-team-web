import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ExperienceRating.css'

const ExperienceRating = () => {
  const [rating, setRating] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const options = [
    { id: 1, emoji: '🤯', text: 'MIND BLOWN' },
    { id: 2, emoji: '🔥', text: 'INCREDIBLE' },
    { id: 3, emoji: '✨', text: 'SMOOTH' },
    { id: 4, emoji: '🤔', text: 'NEUTRAL' },
  ]

  const handleSelect = (id) => {
    setRating(id)
    setTimeout(() => {
      setSubmitted(true)
    }, 600)
  }

  return (
    <section className="rating-section">
      <div className="rating-container">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div 
              key="rating-prompt"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rating-content"
            >
              <h2 className="rating-title">How was your experience?</h2>
              <p className="rating-subtitle">Rate the scroll engine.</p>
              
              <div className="rating-options">
                {options.map((opt) => (
                  <motion.button 
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    className={`rating-btn ${rating === opt.id ? 'selected' : ''}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="rating-emoji">{opt.emoji}</span>
                    <span className="rating-text">{opt.text}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="rating-success"
              initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ type: "spring", stiffness: 100, damping: 12 }}
              className="rating-success"
            >
              <motion.div 
                className="success-icon"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ✦
              </motion.div>
              <h2 className="rating-title">Feedback Received.</h2>
              <p className="rating-subtitle">Thank you for exploring Farmo.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ExperienceRating
