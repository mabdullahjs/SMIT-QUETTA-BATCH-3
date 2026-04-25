import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItem } from '../config/redux-toolkit/reducers/cartSlice';


export default function MediaCard({ image, title, description, id }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const addItemToCart = ()=>{
    dispatch(addItem({
      product: {
        title , description, id
      }
    }))
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate(`/product/${id}`)} variant="contained" size="small">Show More</Button>
        <Button onClick={addItemToCart} variant="contained" size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
}
