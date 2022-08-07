import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Menus from './Menus';

const Nav = () => {
  return (
    <NavContainer>
      <Logo>OIL OF YATS</Logo>
      <Search />
      <Menus />
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 100%;
  height: 76px;
`;
const Logo = styled.div`
  ${props => props.theme.variables.flex('', 'start', 'center')}

  flex: 7;
  width: 10px;
  height: 36px;
  padding-left: 50px;
  font-weight: 700;
  font-size: 20px;
`;

export default Nav;
