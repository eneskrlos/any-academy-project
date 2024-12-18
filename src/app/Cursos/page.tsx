import React from 'react'
import { useTheme } from '@mui/material'
import CursosView from '@/Views/Cursos/Index'



export default function CursosPage() {
    const theme = useTheme()
  return (
        <CursosView theme={theme} />
  )
}
