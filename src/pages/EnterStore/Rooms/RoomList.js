import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Room from './Room';
import RoomModal from './RoomModal';

const RoomList = ({
  roomInfo,
  handleInput,
  handleCheckbox,
  className,
  ROOM_DATA,
  stayInfo,
  initializeRoomInfo,
  setRoomList,
  roomList,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    initializeRoomInfo();
    setIsOpen(!isOpen);
  };

  const deleteRoom = targetName => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      setRoomList(
        roomList.filter(room => {
          return targetName !== room.room_name;
        })
      );
      stayInfo.rooms = stayInfo.rooms.filter(room => {
        return targetName !== room.room_name;
      });
    }
  };

  return (
    <div className={className}>
      <button
        className="modalClose"
        onClick={e => {
          e.preventDefault();
          handleModal();
        }}
      >
        ADD ROOM
      </button>
      <div className="roomContainer">
        {roomList.map((room, idx) => {
          return <Room key={idx} room={room} deleteRoom={deleteRoom} />;
        })}
      </div>
      <RoomModal
        isOpen={isOpen}
        roomInfo={roomInfo}
        roomList={roomList}
        setRoomList={setRoomList}
        handleInput={handleInput}
        handleCheckbox={handleCheckbox}
        ROOM_DATA={ROOM_DATA}
        stayInfo={stayInfo}
        initializeRoomInfo={initializeRoomInfo}
        handleModal={handleModal}
      />
    </div>
  );
};

const StyledRoomList = styled(RoomList)`
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  flex: 1;
  margin-top: 20px;
  width: 100%;

  modalClose {
    flex: 1;
    margin-top: 5px;
  }

  .roomContainer {
    ${props => props.theme.variables.flex('', 'flex-start', 'flex-start')}
    flex-wrap: wrap;
    margin: 20px 0;
    width: 100%;
    height: auto;
    background-color: ;
    border: ${props =>
      props.roomList.length === 0 ? 'none' : '1px solid #e5e5e5'};
  }
`;

export default StyledRoomList;
