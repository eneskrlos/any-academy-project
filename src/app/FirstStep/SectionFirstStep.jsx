'use client'
import ButtonContainded from '@/Components/Buttons/ButtonContainded'
import ModalContact from '@/Components/Modals/ModalContact'
import Title from '@/Components/Titles/Title'
import { Box, Grid2, Paper, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export default function SectionFirstStep() {
    const theme = useTheme()
    const isMobil = useMediaQuery("(max-width: 768px)")
    const isTable = useMediaQuery("(min-width: 769px) and (max-width: 920px)")
    const screamMedia = useMediaQuery("(min-width: 920px) and (max-width: 1540px)")
    // const isBetween770to1088 = useMediaQuery("(min-width: 770px) and (max-width: 1088px)")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <section style={{ marginTop:isMobil? '5rem': '10rem', height: isMobil? '100%' : '500px', padding: isMobil? '' : '100px 58px' }}>
        <Paper style={{ background: `linear-gradient(45deg,${theme.palette.primary.main}, #7DB6F7)`,width:'100%', height: isMobil || isTable? '100%' : '300px', padding: '56px 55px 27px 55px' }}>
            <Grid2 display={'flex'} flexDirection={isMobil || isTable? 'column' : 'row'} justifyContent={isMobil || isTable? 'center' : 'space-between'} alignItems={isMobil || isTable? 'none' : 'center'} gap={isMobil || isTable? 2 : 0} >
                <Grid2 >
                  <article>
                    <Title
                      text='Da el primer paso hacia el mundo que siempre soñaste'
                      variant='h4'
                      component={'h4'}
                      style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: isMobil ? '30px' : isTable? '40px': screamMedia ? '38px' : '50px',
                        color: theme.palette.background.default,
                        fontWeight: '600',
                        textAlign: isMobil || isTable? 'center': 'left',
                        lineHeight: isMobil ? '35px' : isTable? '35px' : screamMedia ? '50px' : '63.5px',
                        letterSpacing: isMobil ? '1px' : '3px',
                        width: isMobil || isTable ? '100%' : '80%',
                        textWrap: 'wrap',
                        
                      }} 
                    />
                  </article>
                  {
                    isMobil ? <></> 
                    : 
                    <Box>
                      <Title
                        text='¡Contáctanos y comienza hoy tu aprendizaje!'
                        variant='p'
                        component={'p'}
                        style={{
                          fontFamily: '"Quicksand", sans-serif',
                          fontSize: isMobil ? '20px' : isTable? '20px': screamMedia ? '18px' : '26px',
                          color: theme.palette.background.default,
                          fontWeight: '400',
                          textAlign: isMobil || isTable? 'center': 'left',
                          lineHeight: isMobil ? '25px' : isTable? '30px' : screamMedia ? '50px' : '63.5px',
                          letterSpacing: isMobil ? '1px' : '3px',
                          width: '100%',
                          textWrap: 'wrap',
                        }} 
                      />
                    </Box>
                   
                  }
                </Grid2>
                <Grid2 style={ (isMobil || isTable || screamMedia) ? { display: 'flex', justifyContent: 'center'} : { padding: '51px 100px' }} >
                 <ButtonContainded 
                    sx={{
                        background: '#7DB6F7',
                        color: '#FFF',
                        '&:hover': {
                          transform: 'scale(1.2)',
                        }
                    }}
                    onclick={handleOpen} 
                  >
                      <Title
                            text='Contactar'
                            variant='h4'
                            component={'h4'}
                            style={{
                              fontFamily: '"Quicksand", sans-serif',
                              fontSize: isMobil ? '38px' : isTable? '38px': screamMedia ? '18px' : '45px',
                              color: theme.palette.background.default,
                              fontWeight: '600',
                              textAlign: 'left',
                              lineHeight: '63.5px',
                              width: '100%',
                              textWrap: 'wrap',
                              textTransform: 'capitalize'
                              
                            }} 
                        />
                 </ButtonContainded>
                </Grid2>
            </Grid2>
        </Paper>
        <ModalContact theme={theme} open={open} handleClose={handleClose} />
    </section>
  )
}
