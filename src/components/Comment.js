import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function Comment({ comment }) {
  return (
    <Card sx={{ maxWidth: 320, display: 'flex', marginBottom: 5 }} key={uuidv4()}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="14"
          image="https://upload.wikimedia.org/wikipedia/commons/b/bb/Anonymous.jpg"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {comment.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {comment.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
