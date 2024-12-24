'use client'
import React from "react";

import { Grid2, useMediaQuery } from "@mui/material";
import Title from "../Titles/Title";

import { useTheme } from "@mui/material";
import ImageComponet from "../Image/ImageComponent";

interface ImageAtributeComponent {
    src: string,
    alt: string,
    width: number,
    height: number
    
}

interface SliderConentProps {
    title: string,
    subtitle: string,
    image: ImageAtributeComponent
}

const SlideContent = ({ title, subtitle, image}: SliderConentProps) => {
    const theme = useTheme();
    const isMobil = useMediaQuery("(max-width: 768px)")
    return (
        <Grid2 container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '88px', marginBottom: isMobil? '95px' : '130px' }}>
            <Grid2>
                <article>
                    <header>
                        <Title text={title} variant='h1' style={{
                            fontFamily: '"Quicksand", sans-serif',
                            fontSize: isMobil? '65px' : '95px',
                            color: theme.palette.background.paper,
                            fontWeight: '600',
                            textAlign: isMobil ? 'center' : 'left',
                            lineHeight: isMobil? '60px' : '90px',
                            maxWidth: '758px',
                            height: 'auto',
                            textTransform: 'uppercase',
                            textWrap: 'wrap',
                            marginBottom: '37px'
                        }} />
                    </header>
                    <Title text={subtitle} variant='subtitle1' component={'p'} style={{
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: isMobil? '40px' : '60px',
                        color: theme.palette.text.primary,
                        fontWeight: '400',
                        textAlign: isMobil ? 'center' : 'left',
                        lineHeight: isMobil? '30px' :'60px',
                        maxWidth: '638px',
                        textWrap: 'wrap'
                    }} />
                </article>
            </Grid2>
            <Grid2>
                <picture>
                    <ImageComponet 
                        src={image.src} 
                        alt={image.alt} 
                        priority 
                        width={image.width} 
                        height={image.height}
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </picture>
            </Grid2>
        </Grid2>
    );
};

export default SlideContent;