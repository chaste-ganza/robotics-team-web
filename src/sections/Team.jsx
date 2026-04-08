import React from 'react'
import { motion } from 'framer-motion'
import './Team.css'

const Team = () => {
  const teamMembers = [
    { id: 1, name: "Name Surname", role: "Role Title", bio: "Short biography description.", imageUrl: "https://i.pravatar.cc/300?img=47" },
    { id: 2, name: "Name Surname", role: "Role Title", bio: "Short biography description.", imageUrl: "https://i.pravatar.cc/300?img=11" },
    { id: 3, name: "Name Surname", role: "Role Title", bio: "Short biography description.", imageUrl: "https://i.pravatar.cc/300?img=5" },
    { id: 4, name: "Name Surname", role: "Role Title", bio: "Short biography description.", imageUrl: "https://i.pravatar.cc/300?img=12" },
    { id: 5, name: "Name Surname", role: "Role Title", bio: "Short biography description.", imageUrl: "https://i.pravatar.cc/300?img=15" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } // Faster stagger for 5 items
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 80, filter: "blur(10px)" }, // Start with a slight blur
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 15,
        mass: 1
      } 
    }
  };

  return (
    <section className="team-section">
      <div className="team-header">
        <h2 className="section-title">The Engineering Core</h2>
        <p className="team-subtitle">Meet the minds building the future of automated agriculture.</p>
      </div>

      <motion.div 
        className="team-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={cardVariants} className="team-card">
            <div className="team-image-wrapper">
              <img src={member.imageUrl} alt={member.name} className="team-image" />
              <div className="image-overlay">
                <button className="pill-btn dark small">VIEW PROFILE</button>
              </div>
            </div>
            
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              
              <div className="team-socials">
                <a href="#" className="social-text-link">LINKEDIN</a>
                <a href="#" className="social-text-link">GITHUB</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Team
