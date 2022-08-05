import React from 'react';
import DatePicker from 'react-datepicker';
import { addDays, subDays } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const Calander = ({ className, startDate, endDate, onChange }) => {
  return (
    <div className={className}>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        monthsShown={2}
        locale={ko}
        excludeDateIntervals={[
          { start: subDays(new Date(), 300000), end: addDays(new Date(), -1) },
        ]}
        selectsRange
        inline
      />
    </div>
  );
};

const StyledCalander = styled(Calander)`
  .react-datepicker {
    border: none;
    margin: 2rem 0;
    font-size: 1rem;
  }
  .react-datepicker__navigation--previous {
    /* position: fixed;
    top: 22rem; */
    left: 2rem;
  }
  .react-datepicker__navigation--next {
    /* position: fixed;
    top: 22rem; */
    right: 2rem;
  }
  .react-datepicker__month-container {
    width: 34.4rem;
  }
  .react-datepicker__day--today {
    font-weight: normal;
  }
  .react-datepicker__current-month {
    margin-bottom: 30px;
    font-size: 20px;
  }
  .react-datepicker__header {
    background-color: white;
    border: none;
  }
  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    color: white;
    background-color: black;
  }
  .react-datepicker__day--in-selecting-range {
    color: black;
    background-color: #eee;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 4.8rem;
    line-height: 2.1rem;
    margin: 0;
    border-radius: 0;
  }
  .react-datepicker__day--range-start,
  .react-datepicker__day--selected {
    border-radius: 20px 0 0 20px;
  }
  .react-datepicker__day--range-end {
    border-radius: 0 20px 20px 0;
  }
`;

export default StyledCalander;
