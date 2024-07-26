import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import './About.css'; // Import the CSS file for custom styling

const About = () => {
  return (
    <div className="about-background">
      <Navbar />
      <Container maxWidth="md" className="about-container">
        <Box className="about-content" sx={{ mt: 4, p: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            About Our Bookstore
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our bookstore! We are passionate about books and believe in the power of reading to transform lives. Our mission is to provide a wide range of books, from the latest bestsellers to timeless classics, catering to all age groups and interests.
          </Typography>
          <Typography variant="body1" paragraph>
            At our bookstore, we value the joy of reading and aim to create a welcoming environment for all book lovers. Whether you're looking for fiction, non-fiction, academic texts, or children's books, we have something for everyone. Our knowledgeable staff is always here to help you find your next great read.
          </Typography>
          <Typography variant="body1" paragraph>
            We also believe in supporting our local community. We host regular events, such as author signings, book readings, and book clubs, to foster a love of reading and create a vibrant literary community.
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for visiting our bookstore. We hope you enjoy exploring our collection and discovering new stories to cherish.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default About;
