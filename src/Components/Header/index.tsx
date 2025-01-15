"use client";
import React from "react";
import ComponentLogo from "./ComponentLogo";
import NavComponent from "./NavComponent";
import NavMobile from "./NavMobile";
import { useMediaQuery } from "@mui/material";
import ScrollToTopButton from "../Buttons/ScrollToTopButton";


export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const isTablet = useMediaQuery("(max-width: 1024px)");
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #ccc",
      }}
      
    >
      <ComponentLogo />
      {isMobile && <NavMobile />}
      {!isMobile && <NavComponent />}
      <ScrollToTopButton />
    </header>
  );
}
