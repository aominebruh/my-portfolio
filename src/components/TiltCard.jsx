import { useRef, useState } from 'react'

function TiltCard({ children, className, href }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5

    setStyle({
      transform: `perspective(1000px) rotateY(${x * 15}deg) rotateX(${y * -15}deg) scale(1.02)`,
      transition: 'transform 0.1s ease-out'
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
      transition: 'transform 0.5s ease'
    })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </a>
  )
}
export default TiltCard