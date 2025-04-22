import { Box, Theme } from '@mui/material'
import React from 'react'
import TitleImage from '../Titles/TitleImage'
import Title from '../Titles/Title'

interface textImageProps {
    text: string,
    src: string,
    alt: string
}

interface BoxFooterModalProps {
    theme: Theme,
    textImage: textImageProps,
    subTitle: string,
    isMobil: boolean
}

export default function BoxFooterModal({ theme, textImage, subTitle, isMobil } : BoxFooterModalProps) {
    const { text, src, alt } = textImage
    return (
    <Box display={'flex'} flexDirection={isMobil? 'column': 'row'} justifyContent={ isMobil? 'center' : 'space-between' } alignItems={'center'} height={'10pxs'}>
        <TitleImage
            text={text}
            src={src}
            alt={alt}
            theme={theme} 
        />
        <Title
            text={subTitle}
            variant='body1'
            component={'p'}
            style={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '20px',
                color: theme.palette.text.secondary,
                fontWeight: '400',
                textAlign: isMobil? 'center' : 'right',
                lineHeight: '24px',
                width: '100%',
                textWrap: 'wrap'
            }} 
        />
    </Box>
  )
}
