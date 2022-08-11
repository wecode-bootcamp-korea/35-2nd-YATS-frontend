import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Room from './Room';
import RoomModal from './RoomModal';

const RoomList = ({
  className,
  ROOM_DATA,
  roomData,
  roomDataList,
  roomList,
  setRoomDataList,
  setRoomList,
  addRoomInList,
  handleInput,
  handleInputFile,
  handleCheckbox,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = e => {
    console.log('modal');
    e.preventDefault();
    setIsOpen(!isOpen);
    if (isOpen) {
      for (let key of roomData.keys()) {
        roomData.delete(key);
      }
    }
  };

  const deleteRoom = targetName => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      setRoomList(
        roomList.filter(room => {
          return targetName !== room.room_name;
        })
      );
      setRoomDataList(
        roomDataList.filter(room => {
          return targetName !== room.room_name;
        })
      );
    }
  };

  return (
    <div className={className}>
      <button className="modalClose" onClick={handleModal}>
        ADD ROOM
      </button>
      <div className="roomContainer">
        {roomList.map((room, idx) => {
          return <Room key={idx} room={room} deleteRoom={deleteRoom} />;
        })}
      </div>
      <RoomModal
        isOpen={isOpen}
        handleInput={handleInput}
        handleInputFile={handleInputFile}
        handleCheckbox={handleCheckbox}
        ROOM_DATA={ROOM_DATA}
        handleModal={handleModal}
        addRoomInList={addRoomInList}
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
