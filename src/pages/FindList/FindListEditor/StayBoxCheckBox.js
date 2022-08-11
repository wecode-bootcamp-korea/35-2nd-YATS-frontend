import React, { useState, useEffect } from 'react';
import * as FindListStyle from './StayBox.style';

const StayBoxCheckBox = ({
  stayBoxCheckedItemHandler,
  ChoiceContainerData,
  stayBoxIsAllChecked,
}) => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    stayBoxCheckedItemHandler(ChoiceContainerData.id, target.checked);
  };

  const allCheckHandler = () => setChecked(stayBoxIsAllChecked);

  useEffect(() => allCheckHandler(), [stayBoxIsAllChecked]);
  return (
    <FindListStyle.ChoiceContainer id={ChoiceContainerData.id}>
      <FindListStyle.ChoiceContainerText>
        {ChoiceContainerData.value}
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

export default StayBoxCheckBox;
