"use client";
import React from "react";
import ComponentLogo from "./ComponentLogo";
import NavComponent from "./NavComponent";


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
      <ComponentLogo />
      <NavComponent />
    </header>
  );
}
