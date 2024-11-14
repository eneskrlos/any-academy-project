import { Link } from "@mui/material";
import React from "react";


interface LinkButtonProps {
  href: string
  text?: string,
  variant: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2'
  underline: 'always' | 'hover' | 'none'
  style: React.CSSProperties
}

export default function LinkButton({ href, text, underline, style, variant } : LinkButtonProps) {
  return (
    <Link 
      href={href} 
      variant={variant}
      underline={underline}
      style={style}
    >
      { text }
    </Link>
  );
}
