import './style.css'
import HeroSection from './components/Hero-section/HeroSection.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx'
import Button from './components/Buttons/button.jsx';


export default function Home() {

  return (
    <main>
      <Button><i className='fa-solid fa-arrow-up'></i></Button>
    <section id='navHero'>
      <Navbar />
      <div className="hero-section">
        <HeroSection />
      </div>
      </section>
      <AboutSection />
      </main>
  )
}


