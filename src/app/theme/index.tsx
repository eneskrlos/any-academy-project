'use client'
import React, { ReactNode } from 'react'
import palette from './palette.json'
import { createTheme, ThemeProvider } from '@mui/material';

interface Props {
    children: ReactNode;
}

interface ThemeType {
  palette: {
    common: {
      black: string,
      white: string
    },
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    background: {
      paper: string;
      default: string;
    };
    error: {
      light: string,
      main: string,
      dark: string,
      contrastText: string
    },
    text: {
      primary: string,
      secondary: string,
      disabled: string
    }
  };
}

const theme = createTheme({
    palette
  } as ThemeType)

export default function Theme({ children }:Props) {
  return (
    <ThemeProvider theme={theme} key={theme.palette.primary.main}>
        {children}
      </ThemeProvider>
  )
}
