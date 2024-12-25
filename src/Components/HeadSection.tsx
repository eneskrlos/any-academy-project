import { Theme } from '@mui/material';
import React, { CSSProperties } from 'react'
import Title from './Titles/Title';

interface HeadSectionComponentProps {
    theme: Theme
    styleArticle: CSSProperties
    headText: string
    text: string
    styleText?: CSSProperties
    styleHeadText?: CSSProperties
}

export default function HeadSectionComponent({ headText, text , styleArticle, theme, styleText, styleHeadText }: HeadSectionComponentProps) {
  return (
    <aside  style={{ marginBottom: '54px' }}>
        <article style={styleArticle}>
            <header>
                <Title
                    text={headText}
                    variant='h2'
                    style={styleHeadText || {
                        fontFamily: '"Quicksand", sans-serif',
                        fontSize: '45px',
                        color: theme.palette.text.secondary,
                        fontWeight: '600',
                        textAlign: 'center',
                        lineHeight: '60px',
                        width: '100%',
                        textWrap: 'wrap',
                        marginBottom: '18px'
                    }}
                />
            </header>
            <Title text={text} variant='subtitle1' component={'p'} 
                style={styleText || { 
                    fontFamily: '"Quicksand", sans-serif',
                    fontSize: '24px',
                    color: theme.palette.text.primary,
                    fontWeight: '400',
                    textAlign: 'center',
                    lineHeight: '30px',
                    maxWidth: '952px',
                    textWrap: 'wrap',
                    position: 'relative',
                    left: '3%'
                }} 
            />
        </article>
    </aside>
  )
}
