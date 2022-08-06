import React from 'react';
import styled from 'styled-components';

const Select = ({ className, input, handleInput }) => {
  return (
    <div className={className} input={input}>
      <select onChange={handleInput} name={input.name}>
        {input.option.map(house => {
          return <option key={house.id}>{house.type}</option>;
        })}
      </select>
    </div>
  );
};

const StyledSelect = styled(Select)`
  ${props => props.theme.variables.flex()}
  flex: 1;
  height: 100%;

  select {
    width: 100%;
    height: 50%;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
  }
`;

export default StyledSelect;
