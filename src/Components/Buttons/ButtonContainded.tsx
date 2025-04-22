import { Button } from '@mui/material'
import React, { CSSProperties, ReactNode } from 'react'

interface ButtonContaindedProps {
    sx?: CSSProperties,
    children?: ReactNode,
    disabled?: boolean,
    onclick?: () => void
}

export default function ButtonContainded({ sx, children, onclick, disabled } : ButtonContaindedProps) {
  return (
    <Button 
      variant="contained" sx={sx || {
          background: '#6A9EDA',
          color: '#FFF',
          '&:hover': {
            transform: 'scale(1.2)'
          }
      }}
      disabled={disabled || false}
      onClick={onclick}
    >
        {children}
    </Button>
  )
}
