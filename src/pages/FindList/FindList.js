import React, { useState, useEffect } from 'react';
//import { useSearchParams, useNavigate } from 'react';
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
  const goToStayDetail = e => {
    console.log(e);
    navigate(`/StayDetail/${e}`);
  };
  //const category = useSearchParams.get('category');
  //  navigate('?category=${category}');
  // useLocation / useSearchParams
  const [location, setLocation] = useState([]);

  // 래영 : fetch는 하나만 써도 됨. 근데 useEffect의 의존성 배열에 바뀌는 state들 전부 담아서
  // 걔네들 바뀔 때마다 그 state들로 조합한 쿼리 파라미터 변수로 fetch 요청하면 됨

  // const queryParameter = 'state의 조합으로 쿼리 파라미터 형태 만들기';

  // useEffect(() => {
  //   fetch(`${API}/findstay?${queryParameter}`)...
  // }, ['모든', '옵션', 'state들']);

  useEffect(() => {
    fetch(`http://10.58.1.45:8000/findstay`, {
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
    fetch(`http://10.58.1.45:8000/findstay?offset=${offset}`, {
      method: 'Get',
    })
      .then(res => res.json())
      .then(result => {
        setTotal(result.totalcount);
        setFindListData(result.result);
      });
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

  const checkAllPeople =
    countAdultPeople + countChildPeople > 0
      ? `&people_cnt=${countAdultPeople + countChildPeople}`
      : '';

  const handleAllPeople = () => {
    if (countAdultPeople !== 0 || countChildPeople !== 0) {
      setAllPeople(`${countAdultPeople + countChildPeople}명`);
    } else setAllPeople('인원');
    fetch(
      `http://10.58.1.45:8000/findstay?${checkTavelInputText}${checkDate}${checkSort}${checkAreaData}${checkAllPeople}${checkTavelValue}${checkTavelStayText}${checkTavelThemeText}`,
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
  };

  const checkDate =
    startDate && endDate
      ? `&checkin=${startDate?.getUTCFullYear()}-${startDate?.getMonth()}-${startDate?.getDate()}&checkout=${endDate.getUTCFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
      : '';

  useEffect(() => {
    if (endDate !== null && startDate !== null) {
      setCurrentMenu('');

      fetch(
        `http://10.58.1.45:8000/findstay?${checkTavelInputText}${checkDate}${checkSort}${checkAreaData}${checkAllPeople}${checkTavelValue}${checkTavelStayText}${checkTavelThemeText}`,
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
      //navigate(`/FindList?${checkDate}&sort=${sort}`);
    }
  }, [startDate && endDate]);

  function valuetext(value) {
    return `${value}°C`;
  }

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkTavelValue = !(value === React.useState([20, 37]))
    ? `&max_price=${value[1]}0000&min_price=${value[0]}0000`
    : '';

  const [allPrice, setAllPrice] = useState('가격 범위');

  const handleAllPrice = () => {
    setAllPrice(`${value[0]}만원~${value[1]}만원`);
    fetch(
      `http://10.58.1.45:8000/findstay?${checkTavelInputText}${checkDate}${checkSort}${checkAreaData}${checkAllPeople}${checkTavelValue}${checkTavelStayText}${checkTavelThemeText}`,
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
  };

  const [areaData, setAreaData] = useState('국내전체');

  const checkAreaData = areaData ? `&region=${areaData}` : '';

  const handleAreaData = data => {
    console.log(data);
    setAreaData(data);
    fetch(
      `http://10.58.1.45:8000/findstay?${checkTavelInputText}${checkDate}${checkSort}${checkAreaData}${checkAllPeople}${checkTavelValue}${checkTavelStayText}${checkTavelThemeText}`,
      {
        method: 'Get',
      }
    )
      .then(res => res.json())
      .then(result => {
        setTotal(result.totalcount);
        setFindListData(result.result);
      });
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

  const choiceStayData = [...stayBoxCheckedItems].map(Data => {
    if (Data === 1) {
      return (Data = '&stay_type=게스트하우스');
    } else if (Data === 2) {
      return (Data = '&stay_type=렌탈하우스');
    } else if (Data === 3) {
      return (Data = '&stay_type=펜션');
    } else if (Data === 4) {
      return (Data = '&stay_type=한옥');
    } else if (Data === 5) {
      return (Data = '&stay_type=캠핑&아웃도어');
    } else if (Data === 6) {
      return (Data = '&stay_type=호스텔');
    } else if (Data === 7) {
      return (Data = '&stay_type=리조트');
    } else if (Data === 8) {
      return (Data = '&stay_type=민박');
    } else if (Data === 9) {
      return (Data = '&stay_type=호텔');
    }
    let result = '';
    result += Data;
    return `${result}`;
  });

  const checkTavelStayText = !(stayText === '스테이 유형')
    ? `${choiceStayData[0]}${choiceStayData[1]}${choiceStayData[2]}${choiceStayData[3]}${choiceStayData[4]}${choiceStayData[5]}${choiceStayData[6]}${choiceStayData[7]}${choiceStayData[8]}${choiceStayData[9]}`
    : '';

  const handleStayText = () => {
    if ([...stayBoxCheckedItems].length !== 0) {
      setStayText(`${[...stayBoxCheckedItems]}번을 선택`);

      fetch(
        `http://10.58.1.45:8000/findstay?${checkTavelInputText}${checkDate}${checkSort}${checkAreaData}${checkAllPeople}${checkTavelValue}${checkTavelStayText}${checkTavelThemeText}`,
        {
          method: 'Get',
        }
      )
        .then(res => res.json())
        .then(result => {
          setTotal(result.totalcount);
          setFindListData(result.result);
        });
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

  const arr = [];
  const newArr = arr.concat(...themeBoxCheckedItems);

  const choiceThemeData = newArr.map(Data => {
    if (Data === 1) {
      return (Data = '&themes=돌집');
    } else if (Data === 2) {
      return (Data = '&themes=유리온실');
    } else if (Data === 3) {
      return (Data = '&themes=마당');
    } else if (Data === 4) {
      return (Data = '&themes=노천탕');
    } else if (Data === 5) {
      return (Data = '&themes=정원');
    } else if (Data === 6) {
      return (Data = '&themes=풍경');
    } else if (Data === 7) {
      return (Data = '&themes=옥상');
    }
    let result = '';
    result += Data;
    return `${result}`;
  });

  const checkTavelThemeText = !(themeText === '테마')
    ? `${choiceThemeData[0]}${choiceThemeData[1]}${choiceThemeData[2]}${choiceThemeData[3]}${choiceThemeData[4]}${choiceThemeData[5]}${choiceThemeData[6]}${choiceThemeData[7]}`
    : '';

  const handleThemeText = () => {
    console.log(choiceThemeData[0], choiceThemeData[1], '송신해야하는값입니다');
    if ([...themeBoxCheckedItems].length !== 0) {
      setThemeText(`${[...newArr]}번을 선택`);
      console.log(newArr);
      fetch(
        `http://10.58.1.45:8000/findstay?${checkTavelInputText}${checkDate}${checkSort}${checkAreaData}${checkAllPeople}${checkTavelValue}${checkTavelStayText}${checkTavelThemeText}`,
        {
          method: 'Get',
        }
      )
        .then(res => res.json())
        .then(result => {
          setTotal(result.totalcount);
          setFindListData(result.result);
        });
    } else {
      setThemeText('테마');
    }
  };

  const [area, setArea] = useState(true);

  const findAreaActiveHandler = () => {
    setArea(!area);
    // if (area === true) {
    //   setArea(false);
    // } else {
    //   setArea(true);
    // }
  };

  const [fiterListButton, setFiterListButton] = useState('');
  const [sort, setSort] = useState('');
  const checkSort = sort ? `&sort=${sort}` : '';

  const fiterListButtonHandler = (menu, id, sort) => {
    if (fiterListButton === menu) {
      setFiterListButton('');
    } else {
      setFiterListButton(menu);
    }
    setSort(sort);

    //console.log('checkSort', checkSort);

    // navigate(`/FindList?${checkDate}${checkSort}`);
  };

  useEffect(() => {
    if (!sort) return;
    fetch(
      `http://10.58.1.45:8000/findstay?${checkTavelInputText}${checkDate}${checkSort}${checkAreaData}${checkAllPeople}${checkTavelValue}${checkTavelStayText}${checkTavelThemeText}`,
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
  }, [sort]);

  const [tavelInputText, setTavelInputText] = useState('');

  const travelInputOnChange = e => {
    console.log(tavelInputText);
    setTavelInputText(e.target.value);
  };

  const checkTavelInputText = tavelInputText ? `&search=${tavelInputText}` : '';

  const travelInputHandle = () => {
    fetch(
      `http://10.58.1.45:8000/findstay?${checkTavelInputText}${checkDate}${checkSort}${checkAreaData}${checkAllPeople}${checkTavelValue}${checkTavelStayText}${checkTavelThemeText}`,
      {
        method: 'Get',
      }
    )
      .then(res => res.json())
      .then(result => {
        setTotal(result.totalcount);
        setFindListData(result.result);
      });
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
          travelInputHandle={travelInputHandle}
        />

        {area ? (
          <FindListStyle.SearchList>
            {findListData.map(findList => {
              return (
                <SearchComponent
                  findList={findList}
                  key={findList.stay_id}
                  area={area}
                  goToStayDetail={goToStayDetail}
                />
              );
            })}
          </FindListStyle.SearchList>
        ) : (
          <FindListStyle.SearchListActive>
            {findListData.map(findList => {
              return (
                <SearchComponent
                  findList={findList}
                  key={findList.stay_id}
                  area={area}
                  location={location}
                  setLocation={setLocation}
                  latitudeLongitudeHandle={latitudeLongitudeHandle}
                  goToStayDetail={goToStayDetail}
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
