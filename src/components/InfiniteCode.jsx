import { useState, useEffect } from 'react'

const fullCode = `// Добро пожаловать в мой мир кода
const developer = {
  name: "Ivan",
  status: "Ready to work",
  skills: ["React", "JS", "CSS"],
  isAwesome: true
};

while (alive) {
  eat();
  sleep();
  code();
  repeat();
}`

function InfiniteCode() {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout

    if (!isDeleting && index < fullCode.length) {
      // Печатаем
      timeout = setTimeout(() => {
        setText(fullCode.substring(0, index + 1))
        setIndex(index + 1)
      }, 40) // Скорость печати
    } 
    else if (!isDeleting && index === fullCode.length) {
      // Пауза перед стиранием
      timeout = setTimeout(() => setIsDeleting(true), 3000)
    } 
    else if (isDeleting && index > 0) {
      // Стираем
      timeout = setTimeout(() => {
        setText(fullCode.substring(0, index - 1))
        setIndex(index - 1)
      }, 15) // Скорость стирания
    } 
    else if (isDeleting && index === 0) {
      // Начинаем заново
      setIsDeleting(false)
    }

    return () => clearTimeout(timeout)
  }, [index, isDeleting])

  return (
    <section className="infinite-code-section">
      <div className="container">
        <div className="editor-wrapper">
          <div className="editor-header">
            <div className="editor-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="editor-title">developer.js</div>
          </div>
          <div className="editor-body">
            <pre>
              <code className="code-text">
                {text}
                <span className="cursor">|</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
export default InfiniteCode