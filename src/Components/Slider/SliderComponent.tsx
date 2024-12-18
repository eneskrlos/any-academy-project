'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Pagination, Autoplay } from 'swiper/modules';
import { Grid2, useTheme } from '@mui/material';
import './styleSlider.css'
import Title from '../Titles/Title';
import ImageComponet from '../Image/ImageComponent';



const SwiperComppnent = () => {
    const theme = useTheme()
    return (
        <section style={{ width: '100%', height: 'auto' }}>
            <Grid2 sx={{ width: '100%', height: '100%', background: '#6A9EDA'}}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <SwiperSlide>
                        <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                            <Grid2>
                                <article>
                                    <header>
                                        <Title text='Aprende un idioma, abre un mundo ' variant='h1' style={{ 
                                            fontFamily: '"Quicksand", sans-serif',
                                            fontSize: '95px',
                                            color: theme.palette.background.paper,
                                            fontWeight: '600',
                                            textAlign: 'left',
                                            lineHeight: '90px',
                                            width: '758px',
                                            height: 'auto',
                                            textTransform: 'uppercase',
                                            textWrap: 'wrap',
                                            marginBottom: '37px'
                                        }} />
                                    </header>
                                    <Title text='¡Domina el idioma de tus sueños!' variant='subtitle1' component={'p'} style={{ 
                                            fontFamily: '"Quicksand", sans-serif',
                                            fontSize: '60px',
                                            color: theme.palette.text.secondary,
                                            fontWeight: '400',
                                            textAlign: 'left',
                                            letterSpacing: '0%',
                                            lineHeight: '60px',
                                            width: '638px',
                                            textWrap: 'wrap'
                                        }} />
                                </article>
                            </Grid2>
                            <Grid2>
                                <picture>
                                    <ImageComponet 
                                        src='/resources/images/Girl_studying_with_book_and_laptop.png' 
                                        alt='Girl studying with book and laptop' 
                                        priority 
                                        width={552} 
                                        height={459}
                                        style={{ }} 
                                    />
                                </picture>
                            </Grid2>
                        </Grid2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                            <Grid2>
                                <article>
                                    <header>
                                        <Title text='Clases Para niños y adultos' variant='h1' 
                                            style={{ 
                                                fontFamily: '"Quicksand", sans-serif',
                                                fontSize: '95px',
                                                color: theme.palette.background.paper,
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                lineHeight: '90px',
                                                width: '758px',
                                                height: 'auto',
                                                textTransform: 'uppercase',
                                                textWrap: 'wrap',
                                                marginBottom: '37px'
                                            }} 
                                        />
                                    </header>
                                    <Title text='Desde juegos educativos hasta preparación para exámenes' variant='subtitle1' component={'p'} 
                                        style={{ 
                                            fontFamily: '"Quicksand", sans-serif',
                                            fontSize: '60px',
                                            color: theme.palette.text.secondary,
                                            fontWeight: '400',
                                            textAlign: 'left',
                                            letterSpacing: '0%',
                                            lineHeight: '60px',
                                            width: '719px',
                                            textWrap: 'wrap'
                                        }} 
                                    />
                                </article>
                            </Grid2>
                            <Grid2>
                                <picture>
                                    <ImageComponet 
                                        src='/resources/images/boy_and_girl_reading_book.png' 
                                        alt='boy and girl reading book' 
                                        priority 
                                        width={276} 
                                        height={456}
                                        style={{ }} 
                                    />
                                </picture>
                            </Grid2>
                        </Grid2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                            <Grid2>
                                <article>
                                    <header>
                                        <Title text='Todo en un solo lugar' variant='h1' 
                                            style={{ 
                                                fontFamily: '"Quicksand", sans-serif',
                                                fontSize: '95px',
                                                color: theme.palette.background.paper,
                                                fontWeight: '600',
                                                textAlign: 'left',
                                                lineHeight: '90px',
                                                width: '848px',
                                                height: 'auto',
                                                textTransform: 'uppercase',
                                                textWrap: 'wrap',
                                                marginBottom: '27px'
                                            }} 
                                        />
                                    </header>
                                    <Title text='Cursos, traducción e interpretación.' variant='subtitle1' component={'p'} 
                                        style={{ 
                                            fontFamily: '"Quicksand", sans-serif',
                                            fontSize: '60px',
                                            color: theme.palette.text.secondary,
                                            fontWeight: '400',
                                            textAlign: 'left',
                                            letterSpacing: '0%',
                                            lineHeight: '60px',
                                            width: '773px',
                                            textWrap: 'wrap'
                                        }} 
                                    />
                                </article>
                            </Grid2>
                            <Grid2>
                                <picture>
                                    <ImageComponet 
                                        src='/resources/images/notebook_with_glasses_and_pencil.png' 
                                        alt='notebook with glasses and pencil' 
                                        priority 
                                        width={439} 
                                        height={456}
                                        style={{ }} 
                                    />
                                </picture>
                            </Grid2>
                        </Grid2>
                    </SwiperSlide>
                </Swiper>
            </Grid2>
        </section>
    );
  };
  
  export default SwiperComppnent;