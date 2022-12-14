import styled from 'styled-components';

export const FindListWrapper = styled.div`
  ${props => props.theme.variables.flex('', 'center', 'none')}
  min-height: 100vh;
  padding-top: 12vh;
  max-width: 1300px;
  margin: 0 auto;
`;

export const FindListBox = styled.div`
  ${props => props.theme.variables.flex('column', 'none')}
  width:100%
`;

export const SearchList = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
  width:100%;
  flex-wrap: wrap;
  position: relative;

  @media (max-width: 1068px) {
    ${props => props.theme.variables.flex('column', 'center', 'center')}
  } ;
`;

export const SearchListActive = styled.div`
  /* ${props => props.theme.variables.flex('', 'space-between', '')}
  width:100%; */
  ${props => props.theme.variables.flex('column', 'flex-start', 'flex-start')}
  width: 100%;
  flex-wrap: wrap;
  position: relative;
`;

export const SearchAreaAtive = styled.div`
  margin-top: 50px;
  position: absolute;
  width: 50%;
  right: 0px;
  height: 800px;
  border: 3px solid blue;
`;
