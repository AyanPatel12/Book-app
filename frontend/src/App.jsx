import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserHome from './pages/Home';
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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Routes>
      <Route path='/' element={<Home1 onLogout={handleLogout} />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBooks />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/user-home" element={<UserHome />} />
      {/* Uncomment and use the ProtectedRoute component if needed */}
      {/* <Route path="/protected" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Home1 onLogout={handleLogout} /></ProtectedRoute>} /> */}
    </Routes>
  );
}

export default App;
