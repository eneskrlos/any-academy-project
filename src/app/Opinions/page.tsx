'use client'
import Title from '@/Components/Titles/Title'
import { /* useMediaQuery */ Grid2, useTheme } from '@mui/material'
import React from 'react'

export default function Opinions() {
    const theme = useTheme()
    /* const isMobil = useMediaQuery("(max-width: 768px)")
    const isTable = useMediaQuery("(min-width: 769px) and (max-width: 920px)")
    const screamMedia = useMediaQuery("(min-width: 920px) and (max-width: 1540px)") */
  return (
    <section>
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
                  
      </Grid2>
    </section>
  )
}
