// @flow

import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from '../reducers';
import rootEpic from '../epics';

const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore(reducer, applyMiddleware(epicMiddleware));

export default store;
