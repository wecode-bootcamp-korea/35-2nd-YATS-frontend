import React, { useEffect } from 'react';
import { markerdata } from '../Map/markerdata';
import styled from 'styled-components';

const Map = () => {
  useEffect(() => {
    mapscript();
  }, []);
  const mapscript = () => {
    const { kakao } = window;

    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(markerdata[0].lat, markerdata[0].lng),
      level: 5,
    };
    //   //map
    const map = new kakao.maps.Map(container, options);
    //마커가 표시 될 위치
    //   // let markerPosition = new kakao.maps.LatLng(
    //   //   36.624915253753194,
    //   //   127.15122688059974
    //   // );
    //   // 마커를 생성
    //   // let marker = new kakao.maps.Marker({
    //   //   position: markerPosition,
    //   // });
    //   // 마커를 지도 위에 표시
    markerdata.forEach(el => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  };
  return (
    <Container>
      <MapContainer id="map">
        <StayDescription>
          <StayOutline>
            <StayTitle>{markerdata[0].title}</StayTitle>
            <StayAddress>서울특별시 용산구 동자자동 43-205</StayAddress>
            <StayEmail>{markerdata[0].email}</StayEmail>
          </StayOutline>
        </StayDescription>
      </MapContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vh;
`;
const MapContainer = styled.div`
  width: 1000px;
  height: 600px;
`;
const StayDescription = styled.div`
  position: absolute;
  right: 5%;
  top: 5%;
  border-radius: 5px;
  background-color: white;
  z-index: 2;
`;
const StayOutline = styled.div`
  height: 95%;
  width: 95;
  border: 3px double black;
  border-radius: 5px;
  margin: 5px;
`;
const StayTitle = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 20px auto 40px auto;
`;
const StayAddress = styled.p`
  margin: auto 10px auto 10px;
`;
const StayEmail = styled.p`
  margin: 20px 10px auto 10px;
`;

export default Map;
