// @flow

import axios from 'axios';

import type { Dispatch } from '../types';
import type { Title, Id } from '../types/todo';

export const ADD_TODO: string = 'ADD_TODO';
export const DELETE_TODO: string = 'DELETE_TODO';
export const TOGGLE_TODO: string = 'TOGGLE_TODO';
export const EDIT_TODO: string = 'EDIT_TODO';
export const GET_TODOS: string = 'GET_TODOS';
export const REQUEST_TODOS: string = 'REQUEST_TODOS';
export const REQUEST_ADD: string = 'REQUEST_ADD';
export const SET_TODOS: string = 'SET_TODOS';
export const REQUEST_DELETE: string = 'REQUEST_DELETE';
export const REQUEST_EDIT: string = 'REQUEST_EDIT';
export const REQUEST_TOGGLE: string = 'REQUEST_TOGGLE';
