import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'modern-normalize';
import { GlobalStyle } from 'styles/GlobalStyle';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
    <GlobalStyle />

    {/* </React.StrictMode> */}
  </>
);
