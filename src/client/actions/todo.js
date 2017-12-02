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


export function getTodos() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REQUEST_TODOS,
    });

    return axios.get('/api/getTodos').then(res => res.data).then(todos =>
      dispatch({
        type: GET_TODOS,
        todos,
      })
    );
  };
}

export function addTodo(title: Title) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REQUEST_TODOS
    });

    return axios
      .post('/api/addTodo', {  title })
      .then(res => {

        return res.data
      })
      .then((todo) => {
        dispatch({
          type: ADD_TODO,
          todo
        });
      })
  }
}

export function deleteTodo(id: Id) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REQUEST_TODOS
    });

    return axios.post('/api/delTodo')
      .then(todo => {
        dispatch({
          type: DELETE_TODO,
          id
        })
      });
  };
}

export function editTodo(id: Id, title: Title) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REQUEST_TODOS
    });

    return axios.post('/api/editTodo', {title, id})
      .then(res => res.data)
      .then(todo => {
        dispatch({
          type: EDIT_TODO,
          todo
        })
      });
  };
}

export function toggleTodo(id: Id) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REQUEST_TODOS
    })

    return axios
      .post('/api/toggleTodo', { id })
      .then(() => {
        dispatch({
          type: TOGGLE_TODO,
          id
        })
      })
  };
}
