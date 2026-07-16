import heroModel from '../assets/hero.png'

export default function Hero() {
  return (
    <section className="hero-full">
      <div className="hero-full-bg">
        <img src={heroModel} alt="Model wearing a trench coat" />
      </div>

      <div className="hero-full-overlay">
        <div className="hero-full-content">
          <span className="hero-full-tag">NOUVELLE SAISON</span>

          <h1 className="hero-full-title">
            STYLE SANS<br />COMPROMIS
          </h1>

          <div className="hero-full-collection">
            NEW COLLECTION 2024
          </div>

        </div>
      </div>
    </section>
  )
}
