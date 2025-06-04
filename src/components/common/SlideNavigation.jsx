/**
 * Slide Navigation Component
 * Displays navigation dots for slides
 */
const SlideNavigation = ({
  slides,
  currentSlide,
  onSlideChange,
  className = '',
}) => {
  return (
    <div className={`slide-navigation slide-nav-${currentSlide} ${className}`}>
      {slides.map((slide, index) => (
        <button
          key={slide}
          className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
          onClick={() => onSlideChange(index)}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === currentSlide ? 'true' : 'false'}
        />
      ))}
    </div>
  )
}

export default SlideNavigation
