import styled from 'styled-components';

export const StayBoxContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'none')}
  cursor: default;
  position: absolute;
  top: 60px;
  left: -2px;
  z-index: 1;
  width: 229px;
  height: 450px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  background-color: white;
`;

export const ChoiceContainerWrapper = styled.div`
  width: 200px;
  margin-top: 20px;
`;

export const ChoiceContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center')}
  width: 200px;
  height: 30px;
  flex-wrap: nowrap;
  position: relative;
`;

export const ChoiceContainerText = styled.p``;

export const ChoiceContainerCheckBox = styled.input`
  position: absolute;
  right: 20px;
`;
