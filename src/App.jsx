import './style.css'
import './components/Hero-section/HeroSection.jsx'
import HeroSection from './components/Hero-section/HeroSection.jsx'


export default function Navbar() {
  return (
    <section>
    <nav className="navbar">
      <div className="logo-name">
       <img src="src/assets/akash.svg" alt="" className="name"/>
      </div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blogs</a></li>
       <li><a href="#">Contact</a></li>
      </ul>
      </nav>
      <div className="hero-section">
        <HeroSection />
      </div>
      </section>
  )
}


