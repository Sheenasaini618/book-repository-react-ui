import Book from "../components/Book";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { retrieveAllBooks } from "../util/api/bookApi";
// import data from '../mockData/allBooks.json';

export default function BookCatalogue() {
  const [data, setData] = React.useState([]);

  //componentDidMount and componentDidUpdate
  React.useEffect(() => {
    //Promise<Response>
    //Response
    retrieveAllBooks()
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result);
      });
  },[]);

  return (
    <Box sx={{ flexGrow: 2 }} style={{ margin: "25px" }}>
      <Grid container spacing={0}>
        {data.map((book) => {
          return (
            <Grid item lg={3}>
              <Book details={book} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
