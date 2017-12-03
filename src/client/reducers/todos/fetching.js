// @flow

import {
  REQUEST_TODOS,
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  REQUEST_ADD,
  TOGGLE_TODO,
  SET_TODOS,
  REQUEST_DELETE,
  REQUEST_TOGGLE,
  REQUEST_EDIT
} from '../../actions';

import type { fetching } from '../../types/todo';

type Action = {
  type: string
}

function reducer(state: fetching = false, action: Action) {
  switch(action.type) {
    case GET_TODOS:
      return true;

    case REQUEST_ADD:
      return true;

    case REQUEST_TODOS:
      return true;

    case REQUEST_DELETE:
      return true;

    case REQUEST_TOGGLE:
      return true;

    case REQUEST_EDIT:
      return true;

    case SET_TODOS:
      return false

    case ADD_TODO:
      return false;

    case DELETE_TODO:
      return false;

    case EDIT_TODO:
      return false;

    case TOGGLE_TODO:
      return false;

    default:
      return state;
  }
}

export default reducer;
