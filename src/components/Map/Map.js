import React, { useEffect } from 'react';
import styled from 'styled-components';
import instagram from '../../images/map/instagram-brands.svg';
const Map = ({ result, location }) => {
  useEffect(() => {
    !result ? mapscriptDefault() : mapscript();
  }, [result]);
  const mapscriptDefault = () => {
    const { kakao } = window;
    let mapContainer = document.getElementById('map');
    let mapOptions = {
      center: new kakao.maps.LatLng(37.506295, 127.053664),
      level: 2,
    };
    //map
    const map = new kakao.maps.Map(mapContainer, mapOptions);
    let InfoWindow;
    InfoWindow = new kakao.maps.InfoWindow({
      position: new kakao.maps.LatLng(37.506295, 127.053664),
      content: `<div style="padding:7px;"><p>위워크 선릉2호점</p></div>`,
      removable: true,
    });
    InfoWindow.setMap(map);
  };
  const mapscript = () => {
    const { kakao } = window;
    let mapContainer = document.getElementById('map');
    let mapOptions = {
      center: new kakao.maps.LatLng(result[0].latitude, result[0].longitude),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(mapContainer, mapOptions);
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'zoom_changed', function () {});
    map.setCenter(mapOptions.center);
    let bounds = new kakao.maps.LatLngBounds();
    let i, InfoWindow;
    for (i = 0; i < result.length; i++) {
      // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
      InfoWindow = new kakao.maps.InfoWindow({
        position: new kakao.maps.LatLng(
          result[i].latitude,
          result[i].longitude
        ),
        content: `<div style="padding:7px;"><p>${result[i].stay_name}</p></div>`,
        removable: true,
      });
      InfoWindow.setMap(map);
      // LatLngBounds 객체에 좌표를 추가합니다
      bounds.extend(
        new kakao.maps.LatLng(result[i].latitude, result[i].longitude)
      );
    }
    function setBounds() {
      // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
      // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
      map.setBounds(bounds);
    }
    setBounds();
  };
  return (
    <Container>
      <MapContainer id="map">
        <StayDescription>
          <StayOutline>
            {!result ? (
              <>
                <StayTitle>위워크 선릉 2호점</StayTitle>
                <StayAddress>부트캠프</StayAddress>
                <StayEmail>지도 Loading...</StayEmail>
                <InstagramIconWrapper>
                  <InstagramIcon src={instagram} />
                </InstagramIconWrapper>
              </>
            ) : (
              <>
                <StayTitle>{location.stay_name}</StayTitle>
                <StayAddress>
                  {location.stay_adress.stay_region +
                    ' ' +
                    location.stay_adress.stay_district}
                </StayAddress>
                <StayEmail />
                <InstagramIconWrapper>
                  <InstagramIcon src={instagram} />
                </InstagramIconWrapper>
              </>
            )}
          </StayOutline>
        </StayDescription>
      </MapContainer>
    </Container>
  );
};
const Container = styled.div`
  ${props => props.theme.variables.flex('column', '', 'center')};
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
  bottom: 5%;
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
  margin: 20px 10px 40px 10px;
`;
const StayAddress = styled.p`
  margin: auto 10px auto 10px;
`;
const StayEmail = styled.p`
  margin: 20px 10px 20px 10px;
`;
const InstagramIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
`;
const InstagramIcon = styled.img`
  height: 25px;
`;
export default Map;
