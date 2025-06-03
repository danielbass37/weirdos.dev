import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import blackSimpleLogo from '../../assets/logos/black simple.png'
import greenSimpleLogo from '../../assets/logos/green simple.png'

const Navbar = ({ currentSlide = 0 }) => {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Define navbar styles for each slide
  const getNavbarStyles = (slideIndex) => {
    switch(slideIndex) {
      case 0: // Hello slide (black background)
        return {
          background: '#FF88D7',
          textColor: '#0D0106',
          prefixColor: '#0D0106',
          logo: blackSimpleLogo
        }
      case 1: // Hero slide (lime background)
        return {
          background: '#0D0408',
          textColor: '#F8F0D8',
          prefixColor: '#DCF01E',
          logo: greenSimpleLogo
        }
      case 2: // What do weirdos do slide (cream background)
        return {
          background: '#CB90ED',
          textColor: '#F8F0D8',
          prefixColor: '#DCF01E',
          logo: greenSimpleLogo
        }
      case 3: // Who are weirdos slide (black background)
        return {
          background: '#dcf01e',
          textColor: '#0D0106',
          prefixColor: '#0D0106',
          logo: blackSimpleLogo
        }
      case 4: // Offer slide (cream background)
        return {
          background: '#CB90ED',
          textColor: '#F8F0D8',
          prefixColor: '#DCF01E',
          logo: greenSimpleLogo
        }
      default: // Other slides
        return {
          background: '#FF88D7',
          textColor: '#0D0106',
          prefixColor: '#0D0106',
          logo: blackSimpleLogo
        }
    }
  }

  const navStyles = getNavbarStyles(currentSlide)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogoClick = (e) => {
    e.preventDefault()

    if (location.pathname === '/') {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      // Update current slide to first slide
      const homeElement = document.getElementById('hello')
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // If on other page, navigate to home
      navigate('/')
    }
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home page and then scroll to section
      navigate('/')
      // Use timeout to ensure page has loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // If already on home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <motion.nav
      className={`navbar slide-nav-${currentSlide} ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: navStyles.background,
        color: navStyles.textColor
      }}
    >
      <div className="nav-container">
        <a href="/" onClick={handleLogoClick} className="nav-logo" style={{ color: navStyles.textColor }}>
          <img src={navStyles.logo} alt="Weirdos.dev" className="logo-image" />
        </a>

        <div className="nav-menu">
          <div className="nav-dropdown">
            <button
              onClick={() => scrollToSection('what-do-weirdos-do')}
              className="nav-link dropdown-trigger"
              style={{ color: navStyles.textColor }}
            >
              <span className="nav-prefix" style={{ color: navStyles.prefixColor }}>&gt;_</span> What Do Weirdos Do?
              <span className="dropdown-arrow">▼</span>
            </button>

            <div className="dropdown-menu">
              <Link to="/conferences" className="dropdown-link">
                Conferences
              </Link>
              <Link to="/product-launches" className="dropdown-link">
                Product Launches
              </Link>
              <Link to="/paid-advertising" className="dropdown-link">
                Paid Ads
              </Link>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('who-are-weirdos')}
            className="nav-link"
            style={{ color: navStyles.textColor }}
          >
            <span className="nav-prefix" style={{ color: navStyles.prefixColor }}>&gt;_</span> Who are the Weirdos?
          </button>

          <button
            onClick={() => scrollToSection('pricing')}
            className="nav-link"
            style={{ color: navStyles.textColor }}
          >
            <span className="nav-prefix" style={{ color: navStyles.prefixColor }}>&gt;_</span> Pricing
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="nav-link"
            style={{ color: navStyles.textColor }}
          >
            <span className="nav-prefix" style={{ color: navStyles.prefixColor }}>&gt;_</span> Talk to a Weirdo
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
