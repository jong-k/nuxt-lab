import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Content = () => {
  const [user] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.accessToken) navigate('/login');
  }, []);

  return <div>This is the content.</div>;
};

export default Content;
