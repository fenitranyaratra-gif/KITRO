import { useState } from 'react'
import { Heart } from 'lucide-react'
import men from '../assets/men.jpg'
import women from '../assets/women.jpg'
import kid from '../assets/kid.jpg'
import shoe5 from '../assets/shoe5.jpg'
import shoe6 from '../assets/shoe6.jpg'
import shoe7 from '../assets/shoe7.jpg'
import shoe8 from '../assets/shoe8.jpg'
import shoe1 from '../assets/shoe1.jpg'
import shoe2 from '../assets/shoe2.jpg'
import shoe3 from '../assets/shoe3.jpg'
import shoe4 from '../assets/shoe4.jpg'

const products = [
  {
    id: 1,
    name: 'Levi’s Air Denim',
    price: '285 000 Ar',
    img: shoe1,
  },
  {
    id: 2,
    name: 'Urban Sand Runner',
    price: '340 000 Ar',
    img: shoe2,
  },
  {
    id: 3,
    name: 'Desert Motion Sneaker',
    price: '225 000 Ar',
    img: shoe3,
  },
  {
    id: 4,
    name: 'Nike Flex Trail',
    price: '310 000 Ar',
    img: shoe4,
  },
  {
    name: 'Adidas Samoa',
    price: '340 000 Ar',
    img: shoe5,
  },
  {
    name: 'Vans Old Skool',
    price: '320 000 Ar',
    img: shoe6,
  },
  {
    name: 'Nike Blazer Mid',
    price: '420 000 Ar',
    img: shoe7,
  },
  {
    name: 'Nike Daybreak',
    price: '400 000 Ar',
    img: shoe8,
  },
]

export default function BestOf() {
  const [wishlist, setWishlist] = useState(new Set())

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section className="best-of">
      <div className="container">
        <div className="best-of-head">
          <h2>BEST OF KITRO</h2>
          <a href="#">VIEW ALL</a>
        </div>
        <div className="product-grid">
          {products.map((p) => {
            const isWished = wishlist.has(p.id)
            return (
              <div className="product-card" key={p.id}>
                <div className="product-image-wrap">
                  <img src={p.img} alt={p.name} />
                  <button
                    className={`wishlist-btn${isWished ? ' active' : ''}`}
                    aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
                    aria-pressed={isWished}
                    onClick={() => toggleWishlist(p.id)}
                  >
                    <Heart size={15} fill={isWished ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="product-name">{p.name}</div>
                <div className="product-price">{p.price}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}