'use client'
import React from 'react'
import { styled, alpha, Theme } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItemCustom from './MenuItemCustom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from '@mui/material';


const MENU_ITEM_STYLE = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center'
}

const LINK_STYLE_CUSTOM  = (theme: Theme) => ({
  // padding: '6px 20px',
  fontSize: '15px',
  whiteSpace: 'nowrap',
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'normal',
  justifyContent: 'center',
  '&:hover': {
    color: theme.palette.text.secondary,
  },
  '&:active': {
    color: '#134380',
  }
})

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 180,
    color:
      theme.palette.primary.main,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.primary.main,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.text.primary,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function MenuMobile({text, theme}: {text: string, theme: Theme}) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
      
    };

    const linkStyleCustom = LINK_STYLE_CUSTOM(theme)
    
  return (
    <>
      <Link 
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="inherit"
        component="button"
        underline="none"
        style={linkStyleCustom}
        onClick={handleClick}
      >
        {text} 
        <KeyboardArrowDownIcon
          style={{
            color: theme.palette.primary.main,
            transition: 'transform 0.3s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }} 
        />
      </Link>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItemCustom text='Principiante' menuItemStyle={MENU_ITEM_STYLE}  />
        <MenuItemCustom text='Intermedio' menuItemStyle={MENU_ITEM_STYLE}  />
        <MenuItemCustom text='Avanzado' menuItemStyle={MENU_ITEM_STYLE}  />
      </StyledMenu>
    </>
  )
}
