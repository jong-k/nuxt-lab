import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Protected from './components/Protected';
import Register from './components/Register';
import Content from './components/Content';

export const UserContext = React.createContext([]);

const App = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const logOutCallback = async () => {};

  useEffect(() => {}, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="app">
        <Navigation logOutCallback={logOutCallback} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/protected" element={<Protected />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
