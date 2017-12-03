import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GET_TODOS } from './actions';

import store from './store';
import App from './App';

store.subscribe(() => console.log(store.getState()))

store.dispatch({
  type: GET_TODOS
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
