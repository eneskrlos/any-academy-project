
import { Box } from '@mui/material'
import React from 'react'
import BoxLogo from '../BoxLogo'
import Title from '../Titles/Title'

export default function ComponentLogo({textheader}:{textheader: string}) {
  return (
    <Box display={"flex"} alignItems={'center'} gap={1} paddingLeft={'5%'} >
        <BoxLogo />
        <Title 
        variant="body2" 
        component="h4" 
        text={textheader} 
        sx={{ 
            fontFamily: 'Pacifico, cursive', 
            fontSize: '2rem', 
            fontStyle: 'normal', 
            color: '#134380' 
            }}  
        />
    </Box>
  )
}

