import React from 'react';
import * as FindListStyle from './SearchComponent.style';
import Slider from 'react-slick';
// import './slick-theme.css';
// import './slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SearchComponent = ({ findList }) => {
  //console.log(findList);
  //console.log(findList.name);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <FindListStyle.ComponentContainer>
      <FindListStyle.LeftComponent>
        <FindListStyle.HotelName>{findList.name}</FindListStyle.HotelName>
        <FindListStyle.StayWhat>호텔</FindListStyle.StayWhat>
        <FindListStyle.Information>서울/용산</FindListStyle.Information>
        <FindListStyle.Information>
          기준 2명(최대 3명)
        </FindListStyle.Information>
        <FindListStyle.Information>
          ￦350,000 ~ ￦450,000
        </FindListStyle.Information>
        <FindListStyle.Reservation>예약하기</FindListStyle.Reservation>
      </FindListStyle.LeftComponent>
      {/* <FindListStyle.RightComponent
        src="./images/FindList/Hotel.png"
        alt="DownArrow"
      /> */}

      <Slider {...settings}>
        <FindListStyle.RightComponent
          src="./images/FindList/Hotel1.png"
          alt="DownArrow"
        />
        <FindListStyle.RightComponent
          src="./images/FindList/Hotel2.png"
          alt="DownArrow"
        />
        <FindListStyle.RightComponent
          src="./images/FindList/Hotel3.png"
          alt="DownArrow"
        />
        <FindListStyle.RightComponent
          src="./images/FindList/Hotel4.png"
          alt="DownArrow"
        />
        <FindListStyle.RightComponent
          src="./images/FindList/Hotel5.png"
          alt="DownArrow"
        />
        <FindListStyle.RightComponent
          src="./images/FindList/Hotel6.png"
          alt="DownArrow"
        />
      </Slider>
    </FindListStyle.ComponentContainer>
  );
};

export default SearchComponent;
