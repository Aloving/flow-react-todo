// @flow

import type { Todos } from './todo';

export type State = {
  todos: Todos
};

declare type ElementEventTemplate<E> = {
  target: E
} & Event;

declare type InputEvent = ElementEventTemplate<HTMLInputElement>;
