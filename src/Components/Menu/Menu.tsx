'use client'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';;
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from '@mui/material';
import MenuItemCustom from './MenuItemCustom';

const LINK_STYLE_CUSTOM  = {
  padding: '0px 20px',
  fontSize: '16px',
  whiteSpace: 'nowrap',
  color: '#3E3A4E',
  display: 'flex',
  alignItems: 'normal',
  justifyContent: 'center',
  '&:hover': {
    color: '#134380',
  },
  '&:active': {
    color: '#134380',
  }
}

const MENU_ITEM_STYLE = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(0),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
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

const StyledSubMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'center',
      horizontal: 'right',
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
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
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

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElSubmenu, setAnchorElSubmenu] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openSubmenu = Boolean(anchorElSubmenu);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log('aqui')
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
        style={LINK_STYLE_CUSTOM}
        onClick={handleClick}
      >
        Cursos <ArrowDropDownIcon />
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
        <MenuItemCustom text='Ingles' menuItemStyle={MENU_ITEM_STYLE} handleClickSubmenu={handleClickSubmenu} />
        <MenuItemCustom text='Italiano' menuItemStyle={MENU_ITEM_STYLE} handleClickSubmenu={handleClickSubmenu} />
        <MenuItemCustom text='Español' menuItemStyle={MENU_ITEM_STYLE} handleClickSubmenu={handleClickSubmenu} />
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
        <MenuItem onClick={handleSubmenuClose} disableRipple>
          Principiante
        </MenuItem>
        <MenuItem onClick={handleSubmenuClose} disableRipple>
          Intermedio
        </MenuItem>
        <MenuItem onClick={handleSubmenuClose} disableRipple>
          Avanzado
        </MenuItem>
      </StyledSubMenu>
    </>
  );
}
