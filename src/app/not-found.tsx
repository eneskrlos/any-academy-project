import React from 'react'
import Link from 'next/link';
import "./globals.css";

export default function NotFound() {
    
  return (
    <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100dvh',
        backgroundColor: '#f0f0f0',
        flexDirection: 'column',
        fontFamily: '"Quicksand", sans-serif',
        background: '#5086c1',
        color: 'white',
        textAlign: 'center'
        
     }}> {/* Aplica la clase container */}
    <main style={{
        textAlign: 'center',
        maxWidth: '600px'
    }}> {/* Aplica la clase mainContent */}
      <h1 style={{
        fontSize: '12rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}>404</h1> {/* Aplica la clase title */}
      <p style={{
        fontSize: '1.5rem',
        marginBottom: '30px',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
      }}>
        ¡Ups! La página que buscas no existe.
      </p>
      {/* <img src="/images/tu-imagen.svg" alt="" className={styles.illustration} /> */}
      <Link href="/" style={{ 
        textDecoration: 'none',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        transition: 'background-color 0.3s'
      }} >
         <span style={{
            
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.2rem',
            padding: '10px 20px',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
            cursor: 'pointer'
         }}> {/* Aplica la clase homeLink */}
           Volver a la Página Principal
         </span>
      </Link>
    </main>
  </div>
  )
}
