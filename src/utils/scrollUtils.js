/**
 * Scroll utility functions for smooth navigation
 */

/**
 * Smoothly scroll to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {string} behavior - Scroll behavior ('smooth' | 'auto')
 * @param {string} block - Vertical alignment ('start' | 'center' | 'end')
 */
export const scrollToElement = (
  elementId,
  behavior = 'smooth',
  block = 'start'
) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior,
      block,
      inline: 'nearest',
    })
  }
}

/**
 * Get the current visible slide based on scroll position
 * @param {string[]} slides - Array of slide IDs
 * @returns {number} - Index of the currently visible slide
 */
export const getCurrentSlideFromScroll = slides => {
  const windowHeight = window.innerHeight
  const scrollPosition = window.scrollY
  const viewportCenter = scrollPosition + windowHeight / 2

  // Find the slide that contains the viewport center
  for (let i = 0; i < slides.length; i++) {
    const element = document.getElementById(slides[i])
    if (element) {
      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.offsetHeight

      // If viewport center is within this slide, it's the current one
      if (viewportCenter >= elementTop && viewportCenter < elementBottom) {
        return i
      }
    }
  }

  // Fallback: return the last slide if we're scrolled past everything
  return slides.length - 1
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
