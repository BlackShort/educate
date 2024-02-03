import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import document from '../assets/document.svg';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';

export const Cards = () => {
  return (
    <Card sx={{ width: 300, background: 'gray', padding: '1em' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={document}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button endIcon={<LaunchRoundedIcon />} size="small" color="primary" variant='contained' sx={{ width: '100%' }}>
          Visit
        </Button>
      </CardActions>
    </Card>
  );
}
