import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const Conferences = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="page conferences-page">
      <motion.section 
        className="page-hero"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h1>Conference Marketing That Actually Works</h1>
          <p className="hero-subtitle">
            Turn developer conferences into lead generation machines with authentic engagement 
            and technical credibility that developers actually trust.
          </p>
        </div>
      </motion.section>

      <motion.section 
        className="content-section"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ delay: 0.3 }}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Why Conference Marketing for Developers is Different</motion.h2>
          <motion.div className="features-grid" variants={staggerContainer}>
            <motion.div className="feature-card" variants={fadeInUp}>
              <h3>🎯 Developer-First Approach</h3>
              <p>Developers can smell marketing BS from across the conference hall. We speak their language authentically.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <h3>🤝 Relationship Building</h3>
              <p>It's not about collecting business cards. It's about building genuine connections with the developer community.</p>
            </motion.div>
            <motion.div className="feature-card" variants={fadeInUp}>
              <h3>📊 Quality Over Quantity</h3>
              <p>We focus on meaningful engagements that lead to actual product adoption, not vanity metrics.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section alt-bg"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ delay: 0.6 }}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Our Conference Marketing Services</motion.h2>
          <motion.div className="services-list" variants={staggerContainer}>
            <motion.div className="service-item" variants={fadeInUp}>
              <h3>Pre-Conference Strategy</h3>
              <ul>
                <li>Conference selection and ROI analysis</li>
                <li>Speaker proposal development and coaching</li>
                <li>Booth design and experience planning</li>
                <li>Pre-event community engagement</li>
              </ul>
            </motion.div>
            <motion.div className="service-item" variants={fadeInUp}>
              <h3>During Conference Execution</h3>
              <ul>
                <li>On-site team management and coordination</li>
                <li>Real-time social media and content creation</li>
                <li>Developer relationship building and lead qualification</li>
                <li>Technical demonstrations and workshops</li>
              </ul>
            </motion.div>
            <motion.div className="service-item" variants={fadeInUp}>
              <h3>Post-Conference Follow-up</h3>
              <ul>
                <li>Personalized developer outreach campaigns</li>
                <li>Content creation from conference insights</li>
                <li>Community integration and nurturing</li>
                <li>ROI analysis and optimization recommendations</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        transition={{ delay: 0.9 }}
      >
        <div className="container">
          <motion.h2 variants={fadeInUp}>Conference Success Stories</motion.h2>
          <motion.div className="case-studies" variants={staggerContainer}>
            <motion.div className="case-study" variants={fadeInUp}>
              <h3>KubeCon + CloudNativeCon</h3>
              <p>
                Helped a cloud infrastructure startup go from unknown to industry leader with a 
                strategic conference presence that generated 500+ qualified leads and 50+ enterprise trials.
              </p>
              <div className="metrics">
                <span className="metric">500+ Qualified Leads</span>
                <span className="metric">50+ Enterprise Trials</span>
                <span className="metric">300% ROI</span>
              </div>
            </motion.div>
            <motion.div className="case-study" variants={fadeInUp}>
              <h3>DockerCon</h3>
              <p>
                Transformed a developer tools company's conference strategy, resulting in their highest 
                conversion conference ever with authentic developer engagement and technical credibility.
              </p>
              <div className="metrics">
                <span className="metric">200+ Demo Requests</span>
                <span className="metric">85% Lead Quality Score</span>
                <span className="metric">25% Conversion Rate</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="cta-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ delay: 1.2 }}
      >
        <div className="container">
          <h2>Ready to Make Your Next Conference Count?</h2>
          <p>Let's create a conference strategy that developers actually appreciate.</p>
          <div className="cta-buttons">
            <a href="mailto:hello@weirdos.dev" className="cta-button primary">
              Discuss Your Conference Goals
            </a>
            <a href="#" className="cta-button secondary">
              View Conference Calendar
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Conferences 