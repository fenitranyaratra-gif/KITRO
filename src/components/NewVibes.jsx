import newvibe from '../assets/newvibe.jpg'

export default function NewVibes() {
  return (
    <section className="new-vibes">
      <div className="container">
        <div className="new-vibes-inner">
          <div className="new-vibes-content">
            <div className="eyebrow">NEW SEASON</div>
            <h2>NEW<br />VIBES</h2>
            <p>Discover everything new and now.</p>
            <button className="btn-solid">EXPLORE COLLECTION</button>
          </div>
          <div className="new-vibes-image">
            <img src={newvibe} alt="Model wearing new season collection" />
          </div>
        </div>
      </div>
    </section>
  )
}