"use client";
import React from "react";
import LinkButton from "../Buttons/LinkButton";
import Title from "../Titles/Title";
import { Box } from "@mui/material";
import BoxLogo from "../BoxLogo";

const LINK_STYLE  = {
  background: "white", 
  border: "1px solid #7777", 
  borderRadius: '23px', 
  padding: '10px 20px',
  fontSize: '18px',
  whiteSpace: 'nowrap',
  backgroundColor: '#9d969677', 
}

export default function Header() {
  
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box display={"flex"} alignItems={'center'} gap={1} paddingLeft={'5%'} >
        <BoxLogo />
        <Title variant="h4" component="h4" text="Any’s Language Academy" />
      </Box>
      <nav style={{ paddingRight: "5%" }}>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
          <li>
            <LinkButton 
            href="#" 
            variant="body2"
            underline="none"
            style={LINK_STYLE}
            text="Inicio"
            / >
          </li>
          <li>
          <LinkButton 
            href="#" 
            variant="body2"
            underline="none"
            style={LINK_STYLE}
            text="Curso"
            / >
          </li>
          <li>
          <LinkButton 
            href="#" 
            variant="body2"
            underline="none"
            style={LINK_STYLE}
            text="Sobre Any"
            / >
          </li>
          <li>
          <LinkButton 
            href="#" 
            variant="body2"
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
