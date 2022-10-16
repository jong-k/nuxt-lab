import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import TodoPage from './pages/TodoPage';

const App = () => {
  const navigate = useNavigate();
  localStorage.getItem('token') ? navigate('/todo') : navigate('/');

  return (
    <Routes>
      <Route element={<LoginPage />} path="/" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<TodoPage />} path="/todo" />
    </Routes>
  );
};

export default App;
