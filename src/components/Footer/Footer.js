import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <Container>
        <MenusContainer>
          <Menu>ABOUT</Menu>
          <Menu>4 POINT APPROACH</Menu>
          <Menu>NEWSLETTER</Menu>
          <Menu>CARRERS</Menu>
        </MenusContainer>
        <InfoContainner>
          <Title>고객센터</Title>
          <ButtonContainer>
            <Button>1:1문의</Button>
            <EnterStore
              onClick={() => {
                navigate('/EnterStore');
              }}
            >
              입점문의
            </EnterStore>
            <Button>제휴문의</Button>
          </ButtonContainer>
          <Time>운영시간: 10:00 ~ 18:00</Time>
          <Other>이용약관 개인정보 처리방침</Other>
        </InfoContainner>
        <LogoContainer>
          <Logo>OIL OF YATS</Logo>
        </LogoContainer>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  ${props => props.theme.variables.flex()}
  position: relative;
  transform: translateY(-100%);
  bottom: -20rem;
  width: 100%;
`;

const Container = styled.div`
  ${props => props.theme.variables.flex()}
  width: 80%;
  border-bottom: 1px solid #ccc;
`;

const MenusContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'start', 'start')}
  flex: 2;
`;

const Menu = styled.div`
  font-size: 14px;
  margin: 15px 0;
  color: #4d4d4d;
`;

const InfoContainner = styled.div`
  ${props => props.theme.variables.flex('column', 'start', 'start')}
  flex: 4;
  height: 200px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #4d4d4d;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
${props => props.theme.variables.flex()}

}
`;
const EnterStore = styled.button`
  background: #4d4d4d;
  color: #fff;
  margin-right: 8px;
  width: 64px;
  height: 32px;
  font-size: 12px;
  text-align: center;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #4d4d4d;
}
`;

const Button = styled.button`
  background: transparent;
  color: #4d4d4d;
  margin-right: 8px;
  width: 64px;
  height: 32px;
  font-size: 12px;
  text-align: center;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #4d4d4d;
}
`;

const Time = styled.div`
  margin-top: 22px;
  font-size: 14px;
  color: #4d4d4d;
`;

const Other = styled.div`
  margin-top: 22px;
  font-size: 14px;
  color: #4d4d4d;
`;

const LogoContainer = styled.div`
  ${props => props.theme.variables.flex()}
`;

const Logo = styled.div`
  flex: 1;
  width: 170px;
  height: 36px;
  font-weight: 700;
  font-size: 20px;
`;

export default Footer;
