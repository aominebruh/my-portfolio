import { useState, useEffect } from 'react'

const codeText = `const developer = {
  name: "Frontend Developer",
  skills: ["React", "JavaScript", "CSS", "Figma"],
  hardSkills: ["Git", "API", "Adaptive Design"],
  isReadyToWork: true
};

function createAwesomeSite() {
  console.log("Building the future...");
  return "Hello, World!";
}`

function CodeEditor() {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < codeText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + codeText[index])
        setIndex((prev) => prev + 1)
      }, 30) // Скорость печати (30 мс на символ)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <div className="editor-wrapper">
      {/* Шапка окна в стиле MacOS */}
      <div className="editor-header">
        <div className="editor-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="editor-title">developer.js</div>
      </div>

      {/* Само окно с кодом */}
      <div className="editor-body">
        <pre>
          <code className="code-text">
            {text}
            <span className="cursor">|</span>
          </code>
        </pre>
      </div>
    </div>
  )
}

export default CodeEditor