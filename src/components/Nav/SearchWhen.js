import React, { useState } from 'react';
import ModalWhen from './ModalWhen';
import styled from 'styled-components';

const SearchWhen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SearchWhenContainer>
      <CalanderImg />
      <MenuTap onClick={handleModal}>언제 떠날까요?</MenuTap>
      <ModalWhen isOpen={isOpen} handleModal={handleModal} />
    </SearchWhenContainer>
  );
};

const SearchWhenContainer = styled.div`
  ${props => props.theme.variables.flex()}
  padding: 0 20px;
  font-size: 15px;
  border-left: 1px solid #ccc;

  &:hover {
    cursor: pointer;
  }
`;

const MenuTap = styled.div``;

const CalanderImg = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 8px;
  background-size: cover;
  background-image: url(https://cdn-icons.flaticon.com/png/512/661/premium/661507.png?token=exp=1659883613~hmac=da7548f1d2f8e6da11dea0deffbcb7c7);
`;

export default SearchWhen;
