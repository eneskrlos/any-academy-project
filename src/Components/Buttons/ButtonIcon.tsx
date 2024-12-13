import React from 'react'
import { IconButton } from '@mui/material'

interface ButtonIconProps {
  style: React.CSSProperties;
  ariaLabel: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export default function ButtonIcon({style, icon, ariaLabel , onClick }:ButtonIconProps) {
  return (
    <IconButton style={style} aria-label={ariaLabel} onClick={onClick}>
      {icon}
    </IconButton>
  )
}
