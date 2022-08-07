import { style } from '@mui/system';
import styled from 'styled-components';

export const FindListModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const FindListModalcontainer = styled.div`
  ${props => props.theme.variables.flex('column', 'none', 'none')}
  position: absolute;
  top: calc(50vh - 300px);
  left: calc(50vw - 560px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 1100px;
  height: 483px;
  z-index: 2;
`;

export const ModalFirstComponent = styled.div`
  width: 85%;
  height: 50px;
  ${props => props.theme.variables.flex('none', 'space-between', 'center')}
  border-bottom: 2px solid #e4e4e4;
  padding-bottom: 70px;
`;

export const ModalFirstLeftComponent = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

export const ModalFirstRightComponent = styled.img`
  width: 40px;
  margin-right: 20px;
  cursor: pointer;
`;

export const ModalSecondComponent = styled.div`
  ${props => props.theme.variables.flex('none', 'space-between', 'center')}
  width: 85%;
  height: 100px;
`;

export const ModalSecondTextComponent = styled.h5`
  font-size: 25px;
  font-weight: 600;
  width: 50%;
`;

export const ModalThirdComponent = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-start')}
  width: 85%;
`;

export const ModalThirdComponentLeftRight = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-start')}
  flex-wrap: wrap;
  width: 50%;
`;

export const ModalThirdComponentDetail = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'flex-start')}
  width: 100px;
  height: 30px;
  cursor: pointer;
`;
