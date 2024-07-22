
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import './Home.css'; // Import custom styles

function Home() {
  return (
    <>
      <Navbar />
      <Box className="home-background">
        <Container maxWidth="md" className="container-background">
          <Box className="main-image-section">
            {/* <img src={bookImage} alt="Bookstore" className="main-image" /> */}
          </Box>
          <Box className="content-box">
            <Typography variant="h4" align="center" gutterBottom>
              Welcome to Our Bookstore
            </Typography>
            <div className="home-content-inner">
              <Typography variant="body1">
                Explore our vast collection of books that cater to every interest and genre. From classics to contemporary bestsellers, we have something for everyone.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Dive into the world of literature with us and find your next great read. Whether you're a book enthusiast or a casual reader, our bookstore is your gateway to endless stories and knowledge.
              </Typography>
            </div>
          </Box>
          <Box className="feature-icons">
            <div className="feature-icon">
              <i className="fas fa-book"></i>
              <Typography variant="h6">Feature 1</Typography>
            </div>
            <div className="feature-icon">
              <i className="fas fa-user-friends"></i>
              <Typography variant="h6">Feature 2</Typography>
            </div>
            <div className="feature-icon">
              <i className="fas fa-cogs"></i>
              <Typography variant="h6">Feature 3</Typography>
            </div>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
