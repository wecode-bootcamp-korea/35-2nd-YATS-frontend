import React from 'react';
import styled from 'styled-components';

const ThemeText = ({ handleMenu, themeText }) => {
  return (
    <ThemeTextStyle onClick={e => handleMenu(e, '테마')}>
      {themeText}
    </ThemeTextStyle>
  );
};
export default ThemeText;

const ThemeTextStyle = styled.p``;
