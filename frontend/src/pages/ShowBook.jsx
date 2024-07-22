
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        // Handle error properly, perhaps set an error state
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" sx={{ mt: 4, p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" gutterBottom>
            Show Book
          </Typography>
          <BackButton />
        </Box>
        <Box sx={{ mt: 2 }}>
          {loading ? (
            <Spinner />
          ) : (
            <div className='flex-flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
              <div className='my-4'>
                <Typography variant="subtitle1" sx={{ mr: 2, color: 'text.secondary' }}>
                  Id:
                </Typography>
                <Typography variant="body1">{book._id}</Typography>
              </div>
              <div className='my-4'>
                <Typography variant="subtitle1" sx={{ mr: 2, color: 'text.secondary' }}>
                  Title:
                </Typography>
                <Typography variant="body1">{book.title}</Typography>
              </div>
              <div className='my-4'>
                <Typography variant="subtitle1" sx={{ mr: 2, color: 'text.secondary' }}>
                  Author:
                </Typography>
                <Typography variant="body1">{book.author}</Typography>
              </div>
              <div className='my-4'>
                <Typography variant="subtitle1" sx={{ mr: 2, color: 'text.secondary' }}>
                  Publish Year:
                </Typography>
                <Typography variant="body1">{book.publishYear}</Typography>
              </div>
              <div className='my-4'>
                <Typography variant="subtitle1" sx={{ mr: 2, color: 'text.secondary' }}>
                  Genre:
                </Typography>
                <Typography variant="body1">{book.genre}</Typography>
              </div>
              <div className='my-4'>
                <Typography variant="subtitle1" sx={{ mr: 2, color: 'text.secondary' }}>
                  Created at:
                </Typography>
                <Typography variant="body1">{new Date(book.createdAt).toString()}</Typography>
              </div>
              <div className='my-4'>
                <Typography variant="subtitle1" sx={{ mr: 2, color: 'text.secondary' }}>
                  Updated at:
                </Typography>
                <Typography variant="body1">{new Date(book.updatedAt).toString()}</Typography>
              </div>
            </div>
          )}
        </Box>
      </Container>
    </>
  );
};

export default ShowBook;

