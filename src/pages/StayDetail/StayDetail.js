import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import SecondSlide from './SecondSlide';
import MiniSlide from './MiniSlide';
import Faqcontainer from './Faqcontainer';
import Calender from './Calender';

const StayDetail = () => {
  const [isModal, setIsModal] = useState(false);
  const [stayData, setStayData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const location = useLocation();
  console.log(location.pathname);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.1.45:8000/findstay/${params.id}`)
      .then(res => res.json())
      .then(data => setStayData(data.result));
  }, []);

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const name = stayData.length && stayData[0].stay_name;
  const keyword = stayData.length && stayData[0].stay_keyword;
  const content_top = stayData.length && stayData[0].stay_content_top;
  const content_bottom = stayData.length && stayData[0].stay_content_bottom;
  const roomname = stayData.length && stayData[0].stay_rooms[0].room_name;
  const roomtype = stayData.length && stayData[0].stay_rooms[0].room_type;
  const stayregion = stayData.length && stayData[0].stay_address.stay_region;
  const staydistrict =
    stayData.length && stayData[0].stay_address.stay_district;
  return (
    <>
      {/* 슬라이드 시작 */}
      <MainStayBox>
        <MainSlideBox>
          <SecondSlide Data={stayData} />
        </MainSlideBox>
        <BlackBox>
          <KeywordBox>
            <Keyword>{keyword}</Keyword>
          </KeywordBox>
          <InfoBox>
            <InfoName>{name}</InfoName>
            <InfoArea>
              {stayregion}/ {staydistrict}
            </InfoArea>
          </InfoBox>
        </BlackBox>
      </MainStayBox>
      <BtnSelectBox>
        <BtnSelect>
          <ChoiceDate>
            <Button onClick={() => setIsModal(prev => !prev)}>
              {!startDate || !endDate
                ? `날짜를 선택해 주세요.`
                : `${startDate.getMonth()}-${startDate.getDate()} ~ ${startDate.getMonth()}-${endDate.getDate()}`}
              <FontAwesomeIcon className="icon" icon={faAngleDown} />
            </Button>
            {isModal ? (
              <Calender
                isModal={isModal}
                setIsModal={setIsModal}
                startDate={startDate}
                endDate={endDate}
                onChange={onChange}
              />
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
              <RoomInfoText>{keyword}</RoomInfoText>
            </RoomNameBox>
          </RoomBox>
        </GrayBox>
        <MiniSlideBox>
          <MiniSlide />
          <MiniSlide Data={stayData} />
        </MiniSlideBox>
        {/* 이미지 속 검정 박스 안 룸 타입 내용들 */}
        <BlackLayout>
          <RoomTexLeftBox>
            <RoomNameType>
              <RoomName>{roomname}</RoomName>
              <RoomType>{roomtype}</RoomType>
            </RoomNameType>
            <RoomBedType>기준 2명 (최대 3명) • 침구 2개</RoomBedType>
          </RoomTexLeftBox>
          <RoomTexRightBox>
            <RoomPrice>₩ 350,000 ~</RoomPrice>
            <ReservationBtn>
              <Button
                type="button"
                onClick={() => navigate(`/room/${roomname}`)}
              >
                예약하기
              </Button>
            </ReservationBtn>
          </RoomTexRightBox>
        </BlackLayout>
      </RoomContainer>
      <Detailinfo>
        <InfoTitle>
          <InfoTitleName>{keyword}</InfoTitleName>
          <InfoStayName>{name}</InfoStayName>
        </InfoTitle>
        <InfoTxt1>{content_top}</InfoTxt1>
        <InfoTxt2>{content_bottom}</InfoTxt2>
      </Detailinfo>
      {/* 테마 박스 시작 */}
      <SpecialBox>
        <ThemeImg src="./images/StayDetail/logtheme.png" alt="themeimg" />
      </SpecialBox>
      {/* 숙소 주소 */}
      <AdressInfo>
        <AdressText>
          네비게이션에 '경기도 파주시 탄현면 헤이리마을길 61'을 입력해주세요.
        </AdressText>
        <Parking>건물 앞에 주차 가능하며, 3층으로 오시면 됩니다.</Parking>
      </AdressInfo>
      {/* 숙소 지도 */}
      <MapInfo>
        <Map>{/* <location /> */}</Map>
      </MapInfo>
      {/* 하단 FAQ 시작 */}
      <Faqcontainer />
    </>
  );
};

export default StayDetail;

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

  text-align: center;
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

const RoomInfoText = styled.p`
  font-size: 16px;
  margin-top: 40px;
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

  letter-spacing: 10px;
  margin-top: 5px;
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

const ThemeImg = styled.img`
  width: 100vw;
  height: 500px;
  object-fit: cover;
`;

const AdressInfo = styled.div``;

const AdressText = styled.p`
  margin: 60px;
  font-size: 15px;
  text-align: center;
`;
// const InfoPerson = styled.div``;
// const InfoPersonTitle = styled.p`
//   ${props => props.theme.variables.Position('absolute', '135px', '200px')}
//   color: #fff;
//   font-size: 16px;
// `;
// const InfoPrice = styled.div``;
// const InfoTicket = styled.div`
//   ${props => props.theme.variables.Position('absolute', '130px', '300px')}
//   color: #868e96;
//   border: 1px solid #868e96;
// `;

const Adress = styled.p`
  font-size: 15px;
  text-align: center;
`;
const Parking = styled(Adress)``;

const MapInfo = styled.div``;
const Map = styled.img`
  width: 100vw;
  height: 600px;
  object-fit: contain;
`;
