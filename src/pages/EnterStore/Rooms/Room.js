import React from 'react';
import styled from 'styled-components';

const Room = ({ className, room, deleteRoom }) => {
  const roomName = Object.keys(room)[0];

  return (
    <div className={className}>
      <span>{roomName}</span>
      <button
        onClick={e => {
          e.preventDefault();
          deleteRoom(roomName);
        }}
      >
        X
      </button>
    </div>
  );
};

const StyledRoom = styled(Room)`
  ${props => props.theme.variables.flex()}
  width: auto;
  height: 50px;
  border: 1px solid gray;
  border-radius: 15px;
  margin: 10px;
  background-color: black;
  color: white;

  span {
    padding: 10px 5px 10px 15px;
  }

  button {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 15px;

    border: none;
    color: white;

    background-color: black;
    background-size: contain;
    // background-image: url(https://cdn-icons.flaticon.com/png/512/3416/premium/3416079.png?token=exp=1659675412~hmac=972a8ca53c694067d077bc77ea7825f4);
  }
`;

export default StyledRoom;
