import { useCallback, useEffect, useState } from 'react'
import { HOME_SLIDES, SLIDE_CONFIG } from '../constants/slides'
import {
  debounce,
  getCurrentSlideFromScroll,
  scrollToElement,
} from '../utils/scrollUtils'

/**
 * Custom hook for managing slide navigation
 * @param {Function} setParentCurrentSlide - Callback to update parent component slide state
 * @returns {Object} - Slide navigation state and handlers
 */
export const useSlideNavigation = setParentCurrentSlide => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastWheelTime, setLastWheelTime] = useState(0)

  // Update parent component when slide changes
  useEffect(() => {
    if (setParentCurrentSlide) {
      setParentCurrentSlide(currentSlide)
    }
  }, [currentSlide, setParentCurrentSlide])

  // Function to go to a specific slide
  const goToSlide = useCallback(
    slideIndex => {
      if (
        slideIndex >= 0 &&
        slideIndex < HOME_SLIDES.length &&
        slideIndex !== currentSlide
      ) {
        setCurrentSlide(slideIndex)
        setIsScrolling(true)
        scrollToElement(HOME_SLIDES[slideIndex])

        // Reset scrolling state after animation
        setTimeout(() => {
          setIsScrolling(false)
        }, SLIDE_CONFIG.SCROLL_ANIMATION_DURATION)
      }
    },
    [currentSlide]
  )

  // Function to update current slide based on scroll position
  const updateCurrentSlideFromScroll = useCallback(() => {
    if (!isScrolling) {
      const newSlide = getCurrentSlideFromScroll(HOME_SLIDES)
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide)
      }
    }
  }, [isScrolling, currentSlide])

  // Debounced scroll handler to avoid too many updates
  const debouncedScrollHandler = useCallback(
    () =>
      debounce(
        updateCurrentSlideFromScroll,
        SLIDE_CONFIG.SCROLL_DEBOUNCE_DELAY
      )(),
    [updateCurrentSlideFromScroll]
  )

  // Handle wheel scroll navigation with improved timing
  const handleWheel = useCallback(
    e => {
      const now = Date.now()

      // Prevent too rapid wheel events
      if (now - lastWheelTime < 150) {
        e.preventDefault()
        return
      }

      if (isScrolling) {
        e.preventDefault()
        return
      }

      const delta = e.deltaY
      let newSlide = currentSlide

      // Only handle significant scroll deltas to avoid accidental triggers
      if (Math.abs(delta) > 10) {
        if (delta > 0 && currentSlide < HOME_SLIDES.length - 1) {
          newSlide = currentSlide + 1
        } else if (delta < 0 && currentSlide > 0) {
          newSlide = currentSlide - 1
        }

        // Prevent default scroll behavior for any wheel event within slides
        // This includes attempts to scroll beyond boundaries
        e.preventDefault()

        if (newSlide !== currentSlide) {
          setLastWheelTime(now)
          goToSlide(newSlide)
        }
      }
    },
    [currentSlide, isScrolling, goToSlide, lastWheelTime]
  )

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    e => {
      if (isScrolling) return

      let newSlide = currentSlide

      if (
        (e.key === 'ArrowDown' || e.key === ' ') &&
        currentSlide < HOME_SLIDES.length - 1
      ) {
        e.preventDefault()
        newSlide = currentSlide + 1
      } else if (e.key === 'ArrowUp' && currentSlide > 0) {
        e.preventDefault()
        newSlide = currentSlide - 1
      }

      if (newSlide !== currentSlide) {
        goToSlide(newSlide)
      }
    },
    [currentSlide, isScrolling, goToSlide]
  )

  // Handle regular scroll events (for manual scrolling)
  const handleScroll = useCallback(() => {
    debouncedScrollHandler()
  }, [debouncedScrollHandler])

  // Set up event listeners
  useEffect(() => {
    // Use passive: false for wheel to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Initial slide detection
    updateCurrentSlideFromScroll()

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleWheel, handleKeyDown, handleScroll, updateCurrentSlideFromScroll])

  // Handle URL hash navigation
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash && HOME_SLIDES.includes(hash)) {
      const slideIndex = HOME_SLIDES.indexOf(hash)
      setTimeout(() => goToSlide(slideIndex), 100)
    }
  }, [goToSlide])

  return {
    currentSlide,
    slides: HOME_SLIDES,
    goToSlide,
    isScrolling,
  }
}
