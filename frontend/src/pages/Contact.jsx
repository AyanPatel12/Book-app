import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import Navbar from '../components/Navbar';
import './Contact.css'; // Import the CSS file for custom styling

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [query, setQuery] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:5555/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, phone, message, query }),
        });

        const data = await response.json();
        if (response.ok) {
            console.log('Message sent successfully:', data);
            // Optionally, reset form or show success message
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setQuery('');
        } else {
            console.error('Error sending message:', data);
        }
    };

    return (
        <div className="contact-background">
            <Navbar />
            <Container maxWidth="md" className="contact-container">
                <Box className="contact-content" sx={{ mt: 4, p: 3 }}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" paragraph>
                        We'd love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out to us using the form below.
                    </Typography>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            fullWidth
                            margin="normal"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            sx={{ backgroundColor: '#f7f7f7', borderRadius: '5px' }}
                        />
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ backgroundColor: '#f7f7f7', borderRadius: '5px' }}
                        />
                        <TextField
                            label="Phone Number"
                            type="tel"
                            fullWidth
                            margin="normal"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            sx={{ backgroundColor: '#f7f7f7', borderRadius: '5px' }}
                        />
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel>Query Type</InputLabel>
                            <Select
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                sx={{ backgroundColor: '#f7f7f7', borderRadius: '5px' }}
                            >
                                <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                                <MenuItem value="Support">Support</MenuItem>
                                <MenuItem value="Feedback">Feedback</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Message"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            sx={{ backgroundColor: '#f7f7f7', borderRadius: '5px' }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="contact-button"
                        >
                            Send Message
                        </Button>
                    </form>
                </Box>
            </Container>
        </div>
    );
};

export default Contact;
