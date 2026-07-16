import { Truck, PackageCheck, BadgeCheck, Lock } from 'lucide-react'

const features = [
  { icon: Truck, title: 'Fast Delivery', desc: 'Quick & safe delivery' },
  { icon: PackageCheck, title: 'Easy Returns', desc: 'Within 15 days' },
  { icon: BadgeCheck, title: 'Quality Assured', desc: 'Best fashion, best quality' },
  { icon: Lock, title: 'Secure Payment', desc: '100% secure checkout' },
]

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <f.icon size={28} strokeWidth={1.5} />
              <div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
