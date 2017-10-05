import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import './index.css';
import './ReactotronConfig'

const StoreInstance = new Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
   <App />
 </Provider>,
  document.getElementById('root')
);
