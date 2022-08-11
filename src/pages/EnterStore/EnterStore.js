import React from 'react';
import useHandleInput from './hooks/useHandleInput';
import InputList from './Inputs/InputList';
import RoomsInfo from './Rooms/RoomsInfo';
import styled from 'styled-components';

import {
  Container,
  Title,
  SubTitle,
  Contents,
  Form,
  EnterButton,
} from './Valuables';

const EnterStore = ({ className }) => {
  const {
    handleInput,
    handleInputFile,
    handleCheckbox,
    initializeRoomInfo,
    addRoominList,
    stayInfo,
    roomInfo,
    addInfoToFormData,
    roomDataList,
    setRoomDataList,
  } = useHandleInput();

  const addStayinList = e => {
    e.preventDefault();
    const stayData = addInfoToFormData(stayInfo);

    // for (let pair of stayData.entries()) {
    //   console.log('stayData: ', pair[0] + ', ' + pair[1]);
    // }
    fetch('http://10.58.4.88:8000/entering', {
      method: 'POST',
      body: stayData,
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          roomDataList.forEach(room => {
            const roomData = Object.values(room)[0];
            // for (let pair of roomData.entries()) {
            //   console.log('roomData: ', pair[0] + ', ' + pair[1]);
            // }
            fetch(`http://10.58.4.88:8000/entering/room`, {
              method: 'POST',
              body: roomData,
            });
          });
        }
      });
  };

  return (
    <div className={className}>
      <Container>
        <Title>CONTACT US</Title>
        <SubTitle>당신의 스테이를 스테이폴리오에 소개해 주세요.</SubTitle>
        {ENTER_DESCRIPTION.map(dscrp => {
          return <Contents key={dscrp.id}>{dscrp.content}</Contents>;
        })}
        <Form>
          {STAY_DATA.map(input => {
            return (
              <InputList
                key={input.id}
                input={input}
                handleInput={handleInput}
                handleCheckbox={handleCheckbox}
                handleInputFile={handleInputFile}
              />
            );
          })}
          <RoomsInfo
            roomInfo={roomInfo}
            stayInfo={stayInfo}
            handleInput={handleInput}
            handleInputFile={handleInputFile}
            handleCheckbox={handleCheckbox}
            initializeRoomInfo={initializeRoomInfo}
            addRoominList={addRoominList}
            roomDataList={roomDataList}
            setRoomDataList={setRoomDataList}
          />
          <EnterButton onClick={addStayinList}>소개하기</EnterButton>
        </Form>
      </Container>
    </div>
  );
};

const StyledEnterStore = styled(EnterStore)`
  ${props => props.theme.variables.flex()}
  padding-top: 100px;
`;

export default StyledEnterStore;

const ENTER_DESCRIPTION = [
  {
    id: 100,
    content:
      '얏츠(Oil Of Yats)는 좋은 장소, 공간을 만들어 지역문화 및 국내 여행 문화의 질적 향상에 기여하는 사람들의 이야기를 통해 이를 소비하는 여행자들과의 정보교류 및 소중의 장을 만들기 위해 제작되었습니다. 아직 대중에게 많이 알려져 있지 않은 보석과도 같은 좋은 잠자리 공간을 운영하고 계시거나 혹은 추천해주고 싶으신 분이 계시다면 언제든 얏츠의 문을 두들겨 주세요. 알려주신 스테이에 대해 얏츠에서는 4가지 관점을 통해 장소의 가치를 탐구하여 소개해드리고자 합니다.',
  },
  {
    id: 101,
    content:
      '얏츠(Oil Of Yats) "데일리픽(Daily Pick)"은 저희 얏츠 큐레이터가 웹을 통해 선별한 스테이와 아래의 양식으로 제안을 주신 스테이를 선별하여 소개하고자 합니다. "위클리 매거진(Weekly Magazine)"은 "데일리 픽(Daily Pick)"에서 4가지 관점을 조화롭게 충족시킨 스테이 중 사람들의 관심과 호응을 이끌어낸 스테이를 선별하여 스테이 지기와의 연락을 통해 취재 허락을 구해 큐레이터가 하루를 머무르며 느낀 점을 그대로 풀어가는 매거진 형식으로 진행됩니다.',
  },
  {
    id: 102,
    content:
      '얏츠(Oil Of Yats)는 개인의 열망이 담긴 특별한 스테이(STAY)가 있는 곳이라면 어디든 찾아갑니다. 팬션, 게스트하우스를 비롯해 집 전체를 빌려주는 렌탈하우스, 디자인 관점을 갖고 만들어진 부티크호텔 등 개인의 열망이 담긴 숙박공간부터 건축가가 설계한 집, 내 삶의 정신이 녹아있는 공간에 대한 자부심을 바탕으로 향후에 한 개의 방을 여행자에게 내놓고 지역문화에 기여하고자 하는 개인까지 얏츠의 주인공이 되실 수 있습니다. 아래의 양식으로 스테이(STAY) 정보를 기입해 주시면 감사하겠습니다.',
  },
];

