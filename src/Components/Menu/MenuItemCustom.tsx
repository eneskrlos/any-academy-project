import React from 'react'
import { MenuItem } from '@mui/material'
import Title from '../Titles/Title'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface MenuItemCustomProps {
  text: string,
  handleClickSubmenu: (event: React.MouseEvent<HTMLElement>) => void,
  menuItemStyle: React.CSSProperties
}

export default function MenuItemCustom({ text, handleClickSubmenu, menuItemStyle }:MenuItemCustomProps) {
  return (
    <MenuItem onClick={handleClickSubmenu} disableRipple style={menuItemStyle}>
          <Title
            text={text}
            variant='body1'
            component='p' 
          />
          <KeyboardArrowRightIcon/>
    </MenuItem>
  )
}
