import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Box, Grid2, Rating, Theme } from '@mui/material';
import Title from '../Titles/Title';
import ImageComponet from '../Image/ImageComponent';

interface Opinon {
  id: number,
  avatar: string,
  startLevel: number,
  text: string,
  name: string,
  countryFlag: string
}

interface CardOpinionProps {
  theme: Theme,
  itemOpinion: Opinon
  idMobil: boolean

}

export default function CardOpinion({ theme, itemOpinion, idMobil }:CardOpinionProps) {
  const { id, name, avatar,  startLevel, text, countryFlag } = itemOpinion;
  return (
    <Card key={id} sx={{ maxWidth: 500, height: idMobil? 'auto' : 246, boxShadow: '0 7px 5px #6a9edac7' }}>
      <CardContent style={{ padding: '20px 10px' }}>
        <Grid2 sx={{ display:'flex', flexDirection: 'row', gap: 8 }}>
          <Grid2>
            <Avatar 
              aria-label="avatar" 
              src={`/resources/images/${avatar}`}
              alt='avatar of female student with notebooks'
              style={{ width: '70px', height: '70px', borderRadius: '50%' }}
            />
          </Grid2>
          <Grid2>
            <Rating name="start-level" value={startLevel} readOnly />
            <Title
              text={text} 
              variant='body1'
              component='p'
              style={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: '20px',
                color: theme.palette.text.secondary,
                fontWeight: '500',
                textAlign: 'left',
                lineHeight: '25px',
                letterSpacing: 0,
                width: '100%',
                textWrap: 'wrap'
              }}
            />
            <Box display={'flex'} flexDirection={'row'} justifyContent={'left'} alignItems={'center'} gap={2}>
              <Title
                text={name} 
                variant='body1'
                component='p'
                style={{
                  fontFamily: '"Quicksand", sans-serif',
                  fontSize: '20px',
                  color: theme.palette.text.secondary,
                  fontWeight: '500',
                  textAlign: 'left',
                  lineHeight: '30px',
                  letterSpacing: 0,
                  width: 'auto',
                  textWrap: 'wrap'
                }}
              />
              <ImageComponet
                src={`/resources/images/${countryFlag}`}
                alt='Bandera del pais de quien opina'
                width={24}
                height={24}
                priority={false}
                quality={0.7}
              />
            </Box>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
}
