import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress' // Новое
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills' // Новое
import Projects from './components/Projects'
import InfiniteCode from './components/InfiniteCode'
import SideCode from './components/SideCode'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <ScrollProgress /> {/* Новое */}
      
      <div className="bg-glow"></div>
      <SideCode />
      <Header />
      
      <main>
        <Hero />
        
        <div className="marquee-container">
          <div className="marquee-content">
            REACT <span>•</span> JAVASCRIPT <span>•</span> HTML5 <span>•</span> CSS3 <span>•</span> FIGMA <span>•</span> GIT <span>•</span> RESPONSIVE DESIGN <span>•</span> REACT <span>•</span> JAVASCRIPT <span>•</span> HTML5 <span>•</span> CSS3 <span>•</span> FIGMA <span>•</span> GIT <span>•</span> RESPONSIVE DESIGN <span>•</span>
          </div>
        </div>

        <ScrollReveal>
          <Skills /> {/* Новое */}
        </ScrollReveal>

        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal>
          <InfiniteCode />
        </ScrollReveal>
      </main>
      
      {/* Новый огромный футер */}
      <footer className="footer-cta container">
        <p className="footer-subtitle">Есть интересный проект?</p>
        <h2 className="footer-title">Давайте работать<br/>вместе!</h2>
        <a href="https://t.me/cursedblin" target="_blank" rel="noreferrer" className="footer-btn">
          Написать мне в Telegram ↗
        </a>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Иван. Сделано с любовью на React.</p>
        </div>
      </footer>
    </div>
  )
}

export default App