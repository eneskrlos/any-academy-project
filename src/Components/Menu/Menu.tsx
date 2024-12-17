'use client'
import * as React from 'react';
import { styled, alpha, Theme } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';;
import Menu, { MenuProps } from '@mui/material/Menu';
// import Divider from '@mui/material/Divider';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from '@mui/material';
import MenuItemCustom from './MenuItemCustom';


const LINK_STYLE_CUSTOM  = (theme: Theme) => ({
  padding: '6px 20px',
  fontSize: '16px',
  whiteSpace: 'nowrap',
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: theme.palette.text.secondary,
  },
  '&:active': {
    color: '#134380',
  }
})

const MENU_ITEM_STYLE = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center'
}

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

const StyledSubMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'center',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: -5,
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 180,
    color:theme.palette.primary.main,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus({text, theme}: {text: string, theme: Theme}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElSubmenu, setAnchorElSubmenu] = React.useState<null | HTMLElement>(null);
  // const [isFocused, setIsFocused] = React.useState(false);
  const open = Boolean(anchorEl);
  const openSubmenu = Boolean(anchorElSubmenu);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElSubmenu(null);
  };

  const handleClickSubmenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElSubmenu(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setAnchorElSubmenu(null);
  }

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
        <MenuItemCustom text='Cursos' menuItemStyle={MENU_ITEM_STYLE} handleClickSubmenu={handleClickSubmenu} haveMoreOption />
        <MenuItemCustom text='Traducción' menuItemStyle={MENU_ITEM_STYLE}  />
        <MenuItemCustom text='Interpretación' menuItemStyle={MENU_ITEM_STYLE} />
      </StyledMenu>

      <StyledSubMenu
        id="submenu"
        anchorEl={anchorElSubmenu}
        open={openSubmenu}
        onClose={handleSubmenuClose}
        MenuListProps={{
          'aria-labelledby': 'submenu-button',
        }}
      >
        <MenuItemCustom text='Principiante' menuItemStyle={MENU_ITEM_STYLE} handleClickSubmenu={handleSubmenuClose} />
        <MenuItemCustom text='Intermedio' menuItemStyle={MENU_ITEM_STYLE} handleClickSubmenu={handleSubmenuClose} />
        <MenuItemCustom text='Avanzado' menuItemStyle={MENU_ITEM_STYLE} handleClickSubmenu={handleSubmenuClose} />
      </StyledSubMenu>
    </>
  );
}
