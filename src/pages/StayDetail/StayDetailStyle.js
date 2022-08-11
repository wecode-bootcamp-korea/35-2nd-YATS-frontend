import styled from 'styled-components';

export const MainSlideBox = styled.div`
  .mySwiper {
    position: relative;
  }

  .mainSlideImg {
    /* position: relative; */
    width: 100vw;
    height: 500px;
    object-fit: cover;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 50px;
    height: 50px;
    color: #000;
  }
`;

export const BlackBox = styled.div`
  /* position: absolute; */
  width: 600px;
  height: 70px;
  background-color: #000;
  opacity: 0.8;

  .leftKeyword {
    color: #f0f0f0;
  }

  .rightKeyword {
    color: #f0f0f0;
  }
`;
