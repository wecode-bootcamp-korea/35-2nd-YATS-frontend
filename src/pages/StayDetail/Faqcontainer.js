import React from 'react';
import styled from 'styled-components';
import FaqData from './FaqData';

const Faqcontainer = () => {
  return (
    <FaqBlackBox>
      <FaqBox>
        <FaqMenu>
          <FaqMenuList>
            <FaqTitle>
              <p>FAQ</p>
            </FaqTitle>
            <FaqCapacity>인원 및 금액</FaqCapacity>
            <FaqReservation>예약 및 결제</FaqReservation>
            <FaqInfomation>이용 안내</FaqInfomation>
            <Faqfacilities>부대시설 안내</Faqfacilities>
            <FaqEtc>기타 안내</FaqEtc>
          </FaqMenuList>
        </FaqMenu>
        <FaqMenuInfo>
          <FaqAbout>
            FAQ를 통하여 예약에 관련된 더 자세한 내용들을 찾아보세요.
          </FaqAbout>
          <FaqPriceTitle>인원 및 금액</FaqPriceTitle>
          <FaqTitleBox>
            <FaqPriceContainer>
              <FaqCapacityTitle>인원 기준</FaqCapacityTitle>
              {/* <FaqPrice>요금 기준</FaqPrice> */}
            </FaqPriceContainer>
            <FaqTable>
              <FaqData />
              <FaqCapacityInfo>
                <span>
                  • 기준인원 초과 시 1인당 20,000원의 추가 요금이 발생합니다.
                </span>
                <span>
                  • 최대인원을 초과하는 인원 및 방문객의 입실은 불가합니다.
                </span>
                <span>
                  • 예약 변경 및 기타 문의사항은 스테이디(0504-0904-2514)로 연락
                  주시기 바랍니다.
                </span>
              </FaqCapacityInfo>
            </FaqTable>
          </FaqTitleBox>
        </FaqMenuInfo>
      </FaqBox>
    </FaqBlackBox>
  );
};

export default Faqcontainer;

const FaqBlackBox = styled.div`
  width: 100vw;
  height: 400px;
  background-color: #000;
`;

const FaqBox = styled.div`
  display: flex;
  gap: 100px;
`;

const FaqMenu = styled.div`
  margin-top: 50px;
  margin-left: 80px;
`;
const FaqTitle = styled.div`
  p {
    font-size: 20px;
    color: #fff;
    letter-spacing: 10px;
    margin-bottom: 50px;
  }
`;
const FaqMenuList = styled.div`
  display: flex;
  flex-direction: column; ;
`;
const FaqCapacity = styled.div`
  color: #fff;
`;
const FaqEtc = styled.div`
  margin-top: 30px;
  font-size: 16px;
  color: #495057;
`;
const FaqReservation = styled(FaqEtc)``;
const FaqInfomation = styled(FaqEtc)``;
const Faqfacilities = styled(FaqEtc)``;

const FaqMenuInfo = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  color: #868e96;
  font-size: 16px;
`;
const FaqAbout = styled.div`
  color: #fff;
  font-size: 18px;
  margin-left: 100px;
`;
const FaqPriceTitle = styled.div`
  margin-top: 40px;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  margin-left: 100px;
`;
const FaqTitleBox = styled.div`
  display: flex;
  margin-left: 100px;
`;
const FaqPriceContainer = styled.div``;
const FaqTable = styled.div`
  text-align: center;
`;
const FaqCapacityInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  span {
    margin-bottom: 10px;
  }
`;
const FaqCapacityTitle = styled.p`
  padding: 20px;
`;
const FaqPrice = styled.p``;
