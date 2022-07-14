import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { addGoogleBook } from '../util/api/bookApi';

export default function AddGoogleBook(props) {

  var bookData = props.details

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGoogleBookAdd = () => {
    addGoogleBook(bookData).then((res) => {
      console.log(res);
      handleClose();
      window.history.go("http://localhost:3000/add");
    });
  };

  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="small" color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Are you sure you want to add the book?"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>
              No
            </Button>
            <Button onClick={handleGoogleBookAdd} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}