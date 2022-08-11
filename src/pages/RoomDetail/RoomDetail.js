import React, { useEffect, useState } from 'react';
import SelectDate from './SelectDate';
import ModalCalender from './ModalCalender';
import RoomCarousel from './RoomCarousel';
import Feature from './Feature';
import styled from 'styled-components';

const RoomDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const room_id = searchParams.get('room_id');
  const token = localStorage.getItem('access_token');
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState({
    start: '',
    end: '',
    night: '',
    default: '날짜를 선택해주세요.',
  });
  const [optionDataList, setOptionDataList] = useState({
    room_name: '',
    content: '',
    checkin: '',
    checkout: '',
    max_capacity: '',
    min_capacity: '',
    area: '',
    bed: '',
    features: [],
    amenities: [],
    add_ons: [],
    images: [],
  });

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch(`http://10.58.1.45:8000/room/room%20A1`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setOptionDataList({
          ...optionDataList,
          room_name: res.result[0].room_name,
          content: res.result[0].content,
          checkin: res.result[0].checkin,
          checkout: res.result[0].checkout,
          max_capacity: res.result[0].max_capacity,
          min_capacity: res.result[0].min_capacity,
          area: res.result[0].area,
          bed: res.result[0].bed,
          features: res.result[0].features,
          amenities: res.result[0].amenities,
          add_ons: res.result[0].add_ons,
          images: res.result[0].room_image,
        });
      });
  }, []);

  const bookRoom = () => {
    const { start, end } = date;
    const startYear = start && start.getFullYear();
    const startMonth = start && ('0' + (start.getMonth() + 1)).slice(-2);
    const startDate = start && start.getDate();
    const endYear = end && end.getFullYear();
    const endMonth = end && end.getMonth() + 1;
    const endDate = end && end.getDate();

    const reservationStart = `${startYear}-${startMonth}-${startDate}`;
    const reservationEnd = `${endYear}-${endMonth}-${endDate}`;

    fetch(`http://10.58.1.45:8000/books`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: JSON.stringify({
        room_id: room_id,
        check_in: reservationStart,
        check_out: reservationEnd,
      }),
    });
  };

  return (
    <RoomDetailContainer>
      <Title>BOOKING</Title>
      <BookContainer>
        <StayName>{optionDataList.room_name}</StayName>
        <SelectDate date={date} handleModal={handleModal} />
        <ModalCalender
          isOpen={isOpen}
          handleModal={handleModal}
          setDate={setDate}
        />
        <BookButton onClick={bookRoom}>결제하기</BookButton>
      </BookContainer>
      <RoomMainContainer>
        <RoomInfoContainer>
          <RoomInfo>ROOM INFORMATION</RoomInfo>
          <RoomName>{optionDataList.room_name}</RoomName>
          <Dash>-</Dash>
          <RoomDescription>{optionDataList.content}</RoomDescription>
          <OtherInfo>{`${optionDataList.checkin} / ${optionDataList.checkout}`}</OtherInfo>
          <OtherInfo>{`기준 인원 ${optionDataList.min_capacity}명(최대 인원 ${optionDataList.max_capacity}명)`}</OtherInfo>
          <OtherInfo>{`객실면적 ${optionDataList.area}m&sup2`}</OtherInfo>
          <OtherInfo>{optionDataList.bed}</OtherInfo>
        </RoomInfoContainer>
        <RoomImgContainer>
          <RoomCarousel optionDataList={optionDataList} />
        </RoomImgContainer>
      </RoomMainContainer>
      <RoomOptionContainer>
        <OptionContainer>
          <OptionTitle>FEATURES</OptionTitle>
          <Options>
            {optionDataList.features.map(option => {
              return <Feature key={option.id} option={option} />;
            })}
          </Options>
        </OptionContainer>
        <OptionContainer>
          <OptionTitle>AMENITIES</OptionTitle>
          <Options>
            {optionDataList.amenities.map(option => {
              return <Feature key={option.id} option={option} />;
            })}
          </Options>
        </OptionContainer>
        <OptionContainer>
          <OptionTitle>ADD ON SERVICES</OptionTitle>
          <Options>
            {optionDataList.add_ons.map(option => {
              return <Feature key={option.id} option={option} />;
            })}
          </Options>
        </OptionContainer>
      </RoomOptionContainer>
    </RoomDetailContainer>
  );
};

export default RoomDetail;

const RoomDetailContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width: 100%;
`;

const Title = styled.div`
  ${props => props.theme.variables.flex()}
  width: 100%;
  margin: 80px 0;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 14px;
  color: #000;
  text-indent: 14px;
`;

const BookContainer = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 1330px;
  border-bottom: 2px solid #dddddd;
  padding-bottom: 5px;
  margin-bottom: 40px;
`;

const StayName = styled.div`
  font-size: 26px;
  font-weight: 500;
`;

const BookButton = styled.button`
  width: 250px;
  height: 50px;
  border: 1px solid #000;
  background: #000;
  color: white;
  font-size: 16px;
`;

const RoomMainContainer = styled.div`
  ${props => props.theme.variables.flex('', '', 'flex-start')}
  width: 1330px;
  height: auto;
  margin-bottom: 30px;
`;

const RoomInfoContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'start', '')}
  flex: 23;
  padding-right: 40px;
`;

const RoomInfo = styled.div`
  font-size: 12px;
  letter-spacing: 3.6px;
  font-family: Abel, SpoqaHanSans;
`;

const RoomName = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.2;
`;

const Dash = styled.div`
  font-size: 18px;
  margin-top: 25px;
`;

const RoomDescription = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.7;
  margin-top: 30px;
`;

const OtherInfo = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.9;
}
`;

const RoomImgContainer = styled.div`
  flex: 76;
  width: 70%;
`;

const RoomOptionContainer = styled.div`
  ${props => props.theme.variables.flex('column')}
  width: 1330px;
  height: auto;
`;

const OptionContainer = styled.div`
  ${props => props.theme.variables.flex()}
  width: 100%;
  color: #181818;
  padding: 20px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const OptionTitle = styled.div`
  flex: 3;
  font-size: 12px;
  letter-spacing: 3.6px;
  font-family: Abel, NanumSquare;
`;

const Options = styled.div`
  ${props => props.theme.variables.flex('', 'start')}
  flex: 10;
  flex-wrap: wrap;
`;
