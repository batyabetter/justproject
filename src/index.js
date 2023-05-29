import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalContextProvider } from './context/global';
import GlobalStyle from './Gloabalstyle';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <GlobalStyle />
    <GlobalContextProvider>
      <App/>
    </GlobalContextProvider>
  </React.StrictMode>
  </Provider>

);
