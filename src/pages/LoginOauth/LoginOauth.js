import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginOauth = () => {
  const AUTH_CODE = window.location.search;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.2.120:8000/users/kakao${AUTH_CODE}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'FIRSTLOGIN') {
          navigate('/login');
          alert('회원가입 되셨습니다!');
        } else if (result.message === 'LOGIN') {
          navigate('/FindList');
          navigate('/FindList');
          alert('로그인 성공!');
          localStorage.setItem('access_token', result.token);
        } else {
          alert('로그인 실패');
        }
      });
  }, []);
  return <EmptyDiv />;
};

const EmptyDiv = styled.div``;

export default LoginOauth;
