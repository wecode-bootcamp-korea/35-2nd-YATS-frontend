import styled from 'styled-components';

const Container = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 800px;
`;

const Title = styled.div`
  font-size: 18px;
  letter-spacing: 14px;
  font-family: Lato-Bold;
  font-weight: 750;
  color: #000;
  padding-top: ${props => (props.primary === 'RoomModal' ? '20px' : '80px')};
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: #000;
  line-height: 27px;
  margin-top: 10px;
  margin-bottom: ${props => (props.primary === 'RoomModal' ? '0px' : '50px')}; ;
`;

const Contents = styled.div`
  font-size: 15px;
  color: #000;
  line-height: 27px;
  padding-top: 20px;
`;

const Form = styled.form`
  ${props => props.theme.variables.flex('column', 'flex-start')}
  margin-top: 80px;
  width: ${props => (props.primary === 'RoomModal' ? '80%' : '100%')};
  height: auto;
  border-top: solid 4px black;
`;

const EnterButton = styled.button`
  margin: ${props => (props.primary === 'RoomModal' ? '50px' : '80px')};
  width: 400px;
  height: 50px;
  border: 1px solid #000;
  background: #000;
  color: white;
  font-size: 16px;
`;

export { Container, Title, SubTitle, Contents, Form, EnterButton };
