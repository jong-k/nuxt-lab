import React, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Protected from './components/Protected';
import Register from './components/Register';
import Content from './components/Content';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const logOutCallback = async () => {
    await fetch('http://localhost:4000/logout', {
      method: 'POST',
      credentials: 'include',
    });
    // context에서 user 비움
    setUser({});
    // 첫 페이지로 navigate
    navigate('/');
  };

  // refresh token이 있다면, 새로운 access token을 발급받는다
  useEffect(() => {
    const checkRefreshToken = async () => {
      const result = await (
        await fetch('http://localhost:4000/refresh_token', {
          method: 'POST',
          credentials: 'include', // cookie를 포함하려면 include
          headers: {
            'Content-Type': 'application/json',
          },
        })
      ).json();
      setUser({
        accessToken: result.accessToken,
      });
      setLoading(false);
    };
    checkRefreshToken();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
