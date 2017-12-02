import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getTodos } from './actions';

import store from './store';
import App from './App';

store.subscribe(() => console.log(store.getState()))

store.dispatch(getTodos())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
