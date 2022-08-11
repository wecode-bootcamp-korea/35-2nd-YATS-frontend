import React from 'react';
import InputTypes from './InputTypes';
import Select from './Select';
import CheckboxList from './CheckboxList';
import styled from 'styled-components';

const InputList = ({ input, handleInput, handleCheckbox, handleInputFile }) => {
  const isInput = input.type;

  return (
    <InputContainer type={isInput}>
      <InputTitle>{input.title}</InputTitle>
      {isInput ? (
        isInput === 'checkbox' ? (
          <CheckboxList
            input={input}
            handleCheckbox={handleCheckbox}
            // isChecked={isChecked}
          />
        ) : (
          <InputTypes
            input={input}
            handleInput={handleInput}
            handleInputFile={handleInputFile}
          />
        )
      ) : (
        <Select input={input} handleInput={handleInput} />
      )}
    </InputContainer>
  );
};

export default InputList;

const InputContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'center')}
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e5e5e5;
`;

const InputTitle = styled.div`
  flex: 1;
  width: 100%;
  margin: 20px 0;
  font-size: 14px;
`;
