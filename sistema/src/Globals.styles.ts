import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: none;
}

html, body {
   position: relative;
   width: 100%;
   height: 100%;
}

html {
   background: #232527;
}
`

