import React from 'react';
import StayBoxCheckBox from './StayBoxCheckBox';
import * as FindListStyle from './StayBox.style';
import * as PeopleBox from './PeopleBox.style';

const StayBox = ({
  handleMenu,
  stayBoxCheckedItems,
  stayBoxCheckedItemHandler,
  ChoiceContainerData,
  stayBoxIsAllChecked,
  stayBoxCAllCheckedHandler,
  handleStayText,
}) => {
  return (
    <FindListStyle.StayBoxContainer>
      <PeopleBox.PeopleBoxFirstComponent>
        <PeopleBox.PeopleBoxFirstLeftComponent>
          스테이 유형
        </PeopleBox.PeopleBoxFirstLeftComponent>
        <PeopleBox.PeopleBoxFirstRightComponent
          src="./images/FindList/Close.png"
          onClick={e => {
            handleMenu(e, '');
          }}
        />
      </PeopleBox.PeopleBoxFirstComponent>
      <PeopleBox.PeopleBoxThirdComponent>
        <PeopleBox.Button
          onClick={e => {
            handleStayText();
            console.log([...stayBoxCheckedItems]);
            handleMenu(e, '');
          }}
        >
          적용하기
        </PeopleBox.Button>
      </PeopleBox.PeopleBoxThirdComponent>
      <FindListStyle.ChoiceContainerWrapper>
        <FindListStyle.ChoiceContainer>
          <FindListStyle.ChoiceContainerText>
            전체
          </FindListStyle.ChoiceContainerText>
          <FindListStyle.ChoiceContainerCheckBox
            type="checkbox"
            stayBoxIsAllChecked={stayBoxIsAllChecked}
            onChange={e => {
              stayBoxCAllCheckedHandler(e);
            }}
          />
        </FindListStyle.ChoiceContainer>

        {ChoiceContainerData.map(ChoiceContainerData => (
          <StayBoxCheckBox
            key={ChoiceContainerData.id}
            stayBoxCheckedItemHandler={stayBoxCheckedItemHandler}
            ChoiceContainerData={ChoiceContainerData}
            stayBoxIsAllChecked={stayBoxIsAllChecked}
          />
        ))}
      </FindListStyle.ChoiceContainerWrapper>
    </FindListStyle.StayBoxContainer>
  );
};
export default StayBox;
