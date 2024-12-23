import { Button } from '@mui/material'
import React, { CSSProperties, ReactNode } from 'react'

interface ButtonContaindedProps {
    sx?: CSSProperties,
    children?: ReactNode
}

export default function ButtonContainded({ sx, children } : ButtonContaindedProps) {
  return (
    <Button variant="contained" sx={sx || {
        background: '#6A9EDA',
        color: '#FFF',
        '&:hover': {
          transform: 'scale(1.2)',
        }
    }}>
        {children}
    </Button>
  )
}
