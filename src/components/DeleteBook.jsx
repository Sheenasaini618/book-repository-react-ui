import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { deleteBook } from '../util/api/bookApi';

export default function DeleteBook(props) {
  const [open, setOpen] = React.useState(false);
  const bookId = props.details

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteBook(bookId).then(res => {
      console.log(res)
      handleClose();
      window.location.reload(false);
    })
  };

  return (
    <div>
      <IconButton className = "icon" onClick={handleClickOpen}>
          <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure to delete the book?"}
        </DialogTitle>
        <DialogActions>
          <Button className ='closeButton' onClick={handleClose}>
            No
          </Button>
          <Button className ='deleteButton' onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
