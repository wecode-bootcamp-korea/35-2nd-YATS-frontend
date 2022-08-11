import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Menus = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  return (
    <MenusContainer>
      {MENU_DATA.map(menu => {
        return (
          <MenuTap
            key={menu.id}
            onClick={() => {
              navigate(`/${menu.path}`);
            }}
          >
            {menu.title}
          </MenuTap>
        );
      })}
      {token ? (
        <Logout>
          <MyPage
            onClick={() => {
              navigate(`MyPage/books?status_id=1`);
            }}
          />
          LOGOUT
        </Logout>
      ) : (
        <LoginTap
          onClick={() => {
            navigate(`/Login`);
          }}
        >
          LOGIN
        </LoginTap>
      )}
    </MenusContainer>
  );
};

const MenusContainer = styled.div`
  ${props => props.theme.variables.flex('')}
  flex: 5;
  width: 100%;
  font-size: 16px;
`;

const MenuTap = styled.div`
  margin: 0 15px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

const MyPage = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  background-size: cover;
  background-image: url(https://cdn-icons-png.flaticon.com/512/1077/1077114.png);
`;

const Logout = styled.div`
  ${props => props.theme.variables.flex()}
  border-left: 1px solid #ccc;
  font-weight: 700;
  padding: 0 20px;

  &:hover {
    cursor: pointer;
  }
`;

const LoginTap = styled.div`
  ${props => props.theme.variables.flex()}
  border-left: 1px solid #ccc;
  font-weight: 700;
  padding: 0 20px;

  &:hover {
    cursor: pointer;
  }
`;

export default Menus;

const MENU_DATA = [
  {
    id: 0,
    title: 'FIND STAY',
    path: 'FindList',
  },
  {
    id: 1,
    title: 'PROMOTION',
    path: 'Promotion',
  },
  {
    id: 2,
    title: 'PRE-ORDER',
    path: 'PreOder',
  },
];
