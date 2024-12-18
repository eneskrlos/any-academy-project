import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function CardComponent() {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
      <CardActions style={{ background: '#6A9EDA' }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
