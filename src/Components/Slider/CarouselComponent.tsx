'use client'
import React from 'react'
import { Grid2, Theme } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation } from 'swiper/modules';
import './styleSlider.css'

interface CarouselPorps {
    theme: Theme
}

export default function CarouselComponent({ theme }:CarouselPorps) {
  console.log(theme.palette.common.white)
  return (
    <Grid2>
        <Swiper
              spaceBetween={50}
              slidesPerView={5}
              loop={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Navigation]}
              navigation
              pagination={{ clickable: true }}
              style={{ width: '100%', height: '100%' }}
          >
              <SwiperSlide>
                  <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                      slider 1
                  </Grid2>
              </SwiperSlide>
              <SwiperSlide>
                  <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                    slider 2
                  </Grid2>
              </SwiperSlide>
              <SwiperSlide>
                  <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                    slider 3
                  </Grid2>
              </SwiperSlide>
              <SwiperSlide>
                  <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                    slider 4
                  </Grid2>
              </SwiperSlide>
              <SwiperSlide>
                  <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                    slider 5
                  </Grid2>
              </SwiperSlide>
              <SwiperSlide>
                  <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                    slider 6
                  </Grid2>
              </SwiperSlide>
              <SwiperSlide>
                  <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                    slider 7
                  </Grid2>
              </SwiperSlide>
              <SwiperSlide>
                  <Grid2 container spacing={2} sx={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop: '88px', marginBottom: '130px' }}>
                    slider 8
                  </Grid2>
              </SwiperSlide>
          </Swiper>
    </Grid2>
  )
}

