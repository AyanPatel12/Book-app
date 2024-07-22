
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
import PropTypes from 'prop-types';
import './Navbar.css'; // Import custom styles

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: '#bf360c',
    },
  },
});

const Navbar = ({ genres = [], selectedGenre, setSelectedGenre }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" className="navbar-logo">
              Public Library
            </Link>
          </Typography>
          <Box className="navbar-links">
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
          </Box>
          <FormControl variant="outlined" size="small" sx={{ m: 1, minWidth: 120 }}>
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
          </FormControl>
         
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

Navbar.propTypes = {
  genres: PropTypes.array,
  selectedGenre: PropTypes.string.isRequired,
  setSelectedGenre: PropTypes.func.isRequired,
};

export default Navbar;
