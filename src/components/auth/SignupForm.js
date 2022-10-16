import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import axios from 'axios';

const SignupFormBlock = styled.div`
  h3 {
    margin: 0;
    color: grey;
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: solid 1px lightgrey;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: teal;
    border-bottom: solid 1px grey;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: lightgrey;
    text-decoration: underline;
    &:hover {
      color: grey;
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const SignupForm = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    pwConfirm: '',
  });

  const { email, password, pwConfirm } = inputValue;
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const checkValid = () => {
    if (email.includes('@') && password.length >= 8 && password === pwConfirm)
      return true;
  };

  const navigate = useNavigate();

  const handlePost = async (data) => {
    axios
      .post('https://pre-onboarding-selection-task.shop/auth/signup', data)
      .then((res) => {
        console.log(res, '성공');
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    handlePost(data);
  };

  return (
    <SignupFormBlock>
      <h3>회원가입</h3>
      <form action="">
        <StyledInput
          autoComplete="email"
          name="email"
          placeholder="이메일"
          type="email"
          onChange={handleInput}
          onKeyUp={checkValid}
        />
        <StyledInput
          autoComplete="password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={handleInput}
          onKeyUp={checkValid}
        />
        <StyledInput
          autoComplete="pwConfirm"
          name="pwConfirm"
          placeholder="비밀번호 확인"
          type="password"
          onChange={handleInput}
          onKeyUp={checkValid}
        />
        <ButtonWithMarginTop
          cyan={checkValid()}
          fullWidth
          type="submit"
          disabled={!checkValid()}
          onClick={handleSubmit}
        >
          계정 생성
        </ButtonWithMarginTop>
      </form>
      <Footer>
        <Link to="/">로그인</Link>
      </Footer>
    </SignupFormBlock>
  );
};

export default SignupForm;
