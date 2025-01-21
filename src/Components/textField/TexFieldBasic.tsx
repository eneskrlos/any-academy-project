import { TextField } from '@mui/material'
import React from 'react'

interface TextFieldProps {
    id: string,
    label: string,
    variant: 'filled' | 'outlined' | 'standard',
    style: React.CSSProperties,
    required: boolean,
    fullWidth: boolean,
    multiline?: boolean,
    rows?: number
}

export default function TexFieldBasic({ id, label, variant, style, required, fullWidth, multiline, rows }:TextFieldProps) {
  return (
    <TextField 
        id={id}
        required={required}
        fullWidth={fullWidth}
        label={label}
        variant={variant}
        style={style}
        multiline={multiline}
        rows={rows}
    />
  )
}
