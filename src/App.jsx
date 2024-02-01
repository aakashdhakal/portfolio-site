import './style.css'
import HeroSection from './components/Hero-section/HeroSection.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx'
import Button from './components/Buttons/button.jsx';
import { scrollToTop , RevealScrollToTop} from './components/customHooks/customHooks.jsx';


export default function Home() {

  return (
    <main>
      Reval
      <Button class="button scroll-to-top" click={scrollToTop}><i className="fa-solid fa-shuttle-space fa-rotate-270"></i></Button>
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


