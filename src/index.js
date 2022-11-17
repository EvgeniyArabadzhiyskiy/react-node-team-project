import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'modern-normalize/modern-normalize.css';

import { App } from 'components/App';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/wallet-project">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
