
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton'; // Import BackButton component

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      genre,
    };
    console.log("book genere",data.genre)
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(res => {
        console.log(res);
        setLoading(false);
        navigate('/user-home');
      })
      .catch(error => {
        console.error(error);
        setError('Failed to save book');
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4, p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4">
            Create Book
          </Typography>
          <BackButton />
        </Box>
        {loading && <Spinner />}
        {error && <Typography color="error">{error}</Typography>}
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
          />
          <TextField
            label="Publish Year"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
          />
          <TextField
            label="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: '#ffffff', borderRadius: '5px' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveBook}
            sx={{ mt: 2, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
          >
            Save
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default CreateBooks;

