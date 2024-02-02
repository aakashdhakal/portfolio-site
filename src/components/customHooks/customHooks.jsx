import { useState, useEffect } from 'react';
import Button from '../Buttons/button';


export function typingAnimation(identity) {
  const [index, setIndex] = useState(0);
  const [currentIdentity, setCurrentIdentity] = useState('');
  const [Phase, setPhase] = useState('typing');



  useEffect(() => {
    switch (Phase) {
      case "typing": {
        const nextIdentity = identity[index].slice(0, currentIdentity.length + 1);
        if (currentIdentity === nextIdentity) {
          setPhase("waiting");
          return;
        };
        const timeOut = setTimeout(() => {
          setCurrentIdentity(nextIdentity);
        }, 100);

        return () => clearTimeout(timeOut);
      }
 
      case "deleting": {
        
        if(!currentIdentity) {
          setPhase("typing");
          setIndex((index + 1) % identity.length);
          return;
        }
        const nextIdentity = identity[index].slice(0, currentIdentity.length - 1);
        const timeOut = setTimeout(() => {
          setCurrentIdentity(nextIdentity);
        }, 100);

        return () => clearTimeout(timeOut);
      }
      case "waiting":
      default: {
          const timeOut = setTimeout(() => {
          setPhase("deleting");
        }, 2000);
        return () => clearTimeout(timeOut);
        }
   }
  }, [currentIdentity, identity, index, Phase]);

  return [currentIdentity];
}


export function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 300) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('clicked');
  };
  if (showScroll) {
    return (
      <Button name="scroll-to-top button" click={scrollTop}>
        <i className="fa-regular fa-rocket-launch"></i>
      </Button>
    )
  }
}