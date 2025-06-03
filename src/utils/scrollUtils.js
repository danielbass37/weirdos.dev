/**
 * Scroll utility functions for smooth navigation
 */

/**
 * Smoothly scroll to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {string} behavior - Scroll behavior ('smooth' | 'auto')
 * @param {string} block - Vertical alignment ('start' | 'center' | 'end')
 */
export const scrollToElement = (elementId, behavior = 'smooth', block = 'start') => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior,
      block
    })
  }
}

/**
 * Get the current visible slide based on scroll position
 * @param {string[]} slides - Array of slide IDs
 * @returns {number} - Index of the currently visible slide
 */
export const getCurrentSlideFromScroll = (slides) => {
  const windowHeight = window.innerHeight
  const scrollPosition = window.scrollY + windowHeight / 2

  for (let i = 0; i < slides.length; i++) {
    const element = document.getElementById(slides[i])
    if (element) {
      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.offsetHeight

      if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
        return i
      }
    }
  }
  return 0
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}

/**
 * Throttle function to limit function calls
 * @param {Function} func - Function to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Throttled function
 */
export const throttle = (func, delay) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, delay)
    }
  }
}
