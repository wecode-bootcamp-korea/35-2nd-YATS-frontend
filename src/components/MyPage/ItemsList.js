import React, { useState } from 'react';
import styled from 'styled-components';
import Nothing from './Nothing';

const ItemList = whichTabSelected => {
  const [items, setItems] = useState([]);
  // const CallData = () => {
  //   fetch(`http:///MyPage/${whichTabSelected}`)
  //     .then(res => res.json())
  //     .then(result => {
  //       setItems(result);
  //     });
  // };
  return (
    <List>
      {items.length === 0 && <Nothing />}
      {items.length !== 0 &&
        items.map((item, index) => {
          return (
            <IndividualItem
              key={index}
              id={item.id}
              name={item.title}
              price={item.price}
              thumbnailImage={item.thumbnail_images}
              types={item.types}
            />
          );
        })}
    </List>
  );
};

const IndividualItem = () => {
  return (
    <IndividualItemContainer>
      <IndividualItemNameType>
        <ItemName>스테이 아린</ItemName>
        <ItemType>펜션</ItemType>
      </IndividualItemNameType>
      <IndividualItemText>
        <LocaCapaPriceReserve>
          <Location>제주/서귀포시</Location>
          <Capacity>기준 4명(최대 4명)</Capacity>
          <Price>₩500,000 ~ ₩600,000</Price>
          <ReserveButton>예약하기</ReserveButton>
        </LocaCapaPriceReserve>
        {/* <IndividualItemImgWrapper> */}
        <IndividualItemImg src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        {/* </IndividualItemImgWrapper> */}
      </IndividualItemText>
    </IndividualItemContainer>
  );
};

const List = styled.div``;
const IndividualItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 600px;
  padding: 50px 20px 50px 20px;
`;
// const IndividualItemImgWrapper = styled.div``;
const IndividualItemImg = styled.img`
  width: 60%;
`;
const IndividualItemText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const IndividualItemNameType = styled.div``;
const ItemName = styled.p`
  font-size: 35px;
`;
const ItemType = styled.p``;

const LocaCapaPriceReserve = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Location = styled.p`
  margin: 10px auto 10px auto;
  font-size: 13px;
`;
const Capacity = styled.p`
  margin: 10px auto 10px auto;
  font-size: 13px;
`;
const Price = styled.p`
  margin: 10px auto 10px auto;
  font-size: 13px;
`;
const ReserveButton = styled.p`
  margin: 35px auto 5px auto;
  font-weight: 700;
  text-decoration: underline;
`;

export default ItemList;
