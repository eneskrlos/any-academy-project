import { Button } from '@mui/material'
import React, { CSSProperties, ReactNode } from 'react'

interface ButtonContaindedProps {
    sx?: CSSProperties,
    children?: ReactNode,
    onclick?: () => void
}

export default function ButtonContainded({ sx, children, onclick } : ButtonContaindedProps) {
  return (
    <Button 
      variant="contained" sx={sx || {
          background: '#6A9EDA',
          color: '#FFF',
          '&:hover': {
            transform: 'scale(1.2)',
          }
      }}
      onClick={onclick}
    >
        {children}
    </Button>
  )
}
