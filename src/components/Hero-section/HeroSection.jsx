import './HeroSection.css'
import '../Buttons/button.jsx'
import SocialList from '../SocialList/SocialList.jsx'
import Button from '../Buttons/button.jsx'
import { typingAnimation } from '../customHooks/typingAnimation.jsx'


const identity = ["Web Developer", "Programmer", "Student"]


export default function HeroSection() {

  
  const currentIdentity = typingAnimation(identity);

  return (
    <div className="hero-section">
      <div className="hero-section-text">
        <h1>Hi, I'm Aakash Dhakal</h1>
        <p className='identity'>I am a<span>{currentIdentity}</span></p>
        <SocialList />
        <Button> Get in touch   <i className='fa-solid fa-arrow-right'></i>
        </Button>
      </div>
      <div className="hero-section-image">
        <img src="/src/assets/illustration.svg" alt=""  />
      </div>
    </div>
  )
}