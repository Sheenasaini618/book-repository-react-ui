import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { retrieveBooksBasisTitle } from '../util/api/bookApi';
import BookCatalogue from './BookCatalogue';

export default function SearchInventory() {

    const [searchBookInventory, setsearchBookInventory] = React.useState("");
    const [data, setData] = React.useState([]);

    const handleChange = (e) => {
        setsearchBookInventory(
            e.target.value);
        console.log(e.target.value)
    };

    //componentDidMount and componentDidUpdate

    React.useEffect(() => {
        //Promise<Response>
        //Response
        console.log(searchBookInventory)
        retrieveBooksBasisTitle(searchBookInventory)
            .then((res) => {
                return res.json();
            })
            .then((result) => {
                setData(result);
            });
    }, [searchBookInventory]);

    return (
        <>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                <InputBase className='placeholder'
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Inventory book by title or author"
                    onChange={handleChange}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
            <BookCatalogue details={data} />
        </>
    );
}
