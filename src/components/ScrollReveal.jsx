import { useEffect, useRef, useState } from 'react'

function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Если блок на экране - показываем, если нет - скрываем
        setIsVisible(entry.isIntersecting)
      })
    }, { threshold: 0.1 })

    const currentRef = domRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  )
}
export default ScrollReveal