import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const PaidAdvertising = () => {
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
    <div className="page paid-advertising-page">
      <motion.section 
        className="page-hero"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h1>Paid Advertising That Developers Don't Hate</h1>
          <p className="hero-subtitle">
            Developer-focused ads that don't suck. We know where devs hang out, how to talk to them, 
            and most importantly, how to respect their intelligence and time.
          </p>
        </div>
      </motion.section>

      <motion.section 
        className="content-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h2>Why Most Developer Ads Fail Spectacularly</h2>
          <div className="failure-reasons">
            <div className="failure-card">
              <h3>💸 Wrong Platforms</h3>
              <p>Facebook and LinkedIn ads for developers? That's like trying to sell ice to penguins. We know where developers actually spend their time.</p>
            </div>
            <div className="failure-card">
              <h3>🎭 Fake Personas</h3>
              <p>Stock photos and corporate speak make developers cringe. We use real developers, real problems, and real solutions.</p>
            </div>
            <div className="failure-card">
              <h3>📢 Interruption Marketing</h3>
              <p>Developers hate being interrupted while coding. Our ads provide value, education, and respect for their workflow.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section alt-bg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h2>Where We Actually Reach Developers</h2>
          <div className="platforms-grid">
            <div className="platform-card">
              <h3>🔍 Google & Stack Overflow</h3>
              <p>When developers are searching for solutions, we're there with helpful, technical answers that solve real problems.</p>
              <div className="platform-stats">
                <span>90% of developers use Stack Overflow</span>
              </div>
            </div>
            <div className="platform-card">
              <h3>📱 Reddit & Hacker News</h3>
              <p>Authentic community engagement and sponsored content that adds value to ongoing technical discussions.</p>
              <div className="platform-stats">
                <span>2M+ developers on r/programming</span>
              </div>
            </div>
            <div className="platform-card">
              <h3>📺 YouTube & Tech Podcasts</h3>
              <p>Educational content marketing through technical tutorials, code reviews, and developer-focused channels.</p>
              <div className="platform-stats">
                <span>70% of developers watch tech YouTube</span>
              </div>
            </div>
            <div className="platform-card">
              <h3>📧 Developer Newsletters</h3>
              <p>Sponsored content in trusted developer newsletters with authentic, technical messaging.</p>
              <div className="platform-stats">
                <span>85% email open rates in dev newsletters</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h2>Our Developer Advertising Strategy</h2>
          <div className="strategy-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Research & Positioning</h3>
              <ul>
                <li>Deep dive into your developer audience</li>
                <li>Competitive intelligence and gap analysis</li>
                <li>Technical messaging and positioning</li>
                <li>Channel identification and validation</li>
              </ul>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Creative Development</h3>
              <ul>
                <li>Developer-authentic ad creative</li>
                <li>Technical copy that resonates</li>
                <li>Landing page optimization</li>
                <li>A/B testing framework</li>
              </ul>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Campaign Execution</h3>
              <ul>
                <li>Multi-channel campaign launch</li>
                <li>Real-time optimization</li>
                <li>Performance monitoring</li>
                <li>Continuous testing and iteration</li>
              </ul>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Analysis & Scaling</h3>
              <ul>
                <li>Developer-specific metrics tracking</li>
                <li>ROI analysis and reporting</li>
                <li>Channel optimization</li>
                <li>Scale successful campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section alt-bg"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h2>What We Measure (Beyond Vanity Metrics)</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>🎯 Developer Intent</h3>
              <p>Not just clicks, but actual developer interest and engagement with your solution.</p>
            </div>
            <div className="metric-card">
              <h3>⚡ Time to Value</h3>
              <p>How quickly developers can understand and get value from your product after clicking.</p>
            </div>
            <div className="metric-card">
              <h3>📈 Adoption Rate</h3>
              <p>Actual product trials, signups, and usage - not just marketing qualified leads.</p>
            </div>
            <div className="metric-card">
              <h3>💬 Community Sentiment</h3>
              <p>How the developer community perceives and discusses your brand and products.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="content-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h2>Advertising Success Stories</h2>
          <div className="ad-success-stories">
            <div className="success-story">
              <h3>API Security Platform</h3>
              <p>
                Transformed a failing LinkedIn ad campaign into a developer acquisition machine by moving to 
                Stack Overflow and changing the messaging from "enterprise security" to "protect your API in 5 minutes."
              </p>
              <div className="success-metrics">
                <div className="metric">
                  <span className="value">300%</span>
                  <span className="label">Increase in qualified trials</span>
                </div>
                <div className="metric">
                  <span className="value">70%</span>
                  <span className="label">Lower cost per acquisition</span>
                </div>
                <div className="metric">
                  <span className="value">85%</span>
                  <span className="label">Developer satisfaction score</span>
                </div>
              </div>
            </div>
            <div className="success-story">
              <h3>DevOps Monitoring Tool</h3>
              <p>
                Launched targeted YouTube pre-roll campaigns on developer channels, resulting in 
                the highest quality lead generation in the company's history.
              </p>
              <div className="success-metrics">
                <div className="metric">
                  <span className="value">2,500+</span>
                  <span className="label">High-intent developer signups</span>
                </div>
                <div className="metric">
                  <span className="value">45%</span>
                  <span className="label">Trial to paid conversion</span>
                </div>
                <div className="metric">
                  <span className="value">400%</span>
                  <span className="label">ROI in first quarter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="cta-section"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h2>Ready to Try Ads That Developers Actually Appreciate?</h2>
          <p>Let's create advertising campaigns that respect developers' intelligence and deliver real value.</p>
          <div className="cta-buttons">
            <a href="mailto:hello@weirdos.dev" className="cta-button primary">
              Audit My Current Ads
            </a>
            <a href="#" className="cta-button secondary">
              See Our Ad Examples
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default PaidAdvertising 