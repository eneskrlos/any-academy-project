'use client'
import { Grid2, Theme } from '@mui/material'
import React from 'react'

interface CarouselPorps {
    theme: Theme
}

export default function CarouselComponent({ theme }:CarouselPorps) {
  console.log(theme.palette.common.white)
  return (
    <Grid2>
        <div>Carrusel</div>
    </Grid2>
  )
}

