import styled from 'styled-components';

export const PeopleBoxContainer = styled.div`
  cursor: default;
  position: absolute;
  top: 60px;
  left: -2px;
  z-index: 1;
  width: 249px;
  height: 279px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  background-color: white;
`;

export const PeopleBoxFirstComponent = styled.div`
  width: 100%;
  height: 50px;
  ${props => props.theme.variables.flex('center', 'space-between', 'center')}
  margin-top: 10px;
`;

export const PeopleBoxFirstLeftComponent = styled.p`
  font-size: 18px;
  margin-left: 20px;
`;

export const PeopleBoxFirstRightComponent = styled.img`
  width: 20px;
  margin-right: 20px;
`;

export const PeopleBoxSecondComponent = styled.div`
  width: 100%;
  height: 90px;
  ${props => props.theme.variables.flex('column', 'center', 'center')}
`;

export const SecondComponentAdult = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('center', 'space-between', 'center')}
`;

export const SecondComponentChild = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('center', 'space-between', 'center')}
`;

export const Button = styled.button`
  color: white;
  background-color: black;
  width: 138.95px;
  height: 36px;
  font-size: 14px;
  padding: 0px 20px 0px 25px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
`;
