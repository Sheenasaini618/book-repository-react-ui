import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { retrieveBooksBasisTitle } from '../util/api/bookApi';
import Book from './Book';
import BookCatalogueBasisTitle from './BookCatalogueBasisTitle';
import BookCatalogue from './BookCatalogue';

export default function SearchInventory() {

    const [searchBookInventory, setsearchBookInventory] = React.useState("");
    const [data, setData] = React.useState([]);

    //componentDidMount and componentDidUpdate

    const handleChange = (e) => {
        setsearchBookInventory(
            e.target.value);
        console.log(e.target.value)
    };

    let bookCatalogueComponent;
    if (searchBookInventory == "") {
        bookCatalogueComponent = <BookCatalogue />
    }
    else {
        bookCatalogueComponent = <BookCatalogueBasisTitle details={data} />
    }

    React.useEffect(() => {
        //Promise<Response>
        //Response
        retrieveBooksBasisTitle(searchBookInventory)
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            setData(result);
        });
      },[]);

    return (
        <>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                <InputBase 
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Inventory book"
                    inputProps={{ 'aria-label': 'Search Inventory book' }}
                    onChange={handleChange}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
            {bookCatalogueComponent}
        </>
    );
}
