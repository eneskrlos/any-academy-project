'use client'
import ImageComponet from '@/Components/Image/ImageComponent'
import Title from '@/Components/Titles/Title'
import { Box, Grid2, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const textLines = [
    `- Construye relaciones a largo plazo con sus clientes dejándose llevar por su pasión por las lenguas extranjeras y enfocando sus servicios según el objetivo de cada persona.`,
    `- Tiene un fuerte compromiso con la adaptación a cada proceso de aprendizaje.`,
    `- Adaptará su plan según tus necesidades y prioridades ayudándote a alcanzar tus objetivos de la manera más eficaz, dinámica y emocionante`
];

export default function HowIsAny() {
        const theme = useTheme()
        const isMobil = useMediaQuery("(max-width: 768px)")
        // const isTable = useMediaQuery("(min-width: 769px) and (max-width: 1200px)")
  return (
    <section id='sobreAny' style={{ marginTop: isMobil? '2rem' : '' }}>
        <Grid2 sx={{ display: 'flex', flexDirection: isMobil? 'column-reverse' : 'row', justifyContent: isMobil? '' : 'center', alignItems: isMobil? '' : 'center' }}>
            {
                !isMobil &&
                <Grid2>
                    <ImageComponet
                        src='/resources/images/any_working.png'
                        alt='Any sentada frente a una computadora'
                        width={isMobil? 400 : 601}
                        height={isMobil? 400 :884} 
                        style={{
                            borderRadius: '15px',
                            marginLeft: isMobil? '0' : '10rem'
                        }}
                        priority={false}
                    />
                </Grid2>
            }
            <Grid2>
                <article>
                    <header>
                        <Title
                            text={'¿Quién es Any?'}
                            variant='h2'
                            style={{
                                fontFamily: '"Quicksand", sans-serif',
                                fontSize: '50px',
                                color: theme.palette.text.secondary,
                                fontWeight: '600',
                                textAlign: 'center',
                                lineHeight: '40px',
                                width: '100%',
                                textWrap: 'wrap'
                            }}
                        />
                    </header>
                    <Box sx={{ 
                            padding: isMobil? '15px' : '22px 70px', 
                            borderRadius: '32px', 
                            background:'rgba(106, 157, 218, 0.1)',
                            backdropFilter: 'blur(3px)', 
                            marginTop: '45px', 
                            marginRight: isMobil? '0' : '4rem', 
                            marginLeft: isMobil? '0' : '22rem' 
                        }}
                    >

                            <Title
                                text={`
                                    Con más de 9 años de experiencia en el sector de la enseñanza de lenguas extranjeras y de la traducción e interpretación,
                                    Anabel Fernández es una licenciada con popularidad en sus clases y servicios personalizados con cada estudiante. Anabel:
                                    `}
                                variant='body1'
                                component='p'
                                style={{
                                    fontFamily: '"Quicksand", sans-serif',
                                    fontSize: '24px',
                                    color: theme.palette.text.secondary,
                                    fontWeight: '400',
                                    textAlign: isMobil? 'left' : 'justify',
                                    lineHeight: isMobil? '40px' :'50px',
                                    letterSpacing: '1px',
                                    width: '100%',
                                    textWrap: 'wrap'
                                }}
                            />
                            {
                                textLines.map((line, index) => (

                                    <Title
                                        key={index}
                                        text={line}
                                        variant='body1'
                                        component='p'
                                        style={{
                                            fontFamily: '"Quicksand", sans-serif',
                                            fontSize: '24px',
                                            color: theme.palette.text.secondary,
                                            fontWeight: '400',
                                            textAlign: isMobil? 'left' : 'justify',
                                            lineHeight: isMobil? '40px' : '50px',
                                            letterSpacing: '1px',
                                            width: '100%',
                                            textWrap: 'wrap'
                                        }}
                                    />
                                ))
                            }
                    </Box>
                </article>
            </Grid2>
        </Grid2>
    </section>
  )
}
