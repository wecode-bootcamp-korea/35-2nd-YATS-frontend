import React from 'react';
import styled from 'styled-components';

const Region = ({ location, className }) => {
  return (
    <div className={className}>
      <div>{location.title}</div>
    </div>
  );
};

const styledRegion = styled(Region)`
div {
  ${props => props.theme.variables.flex('', 'flex-start')}
  width: 95px;
  padding-right: 10px;
  height: 50px;

  ${props =>
    props.location.title
      ? `  &:hover {
    cursor: pointer;
  }`
      : ''}

}
}
`;
export default styledRegion;
