
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, Button, Box, CircularProgress } from '@mui/material';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton'; // Import BackButton component

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/user-home');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred. Please check the console.');
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 4, p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Delete Book
          </Typography>
          <BackButton />
        </Box>
        {loading ? <CircularProgress /> : ''}
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="h5">
            Are you sure you want to delete this book?
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteBook}
            sx={{ mt: 2, width: '100%' }}
          >
            Yes, delete it
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default DeleteBook;

