import React, { useState } from 'react';
import Calander from './Calander';
import { Title, CloseButton } from './NavVariables';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ModalWhen = ({ isOpen, handleModal, className }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const search = () => {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth() + 1;
    const startDay = startDate.getDate();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth() + 1;
    const endDay = endDate.getDate();
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
      <Title>언제 떠날까요?</Title>
      <CloseButton onClick={handleModal} />
      <Calander startDate={startDate} endDate={endDate} onChange={onChange} />
      <SearchButton search={search} />
    </ReactModal>
  );
};

const StyledModalWhen = styled(ModalWhen)`
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

const Button = ({ className, search }) => {
  return (
    <div className={className}>
      <button onClick={search}>SEARCH</button>
      <img
        alt="search button"
        src="https://www.nicepng.com/png/full/9-97633_right-arrow-white-png-right-arrow-png-white.png"
      />
    </div>
  );
};

const SearchButton = styled(Button)`
  ${props => props.theme.variables.flex()}
  position: relative;
  padding: 50px 0;
  width: 100%;
  border-top: 2px solid #e5e5e5;

  button {
    width: auto;
    padding: 20px 70px 20px 40px;
    color: white;
    border-radius: 80px;
    background-color: black;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 2px;
    box-shadow: 13px 15px 30px 0 rgb(0 0 0 / 40%);

    &:hover {
      cursor: pointer;
    }
  }

  img {
    position: absolute;
    top: 50%;
    right: 42%;
    transform: translate(-50%, -60%);
    width: 20px;
    height: 10px;
  }
`;

export default StyledModalWhen;
