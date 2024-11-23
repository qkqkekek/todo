import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import S from './style';
import useInput from '../../hooks/useInput';

const Todo = ({todo}) => {

  const { id, title, content, userId, isChecked } = todo;
  const [ value, onChange, setValue ] = useInput(title);
  const [ isEdit, setIsEdit ] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit)
  }

  // 투두 삭제d

  return (
    <S.Li>
      <S.Wrapper>
        <input type="checkbox" />
          { isEdit ? (
            <input className='update-input' value={value} onChange={onChange} />
          ) : (
            <S.Title>
              {title}
            </S.Title>
          )}
      </S.Wrapper>
      <S.Wrapper>
        { isEdit ? (
          <>
            <S.Button><FontAwesomeIcon icon={faCheck} className='check' /></S.Button>
            <S.Button onClick={handleIsEdit}><FontAwesomeIcon icon={faX} className='exit' /></S.Button>
          </>
        ) : (
          <S.Button onClick={handleIsEdit}><FontAwesomeIcon icon={faPen} className='pen' /></S.Button>
        )}
        <S.Button><FontAwesomeIcon icon={faTrash} className='trash' /></S.Button>
      </S.Wrapper>
    </S.Li>
  );
};

export default Todo;