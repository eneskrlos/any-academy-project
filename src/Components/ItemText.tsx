import React from 'react'
import { Box, Grid2, styled, Theme } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

import Title from './Titles/Title';


interface ItemTextProps {
    theme: Theme,
    sx?: React.CSSProperties,
    text: string,
    lineVertical: boolean,
    isMobil: boolean,
    screamMedia: boolean
}

interface LineVerticalProps {
    color: string;
    height: string
}

const LineaVertical = styled('div')(({ color, height  }: LineVerticalProps) => ({
    width: '6px',                // Ancho de la línea
    height: height,              // Altura de la línea
    backgroundColor: color, // Color de la línea usando el tema
    // marginRight: '15px'
}));

export default function ItemText({ theme, sx, text, lineVertical, isMobil, screamMedia }:ItemTextProps) {
  return (
    <Grid2 sx={sx || { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Grid2 sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Box sx={{ 
                background: theme.palette.secondary.main, 
                width: isMobil ? '50px' : '70px', 
                height: isMobil ? '50px' : '70px', 
                borderRadius: '50%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: 'white',
                // marginRight: '15px'
            }}
            > 
                <CheckIcon fontSize={'medium'} />
            </Box>
            {lineVertical || <LineaVertical color={theme.palette.secondary.main} height={ isMobil ? '100px' : '52px'} /> } 
        </Grid2>
        <Grid2>
            <Title
            variant='body2'
            component={'p'}
            text={text}
            sx={{ 
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 400,
                fontSize: screamMedia ? '18px' : '24px',
                color: theme.palette.text.primary,
                lineHeight: isMobil ? '25px' : screamMedia? '30px' : '33px',
                textAlign: 'left',
                maxWidth: '760px',
                textWrap: 'wrap',
                marginLeft: '25px',
                position: 'relative',
                bottom: isMobil ? '1rem' : '1rem'
            }} 
            />
        </Grid2>
    </Grid2>
  )
}
