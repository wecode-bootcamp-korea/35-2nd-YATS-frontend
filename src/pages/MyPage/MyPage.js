import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ItemList from '../../components/MyPage/ItemsList';

const MyPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [whichTabSelected, setWhichTabSelected] = useState('1');
  const [articleTitle, setArticleTitle] = useState('예약 정보');
  const [userData, setUserData] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `http://10.58.4.88:8000/books?status_id=${searchParams.get('status_id')}`,
      {
        method: 'GET',
        headers: {
          authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.GSstTMM1LoYE8a10vs51ZFnqAikEpf_kFLUTLqy4KCo',
        },
      }
    )
      .then(res => res.json())
      .then(result => {
        setUserData(result.user_data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://10.58.4.88:8000/books?status_id=${searchParams.get('status_id')}`,
      {
        method: 'GET',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.GSstTMM1LoYE8a10vs51ZFnqAikEpf_kFLUTLqy4KCo',
        },
      }
    )
      .then(res => res.json())
      .then(result => {
        setItems(result.results);
      });
  }, [whichTabSelected]);

  return (
    <MyPageContainer>
      {!userData ? (
        <NowLoading>Now Loading...</NowLoading>
      ) : (
        <>
          <MyPageLogo>MY PAGE</MyPageLogo>
          <MyPageLogo2>마이페이지</MyPageLogo2>
          <CustomerName>{userData.name}님 반가워요!</CustomerName>
          <TimesWithStay>
            스테이폴리오와 함께 0번의 여행을 했어요.
          </TimesWithStay>
          <EmailInfoContainer>
            <CustomerEmail>{userData.email}</CustomerEmail>
            <CustomerInfo>회원 정보 수정</CustomerInfo>
          </EmailInfoContainer>
          <ReserveStatus>
            <MyStay>
              <MyStayTitle>My Stay</MyStayTitle>
              <ReservationInfo
                onClick={() => {
                  setWhichTabSelected('1');
                  setArticleTitle('예약 정보');
                  navigate(`/MyPage/books?status_id=1`);
                }}
              >
                예약 정보
              </ReservationInfo>
              <StayLog
                onClick={() => {
                  setWhichTabSelected('2');
                  setArticleTitle('취소 내역');
                  navigate(`/MyPage/books?status_id=2`);
                }}
              >
                취소 내역
              </StayLog>
              <InterestStay
                onClick={() => {
                  setWhichTabSelected('3');
                  setArticleTitle('관심 스테이');
                  navigate(`/MyPage/books?status_id=3`);
                }}
              >
                관심 스테이
              </InterestStay>
            </MyStay>
            <ReservedItem>
              <UpcomingReservation>{articleTitle}</UpcomingReservation>
              <ItemList
                items={items}
                setItems={setItems}
                whichTabSelected={whichTabSelected}
              />
              <UpcomingStayItem />
            </ReservedItem>
          </ReserveStatus>
        </>
      )}
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')};
  width: 100vh;
`;

const NowLoading = styled.p``;

const MyPageLogo = styled.p`
  margin-top: 60px;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  letter-spacing: 10px;
`;

const MyPageLogo2 = styled.p`
  text-align: center;
  margin-top: 10px;
`;

const CustomerName = styled.p`
  text-align: center;
  margin: 60px auto 10px auto;
  font-size: 35px;
`;

const TimesWithStay = styled.p`
  text-align: center;
  margin: 10px auto 10px auto;
  color: gray;
`;

const EmailInfoContainer = styled.div`
  margin: 10px auto 10px auto;
`;

const CustomerEmail = styled.span``;

const CustomerInfo = styled.span`
  margin-left: 15px;
  padding-left: 15px;
  border-left: 1px solid gray;
  color: gray;
  font-size: 13px;
`;

const ReserveStatus = styled.div`
  display: flex;
  width: 100%;
  border-top: 3px solid black;
  margin-top: 45px; ;
`;

const MyStay = styled.div`
  width: 20%;
  margin: 60px auto auto 20px;
`;

const MyStayTitle = styled.ul`
  font-size: 20px;
  font-weight: 400;
`;

const ReservationInfo = styled.li`
  list-style: none;
  margin-top: 25px;
  margin-left: 10px;
`;

const StayLog = styled.li`
  list-style: none;
  margin-top: 25px;
  margin-left: 10px;
`;

const InterestStay = styled.li`
  list-style: none;
  margin-top: 25px;
  margin-left: 10px;
`;

const ReservedItem = styled.div`
  width: 80%;
  margin: 60px auto auto 20px;
`;

const UpcomingReservation = styled.p`
  font-size: 20px;
`;

const UpcomingStayItem = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('column', '', 'center')};
`;

export default MyPage;
