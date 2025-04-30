import React from 'react'
import LinkButton from "../Buttons/LinkButton";
import CustomizedMenus from "../Menu/Menu";
import { Link } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';

import { styled } from '@mui/material/styles';
import ModalContact from '../Modals/ModalContact';
import { storeUser } from '@/store/storeUser';
import { storeError } from '@/store/storeErrorForm';
import { storeTouched } from '@/store/storeTouchedFrom';

const Nav = styled('nav')({
  paddingRight: '5%',
});

const Ul =styled('ul')({
  display: "flex",
  listStyle: "none",
  gap: "20px",
  alignItems: "center"
});

const LINK_STYLE = (theme: Theme) => ({
    padding: '10px 20px',
    fontSize: '16px',
    whiteSpace: 'nowrap',
    color: theme.palette.primary.main,
    
    "&:hover": {
      color: theme.palette.text.primary,
      cursor: "pointer"
    }
})

const LINK_STYLE_BUTTOM = (theme: Theme) => ({
  padding: ' 6px 20px',
  fontSize: '16px',
  whiteSpace: 'nowrap',
  color: theme.palette.primary.main,
  backgroundColor: 'rgba(106, 158, 218, 0.5)',
  borderRadius: '10px',
  border: 'none',
  "&:hover": {
      color: theme.palette.text.primary,
      cursor: "pointer"
    }
})

export default function NavComponent() {
  const theme = useTheme();
  const {
      clearUser
  } = storeUser()
  const { clearError } = storeError()
  const { clearTouched } = storeTouched()
  const linkStyle = LINK_STYLE(theme)
  const linkButtomStyle = LINK_STYLE_BUTTOM(theme)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    clearUser()
    clearError()
    clearTouched()
    setOpen(false)
  }
  return (
    <>
    <Nav>
        <Ul>
          <li>
            <LinkButton 
              href="/" 
              variant="inherit"
              underline="none"
              style={linkStyle}
              text="Inicio"
            / >
          </li>
          <li>
            <CustomizedMenus text={'Servicios'} theme={theme}/>
          </li>
          <li>
            <LinkButton 
              href="#sobreAny" 
              variant="inherit"
              underline="none"
              style={linkStyle}
              text="Sobre Any"
            / >
          </li>
          <li>
            <Link
                component="button"
                variant="inherit"
                underline="none"
                style={linkButtomStyle}
                onClick={handleOpen}
                >
                Contacto
            </Link>
          </li>
        </Ul>
      </Nav>
      <ModalContact theme={theme} open={open} handleClose={handleClose} />
    </>
  )
}
