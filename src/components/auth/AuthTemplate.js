import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 회원가입/로그인 페이지의 레이아웃 담당하는 컴포넌트

/* 기본 백그라운드 화면 */
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 로그인 박스 */
const LoginBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <LoginBox>
        <div className="logo-area">
          <Link to="/" style={{ textDecoration: 'none' }}>
            To-Do List
          </Link>
        </div>
        {children}
      </LoginBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
