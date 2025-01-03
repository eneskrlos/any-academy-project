import HeadSectionComponent from '@/Components/HeadSection'
import ImageComponet from '@/Components/Image/ImageComponent'
import PaperComponent from '@/Components/Papers/PaperComponent'
import { Grid2, Theme } from '@mui/material'
import React from 'react'

const styleArticle: React.CSSProperties = {
    marginTop: '80px',
    /* display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', */
    maxWidth: '100%',
    height: 'auto',
}

interface ListData {
    id: number,
    title: string,
    description: string,
    step: string
}

interface Props {
    theme: Theme,
    listData: ListData[]
}

export default function StepByStepDesktop({ theme, listData }:Props) {
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
        <Grid2 sx={{ display:'grid', gridTemplateColumns: '0.2fr 1fr 0.2fr'}}>
            <Grid2 sx={{ 
                position: 'relative',
                top: '295px',
                left: '66px'
            }} >
                <ImageComponet
                  src='/resources/images/young_smiling_woman_working_at_laptop.png'
                  alt='young smiling woman working at laptop'
                  width={210}
                  height={210}
                  priority={false} 
                />
            </Grid2>
            <Grid2 container justifyContent={'center'} spacing={2} sx={{  }}>
                {
                    listData.map((lsl, index) => {
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
                bottom: '70px',
                right: '0px'
            }}>
                <ImageComponet
                  src='/resources/images/young_man_with_laptop_on_chair.png'
                  alt='young man with laptop on chair'
                  width={200}
                  height={270}
                  priority={false} 
                />
            </Grid2>
        </Grid2>
    </section>
  )
}
