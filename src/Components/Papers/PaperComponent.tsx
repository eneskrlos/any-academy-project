import { Paper, Theme, useMediaQuery } from '@mui/material'
import React from 'react'
import Title from '../Titles/Title'


interface PaperComponentProps {
  theme: Theme,
  title: string,
  description: string,
  step: string
}

export default function PaperComponent({ theme, title, description, step }: PaperComponentProps) {
  const isMobil = useMediaQuery("(max-width: 768px)")
  // const isTable = useMediaQuery("(max-width: 920px)")
  const screamMedia = useMediaQuery("(min-width: 920px) and (max-width: 1540px)")
  return (
    <Paper
      sx={{
        height: '350px',
        width: '264px',
        backgroundColor: theme.palette.background.default,
        columnGap: 4
      }}
    >
      <article>
        <header style={{ height: '80px', margin: '24px 24px 14px 24px' }}>
          <Title
            text={title}
            variant='h3'
            component={'h3'}
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: isMobil ? '32px' : screamMedia ? '26px' : '32px',
              color: theme.palette.text.secondary,
              fontWeight: '600',
              textAlign: isMobil ? 'center': 'left',
              lineHeight: isMobil ? '40px' : screamMedia ? '30px' : '40px',
              width: '100%',
              textWrap: 'wrap',
            }} 
          />
        </header>
        <Title
            text={description}
            variant='body1'
            component={'p'}
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: isMobil ? '18px' : screamMedia ? '15px' : '18px',
              color: theme.palette.text.secondary,
              fontWeight: '400',
              textAlign: isMobil ? 'center': 'left',
              width: '100%',
              textWrap: 'wrap',
              padding: '0px 24px 30px 24px',
              height: '160px'
            }} 
          />
        <footer style={{ margin: '24px' }}>
          <Title
            text={step}
            variant='body1'
            component={'p'}
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: isMobil ? '16px' : screamMedia ? '12px' : '16px',
              color: theme.palette.text.secondary,
              fontWeight: '800',
              textAlign: isMobil ? 'center': 'left',
              width: '100%',
              textWrap: 'wrap',
            }} 
          />
        </footer>
      </article>
    </Paper>
  )
}
