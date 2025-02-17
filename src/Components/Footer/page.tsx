'use client'
import { Box, List, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import './footer.css'
import ImageComponet from '../Image/ImageComponent';
import TitleFooter from '../Titles/TitleFooter';
import { Link } from '@mui/material';
import TitleImage from '../Titles/TitleImage';

const LINKS_SERVICIOS = [
    {
        id: '1',
        name:'Curso de Inglés',
        href: '#'
    },
    {
        id: '2',
        name:'Curso de Italiano',
        href: '#'
    },
    {
        id: '3',
        name:'Curso de Español',
        href: '#'
    },
    {
        id: '4',
        name:'Traducción',
        href: '#'
    },
    {
        id: '5',
        name:'Interpretación',
        href: '#'
    },
]

const LIST_CONTACTO = [
    {
        id: '1',
        src: '/resources/images/mail_white.png',
        alt: 'emial',
        text: ' anyslacademy@gmail.com'
    },
    {
        id: '2',
        src: '/resources/images/telephone.png',
        alt: 'phone',
        text: '+1 (305) 607-6884'
    },
    {
        id: '3',
        src: '/resources/images/location.png',
        alt: 'location',
        text: 'Estamos en USA'
    }
]

const SOCIAL_RED = [
    {
        id: 1,
        src: '/resources/images/Facebook.png',
        alt: 'facebook',
        link: ''
    },
    {
        id: 2,
        src: '/resources/images/instagram.png',
        alt: 'instagram',
        link: ''
    },
    {
        id: 3,
        src: '/resources/images/x.png',
        alt: 'x',
        link: ''
    }
]


export default function Footer() {
    const theme = useTheme();
    const isMobil = useMediaQuery("(max-width: 768px)")
  return (
    <footer style={{ height: isMobil ? 'auto' : '386px', background: theme.palette.secondary.main }}>
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
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: '20px',
                        color: theme.palette.background.default,
                        fontWeight: '500',
                        textAlign: 'left',
                        width: '100%',
                        textWrap: 'wrap',
                        position: 'relative',
                        left: isMobil ? '0px' : '100px'

                    }} 
                />
                <div style={{ position: 'relative', left: isMobil ? '0px' :'100px' }}>

                    <List sx={{ width: '100%' }}>
                        {LINKS_SERVICIOS.map((value, index) => (
                            <Link
                                key={index}
                                href={value.href}
                            >
                                <TitleFooter
                                    text={value.name}
                                    theme={theme}
                                    style={{
                                        fontFamily: '"Quicksand", sans-serif',
                                        fontSize: '20px',
                                        color: theme.palette.background.default,
                                        fontWeight: '400',
                                        textAlign: 'left',
                                        width: '100%',
                                        textWrap: 'wrap'
                                    }} 
                                />
                            </Link>
                        ))}
                    </List>
                </div>
            </Box>
            <Box className="item item-3">
                <TitleFooter
                    theme={theme}
                    text='Contacto'
                    style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: '20px',
                        color: theme.palette.background.default,
                        fontWeight: '500',
                        textAlign: 'left',
                        width: '100%',
                        textWrap: 'wrap'
                    }} 
                />
                {LIST_CONTACTO.map((value, index) => (
                    <TitleImage
                        key={index}
                        text={value.text}
                        theme={theme}
                        src={value.src}
                        alt={value.alt}
                        spacing={0}
                        styleText={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontSize: '20px',
                            color: theme.palette.background.default,
                            fontWeight: '400',
                            textAlign: 'left',
                            lineHeight: '24px',
                            width: '100%',
                            textWrap: 'wrap'
                        }}
                    />
                    ))}
            </Box>
            <Box className="item item-4">
                <TitleFooter
                    theme={theme}
                    text='Nos puedes encontrar en...' 
                />
                <List sx={{ width: '100%',display:'flex', flexDirection: 'row',  gap:4 }}>
                    {SOCIAL_RED.map((value, index) => (
                        <Link
                            key={index}
                            href={value.link}
                        >
                            <ImageComponet
                                src={value.src}
                                alt={value.alt}
                                width={46}
                                height={46}
                                priority={true}
                                quality={0.7}
                            />
                        </Link>
                    ))}
                </List>
            </Box>
        </Box>
        <Box sx={{
            background: theme.palette.text.primary,
            width: '100%',
            height: '136px',
            borderRadius: '50% 50% 0 0',
            position: 'relative',
            bottom: 0,
            left: 0,
            right: 0,
            transform: 'translateY(54px)',
            overflow: 'hidden',
        }}>
            <Box marginTop={'4rem'} >
                <TitleFooter
                theme={theme}
                text='© 2024  Any’s Language Academy. All rights reserved.'
                style={{
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: isMobil ? '18px' : '20px',
                    color: theme.palette.background.default,
                    fontWeight: isMobil ? '600' : '400',
                    textAlign: 'center',
                    width: '100%',
                    textWrap: 'wrap'
                }}  
                />
            </Box>
        </Box>
    </footer>
  )
}
