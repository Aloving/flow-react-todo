// @flow

import type { Todos } from './todo';

export type TodosState = {
  fetching: boolean,
  items: Todos
}

export type State = {
  todos: TodosState
};

export type { Dispatch } from 'redux';
