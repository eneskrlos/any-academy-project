import React from 'react'
import LinkButton from "../Buttons/LinkButton";
import CustomizedMenus from "../Menu/Menu";
import { Link } from '@mui/material';

const LINK_STYLE  = {
    padding: '10px 20px',
    fontSize: '16px',
    whiteSpace: 'nowrap',
    color: '#3E3A4E'
  }

  const LINK_STYLE_BUTTOM = {
    padding: ' 6px 20px',
    fontSize: '16px',
    whiteSpace: 'nowrap',
    color: '#3E3A4E',
    backgroundColor: '#F6F6F6',
    borderRadius: '10px',
    border: '1px solid #3E3A4E'
  }

export default function NavComponent() {
  return (
    <nav style={{ paddingRight: "5%" }}>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          <li>
            <LinkButton 
              href="#" 
              variant="inherit"
              underline="none"
              style={LINK_STYLE}
              text="Inicio"
            / >
          </li>
          <li>
            <CustomizedMenus/>
          </li>
          <li>
            <LinkButton 
              href="#" 
              variant="inherit"
              underline="none"
              style={LINK_STYLE}
              text="Sobre Any"
            / >
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <Link
                component="button"
                variant="inherit"
                underline="none"
                style={LINK_STYLE_BUTTOM}
                onClick={() => {
                    console.info("I'm a button.");
                }}
                >
                Contaco
            </Link>
          </li>
        </ul>
      </nav>
  )
}
