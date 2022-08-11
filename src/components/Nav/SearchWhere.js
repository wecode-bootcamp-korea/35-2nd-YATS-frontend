import React, { useState } from 'react';
import ModalWhere from './ModalWhere';
import styled from 'styled-components';

const SearchWhere = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchWhereContainer>
      <LocationImg />
      <MenuTap onClick={handleModal}>어디로 떠날까요?</MenuTap>
      <ModalWhere isOpen={isOpen} handleModal={handleModal} />
    </SearchWhereContainer>
  );
};

const SearchWhereContainer = styled.div`
  ${props => props.theme.variables.flex()}
  margin: 0 20px;
  font-size: 17px;

  &:hover {
    cursor: pointer;
  }
`;

const MenuTap = styled.div``;

const LocationImg = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 8px;
  background-size: cover;
  background-image: url(https://cdn-icons-png.flaticon.com/512/684/684809.png);
`;

export default SearchWhere;
