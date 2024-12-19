'use client'
import React from 'react'
import { Theme } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation } from 'swiper/modules';
import './styleSlider.css'
import CardComponent from '../Cards/Card';

interface CarouselPorps {
    theme: Theme
}

const STYLE_SWIPER_SLIDER = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

export default function CarouselComponent({ theme }:CarouselPorps) {
  console.log(theme.palette.common.white)
  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={5}
        // loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation
        style={{ width: '100%', height: '100%' }}
    >
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Curso Español' 
            description={`Ideal para estudiantes, profesionales y 
              viajeros que buscan mejorar su fluidez, comprensión y 
              confianza en el idioma.`} 
              urlImageAction='/resources/images/streamline_class-lesson.svg'
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Curso Italiano' 
            description={`Programas combinados con técnicas
               modernas de enseñanza y orientaciones de instructores.`}
            urlImageAction='/resources/images/streamline_class-lesson.svg'
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Curso Inglés' 
            description={`Diseñado para que, sin importar su nivel actual, 
              desarrolle habilidades prácticas que podrá usar 
              desde el primer día.`}
              urlImageAction='/resources/images/streamline_class-lesson.svg'  
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Traducción' 
            description={`Servicio de alta calidad para documentos legales,
               técnicos, académicos y corporativos.`}
               urlImageAction='/resources/images/hugeicons_translation.svg'  
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Interpretación' 
            description='Mediante intérpretes facilitamos 
            la comunicación en reuniones, eventos y conferencias .'
            urlImageAction='/resources/images/ic_outline-interpreter-mode.svg'  
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
          theme={theme} 
          title='slider 6' 
          description='description' 
          urlImageAction='/resources/images/streamline_class-lesson.svg' />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
          theme={theme} 
          title='slider 7' 
          description='description'
          urlImageAction='/resources/images/streamline_class-lesson.svg'  
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
          theme={theme} 
          title='slider 8' 
          description='description'
          urlImageAction='/resources/images/streamline_class-lesson.svg'  
          />
        </SwiperSlide>
    </Swiper>
    
  )
}

