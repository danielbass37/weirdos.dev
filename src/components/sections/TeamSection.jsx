import { motion } from 'framer-motion'
import React from 'react'
import danielImage from '../../assets/weirdos/daniel.png'
import gabrielImage from '../../assets/weirdos/gabriel.png'
import shakedImage from '../../assets/weirdos/shaked.png'

/**
 * Team Section Component
 * Displays the "Who are weirdos" section with original design
 */
const TeamSection = ({ variants }) => {
  return (
    <motion.section
      id="who-are-weirdos"
      className="slide who-are-slide"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={variants}
    >
      <div className="slide-content">
        <h1 className="slide-title">Who Are Weirdos, Anyway?</h1>
        <p className="slide-subtitle">
          <span className="prompt-symbol">&gt;_</span> <span className="crew-text">a perfectly balanced crew</span>
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src={danielImage} alt="Daniel Bass" />
            <div className="member-info">
              <h3 className="member-name">
                Daniel<br />
                Bass
              </h3>
              <p className="member-title">
                <span className="title-prompt">&gt;_</span> creatives
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={shakedImage} alt="Shaked H. Weiss" />
            <div className="member-info">
              <h3 className="member-name">
                Shaked<br />
                H. Weiss
              </h3>
              <p className="member-title">
                <span className="title-prompt">&gt;_</span> operations
              </p>
            </div>
          </div>
          <div className="team-member">
            <img src={gabrielImage} alt="Gabriel L. Manor" />
            <div className="member-info">
              <h3 className="member-name">
                Gabriel<br />
                L. Manor
              </h3>
              <p className="member-title">
                <span className="title-prompt">&gt;_</span> tech advisor
              </p>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow">▼</div>
        </div>
      </div>
    </motion.section>
  )
}

export default TeamSection
