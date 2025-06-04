import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import blackSimpleLogo from '../../assets/logos/black simple.png'
import greenSimpleLogo from '../../assets/logos/green simple.png'

const Navbar = ({ currentSlide = 0 }) => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Define navbar styles for each slide
  const getNavbarStyles = slideIndex => {
    switch (slideIndex) {
      case 0: // Hello slide (black background)
        return {
          background: '#FF88D7',
          textColor: '#0D0106',
          prefixColor: '#0D0106',
          logo: blackSimpleLogo,
        }
      case 1: // Hero slide (lime background)
        return {
          background: '#0D0408',
          textColor: '#F8F0D8',
          prefixColor: '#DCF01E',
          logo: greenSimpleLogo,
        }
      case 2: // Who are weirdos slide (black background)
        return {
          background: '#dcf01e',
          textColor: '#0D0106',
          prefixColor: '#0D0106',
          logo: blackSimpleLogo,
        }
      case 3: // Contact slide (cream background)
        return {
          background: '#FF88D7',
          textColor: '#0D0106',
          prefixColor: '#0D0106',
          logo: blackSimpleLogo,
        }
      default: // Other slides
        return {
          background: '#FF88D7',
          textColor: '#0D0106',
          prefixColor: '#0D0106',
          logo: blackSimpleLogo,
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

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Check on mount
    checkIsMobile()

    // Listen for resize events
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const handleLogoClick = e => {
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

  const scrollToSection = sectionId => {
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

  // Define button text based on screen size
  const getButtonText = (desktop, mobile) => {
    return isMobile ? mobile : desktop
  }

  return (
    <motion.nav
      className={`navbar slide-nav-${currentSlide} ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: navStyles.background,
        color: navStyles.textColor,
      }}
    >
      <div className='nav-container'>
        <a
          href='/'
          onClick={handleLogoClick}
          className='nav-logo'
          style={{ color: navStyles.textColor }}
        >
          <img src={navStyles.logo} alt='Weirdos.dev' className='logo-image' />
        </a>

        <div className='nav-menu'>
          <button
            onClick={() => scrollToSection('hero')}
            className='nav-link'
            style={{ color: navStyles.textColor }}
          >
            <span
              className='nav-prefix'
              style={{ color: navStyles.prefixColor }}
            >
              &gt;_
            </span>{' '}
            {getButtonText('What is this?', 'What?')}
          </button>

          <button
            onClick={() => scrollToSection('who-are-weirdos')}
            className='nav-link'
            style={{ color: navStyles.textColor }}
          >
            <span
              className='nav-prefix'
              style={{ color: navStyles.prefixColor }}
            >
              &gt;_
            </span>{' '}
            {getButtonText('Who are the Weirdos?', 'Who?')}
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className='nav-link'
            style={{ color: navStyles.textColor }}
          >
            <span
              className='nav-prefix'
              style={{ color: navStyles.prefixColor }}
            >
              &gt;_
            </span>{' '}
            {getButtonText('Talk to a Weirdo', 'Talk')}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
