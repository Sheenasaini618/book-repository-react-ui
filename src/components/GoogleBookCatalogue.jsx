import Book from "./Book";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import data1 from '../mockData/allGoogleBooks.json';
import GoogleBook from "./GoogleBook";

export default function GoogleBookCatalogue() {

  return (
    <Box sx={{ flexGrow: 2 }} style={{margin : "25px"}}>
      <Grid container spacing={0}>
        {
            data1.map(book => {
                return (
                    <Grid item lg={3}>
                        <GoogleBook details={book}/>
                    </Grid>
                )
            })
        }
      </Grid>
    </Box>
  );
}
