import { Theme } from '@mui/material'
import React from 'react'
import Title from './Title'

interface TitleFooterProps {
    theme: Theme,
    text: string
}

export default function TitleFooter({ theme, text }:TitleFooterProps) {
  return (
    <Title
        text={text}
        variant='body1'
        component='p'
        style={{
            fontFamily: '"Quicksand", sans-serif',
            fontSize: '20px',
            color: theme.palette.background.default,
            fontWeight: '500',
            textAlign: 'left',
            width: '100%',
            textWrap: 'wrap'
        }}
    />
  )
}
