import { Search, User, Heart, ShoppingBag } from 'lucide-react'

export default function Header() {
  return (
    <>

      <header className="header">
        <div className="container">
          <nav className="nav-left">
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">KIDS</a>
            <a href="#">BEAUTY</a>
          </nav>
          <a href="#" className="logo">KITRO</a>
          <div className="nav-right">
            <a href="#" className="icon-link"><Search size={16} /> SEARCH</a>
            <a href="#" className="icon-link"><User size={16} /> LOGIN</a>
            <a href="#" className="icon-link"><Heart size={16} /> WISHLIST</a>
            <a href="#" className="icon-link"><ShoppingBag size={16} /> CART (0)</a>
          </div>
        </div>
      </header>
    </>
  )
}
