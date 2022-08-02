import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const CheckboxList = props => {
  const { input, className, handleCheckbox } = props;

  return (
    <div className={className}>
      <div>
        {input.option.map(theme => {
          return (
            <Checkbox
              key={theme.id}
              input={input}
              theme={theme}
              handleCheckbox={handleCheckbox}
            />
          );
        })}
      </div>
    </div>
  );
};

const StyledCheckboxList = styled(CheckboxList)`
  ${props => props.theme.variables.flex()}
  flex: 1;
  flex-wrap: wrap;
  font-size: 13px;
  width: 100%;
  height: 100%;
  line-height: 24px;

  div {
    ${props => props.theme.variables.flex('', 'start')}
    flex-wrap: wrap;
    height: 100%;
    padding: 10px;

    label {
      margin-right: 15px;

      input {
        margin: 0 7px 0 0;
      }
    }
  }
`;

export default StyledCheckboxList;
