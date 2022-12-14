import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import RoomList from './RoomList';

const RoomsInfo = ({
  roomInfo,
  handleInput,
  handleInputFile,
  handleCheckbox,
  initializeRoomInfo,
  addRoominList,
  roomDataList,
  setRoomDataList,
}) => {
  Modal.setAppElement('#root');

  return (
    <InputContainer>
      <InputTitle>스테이 룸 정보</InputTitle>
      <RoomList
        roomInfo={roomInfo}
        handleInput={handleInput}
        handleInputFile={handleInputFile}
        handleCheckbox={handleCheckbox}
        ROOM_DATA={ROOM_DATA}
        initializeRoomInfo={initializeRoomInfo}
        addRoominList={addRoominList}
        roomDataList={roomDataList}
        setRoomDataList={setRoomDataList}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start', 'flex-start')}
  width:100%;
  height: auto;
  border-bottom: 1px solid #e5e5e5;
`;

const InputTitle = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 25px;
  font-size: 14px;
`;

export default RoomsInfo;

const ROOM_DATA = [
  {
    id: 0,
    title: '룸 이름',
    name: 'room_name',
    placeholder: '룸 이름을 입력해주세요.',
    type: 'text',
  },
  {
    id: 1,
    title: '침구정보',
    name: 'bed',
    placeholder: '침구 정보를 입력해주세요. (ex. 침구 2개)',
    type: 'text',
  },
  {
    id: 14,
    title: '룸 소개',
    name: 'content',
    placeholder: '간략한 룸 소개를 작성해주세요.',
    type: 'text',
  },
  {
    id: 2,
    title: '기본인원 및 최대인원',
    name: 'capacity',
    name1: 'min_capacity',
    name2: 'max_capacity',
    placeholder1: '기본인원',
    placeholder2: '최대인원',
    type: 'text',
  },
  {
    id: 3,
    title: '체크인 및 체크아웃 시간',
    name: 'time',
    name1: 'checkin',
    name2: 'checkout',
    placeholder: '룸의 체크인 & 아웃 시간을 입력해주세요.',
    type: 'time',
  },
  {
    id: 4,
    title: '룸 크기 (단위: Square meter)',
    name: 'area',
    placeholder: '룸 면적 정보를 입력해주세요. (단위: Square meter) ',
    type: 'text',
  },
  {
    id: 5,
    title: '가격 (주중, 주말, 성수기)',
    name: 'price',
    name1: 'week_price',
    name2: 'weekend_price',
    name3: 'peek_price',
    placeholder1: '주중 가격',
    placeholder2: '주말 가격',
    placeholder3: '성수기 가격',
    type: 'text',
  },
  {
    id: 8,
    title: '룸 형태',
    name: 'room_type',
    option: [
      { type: '룸 형태를 선택해주세요.', id: 859 },
      { type: '기본형', id: 860 },
      { type: '독채형', id: 961 },
      { type: '복층형', id: 862 },
    ],
  },
  {
    id: 9,
    title: 'FEATURES',
    name: 'feature',
    type: 'checkbox',
    option: [
      { type: '독립 키친', id: 470 },
      { type: '독립 화장실', id: 471 },
      { type: '개별 BBQ데크', id: 472 },
      { type: '캠핑테이블체어', id: 473 },
      { type: '샤워실', id: 474 },
      { type: '산책로', id: 475 },
      { type: '빅테이블', id: 476 },
      { type: '주차', id: 477 },
      { type: '빔 프로젝터', id: 478 },
      { type: '웰컴티', id: 479 },
      { type: '야외가구', id: 480 },
      { type: '노천탕', id: 481 },
      { type: '정원', id: 482 },
      { type: '테라스', id: 483 },
      { type: '수영장', id: 484 },
      { type: '썬베드', id: 485 },
      { type: '갤러리', id: 486 },
      { type: '실내스파', id: 487 },
      { type: '조식', id: 488 },
    ],
  },
  {
    id: 11,
    title: 'AMENITIES',
    name: 'amenity',
    type: 'checkbox',
    option: [
      { type: '냉장고', id: 571 },
      { type: '세탁기', id: 572 },
      { type: '건조기', id: 573 },
      { type: '헤어드라이어', id: 574 },
      { type: '블루투스 스피커', id: 575 },
      { type: '턴테이블', id: 600 },
      { type: '전기포트', id: 576 },
      { type: '전자레인지', id: 577 },
      { type: '인덕션', id: 578 },
      { type: '샴푸', id: 579 },
      { type: '정수기', id: 6512 },
      { type: '컨디셔너', id: 580 },
      { type: '바디워시', id: 581 },
      { type: '핸드워시', id: 582 },
      { type: '치약', id: 583 },
      { type: '칫솔', id: 584 },
      { type: '타월', id: 585 },
      { type: '세탁세제', id: 586 },
      { type: '바디스펀지', id: 587 },
      { type: '와인오프너', id: 588 },
      { type: '와인잔', id: 589 },
      { type: '토스터기', id: 590 },
      { type: '캡슐커피머신', id: 591 },
      { type: '조리도구', id: 592 },
      { type: '룸슬리퍼', id: 593 },
      { type: '웰컴드링크', id: 594 },
      { type: '생수', id: 595 },
      { type: '음료 냉장고', id: 7621 },
      { type: '무선 이동식 스크린', id: 1651 },
      { type: '에어컨', id: 85165 },
      { type: '청소기', id: 51595 },
      { type: '토스터기', id: 335595 },
      { type: '캡슐커피머신', id: 12595 },
      { type: '스팀다리미', id: 565195 },
      { type: '오븐', id: 594555 },
      { type: '에어프라이어', id: 61595 },
    ],
  },
  {
    id: 12,
    title: 'ADD-ON SERVICES',
    name: 'add_on',
    type: 'checkbox',
    option: [
      { type: 'BBQ', id: 670 },
      { type: '무료 조식 선택 (신청자에 한함)', id: 671 },
      { type: '한복 대여', id: 672 },
      { type: '현금영수증', id: 673 },
      { type: '불멍 세트', id: 675 },
      { type: '현금영수증', id: 677 },
      { type: '다도 체험', id: 345 },
      { type: '와인 서비스', id: 45452 },
      { type: '34℃ 온수풀 이용', id: 651673 },
    ],
  },
  {
    id: 10,
    title: '룸 사진 첨부',
    name: 'room_images',
    type: 'file',
  },
];
