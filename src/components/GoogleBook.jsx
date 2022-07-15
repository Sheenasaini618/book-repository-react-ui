import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddGoogleBook from './AddGoogleBook';


export default function GoogleBook(props) {

  var book = props.details
  
  console.log(book)
  return (
    <Card >
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {book.volumeInfo.title.charAt(0).toUpperCase()}
          </Avatar>
        }
        title= {book.volumeInfo.title}
        subheader= {book.volumeInfo.authors}
      />
       <CardMedia
        component="img"
        sx={{ width: 151 }}
        height="194"
        image= {book.volumeInfo.imageLinks.smallThumbnail}
        alt="Paella dish"
      /> 
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary" align='justify' style={{height : 70}}>
        {book.volumeInfo.description}
        </Typography> */}
        <Typography variant="h6" color="text.secondary" align='justify' style={{fontWeight : 600}}>
        </Typography>
        <Typography variant="h6" color="text.secondary" align='justify' style={{fontWeight : 600}}>
        Copies Available: {book.volumeInfo.quantity}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <AddGoogleBook details={book} />
      </CardActions>
    </Card>
  );
}
