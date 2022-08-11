import React from 'react';
import styled from 'styled-components';

const Feature = ({ className, option }) => {
  return (
    <div className={className}>
      {option.icon && <i className={option.icon.split('"')[1]} />}
      <span>{option.name}</span>
    </div>
  );
};

const StyledFeature = styled(Feature)`
  ${props =>
    props.option.icon
      ? `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
padding-bottom: 3px;
width: 150px;

i {
  justify-content: center;
  align-items: center;    
  width: 50px;
  height: 33px;
  display: block;
  margin: 20px 10px 0 0;
    display: flex;
  opacity: 0.7;
}

span {
  justify-content: center;
  align-items: center;   
  font-size: 13px; 
  color: #777;
  margin: 20px 10px 0 0;
  width: auto;
  height: 60px;
  display: flex;
  padding: 0;
}
`
      : `
flex-wrap: wrap;
padding-bottom: 3px;
width: 150px;

span {
  display: flex;
  justify-content: center;
  align-items: center;    
  font-size: 13px;
  color: #777;

  width: auto;
  height: 60px;
  padding: 0;
}
      `}
`;

export default StyledFeature;
