import React from 'react';
import styled from 'styled-components';

const PriceText = ({ handleMenu, allPrice }) => {
  return (
    <PriceTextStyle onClick={e => handleMenu(e, '가격 범위')}>
      {allPrice}
    </PriceTextStyle>
  );
};
export default PriceText;

const PriceTextStyle = styled.p``;
