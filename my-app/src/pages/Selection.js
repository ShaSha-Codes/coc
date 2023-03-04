import React from 'react'
import TinderCard from 'react-tinder-card'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Selection = () => {
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <div style={{maxWidth:'500px'}}>
 
    <TinderCard  onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
         
    <Card sx={{ maxWidth: 345,minHeight:'400px' }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="340"
            image="https://thumbs.dreamstime.com/b/handsome-guy-being-bored-talking-stranger-random-staff-yawning-cover-opened-mouth-fist-squinting-tired-standing-fatigue-178777560.jpg" // replace with your desired image URL
            alt="random image"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            </CardContent>
        </CardActionArea>
    </Card>






      
    </TinderCard>
        </div>
    </div>
  )
}

export default Selection

