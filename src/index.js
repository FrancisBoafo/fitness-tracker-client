import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './components/reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main'; 

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif; 
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