const STAY_DATA = [
  {
    id: 0,
    title: '스테이 이름(Stay name)',
    name: 'stay_name',
    placeholder: '스테이 이름을 입력해주세요.',
    type: 'text',
  },
  {
    id: 1,
    title: '주소(Address)',
    name: 'address',
    placeholder: '정확한 주소를 입력해주세요.',
    type: 'text',
  },
  {
    id: 11,
    title: '위치(위도, 경도)',
    name: 'location',
    name1: 'latitude',
    name2: 'longitude',
    placeholder1: '위도를 입력해주세요',
    placeholder2: '경도를 입력해주세요',
    type: 'text',
  },
  {
    id: 2,
    title: '이메일(E-mail)',
    name: 'email',
    placeholder: '이메일을 입력해주세요.',
    type: 'text',
  },
  {
    id: 3,
    title: '연락처(Phone)',
    name: 'phone',
    placeholder: '휴대전화번호를 남겨주세요.',
    type: 'text',
  },
  {
    id: 4,
    title: '한 줄 소개',
    name: 'keyword',
    placeholder: '간략한 한 줄 소개를 남겨주세요.',
    type: 'text',
  },
  {
    id: 5,
    title: '본문 제목',
    name: 'summary',
    placeholder: '스테이 설명 글의 제목을 남겨주세요.',
    type: 'text',
  },
  {
    id: 6,
    title: '본문1',
    name: 'content_top',
    placeholder: '스테이의 설명을 남겨주세요.',
    type: 'textarea',
  },
  {
    id: 7,
    title: '본문2',
    name: 'content_bottom',
    placeholder: '스테이의 설명을 남겨주세요.',
    type: 'textarea',
  },
  {
    id: 8,
    title: '유형',
    name: 'types',
    option: [
      { type: '유형을 선택하세요', id: 0 },
      { type: '펜션', id: 60 },
      { type: '민박', id: 61 },
      { type: '게스트하우스', id: 62 },
      { type: '렌탈하우스', id: 63 },
      { type: '한옥', id: 64 },
      { type: '캠핑 & 아웃도어', id: 65 },
      { type: '호스텔', id: 66 },
      { type: '리조트', id: 67 },
      { type: '호텔', id: 68 },
    ],
  },
  {
    id: 9,
    title: '테마',
    name: 'themes',
    type: 'checkbox',
    option: [
      { type: '돌집', id: 1270 },
      { type: '유리 온실', id: 3270 },
      { type: '마당', id: 5170 },
      { type: 'Design', id: 8470 },
      { type: 'View', id: 2370 },
      { type: 'Simba Curry', id: 9170 },
      { type: '노천탕', id: 3220 },
      { type: '정원', id: 7021 },
      { type: '풍경', id: 7506 },
      { type: '옥상', id: 7501 },
      { type: '건축', id: 7608 },
      { type: '문화', id: 8701 },
      { type: '루프탑', id: 71 },
      { type: 'CURATION', id: 74 },
      { type: 'DINNING', id: 75 },
      { type: '툇마루', id: 76 },
      { type: '오션뷰', id: 77 },
      { type: '루프탑', id: 78 },
      { type: '정원', id: 79 },
      { type: '족욕 공간', id: 80 },
    ],
  },
  {
    id: 10,
    title: '스테이 사진 첨부',
    name: 'stay_images',
    type: 'file',
  },
];
