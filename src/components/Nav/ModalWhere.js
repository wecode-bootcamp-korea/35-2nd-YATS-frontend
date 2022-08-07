import React from 'react';
import Region from './Region';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ModalWhere = ({ isOpen, handleModal, className }) => {
  ReactModal.setAppElement('#root');

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleModal}
      portalClassName={className}
      overlayClassName="overlay"
      className="content"
    >
      <Title>어디로 떠날까요?</Title>
      <CloseButton onClick={handleModal} />
      <Searchbar />
      <Location>
        <LocationContainer>
          <LocationTitle>국내</LocationTitle>
          {DOMESTIC_LOCATAION_DATA.map(location => {
            return <Region key={location.id} location={location} />;
          })}
        </LocationContainer>
        <LocationContainer>
          <LocationTitle>해외</LocationTitle>
          {ABROAD_LOCATAION_DATA.map(location => {
            return <Region key={location.id} location={location} />;
          })}
        </LocationContainer>
      </Location>
      <SearchButton />
    </ReactModal>
  );
};

const StyledModal = styled(ModalWhere)`
  .content {
    ${props => props.theme.variables.flex('column', 'flex-start')}
    position: relative;
    width: 1200px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #ccc;
    border-radius: 15px;
    background: #fff;
    overflow: auto;
    webkitoverflowscrolling: touch;
    borderradius: 4px;
    outline: none;
    padding: 40px;
    max-height: 100%;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Title = styled.div`
  width: 100%;
  padding: 50px 0;
  font-size: 40px;
  font-weight: 800;
  border-bottom: 2px solid #e5e5e5;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 90px;
  right: 50px;
  width: 40px;
  height: 40px;
  border: none;
  background-size: cover;
  background-color: white;
  background-image: url(https://cdn-icons-png.flaticon.com/512/7903/7903969.png);
  opacity: 0.5;
`;

const Input = ({ className }) => {
  return (
    <div className={className}>
      <input type="text" placeholder="원하는 스테이/지역을 검색해보세요." />
      <img
        alt="search"
        src="https://cdn-icons-png.flaticon.com/512/149/149852.png"
      />
    </div>
  );
};

const Searchbar = styled(Input)`
  position: relative;
  width: 65%;
  margin: 60px 0 50px 0;

  input {
    width: 100%;
    height: 60px;
    padding-left: 60px;
    border: none;
    border-radius: 30px;
    background-color: #f5f5f5;
    font-size: 20px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      opacity: 0.6;
      font-size: 14px;
    }
  }

  img {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(0, -50%);
    width: 20px;
    height: 20px;
    opacity: 0.3;
  }
`;

const Location = styled.div`
  ${props => props.theme.variables.flex()}
  width: 95%;
  height: auto;
  margin: 0 0 50px 0;
`;

const LocationContainer = styled.div`
  ${props => props.theme.variables.flex('', 'flex-start')}
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  margin: 20px;
`;

const LocationTitle = styled.div`
  width: 100%;
  margin-bottom: 40px;
  font-size: 25px;
  font-weight: 800;
`;

const Button = ({ className }) => {
  return (
    <div className={className}>
      <button>SEARCH</button>
      <img
        alt="search button"
        src="https://www.nicepng.com/png/full/9-97633_right-arrow-white-png-right-arrow-png-white.png"
      />
    </div>
  );
};

const SearchButton = styled(Button)`
  ${props => props.theme.variables.flex()}
  position: relative;
  padding: 50px 0;
  width: 100%;
  border-top: 2px solid #e5e5e5;

  button {
    width: auto;
    padding: 20px 70px 20px 40px;
    color: white;
    border-radius: 80px;
    background-color: black;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 2px;
    box-shadow: 13px 15px 30px 0 rgb(0 0 0 / 40%);
  }

  img {
    position: absolute;
    top: 50%;
    right: 42%;
    transform: translate(-50%, -60%);
    width: 20px;
    height: 10px;
  }
`;

export default StyledModal;

const DOMESTIC_LOCATAION_DATA = [
  {
    id: 0,
    title: '국내전체',
  },
  {
    id: 1,
    title: '제주',
  },
  {
    id: 2,
    title: '서울',
  },
  {
    id: 3,
    title: '강원',
  },
  {
    id: 4,
    title: '부산',
  },
  {
    id: 5,
    title: '경기',
  },
  {
    id: 6,
    title: '충청',
  },
  {
    id: 7,
    title: '경상',
  },
  {
    id: 8,
    title: '전라',
  },
  {
    id: 9,
    title: '인천',
  },
  {
    id: 10,
    title: '광주',
  },
  {
    id: 11,
    title: '대전',
  },
  {
    id: 12,
    title: '대구',
  },
  {
    id: 13,
    title: '울산',
  },
];

const ABROAD_LOCATAION_DATA = [
  {
    id: 0,
    title: '베트남',
  },
  {
    id: 1,
    title: '태국',
  },
  {
    id: 2,
    title: '대만',
  },
  {
    id: 3,
    title: '인도네시아',
  },
  {
    id: 4,
    title: '라오스',
  },
  {
    id: 5,
    title: '일본',
  },
  {
    id: 6,
    title: '',
  },
  {
    id: 7,
    title: '',
  },
  {
    id: 8,
    title: '',
  },
  {
    id: 9,
    title: '',
  },
  {
    id: 10,
    title: '',
  },
  {
    id: 11,
    title: '',
  },
  {
    id: 12,
    title: '',
  },
  {
    id: 13,
    title: '',
  },
  {
    id: 14,
    title: '',
  },
];
