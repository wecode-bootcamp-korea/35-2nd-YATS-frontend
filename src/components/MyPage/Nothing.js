import React from 'react';
import styled from 'styled-components';

const Nothing = () => {
  return (
    <NothingContents>
      <UpcomingImg
        src="https://www.stayfolio.com/web/images/img-booking-waiting.png"
        alt="다가올예약 아이콘"
      />
      <UpcomingText>
        다가올 예약이 없습니다. 새로운 스테이를 찾아 떠나보세요.
      </UpcomingText>
      <FindStayButton /*onClick={navigate('/FindList')}*/>
        FIND STAY
      </FindStayButton>
    </NothingContents>
  );
};

const NothingContents = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

const UpcomingImg = styled.img`
  width: 50%;
`;

const UpcomingText = styled.p``;

const FindStayButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  margin: 20px auto 20px auto;
  height: 45px;
  width: 200px;
`;

export default Nothing;
