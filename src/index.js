import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'modern-normalize';
import { GlobalStyle } from 'styles/GlobalStyle';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <App />
    <GlobalStyle />
    {/* </React.StrictMode> */}
  </>
);
