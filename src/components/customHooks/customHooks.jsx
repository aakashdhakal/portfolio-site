import { useState, useEffect } from 'react';
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


export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export function RevealScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    })
  }, [])

  return showButton;
}