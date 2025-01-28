import { TextField } from '@mui/material'
import React, { ChangeEvent } from 'react'

interface TextFieldProps {
    id: string,
    label: string,
    name: string
    variant: 'filled' | 'outlined' | 'standard',
    style: React.CSSProperties,
    required: boolean,
    fullWidth: boolean,
    multiline?: boolean,
    rows?: number,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement> ) => void 
}

export default function TexFieldBasic({ id, name, label, variant, style, required, fullWidth, multiline, rows, value, onChange }:TextFieldProps) {
  return (
    <TextField 
        id={id}
        name={name}
        required={required}
        fullWidth={fullWidth}
        label={label}
        variant={variant}
        style={style}
        multiline={multiline}
        rows={rows}
        value={value}
        onChange={onChange}
    />
  )
}