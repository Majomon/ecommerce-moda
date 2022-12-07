import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

function Item({ product }) {

  return (
    <div style={{
      padding: "2rem"
    }}>
      <Card sx={{ maxWidth: 250 }} >
        <RouterLink to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            alt={product.alt}
            height="300"
            image={product.pictureUrl}
          />
        </RouterLink>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign={'center'}>
            $ {product.price}
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign={'center'}>
            {product.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button component={RouterLink} to={`/product/${product.id}`}
            style={{ fontSize: '1rem' }} variant="text">Ver mas</Button>
        </CardActions>
      </Card>
    </div>

  )
}

export default Item