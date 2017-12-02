// @flow

import { connect } from 'react-redux';

import { editTodo, toggleTodo, deleteTodo } from '../actions';
import List from '../components/List';


import type { iEditTodo } from '../types/todo';
import type { State } from '../types';
import type { Dispatch } from '../types';

function mapStateToProps(state: State) {
  return {
    todos: state.todos.items,
    fetching: state.todos.fetching
  };
}

function mapDispatchToProps(dispatch: Dispatch): iEditTodo {
  return {
    onDelete: id => dispatch(deleteTodo(id)),
    onToggle: id => dispatch(toggleTodo(id)),
    onEdit: (id, title) => dispatch(editTodo(id, title))
  }
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
