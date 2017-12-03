// @flow

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  GET_TODOS,
  SET_TODOS,
} from '../../actions';


import type { Todo, Todos } from '../../types/todo';

type Action = Todo & {
  todos?: Todos,
  todo: Todo,
  type: string
};

function reducer(state: Todos = [], {type, id, title, todos, todo}: Action) {
  switch(type) {
    case ADD_TODO:
      return [...state, todo];

    case SET_TODOS:
      return todos;

    case DELETE_TODO:
      return state.filter((item) => item.id !== id);

    case EDIT_TODO:
      return state.map((item) => {
        if(item.id === todo.id) {
          return todo;
        }

        return item;
      });

    case TOGGLE_TODO:
      return state.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }

         return item;
      });

    default:
      return state;
  }
}

export default reducer;
