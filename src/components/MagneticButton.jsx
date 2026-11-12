import { useRef, useState } from 'react'

function MagneticButton({ children, className, href, onClick }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    // Притягиваем кнопку к курсору (делим на 3, чтобы движение было мягким)
    setPosition({ x: middleX / 3, y: middleY / 3 })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noreferrer" 
        className={className}
        ref={ref}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {children}
      </a>
    )
  }

  return (
    <button 
      className={className} 
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </button>
  )
}
export default MagneticButton