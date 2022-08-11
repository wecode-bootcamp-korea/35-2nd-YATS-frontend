import React from 'react';
import SearchWhere from './SearchWhere';
import SearchWhen from './SearchWhen';
import styled from 'styled-components';

const Search = () => {
  return (
    <SearchContainer>
      <SearchWhere />
      <SearchWhen />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  ${props => props.theme.variables.flex('')}
  position: fixed;
  left: 40%;
`;
