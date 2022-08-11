import React, { useState, useEffect } from 'react';
import * as FindListStyle from './StayBox.style';

const ThemeBoxLeftCheckBox = ({
  // stayBoxCheckedItemHandler,
  // ChoiceContainerData,
  // stayBoxIsAllChecked,
  ChoiceContainerLeftData,
  // ChoiceContainerRightData,
  themeBoxCheckedItemHandler,
  themeBoxIsAllChecked,
}) => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    themeBoxCheckedItemHandler(ChoiceContainerLeftData.id, target.checked);
  };

  const allCheckHandler = () => setChecked(themeBoxIsAllChecked);

  useEffect(() => allCheckHandler(), [themeBoxIsAllChecked]);
  return (
    <FindListStyle.ChoiceContainer id={ChoiceContainerLeftData.id}>
      <FindListStyle.ChoiceContainerText>
        {ChoiceContainerLeftData.value}
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

export default ThemeBoxLeftCheckBox;
