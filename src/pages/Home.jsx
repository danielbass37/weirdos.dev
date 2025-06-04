import { motion } from 'framer-motion'
import SlideNavigation from '../components/common/SlideNavigation'
import HelloSlide from '../components/sections/HelloSlide'
import TeamSection from '../components/sections/TeamSection'
import { SLIDE_VARIANTS } from '../constants/slides'
import { useSlideNavigation } from '../hooks/useSlideNavigation'

const Home = ({ setCurrentSlide: setParentCurrentSlide }) => {
  const { currentSlide, slides, goToSlide } = useSlideNavigation(
    setParentCurrentSlide
  )

  return (
    <div className='home'>
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
        id='hero'
        className='slide hero-slide'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        variants={SLIDE_VARIANTS}
      >
        <div className='slide-content'>
          <h1 className='slide-title'>
            Forget. About. Strategy.<br/>
            We do developer marketing.
          </h1>
          <p className='slide-subtitle'>
            &gt;_ we do ad campaigns, product lauches, and conference booths with <span className='highlight'>actual deliverables</span> and <span className='highlight'>measurable results</span>.
          </p>
          <div className='scroll-indicator'>
            <div className='scroll-arrow'>▼</div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <TeamSection variants={SLIDE_VARIANTS} />

      {/* Talk to a Weirdo */}
      <motion.section
        id='contact'
        className='slide contact-slide'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.6 }}
        variants={SLIDE_VARIANTS}
      >
        <div className='slide-content'>
          <h1 className='slide-title'>Talk to a Weirdo</h1>
          <div className='contact-options'>
            <a
              href='mailto:hello@weirdos.dev'
              className='contact-button primary'
            >
              &gt;_ hello@weirdos.dev
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
