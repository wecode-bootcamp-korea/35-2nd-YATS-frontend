import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';
import Menus from './Menus';
import styled from 'styled-components';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <Logo
        onClick={() => {
          navigate('/');
        }}
      >
        OIL OF YATS
      </Logo>
      <Search />
      <Menus />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  position: fixed;
  background-color: white;
  z-index: 10000000000;
  width: 100%;
  height: 76px;
  border-bottom: 1px solid #eee;
`;
const Logo = styled.div`
  ${props => props.theme.variables.flex('', 'start', 'center')}

  flex: 5;
  width: 10px;
  height: 36px;
  padding-left: 50px;
  font-weight: 700;
  font-size: 20px;
`;

export default Nav;
