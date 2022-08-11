import React from 'react';
import * as SecondSlideStyle from './SecondSlide.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SecondSlide = props => {
  const { Data } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const stayImage = Data.length && Data[0].stay_image;
  return (
    <SecondSlideStyle.ComponentContainer>
      <SecondSlideStyle.Carousel>
        <Slider {...settings}>
          {Data.length &&
            stayImage.map(item => {
              return (
                <SecondSlideStyle.CarouselImg
                  key={Math.random()}
                  src={item.url}
                  alt="secondslide"
                />
              );
            })}
        </Slider>
      </SecondSlideStyle.Carousel>
    </SecondSlideStyle.ComponentContainer>
  );
};

export default SecondSlide;
