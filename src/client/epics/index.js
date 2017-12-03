import 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import {
  GET_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  SET_TODOS,
  REQUEST_ADD,
  REQUEST_DELETE,
  REQUEST_EDIT,
  REQUEST_TOGGLE
} from '../actions';
const state = require('../state');

function getTodos(action$) {
  return action$
    .ofType(GET_TODOS)
    .switchMap(() => {
      return ajax('/api/getTodos').map((payload) => {
        return {
          type: SET_TODOS,
          todos: payload.response
        }
      })
    })
}

function addTodo(action$) {
  return action$
    .ofType(REQUEST_ADD)
    .switchMap(({title}) => {
      return ajax({
        url: '/api/addTodo',
        headers: new window.Headers({
        	'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: {title}
      })
      .map((res) => {
        return {
          type: ADD_TODO,
          todo: res.response
        }
      })
    })
}

function deleteTodo(action$) {
  return action$
    .ofType(REQUEST_DELETE)
    .switchMap(({id}) => {
      return ajax({
        url: '/api/delTodo',
        method: 'POST',
        headers: new window.Headers({
        	'Content-Type': 'application/json'
        }),
        body: {id}
      })
      .map(() => {
        return {
          type: DELETE_TODO,
          id
        }
      })
    })
}

function editTodo(action$) {
  return action$
    .ofType(REQUEST_EDIT)
    .switchMap(({id, title}) => {
      return ajax({
        url: '/api/editTodo',
        method: 'POST',
        headers: new window.Headers({
        	'Content-Type': 'application/json'
        }),
        body: {id, title}
      });
    })
    .map((res) => {
      return {
        type: EDIT_TODO,
        todo: res.response
      };
    })
}

function toggleTodo(action$) {
  return action$
    .ofType(REQUEST_TOGGLE)
    .switchMap(({id}) => {
      return ajax({
        url: '/api/toggleTodo',
        method: 'POST',
        headers: new window.Headers({
          'Content-Type': 'application/json'
        }),
        body: {id}
      })
      .map(() => {
        return {
          type: TOGGLE_TODO,
          id
        }
      })
    })
}

export default combineEpics(
  getTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodo
);
