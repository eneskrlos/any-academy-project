import React from 'react'
import LinkButton from "../Buttons/LinkButton";
import CustomizedMenus from "../Menu/Menu";
import { Link } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';

import { styled } from '@mui/material/styles';

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
  const linkStyle = LINK_STYLE(theme)
  const linkButtomStyle = LINK_STYLE_BUTTOM(theme)
  return (
    <Nav>
        <Ul>
          <li>
            <LinkButton 
              href="#" 
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
              href="#" 
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
                onClick={() => {
                    console.info("I'm a button.");
                }}
                >
                Contacto
            </Link>
          </li>
        </Ul>
      </Nav>
  )
}
