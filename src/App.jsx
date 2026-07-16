import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CategoryStrip from './components/CategoryStrip.jsx'
import NewVibes from './components/NewVibes.jsx'
import Features from './components/Features.jsx'
import BestOf from './components/BestOf.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <CategoryStrip />
      <NewVibes />
      <Features />
      <BestOf />
      <Footer />
    </div>
  )
}
