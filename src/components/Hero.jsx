import Typewriter from './Typewriter'
import MagneticButton from './MagneticButton'

function Hero() {
  const copyDiscord = () => {
    navigator.clipboard.writeText('aominebruh');
    alert('Ник в Discord скопирован: aominebruh');
  }

  return (
    <section className="hero container" id="contacts">
      <div className="hero__content">
        
        {/* Бейдж статуса (без лишнего текста) */}
        <div className="status-badge">
          <span className="status-dot"></span>
          Открыт для предложений
        </div>

        <span className="hero__subtitle">
          &gt; <Typewriter />
        </span>
        
        <h1>Привет, я создаю <br/><span>цифровые</span> интерфейсы</h1>
        
        <p>
          Меня зовут Иван. Я начинающий веб-разработчик, который обожает чистый код и современный дизайн. 
          Умею превращать макеты из Figma в живые, быстрые и анимированные сайты на React.
        </p>
        
        <div className="socials">
          <MagneticButton href="https://t.me/cursedblin" className="btn-social primary">
            ✈️ Telegram: @cursedblin
          </MagneticButton>
          <MagneticButton onClick={copyDiscord} className="btn-social">
            🎮 Discord: aominebruh
          </MagneticButton>
        </div>
      </div>

      <div className="hero__visual">
        <img src="avatar.jpg" alt="Аватарка" className="avatar-img" />
      </div>
    </section>
  )
}

export default Hero