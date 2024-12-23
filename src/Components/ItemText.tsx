import React from 'react'
import { Box, Grid2, Theme } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';

import Title from './Titles/Title';

interface ItemTextProps {
    theme: Theme,
    sx?: React.CSSProperties,
    text: string

}

export default function ItemText({ theme, sx, text }:ItemTextProps) {
  return (
    <Grid2 sx={sx || { display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '52px' }}>
        <Grid2>
            <Box sx={{ 
            background: '#5086C1', 
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
        </Grid2>
        <Grid2>
            <Title
            variant='body2'
            component={'p'}
            text={text}
            sx={{ 
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '24px',
                color: theme.palette.text.secondary,
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
