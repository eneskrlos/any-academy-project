'use client'
import React from 'react'
import HeadSectionComponent from '@/Components/HeadSection'

import { Grid2, useTheme } from '@mui/material'
import ImageComponet from '@/Components/Image/ImageComponent'

const styleArticle: React.CSSProperties = {
    marginTop: '80px',
    /* display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', */
    width: '100%',
    height: 'auto',
}

export default function StepByStepSection() {
    const theme = useTheme()
  return (
    <section>
        <Grid2 sx={{display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
            <HeadSectionComponent 
                headText='Paso a Paso hacia el Dominio de un Nuevo Idioma'
                text='Conoce cómo hacemos que tu experiencia de aprendizaje sea sencilla, organizada y totalmente adaptada a tus objetivos'
                theme={theme}
                styleArticle={styleArticle} 
              />
        </Grid2>
        <Grid2 sx={{ display:'grid', gridTemplateColumns: '322px 1fr 322px'}}>
            <Grid2 sx={{ 
                
            }} >
                <ImageComponet
                  src='/resources/images/young_smiling_woman_working_at_laptop.png'
                  alt='young smiling woman working at laptop'
                  width={271}
                  height={235}
                  priority={false} 
                />
            </Grid2>
            <Grid2 sx={{ }}>
                
            </Grid2>
            <Grid2 sx={{ 

            }}>
                <ImageComponet
                  src='/resources/images/young_man_with_laptop_on_chair.png'
                  alt='young man with laptop on chair'
                  width={322}
                  height={356}
                  priority={false} 
                />
            </Grid2>
        </Grid2>
    </section>
  )
}
