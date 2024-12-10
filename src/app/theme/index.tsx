'use client'
import React, { ReactNode } from 'react'
import palette from './palette.json'
import { createTheme, ThemeProvider } from '@mui/material';

interface Props {
    children: ReactNode;
}

const tema = createTheme({
    palette
  })

export default function Theme({ children }:Props) {
  return (
    <ThemeProvider theme={tema} key={tema.palette.primary.main}>
        {children}
      </ThemeProvider>
  )
}
