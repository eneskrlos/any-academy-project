'use client'
import { Box, List, useTheme } from '@mui/material'
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
            </Box>
            <Box className="item item-3">
                <TitleFooter
                    theme={theme}
                    text='Contacto' 
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
        <Box className='onda_footer'></Box>
    </footer>
  )
}
