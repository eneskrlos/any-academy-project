'use client'
import CardOpinion from '@/Components/Cards/CardOpinion';
import Title from '@/Components/Titles/Title'
import { useMediaQuery, Grid2, useTheme, Box } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation } from 'swiper/modules';


const LIST_OPINOS = [
  {
    id: 1,
    avatar: 'avatar_of_female_student_with_notebooks.png',
    startLevel: 5,
    text: `La experiencia en esta academia ha sido increíble. Las clases son dinámicas, 
    y los materiales me ayudaron mucho a mejorar mi nivel de español en poco tiempo.`,
    name: 'Jack',
    countryFlag: 'Canada.png'
  },
  {
    id: 2,
    avatar: 'avatar_of_female_student_with_notebooks.png',
    startLevel: 5,
    text: `Necesitábamos traducir documentos legales para una negociación internacional, 
    y la academia hizo un trabajo impecable. La precisión y rapidez del servicio nos 
    ayudaron a cumplir con los plazos sin problemas. `,
    name: 'Laura',
    countryFlag: 'Uruguay.png'
  },
  {
    id: 3,
    avatar: 'avatar_of_female_student_with_notebooks.png',
    startLevel: 5,
    text: `Gracias a su servicio de interpretación simultánea, pudimos realizar nuestra conferencia 
    internacional sin contratiempos. Su profesionalismo y preparación fueron clave para el éxito del evento.`,
    name: 'Alex',
    countryFlag: 'USA.png'
  }
]

export default function Opinions() {
    const theme = useTheme()
    const isMobil = useMediaQuery("(max-width: 768px)")
    /* const isTable = useMediaQuery("(min-width: 769px) and (max-width: 920px)")
    const screamMedia = useMediaQuery("(min-width: 920px) and (max-width: 1540px)") */
  return (
    <section style={{ height: '654px' }}>
      <Grid2>
        <article style={{ marginTop: '80px' }}>
          <header>
              <Title
                  text={'¿Qué opinan nuestros estudiantes?'}
                  variant='h2'
                  style={{
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: '45px',
                      color: theme.palette.text.secondary,
                      fontWeight: '600',
                      textAlign: 'center',
                      lineHeight: '60px',
                      width: '100%',
                      textWrap: 'wrap'
                  }}
              />
          </header>
        </article>
      </Grid2>
      <Grid2 sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '100%', marginTop: '6rem', paddingLeft: '8%', paddingRight: '0%' }}>
          <Swiper
              spaceBetween={isMobil ? 44 : 40}
              slidesPerView={isMobil ? 1 : 3}
              loop={true}
              modules={[Navigation]}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              style={{ width: '100%', height: '300px' }}
          >
            {
              LIST_OPINOS.map((opinion, index) => {
                return (
                  <SwiperSlide key={index}> 
                    <CardOpinion theme={theme} itemOpinion={opinion} idMobil={isMobil} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>       
        </Box>
      </Grid2>
    </section>
  )
}
