// @flow

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
} from '../actions';


import type { Todo, Todos } from '../types/todo';

type Action = Todo & {
  type: string
};

function reducer(state: Todos = [], {type, id, title}: Action) {
  switch(type) {
    case ADD_TODO:
      const todo: Todo = {
        id: state[state.length - 1].id + 1,
        title,
        completed: false
      };
      return [...state, todo];

    case DELETE_TODO:
      return state.filter((item) => item.id !== id);

    case EDIT_TODO:
      return state.map((item) => {
        if(item.id === id) {
          item.title = title;
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
