import { useCallback, useEffect, useState } from 'react'
import { HOME_SLIDES, SLIDE_CONFIG } from '../constants/slides'
import { getCurrentSlideFromScroll, scrollToElement } from '../utils/scrollUtils'

/**
 * Custom hook for managing slide navigation
 * @param {Function} setParentCurrentSlide - Callback to update parent component slide state
 * @returns {Object} - Slide navigation state and handlers
 */
export const useSlideNavigation = (setParentCurrentSlide) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Update parent component when slide changes
  useEffect(() => {
    if (setParentCurrentSlide) {
      setParentCurrentSlide(currentSlide)
    }
  }, [currentSlide, setParentCurrentSlide])

  // Function to go to a specific slide
  const goToSlide = useCallback((slideIndex) => {
    if (slideIndex >= 0 && slideIndex < HOME_SLIDES.length) {
      setCurrentSlide(slideIndex)
      scrollToElement(HOME_SLIDES[slideIndex])
    }
  }, [])

  // Function to update current slide based on scroll position
  const updateCurrentSlideFromScroll = useCallback(() => {
    if (!isScrolling) {
      const newSlide = getCurrentSlideFromScroll(HOME_SLIDES)
      setCurrentSlide(newSlide)
    }
  }, [isScrolling])

  // Handle wheel scroll navigation
  const handleWheel = useCallback((e) => {
    if (isScrolling) return

    e.preventDefault()

    const delta = e.deltaY
    let newSlide = currentSlide

    if (delta > 0 && currentSlide < HOME_SLIDES.length - 1) {
      newSlide = currentSlide + 1
    } else if (delta < 0 && currentSlide > 0) {
      newSlide = currentSlide - 1
    }

    if (newSlide !== currentSlide) {
      setIsScrolling(true)
      goToSlide(newSlide)

      setTimeout(() => {
        setIsScrolling(false)
      }, SLIDE_CONFIG.SCROLL_ANIMATION_DURATION)
    }
  }, [currentSlide, isScrolling, goToSlide])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (isScrolling) return

    let newSlide = currentSlide

    if ((e.key === 'ArrowDown' || e.key === ' ') && currentSlide < HOME_SLIDES.length - 1) {
      e.preventDefault()
      newSlide = currentSlide + 1
    } else if (e.key === 'ArrowUp' && currentSlide > 0) {
      e.preventDefault()
      newSlide = currentSlide - 1
    }

    if (newSlide !== currentSlide) {
      setIsScrolling(true)
      goToSlide(newSlide)

      setTimeout(() => {
        setIsScrolling(false)
      }, SLIDE_CONFIG.SCROLL_ANIMATION_DURATION)
    }
  }, [currentSlide, isScrolling, goToSlide])

  // Handle regular scroll events
  const handleScroll = useCallback(() => {
    updateCurrentSlideFromScroll()
  }, [updateCurrentSlideFromScroll])

  // Set up event listeners
  useEffect(() => {
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
    isScrolling
  }
}
