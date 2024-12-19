'use client'
import React,  { useState }  from 'react'
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
  {
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
  },
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
  }
]

export default function CarouselComponent({ theme }:CarouselPorps) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        onSlideChange={(swiper) => {
          console.log(swiper.activeIndex)
          setActiveIndex(swiper.activeIndex + 2)
        }}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        navigation
        style={{ width: '100%', height: '100%' }}
    >
      {
        LIST_SERVICES.map((service, index) => (
          <SwiperSlide key={service.id} style={{ ...STYLE_SWIPER_SLIDER, transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)'}}>
            <CardComponent
              theme={theme}
              title={service.title}
              description={service.description}
              imageAction={service.imageAction}
            />
          </SwiperSlide>
        ))
      }
      
        {/* <SwiperSlide style={{ ...STYLE_SWIPER_SLIDER, transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)' }}>
          <CardComponent 
            theme={theme} 
            title='Curso Español' 
            description={`Ideal para estudiantes, profesionales y 
              viajeros que buscan mejorar su fluidez, comprensión y 
              confianza en el idioma.`} 
              imageAction={{
                src: '/resources/images/streamline_class-lesson.svg',
                alt: 'class-lesson'
              }} 
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Curso Italiano' 
            description={`Programas combinados con técnicas
               modernas de enseñanza y orientaciones de instructores.`}
            imageAction={{
              src: '/resources/images/streamline_class-lesson.svg',
              alt: 'icon class lesson'
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Curso Inglés' 
            description={`Diseñado para que, sin importar su nivel actual, 
              desarrolle habilidades prácticas que podrá usar 
              desde el primer día.`}
              imageAction={{
                src: '/resources/images/streamline_class-lesson.svg',
                alt: 'icon class lesson'
              }}  
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Traducción' 
            description={`Servicio de alta calidad para documentos legales,
               técnicos, académicos y corporativos.`}
               imageAction={{
                src: '/resources/images/hugeicons_translation.svg',
                alt: 'icons translation'
              }}  
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='Interpretación' 
            description='Mediante intérpretes facilitamos 
            la comunicación en reuniones, eventos y conferencias .'
            imageAction={{
              src: '/resources/images/ic_outline-interpreter-mode.svg',
              alt: 'icon interpreter mode'
            }}  
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='slider 6' 
            description='description' 
            imageAction={{
              src: '/resources/images/streamline_class-lesson.svg',
              alt: 'icon class lesson' 
            }} 
        />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='slider 7' 
            description='description'
            imageAction={{
              src: '/resources/images/streamline_class-lesson.svg',
              alt: 'icon class lesson' 
            }}  
          />
        </SwiperSlide>
        <SwiperSlide style={STYLE_SWIPER_SLIDER}>
          <CardComponent 
            theme={theme} 
            title='slider 8' 
            description='description'
            imageAction={{
              src: '/resources/images/streamline_class-lesson.svg',
              alt: 'icon class lesson' 
            }}  
          />
        </SwiperSlide> */}
    </Swiper>
    
  )
}

