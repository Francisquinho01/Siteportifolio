import { createGlobalStyle } from "styled-components";
import Planofundo from "./PlanoFundo/Plano.jpg";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: url(${Planofundo}) no-repeat center center;
    background-size: cover;
    background-attachment: fixed; 
  }

`;

export default GlobalStyle;