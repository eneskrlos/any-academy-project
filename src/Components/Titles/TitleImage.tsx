import { Stack, Theme } from '@mui/material'
import React from 'react'
import ImageComponet from '../Image/ImageComponent'
import Title from './Title'

interface TitleImageProps {
    text: string,
    src: string,
    alt: string,
    theme: Theme
    spacing?: number
    styleText?: React.CSSProperties
    styleImage?: React.CSSProperties
    sxStactk?: React.CSSProperties
}

export default function TitleImage({ text, src, alt, theme, spacing, styleText, styleImage, sxStactk }:TitleImageProps) {
  return (
    <Stack direction={'row'} spacing={ spacing || 2} sx={sxStactk}>
        <ImageComponet
            src={src}
            alt={alt}
            width={20}
            height={20}
            priority={false}
            style={styleImage}
        />
        <Title
            text={text}
            variant='body1'
            component={'p'}
            style={ styleText || {
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '20px',
                color: theme.palette.text.secondary,
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: '24px',
                width: '100%',
                textWrap: 'wrap',
                textTransform: 'capitalize'
            }} 
        />
    </Stack>
  )
}
