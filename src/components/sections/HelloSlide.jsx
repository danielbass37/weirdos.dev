import { motion } from 'framer-motion'
import helloImage from '../../assets/logos/hello.png'

/**
 * Hello Slide Component
 * First slide with hello image and scroll indicator
 */
const HelloSlide = ({ variants }) => {
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
          src={helloImage}
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
