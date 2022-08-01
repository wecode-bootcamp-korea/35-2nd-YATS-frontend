import React, { useState, useEffect } from 'react';
import FindListEditor from './FindListEditor';
import SearchComponent from './SearchComponent';
import PaginationComponent from './PaginationComponent';
import * as FindListStyle from './FindList.style';
//import ReCycle from '../../images/ReCycle.png';

const FindList = () => {
  const [findListData, setFindListData] = useState([]);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;

  useEffect(() => {
    fetch('/data/FindListData.json')
      .then(res => res.json())
      .then(result => {
        setFindListData(result);
      });
  }, []);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <FindListStyle.FindListWrapper>
      <FindListStyle.FindListBox>
        <FindListEditor
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
        />
        <FindListStyle.SearchList>
          {findListData.slice(offset, offset + 10).map(findList => {
            return <SearchComponent findList={findList} key={findList.id} />;
          })}
        </FindListStyle.SearchList>
        <PaginationComponent
          total={findListData.length}
          limit={10}
          page={page}
          setPage={setPage}
        />
      </FindListStyle.FindListBox>
    </FindListStyle.FindListWrapper>
  );
};
export default FindList;
