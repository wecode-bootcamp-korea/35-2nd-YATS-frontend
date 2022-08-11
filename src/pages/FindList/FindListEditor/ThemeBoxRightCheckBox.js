import React, { useState, useEffect } from 'react';
import * as FindListStyle from './StayBox.style';

const ThemeBoxRightCheckBox = ({
  // stayBoxCheckedItemHandler,
  // ChoiceContainerData,
  // stayBoxIsAllChecked,
  ChoiceContainerRightData,
  themeBoxCheckedItemHandler,
  themeBoxIsAllChecked,
}) => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    themeBoxCheckedItemHandler(ChoiceContainerRightData.id, target.checked);
  };

  const allCheckHandler = () => setChecked(themeBoxIsAllChecked);

  useEffect(() => allCheckHandler(), [themeBoxIsAllChecked]);
  return (
    <FindListStyle.ChoiceContainer id={ChoiceContainerRightData.id}>
      <FindListStyle.ChoiceContainerText>
        {ChoiceContainerRightData.value}
      </FindListStyle.ChoiceContainerText>
      <FindListStyle.ChoiceContainerCheckBox
        type="checkbox"
        checked={bChecked}
        onChange={e => {
          checkHandler(e);
        }}
      />
    </FindListStyle.ChoiceContainer>
  );
};

export default ThemeBoxRightCheckBox;
