// @flow

import {
  REQUEST_TODOS,
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from '../../actions';

import type { fetching } from '../../types/todo';

type Action = {
  type: string
}

function reducer(state: fetching = false, action: Action) {
  switch(action.type) {
    case GET_TODOS:
      return false;

    case ADD_TODO:
      return false;

    case DELETE_TODO:
      return false;

    case EDIT_TODO:
      return false;

    case TOGGLE_TODO:
      return false;

    case REQUEST_TODOS:
      return true;

    default:
      return state;
  }
}

export default reducer;
