import React from 'react';
import Modal from 'react-modal';
import InputList from '../Inputs/InputList';
import styled from 'styled-components';
import { Title, SubTitle, Form, EnterButton } from '../Valuables';

const RoomModal = ({
  isOpen,
  handleModal,
  handleInput,
  handleInputFile,
  handleCheckbox,
  ROOM_DATA,
  addRoominList,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      preventScroll={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
        },
        content: {
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'absolute',
          top: '40px',
          left: '200px',
          right: '200px',
          bottom: '40px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      <ModalCloseButton onClick={handleModal} />
      <Title primary="RoomModal">ROOM INFORMATION</Title>
      <SubTitle primary="RoomModal">스테이의 룸 정보를 입력해주세요.</SubTitle>
      <Form
        onSubmit={e => {
          addRoominList(e);
          handleModal(e);
        }}
        primary="RoomModal"
      >
        {ROOM_DATA.map(input => {
          return (
            <InputList
              key={input.id}
              input={input}
              handleInput={handleInput}
              handleInputFile={handleInputFile}
              handleCheckbox={handleCheckbox}
            />
          );
        })}
        <EnterButton type="submit" primary="RoomModal">
          입력완료
        </EnterButton>
      </Form>
    </Modal>
  );
};

const ModalCloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 12%;
  width: 20px;
  height: 20px;
  border: none;
  background-color: white;
  background-size: cover;
  background-image: url(https://cdn-icons-png.flaticon.com/512/748/748122.png);
`;

export default RoomModal;
