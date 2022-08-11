import React from 'react';
import * as MiniSlideStyle from './MiniSlide.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          {Data.length &&
            img.map(item => {
              return (
                <MiniSlideStyle.CarouselImg
                  key={Math.random()}
                  src={item.image_url}
                  alt="minislide"
                />
              );
            })}
        </Slider>
      </MiniSlideStyle.Carousel>
    </MiniSlideStyle.ComponentContainer>
  );
};

export default MiniSlide;
