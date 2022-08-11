import styled from 'styled-components';

export const ComponentContainer = styled.div`
  width: 700px;
`;

export const Carousel = styled.div`
  width: 700px;

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
  width: 450px;
  height: 450px;
  object-fit: cover;
`;
