import React from 'react';
import styled from 'styled-components';
import kakao_login_medium_wide from '../../images/Login/kakao_login_medium_wide.png';

const Login = () => {
  const REST_API_KEY = '36a89eae63fc360c388f74be5982f8f6';
  const REDIRECT_URI = 'http://localhost:3000/loginOauth';
  const KAKAO_AUTH = `https://kauth.kakao.com/oauth/authorize/?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <LoginPageWrapper>
      <LoginBox>
        <TitleBox>
          <Title1>LOGIN</Title1>
          <Title2>로그인</Title2>
        </TitleBox>
        <Form>
          <InputId placeholder="이메일 아이디" />
          <InputPw placeholder="비밀번호" />
        </Form>
        <LoginButton>LOGIN</LoginButton>
        <SignUpButton>회원가입</SignUpButton>
        <FindPwNotUser>
          <FindPw>비밀번호 찾기</FindPw>
          <NotUser>2022년 5월 이전 비회원 예약조회</NotUser>
        </FindPwNotUser>
        <SnsLoginComment>SNS 계정으로 로그인하기</SnsLoginComment>
        <KakaoButtonLink href={KAKAO_AUTH}>
          <KakaoButton src={kakao_login_medium_wide} />
        </KakaoButtonLink>
      </LoginBox>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  width: 100vh;
  height: 100vh;
`;
const LoginBox = styled.div`
  ${props => props.theme.variables.flex('column', 'center', '')};
  width: 360px;
`;
const TitleBox = styled.div`
  height: 102px;
  padding-top: 32px;
`;
const Title1 = styled.h1`
  text-align: center;
  font-size: 20px;
  letter-spacing: 12px;
  text-indent: 12px;
  font-weight: 700;
`;
const Title2 = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 14px;
  margin: 8px 0 0;
`;
const Form = styled.form`
  ${props => props.theme.variables.flex('column', 'center', '')};
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: 1px solid black;
`;
const InputId = styled.input`
  border: none;
  border-bottom: 1px solid rgb(170, 170, 170);
  margin-top: 8px;
  height: 46px;
  width: 100%;
`;
const InputPw = styled.input`
  border: none;
  border-bottom: 1px solid rgb(170, 170, 170);
  margin-top: 8px;
  height: 46px;
  width: 100%;
`;
const LoginButton = styled.button`
  color: white;
  background-color: black;
  border: none;
  height: 55px;
  margin-bottom: 10px;
`;
const SignUpButton = styled.button`
  background-color: white;
  line-height: 45px;
  border: 1px solid black;
  margin-bottom: 10px;
`;
const FindPwNotUser = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')};
`;
const FindPw = styled.span`
  color: rgb(170, 170, 170);
`;
const NotUser = styled.span`
  color: rgb(170, 170, 170);
`;
const KakaoButtonLink = styled.a`
  ${props => props.theme.variables.flex('', 'center', '')};
`;
const KakaoButton = styled.img`
  width: 100%;
`;
const SnsLoginComment = styled.p`
  margin-top: 70px;
  text-align: center;
`;
export default Login;
