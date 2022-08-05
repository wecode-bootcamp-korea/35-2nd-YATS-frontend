import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import SecondSlide from './SecondSlide';
import MiniSlide from './MiniSlide';
import Faqcontainer from './Faqcontainer';
import Calender from './Calender';

const StayDetail = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      {/* 슬라이드 시작 */}
      <MainStayBox>
        <MainSlideBox>
          <SecondSlide />
        </MainSlideBox>
        <BlackBox>
          <KeywordBox>
            <Keyword>쉼과 사랑의 시작</Keyword>
          </KeywordBox>
          <InfoBox>
            <InfoName>스테이디</InfoName>
            <InfoArea>강원 / 고성군</InfoArea>
          </InfoBox>
        </BlackBox>
      </MainStayBox>
      {/* 숙박 날짜 선택 */}
      <BtnSelectBox>
        {/* <StayName>스테이디</StayName> */}
        <BtnSelect>
          <ChoiceDate>
            <Button onClick={() => setIsModal(true)}>
              날짜를 선택해 주세요.
              <FontAwesomeIcon className="icon" icon={faAngleDown} />
            </Button>
            {isModal ? (
              <Calender isModal={isModal} setIsModal={setIsModal} />
            ) : null}
          </ChoiceDate>
        </BtnSelect>
      </BtnSelectBox>
      {/* 룸 선택 박스 */}
      <RoomContainer>
        <GrayBox>
          <RoomBox>
            <RoomNameBox>
              <RoomIntro>ROOM</RoomIntro>
            </RoomNameBox>
          </RoomBox>
        </GrayBox>
        <MiniSlideBox>
          <MiniSlide />
        </MiniSlideBox>
        {/* 이미지 속 검정 박스 안 룸 타입 내용들 */}
        <BlackLayout>
          <RoomTexLeftBox>
            <RoomNameType>
              <RoomName>스테이디</RoomName>
              <RoomType>독채형</RoomType>
            </RoomNameType>
            <RoomBedType>기준 2명 (최대 3명) • 침구 2개</RoomBedType>
          </RoomTexLeftBox>
          <RoomTexRightBox>
            <RoomPrice>₩ 350,000 ~</RoomPrice>
            <ReservationBtn>
              <Button>예약하기</Button>
            </ReservationBtn>
          </RoomTexRightBox>
        </BlackLayout>
      </RoomContainer>
      {/* 디테일 정보 시작 */}
      <Detailinfo>
        <InfoTitle>
          <InfoTitleName>일상으로부터 벗어나 바다를 마주보다</InfoTitleName>
          <InfoStayName>스테이디</InfoStayName>
        </InfoTitle>
        <InfoTxt1>
          스테이디는 동해바다와 제가 사랑하는 사람의 이니셜 입니다. 바닷가에서
          빛나던 그 사람은 저에게 또 다른 바다였습니다. 평온함을 찾아 바다로
          떠났던 그때의 그 느낌이 당신에게도 전달되기를 바랍니다.
        </InfoTxt1>
        <InfoTxt2>
          동틀 무렵 침대에 누워 통창으로 보이는 해를 바라보며 시작하여, 해질
          무렵 유리블럭으로 들어오는 노을빛은 스테이디의 또 다른 매력입니다.
          숙소 바로 앞 해변은 조용하고 한적한 장소입니다. 연인 또는 가족간의
          오붓한 피크닉을 떠나 보세요. 해질 무렵 루프탑에서는 노을을 즐길 수
          있고, 저녁엔 침대에 누워 빔프로젝터로 영화를 볼 수 있습니다.
        </InfoTxt2>
      </Detailinfo>
      {/* 테마 박스 시작 */}
      <SpecialBox>
        <SpecialImg
          src="https://images.unsplash.com/photo-1604629761628-5640ee399e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="house"
        />
        <ThemeBox>
          <ThemeSmallBox>
            <ThemeBoxs>
              <p>니나니뇨</p>
            </ThemeBoxs>
          </ThemeSmallBox>
        </ThemeBox>
      </SpecialBox>
      {/* 숙소 주소 */}
      <AdressInfo>
        <Adress>
          스테이디의 주소는 [ 강원도 고성군 죽왕면 가향길 20-2 ] 입니다.
        </Adress>
      </AdressInfo>
      {/* 숙소 지도 */}
      <MapInfo>
        <Map>지도 넣을 자리</Map>
      </MapInfo>
      {/* 하단 FAQ 시작 */}
      <Faqcontainer />
    </>
  );
};

export default StayDetail;

{
  /* 스타일드 컴포넌트 시작 */
}

const MainSlideBox = styled.div`
  position: relative;
  width: 100vw;
  height: 600px;
`;

const MainStayBox = styled(MainSlideBox)``;

const KeywordBox = styled.div``;
const Keyword = styled.p`
  margin-left: 50px;
  font-size: 25px;
  color: #f0f0f0;
`;
const InfoBox = styled.div`
  margin-right: 50px;
`;
const InfoName = styled.p`
  font-size: 25px;
`;
const InfoArea = styled.p``;
const BlackBox = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  position: absolute;
  width: 100vw;
  height: 80px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: #f0f0f0;
`;
const StayName = styled.p`
  font-size: 20px;
