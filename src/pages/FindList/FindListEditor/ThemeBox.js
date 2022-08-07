import React from 'react';
import * as FindListStyle from './ThemeBox.style';
import * as PeopleBox from './PeopleBox.style';
import * as StayBox from './StayBox.style';
import ThemeBoxLeftCheckBox from './ThemeBoxLeftCheckBox';
import ThemeBoxRightCheckBox from './ThemeBoxRightCheckBox';

const ThemeBox = ({
  handleMenu,
  ChoiceContainerLeftData,
  ChoiceContainerRightData,
  themeBoxCheckedItems,
  themeBoxCheckedItemHandler,
  themeBoxIsAllChecked,
  themeBoxIsAllCheckedHandler,
  handleThemeText,
}) => {
  return (
    <FindListStyle.ThemeBoxContainer>
      <PeopleBox.PeopleBoxFirstComponent>
        <PeopleBox.PeopleBoxFirstLeftComponent>
          테마
        </PeopleBox.PeopleBoxFirstLeftComponent>
        <PeopleBox.PeopleBoxFirstRightComponent
          src="./images/FindList/Close.png"
          onClick={e => handleMenu(e, '')}
        />
      </PeopleBox.PeopleBoxFirstComponent>
      <PeopleBox.PeopleBoxThirdComponent>
        <PeopleBox.Button
          onClick={e => {
            handleThemeText();
            handleMenu(e, '');
          }}
        >
          적용하기
        </PeopleBox.Button>
      </PeopleBox.PeopleBoxThirdComponent>

      <FindListStyle.ChoiceContainerAllWrapper>
        <StayBox.ChoiceContainerWrapper>
          <StayBox.ChoiceContainer>
            <StayBox.ChoiceContainerText>전체</StayBox.ChoiceContainerText>
            <StayBox.ChoiceContainerCheckBox
              type="checkbox"
              themeBoxIsAllChecked={themeBoxIsAllChecked}
              onChange={e => {
                themeBoxIsAllCheckedHandler(e);
              }}
            />
          </StayBox.ChoiceContainer>
          {ChoiceContainerLeftData.map(ChoiceContainerLeftData => (
            <ThemeBoxLeftCheckBox
              key={ChoiceContainerLeftData.id}
              ChoiceContainerLeftData={ChoiceContainerLeftData}
              themeBoxCheckedItemHandler={themeBoxCheckedItemHandler}
              themeBoxIsAllChecked={themeBoxIsAllChecked}
            />
          ))}
        </StayBox.ChoiceContainerWrapper>

        <StayBox.ChoiceContainerWrapper>
          {ChoiceContainerRightData.map(ChoiceContainerRightData => (
            <ThemeBoxRightCheckBox
              key={ChoiceContainerRightData.id}
              ChoiceContainerRightData={ChoiceContainerRightData}
              themeBoxCheckedItemHandler={themeBoxCheckedItemHandler}
              themeBoxIsAllChecked={themeBoxIsAllChecked}
            />
          ))}
        </StayBox.ChoiceContainerWrapper>
      </FindListStyle.ChoiceContainerAllWrapper>
    </FindListStyle.ThemeBoxContainer>
  );
};
export default ThemeBox;
