import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

  * {
    box-sizing: border-box;
    font-family: 'SpoqaHanSans', sans-serif;
  }
`;

export default GlobalStyle;
