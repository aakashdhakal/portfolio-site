import './style.css'
import HeroSection from './components/Hero-section/HeroSection.jsx'
import Navbar from './components/Navbar/Navbar.jsx';


export default function Home() {

  return (
    <section id='navHero'>
      <Navbar />
      <div className="hero-section">
        <HeroSection />
      </div>
      </section>
  )
}


