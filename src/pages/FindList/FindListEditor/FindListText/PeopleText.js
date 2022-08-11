import React from 'react';
import styled from 'styled-components';

const PeopleText = ({ allPeople, handleMenu }) => {
  return (
    <PeopleTextStyle onClick={e => handleMenu(e, '인원')}>
      {allPeople}
    </PeopleTextStyle>
  );
};
export default PeopleText;

const PeopleTextStyle = styled.p``;
