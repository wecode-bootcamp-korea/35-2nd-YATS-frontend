import React from 'react';
import Modal from 'react-modal';
import InputList from '../Inputs/InputList';
import styled from 'styled-components';
import { Title, SubTitle, Form, RoomInfoEnterButton } from '../Valuables';

const RoomModal = props => {
  const {
    isOpen,
    handleModal,
    roomInfo,
    roomList,
    setRoomList,
    handleInput,
    handleCheckbox,
    ROOM_DATA,
    stayInfo,
  } = props;

  const addRoominList = e => {
    e.preventDefault();
    setRoomList([...roomList, roomInfo]);
    stayInfo.rooms.push(roomInfo);
    handleModal();
  };

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
      <Form onSubmit={addRoominList} primary="RoomModal">
        {ROOM_DATA.map(input => {
          return (
            <InputList
              key={input.id}
              input={input}
              handleInput={handleInput}
              handleCheckbox={handleCheckbox}
            />
          );
        })}
        <RoomInfoEnterButton type="submit" primary="RoomModal">
          입력완료
        </RoomInfoEnterButton>
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
  background-image: url(https://cdn-icons.flaticon.com/png/512/2976/premium/2976286.png?token=exp=1659599056~hmac=0febe0f7372b9b6b41c29339c95b4e0f);
`;

export default RoomModal;
