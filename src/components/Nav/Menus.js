import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Menus = () => {
  const navigate = useNavigate();

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
      <LoginTap>LOGIN</LoginTap>
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
  margin: 0 20px;
  font-weight: 700;
`;

const LoginTap = styled.div`
  padding: 5px 0 5px 40px;
  border-left: 1px solid #ccc;
  font-weight: 700;
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
