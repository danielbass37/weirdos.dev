import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import SlideNavigation from '../components/common/SlideNavigation'
import HelloSlide from '../components/sections/HelloSlide'
import TeamSection from '../components/sections/TeamSection'
import { SLIDE_VARIANTS } from '../constants/slides'
import { useSlideNavigation } from '../hooks/useSlideNavigation'

const Home = ({ setCurrentSlide: setParentCurrentSlide }) => {
  const { currentSlide, slides, goToSlide } = useSlideNavigation(setParentCurrentSlide)

  return (
    <div className="home">
      {/* Slide Navigation Dots */}
      <SlideNavigation
        slides={slides}
        currentSlide={currentSlide}
        onSlideChange={goToSlide}
      />

      {/* Hello Slide */}
      <HelloSlide variants={SLIDE_VARIANTS} />

      {/* Hero Slide */}
      <motion.section
        id="hero"
        className="slide hero-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={SLIDE_VARIANTS}
      >
        <div className="slide-content">
          <h1 className="slide-title">We're the Weirdos Your Developer Community Needs</h1>
          <p className="slide-subtitle">
            Traditional marketing doesn't work for developers. They smell BS from a mile away.
            That's where we come in - authentic, technical, and refreshingly honest marketing for dev tools and tech companies.
          </p>
          <div className="scroll-indicator">
            <div className="scroll-arrow">▼</div>
          </div>
        </div>
      </motion.section>

      {/* What Do Weirdos Do? */}
      <motion.section
        id="what-do-weirdos-do"
        className="slide what-do-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={SLIDE_VARIANTS}
      >
        <div className="slide-content">
          <div className="slide-header">
          <h1 className="slide-title">What Do Weirdos Do?</h1>
            <p className="slide-subtitle">
              <span className="prompt-symbol">&gt;_</span> we turn developers into customers through authentic engagement
            </p>
          </div>
          <div className="services-showcase">
            <Link to="/conferences" className="service-card conference-card">
              <div className="service-icon">
                <div className="icon-wrapper">
                  <span className="icon">🎤</span>
                </div>
              </div>
              <div className="service-content">
              <h3>Conference Marketing</h3>
              <p>We turn developer conferences into lead generation machines with authentic engagement and technical credibility.</p>
                <div className="service-features">
                  <span className="feature-tag">Speaker Partnerships</span>
                  <span className="feature-tag">Booth Strategy</span>
                  <span className="feature-tag">Technical Demos</span>
                </div>
              </div>
              <div className="service-hover-effect"></div>
            </Link>

            <Link to="/product-launches" className="service-card launch-card">
              <div className="service-icon">
                <div className="icon-wrapper">
                  <span className="icon">🚀</span>
                </div>
            </div>
              <div className="service-content">
              <h3>Product Launch Campaigns</h3>
              <p>From developer-first messaging to technical content that actually resonates with your audience.</p>
                <div className="service-features">
                  <span className="feature-tag">Technical Content</span>
                  <span className="feature-tag">Launch Strategy</span>
                  <span className="feature-tag">Community Building</span>
                </div>
              </div>
              <div className="service-hover-effect"></div>
            </Link>

            <Link to="/paid-advertising" className="service-card advertising-card">
              <div className="service-icon">
                <div className="icon-wrapper">
                  <span className="icon">🎯</span>
                </div>
            </div>
              <div className="service-content">
              <h3>Paid Advertising</h3>
              <p>Developer-focused ads that don't suck. We know where devs hang out and how to talk to them.</p>
                <div className="service-features">
                  <span className="feature-tag">Targeted Campaigns</span>
                  <span className="feature-tag">Platform Expertise</span>
                  <span className="feature-tag">Performance Analytics</span>
                </div>
              </div>
              <div className="service-hover-effect"></div>
            </Link>
          </div>
          <div className="services-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Conferences</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Campaigns</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5M+</span>
              <span className="stat-label">Developers Reached</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200%</span>
              <span className="stat-label">Avg ROI</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Tech Partners</span>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow">▼</div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <TeamSection variants={SLIDE_VARIANTS} />

      {/* What Can Weirdos Offer You? */}
      <motion.section
        id="what-can-weirdos-offer"
        className="slide offer-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={SLIDE_VARIANTS}
      >
        <div className="slide-content">
          <h1 className="slide-title">Why Weirdos?</h1>
          <p className="slide-subtitle">
            <span className="prompt-symbol">&gt;_</span> we're not marketing consultants - we actually work
          </p>
          <div className="offers-grid">
            <div className="offer-card">
              <h3>
                we understand<br />
                your <span className="highlight">product</span>
              </h3>
            </div>
            <div className="offer-card">
              <h3>
                we know<br />
                <span className="highlight">developers</span>
              </h3>
            </div>
            <div className="offer-card">
              <h3>
                we provide<br />
                <span className="highlight">measurable success</span>
              </h3>
            </div>
            <div className="offer-card">
              <h3>
                we give tools<br />
                <span className="highlight">not create dependencies</span>
              </h3>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow">▼</div>
          </div>
        </div>
      </motion.section>

      {/* How Much Does This Cost? */}
      <motion.section
        id="pricing"
        className="slide pricing-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={SLIDE_VARIANTS}
      >
        <div className="slide-content">
          <h1 className="slide-title">How Much Does This Cost?</h1>
          <p className="slide-subtitle">
            Honestly? It depends on what weird challenges you're facing. But here's our typical engagement structure:
          </p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Strategy Session</h3>
              <div className="price">$500</div>
              <p>2-hour deep dive into your developer marketing challenges. We'll audit your current approach and give you a roadmap.</p>
            </div>
            <div className="pricing-card featured">
              <h3>Monthly Retainer</h3>
              <div className="price">$8,000-$25,000</div>
              <p>Full-service developer marketing. Strategy, execution, content, community management, and performance tracking.</p>
            </div>
            <div className="pricing-card">
              <h3>Project-Based</h3>
              <div className="price">$15,000-$50,000</div>
              <p>Conference marketing, product launch campaigns, or specific initiatives with defined scope and timeline.</p>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow">▼</div>
          </div>
        </div>
      </motion.section>

      {/* Talk to a Weirdo */}
      <motion.section
        id="contact"
        className="slide contact-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={SLIDE_VARIANTS}
      >
        <div className="slide-content">
          <h1 className="slide-title">Talk to a Weirdo</h1>
          <p className="slide-subtitle">
            Ready to try marketing that doesn't make developers cringe? Let's have a conversation.
          </p>
          <div className="contact-options">
            <a href="mailto:hello@weirdos.dev" className="contact-button primary">
              Email Us: hello@weirdos.dev
            </a>
            <a href="#" className="contact-button secondary">
              Schedule a Call
            </a>
          </div>
          <div className="contact-info">
            <p>Or find us lurking in developer communities, writing technical content, and generally being weird in the best possible way.</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
