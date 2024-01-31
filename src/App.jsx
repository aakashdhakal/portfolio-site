import './style.css'
import HeroSection from './components/Hero-section/HeroSection.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx'
import BlogCard from './components/BlogCard/BlogCard.jsx'


export default function Home() {

  return (
    <main>
    <section id='navHero'>
      <Navbar />
      <div className="hero-section">
        <HeroSection />
      </div>
      </section>
      <AboutSection />
      <BlogCard />
      </main>
  )
}


