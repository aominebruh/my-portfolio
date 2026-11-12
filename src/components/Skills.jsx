import { SiReact, SiJavascript, SiHtml5, SiFigma, SiGit, SiVite, SiTailwindcss } from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa' // <-- Взяли иконку CSS отсюда

function Skills() {
  const skills = [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' }, // <-- Используем FaCss3Alt
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
    { name: 'Git', icon: <SiGit />, color: '#F05032' },
    { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' }
  ]

  return (
    <section className="skills-section container">
      <h2 className="section-title">Мой стек технологий</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ '--brand-color': skill.color }}>
            <div className="skill-icon-wrapper">
              {skill.icon}
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills