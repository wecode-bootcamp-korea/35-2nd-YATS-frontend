import React, { useState } from 'react';

const Checkbox = ({ theme, input, handleCheckbox }) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label key={Math.random()} id={theme.id}>
      <input
        type="checkbox"
        id={theme.id}
        value={theme.type}
        name={input.name}
        checked={isChecked}
        onChange={e => {
          toggleCheck();
          handleCheckbox(e);
        }}
      />
      {theme.type}
    </label>
  );
};

export default Checkbox;
