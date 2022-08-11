import React, { useState } from 'react';
import styled from 'styled-components';

const Location = ({ region, isClickedTotal }) => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleRegion = () => {
    isClickedTotal ? 
    setIsClicked(!isClicked);
  };

  return (
    <RegionContainer>
      <Region region={region}>{region.title}</Region>
    </RegionContainer>
  );
};

const RegionContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start')}
`;

const Region = styled.div`
  width: 95px;
  padding-right: 10px;
  height: 50px;

  ${props =>
    props.region.title
      ? `  &:hover {
    cursor: pointer;
  }`
      : ''}

}
}
`;
export default Location;
