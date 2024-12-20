'use client'
import React from 'react'
import Title from '@/Components/Titles/Title'
import CarouselComponent from '@/Components/Slider/CarouselComponent'
import { Grid2, Theme } from '@mui/material'
import ImageComponet from '@/Components/Image/ImageComponent'

const styleArticle: React.CSSProperties = {
    marginTop: '80px',
    /* display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', */
    width: '100%',
    height: 'auto',
}

interface HomePorps {
    theme: Theme
}

export default function CursosView({ theme } : HomePorps) {
  return (
<section style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
            <aside  style={{ marginBottom: '54px' }}>
                <article style={styleArticle}>
                    <header>
                        <Title
                            text='Expande tus Horizontes, Explora Nuevas Lenguas'
                            variant='h2'
                            style={{
                                fontFamily: '"Quicksand", sans-serif',
                                fontSize: '45px',
                                color: theme.palette.text.secondary,
                                fontWeight: '600',
                                textAlign: 'center',
                                lineHeight: '60px',
                                width: '100%',
                                textWrap: 'wrap',
                                marginBottom: '18px'
                            }}
                        />
                    </header>
                    <Title text={`Descubre nuestros servicios de aprendizaje de idiomas 
                    y transforma tu futuro con las herramientas que necesitas para crecer personal 
                    y profesionalmente.`} variant='subtitle1' component={'p'} 
                        style={{ 
                            fontFamily: '"Quicksand", sans-serif',
                            fontSize: '24px',
                            color: theme.palette.text.primary,
                            fontWeight: '400',
                            textAlign: 'center',
                            lineHeight: '30px',
                            width: '952px',
                            textWrap: 'wrap',
                            position: 'relative',
                            left: '3%'
                        }} 
                    />
                </article>
            </aside>
            <Grid2 sx={{ width: '100%', height: '365px' }}>
                <CarouselComponent theme={theme} />
            </Grid2>
            <Grid2>
                <figure style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', marginTop: '54px' }}>
                    <picture>
                        <ImageComponet 
                            src='/resources/images/girl_with_books_and _backpack.png' 
                            alt='girl with books and  backpack' 
                            width={498} 
                            height={392}
                            style={{}} 
                            priority
                        />
                    </picture>
                </figure>
            </Grid2>
        </section>
  )
}
