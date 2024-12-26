import AcordionComponent from '@/Components/Acordion/AcordionComponent'
import HeadSectionComponent from '@/Components/HeadSection'
import ImageComponet from '@/Components/Image/ImageComponent'
import { Grid2, Theme } from '@mui/material'
import React from 'react'

const styleArticle: React.CSSProperties = {
    marginTop: '80px',
    /* display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', */
    width: '100%',
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

export default function StepByStepMobile({ theme, listData }:Props) {
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
        <Grid2 >
            <ImageComponet
                src='/resources/images/young_man_with_laptop_on_chair.png'
                alt='young man with laptop on chair'
                width={122}
                height={156}
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
                width={150}
                height={150}
                priority={false}
                style={{ marginTop: '16%' }} 
            />
        </Grid2>
    </section>
  )
}
