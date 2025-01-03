'use client'
import React from 'react'
// import Title from '@/Components/Titles/Title'
import CarouselComponent from '@/Components/Slider/CarouselComponent'
import { Grid2, useMediaQuery, useTheme } from '@mui/material'
import ImageComponet from '@/Components/Image/ImageComponent'
import HeadSectionComponent from '@/Components/HeadSection'

const styleArticle: React.CSSProperties = {
    marginTop: '80px',
    /* display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', */
    width: '100%',
    height: 'auto',
}


export default function SectionCursos() {
  const theme =  useTheme()
    const isMobil = useMediaQuery("(max-width: 768px)")
  return (
<section style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'center'}}>
            <HeadSectionComponent 
                headText='Expande tus Horizontes, Explora Nuevas Lenguas'
                text={`Descubre nuestros servicios de aprendizaje de idiomas 
                    y transforma tu futuro con las herramientas que necesitas para crecer personal 
                    y profesionalmente.`}
                styleArticle={styleArticle}
                theme={theme}
                styleText={{ 
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '24px',
                    color: theme.palette.text.primary,
                    fontWeight: '400',
                    textAlign: 'center',
                    lineHeight: '30px',
                    maxWidth: '952px',
                    textWrap: 'wrap',
                    position: 'relative',
                    left: '3%',
                    paddingRight: isMobil? '23px' : '0px'
                }}
            />
            <Grid2 sx={{ width: '100%', height: '365px' }}>
                <CarouselComponent theme={theme} />
            </Grid2>
            <Grid2>
                <figure style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', marginTop: '54px' }}>
                    <picture>
                        <ImageComponet 
                            src='/resources/images/girl_with_books_and _backpack.png' 
                            alt='girl with books and  backpack' 
                            width={ isMobil ? 300 : 498} 
                            height={isMobil? 290 : 392}
                            style={{
                                objectFit: 'contain'
                            }} 
                            priority
                        />
                    </picture>
                </figure>
            </Grid2>
        </section>
  )
}
