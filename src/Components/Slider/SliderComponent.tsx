'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Pagination, Autoplay } from 'swiper/modules';
import { Grid2 } from '@mui/material';
import './styleSlider.css'
import SlideContent from './SliderContent';



const SwiperComppnent = () => {
    return (
        <section style={{ width: '100%', height: 'auto' }}>
            <Grid2 sx={{ width: '100%', height: '100%', background: '#6A9EDA'}}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <SwiperSlide>
                        <SlideContent
                            title='Aprende un idioma, abre un mundo'
                            subtitle='¡Domina el idioma de tus sueños!'
                            image={{
                                src: '/resources/images/Girl_studying_with_book_and_laptop.png',
                                alt: 'Girl studying with book and laptop',
                                width: 552,
                                height: 459
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideContent
                            title='Clases Para niños y adultos'
                            subtitle='Desde juegos educativos hasta preparación para exámenes'
                            image={{
                                src: '/resources/images/boy_and_girl_reading_book.png',
                                alt: 'boy and girl reading book',
                                width:276, 
                                height:456
                            }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SlideContent
                            title='Todo en un solo lugar'
                            subtitle='Cursos, traducción e interpretación.'
                            image={{
                                src: '/resources/images/notebook_with_glasses_and_pencil.png',
                                alt: 'notebook with glasses and pencil',
                                width: 439,
                                height: 456
                            }}
                        />
                    </SwiperSlide>
                </Swiper>
            </Grid2>
        </section>
    );
  };
  
  export default SwiperComppnent;