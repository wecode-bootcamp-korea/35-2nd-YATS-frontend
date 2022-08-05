import React from 'react';
import * as FindListStyle from './PeopleBox.style';

const PeopleBox = ({ handleMenu }) => {
  return (
    <FindListStyle.PeopleBoxContainer>
      <FindListStyle.PeopleBoxFirstComponent>
        <FindListStyle.PeopleBoxFirstLeftComponent>
          인원
        </FindListStyle.PeopleBoxFirstLeftComponent>
        <FindListStyle.PeopleBoxFirstRightComponent
          src="./images/FindList/Close.png"
          onClick={e => handleMenu(e, '')}
        />
      </FindListStyle.PeopleBoxFirstComponent>
      <FindListStyle.PeopleBoxSecondComponent>
        <FindListStyle.SecondComponentAdult>
          성인
        </FindListStyle.SecondComponentAdult>
        <FindListStyle.SecondComponentChild>
          아동
        </FindListStyle.SecondComponentChild>
      </FindListStyle.PeopleBoxSecondComponent>
      <FindListStyle.Button>적용하기</FindListStyle.Button>
    </FindListStyle.PeopleBoxContainer>
  );
};
export default PeopleBox;