`;

const ChoiceDate = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: #fff;
  cursor: pointer;
`;

const BtnSelectBox = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')}
  border-bottom: 2px solid #dcdcdc;
  margin: 30px;
  padding: 20px;
`;
const BtnSelect = styled.div`
  span {
    font-size: 14px;
  }
`;
const RoomContainer = styled.div`
  position: relative;
  ${props => props.theme.variables.flex('', '', 'center')}
  margin-top: 50px;
`;

const GrayBox = styled.div`
  width: 50%;
  height: 600px;
  background-color: #dee2e6;
`;

const RoomBox = styled.div`
  ${props => props.theme.variables.flex('column', 'space-around', '')}
`;
const RoomNameBox = styled.div``;

const MiniSlideBox = styled.div`
  position: absolute;
  left: 25%;
  bottom: 75px;
  width: 450px;
  height: 450px;
`;

const BlackLayout = styled.div`
  position: absolute;
  left: 25%;
  bottom: 75px;
  width: 700px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const RoomIntro = styled.p`
  font-size: 45px;
  font-weight: bold;
  margin-top: 80px;
  margin-left: 40px;
`;

const RoomTexLeftBox = styled.div`
  margin-left: 40px;
`;

const RoomNameType = styled.div`
  color: #fff;
  margin-top: 15px;
  margin-left: 20px;
`;

const RoomName = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const RoomType = styled.p`
  font-size: 15px;
`;

const RoomBedType = styled.p`
  color: #fff;
  margin-top: 20px;
  margin-left: 20px;
`;

const RoomTexRightBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  color: #fff;
  position: absolute;
  bottom: 15px;
  right: 50px;
`;
const RoomPrice = styled.div`
  font-size: 18px;
`;

const ReservationBtn = styled.div`
  button {
    color: #fff;
    background-color: transparent;
    text-decoration: underline;
    margin-top: 25px;
    margin-left: 20px;
  }
`;

const Detailinfo = styled.p`
  text-align: center;
  margin-top: 50px;
`;
const InfoTitle = styled.p``;

const InfoTitleName = styled.p`
  font-size: 20px;
`;
const InfoStayName = styled.p`
  font-size: 14px;
`;
const InfoTxt1 = styled.p`
  margin: 60px;
  font-size: 15px;
  text-align: left;
  line-height: 2;
`;
const InfoTxt2 = styled(InfoTxt1)``;

const SpecialBox = styled.div`
  position: relative;
`;

const SpecialImg = styled.img`
  width: 100vw;
  height: 500px;
  object-fit: cover;
`;

const ThemeBox = styled.div`
  ${props => props.theme.variables.Position('absolute', '0', '')}
  /* position: absolute;
  top: 0px; */
  width: 100vw;
  height: 500px;
  background-color: #000;
  opacity: 0.3;
`;
const ThemeSmallBox = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: #000;
`;
const ThemeBoxs = styled.div`
  width: 300px;
  height: 300px;
  background-color: #000;
`;
const ThemeText = styled.p``;

const AdressInfo = styled.div``;
const Adress = styled.p`
  margin: 60px;
  font-size: 15px;
  text-align: center;
`;
const MapInfo = styled.div``;
const Map = styled.div``;

const FaqMenuMainBox = styled.div`
  ${props => props.theme.variables.Position('absolute', '30px', '20px')}
`;

const FaqMenu = styled.div`
  font-size: 20px;
  color: #fff;
  letter-spacing: 10px;
`;
const FaqMenuBox = styled.div`
  margin-top: 50px;
`;

const FaqEtc = styled.div`
  margin-top: 30px;
  font-size: 16px;
  color: #495057;
`;

const FaqPersons = styled.div`
  font-size: 16px;
  color: #fff;
`;
const FaqPrice = styled(FaqEtc)``;
const FaqInfo = styled(FaqEtc)``;
const Faqfacility = styled(FaqEtc)``;

const FaqInfoContainer = styled.div``;
const FaqInfoText = styled.p`
  ${props => props.theme.variables.Position('absolute', '30px', '200px')}
  color: #fff;
  font-size: 18px;
`;
const FaqBigTable = styled.div``;

const FaqTitle = styled.div`
  ${props => props.theme.variables.Position('absolute', '97px', '200px')}
  color: #fff;
  font-size: 20px;
`;
const FaqInfoTable = styled.div``;

const InfoPerson = styled.div``;
const InfoPersonTitle = styled.p`
  ${props => props.theme.variables.Position('absolute', '135px', '200px')}
  color: #fff;
  font-size: 16px;
`;
const InfoPrice = styled.div``;
const InfoTicket = styled.div`
  ${props => props.theme.variables.Position('absolute', '130px', '300px')}
  color: #868e96;
  border: 1px solid #868e96;
`;
const FaqPersonTable = styled.div``;
const PersonTitle = styled.div``;
const PersonTable = styled.div``;
const PersonInfo = styled.div``;
const InfoPersonInfo = styled.p`
  ${props => props.theme.variables.Position('absolute', '200px', '300px')}
  color: #fff;
  p {
    margin-top: 10px;
    line-height: 2;
    font-size: 14px;
    color: #868e96;
  }
`;
