import { useState, useEffect } from 'react'

function Typewriter() {
  const words = ["Frontend Разработчик", "React Специалист", "UI/UX Энтузиаст"]
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    // Если мы допечатали слово до конца
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500) // Пауза перед стиранием
      return
    }

    // Если мы стерли слово до нуля
    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length) // Переход к следующему слову
      return
    }

    // Сама анимация печати и стирания
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1))
    }, reverse ? 50 : 100) // Скорость стирания 50мс, печати 100мс

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