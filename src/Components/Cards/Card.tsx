import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import ImageComponet from '../Image/ImageComponent';
import Title from '../Titles/Title';
import { Theme } from '@mui/material';

interface ImageAction {
    src: string
    alt: string
}


interface CardProps {
    title: string
    description: string
    theme: Theme
    imageAction: ImageAction
    // button: string
}

export default function CardComponent({ title,description, theme, imageAction }:CardProps) {
  return (
    <Card sx={{ width: '100%', height: '300px', margin: '0px 20px 0px 20px', border: '1px solid #6A9EDA', borderRadius: '10px' }} >
      <CardActions style={{ background: '#6A9EDA', width: 60, height: 45, borderRadius: '10px 0 10px 0' }}>
        <ImageComponet src={imageAction.src} alt={imageAction.alt} width={32} height={32} style={{}} priority />
      </CardActions>
      <CardContent>
        <article>
          <header>
            <Title
              text={title}
              variant='h4'
              style={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '22px',
                color: theme.palette.text.secondary,
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '40px',
                width: 'auto',
                height: 'auto',
                textWrap: 'wrap',
                marginBottom: '22px'
              }} 
            />
          </header>
          <Title 
            text={description}
            variant='h5'
            component={'p'}
            style={{
              fontFamily: '"Quicksand", sans-serif',
              fontSize: '20px',
              color: theme.palette.text.primary,
              fontWeight: '400',
              textAlign: 'left',
              lineHeight: '20px',
              width: '100%',
              height: '100%',
              textWrap: 'wrap',
            }} 
          />
        </article>
      </CardContent>
    </Card>
  )
}
