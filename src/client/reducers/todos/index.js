// @flow

import { combineReducers } from 'redux';

import items from './items';
import fetching from './fetching';

const reducer = combineReducers({
  items,
  fetching,
});

export default reducer;
