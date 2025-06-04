import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import linkedinIcon from '../../assets/icons/LI.png'
import danielImage from '../../assets/weirdos/daniel.png'
import gabrielImage from '../../assets/weirdos/gabriel.png'
import shakedImage from '../../assets/weirdos/shaked.png'

/**
 * Team Section Component
 * Displays the "Who are weirdos" section with mobile-friendly LinkedIn links
 */
const TeamSection = ({ variants }) => {
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

  // Team member data
  const teamMembers = [
    {
      name: 'Daniel Bass',
      firstName: 'Daniel',
      lastName: 'Bass',
      title: 'creatives',
      image: danielImage,
      linkedinUrl: 'https://www.linkedin.com/in/daniel-bass-8b2bb81ab/',
    },
    {
      name: 'Shaked H. Weiss',
      firstName: 'Shaked',
      lastName: 'H. Weiss',
      title: 'operations',
      image: shakedImage,
      linkedinUrl: 'https://www.linkedin.com/in/shaked-holtzer-weiss-533558210/',
    },
    {
      name: 'Gabriel L. Manor',
      firstName: 'Gabriel',
      lastName: 'L. Manor',
      title: 'tech advisor',
      image: gabrielImage,
      linkedinUrl: 'https://www.linkedin.com/in/gemanor/',
    },
  ]

  return (
    <motion.section
      id='who-are-weirdos'
      className='slide who-are-slide'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.6 }}
      variants={variants}
    >
      <div className='slide-content'>
        <h1 className='slide-title'>Who Are Weirdos, Anyway?</h1>
        <p className='slide-subtitle'>
          <span className='prompt-symbol'>&gt;_</span>{' '}
          <span className='crew-text'>a perfectly balanced crew</span>
        </p>
        <div className='team-members'>
          {teamMembers.map((member, index) => (
            <div key={index} className='team-member'>
              {isMobile ? (
                // Mobile: Make image and info clickable
                <a
                  href={member.linkedinUrl}
                  className='mobile-member-link'
                  aria-label={`${member.name} LinkedIn Profile`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={member.image} alt={member.name} />
                  <div className='member-info'>
                    <h3 className='member-name'>
                      {member.firstName}
                      <br />
                      {member.lastName}
                    </h3>
                    <p className='member-title'>
                      <span className='title-prompt'>&gt;_</span> {member.title}
                    </p>
                  </div>
                </a>
              ) : (
                // Desktop: Keep separate elements
                <>
                  <img src={member.image} alt={member.name} />
                  <div className='member-info'>
                    <h3 className='member-name'>
                      {member.firstName}
                      <br />
                      {member.lastName}
                    </h3>
                    <p className='member-title'>
                      <span className='title-prompt'>&gt;_</span> {member.title}
                    </p>
                  </div>
                  <a href={member.linkedinUrl} className='linkedin-icon' aria-label={`${member.name} LinkedIn`} target='_blank' rel='noopener noreferrer'>
                    <img src={linkedinIcon} alt='LinkedIn' />
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
        <div className='scroll-indicator'>
          <div className='scroll-arrow'>▼</div>
        </div>
      </div>
    </motion.section>
  )
}

export default TeamSection
