import styled from 'styled-components';

export const ComponentContainer = styled.div`
  width: 100vw;
  height: 600px;
  object-fit: cover;
`;

export const Carousel = styled.div`
  width: 100vw;
  height: 600px;

  .slick-next:before {
    content: '〉';
  }
  .slick-prev:before {
    content: '〈';
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 40px;
    font-weight: 900;
    color: white;
  }
  .slick-prev {
    left: 20px;
    z-index: 1;
    top: 45%;
  }
  .slick-next {
    right: 15px;
    top: 45%;
  }
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;
