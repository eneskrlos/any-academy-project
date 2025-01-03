import AcordionComponent from '@/Components/Acordion/AcordionComponent'
import HeadSectionComponent from '@/Components/HeadSection'
import ImageComponet from '@/Components/Image/ImageComponent'
import { Grid2, Theme } from '@mui/material'
import React from 'react'

const styleArticle: React.CSSProperties = {
    marginTop: '120px',
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
    listData: ListData[],
    isTablet: boolean
}

export default function StepByStepMobile({ theme, listData, isTablet }:Props) {
  return (
    <section style={{width: '100%', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Grid2>
            <HeadSectionComponent 
                headText='Paso a Paso hacia el Dominio de un Nuevo Idioma'
                text='Conoce cómo hacemos que tu experiencia de aprendizaje sea sencilla, organizada y totalmente adaptada a tus objetivos'
                theme={theme}
                styleArticle={styleArticle} 
            />
        </Grid2>
        <Grid2 sx={{ display: isTablet ? 'none': 'block' }} >
            <ImageComponet
                src='/resources/images/young_man_with_laptop_on_chair.png'
                alt='young man with laptop on chair'
                width={isTablet ? 498 : 150}
                height={isTablet ? 392 : 156}
                priority={false} 
            />
        </Grid2>
        <Grid2 padding={'10px'}>
         <AcordionComponent theme={theme} listData={listData} />
        </Grid2>
        <Grid2>
            <ImageComponet
                src='/resources/images/young_smiling_woman_working_at_laptop.png'
                alt='young smiling woman working at laptop'
                width={isTablet ? 350 : 170}
                height={isTablet? 250 : 150}
                priority={false}
                style={{ marginTop: '16%' }} 
            />
        </Grid2>
    </section>
  )
}
