import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdOutlineEdit,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListItemBlock = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckboxBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex: 1;
  svg {
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  align-items: center;
`;

const EditBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  right: 60px;
`;

const RemoveBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  const [value, setValue] = useState(text);
  const onEdit = () => {
    const newText = prompt('수정할 내용을 입력하세요', text);
    if (newText) setValue(newText);
  };

  return (
    <TodoListItemBlock>
      <CheckboxBlock className={cn({ checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{value}</div>
        <div className="edit"></div>
      </CheckboxBlock>
      <ButtonBlock>
        <EditBlock onClick={onEdit}>
          <MdOutlineEdit />
        </EditBlock>
        <RemoveBlock onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </RemoveBlock>
      </ButtonBlock>
    </TodoListItemBlock>
  );
};

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);
