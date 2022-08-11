import React, { useState } from 'react';
import * as FindListStyle from './SearchComponent.style';
import Slider from 'react-slick';
// import './slick-theme.css';
// import './slick.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SearchComponent = ({
  findList,
  area,
  location,
  setLocation,
  latitudeLongitudeHandle,
  goToStayDetail,
}) => {
  //console.log(findList);
  //console.log(findList.name);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [like, setLike] = useState(true);
  const LikeHandler = () => {
    if (like === true) {
      setLike(false);
    } else {
      setLike(true);
    }
  };

  return (
    <FindListStyle.ComponentContainer>
      <FindListStyle.LeftComponent>
        <FindListStyle.HotelName
          onClick={() => goToStayDetail(findList.stay_id)}
        >
          {findList.stay_name}
        </FindListStyle.HotelName>
        <FindListStyle.StayWhat
          onClick={() => goToStayDetail(findList.stay_id)}
        >
          {findList.stay_type}
        </FindListStyle.StayWhat>
        <FindListStyle.Information
          onClick={() => goToStayDetail(findList.stay_id)}
        >
          {findList.stay_address.stay_region}/
          {findList.stay_address.stay_disrtict}
        </FindListStyle.Information>
        <FindListStyle.Information
          onClick={() => goToStayDetail(findList.stay_id)}
        >
          기준 {findList.stay_capacitiy.min_capacity}명(최대{' '}
          {findList.stay_capacitiy.max_capacity}명)
        </FindListStyle.Information>
        <FindListStyle.Information>
          ￦{parseInt(findList.stay_price.low_price).toLocaleString('ko-KR')} ~
          ￦{parseInt(findList.stay_price.high_price).toLocaleString('ko-KR')}
        </FindListStyle.Information>
        <FindListStyle.Reservation
          onClick={() => goToStayDetail(findList.stay_id)}
        >
          예약하기
        </FindListStyle.Reservation>
        {/* <FindListStyle.Like
          src="./images/FindList/heart.png"
          alt="Heart"
          onClick={() => {
            LikeHandler();
          }}
        />
        <FindListStyle.Like
          src="./images/FindList/heartActive.png"
          alt="Heart"
          onClick={() => {
            LikeHandler();
          }}
        /> */}

        {like === true ? (
          <FindListStyle.Like
            src="./images/FindList/heart.png"
            alt="Heart"
            onClick={() => {
              LikeHandler();
            }}
          />
        ) : (
          <FindListStyle.Like
            src="./images/FindList/heartActive.png"
            alt="Heart"
            onClick={() => {
              LikeHandler();
            }}
          />
        )}

        {area === true ? null : (
          <FindListStyle.SearchArea
            onClick={() =>
              setLocation([findList.stay_latitude, findList.stay_longitude])
            }
          >
            위치보기
          </FindListStyle.SearchArea>
        )}
      </FindListStyle.LeftComponent>
      <Slider {...settings}>
        {findList.stay_image[0] && (
          <FindListStyle.RightComponent
            src={findList.stay_image[0].url}
            alt="DownArrow"
          />
        )}
        {findList.stay_image[1] && (
          <FindListStyle.RightComponent
            src={findList.stay_image[1].url}
            alt="DownArrow"
          />
        )}
        {findList.stay_image[2] && (
          <FindListStyle.RightComponent
            src={findList.stay_image[2].url}
            alt="DownArrow"
          />
        )}
        {findList.stay_image[3] && (
          <FindListStyle.RightComponent
            src={findList.stay_image[3].url}
            alt="DownArrow"
          />
        )}
        {findList.stay_image[4] && (
          <FindListStyle.RightComponent
            src={findList.stay_image[4].url}
            alt="DownArrow"
          />
        )}
        {findList.stay_image[5] && (
          <FindListStyle.RightComponent
            src={findList.stay_image[5].url}
            alt="DownArrow"
          />
        )}
      </Slider>
    </FindListStyle.ComponentContainer>
  );
};

export default SearchComponent;
