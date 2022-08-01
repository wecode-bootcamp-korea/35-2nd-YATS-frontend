import React from 'react';
import * as FindListStyle from './PeopleBox.style';

const PeopleBox = handleMenu => {
  console.log(handleMenu);
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
    </FindListStyle.PeopleBoxContainer>
  );
};
export default PeopleBox;
