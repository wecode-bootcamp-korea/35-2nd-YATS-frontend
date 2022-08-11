import styled from 'styled-components';

export const PeopleBoxContainer = styled.div`
  cursor: default;
  position: absolute;
  top: 60px;
  left: -2px;
  z-index: 1;
  width: 249px;
  height: 230px;
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
  height: 45px;
  ${props => props.theme.variables.flex('center', 'space-between', 'center')}
`;

export const Adult = styled.p`
  margin-left: 20px;
  font-size: 15px;
`;

export const AdultPeople = styled.div`
  width: 120px;
  height: 30px;
  margin-right: 20px;
  ${props => props.theme.variables.flex()}
  font-size: 15px;
  position: relative;
  border: 1px solid #e4e4e4;
`;
export const AdultOnIncrease = styled.div`
  position: absolute;
  right: 0px;
  height: 30px;
  width: 32px;
  border: none;
  font-size: 20px;
  border: 1px solid #e4e4e4;
  text-align: center;
  background-color: #e4e4e4;
`;
// 버튼

export const AdultOnDecrease = styled.div`
  position: absolute;
  left: 0px;
  height: 30px;
  width: 32px;
  border: none;
  font-size: 20px;
  border: 1px solid #e4e4e4;
  text-align: center;
  background-color: #e4e4e4;
`;
// 버튼

export const SecondComponentChild = styled.div`
  width: 100%;
  height: 45px;
  ${props => props.theme.variables.flex('center', 'space-between', 'center')}
`;

export const Child = styled.p`
  margin-left: 20px;
  font-size: 15px;
`;

export const ChildPeople = styled.div`
  width: 120px;
  height: 30px;
  margin-right: 20px;
  ${props => props.theme.variables.flex()}
  font-size: 15px;
  position: relative;
  border: 1px solid #e4e4e4;
`;

export const PeopleBoxThirdComponent = styled.div`
  margin-top: 15px;
  width: 100%;
  ${props => props.theme.variables.flex('center', 'center', 'center')}
`;

export const Button = styled.div`
  color: white;
  background-color: black;
  width: 138.95px;
  height: 36px;
  font-size: 14px;
  padding: 0px 20px 0px 25px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
  text-align: center;
  padding-top: 8px;
`;
// 버튼
