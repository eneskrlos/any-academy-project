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
    placeholder?: string,
    error?: boolean
    onChange?: (e: React.ChangeEvent<HTMLInputElement> ) => void 
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export default function TexFieldBasic({ id, name, label, variant, style, required, fullWidth, multiline, rows, value, onChange, placeholder, error, onBlur }:TextFieldProps) {
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
        onBlur={onBlur}
        placeholder={placeholder}
        error={!!error}
    />
  )
}