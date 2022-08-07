import React, { useEffect } from 'react';
import * as FindListStyle from './searchAreaAtive.style';
import KakaoMapScript from './KakaoMapScript';

const SearchAreaAtive = () => {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <FindListStyle.SearchAreaAtive id="myMap">
      {/* <div id="map" /> */}
    </FindListStyle.SearchAreaAtive>
  );
};
export default SearchAreaAtive;
