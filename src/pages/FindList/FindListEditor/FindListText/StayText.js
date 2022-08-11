import React from 'react';
import styled from 'styled-components';

const StayText = ({ handleMenu, stayText }) => {
  return (
    <StayTextStyle onClick={e => handleMenu(e, '스테이 유형')}>
      {stayText}
    </StayTextStyle>
  );
};
export default StayText;

const StayTextStyle = styled.p``;
