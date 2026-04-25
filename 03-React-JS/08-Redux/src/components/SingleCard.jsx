import { Container, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../config/redux-toolkit/reducers/cartSlice';

export default function SingleProductCard({title , description , image , id}) {


  const dispatch = useDispatch()
  const addItemToCart = ()=>{
      dispatch(addItem({
        product: {
          title , description, id
        }
      }))
    }

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Card elevation={4} sx={{ borderRadius: 3 }}>
        <CardMedia
          component="img"
          height="320"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Button onClick={addItemToCart} variant="contained" size="small">Add to cart</Button>
      </Card>
    </Container>
  );
}
