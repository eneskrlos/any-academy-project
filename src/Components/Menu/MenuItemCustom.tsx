import React from 'react'
import { MenuItem } from '@mui/material'
import Title from '../Titles/Title'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface MenuItemCustomProps {
  text: string,
  haveMoreOption?: boolean,
  handleClickSubmenu?: (event: React.MouseEvent<HTMLElement>) => void,
  menuItemStyle: React.CSSProperties
  menuItemStyleText?: React.CSSProperties
}

export default function MenuItemCustom({ text, haveMoreOption=false, handleClickSubmenu, menuItemStyle, menuItemStyleText }:MenuItemCustomProps) {
  return (
    <MenuItem onClick={handleClickSubmenu ? handleClickSubmenu : () => {}} disableRipple style={menuItemStyle}>
          <Title
            text={text}
            variant='body1'
            component='p' 
            style={ menuItemStyleText ? menuItemStyleText : {
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '16px',
            }}    
          />
          {haveMoreOption ? <KeyboardArrowRightIcon/> : <></> }   
    </MenuItem>
  )
}
