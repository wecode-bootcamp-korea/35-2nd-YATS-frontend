import { createGlobalStyle } from 'styled-components';
import SpoqaHanSansNeo from './fonts/SpoqaHanSansNeo-Medium.ttf';

const GlobalFont = createGlobalStyle`
	@font-face { 
    font-family: 'SpoqaHanSans';
    src: url(${SpoqaHanSansNeo}) format('ttf');
  }
`;

export default GlobalFont;
