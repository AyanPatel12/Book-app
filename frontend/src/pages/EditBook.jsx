
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, TextField, Button, CircularProgress } from '@mui/material';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then(res => {
        setTitle(res.data.data.title);
        setAuthor(res.data.data.author);
        setPublishYear(res.data.data.publishYear);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        alert('An error happened. Please check Console.');
        setLoading(false);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(res => {
        console.log(res);
        setLoading(false);
        // Optionally, you can navigate or perform other actions upon successful edit
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
      <Container maxWidth="sm" sx={{ mt: 4, p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" gutterBottom>
            Edit Book
          </Typography>
          <BackButton />
        </Box>
        {loading ? <Spinner /> : (
          <Box sx={{ mt: 2 }}>
            {error && <div className='text-red-500'>{error}</div>}
            <Box sx={{ display: 'flex', flexDirection: 'column', border: '2px solid #ccc', borderRadius: '8px', p: 4 }}>
              <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{ mb: 2,borderRadius: '5px' }}
              />
              <TextField
                label="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{ mb: 2 ,borderRadius: '5px' }}
              />
              <TextField
                label="Publish Year"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                fullWidth
                variant="outlined"
                sx={{ mb: 2  ,borderRadius: '5px'}}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleEditBook}
                sx={{ mt: 2, width: '100%' }}
              >
                Save                
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};

export default EditBook;
