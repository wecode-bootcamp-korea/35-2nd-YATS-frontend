import React from 'react';
import styled from 'styled-components';

const InputTypes = ({ className, input, handleInput, handleInputFile }) => {
  const inputList = {
    text: (
      <input
        onChange={handleInput}
        placeholder={input.placeholder}
        type={input.type}
        name={input.name}
      />
    ),
    textarea: (
      <textarea
        onChange={handleInput}
        placeholder={input.placeholder}
        type={input.type}
        name={input.name}
      />
    ),
    file: (
      <input
        type={input.type}
        accept="image/*"
        name={input.name}
        onChange={handleInputFile}
        multiple
      />
    ),
    time: (
      <>
        <span>체크인</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder}
          type={input.type}
          name={input.name1}
        />
        <span>체크아웃</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder}
          type={input.type}
          name={input.name2}
        />
      </>
    ),
    location: (
      <>
        <span>위도</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder1}
          type={input.type}
          name={input.name1}
        />
        <span>경도</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder2}
          type={input.type}
          name={input.name2}
        />
      </>
    ),
    capacity: (
      <>
        <span>기본인원</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder1}
          type={input.type}
          name={input.name1}
        />
        <span>최대인원</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder2}
          type={input.type}
          name={input.name2}
        />
      </>
    ),
    price: (
      <>
        <span>주중</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder1}
          type={input.type}
          name={input.name1}
        />
        <span>주말</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder2}
          type={input.type}
          name={input.name2}
        />
        <span>성수기</span>
        <input
          onChange={handleInput}
          placeholder={input.placeholder3}
          type={input.type}
          name={input.name3}
        />
      </>
    ),
  };

  return (
    <div className={className}>
      {!inputList[input.name] ? inputList[input.type] : inputList[input.name]}
    </div>
  );
};

const StyledInput = styled(InputTypes)`
  flex: 1;
  ${props => props.theme.variables.flex()}
  height: ${props => (props.input.type === 'textarea' ? '100px' : '50px')}} 

  ${props =>
    props.input.name === 'time' ||
    props.input.name === 'capacity' ||
    props.input.name === 'price' ||
    props.input.name === 'location'
      ? `
  justify-content: start;
  width: 100%;
  span {
    width: 20%;
    font-size: 11px;
    padding: 10px;
  }

  input {
    width: 30%;
    height: 80%;
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      padding-left: 2px;
      color: #bbbbbb;
    }
  `
      : ''}

  textarea {
    width: 100%;
    height: 80%;
    padding: 10px;
    line-height: 20px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    word-wrap: break-word;
        
    
    &:focus {
       outline: none;
     }

     &::placeholder {
       color: #bbbbbb; 
     }
   }
  
  input {
    width: 100%;
    height: 80%;
    padding: 10px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    word-wrap: break-word;
    

    &:focus {
      outline: none;
    }
    &::placeholder {
      padding-left: 5px;
      color: #bbbbbb;
    }
  }
`;

export default StyledInput;
