// @flow

import type { Dispatch } from 'redux';

export type Id = number;

export type Title = string;

export type Todo = {
  +id: Id,
  title: Title,
  completed: boolean
};

export type Todos = Array<Todo>;

export type TodosState = {
  +todos: Todos
};

export type fetching = boolean;

export interface iAddTodo {
  onAdd(title: Title): Dispatch
};

export interface iEditTodo {
  onDelete(id: Id): Dispatch,
  onToggle(id: Id): Dispatch,
  onEdit(id: Id, title: Title): Dispatch
};
