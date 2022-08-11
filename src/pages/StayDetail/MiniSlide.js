import React from 'react';
import * as MiniSlideStyle from './MiniSlide.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MiniSlide = () => {
  const MiniSlide = props => {
    const { Data } = props;
    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const img = Data.length && Data[0].stay_rooms[0].room_image;

    return (
      <MiniSlideStyle.ComponentContainer>
        <MiniSlideStyle.Carousel>
          <Slider {...settings}>
            <MiniSlideStyle.CarouselImg
              src="./images/StayDetail/house1.jpeg"
              alt="livingroom"
            />
            <MiniSlideStyle.CarouselImg
              src="./images/StayDetail/house2.jpeg"
              alt="livingroom2"
            />
            <MiniSlideStyle.CarouselImg
              src="./images/StayDetail/house3.jpeg"
              alt="bedroom"
            />
            <MiniSlideStyle.CarouselImg
              src="./images/StayDetail/house4.jpeg"
              alt="kitchen"
            />
            <MiniSlideStyle.CarouselImg
              src="./images/StayDetail/house5.jpeg"
              alt="bathroom"
            />
            {Data.length &&
              img.map(item => {
                return (
                  <MiniSlideStyle.CarouselImg src={item.image_url} alt="" />
                );
              })}
          </Slider>
        </MiniSlideStyle.Carousel>
      </MiniSlideStyle.ComponentContainer>
    );
  };
};
export default MiniSlide;
