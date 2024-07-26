import React, { useState } from 'react';
import { Routes, Route, useNavigate  } from 'react-router-dom';
import UserHome from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateBook from './pages/CreateBooks';
import ShowBooks from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import RegistrationForm from './pages/RegistrationForm';
import Login from './pages/login';
// import ProtectedRoute from './components/ProtectedRoute';
import Home1 from './pages/Home1';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <Routes>
      <Route path='/' element={<Home1 onLogout={handleLogout} />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBooks />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/user-home" element={<UserHome isAuthenticated={isAuthenticated} onLogout={handleLogout} />} />
      {/* Uncomment and use the ProtectedRoute component if needed */}
      {/* <Route path="/protected" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home1 onLogout={handleLogout} /></ProtectedRoute>} /> */}
    </Routes>
  );
}

export default App;
