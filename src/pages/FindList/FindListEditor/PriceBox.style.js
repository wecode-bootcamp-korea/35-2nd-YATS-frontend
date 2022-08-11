import styled from 'styled-components';

export const PriceBoxContainer = styled.div`
  cursor: default;
  position: absolute;
  top: 60px;
  left: -2px;
  z-index: 1;
  width: 319.56px;
  height: 289px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  background-color: white;
`;

export const PriceDetailContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-around', 'center')}
  width: 100%;
  margin-bottom: 30px;
`;

export const HighNRowPrice = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  width: 100px;
  height: 40px;
  border: 1px solid #e4e4e4;
`;

export const HighNRowPriceText = styled.div`
  font-size: 20px;
`;
