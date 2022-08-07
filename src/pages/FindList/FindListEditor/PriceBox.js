import React from 'react';
import * as PeopleBox from './PeopleBox.style';
import * as FindListStyle from './PriceBox.style';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// function valuetext(value) {
//   return `${value}°C`;
// }

const PriceBox = ({
  handleMenu,
  valuetext,
  value,
  handleChange,
  handleAllPrice,
}) => {
  // const [value, setValue] = React.useState([20, 37]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <FindListStyle.PriceBoxContainer>
      <PeopleBox.PeopleBoxFirstComponent>
        <PeopleBox.PeopleBoxFirstLeftComponent>
          가격범위
        </PeopleBox.PeopleBoxFirstLeftComponent>
        <PeopleBox.PeopleBoxFirstRightComponent
          src="./images/FindList/Close.png"
          onClick={e => handleMenu(e, '')}
        />
      </PeopleBox.PeopleBoxFirstComponent>
      <PeopleBox.PeopleBoxSecondComponent>
        <Box sx={{ width: 260 }}>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </PeopleBox.PeopleBoxSecondComponent>
      <FindListStyle.PriceDetailContainer>
        <FindListStyle.HighNRowPrice>
          최저{value[0]}만원
        </FindListStyle.HighNRowPrice>
        <FindListStyle.HighNRowPriceText>-</FindListStyle.HighNRowPriceText>
        <FindListStyle.HighNRowPrice>
          최고{value[1]}만원
        </FindListStyle.HighNRowPrice>
      </FindListStyle.PriceDetailContainer>
      <PeopleBox.PeopleBoxThirdComponent>
        <PeopleBox.Button
          onClick={e => {
            handleMenu(e, '');
            handleAllPrice();
          }}
        >
          적용하기
        </PeopleBox.Button>
      </PeopleBox.PeopleBoxThirdComponent>
    </FindListStyle.PriceBoxContainer>
  );
};
export default PriceBox;
