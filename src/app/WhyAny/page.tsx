'use client'
import Title from '@/Components/Titles/Title'
import {  Box, Grid2, Paper, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ItemText from '@/Components/ItemText';
import ButtonContainded from '@/Components/Buttons/ButtonContainded';
import ImageComponet from '@/Components/Image/ImageComponent';
import { storeUser } from '@/store/storeUser';
import ModalContact from '@/Components/Modals/ModalContact';
import { storeError } from '@/store/storeErrorForm';
import { storeTouched } from '@/store/storeTouchedFrom';

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
  const isMobil = useMediaQuery("(max-width: 768px)")
  const isTable = useMediaQuery("(min-width: 769px) and (max-width: 920px)")
  const screamMedia = useMediaQuery("(min-width: 920px) and (max-width: 1540px)")
  const lastElement = LIST_TEXT.length;
  const { clearUser } = storeUser()
  const { clearError } = storeError()
  const { clearTouched } = storeTouched()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    clearUser()
    clearError()
    clearTouched()
    setOpen(false)
  }
  
  return (
    <section style={{ width: '100%', height: isMobil ? '1437px' : 'auto' }} >
        <Grid2 style={isMobil ? { display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', justifyContent: 'center', height: '100px' } : { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: isTable ? 23 : 2 }} >
          <Grid2>
              <Paper elevation={3} 
              style={{
                width: isMobil ? '100%' : isTable ? '100%' : screamMedia ? '100%' : '580px',
                height: isMobil ? '100%' : isTable ? '100%' : screamMedia ? '100%' : '740px',
                background: theme.palette.primary.main, 
                margin: isMobil ? '60px 5px 0px 10px'  : isTable? '165px 0px 0px 35px' : screamMedia? '165px 48px 0px 38px' : '165px 96px 0px 143px ', 
                padding: isMobil ? '32px 0px 50px 0px' : isTable? '137px 34px 144px 9px' : screamMedia ? '137px 34px 144px 22px' : '137px 34px 144px 34px' 
                }} >
                <Title
                  text='¿Por qué aprender con  Any’s Language Academy?'
                  variant='h2'
                  component={'h2'}
                  style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: isMobil ? '40px' : isTable? '60px': screamMedia ? '48px' : '80px',
                    color: theme.palette.background.default,
                    fontWeight: '600',
                    textAlign: 'center',
                    lineHeight: isMobil ? '40px' : isTable? '100px' : screamMedia ? '50px' : '80px',
                    letterSpacing: isMobil ? '2px' : '5px',
                    width: '100%',
                    textWrap: 'wrap',
                    
                  }} 
                />
              </Paper>
          </Grid2>
          <Grid2 sx={{ display:'grid', justifyContent: 'center' }} >
            <Box sx={{ 
              width: '100%', 
              margin: isMobil ? '80px 40px 0px 20px' : '165px 40px 0px 0px ', 
              columnGap: 2, 
              marginBottom: '32px',
              paddingRight: '23px'
              }}>
              {
                LIST_TEXT.map((lt, index) => {
                  
                  return (
                    <ItemText
                      key={lt.id}
                      theme={theme}
                      text={lt.texto}
                      lineVertical={lastElement == (index + 1)}
                      isMobil={isMobil || isTable}
                      screamMedia={screamMedia}
                    />
                  )
                })
              }
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center'  }}>
              <ButtonContainded
                onclick={handleOpen}
              >
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  gap: 2
                 }}
                >
                  <Title
                      text='Comenzar'
                      variant='h2'
                      component={'h2'}
                      style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: '45px',
                        color: theme.palette.background.default,
                        fontWeight: '600',
                        textAlign: 'left',
                        lineHeight: '65.5px',
                        width: '100%',
                        textWrap: 'wrap',
                        textTransform: 'capitalize'
                        
                      }} 
                  />
                  <ImageComponet
                    src='/resources/images/solar_arrow-up-broken.svg'
                    alt='solar arrow up broken'
                    width={25}
                    height={33}
                    style={{
                      color: 'white',
                      marginTop: '6px'
                    }}
                    priority={false}
                  />
                </Box>
              </ButtonContainded>
            </Box>
          </Grid2>
        </Grid2>
      <ModalContact theme={theme} open={open} handleClose={handleClose} />
    </section>

  )
}
