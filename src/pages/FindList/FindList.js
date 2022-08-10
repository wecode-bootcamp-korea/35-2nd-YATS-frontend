import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FindListEditor from './FindListEditor';
import SearchComponent from './SearchComponent';
import PaginationComponent from './PaginationComponent';
import { ChoiceContainerData } from './FilterListdata/ChoiceContainerData';
import { ChoiceContainerLeftData } from './FilterListdata/ChoiceContainerLeftData';
import { ChoiceContainerRightData } from './FilterListdata/ChoiceContainerRightData';
import { FilterListButtonData } from './FilterListdata/FilterListButtonData';
import * as FindListStyle from './FindList.style';
import SearchAreaAtive from './FindListEditor/FindListSearchArea/SearchAreaAtive';

const FindList = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.5.203:8000/findstay`, {
      method: 'Get',
    })
      .then(res => res.json())
      .then(result => {
        setTotal(result.totalcount);
        setFindListData(result.result);
      });
  }, []);
  const [total, setTotal] = useState(0);

  const [findListData, setFindListData] = useState([]);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 6;

  useEffect(() => {
    fetch(`http://10.58.5.203:8000/findstay?offset=${offset}`, {
      method: 'Get',
    })
      .then(res => res.json())
      .then(result => {
        setTotal(result.totalcount);
        setFindListData(result.result);
      });
    // navigate(`/FindList?${offset=${offset}}${sort=${sort}}`);
  }, [page]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [currentMenu, setCurrentMenu] = useState('');

  const handleMenu = (e, menu) => {
    if (e.currentTarget !== e.target) return;

    stayBoxCheckedItems.clear();
    setStayBoxCheckedItems(stayBoxCheckedItems);
    setStayBoxIsAllChecked(false);
    themeBoxCheckedItems.clear();
    setThemeBoxCheckedItems(themeBoxCheckedItems);
    setThemeBoxIsAllChecked(false);

    if (currentMenu === menu) {
      setCurrentMenu('');
    } else {
      setCurrentMenu(menu);
    }
  };

  const [countAdultPeople, setCountAdultPeople] = useState(0);

  const adultOnIncrease = () => {
    setCountAdultPeople(countAdultPeople + 1);
  };
  const adultOnDecrease = () => {
    if (countAdultPeople !== 0) {
      setCountAdultPeople(countAdultPeople - 1);
    }
  };

  const [countChildPeople, setCountChildPeople] = useState(0);

  const ChildIncrease = () => {
    setCountChildPeople(countChildPeople + 1);
  };
  const ChildOnDecrease = () => {
    if (countChildPeople !== 0) {
      setCountChildPeople(countChildPeople - 1);
    }
  };

  const [allPeople, setAllPeople] = useState('인원');

  const handleAllPeople = () => {
    if (countAdultPeople !== 0 || countChildPeople !== 0) {
      setAllPeople(`${countAdultPeople + countChildPeople}명`);
    } else setAllPeople('인원');
  };

  const checkDate =
    startDate && endDate
      ? `&checkin=${startDate?.getUTCFullYear()}-${startDate?.getMonth()}-${startDate?.getDate()}&checkout=${endDate.getUTCFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
      : '';

  useEffect(() => {
    if (endDate !== null && startDate !== null) {
      setCurrentMenu('');

      fetch(
        `http://10.58.5.203:8000/findstay?checkin=${startDate.getUTCFullYear()}-${startDate.getMonth()}-${startDate.getDate()}&checkout=${endDate.getUTCFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`,
        {
          method: 'Get',
        }
      )
        .then(res => res.json())
        .then(result => {
          console.log(result);
          setTotal(result.totalcount);
          setFindListData(result.result);
        });
      console.log(sort);
      navigate(`/FindList?${checkDate}&sort=${sort}`);
    }
    // navigate(`/FindList?${offset=${offset}}${sort=${sort}}`);
  }, [startDate && endDate]);

  function valuetext(value) {
    return `${value}°C`;
  }

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [allPrice, setAllPrice] = useState('가격 범위');

  const handleAllPrice = () => {
    setAllPrice(`${value[0]}만원~${value[1]}만원`);
  };

  const [areaData, setAreaData] = useState('국내전체');

  const handleAreaData = data => {
    setAreaData(data);
  };

  // const [data, setData] = useState({
  //   adult: 0,
  //   baby: 0,
  //   min: 0,
  //   max: 0,
  //   stay: [],
  //   theme: [],
  // });

  const [stayBoxCheckedItems, setStayBoxCheckedItems] = useState(new Set());

  const stayBoxCheckedItemHandler = (id, isChecked) => {
    if (isChecked) {
      stayBoxCheckedItems.add(id);
      setStayBoxCheckedItems(stayBoxCheckedItems);
    } else if (!isChecked && stayBoxCheckedItems.has(id)) {
      stayBoxCheckedItems.delete(id);
      setStayBoxCheckedItems(stayBoxCheckedItems);
    }
  };

  const [stayBoxIsAllChecked, setStayBoxIsAllChecked] = useState(false);

  const stayBoxCAllCheckedHandler = isChecked => {
    if (!stayBoxIsAllChecked) {
      setStayBoxCheckedItems(new Set(ChoiceContainerData.map(({ id }) => id)));
      setStayBoxIsAllChecked(true);
    } else {
      stayBoxCheckedItems.clear();
      setStayBoxCheckedItems(stayBoxCheckedItems);
      setStayBoxIsAllChecked(false);
    }
  };

  const [stayText, setStayText] = useState('스테이 유형');

  const handleStayText = () => {
    if ([...stayBoxCheckedItems].length !== 0) {
      setStayText(`${[...stayBoxCheckedItems]}번을 선택`);
    } else {
      setStayText('스테이 유형');
    }
  };

  const [themeBoxCheckedItems, setThemeBoxCheckedItems] = useState(new Set());

  const themeBoxCheckedItemHandler = (id, isChecked) => {
    if (isChecked) {
      themeBoxCheckedItems.add(id);
      setThemeBoxCheckedItems(themeBoxCheckedItems);
    } else if (
      !isChecked &&
      (ChoiceContainerLeftData.has(id) || ChoiceContainerRightData.has(id))
    ) {
      themeBoxCheckedItems.delete(id);
      setThemeBoxCheckedItems(themeBoxCheckedItems);
    }
  };

  const [themeBoxIsAllChecked, setThemeBoxIsAllChecked] = useState(false);

  const themeBoxIsAllCheckedHandler = isChecked => {
    if (!themeBoxIsAllChecked) {
      setThemeBoxCheckedItems(
        new Set(ChoiceContainerLeftData.map(({ id }) => id)).add(
          ChoiceContainerRightData.map(({ id }) => id)
        )
      );
      // .add(
      //   ChoiceContainerRightData.map(({ id }) => id)
      // )

      // setThemeBoxCheckedItems(
      //   new Set(ChoiceContainerRightData.map(({ id }) => id))
      // );
      setThemeBoxIsAllChecked(true);
    } else {
      themeBoxCheckedItems.clear();
      setThemeBoxCheckedItems(themeBoxCheckedItems);
      setThemeBoxIsAllChecked(false);
    }
  };

  const [themeText, setThemeText] = useState('테마');

  const handleThemeText = () => {
    const arr = [];
    const newArr = arr.concat(...themeBoxCheckedItems);
    console.log(newArr, '송신해야하는값입니다');
    if ([...themeBoxCheckedItems].length !== 0) {
      setThemeText(`${[...newArr]}번을 선택`);
      console.log(newArr);
    } else {
      setThemeText('테마');
    }
  };

  const [area, setArea] = useState(true);

  const findAreaActiveHandler = () => {
    if (area === true) {
      setArea(false);
    } else {
      setArea(true);
    }
  };

  const [fiterListButton, setFiterListButton] = useState('');
  const [sort, setSort] = useState('');
  // const checkSort = sort ? `sort=${sort}` : '';

  const fiterListButtonHandler = (menu, id, sort) => {
    if (fiterListButton === menu) {
      setFiterListButton('');
    } else {
      setFiterListButton(menu);
    }
    setSort(sort);
    fetch(`http://10.58.5.203:8000/findstay?sort=${sort}`, {
      method: 'Get',
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setTotal(result.totalcount);
        setFindListData(result.result);
      });
    //console.log('checkSort', checkSort);

    navigate(`/FindList?${checkDate}&sort=${sort}`);
  };

  const [tavelInputText, setTavelInputText] = useState('');

  const travelInputOnChange = e => {
    console.log(tavelInputText);
    setTavelInputText(e.target.value);
  };

  const latitudeLongitudeHandle = e => {
    console.log(e);
  };

  return (
    <FindListStyle.FindListWrapper>
      <FindListStyle.FindListBox>
        <FindListEditor
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          currentMenu={currentMenu}
          handleMenu={handleMenu}
          countAdultPeople={countAdultPeople}
          adultOnIncrease={adultOnIncrease}
          adultOnDecrease={adultOnDecrease}
          countChildPeople={countChildPeople}
          ChildIncrease={ChildIncrease}
          ChildOnDecrease={ChildOnDecrease}
          allPeople={allPeople}
          handleAllPeople={handleAllPeople}
          valuetext={valuetext}
          value={value}
          handleChange={handleChange}
          allPrice={allPrice}
          handleAllPrice={handleAllPrice}
          areaData={areaData}
          handleAreaData={handleAreaData}
          stayBoxCheckedItems={stayBoxCheckedItems}
          stayBoxCheckedItemHandler={stayBoxCheckedItemHandler}
          ChoiceContainerData={ChoiceContainerData}
          stayBoxIsAllChecked={stayBoxIsAllChecked}
          stayBoxCAllCheckedHandler={stayBoxCAllCheckedHandler}
          stayText={stayText}
          handleStayText={handleStayText}
          ChoiceContainerLeftData={ChoiceContainerLeftData}
          ChoiceContainerRightData={ChoiceContainerRightData}
          themeBoxCheckedItems={themeBoxCheckedItems}
          themeBoxCheckedItemHandler={themeBoxCheckedItemHandler}
          themeBoxIsAllChecked={themeBoxIsAllChecked}
          themeBoxIsAllCheckedHandler={themeBoxIsAllCheckedHandler}
          themeText={themeText}
          handleThemeText={handleThemeText}
          findAreaActiveHandler={findAreaActiveHandler}
          fiterListButtonHandler={fiterListButtonHandler}
          fiterListButton={fiterListButton}
          FilterListButtonData={FilterListButtonData}
          tavelInputText={tavelInputText}
          travelInputOnChange={travelInputOnChange}
        />

        {area === true ? (
          <FindListStyle.SearchList>
            {findListData &&
              findListData.map(findList => {
                return (
                  <SearchComponent
                    findList={findList}
                    key={findList.stay_id}
                    area={area}
                  />
                );
              })}
          </FindListStyle.SearchList>
        ) : (
          <FindListStyle.SearchListActive>
            {findListData &&
              findListData.map(findList => {
                return (
                  <SearchComponent
                    findList={findList}
                    key={findList.stay_id}
                    area={area}
                    location={location}
                    setLocation={setLocation}
                    latitudeLongitudeHandle={latitudeLongitudeHandle}
                  />
                );
              })}
            <SearchAreaAtive />
          </FindListStyle.SearchListActive>
        )}

        <PaginationComponent
          total={total}
          limit={6}
          page={page}
          setPage={setPage}
        />
      </FindListStyle.FindListBox>
    </FindListStyle.FindListWrapper>
  );
};
export default FindList;
