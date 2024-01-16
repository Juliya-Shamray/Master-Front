import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'modern-normalize';
import { GlobalStyle } from 'styles/GlobalStyle';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { persistor, store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <React.StrictMode> */}
    <ToastContainer position="top-center" autoClose={1000} theme="light" />
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
    <GlobalStyle />

    {/* </React.StrictMode> */}
  </>
);
