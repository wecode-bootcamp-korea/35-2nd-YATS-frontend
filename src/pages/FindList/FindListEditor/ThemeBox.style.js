import styled from 'styled-components';

export const ThemeBoxContainer = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')}
  cursor: default;
  position: absolute;
  top: 60px;
  left: -2px;
  z-index: 1;
  width: 400px;
  height: 279px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  background-color: white;
`;

export const ChoiceContainerAllWrapper = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
`;
