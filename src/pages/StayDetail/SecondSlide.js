import React from 'react';
import * as SecondSlideStyle from './SecondSlide.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SecondSlide = () => {
  const SecondSlide = props => {
    const { Data } = props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    console.log(Data);
    const stayImage = Data.length && Data[0].stay_image;
    return (
      <SecondSlideStyle.ComponentContainer>
        <SecondSlideStyle.Carousel>
          <Slider {...settings}>
            <SecondSlideStyle.CarouselImg
              src="./images/StayDetail/house1.jpeg"
              alt="livingroom"
            />
            <SecondSlideStyle.CarouselImg
              src="./images/StayDetail/house2.jpeg"
              alt="livingroom2"
            />
            <SecondSlideStyle.CarouselImg
              src="./images/StayDetail/house3.jpeg"
              alt="bedroom"
            />
            <SecondSlideStyle.CarouselImg
              src="./images/StayDetail/house4.jpeg"
              alt="kitchen"
            />
            <SecondSlideStyle.CarouselImg
              src="./images/StayDetail/house5.jpeg"
              alt="bathroom"
            />
            {Data.length &&
              stayImage.map(item => {
                return <SecondSlideStyle.CarouselImg src={item.url} alt="" />;
              })}
          </Slider>
        </SecondSlideStyle.Carousel>
      </SecondSlideStyle.ComponentContainer>
    );
  };
};
export default SecondSlide;
