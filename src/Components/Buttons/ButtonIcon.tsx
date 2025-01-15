import React from 'react'
import { IconButton } from '@mui/material'

interface ButtonIconProps {
  style: React.CSSProperties;
  ariaLabel: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string | undefined
}

export default function ButtonIcon({style, icon, ariaLabel , onClick, className }:ButtonIconProps) {
  return (
    <IconButton className={className} style={style} aria-label={ariaLabel} onClick={onClick}>
      {icon}
    </IconButton>
  )
}
