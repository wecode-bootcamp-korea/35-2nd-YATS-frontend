import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const RoomCarousel = ({ className, optionDataList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={className}>
      <Slider settings={settings}>
        {optionDataList.images.map(img => {
          return (
            <div key={img.image_id} className="imgContainer">
              <img src={img.image_url} alt="roomimage" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const StyeldRoomCarousel = styled(RoomCarousel)`
  .slick-prev {
    top: 50%;
    left: 0;
    width: 60px;
    height: 60px;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }

  .slick-prev:before {
    content: '<';
  }

  .slick-next {
    top: 50%;
    right: 0;
    width: 60px;
    height: 60px;
    background-color: black;
    opacity: 0.4;
    z-index: 1;
  }

  .slick-next:before {
    content: '>';
  }

  img {
    width: 100%;
    height: 540px;
    object-fit: cover;
  }
`;

export default StyeldRoomCarousel;

const ROOM_IMAGES = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1595678816704-9c82fbe792ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1595678816463-f94d2070f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1596022326953-84f20bfebb77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1597406462637-eb560874d1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1605885795793-097ffaee6b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
];
