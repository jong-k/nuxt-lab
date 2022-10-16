import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <AuthTemplate>
      <SignupForm />
    </AuthTemplate>
  );
};

export default SignupPage;
