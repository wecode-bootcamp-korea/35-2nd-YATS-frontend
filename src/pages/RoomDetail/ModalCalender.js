import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import Calender from './Calender';

const ModalCalender = ({ handleModal, isOpen, className, setDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    setDate({ start: start, end: end });
  };
  useEffect(() => {
    if (endDate) {
      handleModal();
    }
  }, [endDate]);

  ReactModal.setAppElement('#root');

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleModal}
      portalClassName={className}
      overlayClassName="overlay"
      className="content"
    >
      <CloseButton onClick={handleModal} />
      <Calender startDate={startDate} endDate={endDate} onChange={onChange} />
    </ReactModal>
  );
};

const StyledModalCalender = styled(ModalCalender)`
  .content {
    ${props => props.theme.variables.flex('column', 'flex-start')}
    position: relative;
    width: 1200px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 15px;
    background: #fff;
    overflow: auto;
    webkitoverflowscrolling: touch;
    borderradius: 4px;
    outline: none;
    padding: 40px;
    max-height: 100%;
    z-index: 10;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 90px;
  right: 50px;
  width: 40px;
  height: 40px;
  border: none;
  background-size: cover;
  background-color: white;
  background-image: url(https://cdn-icons-png.flaticon.com/512/7903/7903969.png);
  opacity: 0.5;
`;

export default StyledModalCalender;
