import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Room from './Room';
import RoomModal from './RoomModal';

const RoomList = ({
  handleInput,
  handleInputFile,
  handleCheckbox,
  className,
  ROOM_DATA,
  initializeRoomInfo,
  addRoominList,
  roomDataList,
  setRoomDataList,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = e => {
    e.preventDefault();
    initializeRoomInfo();
    setIsOpen(!isOpen);
  };

  const deleteRoom = targetName => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      setRoomDataList(
        roomDataList.filter(room => {
          return targetName !== Object.keys(room)[0];
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
        {roomDataList.map((room, idx) => {
          return <Room key={idx} room={room} deleteRoom={deleteRoom} />;
        })}
      </div>
      <RoomModal
        isOpen={isOpen}
        handleInput={handleInput}
        handleInputFile={handleInputFile}
        handleCheckbox={handleCheckbox}
        ROOM_DATA={ROOM_DATA}
        initializeRoomInfo={initializeRoomInfo}
        handleModal={handleModal}
        addRoominList={addRoominList}
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
      props.roomDataList.length === 0 ? 'none' : '1px solid #e5e5e5'};
  }
`;

export default StyledRoomList;
