'use client'
import { Box, List, useTheme } from '@mui/material'
import React from 'react'
import './footer.css'
import ImageComponet from '../Image/ImageComponent';
import TitleFooter from '../Titles/TitleFooter';
import { Link } from '@mui/material';


export default function Footer() {
    const theme = useTheme();
  return (
    <footer style={{ height: '386px', background: theme.palette.primary.main }}>
        <Box className="container" >
            <Box className="item item-1">
             <ImageComponet
                src='/resources/images/Logo_Footer.png'
                alt='Logo'
                width={332}
                height={121}
                priority={false}
                quality={0.7}
             />
            </Box>
            <Box className="item item-2">
                <TitleFooter
                    theme={theme}
                    text='Servicio' 
                />
                <List sx={{ width: '100%' }}>
                    {[1, 2, 3].map((value, index) => (
                        <Link
                            key={index}
                        >
                            <TitleFooter
                                text={`Link item ${value}`}
                                theme={theme} 
                            />
                        </Link>
                    ))}
                </List>
            </Box>
            <Box className="item item-3">
                <TitleFooter
                    theme={theme}
                    text='Contacto' 
                />
            </Box>
            <Box className="item item-4">
                <TitleFooter
                    theme={theme}
                    text=' Nos puedes encontrar en...' 
                />
            </Box>
        </Box>
    </footer>
  )
}
