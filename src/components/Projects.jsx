import TiltCard from './TiltCard'

const projects = [
  {
    id: '01',
    title: 'Coffee Shop',
    desc: 'Первый коммерческий проект. Адаптивный дизайн, меню, корзина.',
    link: 'https://aominebruh.github.io/coffee-site/', 
    image: 'coffee.jpg', 
  },
  {
    id: '02',
    title: 'Cyber Arena (ПК Клуб)',
    desc: 'Сайт ПК клуба. Темный дизайн, неоновые акценты.',
    link: 'https://aominebruh.github.io/cyber-arena/', 
    image: 'cyber.jpg', 
  },
  {
    id: '03',
    title: 'E-commerce Platform',
    desc: 'Интернет-магазин с корзиной и фильтрами (в разработке).',
    link: '#',
    image: null, 
  }
]

// Вот эту функцию и экспорт мы восстанавливаем:
function Projects() {
  return (
    <>
      <div className="marquee-container">
        <div className="marquee-content">
          REACT <span>•</span> JAVASCRIPT <span>•</span> HTML5 <span>•</span> CSS3 <span>•</span> FIGMA <span>•</span> GIT <span>•</span> RESPONSIVE DESIGN <span>•</span> REACT <span>•</span> JAVASCRIPT <span>•</span> HTML5 <span>•</span> CSS3 <span>•</span> FIGMA <span>•</span> GIT <span>•</span> RESPONSIVE DESIGN <span>•</span>
        </div>
      </div>

      <section className="projects-section container" id="projects">
        <h2 className="section-title">Избранные работы</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <TiltCard 
              key={project.id} 
              href={project.link} 
              className="project-card"
            >
              <div className="project-number">{project.id}</div>
              
              <div className="project-visual">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <div className="project-mockup">
                    <div className="mockup-header">
                      <div className="mockup-dot"></div>
                      <div className="mockup-dot"></div>
                      <div className="mockup-dot"></div>
                    </div>
                    <div className="mockup-content">
                      <div className="mockup-bar"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>

              <div className="project-arrow">↗</div>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects // <--- ВОТ ЭТА СТРОЧКА БЫЛА ПОТЕРЯНА
