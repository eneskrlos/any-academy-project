'use client'
import React,  { useState }  from 'react'
import { Theme, useMediaQuery } from '@mui/material'

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
    transition: 'transform 0.3s ease'
}

const LIST_SERVICES = [
  {
    id: 1,
    title:'Curso Español', 
    description:`Ideal para estudiantes, profesionales y 
              viajeros que buscan mejorar su fluidez, comprensión y 
              confianza en el idioma.`, 
    imageAction:{
      src: '/resources/images/streamline_class-lesson.svg',
      alt: 'class-lesson'
              }
  },
  {
    id: 2,
    title:'Curso Italiano', 
    description:`Programas combinados con técnicas
               modernas de enseñanza y orientaciones de instructores.`, 
    imageAction:{
      src: '/resources/images/streamline_class-lesson.svg',
      alt: 'class-lesson'
              }
  },
  {
    id: 3,
    title:'Curso Inglés', 
    description:`Diseñado para que, sin importar su nivel actual, 
              desarrolle habilidades prácticas que podrá usar 
              desde el primer día.`, 
    imageAction:{
      src: '/resources/images/streamline_class-lesson.svg',
      alt: 'class-lesson'
              }
  },
  {
    id: 4,
    title:'Traducción', 
    description:`Servicio de alta calidad para documentos legales,
               técnicos, académicos y corporativos.`, 
    imageAction:{
      src: '/resources/images/hugeicons_translation.svg',
      alt: 'icons translation'
    }
  },
  {
    id: 5,
    title:'Interpretación', 
    description:`Mediante intérpretes facilitamos 
            la comunicación en reuniones, eventos y conferencias .`, 
    imageAction:{
      src: '/resources/images/ic_outline-interpreter-mode.svg',
      alt: 'icon interpreter mode'
              }
  },
  /* {
    id: 6,
    title:'Curso Frances', 
    description:`Ideal para estudiantes, profesionales y 
              viajeros que buscan mejorar su fluidez, comprensión y 
              confianza en el idioma.`, 
    imageAction:{
      src: '/resources/images/streamline_class-lesson.svg',
      alt: 'class-lesson'
              }
  },
  {
    id: 7,
    title:'Curso Chino', 
    description:`Ideal para estudiantes, profesionales y 
              viajeros que buscan mejorar su fluidez, comprensión y 
              confianza en el idioma.`, 
    imageAction:{
      src: '/resources/images/streamline_class-lesson.svg',
      alt: 'class-lesson'
              }
  } ,
  {
    id: 8,
    title:'Curso Japones', 
    description:`Ideal para estudiantes, profesionales y 
              viajeros que buscan mejorar su fluidez, comprensión y 
              confianza en el idioma.`, 
    imageAction:{
      src: '/resources/images/streamline_class-lesson.svg',
      alt: 'class-lesson'
              }
  } */
]

export default function CarouselComponent({ theme }:CarouselPorps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery("(max-width: 768px)");
    // Calcula el índice central basado en el activeIndex
    const getCenterIndex = (index: number) => {
      const totalSlides = LIST_SERVICES.length;
      return (index + Math.floor(3 / 2)) % totalSlides;
    };
  return (
    <Swiper
        spaceBetween={isMobile ? 44 : 35}
        slidesPerView={isMobile ? 1 : 3}
        loop={true}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex)
        }}
        modules={[Navigation]}
        navigation
        style={{ maxWidth: '1048px', height: '100%', padding: '35px' }}
    >
      {
        LIST_SERVICES.map((service, index) => {
          const centerIndex = getCenterIndex(activeIndex);
          const isCenterSlide = index === centerIndex;
          return (
          <SwiperSlide key={index} style={{ ...STYLE_SWIPER_SLIDER, transform: isCenterSlide ? 'scale(1.2)' : 'scale(1)'}}>
            <CardComponent
              theme={theme}
              title={service.title}
              description={service.description}
              imageAction={service.imageAction}
              
            />
          </SwiperSlide>
        )})
      } 
    </Swiper>
    
  )
}

