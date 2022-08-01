import React from 'react';
import DatePicker from 'react-datepicker';
import * as DateContainerStyle from './DateContainer.style';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';

const DateContainer = ({ onChange, startDate, endDate }) => {
  return (
    <DateContainerStyle.DateContainer>
      <DatePicker
        locale={ko}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
      />
    </DateContainerStyle.DateContainer>
  );
};

export default DateContainer;
