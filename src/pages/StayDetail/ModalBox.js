import React, { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Calender from './Calender';

const ModalBox = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <ModalContainer class="ReactModal__Content ReactModal__Content--after-open">
      <Button onClick={() => setModalIsOpen(true)}>
        날짜를 선택해 주세요.
        <FontAwesomeIcon className="icon" icon={faAngleDown} />
      </Button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {/* <h2>예약하기</h2> */}
        <CalenderBox>
          <Calender />
        </CalenderBox>
        <div>
          <Button onClick={() => setModalIsOpen(false)}>닫기</Button>
        </div>
      </Modal>
    </ModalContainer>
  );
};
export default ModalBox;

const ModalContainer = styled.div``;
const CalenderBox = styled.div``;

const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: #fff;
  cursor: pointer;
`;
