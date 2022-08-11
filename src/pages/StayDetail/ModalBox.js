import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Calender from './Calender';
import ReactModal from 'react-modal';

const ModalBox = ({ isOpen, handleModal, className }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  ReactModal.setAppElement('#root');

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleModal}
      portalClassName={className}
      overlayClassName="overlay"
      className="content"
    >
      <Calander startDate={startDate} endDate={endDate} onChange={onChange} />
    </ReactModal>
  );
};

const StyledModalBox = styled(ModalBox)`
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
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    padding: 40px;
    max-height: 100%;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export default StyledModalBox;
