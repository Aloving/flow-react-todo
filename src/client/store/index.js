// @flow

import { createStore } from 'redux';

import reducer from '../reducers';
import initialState from '../state';

const store = createStore(reducer, initialState);

export default store;
