import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import helloImage from '../assets/logos/hello.png'
import danielImage from '../assets/weirdos/daniel.png'
import shakedImage from '../assets/weirdos/shaked.png'
import gabrielImage from '../assets/weirdos/gabriel.png'

const Home = ({ setCurrentSlide: setParentCurrentSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = ['hello', 'hero', 'what-do-weirdos-do', 'who-are-weirdos', 'what-can-weirdos-offer', 'pricing', 'contact']

  // Update parent component when slide changes
  useEffect(() => {
    if (setParentCurrentSlide) {
      setParentCurrentSlide(currentSlide)
    }
  }, [currentSlide, setParentCurrentSlide])

  // Function to update current slide based on which section is visible
  const updateCurrentSlideFromScroll = () => {
    const windowHeight = window.innerHeight
    const scrollPosition = window.scrollY + windowHeight / 2

    for (let i = 0; i < slides.length; i++) {
      const element = document.getElementById(slides[i])
      if (element) {
        const elementTop = element.offsetTop
        const elementBottom = elementTop + element.offsetHeight
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setCurrentSlide(i)
          break
        }
      }
    }
  }

  useEffect(() => {
    let isScrolling = false
    let scrollTimeout

    const handleWheel = (e) => {
      if (isScrolling) return

      e.preventDefault()
      
      const delta = e.deltaY
      let newSlide = currentSlide

      if (delta > 0 && currentSlide < slides.length - 1) {
        // Scroll down
        newSlide = currentSlide + 1
      } else if (delta < 0 && currentSlide > 0) {
        // Scroll up
        newSlide = currentSlide - 1
      }

      if (newSlide !== currentSlide) {
        isScrolling = true
        setCurrentSlide(newSlide)
        
        const targetElement = document.getElementById(slides[newSlide])
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }

        // Reset scrolling flag after animation
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    const handleKeyDown = (e) => {
      if (isScrolling) return

      let newSlide = currentSlide

      if ((e.key === 'ArrowDown' || e.key === ' ') && currentSlide < slides.length - 1) {
        e.preventDefault()
        newSlide = currentSlide + 1
      } else if (e.key === 'ArrowUp' && currentSlide > 0) {
        e.preventDefault()
        newSlide = currentSlide - 1
      }

      if (newSlide !== currentSlide) {
        isScrolling = true
        setCurrentSlide(newSlide)
        
        const targetElement = document.getElementById(slides[newSlide])
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }

        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 1000)
      }
    }

    // Handle regular scroll events to update current slide indicator
    const handleScroll = () => {
      if (!isScrolling) {
        updateCurrentSlideFromScroll()
      }
    }

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial slide detection
    updateCurrentSlideFromScroll()

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [currentSlide, slides])

  // Handle direct navigation to sections (called from navbar)
  useEffect(() => {
    // Check if URL has a hash to scroll to specific section
    const hash = window.location.hash.substring(1)
    if (hash && slides.includes(hash)) {
      const slideIndex = slides.indexOf(hash)
      setCurrentSlide(slideIndex)
      
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
    const targetElement = document.getElementById(slides[slideIndex])
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div className="home">
      {/* Slide Navigation Dots */}
      <div className={`slide-navigation slide-nav-${currentSlide}`}>
        {slides.map((slide, index) => (
          <button
            key={slide}
            className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hello Slide */}
      <motion.section 
        id="hello" 
        className="slide hello-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={slideVariants}
      >
        <div className="slide-content">
          <img src={helloImage} alt="Hello!" className="hello-image" />
          <div className="scroll-indicator">
            <div className="scroll-arrow">▼</div>
          </div>
        </div>
      </motion.section>

      {/* Hero Slide */}
      <motion.section 
        id="hero" 
        className="slide hero-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={slideVariants}
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
        variants={slideVariants}
      >
        <div className="slide-content">
          <h1 className="slide-title">What Do Weirdos Do?</h1>
          <div className="services-grid">
            <div className="service-card">
              <h3>Conference Marketing</h3>
              <p>We turn developer conferences into lead generation machines with authentic engagement and technical credibility.</p>
            </div>
            <div className="service-card">
              <h3>Product Launch Campaigns</h3>
              <p>From developer-first messaging to technical content that actually resonates with your audience.</p>
            </div>
            <div className="service-card">
              <h3>Paid Advertising</h3>
              <p>Developer-focused ads that don't suck. We know where devs hang out and how to talk to them.</p>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow">▼</div>
          </div>
        </div>
      </motion.section>

      {/* Who Are Weirdos, Anyway? */}
      <motion.section 
        id="who-are-weirdos" 
        className="slide who-are-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={slideVariants}
      >
        <div className="slide-content">
          <h1 className="slide-title">Who Are Weirdos, Anyway?</h1>
          <p className="slide-subtitle">
            <span className="prompt-symbol">&gt;_</span> <span className="crew-text">a perfectly balanced three-person crew</span>
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
                  <span className="title-prompt">&gt;_</span> operations
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
                  <span className="title-prompt">&gt;_</span> tech advocacy
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
                  <span className="title-prompt">&gt;_</span> creatives
                </p>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="scroll-arrow">▼</div>
          </div>
        </div>
      </motion.section>

      {/* What Can Weirdos Offer You? */}
      <motion.section 
        id="what-can-weirdos-offer" 
        className="slide offer-slide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={slideVariants}
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
        variants={slideVariants}
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
        variants={slideVariants}
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
            <div className="contact-info">
              <p>Or find us lurking in developer communities, writing technical content, and generally being weird in the best possible way.</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home 