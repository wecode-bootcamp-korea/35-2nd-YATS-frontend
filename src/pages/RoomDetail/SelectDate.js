import React from 'react';
import styled from 'styled-components';

const SelectDate = ({ className, handleModal, date }) => {
  // const night = date. - date.end;
  const { start, end } = date;

  const startYear = start && start.getFullYear();
  const startMonth = start && ('0' + (start.getMonth() + 1)).slice(-2);
  const startDate = start && start.getDate();
  const endYear = end && end.getFullYear();
  const endMonth = end && end.getMonth() + 1;
  const endDate = end && end.getDate();

  const reservationStart = `${startYear}.${startMonth}.${startDate}`;
  const reservationEnd = `${endYear}.${endMonth}.${endDate}`;

  const night = (end - start) / (24 * 60 * 60 * 1000);

  return (
    <div className={className} onClick={handleModal}>
      <span className="day">
        {date.start && date.end
          ? `${reservationStart} - ${reservationEnd}`
          : date.default}
      </span>
      <span className="night">{night > 0 ? `${night}박` : ''}</span>
      <Arrow />
    </div>
  );
};

const StyledSelectDate = styled(SelectDate)`
  position: relative;
  font-size: 16px;

  .day {
    padding: 8px;
    letter-spacing: 1px;
    font-size: 16px;
    font-weight: 600;
  }

  .night {
    padding: 0 8px;

    font-size: 16px;
    font-weight: 600;
    border-left: 1px solid #ccc;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 7%;
  right: -5%;
  width: 10px;
  height: 10px;
  background-size: cover;
  background-image: url(https://cdn-icons.flaticon.com/png/512/656/premium/656979.png?token=exp=1660054556~hmac=fd2995d84896e7bff57e96d35cf6295e);
`;

export default StyledSelectDate;
