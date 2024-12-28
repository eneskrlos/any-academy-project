'use client'
import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import StepByStepMobile from './StepByStepMobile'
import StepByStepDesktop from './StepByStepDesktop'



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
    const isMobil = useMediaQuery("(max-width: 768px)")
    const isTable = useMediaQuery("(min-width: 769px) and (max-width: 1200px)")
  return (
    
    (isMobil || isTable) ? 
      <StepByStepMobile
        theme={theme}
        listData={LIST_STEP_LANGUAGE} 
        isTablet={isTable}
      />
    :
    <StepByStepDesktop
        theme={theme}
        listData={LIST_STEP_LANGUAGE}
    />
  )
}
