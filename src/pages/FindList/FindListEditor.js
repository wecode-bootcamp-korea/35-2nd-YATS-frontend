import React, { useState, useEffect } from 'react';
import DateContainer from './FindListEditor/DateContainer';
import * as FindListStyle from './FindListEditor.style';
import 'react-datepicker/dist/react-datepicker.css';
import PeopleBox from './FindListEditor/PeopleBox';
import PriceBox from './FindListEditor/PriceBox';
import StayBox from './FindListEditor/StayBox';
import ThemeBox from './FindListEditor/ThemeBox';
import PeopleText from './FindListEditor/FindListText/PeopleText';
import PriceText from './FindListEditor/FindListText/PriseText';
import ThemeText from './FindListEditor/FindListText/ThemeText';
import StayText from './FindListEditor/FindListText/StayText';
import FindListModal from './FindListEditor/FindListModal/FindListModal';

const ProductEditor = ({
  onChange,
  startDate,
  endDate,
  currentMenu,
  handleMenu,
  countAdultPeople,
  adultOnIncrease,
  adultOnDecrease,
  countChildPeople,
  ChildIncrease,
  ChildOnDecrease,
  allPeople,
  handleAllPeople,
  valuetext,
  value,
  handleChange,
  allPrice,
  handleAllPrice,
  areaData,
  handleAreaData,
  stayBoxCheckedItems,
  stayBoxCheckedItemHandler,
  ChoiceContainerData,
  stayBoxIsAllChecked,
  stayBoxCAllCheckedHandler,
  stayText,
  handleStayText,
  ChoiceContainerLeftData,
  ChoiceContainerRightData,
  themeBoxCheckedItems,
  themeBoxCheckedItemHandler,
  themeBoxIsAllChecked,
  themeBoxIsAllCheckedHandler,
  themeText,
  handleThemeText,
  findAreaActiveHandler,
  fiterListButtonHandler,
  fiterListButton,
  FilterListButtonData,
}) => {
  const [test1, setTest1] = useState('체크인');
  useEffect(() => {
    if (startDate !== null) {
      setTest1(
        `${startDate.getUTCFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
      );
    }
  }, [startDate]);

  const [test2, setTest2] = useState('체크아웃');
  useEffect(() => {
    if (endDate !== null) {
      setTest2(
        `${endDate.getUTCFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
      );
    }
  }, [endDate]);

  const FindListButtonData = [
    {
      id: 1,
      value: '인원',
      valueComponent: (
        <PeopleText allPeople={allPeople} handleMenu={handleMenu} />
      ),
      component: (
        <PeopleBox
          handleMenu={handleMenu}
          countAdultPeople={countAdultPeople}
          adultOnIncrease={adultOnIncrease}
          adultOnDecrease={adultOnDecrease}
          countChildPeople={countChildPeople}
          ChildIncrease={ChildIncrease}
          ChildOnDecrease={ChildOnDecrease}
          handleAllPeople={handleAllPeople}
        />
      ),
    },
    {
      id: 2,
      value: '가격 범위',
      valueComponent: <PriceText handleMenu={handleMenu} allPrice={allPrice} />,
      component: (
        <PriceBox
          handleMenu={handleMenu}
          valuetext={valuetext}
          value={value}
          handleChange={handleChange}
          handleAllPrice={handleAllPrice}
        />
      ),
    },
    {
      id: 3,
      value: '스테이 유형',
      valueComponent: <StayText handleMenu={handleMenu} stayText={stayText} />,
      component: (
        <StayBox
          handleMenu={handleMenu}
          stayBoxCheckedItems={stayBoxCheckedItems}
          stayBoxCheckedItemHandler={stayBoxCheckedItemHandler}
          ChoiceContainerData={ChoiceContainerData}
          stayBoxIsAllChecked={stayBoxIsAllChecked}
          stayBoxCAllCheckedHandler={stayBoxCAllCheckedHandler}
          handleStayText={handleStayText}
        />
      ),
    },
    {
      id: 4,
      value: '테마',
      valueComponent: (
        <ThemeText handleMenu={handleMenu} themeText={themeText} />
      ),
      component: (
        <ThemeBox
          handleMenu={handleMenu}
          ChoiceContainerLeftData={ChoiceContainerLeftData}
          ChoiceContainerRightData={ChoiceContainerRightData}
          themeBoxCheckedItems={themeBoxCheckedItems}
          themeBoxCheckedItemHandler={themeBoxCheckedItemHandler}
          themeBoxIsAllChecked={themeBoxIsAllChecked}
          themeBoxIsAllCheckedHandler={themeBoxIsAllCheckedHandler}
          handleThemeText={handleThemeText}
        />
      ),
    },
  ];

  return (
    <>
      <FindListStyle.FirstTitle>
        F &nbsp; I &nbsp;N &nbsp;D &ensp;&ensp; S &nbsp;T &nbsp;A &nbsp;Y
      </FindListStyle.FirstTitle>
      <FindListStyle.SecondTitle>
        머무는 것 자체로 여행이 되는 공간
      </FindListStyle.SecondTitle>
      {/* {testData.map(item => {
        return <div key={item.id}>{item.component}</div>;
      })} */}
      <FindListStyle.FirstFindList>
        <FindListStyle.FirstFindItem>
          <FindListStyle.ChoiceTitle>여행지/숙소</FindListStyle.ChoiceTitle>
          <FindListStyle.TravelInput
            onClick={e => handleMenu(e, '여행지/숙소')}
          />
          <FindListStyle.Country onClick={e => handleMenu(e, '국내전체')}>
            {areaData}
          </FindListStyle.Country>
          {currentMenu === '국내전체' && (
            <FindListModal
              handleMenu={handleMenu}
              handleAreaData={handleAreaData}
            />
          )}
          <FindListStyle.ChoiceTitle>체크인</FindListStyle.ChoiceTitle>
          <FindListStyle.DateContainer onClick={e => handleMenu(e, '체크아웃')}>
            <FindListStyle.Date onClick={e => handleMenu(e, '체크아웃')}>
              {`${test1}` === null ? `${test1}` : `${test1}`}
            </FindListStyle.Date>
            <FindListStyle.DateDownArow
              src="./images/FindList/DownArrow.png"
              alt="DownArrow"
            />
          </FindListStyle.DateContainer>
          <FindListStyle.ChoiceTitle>체크아웃</FindListStyle.ChoiceTitle>
          <FindListStyle.DateContainer onClick={e => handleMenu(e, '체크아웃')}>
            <FindListStyle.Date onClick={e => handleMenu(e, '체크아웃')}>
              {`${test2}` === null ? `${test2}` : `${test2}`}
            </FindListStyle.Date>
            <FindListStyle.DateDownArow
              src="./images/FindList/DownArrow.png"
              alt="DownArrow"
            />
            {currentMenu === '체크아웃' && (
              <DateContainer
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
              />
            )}
          </FindListStyle.DateContainer>
        </FindListStyle.FirstFindItem>
        <FindListStyle.ReCycleButton
          src="./images/FindList/ReCycle.png"
          alt="ReCycle"
          onClick={e => {
            handleMenu(e, '초기화');
          }}
        />
      </FindListStyle.FirstFindList>
      <FindListStyle.FirstFindList>
        <FindListStyle.FirstFindItem>
          {FindListButtonData.map(buttonData => {
            const isCurrentMenu = currentMenu === buttonData.value;

            return (
              <FindListStyle.ChoiceButton
                key={buttonData.id}
                onClick={e => handleMenu(e, buttonData.value)}
              >
                {buttonData.valueComponent}
                <FindListStyle.DownArow
                  src="./images/FindList/DownArrow.png"
                  alt="DownArrow"
                />
                {isCurrentMenu && buttonData.component}
              </FindListStyle.ChoiceButton>
            );
          })}
        </FindListStyle.FirstFindItem>
        <FindListStyle.LocationPinIconButton
          src="./images/FindList/LocationPinIcon.png"
          alt="LocationPinIcon"
          onClick={e => {
            findAreaActiveHandler();
          }}
        />
      </FindListStyle.FirstFindList>
      <FindListStyle.SecondFindList>
        <FindListStyle.SearchButton>
          SEARCH&ensp;&#10230;
        </FindListStyle.SearchButton>
      </FindListStyle.SecondFindList>
      <FindListStyle.ThirdFindList>
        {FilterListButtonData.map(buttonData => {
          const isCurrentMenu = fiterListButton === buttonData.value;
          console.log(isCurrentMenu);
          return (
            <div key={buttonData.id}>
              {isCurrentMenu ? (
                <FindListStyle.FilterListButtonAtive
                  onClick={() => {
                    fiterListButtonHandler(buttonData.value, buttonData.id);
                  }}
                >
                  &bull;&nbsp;{buttonData.value}
                </FindListStyle.FilterListButtonAtive>
              ) : (
                <FindListStyle.FilterListButton
                  onClick={() => {
                    fiterListButtonHandler(buttonData.value, buttonData.id);
                  }}
                >
                  &bull;&nbsp;{buttonData.value}
                </FindListStyle.FilterListButton>
              )}
            </div>
          );
        })}
      </FindListStyle.ThirdFindList>
    </>
  );
};

export default ProductEditor;
