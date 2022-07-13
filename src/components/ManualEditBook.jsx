import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { editBook } from '../util/api/bookApi';
import { CardMedia } from '@mui/material';

export default function ManualEditBook(props) {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    id: props.details.id,
    title: props.details.title,
    thumbnail: props.details.imageLinks.thumbnail,
    authors: props.details.authors[0],
    description: props.details.description,
    price: props.details.price,
    quantity: props.details.quantity
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditBook = () => {
    editBook(formData).then((res) => {
      console.log(res.json);
      handleClose();
      window.history.go("http://localhost:3000");
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  };

  return (
    <center>
      <div style={{ margin: "10px" }}>
        <IconButton onClick={handleClickOpen}>
          <EditIcon />
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Book</DialogTitle>
          <DialogContent>
          <CardMedia
              component="img"
              sx={{ width: 151 }}
              height="194"
              image={props.details.imageLinks.thumbnail}
              alt="Paella dish"
            />
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              fullWidth
              variant="standard"
              value={formData.title}
              // onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="thumbnail"
              label="Thumbnail Link"
              fullWidth
              variant="standard"
              value={formData.thumbnail}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="authors"
              label="Authors"
              fullWidth
              variant="standard"
              value={formData.authors}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="price"
              label="Price"
              type="number"
              fullWidth
              variant="standard"
              value={formData.price}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              label="Quantity"
              fullWidth
              type="number"
              variant="standard"
              value={formData.quantity}
              onChange={handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              variant="standard"
              value={formData.description}
              // onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleEditBook}>Save changes</Button>
          </DialogActions>
        </Dialog>
      </div>
    </center>
  );
}