import { useState, useEffect } from 'react'

function Typewriter() {
  const words = ["Frontend Разработчик", "React Специалист", "UI/UX Энтузиаст"]
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500) 
      return
    }

    
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length) 
      return
    }

    
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 50 : 100) 

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words])

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </span>
  )
}

export default Typewriter