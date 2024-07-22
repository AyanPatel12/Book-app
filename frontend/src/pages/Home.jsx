
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const UserHome = ({}) => {
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books')
            .then(res => {
                setBooks(res.data.data);
             
                setGenres(["novel","scifi", "thriller","horror","motivational"]);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError('Failed to fetch books');
                setLoading(false);
            });
    }, []);

    const filteredBooks = selectedGenre === 'all' 
    ? books 
    : books.filter(book => book.genre === selectedGenre);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <div className="p-4 text-red-500">{error}</div>;
    }

    return (
        <>
            <Navbar genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
            <Container maxWidth="lg" sx={{ mt: 2, backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', height: '85vh' }}>
                <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setShowType('card')}
                        sx={{ mr: 2, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
                    >
                        Card
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setShowType('table')}
                        sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
                    >
                        Table
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <Typography variant="h4">Books List</Typography>
                    <Link to='/books/create'>
                        <IconButton color="primary">
                            <MdOutlineAddBox fontSize="large" />
                        </IconButton>
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {/* <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                        <InputLabel>Genre</InputLabel>
                        <Select
                            value={selectedGenre}
                            onChange={(e) => setSelectedGenre(e.target.value)}
                            label="Genre"
                        >
                            <MenuItem value=""><em>All</em></MenuItem>
                            {genres.map((genre) => (
                                <MenuItem key={genre} value={genre}>{genre}</MenuItem>
                            ))}
                        </Select>
                    </FormControl> */}
                </Box>
                
                {showType === 'table' ? (
                    <BooksTable books={books} selectedGenre={selectedGenre} />
                    
                ) : (
                    <BooksCard books={books} selectedGenre={selectedGenre} />
                )}
            </Container>
        </>
    );
};

export default UserHome;

