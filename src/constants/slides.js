/**
 * Home page slide configuration
 */
export const HOME_SLIDES = ['hello', 'hero', 'who-are-weirdos', 'contact']

/**
 * Slide navigation configuration
 */
export const SLIDE_CONFIG = {
  SCROLL_DEBOUNCE_DELAY: 100,
  SCROLL_ANIMATION_DURATION: 1000,
  SLIDE_TRANSITION_DURATION: 0.8,
}

/**
 * Animation variants for slides
 */
export const SLIDE_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: SLIDE_CONFIG.SLIDE_TRANSITION_DURATION,
      ease: 'easeOut',
    },
  },
}
