import React from 'react';
import styled from 'styled-components';
import Nothing from './Nothing';
const ItemList = ({ items, setItems, whichTabSelected }) => {
  const onRemove = targetName => {
    setItems(
      items.filter(item => {
        return targetName !== item.room_name;
      })
    );
  };
  const deleteNotice = booknumber => {
    fetch('http://10.58.4.88:8000/books/cancel', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: JSON.stringify({ book_number: booknumber }),
    });
  };
  return (
    <List>
      {items.length === 0 ? (
        <Nothing />
      ) : (
        items.length !== 0 &&
        items.map((item, index) => {
          return (
            <IndividualItem
              whichTabSelected={whichTabSelected}
              onRemove={onRemove}
              deleteNotice={deleteNotice}
              setItems={setItems}
              key={index}
              booknumber={item.book_number}
              name={item.room_name}
              lowprice={item.stay_price.low_price}
              highprice={item.stay_price.high_price}
              lowcapacity={item.stay_capacity.min_capacity}
              highcapacity={item.stay_capacity.max_capacity}
              checkin={item.check_in}
              checkout={item.check_out}
              region={item.stay_address.stay_region}
              district={item.stay_address.stay_district}
              thumbnailImage={item.room_image}
              type={item.stay_type}
            />
          );
        })
      )}
    </List>
  );
};
const IndividualItem = ({
  whichTabSelected,
  onRemove,
  deleteNotice,
  booknumber,
  name,
  lowprice,
  highprice,
  district,
  region,
  type,
  lowcapacity,
  highcapacity,
  checkin,
  checkout,
  thumbnailImage,
}) => {
  return (
    <IndividualItemContainer>
      {whichTabSelected !== '2' && (
        <DeleteButton
          onClick={() => {
            onRemove(name);
            deleteNotice(booknumber);
          }}
        >
          삭제X
        </DeleteButton>
      )}
      <IndividualItemNameType>
        <ItemName>{name}</ItemName>
        <ItemType>{type}</ItemType>
      </IndividualItemNameType>
      <IndividualItemText>
        <LocaCapaPriceReserve>
          <CheckIn>Check-In : {checkin}</CheckIn>
          <CheckOut>Check-Out : {checkout}</CheckOut>
          <Location>{region + ' ' + district}</Location>
          <Capacity>
            {'기준인원' +
              ':' +
              lowcapacity +
              ' ' +
              '최대인원' +
              ':' +
              highcapacity}
          </Capacity>
          <Price>
            {'₩' +
              Math.floor(lowprice).toLocaleString() +
              '~' +
              Math.floor(highprice).toLocaleString()}
          </Price>
          <ReserveButton>예약하기</ReserveButton>
        </LocaCapaPriceReserve>
        <IndividualItemImgWrapper>
          <IndividualItemImg src={thumbnailImage} />
        </IndividualItemImgWrapper>
      </IndividualItemText>
    </IndividualItemContainer>
  );
};
const List = styled.div``;
const IndividualItemContainer = styled.div`
  ${props => props.theme.variables.flex('column', '', '')};
  position: relative;
  height: 400px;
  width: 600px;
  padding: 50px 20px 50px 20px;
`;
const DeleteButton = styled.p`
  position: absolute;
  right: 5%;
  top: 0;
  text-decoration: underline;
  font-size: 20px;
`;
const IndividualItemImgWrapper = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'center')};
  height: 250px;
  width: 380px;
`;
const IndividualItemImg = styled.img`
  object-fit: cover;
  height: 250px;
  width: 380px;
`;
const IndividualItemText = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')};
  width: 100%;
`;
const IndividualItemNameType = styled.div``;
const ItemName = styled.p`
  font-size: 35px;
`;
const ItemType = styled.p``;
const LocaCapaPriceReserve = styled.div`
  ${props => props.theme.variables.flex('column', 'flex-end', '')};
`;
const CheckIn = styled.p`
  text-align: center;
`;
const CheckOut = styled.p`
  text-align: center;
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
  margin: 20px auto 5px auto;
  font-weight: 700;
  text-decoration: underline;
`;
export default ItemList;
