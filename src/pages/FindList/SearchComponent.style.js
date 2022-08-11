import styled from 'styled-components';

export const ComponentContainer = styled.div`
  ${props => props.theme.variables.flex()}
  height: 400px;
  width: 45%;
  min-width: 300px;

  .slick-slider {
    width: 70%;
    height: 230px;
    object-fit: cover;
    position: relative;
  }

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

export const LeftComponent = styled.div`
  ${props => props.theme.variables.flex('column', '', '')}
  min-width:180px;
  position: relative;
`;

export const SearchArea = styled.div`
  position: absolute;
  top: 0px;
  right: -220%;
  text-decoration: underline;
  cursor: pointer;
`;

export const HotelName = styled.h5`
  font-size: 30px;
  font-weight: 550;
  padding-bottom: 5px;
`;

export const StayWhat = styled.p`
  font-size: 15px;
  padding-bottom: 110px;
`;

export const Information = styled.p`
  font-size: 15px;
`;

export const Reservation = styled.p`
  width: 70px;
  font-size: 16px;
  margin-top: 40px;
  margin-bottom: 50px;
  font-weight: 900;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`;

export const RightComponent = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
`;

export const Like = styled.img`
  position: absolute;
  top: 220px;
  /* right: -390px; */
  right: -220%;
  width: 30px;
  z-index: 1;
  cursor: pointer;
  @media (max-width: 1068px) {
    right: -320px;
  } ;
`;
