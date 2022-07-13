import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { addBook } from "../util/api/bookApi";

export default function ManualAddBook() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    thumbnail: "",
    authors: "",
    description: "",
    price: "",
    quantity: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddBook = () => {
    addBook(formData).then((res) => {
      console.log(res);
      handleClose();
      window.history.go("http://localhost:3000");
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <center>
      <div style={{ margin: "10px" }}>
        <Button onClick={handleClickOpen} variant="contained" color="info">
          Add Book using Form
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle> Add Book using Form</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              fullWidth
              variant="standard"
              value={formData.title}
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddBook}>Add Book</Button>
          </DialogActions>
        </Dialog>
      </div>
    </center>
  );
}
