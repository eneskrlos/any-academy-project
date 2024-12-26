'use client'
import React from 'react'
import HeadSectionComponent from '@/Components/HeadSection'

import { Grid2, useTheme } from '@mui/material'
import ImageComponet from '@/Components/Image/ImageComponent'
import PaperComponent from '@/Components/Papers/PaperComponent'

const styleArticle: React.CSSProperties = {
    marginTop: '80px',
    /* display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', */
    width: '100%',
    height: 'auto',
}

const LIST_STEP_LANGUAGE = [
    {
        id: 1,
        title: 'Primer contacto:',
        description: 'Una vez que nos contactes, nos comunicaremos contigo para conocer tus objetivos, el idioma que te interesa y tus horarios.',
        step: 'Paso 1'
    },
    {
        id: 2,
        title: 'Evaluación inicial:',
        description: 'Realizaremos una prueba de nivel sencilla, ya sea en línea o con una entrevista corta para colocarte en el curso adecuado para ti.',
        step: 'Paso 2'
    },
    {
        id: 3,
        title: 'Propuesta:',
        description: 'Con la información que obtengamos de ti, te recomendaremos el plan que mejor se adapte a tus necesidades.',
        step: 'Paso 3'
    },
    {
        id: 4,
        title: 'Inicio del curso:',
        description: 'Cuando comiences tu curso, tendrás todo listo y haremos un seguimiento continuo de tu avance.',
        step: 'Paso 4'
    }
]

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
                position: 'relative',
                top: '295px',
                left: '66px'
            }} >
                <ImageComponet
                  src='/resources/images/young_smiling_woman_working_at_laptop.png'
                  alt='young smiling woman working at laptop'
                  width={271}
                  height={235}
                  priority={false} 
                />
            </Grid2>
            <Grid2 container justifyContent={'center'} spacing={2} sx={{  }}>
                {
                    LIST_STEP_LANGUAGE.map((lsl, index) => {
                        return (
                            <PaperComponent
                                key={index}
                                theme={theme}
                                title={lsl.title}
                                description={lsl.description}
                                step={lsl.step} 
                            />
                        )
                    })
                }
            </Grid2>
            <Grid2 sx={{ 
                position: 'relative',
                bottom: '123px',
                right: '0px'
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
