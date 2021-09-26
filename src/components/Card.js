import { Link, NavLink } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OutlinedCard({ posts }) {
  return (
    posts &&
    posts.map(post => (
      <Box
        sx={{ width: 475, height: 250, marginBottom: 5, marginRight: 15 }}
        key={post.id}
      >
        <Card variant="outlined" key={post.id}>
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 24 }} color="black" gutterBottom>
                Title: {post && post.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    mx: '2px',
                    transform: 'scale(0.8)',
                  }}
                >
                  {post && post.body}
                </Box>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="medium">
                <NavLink
                  style={{ color: 'black', textDecoration: 'none' }}
                  to={`/comments/${post.id}`}
                >
                  Full version
                </NavLink>
              </Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    ))
  );
}
