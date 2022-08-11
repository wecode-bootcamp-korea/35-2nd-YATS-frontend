import styled from 'styled-components';

export const DateContainer = styled.div`
  width: 492px;
  height: auto;
  position: absolute;
  top: 40px;
  right: 0px;
  background-color: white;
  z-index: 1;
  .react-datepicker__header {
    background-color: white;
    border-bottom: none;
  }
  .react-datepicker__day--in-range {
    background-color: black;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: black;
  }
  .react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--in-range) {
    background-color: black;
  }
`;
