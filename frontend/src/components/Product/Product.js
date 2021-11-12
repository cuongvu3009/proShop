import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';

import Rating from '../Rating/Rating';

export default function Product({ product }) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center' }}>
      <CssBaseline />
      <Link href={`/product/${product._id}`}>
        <CardMedia
          component='img'
          height='100%'
          src={product.image}
          alt={product.name}
        />
      </Link>

      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {product.name}
        </Typography>

        <Typography>
          <Rating rating={product.rating} />
        </Typography>

        <Typography>€{product.price}</Typography>
      </CardContent>
    </Card>
  );
}
