import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import helloImage from '../../assets/logos/hello.png'
import helloMobileImage from '../../assets/logos/hellomobile.png'

/**
 * Hello Slide Component
 * First slide with hello image and scroll indicator
 * Uses different images for desktop and mobile
 */
const HelloSlide = ({ variants }) => {
  const [isMobile, setIsMobile] = useState(false)

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

  return (
    <motion.section
      id='hello'
      className='slide hello-slide'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.6 }}
      variants={variants}
    >
      <div className='slide-content'>
        <img
          src={isMobile ? helloMobileImage : helloImage}
          alt='Hello!'
          className='hello-image'
          loading='eager'
        />
        <div className='scroll-indicator'>
          <div className='scroll-arrow'>▼</div>
        </div>
      </div>
    </motion.section>
  )
}

export default HelloSlide
