'use client'
import Title from '@/Components/Titles/Title'
import {  Box, Grid2, Paper, useTheme } from '@mui/material'
import React from 'react'
import ItemText from '@/Components/ItemText';

const LIST_TEXT = [
  {
    id: 1,
    texto: 'Utilizamos técnicas modernas e interactivas que hacen del aprendizaje un proceso dinámico y divertido.'
  },
  {
    id: 2,
    texto: 'Creamos un entorno en el que te sentirás cómodo y motivado para aprender, con clases grupales e individuales.'
  },
  {
    id: 3,
    texto: 'Ofrecemos horarios flexibles, clases presenciales y online para que aprendas a tu ritmo y desde donde prefieras.'
  },
  {
    id: 4,
    texto: 'Nos enfocamos en que logres tus metas lingüísticas de manera eficiente y efectiva.'
  },
  {
    id: 5,
    texto: 'Contamos con precios competitivas y opciones de pago que se adaptan a tu presupuesto.'
  },
  {
    id: 6,
    texto: 'Ofrecemos programas para principiantes, intermedios y avanzados, además de cursos especializados en conversación, negocios, preparación para exámenes y más.'
  }
]



export default function WhyAnyPage() {
  const theme = useTheme()
  return (
    <section style={{ width: '100%', height: 'auto' }} >
        <Grid2 style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }} >
          <Grid2>
              <Paper elevation={3} style={{ background: '#5086C1', margin: '165px 96px auto 143px ', padding: '137px 34px 179px 78px' }} >
                <Title
                  text='¿Por qué aprender con  Any’s Language Academy?'
                  variant='h2'
                  component={'h2'}
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '80px',
                    color: theme.palette.background.default,
                    fontWeight: '600',
                    textAlign: 'left',
                    lineHeight: '80px',
                    letterSpacing: '5px',
                    width: '100%',
                    textWrap: 'wrap',
                    
                  }} 
                />
              </Paper>
          </Grid2>
          <Grid2 >
            <Box sx={{ width: '100%', margin: '165px 70px 0px 0px ', columnGap: 2}}>
              {
                LIST_TEXT.map(lt => {
                  return (
                    <ItemText
                      key={lt.id}
                      theme={theme}
                      text={lt.texto}
                    />
                  )
                })
              }
            </Box>
          </Grid2>
        </Grid2>
    </section>
  )
}
