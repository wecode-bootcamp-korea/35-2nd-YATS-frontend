import React from 'react';
import * as MiniSlideStyle from './MiniSlide.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MiniSlide = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
        </Slider>
      </MiniSlideStyle.Carousel>
    </MiniSlideStyle.ComponentContainer>
  );
};

export default MiniSlide;
