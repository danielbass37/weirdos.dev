import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const ProductLaunches = () => {
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
    <div className="page product-launches-page">
      <motion.section 
        className="page-hero"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container">
          <h1>Product Launches That Developers Actually Care About</h1>
          <p className="hero-subtitle">
            From developer-first messaging to technical content that resonates with your audience. 
            Launch products that developers discover, try, adopt, and advocate for.
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
          <h2>Why Developer Product Launches Fail</h2>
          <div className="problems-grid">
            <div className="problem-card">
              <h3>🚫 Marketing Speak</h3>
              <p>Traditional marketing language makes developers nope out immediately. They want technical substance, not buzzwords.</p>
            </div>
            <div className="problem-card">
              <h3>🚫 Wrong Channels</h3>
              <p>LinkedIn ads and cold emails? Developers have already tuned out. You need to meet them where they actually are.</p>
            </div>
            <div className="problem-card">
              <h3>🚫 Feature Focus</h3>
              <p>Developers don't care about your features. They care about problems solved and how your tool fits their workflow.</p>
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
          <h2>Our Product Launch Framework</h2>
          <div className="framework-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Pre-Launch Foundation (8-12 weeks)</h3>
                <ul>
                  <li>Developer persona research and validation</li>
                  <li>Technical content strategy development</li>
                  <li>Community identification and relationship building</li>
                  <li>Developer-first messaging and positioning</li>
                  <li>Beta program design and execution</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Launch Execution (2-4 weeks)</h3>
                <ul>
                  <li>Coordinated multi-channel launch campaign</li>
                  <li>Technical documentation and tutorials</li>
                  <li>Developer community engagement</li>
                  <li>Influencer and advocate activation</li>
                  <li>Real-time optimization and response</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Post-Launch Growth (Ongoing)</h3>
                <ul>
                  <li>Adoption tracking and optimization</li>
                  <li>Community feedback integration</li>
                  <li>Content marketing and education</li>
                  <li>Developer success stories and case studies</li>
                  <li>Continuous iteration and improvement</li>
                </ul>
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
          <h2>What Makes Our Launches Different</h2>
          <div className="differentiators-grid">
            <div className="diff-card">
              <h3>📚 Technical Depth</h3>
              <p>We create launch content that passes the developer sniff test. Real code examples, actual use cases, honest limitations.</p>
            </div>
            <div className="diff-card">
              <h3>🎯 Developer Channels</h3>
              <p>We know where developers actually hang out: GitHub, Stack Overflow, Reddit, Discord, and niche technical communities.</p>
            </div>
            <div className="diff-card">
              <h3>🤝 Community First</h3>
              <p>We build relationships before we pitch products. Trust and credibility come first, sales follow naturally.</p>
            </div>
            <div className="diff-card">
              <h3>📊 Meaningful Metrics</h3>
              <p>We track developer adoption, not just vanity metrics. Active usage, GitHub stars, community engagement, and actual adoption.</p>
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
          <h2>Launch Success Stories</h2>
          <div className="success-stories">
            <div className="story-card">
              <h3>Open Source Database Tool</h3>
              <p>
                Launched a new database migration tool from 0 to 10k+ GitHub stars in 3 months through 
                authentic developer community engagement and technical content marketing.
              </p>
              <div className="results">
                <div className="result-item">
                  <span className="number">10,000+</span>
                  <span className="label">GitHub Stars</span>
                </div>
                <div className="result-item">
                  <span className="number">50,000+</span>
                  <span className="label">Monthly Downloads</span>
                </div>
                <div className="result-item">
                  <span className="number">500+</span>
                  <span className="label">Community Contributors</span>
                </div>
              </div>
            </div>
            <div className="story-card">
              <h3>Developer API Platform</h3>
              <p>
                Transformed a struggling API product launch into a developer favorite through 
                community-driven messaging and hands-on technical content.
              </p>
              <div className="results">
                <div className="result-item">
                  <span className="number">15,000+</span>
                  <span className="label">Developer Signups</span>
                </div>
                <div className="result-item">
                  <span className="number">85%</span>
                  <span className="label">30-day Retention</span>
                </div>
                <div className="result-item">
                  <span className="number">300%</span>
                  <span className="label">ROI Increase</span>
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
          <h2>Ready to Launch Something Developers Will Love?</h2>
          <p>Let's create a product launch that cuts through the noise and connects with developers authentically.</p>
          <div className="cta-buttons">
            <a href="mailto:hello@weirdos.dev" className="cta-button primary">
              Plan Your Launch Strategy
            </a>
            <a href="#" className="cta-button secondary">
              View Launch Case Studies
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ProductLaunches 