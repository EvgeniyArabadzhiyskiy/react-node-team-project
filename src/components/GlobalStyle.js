import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px; /* ширина для вертикального скролла */
    height: 8px; /* высота для горизонтального скролла */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1a88716b; /* bg-color скролла */
    border-radius: 10px; /* радиус скролла */
  }

  body {
    margin: 0;
    font-family: ${p => p.theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  img{
    display: block;
    width: 100%;
    height: auto;
  }
  
`;
