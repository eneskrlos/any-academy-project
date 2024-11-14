"use client";
import React from "react";
import LinkButton from "../Buttons/LinkButton";
import CustomizedMenus from "../Menu/Menu";
import ComponentLogo from "./ComponentLogo";

const LINK_STYLE  = {
  padding: '10px 20px',
  fontSize: '16px',
  whiteSpace: 'nowrap',
  color: '#3E3A4E'
}

export default function Header() {
  
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #ccc",
      }}
      
    >
      <ComponentLogo textheader="Any’s Language Academy" />
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
          <li>
            <LinkButton 
              href="#" 
              variant="inherit"
              underline="none"
              style={LINK_STYLE}
              text="Contacto"
            / >
          </li>
        </ul>
      </nav>
    </header>
  );
}
