import styled from 'styled-components';

export const FirstTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 6px;
`;

export const SecondTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 90px;
  border-bottom: 3px solid black;
  text-align: center;
  width: 100%;
`;

export const FirstFindList = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  gap: 1em;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #e4e4e4;
`;

export const FirstFindItem = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')}
  flex-wrap: wrap;

  .react-datepicker-wrapper {
    width: 165px;

    input {
      width: 100%;
    }
  }
`;

export const TravelInput = styled.input`
  width: 200px;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  padding-left: 15px;
  :focus {
    outline: none;
  }
  margin: 0 0 0 10px;
`;

export const DownArow = styled.img`
  position: absolute;
  top: 7px;
  right: 8px;
  width: 20px;
  height: 20px;
`;

export const Country = styled.button`
  ${props => props.theme.variables.flex('', '')}
  width: 140px;
  height: 36px;
  background-color: #f2f2f2;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 13px;
  border: none;
  margin: 0 50px 0 15px;
  cursor: pointer;
`;

export const ChoiceTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

export const DateContainer = styled.div`
  position: relative;
`;

export const Date = styled.div`
  ${props => props.theme.variables.flex('', '')}
  width: 164px;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  padding-left: 15px;
  margin: 0px 30px 0px 10px;
`;

export const DateDownArow = styled.img`
  position: absolute;
  top: 7px;
  right: 38px;
  width: 20px;
  height: 20px;
`;

export const ReCycleButton = styled.img`
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  cursor: pointer;
  margin: 0px;
`;

export const ChoiceButton = styled.button`
  width: 200px;
  height: 36px;
  text-align: left;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  cursor: pointer;
  margin: 0 10px 0 0;
  position: relative;
`;

export const LocationPinIconButton = styled.img`
  width: 40px;
  height: 40px;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
  cursor: pointer;
`;

export const SecondFindList = styled.div`
  margin-top: 36px;
`;

export const SearchButton = styled.button`
  color: white;
  background-color: black;
  width: 138.95px;
  height: 36px;
  font-size: 14px;
  padding: 0px 20px 0px 25px;
  font-weight: 600;
  border-radius: 25px;
  cursor: pointer;
`;

export const ThirdFindList = styled.div`
  height: 150px;
  width: 100%;
  ${props => props.theme.variables.flex('row', 'flex-end', 'flex-end')};
  padding: 0px 0px 8px 0px;
  border-bottom: 2px solid black;
`;

export const FilterListButton = styled.button`
  color: rgb(153, 153, 153);
  border: none;
  background: none;
  font-weight: 500;
  cursor: pointer;
`;
