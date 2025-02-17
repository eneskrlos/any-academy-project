'use client'
import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ButtonIcon from './ButtonIcon';


export default function ScrollToTopButton() {
    const [isVisilble, setIsVisilble] = useState(false);
    
    const handleScroll = () => setIsVisilble(document.documentElement.scrollTop > 300);
    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        window.history.replaceState(null, '', window.location.pathname);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])
    


  return (
      <ButtonIcon 
          onClick={scrollToTop}
          style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              backgroundColor: '#6A9EDA',
              color: '#fff',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor:  isVisilble ? 'pointer' : 'none',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
              opacity: isVisilble ? 1 : 0,
              transition: 'opacity 0.5s ease',
              transform: `traslate(-50%, 50%) ${isVisilble ? 'scale(1)' : 'scale(0)' }`,
              zIndex: 10,
              animation: 'popup .3s ease-in-out'
          }} 
          icon={<ArrowUpwardIcon />}
          ariaLabel='Volver al inicio'
      />
  )
}
