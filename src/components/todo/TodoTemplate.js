import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;

const AppTitle = styled.div`
  background: thistle;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Content = styled.div`
  background: beige;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateBlock>
      <AppTitle>To-do List</AppTitle>
      <Content>{children}</Content>
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;
