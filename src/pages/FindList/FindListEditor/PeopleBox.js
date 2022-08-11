import React from 'react';
import * as FindListStyle from './PeopleBox.style';

const PeopleBox = ({
  handleMenu,
  countAdultPeople,
  adultOnIncrease,
  adultOnDecrease,
  countChildPeople,
  ChildIncrease,
  ChildOnDecrease,
  handleAllPeople,
}) => {
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
          <FindListStyle.Adult>성인</FindListStyle.Adult>
          <FindListStyle.AdultPeople>
            <FindListStyle.AdultOnIncrease onClick={adultOnIncrease}>
              +
            </FindListStyle.AdultOnIncrease>
            <FindListStyle.AdultOnDecrease onClick={adultOnDecrease}>
              -
            </FindListStyle.AdultOnDecrease>
            {countAdultPeople}명
          </FindListStyle.AdultPeople>
        </FindListStyle.SecondComponentAdult>
        <FindListStyle.SecondComponentChild>
          <FindListStyle.Child>아동</FindListStyle.Child>
          <FindListStyle.ChildPeople>
            <FindListStyle.AdultOnIncrease onClick={ChildIncrease}>
              +
            </FindListStyle.AdultOnIncrease>
            <FindListStyle.AdultOnDecrease onClick={ChildOnDecrease}>
              -
            </FindListStyle.AdultOnDecrease>
            {countChildPeople}명
          </FindListStyle.ChildPeople>
        </FindListStyle.SecondComponentChild>
      </FindListStyle.PeopleBoxSecondComponent>

      <FindListStyle.PeopleBoxThirdComponent>
        <FindListStyle.Button
          onClick={e => {
            handleAllPeople();
            handleMenu(e, '');
          }}
        >
          적용하기
        </FindListStyle.Button>
      </FindListStyle.PeopleBoxThirdComponent>
    </FindListStyle.PeopleBoxContainer>
  );
};
export default PeopleBox;
