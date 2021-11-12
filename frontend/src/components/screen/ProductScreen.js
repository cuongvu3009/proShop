import React from 'react';
import { useParams } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '../Rating/Rating';
import products from '../../products';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginTop: 60,
}));

const ProductScreen = () => {
  let { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth='lg'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
                <CardMedia
                  component='img'
                  src={product.image}
                  alt={product.name}
                />
              </Item>
            </Grid>
            <Grid item xs={5}>
              <Item>
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    {product.name}
                  </Typography>

                  <Rating rating={product.rating} />
                  <Typography>
                    {product.rating} of {product.numReviews} reviews
                  </Typography>

                  <Typography variant='h4'>
                    <strong>€{product.price}</strong>
                  </Typography>

                  <Typography>{product.description}</Typography>
                </CardContent>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item>
                <CardContent>
                  <Typography>Available: {product.countInStock}</Typography>
                  <CardActions>
                    <Button size='small' variant='contained'>
                      Add To cart
                    </Button>
                  </CardActions>
                </CardContent>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ProductScreen;
