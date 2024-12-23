import React from 'react'
import { Box, Grid2, styled, Theme } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

import Title from './Titles/Title';


interface ItemTextProps {
    theme: Theme,
    sx?: React.CSSProperties,
    text: string
    lineVertical: boolean

}

const LineaVertical = styled('div')(({ color  }) => ({
    width: '6px',                // Ancho de la línea
    height: '52px',              // Altura de la línea
    backgroundColor: color, // Color de la línea usando el tema
}));

export default function ItemText({ theme, sx, text, lineVertical }:ItemTextProps) {
  return (
    <Grid2 sx={sx || { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Grid2 sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Box sx={{ 
            background: theme.palette.secondary.main, 
            width: '70px', 
            height: '70px', 
            borderRadius: '50%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            color: 'white'
            }}
            > 
                <CheckIcon fontSize={'medium'} />
            </Box>
            {lineVertical || <LineaVertical color={theme.palette.secondary.main} /> } 
        </Grid2>
        <Grid2>
            <Title
            variant='body2'
            component={'p'}
            text={text}
            sx={{ 
                fontFamily: '"Quicksand", sans-serif',
                fontWeight: 400,
                fontSize: '24px',
                color: theme.palette.text.primary,
                lineHeight: '50px',
                textAlign: 'left',
                width: '760px',
                textWrap: 'wrap',
            }} 
            />
        </Grid2>
    </Grid2>
  )
}
