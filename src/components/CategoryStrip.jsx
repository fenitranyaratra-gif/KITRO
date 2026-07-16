import men from '../assets/men.jpg'
import women from '../assets/women.jpg'
import kid from '../assets/kid.jpg'

const categories = [
  {
    title: 'MEN',
    desc: 'Elevated everyday essentials.',
    link: 'SHOP MEN',
    img: men,
  },
  {
    title: 'WOMEN',
    desc: 'Effortless style for every you.',
    link: 'SHOP WOMEN',
    img: women,
  },
  {
    title: 'KIDS',
    desc: 'Comfort meets cool everyday.',
    link: 'SHOP KIDS',
    img: kid,
  },
]

// On duplique la liste pour que la boucle soit invisible
const loopedCategories = [...categories, ...categories]

export default function CategoryStrip() {
  return (
    <section className="cat-strip">
      <div className="cat-track">
        {loopedCategories.map((c, i) => (
          <div className="cat-card" key={`${c.title}-${i}`}>
            <img src={c.img} alt={c.title} />
            <div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a href="#" className="cat-link">{c.link} →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}