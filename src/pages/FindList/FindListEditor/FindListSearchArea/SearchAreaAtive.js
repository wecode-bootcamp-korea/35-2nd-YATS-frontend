import React, { useEffect, useRef } from 'react';
import * as FindListStyle from './searchAreaAtive.style';
//import KakaoMapScript from './KakaoMapScript';

const { kakao } = window;

const SearchAreaAtive = () => {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  const container = useRef();
  const KakaoMapScript = () => {
    let options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new kakao.maps.Map(container.current, options);
  };
  return <FindListStyle.SearchAreaAtive ref={container} />;
};
export default SearchAreaAtive;
